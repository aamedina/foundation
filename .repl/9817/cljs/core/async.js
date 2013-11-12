// Compiled by ClojureScript 0.0-2030
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t18629 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18629 = (function (f,fn_handler,meta18630){
this.f = f;
this.fn_handler = fn_handler;
this.meta18630 = meta18630;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18629.cljs$lang$type = true;
cljs.core.async.t18629.cljs$lang$ctorStr = "cljs.core.async/t18629";
cljs.core.async.t18629.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){return cljs.core._write.call(null,writer__8176__auto__,"cljs.core.async/t18629");
});
cljs.core.async.t18629.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18629.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t18629.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t18629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18631){var self__ = this;
var _18631__$1 = this;return self__.meta18630;
});
cljs.core.async.t18629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18631,meta18630__$1){var self__ = this;
var _18631__$1 = this;return (new cljs.core.async.t18629(self__.f,self__.fn_handler,meta18630__$1));
});
cljs.core.async.__GT_t18629 = (function __GT_t18629(f__$1,fn_handler__$1,meta18630){return (new cljs.core.async.t18629(f__$1,fn_handler__$1,meta18630));
});
}
return (new cljs.core.async.t18629(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__18633 = buff;if(G__18633)
{var bit__8257__auto__ = null;if(cljs.core.truth_((function (){var or__7638__auto__ = bit__8257__auto__;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return G__18633.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__18633.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18633);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18633);
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
{var val_18634 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_18634);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_18634);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__7629__auto__ = ret;if(cljs.core.truth_(and__7629__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__7629__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8427__auto___18635 = n;var x_18636 = 0;while(true){
if((x_18636 < n__8427__auto___18635))
{(a[x_18636] = 0);
{
var G__18637 = (x_18636 + 1);
x_18636 = G__18637;
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
var G__18638 = (i + 1);
i = G__18638;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t18642 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18642 = (function (flag,alt_flag,meta18643){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18643 = meta18643;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18642.cljs$lang$type = true;
cljs.core.async.t18642.cljs$lang$ctorStr = "cljs.core.async/t18642";
cljs.core.async.t18642.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){return cljs.core._write.call(null,writer__8176__auto__,"cljs.core.async/t18642");
});
cljs.core.async.t18642.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18642.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t18642.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t18642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18644){var self__ = this;
var _18644__$1 = this;return self__.meta18643;
});
cljs.core.async.t18642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18644,meta18643__$1){var self__ = this;
var _18644__$1 = this;return (new cljs.core.async.t18642(self__.flag,self__.alt_flag,meta18643__$1));
});
cljs.core.async.__GT_t18642 = (function __GT_t18642(flag__$1,alt_flag__$1,meta18643){return (new cljs.core.async.t18642(flag__$1,alt_flag__$1,meta18643));
});
}
return (new cljs.core.async.t18642(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t18648 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18648 = (function (cb,flag,alt_handler,meta18649){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18649 = meta18649;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18648.cljs$lang$type = true;
cljs.core.async.t18648.cljs$lang$ctorStr = "cljs.core.async/t18648";
cljs.core.async.t18648.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){return cljs.core._write.call(null,writer__8176__auto__,"cljs.core.async/t18648");
});
cljs.core.async.t18648.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18648.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t18648.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t18648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18650){var self__ = this;
var _18650__$1 = this;return self__.meta18649;
});
cljs.core.async.t18648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18650,meta18649__$1){var self__ = this;
var _18650__$1 = this;return (new cljs.core.async.t18648(self__.cb,self__.flag,self__.alt_handler,meta18649__$1));
});
cljs.core.async.__GT_t18648 = (function __GT_t18648(cb__$1,flag__$1,alt_handler__$1,meta18649){return (new cljs.core.async.t18648(cb__$1,flag__$1,alt_handler__$1,meta18649));
});
}
return (new cljs.core.async.t18648(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,cljs.core.PersistentVector.fromArray([null,wport], true));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18651_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__18651_SHARP_,port], true));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,vbox),(function (){var or__7638__auto__ = wport;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return port;
}
})()], true));
} else
{{
var G__18652 = (i + 1);
i = G__18652;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7638__auto__ = ret;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__7629__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7629__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7629__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], true));
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
var alts_BANG___delegate = function (ports,p__18653){var map__18655 = p__18653;var map__18655__$1 = ((cljs.core.seq_QMARK_.call(null,map__18655))?cljs.core.apply.call(null,cljs.core.hash_map,map__18655):map__18655);var opts = map__18655__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__18653 = null;if (arguments.length > 1) {
  p__18653 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__18653);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18656){
var ports = cljs.core.first(arglist__18656);
var p__18653 = cljs.core.rest(arglist__18656);
return alts_BANG___delegate(ports,p__18653);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t18664 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18664 = (function (ch,f,map_LT_,meta18665){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18665 = meta18665;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18664.cljs$lang$type = true;
cljs.core.async.t18664.cljs$lang$ctorStr = "cljs.core.async/t18664";
cljs.core.async.t18664.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){return cljs.core._write.call(null,writer__8176__auto__,"cljs.core.async/t18664");
});
cljs.core.async.t18664.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18664.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t18664.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18664.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t18667 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18667 = (function (fn1,_,meta18665,ch,f,map_LT_,meta18668){
this.fn1 = fn1;
this._ = _;
this.meta18665 = meta18665;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18668 = meta18668;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18667.cljs$lang$type = true;
cljs.core.async.t18667.cljs$lang$ctorStr = "cljs.core.async/t18667";
cljs.core.async.t18667.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){return cljs.core._write.call(null,writer__8176__auto__,"cljs.core.async/t18667");
});
cljs.core.async.t18667.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18667.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t18667.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t18667.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__18657_SHARP_){return f1.call(null,(((p1__18657_SHARP_ == null))?null:self__.f.call(null,p1__18657_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t18667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18669){var self__ = this;
var _18669__$1 = this;return self__.meta18668;
});
cljs.core.async.t18667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18669,meta18668__$1){var self__ = this;
var _18669__$1 = this;return (new cljs.core.async.t18667(self__.fn1,self__._,self__.meta18665,self__.ch,self__.f,self__.map_LT_,meta18668__$1));
});
cljs.core.async.__GT_t18667 = (function __GT_t18667(fn1__$1,___$2,meta18665__$1,ch__$2,f__$2,map_LT___$2,meta18668){return (new cljs.core.async.t18667(fn1__$1,___$2,meta18665__$1,ch__$2,f__$2,map_LT___$2,meta18668));
});
}
return (new cljs.core.async.t18667(fn1,___$1,self__.meta18665,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7629__auto__ = ret;if(cljs.core.truth_(and__7629__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7629__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t18664.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18664.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18666){var self__ = this;
var _18666__$1 = this;return self__.meta18665;
});
cljs.core.async.t18664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18666,meta18665__$1){var self__ = this;
var _18666__$1 = this;return (new cljs.core.async.t18664(self__.ch,self__.f,self__.map_LT_,meta18665__$1));
});
cljs.core.async.__GT_t18664 = (function __GT_t18664(ch__$1,f__$1,map_LT___$1,meta18665){return (new cljs.core.async.t18664(ch__$1,f__$1,map_LT___$1,meta18665));
});
}
return (new cljs.core.async.t18664(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t18673 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18673 = (function (ch,f,map_GT_,meta18674){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta18674 = meta18674;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18673.cljs$lang$type = true;
cljs.core.async.t18673.cljs$lang$ctorStr = "cljs.core.async/t18673";
cljs.core.async.t18673.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){return cljs.core._write.call(null,writer__8176__auto__,"cljs.core.async/t18673");
});
cljs.core.async.t18673.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18673.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t18673.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18673.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t18673.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18673.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18675){var self__ = this;
var _18675__$1 = this;return self__.meta18674;
});
cljs.core.async.t18673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18675,meta18674__$1){var self__ = this;
var _18675__$1 = this;return (new cljs.core.async.t18673(self__.ch,self__.f,self__.map_GT_,meta18674__$1));
});
cljs.core.async.__GT_t18673 = (function __GT_t18673(ch__$1,f__$1,map_GT___$1,meta18674){return (new cljs.core.async.t18673(ch__$1,f__$1,map_GT___$1,meta18674));
});
}
return (new cljs.core.async.t18673(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t18679 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18679 = (function (ch,p,filter_GT_,meta18680){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta18680 = meta18680;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18679.cljs$lang$type = true;
cljs.core.async.t18679.cljs$lang$ctorStr = "cljs.core.async/t18679";
cljs.core.async.t18679.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){return cljs.core._write.call(null,writer__8176__auto__,"cljs.core.async/t18679");
});
cljs.core.async.t18679.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18679.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t18679.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18679.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t18679.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18679.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18681){var self__ = this;
var _18681__$1 = this;return self__.meta18680;
});
cljs.core.async.t18679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18681,meta18680__$1){var self__ = this;
var _18681__$1 = this;return (new cljs.core.async.t18679(self__.ch,self__.p,self__.filter_GT_,meta18680__$1));
});
cljs.core.async.__GT_t18679 = (function __GT_t18679(ch__$1,p__$1,filter_GT___$1,meta18680){return (new cljs.core.async.t18679(ch__$1,p__$1,filter_GT___$1,meta18680));
});
}
return (new cljs.core.async.t18679(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12990__auto___18764 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_18743){var state_val_18744 = (state_18743[1]);if((state_val_18744 === 1))
{var state_18743__$1 = state_18743;var statearr_18745_18765 = state_18743__$1;(statearr_18745_18765[2] = null);
(statearr_18745_18765[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18744 === 2))
{var state_18743__$1 = state_18743;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18743__$1,4,ch);
} else
{if((state_val_18744 === 3))
{var inst_18741 = (state_18743[2]);var state_18743__$1 = state_18743;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18743__$1,inst_18741);
} else
{if((state_val_18744 === 4))
{var inst_18725 = (state_18743[7]);var inst_18725__$1 = (state_18743[2]);var inst_18726 = (inst_18725__$1 == null);var state_18743__$1 = (function (){var statearr_18746 = state_18743;(statearr_18746[7] = inst_18725__$1);
return statearr_18746;
})();if(cljs.core.truth_(inst_18726))
{var statearr_18747_18766 = state_18743__$1;(statearr_18747_18766[1] = 5);
} else
{var statearr_18748_18767 = state_18743__$1;(statearr_18748_18767[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18744 === 5))
{var inst_18728 = cljs.core.async.close_BANG_.call(null,out);var state_18743__$1 = state_18743;var statearr_18749_18768 = state_18743__$1;(statearr_18749_18768[2] = inst_18728);
(statearr_18749_18768[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18744 === 6))
{var inst_18725 = (state_18743[7]);var inst_18730 = p.call(null,inst_18725);var state_18743__$1 = state_18743;if(cljs.core.truth_(inst_18730))
{var statearr_18750_18769 = state_18743__$1;(statearr_18750_18769[1] = 8);
} else
{var statearr_18751_18770 = state_18743__$1;(statearr_18751_18770[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18744 === 7))
{var inst_18739 = (state_18743[2]);var state_18743__$1 = state_18743;var statearr_18752_18771 = state_18743__$1;(statearr_18752_18771[2] = inst_18739);
(statearr_18752_18771[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18744 === 8))
{var inst_18725 = (state_18743[7]);var state_18743__$1 = state_18743;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18743__$1,11,out,inst_18725);
} else
{if((state_val_18744 === 9))
{var state_18743__$1 = state_18743;var statearr_18753_18772 = state_18743__$1;(statearr_18753_18772[2] = null);
(statearr_18753_18772[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18744 === 10))
{var inst_18736 = (state_18743[2]);var state_18743__$1 = (function (){var statearr_18754 = state_18743;(statearr_18754[8] = inst_18736);
return statearr_18754;
})();var statearr_18755_18773 = state_18743__$1;(statearr_18755_18773[2] = null);
(statearr_18755_18773[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18744 === 11))
{var inst_18733 = (state_18743[2]);var state_18743__$1 = state_18743;var statearr_18756_18774 = state_18743__$1;(statearr_18756_18774[2] = inst_18733);
(statearr_18756_18774[1] = 10);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_18760 = (new Array(9));(statearr_18760[0] = state_machine__12859__auto__);
(statearr_18760[1] = 1);
return statearr_18760;
});
var state_machine__12859__auto____1 = (function (state_18743){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_18743);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e18761){if((e18761 instanceof Object))
{var ex__12862__auto__ = e18761;var statearr_18762_18775 = state_18743;(statearr_18762_18775[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18743);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18761;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18776 = state_18743;
state_18743 = G__18776;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_18743){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_18743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_18763 = f__12991__auto__.call(null);(statearr_18763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___18764);
return statearr_18763;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12990__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_18928){var state_val_18929 = (state_18928[1]);if((state_val_18929 === 1))
{var state_18928__$1 = state_18928;var statearr_18930_18967 = state_18928__$1;(statearr_18930_18967[2] = null);
(statearr_18930_18967[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18929 === 2))
{var state_18928__$1 = state_18928;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18928__$1,4,in$);
} else
{if((state_val_18929 === 3))
{var inst_18926 = (state_18928[2]);var state_18928__$1 = state_18928;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18928__$1,inst_18926);
} else
{if((state_val_18929 === 4))
{var inst_18874 = (state_18928[7]);var inst_18874__$1 = (state_18928[2]);var inst_18875 = (inst_18874__$1 == null);var state_18928__$1 = (function (){var statearr_18931 = state_18928;(statearr_18931[7] = inst_18874__$1);
return statearr_18931;
})();if(cljs.core.truth_(inst_18875))
{var statearr_18932_18968 = state_18928__$1;(statearr_18932_18968[1] = 5);
} else
{var statearr_18933_18969 = state_18928__$1;(statearr_18933_18969[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18929 === 5))
{var inst_18877 = cljs.core.async.close_BANG_.call(null,out);var state_18928__$1 = state_18928;var statearr_18934_18970 = state_18928__$1;(statearr_18934_18970[2] = inst_18877);
(statearr_18934_18970[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18929 === 6))
{var inst_18874 = (state_18928[7]);var inst_18879 = f.call(null,inst_18874);var inst_18884 = cljs.core.seq.call(null,inst_18879);var inst_18885 = inst_18884;var inst_18886 = null;var inst_18887 = 0;var inst_18888 = 0;var state_18928__$1 = (function (){var statearr_18935 = state_18928;(statearr_18935[8] = inst_18886);
(statearr_18935[9] = inst_18887);
(statearr_18935[10] = inst_18885);
(statearr_18935[11] = inst_18888);
return statearr_18935;
})();var statearr_18936_18971 = state_18928__$1;(statearr_18936_18971[2] = null);
(statearr_18936_18971[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18929 === 7))
{var inst_18924 = (state_18928[2]);var state_18928__$1 = state_18928;var statearr_18937_18972 = state_18928__$1;(statearr_18937_18972[2] = inst_18924);
(statearr_18937_18972[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18929 === 8))
{var inst_18887 = (state_18928[9]);var inst_18888 = (state_18928[11]);var inst_18890 = (inst_18888 < inst_18887);var inst_18891 = inst_18890;var state_18928__$1 = state_18928;if(cljs.core.truth_(inst_18891))
{var statearr_18938_18973 = state_18928__$1;(statearr_18938_18973[1] = 10);
} else
{var statearr_18939_18974 = state_18928__$1;(statearr_18939_18974[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18929 === 9))
{var inst_18921 = (state_18928[2]);var state_18928__$1 = (function (){var statearr_18940 = state_18928;(statearr_18940[12] = inst_18921);
return statearr_18940;
})();var statearr_18941_18975 = state_18928__$1;(statearr_18941_18975[2] = null);
(statearr_18941_18975[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18929 === 10))
{var inst_18886 = (state_18928[8]);var inst_18888 = (state_18928[11]);var inst_18893 = cljs.core._nth.call(null,inst_18886,inst_18888);var state_18928__$1 = state_18928;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18928__$1,13,out,inst_18893);
} else
{if((state_val_18929 === 11))
{var inst_18885 = (state_18928[10]);var inst_18899 = (state_18928[13]);var inst_18899__$1 = cljs.core.seq.call(null,inst_18885);var state_18928__$1 = (function (){var statearr_18945 = state_18928;(statearr_18945[13] = inst_18899__$1);
return statearr_18945;
})();if(inst_18899__$1)
{var statearr_18946_18976 = state_18928__$1;(statearr_18946_18976[1] = 14);
} else
{var statearr_18947_18977 = state_18928__$1;(statearr_18947_18977[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18929 === 12))
{var inst_18919 = (state_18928[2]);var state_18928__$1 = state_18928;var statearr_18948_18978 = state_18928__$1;(statearr_18948_18978[2] = inst_18919);
(statearr_18948_18978[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18929 === 13))
{var inst_18886 = (state_18928[8]);var inst_18887 = (state_18928[9]);var inst_18885 = (state_18928[10]);var inst_18888 = (state_18928[11]);var inst_18895 = (state_18928[2]);var inst_18896 = (inst_18888 + 1);var tmp18942 = inst_18886;var tmp18943 = inst_18887;var tmp18944 = inst_18885;var inst_18885__$1 = tmp18944;var inst_18886__$1 = tmp18942;var inst_18887__$1 = tmp18943;var inst_18888__$1 = inst_18896;var state_18928__$1 = (function (){var statearr_18949 = state_18928;(statearr_18949[8] = inst_18886__$1);
(statearr_18949[9] = inst_18887__$1);
(statearr_18949[10] = inst_18885__$1);
(statearr_18949[14] = inst_18895);
(statearr_18949[11] = inst_18888__$1);
return statearr_18949;
})();var statearr_18950_18979 = state_18928__$1;(statearr_18950_18979[2] = null);
(statearr_18950_18979[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18929 === 14))
{var inst_18899 = (state_18928[13]);var inst_18901 = cljs.core.chunked_seq_QMARK_.call(null,inst_18899);var state_18928__$1 = state_18928;if(inst_18901)
{var statearr_18951_18980 = state_18928__$1;(statearr_18951_18980[1] = 17);
} else
{var statearr_18952_18981 = state_18928__$1;(statearr_18952_18981[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18929 === 15))
{var state_18928__$1 = state_18928;var statearr_18953_18982 = state_18928__$1;(statearr_18953_18982[2] = null);
(statearr_18953_18982[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18929 === 16))
{var inst_18917 = (state_18928[2]);var state_18928__$1 = state_18928;var statearr_18954_18983 = state_18928__$1;(statearr_18954_18983[2] = inst_18917);
(statearr_18954_18983[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18929 === 17))
{var inst_18899 = (state_18928[13]);var inst_18903 = cljs.core.chunk_first.call(null,inst_18899);var inst_18904 = cljs.core.chunk_rest.call(null,inst_18899);var inst_18905 = cljs.core.count.call(null,inst_18903);var inst_18885 = inst_18904;var inst_18886 = inst_18903;var inst_18887 = inst_18905;var inst_18888 = 0;var state_18928__$1 = (function (){var statearr_18955 = state_18928;(statearr_18955[8] = inst_18886);
(statearr_18955[9] = inst_18887);
(statearr_18955[10] = inst_18885);
(statearr_18955[11] = inst_18888);
return statearr_18955;
})();var statearr_18956_18984 = state_18928__$1;(statearr_18956_18984[2] = null);
(statearr_18956_18984[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18929 === 18))
{var inst_18899 = (state_18928[13]);var inst_18908 = cljs.core.first.call(null,inst_18899);var state_18928__$1 = state_18928;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18928__$1,20,out,inst_18908);
} else
{if((state_val_18929 === 19))
{var inst_18914 = (state_18928[2]);var state_18928__$1 = state_18928;var statearr_18957_18985 = state_18928__$1;(statearr_18957_18985[2] = inst_18914);
(statearr_18957_18985[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18929 === 20))
{var inst_18899 = (state_18928[13]);var inst_18910 = (state_18928[2]);var inst_18911 = cljs.core.next.call(null,inst_18899);var inst_18885 = inst_18911;var inst_18886 = null;var inst_18887 = 0;var inst_18888 = 0;var state_18928__$1 = (function (){var statearr_18958 = state_18928;(statearr_18958[8] = inst_18886);
(statearr_18958[9] = inst_18887);
(statearr_18958[10] = inst_18885);
(statearr_18958[11] = inst_18888);
(statearr_18958[15] = inst_18910);
return statearr_18958;
})();var statearr_18959_18986 = state_18928__$1;(statearr_18959_18986[2] = null);
(statearr_18959_18986[1] = 8);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_18963 = (new Array(16));(statearr_18963[0] = state_machine__12859__auto__);
(statearr_18963[1] = 1);
return statearr_18963;
});
var state_machine__12859__auto____1 = (function (state_18928){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_18928);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e18964){if((e18964 instanceof Object))
{var ex__12862__auto__ = e18964;var statearr_18965_18987 = state_18928;(statearr_18965_18987[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18928);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18964;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18988 = state_18928;
state_18928 = G__18988;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_18928){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_18928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_18966 = f__12991__auto__.call(null);(statearr_18966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto__);
return statearr_18966;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
}));
return c__12990__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12990__auto___19069 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_19048){var state_val_19049 = (state_19048[1]);if((state_val_19049 === 1))
{var state_19048__$1 = state_19048;var statearr_19050_19070 = state_19048__$1;(statearr_19050_19070[2] = null);
(statearr_19050_19070[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19049 === 2))
{var state_19048__$1 = state_19048;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19048__$1,4,from);
} else
{if((state_val_19049 === 3))
{var inst_19046 = (state_19048[2]);var state_19048__$1 = state_19048;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19048__$1,inst_19046);
} else
{if((state_val_19049 === 4))
{var inst_19031 = (state_19048[7]);var inst_19031__$1 = (state_19048[2]);var inst_19032 = (inst_19031__$1 == null);var state_19048__$1 = (function (){var statearr_19051 = state_19048;(statearr_19051[7] = inst_19031__$1);
return statearr_19051;
})();if(cljs.core.truth_(inst_19032))
{var statearr_19052_19071 = state_19048__$1;(statearr_19052_19071[1] = 5);
} else
{var statearr_19053_19072 = state_19048__$1;(statearr_19053_19072[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19049 === 5))
{var state_19048__$1 = state_19048;if(cljs.core.truth_(close_QMARK_))
{var statearr_19054_19073 = state_19048__$1;(statearr_19054_19073[1] = 8);
} else
{var statearr_19055_19074 = state_19048__$1;(statearr_19055_19074[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19049 === 6))
{var inst_19031 = (state_19048[7]);var state_19048__$1 = state_19048;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19048__$1,11,to,inst_19031);
} else
{if((state_val_19049 === 7))
{var inst_19044 = (state_19048[2]);var state_19048__$1 = state_19048;var statearr_19056_19075 = state_19048__$1;(statearr_19056_19075[2] = inst_19044);
(statearr_19056_19075[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19049 === 8))
{var inst_19035 = cljs.core.async.close_BANG_.call(null,to);var state_19048__$1 = state_19048;var statearr_19057_19076 = state_19048__$1;(statearr_19057_19076[2] = inst_19035);
(statearr_19057_19076[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19049 === 9))
{var state_19048__$1 = state_19048;var statearr_19058_19077 = state_19048__$1;(statearr_19058_19077[2] = null);
(statearr_19058_19077[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19049 === 10))
{var inst_19038 = (state_19048[2]);var state_19048__$1 = state_19048;var statearr_19059_19078 = state_19048__$1;(statearr_19059_19078[2] = inst_19038);
(statearr_19059_19078[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19049 === 11))
{var inst_19041 = (state_19048[2]);var state_19048__$1 = (function (){var statearr_19060 = state_19048;(statearr_19060[8] = inst_19041);
return statearr_19060;
})();var statearr_19061_19079 = state_19048__$1;(statearr_19061_19079[2] = null);
(statearr_19061_19079[1] = 2);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_19065 = (new Array(9));(statearr_19065[0] = state_machine__12859__auto__);
(statearr_19065[1] = 1);
return statearr_19065;
});
var state_machine__12859__auto____1 = (function (state_19048){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_19048);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e19066){if((e19066 instanceof Object))
{var ex__12862__auto__ = e19066;var statearr_19067_19080 = state_19048;(statearr_19067_19080[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19048);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19066;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19081 = state_19048;
state_19048 = G__19081;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_19048){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_19048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_19068 = f__12991__auto__.call(null);(statearr_19068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___19069);
return statearr_19068;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12990__auto___19168 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_19146){var state_val_19147 = (state_19146[1]);if((state_val_19147 === 1))
{var state_19146__$1 = state_19146;var statearr_19148_19169 = state_19146__$1;(statearr_19148_19169[2] = null);
(statearr_19148_19169[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19147 === 2))
{var state_19146__$1 = state_19146;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19146__$1,4,ch);
} else
{if((state_val_19147 === 3))
{var inst_19144 = (state_19146[2]);var state_19146__$1 = state_19146;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19146__$1,inst_19144);
} else
{if((state_val_19147 === 4))
{var inst_19127 = (state_19146[7]);var inst_19127__$1 = (state_19146[2]);var inst_19128 = (inst_19127__$1 == null);var state_19146__$1 = (function (){var statearr_19149 = state_19146;(statearr_19149[7] = inst_19127__$1);
return statearr_19149;
})();if(cljs.core.truth_(inst_19128))
{var statearr_19150_19170 = state_19146__$1;(statearr_19150_19170[1] = 5);
} else
{var statearr_19151_19171 = state_19146__$1;(statearr_19151_19171[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19147 === 5))
{var inst_19130 = cljs.core.async.close_BANG_.call(null,tc);var inst_19131 = cljs.core.async.close_BANG_.call(null,fc);var state_19146__$1 = (function (){var statearr_19152 = state_19146;(statearr_19152[8] = inst_19130);
return statearr_19152;
})();var statearr_19153_19172 = state_19146__$1;(statearr_19153_19172[2] = inst_19131);
(statearr_19153_19172[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19147 === 6))
{var inst_19127 = (state_19146[7]);var inst_19133 = p.call(null,inst_19127);var state_19146__$1 = state_19146;if(cljs.core.truth_(inst_19133))
{var statearr_19154_19173 = state_19146__$1;(statearr_19154_19173[1] = 9);
} else
{var statearr_19155_19174 = state_19146__$1;(statearr_19155_19174[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19147 === 7))
{var inst_19142 = (state_19146[2]);var state_19146__$1 = state_19146;var statearr_19156_19175 = state_19146__$1;(statearr_19156_19175[2] = inst_19142);
(statearr_19156_19175[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19147 === 8))
{var inst_19139 = (state_19146[2]);var state_19146__$1 = (function (){var statearr_19157 = state_19146;(statearr_19157[9] = inst_19139);
return statearr_19157;
})();var statearr_19158_19176 = state_19146__$1;(statearr_19158_19176[2] = null);
(statearr_19158_19176[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19147 === 9))
{var state_19146__$1 = state_19146;var statearr_19159_19177 = state_19146__$1;(statearr_19159_19177[2] = tc);
(statearr_19159_19177[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19147 === 10))
{var state_19146__$1 = state_19146;var statearr_19160_19178 = state_19146__$1;(statearr_19160_19178[2] = fc);
(statearr_19160_19178[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19147 === 11))
{var inst_19127 = (state_19146[7]);var inst_19137 = (state_19146[2]);var state_19146__$1 = state_19146;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19146__$1,8,inst_19137,inst_19127);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_19164 = (new Array(10));(statearr_19164[0] = state_machine__12859__auto__);
(statearr_19164[1] = 1);
return statearr_19164;
});
var state_machine__12859__auto____1 = (function (state_19146){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_19146);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e19165){if((e19165 instanceof Object))
{var ex__12862__auto__ = e19165;var statearr_19166_19179 = state_19146;(statearr_19166_19179[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19146);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19165;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19180 = state_19146;
state_19146 = G__19180;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_19146){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_19146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_19167 = f__12991__auto__.call(null);(statearr_19167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___19168);
return statearr_19167;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
}));
return cljs.core.PersistentVector.fromArray([tc,fc], true);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12990__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_19227){var state_val_19228 = (state_19227[1]);if((state_val_19228 === 7))
{var inst_19223 = (state_19227[2]);var state_19227__$1 = state_19227;var statearr_19229_19245 = state_19227__$1;(statearr_19229_19245[2] = inst_19223);
(statearr_19229_19245[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19228 === 6))
{var inst_19216 = (state_19227[7]);var inst_19213 = (state_19227[8]);var inst_19220 = f.call(null,inst_19213,inst_19216);var inst_19213__$1 = inst_19220;var state_19227__$1 = (function (){var statearr_19230 = state_19227;(statearr_19230[8] = inst_19213__$1);
return statearr_19230;
})();var statearr_19231_19246 = state_19227__$1;(statearr_19231_19246[2] = null);
(statearr_19231_19246[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19228 === 5))
{var inst_19213 = (state_19227[8]);var state_19227__$1 = state_19227;var statearr_19232_19247 = state_19227__$1;(statearr_19232_19247[2] = inst_19213);
(statearr_19232_19247[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19228 === 4))
{var inst_19216 = (state_19227[7]);var inst_19216__$1 = (state_19227[2]);var inst_19217 = (inst_19216__$1 == null);var state_19227__$1 = (function (){var statearr_19233 = state_19227;(statearr_19233[7] = inst_19216__$1);
return statearr_19233;
})();if(cljs.core.truth_(inst_19217))
{var statearr_19234_19248 = state_19227__$1;(statearr_19234_19248[1] = 5);
} else
{var statearr_19235_19249 = state_19227__$1;(statearr_19235_19249[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19228 === 3))
{var inst_19225 = (state_19227[2]);var state_19227__$1 = state_19227;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19227__$1,inst_19225);
} else
{if((state_val_19228 === 2))
{var state_19227__$1 = state_19227;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19227__$1,4,ch);
} else
{if((state_val_19228 === 1))
{var inst_19213 = init;var state_19227__$1 = (function (){var statearr_19236 = state_19227;(statearr_19236[8] = inst_19213);
return statearr_19236;
})();var statearr_19237_19250 = state_19227__$1;(statearr_19237_19250[2] = null);
(statearr_19237_19250[1] = 2);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_19241 = (new Array(9));(statearr_19241[0] = state_machine__12859__auto__);
(statearr_19241[1] = 1);
return statearr_19241;
});
var state_machine__12859__auto____1 = (function (state_19227){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_19227);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e19242){if((e19242 instanceof Object))
{var ex__12862__auto__ = e19242;var statearr_19243_19251 = state_19227;(statearr_19243_19251[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19227);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19242;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19252 = state_19227;
state_19227 = G__19252;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_19227){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_19227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_19244 = f__12991__auto__.call(null);(statearr_19244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto__);
return statearr_19244;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
}));
return c__12990__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12990__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_19314){var state_val_19315 = (state_19314[1]);if((state_val_19315 === 1))
{var inst_19294 = cljs.core.seq.call(null,coll);var inst_19295 = inst_19294;var state_19314__$1 = (function (){var statearr_19316 = state_19314;(statearr_19316[7] = inst_19295);
return statearr_19316;
})();var statearr_19317_19335 = state_19314__$1;(statearr_19317_19335[2] = null);
(statearr_19317_19335[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 2))
{var inst_19295 = (state_19314[7]);var state_19314__$1 = state_19314;if(cljs.core.truth_(inst_19295))
{var statearr_19318_19336 = state_19314__$1;(statearr_19318_19336[1] = 4);
} else
{var statearr_19319_19337 = state_19314__$1;(statearr_19319_19337[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 3))
{var inst_19312 = (state_19314[2]);var state_19314__$1 = state_19314;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19314__$1,inst_19312);
} else
{if((state_val_19315 === 4))
{var inst_19295 = (state_19314[7]);var inst_19298 = cljs.core.first.call(null,inst_19295);var state_19314__$1 = state_19314;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19314__$1,7,ch,inst_19298);
} else
{if((state_val_19315 === 5))
{var state_19314__$1 = state_19314;if(cljs.core.truth_(close_QMARK_))
{var statearr_19320_19338 = state_19314__$1;(statearr_19320_19338[1] = 8);
} else
{var statearr_19321_19339 = state_19314__$1;(statearr_19321_19339[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 6))
{var inst_19310 = (state_19314[2]);var state_19314__$1 = state_19314;var statearr_19322_19340 = state_19314__$1;(statearr_19322_19340[2] = inst_19310);
(statearr_19322_19340[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 7))
{var inst_19295 = (state_19314[7]);var inst_19300 = (state_19314[2]);var inst_19301 = cljs.core.next.call(null,inst_19295);var inst_19295__$1 = inst_19301;var state_19314__$1 = (function (){var statearr_19323 = state_19314;(statearr_19323[8] = inst_19300);
(statearr_19323[7] = inst_19295__$1);
return statearr_19323;
})();var statearr_19324_19341 = state_19314__$1;(statearr_19324_19341[2] = null);
(statearr_19324_19341[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 8))
{var inst_19305 = cljs.core.async.close_BANG_.call(null,ch);var state_19314__$1 = state_19314;var statearr_19325_19342 = state_19314__$1;(statearr_19325_19342[2] = inst_19305);
(statearr_19325_19342[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 9))
{var state_19314__$1 = state_19314;var statearr_19326_19343 = state_19314__$1;(statearr_19326_19343[2] = null);
(statearr_19326_19343[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 10))
{var inst_19308 = (state_19314[2]);var state_19314__$1 = state_19314;var statearr_19327_19344 = state_19314__$1;(statearr_19327_19344[2] = inst_19308);
(statearr_19327_19344[1] = 6);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_19331 = (new Array(9));(statearr_19331[0] = state_machine__12859__auto__);
(statearr_19331[1] = 1);
return statearr_19331;
});
var state_machine__12859__auto____1 = (function (state_19314){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_19314);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e19332){if((e19332 instanceof Object))
{var ex__12862__auto__ = e19332;var statearr_19333_19345 = state_19314;(statearr_19333_19345[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19314);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19332;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19346 = state_19314;
state_19314 = G__19346;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_19314){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_19314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_19334 = f__12991__auto__.call(null);(statearr_19334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto__);
return statearr_19334;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
}));
return c__12990__auto__;
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
cljs.core.async.Mux = {};
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7629__auto__ = _;if(and__7629__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7629__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8234__auto__ = (((_ == null))?null:_);return (function (){var or__7638__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = {};
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7629__auto__ = m;if(and__7629__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7629__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8234__auto__ = (((m == null))?null:m);return (function (){var or__7638__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7629__auto__ = m;if(and__7629__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7629__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8234__auto__ = (((m == null))?null:m);return (function (){var or__7638__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7629__auto__ = m;if(and__7629__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7629__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8234__auto__ = (((m == null))?null:m);return (function (){var or__7638__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t19561 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19561 = (function (cs,ch,mult,meta19562){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19562 = meta19562;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19561.cljs$lang$type = true;
cljs.core.async.t19561.cljs$lang$ctorStr = "cljs.core.async/t19561";
cljs.core.async.t19561.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){return cljs.core._write.call(null,writer__8176__auto__,"cljs.core.async/t19561");
});})(cs))
;
cljs.core.async.t19561.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t19561.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t19561.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t19561.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t19561.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19561.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t19561.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19563){var self__ = this;
var _19563__$1 = this;return self__.meta19562;
});})(cs))
;
cljs.core.async.t19561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19563,meta19562__$1){var self__ = this;
var _19563__$1 = this;return (new cljs.core.async.t19561(self__.cs,self__.ch,self__.mult,meta19562__$1));
});})(cs))
;
cljs.core.async.__GT_t19561 = ((function (cs){
return (function __GT_t19561(cs__$1,ch__$1,mult__$1,meta19562){return (new cljs.core.async.t19561(cs__$1,ch__$1,mult__$1,meta19562));
});})(cs))
;
}
return (new cljs.core.async.t19561(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12990__auto___19775 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_19693){var state_val_19694 = (state_19693[1]);if((state_val_19694 === 32))
{var inst_19566 = (state_19693[7]);var inst_19642 = (state_19693[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19693,31,Object,null,30);var inst_19649 = cljs.core.async.put_BANG_.call(null,inst_19642,inst_19566,done);var state_19693__$1 = state_19693;var statearr_19695_19776 = state_19693__$1;(statearr_19695_19776[2] = inst_19649);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19693__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 1))
{var state_19693__$1 = state_19693;var statearr_19696_19777 = state_19693__$1;(statearr_19696_19777[2] = null);
(statearr_19696_19777[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 33))
{var inst_19655 = (state_19693[9]);var inst_19657 = cljs.core.chunked_seq_QMARK_.call(null,inst_19655);var state_19693__$1 = state_19693;if(inst_19657)
{var statearr_19697_19778 = state_19693__$1;(statearr_19697_19778[1] = 36);
} else
{var statearr_19698_19779 = state_19693__$1;(statearr_19698_19779[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 2))
{var state_19693__$1 = state_19693;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19693__$1,4,ch);
} else
{if((state_val_19694 === 34))
{var state_19693__$1 = state_19693;var statearr_19699_19780 = state_19693__$1;(statearr_19699_19780[2] = null);
(statearr_19699_19780[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 3))
{var inst_19691 = (state_19693[2]);var state_19693__$1 = state_19693;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19693__$1,inst_19691);
} else
{if((state_val_19694 === 35))
{var inst_19680 = (state_19693[2]);var state_19693__$1 = state_19693;var statearr_19700_19781 = state_19693__$1;(statearr_19700_19781[2] = inst_19680);
(statearr_19700_19781[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 4))
{var inst_19566 = (state_19693[7]);var inst_19566__$1 = (state_19693[2]);var inst_19567 = (inst_19566__$1 == null);var state_19693__$1 = (function (){var statearr_19701 = state_19693;(statearr_19701[7] = inst_19566__$1);
return statearr_19701;
})();if(cljs.core.truth_(inst_19567))
{var statearr_19702_19782 = state_19693__$1;(statearr_19702_19782[1] = 5);
} else
{var statearr_19703_19783 = state_19693__$1;(statearr_19703_19783[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 36))
{var inst_19655 = (state_19693[9]);var inst_19659 = cljs.core.chunk_first.call(null,inst_19655);var inst_19660 = cljs.core.chunk_rest.call(null,inst_19655);var inst_19661 = cljs.core.count.call(null,inst_19659);var inst_19634 = inst_19660;var inst_19635 = inst_19659;var inst_19636 = inst_19661;var inst_19637 = 0;var state_19693__$1 = (function (){var statearr_19704 = state_19693;(statearr_19704[10] = inst_19634);
(statearr_19704[11] = inst_19635);
(statearr_19704[12] = inst_19637);
(statearr_19704[13] = inst_19636);
return statearr_19704;
})();var statearr_19705_19784 = state_19693__$1;(statearr_19705_19784[2] = null);
(statearr_19705_19784[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 5))
{var inst_19573 = cljs.core.deref.call(null,cs);var inst_19574 = cljs.core.seq.call(null,inst_19573);var inst_19575 = inst_19574;var inst_19576 = null;var inst_19577 = 0;var inst_19578 = 0;var state_19693__$1 = (function (){var statearr_19706 = state_19693;(statearr_19706[14] = inst_19577);
(statearr_19706[15] = inst_19578);
(statearr_19706[16] = inst_19576);
(statearr_19706[17] = inst_19575);
return statearr_19706;
})();var statearr_19707_19785 = state_19693__$1;(statearr_19707_19785[2] = null);
(statearr_19707_19785[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 37))
{var inst_19655 = (state_19693[9]);var inst_19664 = cljs.core.first.call(null,inst_19655);var state_19693__$1 = (function (){var statearr_19708 = state_19693;(statearr_19708[18] = inst_19664);
return statearr_19708;
})();var statearr_19709_19786 = state_19693__$1;(statearr_19709_19786[2] = null);
(statearr_19709_19786[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 6))
{var inst_19625 = cljs.core.deref.call(null,cs);var inst_19626 = cljs.core.keys.call(null,inst_19625);var inst_19627 = cljs.core.count.call(null,inst_19626);var inst_19628 = cljs.core.reset_BANG_.call(null,dctr,inst_19627);var inst_19633 = cljs.core.seq.call(null,inst_19626);var inst_19634 = inst_19633;var inst_19635 = null;var inst_19636 = 0;var inst_19637 = 0;var state_19693__$1 = (function (){var statearr_19710 = state_19693;(statearr_19710[19] = inst_19628);
(statearr_19710[10] = inst_19634);
(statearr_19710[11] = inst_19635);
(statearr_19710[12] = inst_19637);
(statearr_19710[13] = inst_19636);
return statearr_19710;
})();var statearr_19711_19787 = state_19693__$1;(statearr_19711_19787[2] = null);
(statearr_19711_19787[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 38))
{var inst_19677 = (state_19693[2]);var state_19693__$1 = state_19693;var statearr_19712_19788 = state_19693__$1;(statearr_19712_19788[2] = inst_19677);
(statearr_19712_19788[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 7))
{var inst_19689 = (state_19693[2]);var state_19693__$1 = state_19693;var statearr_19713_19789 = state_19693__$1;(statearr_19713_19789[2] = inst_19689);
(statearr_19713_19789[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 39))
{var inst_19655 = (state_19693[9]);var inst_19673 = (state_19693[2]);var inst_19674 = cljs.core.next.call(null,inst_19655);var inst_19634 = inst_19674;var inst_19635 = null;var inst_19636 = 0;var inst_19637 = 0;var state_19693__$1 = (function (){var statearr_19714 = state_19693;(statearr_19714[10] = inst_19634);
(statearr_19714[11] = inst_19635);
(statearr_19714[20] = inst_19673);
(statearr_19714[12] = inst_19637);
(statearr_19714[13] = inst_19636);
return statearr_19714;
})();var statearr_19715_19790 = state_19693__$1;(statearr_19715_19790[2] = null);
(statearr_19715_19790[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 8))
{var inst_19577 = (state_19693[14]);var inst_19578 = (state_19693[15]);var inst_19580 = (inst_19578 < inst_19577);var inst_19581 = inst_19580;var state_19693__$1 = state_19693;if(cljs.core.truth_(inst_19581))
{var statearr_19716_19791 = state_19693__$1;(statearr_19716_19791[1] = 10);
} else
{var statearr_19717_19792 = state_19693__$1;(statearr_19717_19792[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 40))
{var inst_19664 = (state_19693[18]);var inst_19665 = (state_19693[2]);var inst_19666 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_19667 = cljs.core.async.untap_STAR_.call(null,m,inst_19664);var state_19693__$1 = (function (){var statearr_19718 = state_19693;(statearr_19718[21] = inst_19665);
(statearr_19718[22] = inst_19666);
return statearr_19718;
})();var statearr_19719_19793 = state_19693__$1;(statearr_19719_19793[2] = inst_19667);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19693__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 9))
{var inst_19623 = (state_19693[2]);var state_19693__$1 = state_19693;var statearr_19720_19794 = state_19693__$1;(statearr_19720_19794[2] = inst_19623);
(statearr_19720_19794[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 41))
{var inst_19664 = (state_19693[18]);var inst_19566 = (state_19693[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19693,40,Object,null,39);var inst_19671 = cljs.core.async.put_BANG_.call(null,inst_19664,inst_19566,done);var state_19693__$1 = state_19693;var statearr_19721_19795 = state_19693__$1;(statearr_19721_19795[2] = inst_19671);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19693__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 10))
{var inst_19578 = (state_19693[15]);var inst_19576 = (state_19693[16]);var inst_19584 = cljs.core._nth.call(null,inst_19576,inst_19578);var inst_19585 = cljs.core.nth.call(null,inst_19584,0,null);var inst_19586 = cljs.core.nth.call(null,inst_19584,1,null);var state_19693__$1 = (function (){var statearr_19722 = state_19693;(statearr_19722[23] = inst_19585);
return statearr_19722;
})();if(cljs.core.truth_(inst_19586))
{var statearr_19723_19796 = state_19693__$1;(statearr_19723_19796[1] = 13);
} else
{var statearr_19724_19797 = state_19693__$1;(statearr_19724_19797[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 42))
{var inst_19686 = (state_19693[2]);var state_19693__$1 = (function (){var statearr_19725 = state_19693;(statearr_19725[24] = inst_19686);
return statearr_19725;
})();var statearr_19726_19798 = state_19693__$1;(statearr_19726_19798[2] = null);
(statearr_19726_19798[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 11))
{var inst_19575 = (state_19693[17]);var inst_19595 = (state_19693[25]);var inst_19595__$1 = cljs.core.seq.call(null,inst_19575);var state_19693__$1 = (function (){var statearr_19727 = state_19693;(statearr_19727[25] = inst_19595__$1);
return statearr_19727;
})();if(inst_19595__$1)
{var statearr_19728_19799 = state_19693__$1;(statearr_19728_19799[1] = 16);
} else
{var statearr_19729_19800 = state_19693__$1;(statearr_19729_19800[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 12))
{var inst_19621 = (state_19693[2]);var state_19693__$1 = state_19693;var statearr_19730_19801 = state_19693__$1;(statearr_19730_19801[2] = inst_19621);
(statearr_19730_19801[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 13))
{var inst_19585 = (state_19693[23]);var inst_19588 = cljs.core.async.close_BANG_.call(null,inst_19585);var state_19693__$1 = state_19693;var statearr_19734_19802 = state_19693__$1;(statearr_19734_19802[2] = inst_19588);
(statearr_19734_19802[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 14))
{var state_19693__$1 = state_19693;var statearr_19735_19803 = state_19693__$1;(statearr_19735_19803[2] = null);
(statearr_19735_19803[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 15))
{var inst_19577 = (state_19693[14]);var inst_19578 = (state_19693[15]);var inst_19576 = (state_19693[16]);var inst_19575 = (state_19693[17]);var inst_19591 = (state_19693[2]);var inst_19592 = (inst_19578 + 1);var tmp19731 = inst_19577;var tmp19732 = inst_19576;var tmp19733 = inst_19575;var inst_19575__$1 = tmp19733;var inst_19576__$1 = tmp19732;var inst_19577__$1 = tmp19731;var inst_19578__$1 = inst_19592;var state_19693__$1 = (function (){var statearr_19736 = state_19693;(statearr_19736[14] = inst_19577__$1);
(statearr_19736[15] = inst_19578__$1);
(statearr_19736[16] = inst_19576__$1);
(statearr_19736[17] = inst_19575__$1);
(statearr_19736[26] = inst_19591);
return statearr_19736;
})();var statearr_19737_19804 = state_19693__$1;(statearr_19737_19804[2] = null);
(statearr_19737_19804[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 16))
{var inst_19595 = (state_19693[25]);var inst_19597 = cljs.core.chunked_seq_QMARK_.call(null,inst_19595);var state_19693__$1 = state_19693;if(inst_19597)
{var statearr_19738_19805 = state_19693__$1;(statearr_19738_19805[1] = 19);
} else
{var statearr_19739_19806 = state_19693__$1;(statearr_19739_19806[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 17))
{var state_19693__$1 = state_19693;var statearr_19740_19807 = state_19693__$1;(statearr_19740_19807[2] = null);
(statearr_19740_19807[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 18))
{var inst_19619 = (state_19693[2]);var state_19693__$1 = state_19693;var statearr_19741_19808 = state_19693__$1;(statearr_19741_19808[2] = inst_19619);
(statearr_19741_19808[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 19))
{var inst_19595 = (state_19693[25]);var inst_19599 = cljs.core.chunk_first.call(null,inst_19595);var inst_19600 = cljs.core.chunk_rest.call(null,inst_19595);var inst_19601 = cljs.core.count.call(null,inst_19599);var inst_19575 = inst_19600;var inst_19576 = inst_19599;var inst_19577 = inst_19601;var inst_19578 = 0;var state_19693__$1 = (function (){var statearr_19742 = state_19693;(statearr_19742[14] = inst_19577);
(statearr_19742[15] = inst_19578);
(statearr_19742[16] = inst_19576);
(statearr_19742[17] = inst_19575);
return statearr_19742;
})();var statearr_19743_19809 = state_19693__$1;(statearr_19743_19809[2] = null);
(statearr_19743_19809[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 20))
{var inst_19595 = (state_19693[25]);var inst_19605 = cljs.core.first.call(null,inst_19595);var inst_19606 = cljs.core.nth.call(null,inst_19605,0,null);var inst_19607 = cljs.core.nth.call(null,inst_19605,1,null);var state_19693__$1 = (function (){var statearr_19744 = state_19693;(statearr_19744[27] = inst_19606);
return statearr_19744;
})();if(cljs.core.truth_(inst_19607))
{var statearr_19745_19810 = state_19693__$1;(statearr_19745_19810[1] = 22);
} else
{var statearr_19746_19811 = state_19693__$1;(statearr_19746_19811[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 21))
{var inst_19616 = (state_19693[2]);var state_19693__$1 = state_19693;var statearr_19747_19812 = state_19693__$1;(statearr_19747_19812[2] = inst_19616);
(statearr_19747_19812[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 22))
{var inst_19606 = (state_19693[27]);var inst_19609 = cljs.core.async.close_BANG_.call(null,inst_19606);var state_19693__$1 = state_19693;var statearr_19748_19813 = state_19693__$1;(statearr_19748_19813[2] = inst_19609);
(statearr_19748_19813[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 23))
{var state_19693__$1 = state_19693;var statearr_19749_19814 = state_19693__$1;(statearr_19749_19814[2] = null);
(statearr_19749_19814[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 24))
{var inst_19595 = (state_19693[25]);var inst_19612 = (state_19693[2]);var inst_19613 = cljs.core.next.call(null,inst_19595);var inst_19575 = inst_19613;var inst_19576 = null;var inst_19577 = 0;var inst_19578 = 0;var state_19693__$1 = (function (){var statearr_19750 = state_19693;(statearr_19750[28] = inst_19612);
(statearr_19750[14] = inst_19577);
(statearr_19750[15] = inst_19578);
(statearr_19750[16] = inst_19576);
(statearr_19750[17] = inst_19575);
return statearr_19750;
})();var statearr_19751_19815 = state_19693__$1;(statearr_19751_19815[2] = null);
(statearr_19751_19815[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 25))
{var inst_19637 = (state_19693[12]);var inst_19636 = (state_19693[13]);var inst_19639 = (inst_19637 < inst_19636);var inst_19640 = inst_19639;var state_19693__$1 = state_19693;if(cljs.core.truth_(inst_19640))
{var statearr_19752_19816 = state_19693__$1;(statearr_19752_19816[1] = 27);
} else
{var statearr_19753_19817 = state_19693__$1;(statearr_19753_19817[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 26))
{var inst_19684 = (state_19693[2]);var state_19693__$1 = (function (){var statearr_19754 = state_19693;(statearr_19754[29] = inst_19684);
return statearr_19754;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19693__$1,42,dchan);
} else
{if((state_val_19694 === 27))
{var inst_19635 = (state_19693[11]);var inst_19637 = (state_19693[12]);var inst_19642 = cljs.core._nth.call(null,inst_19635,inst_19637);var state_19693__$1 = (function (){var statearr_19755 = state_19693;(statearr_19755[8] = inst_19642);
return statearr_19755;
})();var statearr_19756_19818 = state_19693__$1;(statearr_19756_19818[2] = null);
(statearr_19756_19818[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 28))
{var inst_19655 = (state_19693[9]);var inst_19634 = (state_19693[10]);var inst_19655__$1 = cljs.core.seq.call(null,inst_19634);var state_19693__$1 = (function (){var statearr_19760 = state_19693;(statearr_19760[9] = inst_19655__$1);
return statearr_19760;
})();if(inst_19655__$1)
{var statearr_19761_19819 = state_19693__$1;(statearr_19761_19819[1] = 33);
} else
{var statearr_19762_19820 = state_19693__$1;(statearr_19762_19820[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 29))
{var inst_19682 = (state_19693[2]);var state_19693__$1 = state_19693;var statearr_19763_19821 = state_19693__$1;(statearr_19763_19821[2] = inst_19682);
(statearr_19763_19821[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 30))
{var inst_19634 = (state_19693[10]);var inst_19635 = (state_19693[11]);var inst_19637 = (state_19693[12]);var inst_19636 = (state_19693[13]);var inst_19651 = (state_19693[2]);var inst_19652 = (inst_19637 + 1);var tmp19757 = inst_19634;var tmp19758 = inst_19635;var tmp19759 = inst_19636;var inst_19634__$1 = tmp19757;var inst_19635__$1 = tmp19758;var inst_19636__$1 = tmp19759;var inst_19637__$1 = inst_19652;var state_19693__$1 = (function (){var statearr_19764 = state_19693;(statearr_19764[30] = inst_19651);
(statearr_19764[10] = inst_19634__$1);
(statearr_19764[11] = inst_19635__$1);
(statearr_19764[12] = inst_19637__$1);
(statearr_19764[13] = inst_19636__$1);
return statearr_19764;
})();var statearr_19765_19822 = state_19693__$1;(statearr_19765_19822[2] = null);
(statearr_19765_19822[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19694 === 31))
{var inst_19642 = (state_19693[8]);var inst_19643 = (state_19693[2]);var inst_19644 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_19645 = cljs.core.async.untap_STAR_.call(null,m,inst_19642);var state_19693__$1 = (function (){var statearr_19766 = state_19693;(statearr_19766[31] = inst_19643);
(statearr_19766[32] = inst_19644);
return statearr_19766;
})();var statearr_19767_19823 = state_19693__$1;(statearr_19767_19823[2] = inst_19645);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19693__$1);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_19771 = (new Array(33));(statearr_19771[0] = state_machine__12859__auto__);
(statearr_19771[1] = 1);
return statearr_19771;
});
var state_machine__12859__auto____1 = (function (state_19693){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_19693);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e19772){if((e19772 instanceof Object))
{var ex__12862__auto__ = e19772;var statearr_19773_19824 = state_19693;(statearr_19773_19824[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19693);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19825 = state_19693;
state_19693 = G__19825;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_19693){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_19693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_19774 = f__12991__auto__.call(null);(statearr_19774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___19775);
return statearr_19774;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
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
cljs.core.async.Mix = {};
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7629__auto__ = m;if(and__7629__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7629__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8234__auto__ = (((m == null))?null:m);return (function (){var or__7638__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7629__auto__ = m;if(and__7629__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7629__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8234__auto__ = (((m == null))?null:m);return (function (){var or__7638__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7629__auto__ = m;if(and__7629__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7629__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8234__auto__ = (((m == null))?null:m);return (function (){var or__7638__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7629__auto__ = m;if(and__7629__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7629__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8234__auto__ = (((m == null))?null:m);return (function (){var or__7638__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7629__auto__ = m;if(and__7629__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7629__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8234__auto__ = (((m == null))?null:m);return (function (){var or__7638__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], true);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], true);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t19935 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19935 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta19936){
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
this.meta19936 = meta19936;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19935.cljs$lang$type = true;
cljs.core.async.t19935.cljs$lang$ctorStr = "cljs.core.async/t19935";
cljs.core.async.t19935.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){return cljs.core._write.call(null,writer__8176__auto__,"cljs.core.async/t19935");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19935.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t19935.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19935.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19935.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19935.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19935.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19935.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19935.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19937){var self__ = this;
var _19937__$1 = this;return self__.meta19936;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19937,meta19936__$1){var self__ = this;
var _19937__$1 = this;return (new cljs.core.async.t19935(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta19936__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t19935 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t19935(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta19936){return (new cljs.core.async.t19935(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta19936));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t19935(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__12990__auto___20044 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_20002){var state_val_20003 = (state_20002[1]);if((state_val_20003 === 1))
{var inst_19941 = (state_20002[7]);var inst_19941__$1 = calc_state.call(null);var inst_19942 = cljs.core.seq_QMARK_.call(null,inst_19941__$1);var state_20002__$1 = (function (){var statearr_20004 = state_20002;(statearr_20004[7] = inst_19941__$1);
return statearr_20004;
})();if(inst_19942)
{var statearr_20005_20045 = state_20002__$1;(statearr_20005_20045[1] = 2);
} else
{var statearr_20006_20046 = state_20002__$1;(statearr_20006_20046[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20003 === 2))
{var inst_19941 = (state_20002[7]);var inst_19944 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19941);var state_20002__$1 = state_20002;var statearr_20007_20047 = state_20002__$1;(statearr_20007_20047[2] = inst_19944);
(statearr_20007_20047[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20003 === 3))
{var inst_19941 = (state_20002[7]);var state_20002__$1 = state_20002;var statearr_20008_20048 = state_20002__$1;(statearr_20008_20048[2] = inst_19941);
(statearr_20008_20048[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20003 === 4))
{var inst_19941 = (state_20002[7]);var inst_19947 = (state_20002[2]);var inst_19948 = cljs.core.get.call(null,inst_19947,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_19949 = cljs.core.get.call(null,inst_19947,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_19950 = cljs.core.get.call(null,inst_19947,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_19951 = inst_19941;var state_20002__$1 = (function (){var statearr_20009 = state_20002;(statearr_20009[8] = inst_19951);
(statearr_20009[9] = inst_19950);
(statearr_20009[10] = inst_19948);
(statearr_20009[11] = inst_19949);
return statearr_20009;
})();var statearr_20010_20049 = state_20002__$1;(statearr_20010_20049[2] = null);
(statearr_20010_20049[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20003 === 5))
{var inst_19951 = (state_20002[8]);var inst_19954 = cljs.core.seq_QMARK_.call(null,inst_19951);var state_20002__$1 = state_20002;if(inst_19954)
{var statearr_20011_20050 = state_20002__$1;(statearr_20011_20050[1] = 7);
} else
{var statearr_20012_20051 = state_20002__$1;(statearr_20012_20051[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20003 === 6))
{var inst_20000 = (state_20002[2]);var state_20002__$1 = state_20002;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20002__$1,inst_20000);
} else
{if((state_val_20003 === 7))
{var inst_19951 = (state_20002[8]);var inst_19956 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19951);var state_20002__$1 = state_20002;var statearr_20013_20052 = state_20002__$1;(statearr_20013_20052[2] = inst_19956);
(statearr_20013_20052[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20003 === 8))
{var inst_19951 = (state_20002[8]);var state_20002__$1 = state_20002;var statearr_20014_20053 = state_20002__$1;(statearr_20014_20053[2] = inst_19951);
(statearr_20014_20053[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20003 === 9))
{var inst_19959 = (state_20002[12]);var inst_19959__$1 = (state_20002[2]);var inst_19960 = cljs.core.get.call(null,inst_19959__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_19961 = cljs.core.get.call(null,inst_19959__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_19962 = cljs.core.get.call(null,inst_19959__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_20002__$1 = (function (){var statearr_20015 = state_20002;(statearr_20015[12] = inst_19959__$1);
(statearr_20015[13] = inst_19962);
(statearr_20015[14] = inst_19961);
return statearr_20015;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_20002__$1,10,inst_19960);
} else
{if((state_val_20003 === 10))
{var inst_19967 = (state_20002[15]);var inst_19966 = (state_20002[16]);var inst_19965 = (state_20002[2]);var inst_19966__$1 = cljs.core.nth.call(null,inst_19965,0,null);var inst_19967__$1 = cljs.core.nth.call(null,inst_19965,1,null);var inst_19968 = (inst_19966__$1 == null);var inst_19969 = cljs.core._EQ_.call(null,inst_19967__$1,change);var inst_19970 = (inst_19968) || (inst_19969);var state_20002__$1 = (function (){var statearr_20016 = state_20002;(statearr_20016[15] = inst_19967__$1);
(statearr_20016[16] = inst_19966__$1);
return statearr_20016;
})();if(cljs.core.truth_(inst_19970))
{var statearr_20017_20054 = state_20002__$1;(statearr_20017_20054[1] = 11);
} else
{var statearr_20018_20055 = state_20002__$1;(statearr_20018_20055[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20003 === 11))
{var inst_19966 = (state_20002[16]);var inst_19972 = (inst_19966 == null);var state_20002__$1 = state_20002;if(cljs.core.truth_(inst_19972))
{var statearr_20019_20056 = state_20002__$1;(statearr_20019_20056[1] = 14);
} else
{var statearr_20020_20057 = state_20002__$1;(statearr_20020_20057[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20003 === 12))
{var inst_19981 = (state_20002[17]);var inst_19967 = (state_20002[15]);var inst_19962 = (state_20002[13]);var inst_19981__$1 = inst_19962.call(null,inst_19967);var state_20002__$1 = (function (){var statearr_20021 = state_20002;(statearr_20021[17] = inst_19981__$1);
return statearr_20021;
})();if(cljs.core.truth_(inst_19981__$1))
{var statearr_20022_20058 = state_20002__$1;(statearr_20022_20058[1] = 17);
} else
{var statearr_20023_20059 = state_20002__$1;(statearr_20023_20059[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20003 === 13))
{var inst_19998 = (state_20002[2]);var state_20002__$1 = state_20002;var statearr_20024_20060 = state_20002__$1;(statearr_20024_20060[2] = inst_19998);
(statearr_20024_20060[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20003 === 14))
{var inst_19967 = (state_20002[15]);var inst_19974 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19967);var state_20002__$1 = state_20002;var statearr_20025_20061 = state_20002__$1;(statearr_20025_20061[2] = inst_19974);
(statearr_20025_20061[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20003 === 15))
{var state_20002__$1 = state_20002;var statearr_20026_20062 = state_20002__$1;(statearr_20026_20062[2] = null);
(statearr_20026_20062[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20003 === 16))
{var inst_19977 = (state_20002[2]);var inst_19978 = calc_state.call(null);var inst_19951 = inst_19978;var state_20002__$1 = (function (){var statearr_20027 = state_20002;(statearr_20027[18] = inst_19977);
(statearr_20027[8] = inst_19951);
return statearr_20027;
})();var statearr_20028_20063 = state_20002__$1;(statearr_20028_20063[2] = null);
(statearr_20028_20063[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20003 === 17))
{var inst_19981 = (state_20002[17]);var state_20002__$1 = state_20002;var statearr_20029_20064 = state_20002__$1;(statearr_20029_20064[2] = inst_19981);
(statearr_20029_20064[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20003 === 18))
{var inst_19967 = (state_20002[15]);var inst_19962 = (state_20002[13]);var inst_19961 = (state_20002[14]);var inst_19984 = cljs.core.empty_QMARK_.call(null,inst_19962);var inst_19985 = inst_19961.call(null,inst_19967);var inst_19986 = cljs.core.not.call(null,inst_19985);var inst_19987 = (inst_19984) && (inst_19986);var state_20002__$1 = state_20002;var statearr_20030_20065 = state_20002__$1;(statearr_20030_20065[2] = inst_19987);
(statearr_20030_20065[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20003 === 19))
{var inst_19989 = (state_20002[2]);var state_20002__$1 = state_20002;if(cljs.core.truth_(inst_19989))
{var statearr_20031_20066 = state_20002__$1;(statearr_20031_20066[1] = 20);
} else
{var statearr_20032_20067 = state_20002__$1;(statearr_20032_20067[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20003 === 20))
{var inst_19966 = (state_20002[16]);var state_20002__$1 = state_20002;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20002__$1,23,out,inst_19966);
} else
{if((state_val_20003 === 21))
{var state_20002__$1 = state_20002;var statearr_20033_20068 = state_20002__$1;(statearr_20033_20068[2] = null);
(statearr_20033_20068[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20003 === 22))
{var inst_19959 = (state_20002[12]);var inst_19995 = (state_20002[2]);var inst_19951 = inst_19959;var state_20002__$1 = (function (){var statearr_20034 = state_20002;(statearr_20034[8] = inst_19951);
(statearr_20034[19] = inst_19995);
return statearr_20034;
})();var statearr_20035_20069 = state_20002__$1;(statearr_20035_20069[2] = null);
(statearr_20035_20069[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20003 === 23))
{var inst_19992 = (state_20002[2]);var state_20002__$1 = state_20002;var statearr_20036_20070 = state_20002__$1;(statearr_20036_20070[2] = inst_19992);
(statearr_20036_20070[1] = 22);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_20040 = (new Array(20));(statearr_20040[0] = state_machine__12859__auto__);
(statearr_20040[1] = 1);
return statearr_20040;
});
var state_machine__12859__auto____1 = (function (state_20002){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_20002);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e20041){if((e20041 instanceof Object))
{var ex__12862__auto__ = e20041;var statearr_20042_20071 = state_20002;(statearr_20042_20071[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20002);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20041;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20072 = state_20002;
state_20002 = G__20072;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_20002){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_20002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_20043 = f__12991__auto__.call(null);(statearr_20043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___20044);
return statearr_20043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
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
cljs.core.async.Pub = {};
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7629__auto__ = p;if(and__7629__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7629__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8234__auto__ = (((p == null))?null:p);return (function (){var or__7638__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7629__auto__ = p;if(and__7629__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7629__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8234__auto__ = (((p == null))?null:p);return (function (){var or__7638__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7629__auto__ = p;if(and__7629__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7629__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8234__auto__ = (((p == null))?null:p);return (function (){var or__7638__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7629__auto__ = p;if(and__7629__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7629__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8234__auto__ = (((p == null))?null:p);return (function (){var or__7638__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
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
return (function (topic){var or__7638__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7638__auto__,mults){
return (function (p1__20073_SHARP_){if(cljs.core.truth_(p1__20073_SHARP_.call(null,topic)))
{return p1__20073_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__20073_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7638__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t20198 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20198 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20199){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20199 = meta20199;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20198.cljs$lang$type = true;
cljs.core.async.t20198.cljs$lang$ctorStr = "cljs.core.async/t20198";
cljs.core.async.t20198.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){return cljs.core._write.call(null,writer__8176__auto__,"cljs.core.async/t20198");
});})(mults,ensure_mult))
;
cljs.core.async.t20198.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t20198.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t20198.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t20198.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t20198.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t20198.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20198.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t20198.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20200){var self__ = this;
var _20200__$1 = this;return self__.meta20199;
});})(mults,ensure_mult))
;
cljs.core.async.t20198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20200,meta20199__$1){var self__ = this;
var _20200__$1 = this;return (new cljs.core.async.t20198(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20199__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t20198 = ((function (mults,ensure_mult){
return (function __GT_t20198(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20199){return (new cljs.core.async.t20198(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20199));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t20198(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12990__auto___20322 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_20274){var state_val_20275 = (state_20274[1]);if((state_val_20275 === 1))
{var state_20274__$1 = state_20274;var statearr_20276_20323 = state_20274__$1;(statearr_20276_20323[2] = null);
(statearr_20276_20323[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20275 === 2))
{var state_20274__$1 = state_20274;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20274__$1,4,ch);
} else
{if((state_val_20275 === 3))
{var inst_20272 = (state_20274[2]);var state_20274__$1 = state_20274;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20274__$1,inst_20272);
} else
{if((state_val_20275 === 4))
{var inst_20203 = (state_20274[7]);var inst_20203__$1 = (state_20274[2]);var inst_20204 = (inst_20203__$1 == null);var state_20274__$1 = (function (){var statearr_20277 = state_20274;(statearr_20277[7] = inst_20203__$1);
return statearr_20277;
})();if(cljs.core.truth_(inst_20204))
{var statearr_20278_20324 = state_20274__$1;(statearr_20278_20324[1] = 5);
} else
{var statearr_20279_20325 = state_20274__$1;(statearr_20279_20325[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20275 === 5))
{var inst_20210 = cljs.core.deref.call(null,mults);var inst_20211 = cljs.core.vals.call(null,inst_20210);var inst_20212 = cljs.core.seq.call(null,inst_20211);var inst_20213 = inst_20212;var inst_20214 = null;var inst_20215 = 0;var inst_20216 = 0;var state_20274__$1 = (function (){var statearr_20280 = state_20274;(statearr_20280[8] = inst_20216);
(statearr_20280[9] = inst_20213);
(statearr_20280[10] = inst_20214);
(statearr_20280[11] = inst_20215);
return statearr_20280;
})();var statearr_20281_20326 = state_20274__$1;(statearr_20281_20326[2] = null);
(statearr_20281_20326[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20275 === 6))
{var inst_20203 = (state_20274[7]);var inst_20253 = (state_20274[12]);var inst_20251 = (state_20274[13]);var inst_20251__$1 = topic_fn.call(null,inst_20203);var inst_20252 = cljs.core.deref.call(null,mults);var inst_20253__$1 = cljs.core.get.call(null,inst_20252,inst_20251__$1);var state_20274__$1 = (function (){var statearr_20282 = state_20274;(statearr_20282[12] = inst_20253__$1);
(statearr_20282[13] = inst_20251__$1);
return statearr_20282;
})();if(cljs.core.truth_(inst_20253__$1))
{var statearr_20283_20327 = state_20274__$1;(statearr_20283_20327[1] = 19);
} else
{var statearr_20284_20328 = state_20274__$1;(statearr_20284_20328[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20275 === 7))
{var inst_20270 = (state_20274[2]);var state_20274__$1 = state_20274;var statearr_20285_20329 = state_20274__$1;(statearr_20285_20329[2] = inst_20270);
(statearr_20285_20329[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20275 === 8))
{var inst_20216 = (state_20274[8]);var inst_20215 = (state_20274[11]);var inst_20218 = (inst_20216 < inst_20215);var inst_20219 = inst_20218;var state_20274__$1 = state_20274;if(cljs.core.truth_(inst_20219))
{var statearr_20289_20330 = state_20274__$1;(statearr_20289_20330[1] = 10);
} else
{var statearr_20290_20331 = state_20274__$1;(statearr_20290_20331[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20275 === 9))
{var inst_20249 = (state_20274[2]);var state_20274__$1 = state_20274;var statearr_20291_20332 = state_20274__$1;(statearr_20291_20332[2] = inst_20249);
(statearr_20291_20332[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20275 === 10))
{var inst_20216 = (state_20274[8]);var inst_20213 = (state_20274[9]);var inst_20214 = (state_20274[10]);var inst_20215 = (state_20274[11]);var inst_20221 = cljs.core._nth.call(null,inst_20214,inst_20216);var inst_20222 = cljs.core.async.muxch_STAR_.call(null,inst_20221);var inst_20223 = cljs.core.async.close_BANG_.call(null,inst_20222);var inst_20224 = (inst_20216 + 1);var tmp20286 = inst_20213;var tmp20287 = inst_20214;var tmp20288 = inst_20215;var inst_20213__$1 = tmp20286;var inst_20214__$1 = tmp20287;var inst_20215__$1 = tmp20288;var inst_20216__$1 = inst_20224;var state_20274__$1 = (function (){var statearr_20292 = state_20274;(statearr_20292[8] = inst_20216__$1);
(statearr_20292[14] = inst_20223);
(statearr_20292[9] = inst_20213__$1);
(statearr_20292[10] = inst_20214__$1);
(statearr_20292[11] = inst_20215__$1);
return statearr_20292;
})();var statearr_20293_20333 = state_20274__$1;(statearr_20293_20333[2] = null);
(statearr_20293_20333[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20275 === 11))
{var inst_20227 = (state_20274[15]);var inst_20213 = (state_20274[9]);var inst_20227__$1 = cljs.core.seq.call(null,inst_20213);var state_20274__$1 = (function (){var statearr_20294 = state_20274;(statearr_20294[15] = inst_20227__$1);
return statearr_20294;
})();if(inst_20227__$1)
{var statearr_20295_20334 = state_20274__$1;(statearr_20295_20334[1] = 13);
} else
{var statearr_20296_20335 = state_20274__$1;(statearr_20296_20335[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20275 === 12))
{var inst_20247 = (state_20274[2]);var state_20274__$1 = state_20274;var statearr_20297_20336 = state_20274__$1;(statearr_20297_20336[2] = inst_20247);
(statearr_20297_20336[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20275 === 13))
{var inst_20227 = (state_20274[15]);var inst_20229 = cljs.core.chunked_seq_QMARK_.call(null,inst_20227);var state_20274__$1 = state_20274;if(inst_20229)
{var statearr_20298_20337 = state_20274__$1;(statearr_20298_20337[1] = 16);
} else
{var statearr_20299_20338 = state_20274__$1;(statearr_20299_20338[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20275 === 14))
{var state_20274__$1 = state_20274;var statearr_20300_20339 = state_20274__$1;(statearr_20300_20339[2] = null);
(statearr_20300_20339[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20275 === 15))
{var inst_20245 = (state_20274[2]);var state_20274__$1 = state_20274;var statearr_20301_20340 = state_20274__$1;(statearr_20301_20340[2] = inst_20245);
(statearr_20301_20340[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20275 === 16))
{var inst_20227 = (state_20274[15]);var inst_20231 = cljs.core.chunk_first.call(null,inst_20227);var inst_20232 = cljs.core.chunk_rest.call(null,inst_20227);var inst_20233 = cljs.core.count.call(null,inst_20231);var inst_20213 = inst_20232;var inst_20214 = inst_20231;var inst_20215 = inst_20233;var inst_20216 = 0;var state_20274__$1 = (function (){var statearr_20302 = state_20274;(statearr_20302[8] = inst_20216);
(statearr_20302[9] = inst_20213);
(statearr_20302[10] = inst_20214);
(statearr_20302[11] = inst_20215);
return statearr_20302;
})();var statearr_20303_20341 = state_20274__$1;(statearr_20303_20341[2] = null);
(statearr_20303_20341[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20275 === 17))
{var inst_20227 = (state_20274[15]);var inst_20236 = cljs.core.first.call(null,inst_20227);var inst_20237 = cljs.core.async.muxch_STAR_.call(null,inst_20236);var inst_20238 = cljs.core.async.close_BANG_.call(null,inst_20237);var inst_20239 = cljs.core.next.call(null,inst_20227);var inst_20213 = inst_20239;var inst_20214 = null;var inst_20215 = 0;var inst_20216 = 0;var state_20274__$1 = (function (){var statearr_20304 = state_20274;(statearr_20304[8] = inst_20216);
(statearr_20304[16] = inst_20238);
(statearr_20304[9] = inst_20213);
(statearr_20304[10] = inst_20214);
(statearr_20304[11] = inst_20215);
return statearr_20304;
})();var statearr_20305_20342 = state_20274__$1;(statearr_20305_20342[2] = null);
(statearr_20305_20342[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20275 === 18))
{var inst_20242 = (state_20274[2]);var state_20274__$1 = state_20274;var statearr_20306_20343 = state_20274__$1;(statearr_20306_20343[2] = inst_20242);
(statearr_20306_20343[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20275 === 19))
{var state_20274__$1 = state_20274;var statearr_20307_20344 = state_20274__$1;(statearr_20307_20344[2] = null);
(statearr_20307_20344[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20275 === 20))
{var state_20274__$1 = state_20274;var statearr_20308_20345 = state_20274__$1;(statearr_20308_20345[2] = null);
(statearr_20308_20345[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20275 === 21))
{var inst_20267 = (state_20274[2]);var state_20274__$1 = (function (){var statearr_20309 = state_20274;(statearr_20309[17] = inst_20267);
return statearr_20309;
})();var statearr_20310_20346 = state_20274__$1;(statearr_20310_20346[2] = null);
(statearr_20310_20346[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20275 === 22))
{var inst_20264 = (state_20274[2]);var state_20274__$1 = state_20274;var statearr_20311_20347 = state_20274__$1;(statearr_20311_20347[2] = inst_20264);
(statearr_20311_20347[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20275 === 23))
{var inst_20251 = (state_20274[13]);var inst_20255 = (state_20274[2]);var inst_20256 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20251);var state_20274__$1 = (function (){var statearr_20312 = state_20274;(statearr_20312[18] = inst_20255);
return statearr_20312;
})();var statearr_20313_20348 = state_20274__$1;(statearr_20313_20348[2] = inst_20256);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20274__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20275 === 24))
{var inst_20203 = (state_20274[7]);var inst_20253 = (state_20274[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20274,23,Object,null,22);var inst_20260 = cljs.core.async.muxch_STAR_.call(null,inst_20253);var state_20274__$1 = state_20274;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20274__$1,25,inst_20260,inst_20203);
} else
{if((state_val_20275 === 25))
{var inst_20262 = (state_20274[2]);var state_20274__$1 = state_20274;var statearr_20314_20349 = state_20274__$1;(statearr_20314_20349[2] = inst_20262);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20274__$1);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_20318 = (new Array(19));(statearr_20318[0] = state_machine__12859__auto__);
(statearr_20318[1] = 1);
return statearr_20318;
});
var state_machine__12859__auto____1 = (function (state_20274){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_20274);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e20319){if((e20319 instanceof Object))
{var ex__12862__auto__ = e20319;var statearr_20320_20350 = state_20274;(statearr_20320_20350[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20274);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20319;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20351 = state_20274;
state_20274 = G__20351;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_20274){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_20274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_20321 = f__12991__auto__.call(null);(statearr_20321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___20322);
return statearr_20321;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
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
,cljs.core.range.call(null,cnt));var c__12990__auto___20488 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_20458){var state_val_20459 = (state_20458[1]);if((state_val_20459 === 1))
{var state_20458__$1 = state_20458;var statearr_20460_20489 = state_20458__$1;(statearr_20460_20489[2] = null);
(statearr_20460_20489[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 2))
{var inst_20421 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_20422 = 0;var state_20458__$1 = (function (){var statearr_20461 = state_20458;(statearr_20461[7] = inst_20421);
(statearr_20461[8] = inst_20422);
return statearr_20461;
})();var statearr_20462_20490 = state_20458__$1;(statearr_20462_20490[2] = null);
(statearr_20462_20490[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 3))
{var inst_20456 = (state_20458[2]);var state_20458__$1 = state_20458;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20458__$1,inst_20456);
} else
{if((state_val_20459 === 4))
{var inst_20422 = (state_20458[8]);var inst_20424 = (inst_20422 < cnt);var state_20458__$1 = state_20458;if(cljs.core.truth_(inst_20424))
{var statearr_20463_20491 = state_20458__$1;(statearr_20463_20491[1] = 6);
} else
{var statearr_20464_20492 = state_20458__$1;(statearr_20464_20492[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 5))
{var inst_20442 = (state_20458[2]);var state_20458__$1 = (function (){var statearr_20465 = state_20458;(statearr_20465[9] = inst_20442);
return statearr_20465;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20458__$1,12,dchan);
} else
{if((state_val_20459 === 6))
{var state_20458__$1 = state_20458;var statearr_20466_20493 = state_20458__$1;(statearr_20466_20493[2] = null);
(statearr_20466_20493[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 7))
{var state_20458__$1 = state_20458;var statearr_20467_20494 = state_20458__$1;(statearr_20467_20494[2] = null);
(statearr_20467_20494[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 8))
{var inst_20440 = (state_20458[2]);var state_20458__$1 = state_20458;var statearr_20468_20495 = state_20458__$1;(statearr_20468_20495[2] = inst_20440);
(statearr_20468_20495[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 9))
{var inst_20422 = (state_20458[8]);var inst_20435 = (state_20458[2]);var inst_20436 = (inst_20422 + 1);var inst_20422__$1 = inst_20436;var state_20458__$1 = (function (){var statearr_20469 = state_20458;(statearr_20469[10] = inst_20435);
(statearr_20469[8] = inst_20422__$1);
return statearr_20469;
})();var statearr_20470_20496 = state_20458__$1;(statearr_20470_20496[2] = null);
(statearr_20470_20496[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 10))
{var inst_20426 = (state_20458[2]);var inst_20427 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_20458__$1 = (function (){var statearr_20471 = state_20458;(statearr_20471[11] = inst_20426);
return statearr_20471;
})();var statearr_20472_20497 = state_20458__$1;(statearr_20472_20497[2] = inst_20427);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20458__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 11))
{var inst_20422 = (state_20458[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20458,10,Object,null,9);var inst_20431 = chs__$1.call(null,inst_20422);var inst_20432 = done.call(null,inst_20422);var inst_20433 = cljs.core.async.take_BANG_.call(null,inst_20431,inst_20432);var state_20458__$1 = state_20458;var statearr_20473_20498 = state_20458__$1;(statearr_20473_20498[2] = inst_20433);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20458__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 12))
{var inst_20444 = (state_20458[12]);var inst_20444__$1 = (state_20458[2]);var inst_20445 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20444__$1);var state_20458__$1 = (function (){var statearr_20474 = state_20458;(statearr_20474[12] = inst_20444__$1);
return statearr_20474;
})();if(cljs.core.truth_(inst_20445))
{var statearr_20475_20499 = state_20458__$1;(statearr_20475_20499[1] = 13);
} else
{var statearr_20476_20500 = state_20458__$1;(statearr_20476_20500[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 13))
{var inst_20447 = cljs.core.async.close_BANG_.call(null,out);var state_20458__$1 = state_20458;var statearr_20477_20501 = state_20458__$1;(statearr_20477_20501[2] = inst_20447);
(statearr_20477_20501[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 14))
{var inst_20444 = (state_20458[12]);var inst_20449 = cljs.core.apply.call(null,f,inst_20444);var state_20458__$1 = state_20458;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20458__$1,16,out,inst_20449);
} else
{if((state_val_20459 === 15))
{var inst_20454 = (state_20458[2]);var state_20458__$1 = state_20458;var statearr_20478_20502 = state_20458__$1;(statearr_20478_20502[2] = inst_20454);
(statearr_20478_20502[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 16))
{var inst_20451 = (state_20458[2]);var state_20458__$1 = (function (){var statearr_20479 = state_20458;(statearr_20479[13] = inst_20451);
return statearr_20479;
})();var statearr_20480_20503 = state_20458__$1;(statearr_20480_20503[2] = null);
(statearr_20480_20503[1] = 2);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_20484 = (new Array(14));(statearr_20484[0] = state_machine__12859__auto__);
(statearr_20484[1] = 1);
return statearr_20484;
});
var state_machine__12859__auto____1 = (function (state_20458){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_20458);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e20485){if((e20485 instanceof Object))
{var ex__12862__auto__ = e20485;var statearr_20486_20504 = state_20458;(statearr_20486_20504[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20458);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20485;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20505 = state_20458;
state_20458 = G__20505;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_20458){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_20458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_20487 = f__12991__auto__.call(null);(statearr_20487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___20488);
return statearr_20487;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12990__auto___20613 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_20589){var state_val_20590 = (state_20589[1]);if((state_val_20590 === 1))
{var inst_20560 = cljs.core.vec.call(null,chs);var inst_20561 = inst_20560;var state_20589__$1 = (function (){var statearr_20591 = state_20589;(statearr_20591[7] = inst_20561);
return statearr_20591;
})();var statearr_20592_20614 = state_20589__$1;(statearr_20592_20614[2] = null);
(statearr_20592_20614[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 2))
{var inst_20561 = (state_20589[7]);var inst_20563 = cljs.core.count.call(null,inst_20561);var inst_20564 = (inst_20563 > 0);var state_20589__$1 = state_20589;if(cljs.core.truth_(inst_20564))
{var statearr_20593_20615 = state_20589__$1;(statearr_20593_20615[1] = 4);
} else
{var statearr_20594_20616 = state_20589__$1;(statearr_20594_20616[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 3))
{var inst_20587 = (state_20589[2]);var state_20589__$1 = state_20589;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20589__$1,inst_20587);
} else
{if((state_val_20590 === 4))
{var inst_20561 = (state_20589[7]);var state_20589__$1 = state_20589;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_20589__$1,7,inst_20561);
} else
{if((state_val_20590 === 5))
{var inst_20583 = cljs.core.async.close_BANG_.call(null,out);var state_20589__$1 = state_20589;var statearr_20595_20617 = state_20589__$1;(statearr_20595_20617[2] = inst_20583);
(statearr_20595_20617[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 6))
{var inst_20585 = (state_20589[2]);var state_20589__$1 = state_20589;var statearr_20596_20618 = state_20589__$1;(statearr_20596_20618[2] = inst_20585);
(statearr_20596_20618[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 7))
{var inst_20569 = (state_20589[8]);var inst_20568 = (state_20589[9]);var inst_20568__$1 = (state_20589[2]);var inst_20569__$1 = cljs.core.nth.call(null,inst_20568__$1,0,null);var inst_20570 = cljs.core.nth.call(null,inst_20568__$1,1,null);var inst_20571 = (inst_20569__$1 == null);var state_20589__$1 = (function (){var statearr_20597 = state_20589;(statearr_20597[10] = inst_20570);
(statearr_20597[8] = inst_20569__$1);
(statearr_20597[9] = inst_20568__$1);
return statearr_20597;
})();if(cljs.core.truth_(inst_20571))
{var statearr_20598_20619 = state_20589__$1;(statearr_20598_20619[1] = 8);
} else
{var statearr_20599_20620 = state_20589__$1;(statearr_20599_20620[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 8))
{var inst_20570 = (state_20589[10]);var inst_20561 = (state_20589[7]);var inst_20569 = (state_20589[8]);var inst_20568 = (state_20589[9]);var inst_20573 = (function (){var c = inst_20570;var v = inst_20569;var vec__20566 = inst_20568;var cs = inst_20561;return ((function (c,v,vec__20566,cs,inst_20570,inst_20561,inst_20569,inst_20568,state_val_20590){
return (function (p1__20506_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__20506_SHARP_);
});
;})(c,v,vec__20566,cs,inst_20570,inst_20561,inst_20569,inst_20568,state_val_20590))
})();var inst_20574 = cljs.core.filterv.call(null,inst_20573,inst_20561);var inst_20561__$1 = inst_20574;var state_20589__$1 = (function (){var statearr_20600 = state_20589;(statearr_20600[7] = inst_20561__$1);
return statearr_20600;
})();var statearr_20601_20621 = state_20589__$1;(statearr_20601_20621[2] = null);
(statearr_20601_20621[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 9))
{var inst_20569 = (state_20589[8]);var state_20589__$1 = state_20589;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20589__$1,11,out,inst_20569);
} else
{if((state_val_20590 === 10))
{var inst_20581 = (state_20589[2]);var state_20589__$1 = state_20589;var statearr_20603_20622 = state_20589__$1;(statearr_20603_20622[2] = inst_20581);
(statearr_20603_20622[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20590 === 11))
{var inst_20561 = (state_20589[7]);var inst_20578 = (state_20589[2]);var tmp20602 = inst_20561;var inst_20561__$1 = tmp20602;var state_20589__$1 = (function (){var statearr_20604 = state_20589;(statearr_20604[7] = inst_20561__$1);
(statearr_20604[11] = inst_20578);
return statearr_20604;
})();var statearr_20605_20623 = state_20589__$1;(statearr_20605_20623[2] = null);
(statearr_20605_20623[1] = 2);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_20609 = (new Array(12));(statearr_20609[0] = state_machine__12859__auto__);
(statearr_20609[1] = 1);
return statearr_20609;
});
var state_machine__12859__auto____1 = (function (state_20589){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_20589);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e20610){if((e20610 instanceof Object))
{var ex__12862__auto__ = e20610;var statearr_20611_20624 = state_20589;(statearr_20611_20624[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20589);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20610;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20625 = state_20589;
state_20589 = G__20625;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_20589){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_20589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_20612 = f__12991__auto__.call(null);(statearr_20612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___20613);
return statearr_20612;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12990__auto___20718 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_20695){var state_val_20696 = (state_20695[1]);if((state_val_20696 === 1))
{var inst_20672 = 0;var state_20695__$1 = (function (){var statearr_20697 = state_20695;(statearr_20697[7] = inst_20672);
return statearr_20697;
})();var statearr_20698_20719 = state_20695__$1;(statearr_20698_20719[2] = null);
(statearr_20698_20719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20696 === 2))
{var inst_20672 = (state_20695[7]);var inst_20674 = (inst_20672 < n);var state_20695__$1 = state_20695;if(cljs.core.truth_(inst_20674))
{var statearr_20699_20720 = state_20695__$1;(statearr_20699_20720[1] = 4);
} else
{var statearr_20700_20721 = state_20695__$1;(statearr_20700_20721[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20696 === 3))
{var inst_20692 = (state_20695[2]);var inst_20693 = cljs.core.async.close_BANG_.call(null,out);var state_20695__$1 = (function (){var statearr_20701 = state_20695;(statearr_20701[8] = inst_20692);
return statearr_20701;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20695__$1,inst_20693);
} else
{if((state_val_20696 === 4))
{var state_20695__$1 = state_20695;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20695__$1,7,ch);
} else
{if((state_val_20696 === 5))
{var state_20695__$1 = state_20695;var statearr_20702_20722 = state_20695__$1;(statearr_20702_20722[2] = null);
(statearr_20702_20722[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20696 === 6))
{var inst_20690 = (state_20695[2]);var state_20695__$1 = state_20695;var statearr_20703_20723 = state_20695__$1;(statearr_20703_20723[2] = inst_20690);
(statearr_20703_20723[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20696 === 7))
{var inst_20677 = (state_20695[9]);var inst_20677__$1 = (state_20695[2]);var inst_20678 = (inst_20677__$1 == null);var inst_20679 = cljs.core.not.call(null,inst_20678);var state_20695__$1 = (function (){var statearr_20704 = state_20695;(statearr_20704[9] = inst_20677__$1);
return statearr_20704;
})();if(inst_20679)
{var statearr_20705_20724 = state_20695__$1;(statearr_20705_20724[1] = 8);
} else
{var statearr_20706_20725 = state_20695__$1;(statearr_20706_20725[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20696 === 8))
{var inst_20677 = (state_20695[9]);var state_20695__$1 = state_20695;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20695__$1,11,out,inst_20677);
} else
{if((state_val_20696 === 9))
{var state_20695__$1 = state_20695;var statearr_20707_20726 = state_20695__$1;(statearr_20707_20726[2] = null);
(statearr_20707_20726[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20696 === 10))
{var inst_20687 = (state_20695[2]);var state_20695__$1 = state_20695;var statearr_20708_20727 = state_20695__$1;(statearr_20708_20727[2] = inst_20687);
(statearr_20708_20727[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20696 === 11))
{var inst_20672 = (state_20695[7]);var inst_20682 = (state_20695[2]);var inst_20683 = (inst_20672 + 1);var inst_20672__$1 = inst_20683;var state_20695__$1 = (function (){var statearr_20709 = state_20695;(statearr_20709[10] = inst_20682);
(statearr_20709[7] = inst_20672__$1);
return statearr_20709;
})();var statearr_20710_20728 = state_20695__$1;(statearr_20710_20728[2] = null);
(statearr_20710_20728[1] = 2);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_20714 = (new Array(11));(statearr_20714[0] = state_machine__12859__auto__);
(statearr_20714[1] = 1);
return statearr_20714;
});
var state_machine__12859__auto____1 = (function (state_20695){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_20695);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e20715){if((e20715 instanceof Object))
{var ex__12862__auto__ = e20715;var statearr_20716_20729 = state_20695;(statearr_20716_20729[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20695);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20715;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20730 = state_20695;
state_20695 = G__20730;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_20695){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_20695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_20717 = f__12991__auto__.call(null);(statearr_20717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___20718);
return statearr_20717;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12990__auto___20827 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_20802){var state_val_20803 = (state_20802[1]);if((state_val_20803 === 1))
{var inst_20779 = null;var state_20802__$1 = (function (){var statearr_20804 = state_20802;(statearr_20804[7] = inst_20779);
return statearr_20804;
})();var statearr_20805_20828 = state_20802__$1;(statearr_20805_20828[2] = null);
(statearr_20805_20828[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20803 === 2))
{var state_20802__$1 = state_20802;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20802__$1,4,ch);
} else
{if((state_val_20803 === 3))
{var inst_20799 = (state_20802[2]);var inst_20800 = cljs.core.async.close_BANG_.call(null,out);var state_20802__$1 = (function (){var statearr_20806 = state_20802;(statearr_20806[8] = inst_20799);
return statearr_20806;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20802__$1,inst_20800);
} else
{if((state_val_20803 === 4))
{var inst_20782 = (state_20802[9]);var inst_20782__$1 = (state_20802[2]);var inst_20783 = (inst_20782__$1 == null);var inst_20784 = cljs.core.not.call(null,inst_20783);var state_20802__$1 = (function (){var statearr_20807 = state_20802;(statearr_20807[9] = inst_20782__$1);
return statearr_20807;
})();if(inst_20784)
{var statearr_20808_20829 = state_20802__$1;(statearr_20808_20829[1] = 5);
} else
{var statearr_20809_20830 = state_20802__$1;(statearr_20809_20830[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20803 === 5))
{var inst_20779 = (state_20802[7]);var inst_20782 = (state_20802[9]);var inst_20786 = cljs.core._EQ_.call(null,inst_20782,inst_20779);var state_20802__$1 = state_20802;if(inst_20786)
{var statearr_20810_20831 = state_20802__$1;(statearr_20810_20831[1] = 8);
} else
{var statearr_20811_20832 = state_20802__$1;(statearr_20811_20832[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20803 === 6))
{var state_20802__$1 = state_20802;var statearr_20813_20833 = state_20802__$1;(statearr_20813_20833[2] = null);
(statearr_20813_20833[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20803 === 7))
{var inst_20797 = (state_20802[2]);var state_20802__$1 = state_20802;var statearr_20814_20834 = state_20802__$1;(statearr_20814_20834[2] = inst_20797);
(statearr_20814_20834[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20803 === 8))
{var inst_20779 = (state_20802[7]);var tmp20812 = inst_20779;var inst_20779__$1 = tmp20812;var state_20802__$1 = (function (){var statearr_20815 = state_20802;(statearr_20815[7] = inst_20779__$1);
return statearr_20815;
})();var statearr_20816_20835 = state_20802__$1;(statearr_20816_20835[2] = null);
(statearr_20816_20835[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20803 === 9))
{var inst_20782 = (state_20802[9]);var state_20802__$1 = state_20802;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20802__$1,11,out,inst_20782);
} else
{if((state_val_20803 === 10))
{var inst_20794 = (state_20802[2]);var state_20802__$1 = state_20802;var statearr_20817_20836 = state_20802__$1;(statearr_20817_20836[2] = inst_20794);
(statearr_20817_20836[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20803 === 11))
{var inst_20782 = (state_20802[9]);var inst_20791 = (state_20802[2]);var inst_20779 = inst_20782;var state_20802__$1 = (function (){var statearr_20818 = state_20802;(statearr_20818[7] = inst_20779);
(statearr_20818[10] = inst_20791);
return statearr_20818;
})();var statearr_20819_20837 = state_20802__$1;(statearr_20819_20837[2] = null);
(statearr_20819_20837[1] = 2);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_20823 = (new Array(11));(statearr_20823[0] = state_machine__12859__auto__);
(statearr_20823[1] = 1);
return statearr_20823;
});
var state_machine__12859__auto____1 = (function (state_20802){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_20802);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e20824){if((e20824 instanceof Object))
{var ex__12862__auto__ = e20824;var statearr_20825_20838 = state_20802;(statearr_20825_20838[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20802);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20824;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20839 = state_20802;
state_20802 = G__20839;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_20802){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_20802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_20826 = f__12991__auto__.call(null);(statearr_20826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___20827);
return statearr_20826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12990__auto___20974 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_20944){var state_val_20945 = (state_20944[1]);if((state_val_20945 === 1))
{var inst_20907 = (new Array(n));var inst_20908 = inst_20907;var inst_20909 = 0;var state_20944__$1 = (function (){var statearr_20946 = state_20944;(statearr_20946[7] = inst_20909);
(statearr_20946[8] = inst_20908);
return statearr_20946;
})();var statearr_20947_20975 = state_20944__$1;(statearr_20947_20975[2] = null);
(statearr_20947_20975[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20945 === 2))
{var state_20944__$1 = state_20944;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20944__$1,4,ch);
} else
{if((state_val_20945 === 3))
{var inst_20942 = (state_20944[2]);var state_20944__$1 = state_20944;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20944__$1,inst_20942);
} else
{if((state_val_20945 === 4))
{var inst_20912 = (state_20944[9]);var inst_20912__$1 = (state_20944[2]);var inst_20913 = (inst_20912__$1 == null);var inst_20914 = cljs.core.not.call(null,inst_20913);var state_20944__$1 = (function (){var statearr_20948 = state_20944;(statearr_20948[9] = inst_20912__$1);
return statearr_20948;
})();if(inst_20914)
{var statearr_20949_20976 = state_20944__$1;(statearr_20949_20976[1] = 5);
} else
{var statearr_20950_20977 = state_20944__$1;(statearr_20950_20977[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20945 === 5))
{var inst_20909 = (state_20944[7]);var inst_20908 = (state_20944[8]);var inst_20912 = (state_20944[9]);var inst_20917 = (state_20944[10]);var inst_20916 = (inst_20908[inst_20909] = inst_20912);var inst_20917__$1 = (inst_20909 + 1);var inst_20918 = (inst_20917__$1 < n);var state_20944__$1 = (function (){var statearr_20951 = state_20944;(statearr_20951[11] = inst_20916);
(statearr_20951[10] = inst_20917__$1);
return statearr_20951;
})();if(cljs.core.truth_(inst_20918))
{var statearr_20952_20978 = state_20944__$1;(statearr_20952_20978[1] = 8);
} else
{var statearr_20953_20979 = state_20944__$1;(statearr_20953_20979[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20945 === 6))
{var inst_20909 = (state_20944[7]);var inst_20930 = (inst_20909 > 0);var state_20944__$1 = state_20944;if(cljs.core.truth_(inst_20930))
{var statearr_20955_20980 = state_20944__$1;(statearr_20955_20980[1] = 12);
} else
{var statearr_20956_20981 = state_20944__$1;(statearr_20956_20981[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20945 === 7))
{var inst_20940 = (state_20944[2]);var state_20944__$1 = state_20944;var statearr_20957_20982 = state_20944__$1;(statearr_20957_20982[2] = inst_20940);
(statearr_20957_20982[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20945 === 8))
{var inst_20908 = (state_20944[8]);var inst_20917 = (state_20944[10]);var tmp20954 = inst_20908;var inst_20908__$1 = tmp20954;var inst_20909 = inst_20917;var state_20944__$1 = (function (){var statearr_20958 = state_20944;(statearr_20958[7] = inst_20909);
(statearr_20958[8] = inst_20908__$1);
return statearr_20958;
})();var statearr_20959_20983 = state_20944__$1;(statearr_20959_20983[2] = null);
(statearr_20959_20983[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20945 === 9))
{var inst_20908 = (state_20944[8]);var inst_20922 = cljs.core.vec.call(null,inst_20908);var state_20944__$1 = state_20944;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20944__$1,11,out,inst_20922);
} else
{if((state_val_20945 === 10))
{var inst_20928 = (state_20944[2]);var state_20944__$1 = state_20944;var statearr_20960_20984 = state_20944__$1;(statearr_20960_20984[2] = inst_20928);
(statearr_20960_20984[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20945 === 11))
{var inst_20924 = (state_20944[2]);var inst_20925 = (new Array(n));var inst_20908 = inst_20925;var inst_20909 = 0;var state_20944__$1 = (function (){var statearr_20961 = state_20944;(statearr_20961[7] = inst_20909);
(statearr_20961[8] = inst_20908);
(statearr_20961[12] = inst_20924);
return statearr_20961;
})();var statearr_20962_20985 = state_20944__$1;(statearr_20962_20985[2] = null);
(statearr_20962_20985[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20945 === 12))
{var inst_20908 = (state_20944[8]);var inst_20932 = cljs.core.vec.call(null,inst_20908);var state_20944__$1 = state_20944;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20944__$1,15,out,inst_20932);
} else
{if((state_val_20945 === 13))
{var state_20944__$1 = state_20944;var statearr_20963_20986 = state_20944__$1;(statearr_20963_20986[2] = null);
(statearr_20963_20986[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20945 === 14))
{var inst_20937 = (state_20944[2]);var inst_20938 = cljs.core.async.close_BANG_.call(null,out);var state_20944__$1 = (function (){var statearr_20964 = state_20944;(statearr_20964[13] = inst_20937);
return statearr_20964;
})();var statearr_20965_20987 = state_20944__$1;(statearr_20965_20987[2] = inst_20938);
(statearr_20965_20987[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20945 === 15))
{var inst_20934 = (state_20944[2]);var state_20944__$1 = state_20944;var statearr_20966_20988 = state_20944__$1;(statearr_20966_20988[2] = inst_20934);
(statearr_20966_20988[1] = 14);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_20970 = (new Array(14));(statearr_20970[0] = state_machine__12859__auto__);
(statearr_20970[1] = 1);
return statearr_20970;
});
var state_machine__12859__auto____1 = (function (state_20944){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_20944);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e20971){if((e20971 instanceof Object))
{var ex__12862__auto__ = e20971;var statearr_20972_20989 = state_20944;(statearr_20972_20989[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20944);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20971;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20990 = state_20944;
state_20944 = G__20990;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_20944){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_20944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_20973 = f__12991__auto__.call(null);(statearr_20973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___20974);
return statearr_20973;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12990__auto___21133 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_21103){var state_val_21104 = (state_21103[1]);if((state_val_21104 === 1))
{var inst_21062 = (new Array(0));var inst_21063 = inst_21062;var inst_21064 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_21103__$1 = (function (){var statearr_21105 = state_21103;(statearr_21105[7] = inst_21064);
(statearr_21105[8] = inst_21063);
return statearr_21105;
})();var statearr_21106_21134 = state_21103__$1;(statearr_21106_21134[2] = null);
(statearr_21106_21134[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21104 === 2))
{var state_21103__$1 = state_21103;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21103__$1,4,ch);
} else
{if((state_val_21104 === 3))
{var inst_21101 = (state_21103[2]);var state_21103__$1 = state_21103;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21103__$1,inst_21101);
} else
{if((state_val_21104 === 4))
{var inst_21067 = (state_21103[9]);var inst_21067__$1 = (state_21103[2]);var inst_21068 = (inst_21067__$1 == null);var inst_21069 = cljs.core.not.call(null,inst_21068);var state_21103__$1 = (function (){var statearr_21107 = state_21103;(statearr_21107[9] = inst_21067__$1);
return statearr_21107;
})();if(inst_21069)
{var statearr_21108_21135 = state_21103__$1;(statearr_21108_21135[1] = 5);
} else
{var statearr_21109_21136 = state_21103__$1;(statearr_21109_21136[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21104 === 5))
{var inst_21067 = (state_21103[9]);var inst_21064 = (state_21103[7]);var inst_21071 = (state_21103[10]);var inst_21071__$1 = f.call(null,inst_21067);var inst_21072 = cljs.core._EQ_.call(null,inst_21071__$1,inst_21064);var inst_21073 = cljs.core.keyword_identical_QMARK_.call(null,inst_21064,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_21074 = (inst_21072) || (inst_21073);var state_21103__$1 = (function (){var statearr_21110 = state_21103;(statearr_21110[10] = inst_21071__$1);
return statearr_21110;
})();if(cljs.core.truth_(inst_21074))
{var statearr_21111_21137 = state_21103__$1;(statearr_21111_21137[1] = 8);
} else
{var statearr_21112_21138 = state_21103__$1;(statearr_21112_21138[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21104 === 6))
{var inst_21063 = (state_21103[8]);var inst_21088 = inst_21063.length;var inst_21089 = (inst_21088 > 0);var state_21103__$1 = state_21103;if(cljs.core.truth_(inst_21089))
{var statearr_21114_21139 = state_21103__$1;(statearr_21114_21139[1] = 12);
} else
{var statearr_21115_21140 = state_21103__$1;(statearr_21115_21140[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21104 === 7))
{var inst_21099 = (state_21103[2]);var state_21103__$1 = state_21103;var statearr_21116_21141 = state_21103__$1;(statearr_21116_21141[2] = inst_21099);
(statearr_21116_21141[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21104 === 8))
{var inst_21067 = (state_21103[9]);var inst_21063 = (state_21103[8]);var inst_21071 = (state_21103[10]);var inst_21076 = inst_21063.push(inst_21067);var tmp21113 = inst_21063;var inst_21063__$1 = tmp21113;var inst_21064 = inst_21071;var state_21103__$1 = (function (){var statearr_21117 = state_21103;(statearr_21117[7] = inst_21064);
(statearr_21117[8] = inst_21063__$1);
(statearr_21117[11] = inst_21076);
return statearr_21117;
})();var statearr_21118_21142 = state_21103__$1;(statearr_21118_21142[2] = null);
(statearr_21118_21142[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21104 === 9))
{var inst_21063 = (state_21103[8]);var inst_21079 = cljs.core.vec.call(null,inst_21063);var state_21103__$1 = state_21103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21103__$1,11,out,inst_21079);
} else
{if((state_val_21104 === 10))
{var inst_21086 = (state_21103[2]);var state_21103__$1 = state_21103;var statearr_21119_21143 = state_21103__$1;(statearr_21119_21143[2] = inst_21086);
(statearr_21119_21143[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21104 === 11))
{var inst_21067 = (state_21103[9]);var inst_21071 = (state_21103[10]);var inst_21081 = (state_21103[2]);var inst_21082 = (new Array(0));var inst_21083 = inst_21082.push(inst_21067);var inst_21063 = inst_21082;var inst_21064 = inst_21071;var state_21103__$1 = (function (){var statearr_21120 = state_21103;(statearr_21120[7] = inst_21064);
(statearr_21120[8] = inst_21063);
(statearr_21120[12] = inst_21081);
(statearr_21120[13] = inst_21083);
return statearr_21120;
})();var statearr_21121_21144 = state_21103__$1;(statearr_21121_21144[2] = null);
(statearr_21121_21144[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21104 === 12))
{var inst_21063 = (state_21103[8]);var inst_21091 = cljs.core.vec.call(null,inst_21063);var state_21103__$1 = state_21103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21103__$1,15,out,inst_21091);
} else
{if((state_val_21104 === 13))
{var state_21103__$1 = state_21103;var statearr_21122_21145 = state_21103__$1;(statearr_21122_21145[2] = null);
(statearr_21122_21145[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21104 === 14))
{var inst_21096 = (state_21103[2]);var inst_21097 = cljs.core.async.close_BANG_.call(null,out);var state_21103__$1 = (function (){var statearr_21123 = state_21103;(statearr_21123[14] = inst_21096);
return statearr_21123;
})();var statearr_21124_21146 = state_21103__$1;(statearr_21124_21146[2] = inst_21097);
(statearr_21124_21146[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21104 === 15))
{var inst_21093 = (state_21103[2]);var state_21103__$1 = state_21103;var statearr_21125_21147 = state_21103__$1;(statearr_21125_21147[2] = inst_21093);
(statearr_21125_21147[1] = 14);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_21129 = (new Array(15));(statearr_21129[0] = state_machine__12859__auto__);
(statearr_21129[1] = 1);
return statearr_21129;
});
var state_machine__12859__auto____1 = (function (state_21103){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_21103);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e21130){if((e21130 instanceof Object))
{var ex__12862__auto__ = e21130;var statearr_21131_21148 = state_21103;(statearr_21131_21148[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21103);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21130;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21149 = state_21103;
state_21103 = G__21149;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_21103){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_21103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_21132 = f__12991__auto__.call(null);(statearr_21132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___21133);
return statearr_21132;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
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
