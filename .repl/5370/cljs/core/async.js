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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t178493 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t178493 = (function (f,fn_handler,meta178494){
this.f = f;
this.fn_handler = fn_handler;
this.meta178494 = meta178494;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t178493.cljs$lang$type = true;
cljs.core.async.t178493.cljs$lang$ctorStr = "cljs.core.async/t178493";
cljs.core.async.t178493.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t178493");
});
cljs.core.async.t178493.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t178493.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t178493.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t178493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_178495){var self__ = this;
var _178495__$1 = this;return self__.meta178494;
});
cljs.core.async.t178493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_178495,meta178494__$1){var self__ = this;
var _178495__$1 = this;return (new cljs.core.async.t178493(self__.f,self__.fn_handler,meta178494__$1));
});
cljs.core.async.__GT_t178493 = (function __GT_t178493(f__$1,fn_handler__$1,meta178494){return (new cljs.core.async.t178493(f__$1,fn_handler__$1,meta178494));
});
}
return (new cljs.core.async.t178493(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__178497 = buff;if(G__178497)
{var bit__6915__auto__ = null;if(cljs.core.truth_((function (){var or__6289__auto__ = bit__6915__auto__;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return G__178497.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__178497.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__178497);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__178497);
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
{var val_178498 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_178498);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_178498);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7112__auto___178499 = n;var x_178500 = 0;while(true){
if((x_178500 < n__7112__auto___178499))
{(a[x_178500] = 0);
{
var G__178501 = (x_178500 + 1);
x_178500 = G__178501;
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
var G__178502 = (i + 1);
i = G__178502;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t178506 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t178506 = (function (flag,alt_flag,meta178507){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta178507 = meta178507;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t178506.cljs$lang$type = true;
cljs.core.async.t178506.cljs$lang$ctorStr = "cljs.core.async/t178506";
cljs.core.async.t178506.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t178506");
});
cljs.core.async.t178506.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t178506.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t178506.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t178506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_178508){var self__ = this;
var _178508__$1 = this;return self__.meta178507;
});
cljs.core.async.t178506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_178508,meta178507__$1){var self__ = this;
var _178508__$1 = this;return (new cljs.core.async.t178506(self__.flag,self__.alt_flag,meta178507__$1));
});
cljs.core.async.__GT_t178506 = (function __GT_t178506(flag__$1,alt_flag__$1,meta178507){return (new cljs.core.async.t178506(flag__$1,alt_flag__$1,meta178507));
});
}
return (new cljs.core.async.t178506(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t178512 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t178512 = (function (cb,flag,alt_handler,meta178513){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta178513 = meta178513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t178512.cljs$lang$type = true;
cljs.core.async.t178512.cljs$lang$ctorStr = "cljs.core.async/t178512";
cljs.core.async.t178512.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t178512");
});
cljs.core.async.t178512.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t178512.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t178512.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t178512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_178514){var self__ = this;
var _178514__$1 = this;return self__.meta178513;
});
cljs.core.async.t178512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_178514,meta178513__$1){var self__ = this;
var _178514__$1 = this;return (new cljs.core.async.t178512(self__.cb,self__.flag,self__.alt_handler,meta178513__$1));
});
cljs.core.async.__GT_t178512 = (function __GT_t178512(cb__$1,flag__$1,alt_handler__$1,meta178513){return (new cljs.core.async.t178512(cb__$1,flag__$1,alt_handler__$1,meta178513));
});
}
return (new cljs.core.async.t178512(cb,flag,alt_handler,null));
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
return (function (p1__178515_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__178515_SHARP_,port], null));
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
var G__178516 = (i + 1);
i = G__178516;
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
var alts_BANG___delegate = function (ports,p__178517){var map__178519 = p__178517;var map__178519__$1 = ((cljs.core.seq_QMARK_.call(null,map__178519))?cljs.core.apply.call(null,cljs.core.hash_map,map__178519):map__178519);var opts = map__178519__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__178517 = null;if (arguments.length > 1) {
  p__178517 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__178517);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__178520){
var ports = cljs.core.first(arglist__178520);
var p__178517 = cljs.core.rest(arglist__178520);
return alts_BANG___delegate(ports,p__178517);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t178528 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t178528 = (function (ch,f,map_LT_,meta178529){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta178529 = meta178529;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t178528.cljs$lang$type = true;
cljs.core.async.t178528.cljs$lang$ctorStr = "cljs.core.async/t178528";
cljs.core.async.t178528.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t178528");
});
cljs.core.async.t178528.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t178528.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t178528.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t178528.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t178531 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t178531 = (function (fn1,_,meta178529,ch,f,map_LT_,meta178532){
this.fn1 = fn1;
this._ = _;
this.meta178529 = meta178529;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta178532 = meta178532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t178531.cljs$lang$type = true;
cljs.core.async.t178531.cljs$lang$ctorStr = "cljs.core.async/t178531";
cljs.core.async.t178531.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t178531");
});
cljs.core.async.t178531.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t178531.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t178531.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t178531.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__178521_SHARP_){return f1.call(null,(((p1__178521_SHARP_ == null))?null:self__.f.call(null,p1__178521_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t178531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_178533){var self__ = this;
var _178533__$1 = this;return self__.meta178532;
});
cljs.core.async.t178531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_178533,meta178532__$1){var self__ = this;
var _178533__$1 = this;return (new cljs.core.async.t178531(self__.fn1,self__._,self__.meta178529,self__.ch,self__.f,self__.map_LT_,meta178532__$1));
});
cljs.core.async.__GT_t178531 = (function __GT_t178531(fn1__$1,___$2,meta178529__$1,ch__$2,f__$2,map_LT___$2,meta178532){return (new cljs.core.async.t178531(fn1__$1,___$2,meta178529__$1,ch__$2,f__$2,map_LT___$2,meta178532));
});
}
return (new cljs.core.async.t178531(fn1,___$1,self__.meta178529,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t178528.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t178528.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t178528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_178530){var self__ = this;
var _178530__$1 = this;return self__.meta178529;
});
cljs.core.async.t178528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_178530,meta178529__$1){var self__ = this;
var _178530__$1 = this;return (new cljs.core.async.t178528(self__.ch,self__.f,self__.map_LT_,meta178529__$1));
});
cljs.core.async.__GT_t178528 = (function __GT_t178528(ch__$1,f__$1,map_LT___$1,meta178529){return (new cljs.core.async.t178528(ch__$1,f__$1,map_LT___$1,meta178529));
});
}
return (new cljs.core.async.t178528(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t178537 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t178537 = (function (ch,f,map_GT_,meta178538){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta178538 = meta178538;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t178537.cljs$lang$type = true;
cljs.core.async.t178537.cljs$lang$ctorStr = "cljs.core.async/t178537";
cljs.core.async.t178537.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t178537");
});
cljs.core.async.t178537.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t178537.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t178537.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t178537.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t178537.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t178537.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t178537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_178539){var self__ = this;
var _178539__$1 = this;return self__.meta178538;
});
cljs.core.async.t178537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_178539,meta178538__$1){var self__ = this;
var _178539__$1 = this;return (new cljs.core.async.t178537(self__.ch,self__.f,self__.map_GT_,meta178538__$1));
});
cljs.core.async.__GT_t178537 = (function __GT_t178537(ch__$1,f__$1,map_GT___$1,meta178538){return (new cljs.core.async.t178537(ch__$1,f__$1,map_GT___$1,meta178538));
});
}
return (new cljs.core.async.t178537(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t178543 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t178543 = (function (ch,p,filter_GT_,meta178544){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta178544 = meta178544;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t178543.cljs$lang$type = true;
cljs.core.async.t178543.cljs$lang$ctorStr = "cljs.core.async/t178543";
cljs.core.async.t178543.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t178543");
});
cljs.core.async.t178543.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t178543.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t178543.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t178543.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t178543.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t178543.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t178543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_178545){var self__ = this;
var _178545__$1 = this;return self__.meta178544;
});
cljs.core.async.t178543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_178545,meta178544__$1){var self__ = this;
var _178545__$1 = this;return (new cljs.core.async.t178543(self__.ch,self__.p,self__.filter_GT_,meta178544__$1));
});
cljs.core.async.__GT_t178543 = (function __GT_t178543(ch__$1,p__$1,filter_GT___$1,meta178544){return (new cljs.core.async.t178543(ch__$1,p__$1,filter_GT___$1,meta178544));
});
}
return (new cljs.core.async.t178543(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___178628 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_178607){var state_val_178608 = (state_178607[1]);if((state_val_178608 === 1))
{var state_178607__$1 = state_178607;var statearr_178609_178629 = state_178607__$1;(statearr_178609_178629[2] = null);
(statearr_178609_178629[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178608 === 2))
{var state_178607__$1 = state_178607;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_178607__$1,4,ch);
} else
{if((state_val_178608 === 3))
{var inst_178605 = (state_178607[2]);var state_178607__$1 = state_178607;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_178607__$1,inst_178605);
} else
{if((state_val_178608 === 4))
{var inst_178589 = (state_178607[7]);var inst_178589__$1 = (state_178607[2]);var inst_178590 = (inst_178589__$1 == null);var state_178607__$1 = (function (){var statearr_178610 = state_178607;(statearr_178610[7] = inst_178589__$1);
return statearr_178610;
})();if(cljs.core.truth_(inst_178590))
{var statearr_178611_178630 = state_178607__$1;(statearr_178611_178630[1] = 5);
} else
{var statearr_178612_178631 = state_178607__$1;(statearr_178612_178631[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178608 === 5))
{var inst_178592 = cljs.core.async.close_BANG_.call(null,out);var state_178607__$1 = state_178607;var statearr_178613_178632 = state_178607__$1;(statearr_178613_178632[2] = inst_178592);
(statearr_178613_178632[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178608 === 6))
{var inst_178589 = (state_178607[7]);var inst_178594 = p.call(null,inst_178589);var state_178607__$1 = state_178607;if(cljs.core.truth_(inst_178594))
{var statearr_178614_178633 = state_178607__$1;(statearr_178614_178633[1] = 8);
} else
{var statearr_178615_178634 = state_178607__$1;(statearr_178615_178634[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178608 === 7))
{var inst_178603 = (state_178607[2]);var state_178607__$1 = state_178607;var statearr_178616_178635 = state_178607__$1;(statearr_178616_178635[2] = inst_178603);
(statearr_178616_178635[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178608 === 8))
{var inst_178589 = (state_178607[7]);var state_178607__$1 = state_178607;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_178607__$1,11,out,inst_178589);
} else
{if((state_val_178608 === 9))
{var state_178607__$1 = state_178607;var statearr_178617_178636 = state_178607__$1;(statearr_178617_178636[2] = null);
(statearr_178617_178636[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178608 === 10))
{var inst_178600 = (state_178607[2]);var state_178607__$1 = (function (){var statearr_178618 = state_178607;(statearr_178618[8] = inst_178600);
return statearr_178618;
})();var statearr_178619_178637 = state_178607__$1;(statearr_178619_178637[2] = null);
(statearr_178619_178637[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178608 === 11))
{var inst_178597 = (state_178607[2]);var state_178607__$1 = state_178607;var statearr_178620_178638 = state_178607__$1;(statearr_178620_178638[2] = inst_178597);
(statearr_178620_178638[1] = 10);
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
var state_machine__13310__auto____0 = (function (){var statearr_178624 = (new Array(9));(statearr_178624[0] = state_machine__13310__auto__);
(statearr_178624[1] = 1);
return statearr_178624;
});
var state_machine__13310__auto____1 = (function (state_178607){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_178607);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e178625){if((e178625 instanceof Object))
{var ex__13313__auto__ = e178625;var statearr_178626_178639 = state_178607;(statearr_178626_178639[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_178607);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e178625;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__178640 = state_178607;
state_178607 = G__178640;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_178607){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_178607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_178627 = f__13410__auto__.call(null);(statearr_178627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___178628);
return statearr_178627;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_178792){var state_val_178793 = (state_178792[1]);if((state_val_178793 === 1))
{var state_178792__$1 = state_178792;var statearr_178794_178831 = state_178792__$1;(statearr_178794_178831[2] = null);
(statearr_178794_178831[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178793 === 2))
{var state_178792__$1 = state_178792;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_178792__$1,4,in$);
} else
{if((state_val_178793 === 3))
{var inst_178790 = (state_178792[2]);var state_178792__$1 = state_178792;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_178792__$1,inst_178790);
} else
{if((state_val_178793 === 4))
{var inst_178738 = (state_178792[7]);var inst_178738__$1 = (state_178792[2]);var inst_178739 = (inst_178738__$1 == null);var state_178792__$1 = (function (){var statearr_178795 = state_178792;(statearr_178795[7] = inst_178738__$1);
return statearr_178795;
})();if(cljs.core.truth_(inst_178739))
{var statearr_178796_178832 = state_178792__$1;(statearr_178796_178832[1] = 5);
} else
{var statearr_178797_178833 = state_178792__$1;(statearr_178797_178833[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178793 === 5))
{var inst_178741 = cljs.core.async.close_BANG_.call(null,out);var state_178792__$1 = state_178792;var statearr_178798_178834 = state_178792__$1;(statearr_178798_178834[2] = inst_178741);
(statearr_178798_178834[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178793 === 6))
{var inst_178738 = (state_178792[7]);var inst_178743 = f.call(null,inst_178738);var inst_178748 = cljs.core.seq.call(null,inst_178743);var inst_178749 = inst_178748;var inst_178750 = null;var inst_178751 = 0;var inst_178752 = 0;var state_178792__$1 = (function (){var statearr_178799 = state_178792;(statearr_178799[8] = inst_178752);
(statearr_178799[9] = inst_178751);
(statearr_178799[10] = inst_178750);
(statearr_178799[11] = inst_178749);
return statearr_178799;
})();var statearr_178800_178835 = state_178792__$1;(statearr_178800_178835[2] = null);
(statearr_178800_178835[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178793 === 7))
{var inst_178788 = (state_178792[2]);var state_178792__$1 = state_178792;var statearr_178801_178836 = state_178792__$1;(statearr_178801_178836[2] = inst_178788);
(statearr_178801_178836[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178793 === 8))
{var inst_178752 = (state_178792[8]);var inst_178751 = (state_178792[9]);var inst_178754 = (inst_178752 < inst_178751);var inst_178755 = inst_178754;var state_178792__$1 = state_178792;if(cljs.core.truth_(inst_178755))
{var statearr_178802_178837 = state_178792__$1;(statearr_178802_178837[1] = 10);
} else
{var statearr_178803_178838 = state_178792__$1;(statearr_178803_178838[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178793 === 9))
{var inst_178785 = (state_178792[2]);var state_178792__$1 = (function (){var statearr_178804 = state_178792;(statearr_178804[12] = inst_178785);
return statearr_178804;
})();var statearr_178805_178839 = state_178792__$1;(statearr_178805_178839[2] = null);
(statearr_178805_178839[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178793 === 10))
{var inst_178752 = (state_178792[8]);var inst_178750 = (state_178792[10]);var inst_178757 = cljs.core._nth.call(null,inst_178750,inst_178752);var state_178792__$1 = state_178792;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_178792__$1,13,out,inst_178757);
} else
{if((state_val_178793 === 11))
{var inst_178749 = (state_178792[11]);var inst_178763 = (state_178792[13]);var inst_178763__$1 = cljs.core.seq.call(null,inst_178749);var state_178792__$1 = (function (){var statearr_178809 = state_178792;(statearr_178809[13] = inst_178763__$1);
return statearr_178809;
})();if(inst_178763__$1)
{var statearr_178810_178840 = state_178792__$1;(statearr_178810_178840[1] = 14);
} else
{var statearr_178811_178841 = state_178792__$1;(statearr_178811_178841[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178793 === 12))
{var inst_178783 = (state_178792[2]);var state_178792__$1 = state_178792;var statearr_178812_178842 = state_178792__$1;(statearr_178812_178842[2] = inst_178783);
(statearr_178812_178842[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178793 === 13))
{var inst_178752 = (state_178792[8]);var inst_178751 = (state_178792[9]);var inst_178750 = (state_178792[10]);var inst_178749 = (state_178792[11]);var inst_178759 = (state_178792[2]);var inst_178760 = (inst_178752 + 1);var tmp178806 = inst_178751;var tmp178807 = inst_178750;var tmp178808 = inst_178749;var inst_178749__$1 = tmp178808;var inst_178750__$1 = tmp178807;var inst_178751__$1 = tmp178806;var inst_178752__$1 = inst_178760;var state_178792__$1 = (function (){var statearr_178813 = state_178792;(statearr_178813[14] = inst_178759);
(statearr_178813[8] = inst_178752__$1);
(statearr_178813[9] = inst_178751__$1);
(statearr_178813[10] = inst_178750__$1);
(statearr_178813[11] = inst_178749__$1);
return statearr_178813;
})();var statearr_178814_178843 = state_178792__$1;(statearr_178814_178843[2] = null);
(statearr_178814_178843[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178793 === 14))
{var inst_178763 = (state_178792[13]);var inst_178765 = cljs.core.chunked_seq_QMARK_.call(null,inst_178763);var state_178792__$1 = state_178792;if(inst_178765)
{var statearr_178815_178844 = state_178792__$1;(statearr_178815_178844[1] = 17);
} else
{var statearr_178816_178845 = state_178792__$1;(statearr_178816_178845[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178793 === 15))
{var state_178792__$1 = state_178792;var statearr_178817_178846 = state_178792__$1;(statearr_178817_178846[2] = null);
(statearr_178817_178846[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178793 === 16))
{var inst_178781 = (state_178792[2]);var state_178792__$1 = state_178792;var statearr_178818_178847 = state_178792__$1;(statearr_178818_178847[2] = inst_178781);
(statearr_178818_178847[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178793 === 17))
{var inst_178763 = (state_178792[13]);var inst_178767 = cljs.core.chunk_first.call(null,inst_178763);var inst_178768 = cljs.core.chunk_rest.call(null,inst_178763);var inst_178769 = cljs.core.count.call(null,inst_178767);var inst_178749 = inst_178768;var inst_178750 = inst_178767;var inst_178751 = inst_178769;var inst_178752 = 0;var state_178792__$1 = (function (){var statearr_178819 = state_178792;(statearr_178819[8] = inst_178752);
(statearr_178819[9] = inst_178751);
(statearr_178819[10] = inst_178750);
(statearr_178819[11] = inst_178749);
return statearr_178819;
})();var statearr_178820_178848 = state_178792__$1;(statearr_178820_178848[2] = null);
(statearr_178820_178848[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178793 === 18))
{var inst_178763 = (state_178792[13]);var inst_178772 = cljs.core.first.call(null,inst_178763);var state_178792__$1 = state_178792;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_178792__$1,20,out,inst_178772);
} else
{if((state_val_178793 === 19))
{var inst_178778 = (state_178792[2]);var state_178792__$1 = state_178792;var statearr_178821_178849 = state_178792__$1;(statearr_178821_178849[2] = inst_178778);
(statearr_178821_178849[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178793 === 20))
{var inst_178763 = (state_178792[13]);var inst_178774 = (state_178792[2]);var inst_178775 = cljs.core.next.call(null,inst_178763);var inst_178749 = inst_178775;var inst_178750 = null;var inst_178751 = 0;var inst_178752 = 0;var state_178792__$1 = (function (){var statearr_178822 = state_178792;(statearr_178822[8] = inst_178752);
(statearr_178822[9] = inst_178751);
(statearr_178822[10] = inst_178750);
(statearr_178822[15] = inst_178774);
(statearr_178822[11] = inst_178749);
return statearr_178822;
})();var statearr_178823_178850 = state_178792__$1;(statearr_178823_178850[2] = null);
(statearr_178823_178850[1] = 8);
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
var state_machine__13310__auto____0 = (function (){var statearr_178827 = (new Array(16));(statearr_178827[0] = state_machine__13310__auto__);
(statearr_178827[1] = 1);
return statearr_178827;
});
var state_machine__13310__auto____1 = (function (state_178792){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_178792);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e178828){if((e178828 instanceof Object))
{var ex__13313__auto__ = e178828;var statearr_178829_178851 = state_178792;(statearr_178829_178851[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_178792);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e178828;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__178852 = state_178792;
state_178792 = G__178852;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_178792){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_178792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_178830 = f__13410__auto__.call(null);(statearr_178830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_178830;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13409__auto___178933 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_178912){var state_val_178913 = (state_178912[1]);if((state_val_178913 === 1))
{var state_178912__$1 = state_178912;var statearr_178914_178934 = state_178912__$1;(statearr_178914_178934[2] = null);
(statearr_178914_178934[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178913 === 2))
{var state_178912__$1 = state_178912;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_178912__$1,4,from);
} else
{if((state_val_178913 === 3))
{var inst_178910 = (state_178912[2]);var state_178912__$1 = state_178912;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_178912__$1,inst_178910);
} else
{if((state_val_178913 === 4))
{var inst_178895 = (state_178912[7]);var inst_178895__$1 = (state_178912[2]);var inst_178896 = (inst_178895__$1 == null);var state_178912__$1 = (function (){var statearr_178915 = state_178912;(statearr_178915[7] = inst_178895__$1);
return statearr_178915;
})();if(cljs.core.truth_(inst_178896))
{var statearr_178916_178935 = state_178912__$1;(statearr_178916_178935[1] = 5);
} else
{var statearr_178917_178936 = state_178912__$1;(statearr_178917_178936[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178913 === 5))
{var state_178912__$1 = state_178912;if(cljs.core.truth_(close_QMARK_))
{var statearr_178918_178937 = state_178912__$1;(statearr_178918_178937[1] = 8);
} else
{var statearr_178919_178938 = state_178912__$1;(statearr_178919_178938[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178913 === 6))
{var inst_178895 = (state_178912[7]);var state_178912__$1 = state_178912;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_178912__$1,11,to,inst_178895);
} else
{if((state_val_178913 === 7))
{var inst_178908 = (state_178912[2]);var state_178912__$1 = state_178912;var statearr_178920_178939 = state_178912__$1;(statearr_178920_178939[2] = inst_178908);
(statearr_178920_178939[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178913 === 8))
{var inst_178899 = cljs.core.async.close_BANG_.call(null,to);var state_178912__$1 = state_178912;var statearr_178921_178940 = state_178912__$1;(statearr_178921_178940[2] = inst_178899);
(statearr_178921_178940[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178913 === 9))
{var state_178912__$1 = state_178912;var statearr_178922_178941 = state_178912__$1;(statearr_178922_178941[2] = null);
(statearr_178922_178941[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178913 === 10))
{var inst_178902 = (state_178912[2]);var state_178912__$1 = state_178912;var statearr_178923_178942 = state_178912__$1;(statearr_178923_178942[2] = inst_178902);
(statearr_178923_178942[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_178913 === 11))
{var inst_178905 = (state_178912[2]);var state_178912__$1 = (function (){var statearr_178924 = state_178912;(statearr_178924[8] = inst_178905);
return statearr_178924;
})();var statearr_178925_178943 = state_178912__$1;(statearr_178925_178943[2] = null);
(statearr_178925_178943[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_178929 = (new Array(9));(statearr_178929[0] = state_machine__13310__auto__);
(statearr_178929[1] = 1);
return statearr_178929;
});
var state_machine__13310__auto____1 = (function (state_178912){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_178912);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e178930){if((e178930 instanceof Object))
{var ex__13313__auto__ = e178930;var statearr_178931_178944 = state_178912;(statearr_178931_178944[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_178912);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e178930;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__178945 = state_178912;
state_178912 = G__178945;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_178912){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_178912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_178932 = f__13410__auto__.call(null);(statearr_178932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___178933);
return statearr_178932;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13409__auto___179032 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_179010){var state_val_179011 = (state_179010[1]);if((state_val_179011 === 1))
{var state_179010__$1 = state_179010;var statearr_179012_179033 = state_179010__$1;(statearr_179012_179033[2] = null);
(statearr_179012_179033[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179011 === 2))
{var state_179010__$1 = state_179010;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_179010__$1,4,ch);
} else
{if((state_val_179011 === 3))
{var inst_179008 = (state_179010[2]);var state_179010__$1 = state_179010;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_179010__$1,inst_179008);
} else
{if((state_val_179011 === 4))
{var inst_178991 = (state_179010[7]);var inst_178991__$1 = (state_179010[2]);var inst_178992 = (inst_178991__$1 == null);var state_179010__$1 = (function (){var statearr_179013 = state_179010;(statearr_179013[7] = inst_178991__$1);
return statearr_179013;
})();if(cljs.core.truth_(inst_178992))
{var statearr_179014_179034 = state_179010__$1;(statearr_179014_179034[1] = 5);
} else
{var statearr_179015_179035 = state_179010__$1;(statearr_179015_179035[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179011 === 5))
{var inst_178994 = cljs.core.async.close_BANG_.call(null,tc);var inst_178995 = cljs.core.async.close_BANG_.call(null,fc);var state_179010__$1 = (function (){var statearr_179016 = state_179010;(statearr_179016[8] = inst_178994);
return statearr_179016;
})();var statearr_179017_179036 = state_179010__$1;(statearr_179017_179036[2] = inst_178995);
(statearr_179017_179036[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179011 === 6))
{var inst_178991 = (state_179010[7]);var inst_178997 = p.call(null,inst_178991);var state_179010__$1 = state_179010;if(cljs.core.truth_(inst_178997))
{var statearr_179018_179037 = state_179010__$1;(statearr_179018_179037[1] = 9);
} else
{var statearr_179019_179038 = state_179010__$1;(statearr_179019_179038[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179011 === 7))
{var inst_179006 = (state_179010[2]);var state_179010__$1 = state_179010;var statearr_179020_179039 = state_179010__$1;(statearr_179020_179039[2] = inst_179006);
(statearr_179020_179039[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179011 === 8))
{var inst_179003 = (state_179010[2]);var state_179010__$1 = (function (){var statearr_179021 = state_179010;(statearr_179021[9] = inst_179003);
return statearr_179021;
})();var statearr_179022_179040 = state_179010__$1;(statearr_179022_179040[2] = null);
(statearr_179022_179040[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179011 === 9))
{var state_179010__$1 = state_179010;var statearr_179023_179041 = state_179010__$1;(statearr_179023_179041[2] = tc);
(statearr_179023_179041[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179011 === 10))
{var state_179010__$1 = state_179010;var statearr_179024_179042 = state_179010__$1;(statearr_179024_179042[2] = fc);
(statearr_179024_179042[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179011 === 11))
{var inst_178991 = (state_179010[7]);var inst_179001 = (state_179010[2]);var state_179010__$1 = state_179010;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_179010__$1,8,inst_179001,inst_178991);
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
var state_machine__13310__auto____0 = (function (){var statearr_179028 = (new Array(10));(statearr_179028[0] = state_machine__13310__auto__);
(statearr_179028[1] = 1);
return statearr_179028;
});
var state_machine__13310__auto____1 = (function (state_179010){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_179010);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e179029){if((e179029 instanceof Object))
{var ex__13313__auto__ = e179029;var statearr_179030_179043 = state_179010;(statearr_179030_179043[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179010);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e179029;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__179044 = state_179010;
state_179010 = G__179044;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_179010){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_179010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_179031 = f__13410__auto__.call(null);(statearr_179031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___179032);
return statearr_179031;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_179091){var state_val_179092 = (state_179091[1]);if((state_val_179092 === 7))
{var inst_179087 = (state_179091[2]);var state_179091__$1 = state_179091;var statearr_179093_179109 = state_179091__$1;(statearr_179093_179109[2] = inst_179087);
(statearr_179093_179109[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179092 === 6))
{var inst_179077 = (state_179091[7]);var inst_179080 = (state_179091[8]);var inst_179084 = f.call(null,inst_179077,inst_179080);var inst_179077__$1 = inst_179084;var state_179091__$1 = (function (){var statearr_179094 = state_179091;(statearr_179094[7] = inst_179077__$1);
return statearr_179094;
})();var statearr_179095_179110 = state_179091__$1;(statearr_179095_179110[2] = null);
(statearr_179095_179110[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179092 === 5))
{var inst_179077 = (state_179091[7]);var state_179091__$1 = state_179091;var statearr_179096_179111 = state_179091__$1;(statearr_179096_179111[2] = inst_179077);
(statearr_179096_179111[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179092 === 4))
{var inst_179080 = (state_179091[8]);var inst_179080__$1 = (state_179091[2]);var inst_179081 = (inst_179080__$1 == null);var state_179091__$1 = (function (){var statearr_179097 = state_179091;(statearr_179097[8] = inst_179080__$1);
return statearr_179097;
})();if(cljs.core.truth_(inst_179081))
{var statearr_179098_179112 = state_179091__$1;(statearr_179098_179112[1] = 5);
} else
{var statearr_179099_179113 = state_179091__$1;(statearr_179099_179113[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179092 === 3))
{var inst_179089 = (state_179091[2]);var state_179091__$1 = state_179091;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_179091__$1,inst_179089);
} else
{if((state_val_179092 === 2))
{var state_179091__$1 = state_179091;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_179091__$1,4,ch);
} else
{if((state_val_179092 === 1))
{var inst_179077 = init;var state_179091__$1 = (function (){var statearr_179100 = state_179091;(statearr_179100[7] = inst_179077);
return statearr_179100;
})();var statearr_179101_179114 = state_179091__$1;(statearr_179101_179114[2] = null);
(statearr_179101_179114[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_179105 = (new Array(9));(statearr_179105[0] = state_machine__13310__auto__);
(statearr_179105[1] = 1);
return statearr_179105;
});
var state_machine__13310__auto____1 = (function (state_179091){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_179091);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e179106){if((e179106 instanceof Object))
{var ex__13313__auto__ = e179106;var statearr_179107_179115 = state_179091;(statearr_179107_179115[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179091);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e179106;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__179116 = state_179091;
state_179091 = G__179116;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_179091){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_179091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_179108 = f__13410__auto__.call(null);(statearr_179108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_179108;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_179178){var state_val_179179 = (state_179178[1]);if((state_val_179179 === 1))
{var inst_179158 = cljs.core.seq.call(null,coll);var inst_179159 = inst_179158;var state_179178__$1 = (function (){var statearr_179180 = state_179178;(statearr_179180[7] = inst_179159);
return statearr_179180;
})();var statearr_179181_179199 = state_179178__$1;(statearr_179181_179199[2] = null);
(statearr_179181_179199[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179179 === 2))
{var inst_179159 = (state_179178[7]);var state_179178__$1 = state_179178;if(cljs.core.truth_(inst_179159))
{var statearr_179182_179200 = state_179178__$1;(statearr_179182_179200[1] = 4);
} else
{var statearr_179183_179201 = state_179178__$1;(statearr_179183_179201[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179179 === 3))
{var inst_179176 = (state_179178[2]);var state_179178__$1 = state_179178;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_179178__$1,inst_179176);
} else
{if((state_val_179179 === 4))
{var inst_179159 = (state_179178[7]);var inst_179162 = cljs.core.first.call(null,inst_179159);var state_179178__$1 = state_179178;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_179178__$1,7,ch,inst_179162);
} else
{if((state_val_179179 === 5))
{var state_179178__$1 = state_179178;if(cljs.core.truth_(close_QMARK_))
{var statearr_179184_179202 = state_179178__$1;(statearr_179184_179202[1] = 8);
} else
{var statearr_179185_179203 = state_179178__$1;(statearr_179185_179203[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179179 === 6))
{var inst_179174 = (state_179178[2]);var state_179178__$1 = state_179178;var statearr_179186_179204 = state_179178__$1;(statearr_179186_179204[2] = inst_179174);
(statearr_179186_179204[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179179 === 7))
{var inst_179159 = (state_179178[7]);var inst_179164 = (state_179178[2]);var inst_179165 = cljs.core.next.call(null,inst_179159);var inst_179159__$1 = inst_179165;var state_179178__$1 = (function (){var statearr_179187 = state_179178;(statearr_179187[8] = inst_179164);
(statearr_179187[7] = inst_179159__$1);
return statearr_179187;
})();var statearr_179188_179205 = state_179178__$1;(statearr_179188_179205[2] = null);
(statearr_179188_179205[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179179 === 8))
{var inst_179169 = cljs.core.async.close_BANG_.call(null,ch);var state_179178__$1 = state_179178;var statearr_179189_179206 = state_179178__$1;(statearr_179189_179206[2] = inst_179169);
(statearr_179189_179206[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179179 === 9))
{var state_179178__$1 = state_179178;var statearr_179190_179207 = state_179178__$1;(statearr_179190_179207[2] = null);
(statearr_179190_179207[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179179 === 10))
{var inst_179172 = (state_179178[2]);var state_179178__$1 = state_179178;var statearr_179191_179208 = state_179178__$1;(statearr_179191_179208[2] = inst_179172);
(statearr_179191_179208[1] = 6);
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
var state_machine__13310__auto____0 = (function (){var statearr_179195 = (new Array(9));(statearr_179195[0] = state_machine__13310__auto__);
(statearr_179195[1] = 1);
return statearr_179195;
});
var state_machine__13310__auto____1 = (function (state_179178){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_179178);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e179196){if((e179196 instanceof Object))
{var ex__13313__auto__ = e179196;var statearr_179197_179209 = state_179178;(statearr_179197_179209[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179178);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e179196;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__179210 = state_179178;
state_179178 = G__179210;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_179178){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_179178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_179198 = f__13410__auto__.call(null);(statearr_179198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_179198;
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
cljs.core.async.Mux = (function (){var obj179212 = {};return obj179212;
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
cljs.core.async.Mult = (function (){var obj179214 = {};return obj179214;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t179429 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t179429 = (function (cs,ch,mult,meta179430){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta179430 = meta179430;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t179429.cljs$lang$type = true;
cljs.core.async.t179429.cljs$lang$ctorStr = "cljs.core.async/t179429";
cljs.core.async.t179429.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t179429");
});})(cs))
;
cljs.core.async.t179429.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t179429.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t179429.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t179429.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t179429.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t179429.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t179429.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_179431){var self__ = this;
var _179431__$1 = this;return self__.meta179430;
});})(cs))
;
cljs.core.async.t179429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_179431,meta179430__$1){var self__ = this;
var _179431__$1 = this;return (new cljs.core.async.t179429(self__.cs,self__.ch,self__.mult,meta179430__$1));
});})(cs))
;
cljs.core.async.__GT_t179429 = ((function (cs){
return (function __GT_t179429(cs__$1,ch__$1,mult__$1,meta179430){return (new cljs.core.async.t179429(cs__$1,ch__$1,mult__$1,meta179430));
});})(cs))
;
}
return (new cljs.core.async.t179429(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13409__auto___179643 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_179561){var state_val_179562 = (state_179561[1]);if((state_val_179562 === 32))
{var inst_179434 = (state_179561[7]);var inst_179510 = (state_179561[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_179561,31,Object,null,30);var inst_179517 = cljs.core.async.put_BANG_.call(null,inst_179510,inst_179434,done);var state_179561__$1 = state_179561;var statearr_179563_179644 = state_179561__$1;(statearr_179563_179644[2] = inst_179517);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179561__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 1))
{var state_179561__$1 = state_179561;var statearr_179564_179645 = state_179561__$1;(statearr_179564_179645[2] = null);
(statearr_179564_179645[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 33))
{var inst_179523 = (state_179561[9]);var inst_179525 = cljs.core.chunked_seq_QMARK_.call(null,inst_179523);var state_179561__$1 = state_179561;if(inst_179525)
{var statearr_179565_179646 = state_179561__$1;(statearr_179565_179646[1] = 36);
} else
{var statearr_179566_179647 = state_179561__$1;(statearr_179566_179647[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 2))
{var state_179561__$1 = state_179561;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_179561__$1,4,ch);
} else
{if((state_val_179562 === 34))
{var state_179561__$1 = state_179561;var statearr_179567_179648 = state_179561__$1;(statearr_179567_179648[2] = null);
(statearr_179567_179648[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 3))
{var inst_179559 = (state_179561[2]);var state_179561__$1 = state_179561;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_179561__$1,inst_179559);
} else
{if((state_val_179562 === 35))
{var inst_179548 = (state_179561[2]);var state_179561__$1 = state_179561;var statearr_179568_179649 = state_179561__$1;(statearr_179568_179649[2] = inst_179548);
(statearr_179568_179649[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 4))
{var inst_179434 = (state_179561[7]);var inst_179434__$1 = (state_179561[2]);var inst_179435 = (inst_179434__$1 == null);var state_179561__$1 = (function (){var statearr_179569 = state_179561;(statearr_179569[7] = inst_179434__$1);
return statearr_179569;
})();if(cljs.core.truth_(inst_179435))
{var statearr_179570_179650 = state_179561__$1;(statearr_179570_179650[1] = 5);
} else
{var statearr_179571_179651 = state_179561__$1;(statearr_179571_179651[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 36))
{var inst_179523 = (state_179561[9]);var inst_179527 = cljs.core.chunk_first.call(null,inst_179523);var inst_179528 = cljs.core.chunk_rest.call(null,inst_179523);var inst_179529 = cljs.core.count.call(null,inst_179527);var inst_179502 = inst_179528;var inst_179503 = inst_179527;var inst_179504 = inst_179529;var inst_179505 = 0;var state_179561__$1 = (function (){var statearr_179572 = state_179561;(statearr_179572[10] = inst_179502);
(statearr_179572[11] = inst_179503);
(statearr_179572[12] = inst_179504);
(statearr_179572[13] = inst_179505);
return statearr_179572;
})();var statearr_179573_179652 = state_179561__$1;(statearr_179573_179652[2] = null);
(statearr_179573_179652[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 5))
{var inst_179441 = cljs.core.deref.call(null,cs);var inst_179442 = cljs.core.seq.call(null,inst_179441);var inst_179443 = inst_179442;var inst_179444 = null;var inst_179445 = 0;var inst_179446 = 0;var state_179561__$1 = (function (){var statearr_179574 = state_179561;(statearr_179574[14] = inst_179445);
(statearr_179574[15] = inst_179444);
(statearr_179574[16] = inst_179443);
(statearr_179574[17] = inst_179446);
return statearr_179574;
})();var statearr_179575_179653 = state_179561__$1;(statearr_179575_179653[2] = null);
(statearr_179575_179653[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 37))
{var inst_179523 = (state_179561[9]);var inst_179532 = cljs.core.first.call(null,inst_179523);var state_179561__$1 = (function (){var statearr_179576 = state_179561;(statearr_179576[18] = inst_179532);
return statearr_179576;
})();var statearr_179577_179654 = state_179561__$1;(statearr_179577_179654[2] = null);
(statearr_179577_179654[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 6))
{var inst_179493 = cljs.core.deref.call(null,cs);var inst_179494 = cljs.core.keys.call(null,inst_179493);var inst_179495 = cljs.core.count.call(null,inst_179494);var inst_179496 = cljs.core.reset_BANG_.call(null,dctr,inst_179495);var inst_179501 = cljs.core.seq.call(null,inst_179494);var inst_179502 = inst_179501;var inst_179503 = null;var inst_179504 = 0;var inst_179505 = 0;var state_179561__$1 = (function (){var statearr_179578 = state_179561;(statearr_179578[10] = inst_179502);
(statearr_179578[11] = inst_179503);
(statearr_179578[12] = inst_179504);
(statearr_179578[13] = inst_179505);
(statearr_179578[19] = inst_179496);
return statearr_179578;
})();var statearr_179579_179655 = state_179561__$1;(statearr_179579_179655[2] = null);
(statearr_179579_179655[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 38))
{var inst_179545 = (state_179561[2]);var state_179561__$1 = state_179561;var statearr_179580_179656 = state_179561__$1;(statearr_179580_179656[2] = inst_179545);
(statearr_179580_179656[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 7))
{var inst_179557 = (state_179561[2]);var state_179561__$1 = state_179561;var statearr_179581_179657 = state_179561__$1;(statearr_179581_179657[2] = inst_179557);
(statearr_179581_179657[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 39))
{var inst_179523 = (state_179561[9]);var inst_179541 = (state_179561[2]);var inst_179542 = cljs.core.next.call(null,inst_179523);var inst_179502 = inst_179542;var inst_179503 = null;var inst_179504 = 0;var inst_179505 = 0;var state_179561__$1 = (function (){var statearr_179582 = state_179561;(statearr_179582[10] = inst_179502);
(statearr_179582[11] = inst_179503);
(statearr_179582[12] = inst_179504);
(statearr_179582[13] = inst_179505);
(statearr_179582[20] = inst_179541);
return statearr_179582;
})();var statearr_179583_179658 = state_179561__$1;(statearr_179583_179658[2] = null);
(statearr_179583_179658[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 8))
{var inst_179445 = (state_179561[14]);var inst_179446 = (state_179561[17]);var inst_179448 = (inst_179446 < inst_179445);var inst_179449 = inst_179448;var state_179561__$1 = state_179561;if(cljs.core.truth_(inst_179449))
{var statearr_179584_179659 = state_179561__$1;(statearr_179584_179659[1] = 10);
} else
{var statearr_179585_179660 = state_179561__$1;(statearr_179585_179660[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 40))
{var inst_179532 = (state_179561[18]);var inst_179533 = (state_179561[2]);var inst_179534 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_179535 = cljs.core.async.untap_STAR_.call(null,m,inst_179532);var state_179561__$1 = (function (){var statearr_179586 = state_179561;(statearr_179586[21] = inst_179534);
(statearr_179586[22] = inst_179533);
return statearr_179586;
})();var statearr_179587_179661 = state_179561__$1;(statearr_179587_179661[2] = inst_179535);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179561__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 9))
{var inst_179491 = (state_179561[2]);var state_179561__$1 = state_179561;var statearr_179588_179662 = state_179561__$1;(statearr_179588_179662[2] = inst_179491);
(statearr_179588_179662[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 41))
{var inst_179434 = (state_179561[7]);var inst_179532 = (state_179561[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_179561,40,Object,null,39);var inst_179539 = cljs.core.async.put_BANG_.call(null,inst_179532,inst_179434,done);var state_179561__$1 = state_179561;var statearr_179589_179663 = state_179561__$1;(statearr_179589_179663[2] = inst_179539);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179561__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 10))
{var inst_179444 = (state_179561[15]);var inst_179446 = (state_179561[17]);var inst_179452 = cljs.core._nth.call(null,inst_179444,inst_179446);var inst_179453 = cljs.core.nth.call(null,inst_179452,0,null);var inst_179454 = cljs.core.nth.call(null,inst_179452,1,null);var state_179561__$1 = (function (){var statearr_179590 = state_179561;(statearr_179590[23] = inst_179453);
return statearr_179590;
})();if(cljs.core.truth_(inst_179454))
{var statearr_179591_179664 = state_179561__$1;(statearr_179591_179664[1] = 13);
} else
{var statearr_179592_179665 = state_179561__$1;(statearr_179592_179665[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 42))
{var inst_179554 = (state_179561[2]);var state_179561__$1 = (function (){var statearr_179593 = state_179561;(statearr_179593[24] = inst_179554);
return statearr_179593;
})();var statearr_179594_179666 = state_179561__$1;(statearr_179594_179666[2] = null);
(statearr_179594_179666[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 11))
{var inst_179443 = (state_179561[16]);var inst_179463 = (state_179561[25]);var inst_179463__$1 = cljs.core.seq.call(null,inst_179443);var state_179561__$1 = (function (){var statearr_179595 = state_179561;(statearr_179595[25] = inst_179463__$1);
return statearr_179595;
})();if(inst_179463__$1)
{var statearr_179596_179667 = state_179561__$1;(statearr_179596_179667[1] = 16);
} else
{var statearr_179597_179668 = state_179561__$1;(statearr_179597_179668[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 12))
{var inst_179489 = (state_179561[2]);var state_179561__$1 = state_179561;var statearr_179598_179669 = state_179561__$1;(statearr_179598_179669[2] = inst_179489);
(statearr_179598_179669[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 13))
{var inst_179453 = (state_179561[23]);var inst_179456 = cljs.core.async.close_BANG_.call(null,inst_179453);var state_179561__$1 = state_179561;var statearr_179602_179670 = state_179561__$1;(statearr_179602_179670[2] = inst_179456);
(statearr_179602_179670[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 14))
{var state_179561__$1 = state_179561;var statearr_179603_179671 = state_179561__$1;(statearr_179603_179671[2] = null);
(statearr_179603_179671[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 15))
{var inst_179445 = (state_179561[14]);var inst_179444 = (state_179561[15]);var inst_179443 = (state_179561[16]);var inst_179446 = (state_179561[17]);var inst_179459 = (state_179561[2]);var inst_179460 = (inst_179446 + 1);var tmp179599 = inst_179445;var tmp179600 = inst_179444;var tmp179601 = inst_179443;var inst_179443__$1 = tmp179601;var inst_179444__$1 = tmp179600;var inst_179445__$1 = tmp179599;var inst_179446__$1 = inst_179460;var state_179561__$1 = (function (){var statearr_179604 = state_179561;(statearr_179604[14] = inst_179445__$1);
(statearr_179604[15] = inst_179444__$1);
(statearr_179604[16] = inst_179443__$1);
(statearr_179604[26] = inst_179459);
(statearr_179604[17] = inst_179446__$1);
return statearr_179604;
})();var statearr_179605_179672 = state_179561__$1;(statearr_179605_179672[2] = null);
(statearr_179605_179672[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 16))
{var inst_179463 = (state_179561[25]);var inst_179465 = cljs.core.chunked_seq_QMARK_.call(null,inst_179463);var state_179561__$1 = state_179561;if(inst_179465)
{var statearr_179606_179673 = state_179561__$1;(statearr_179606_179673[1] = 19);
} else
{var statearr_179607_179674 = state_179561__$1;(statearr_179607_179674[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 17))
{var state_179561__$1 = state_179561;var statearr_179608_179675 = state_179561__$1;(statearr_179608_179675[2] = null);
(statearr_179608_179675[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 18))
{var inst_179487 = (state_179561[2]);var state_179561__$1 = state_179561;var statearr_179609_179676 = state_179561__$1;(statearr_179609_179676[2] = inst_179487);
(statearr_179609_179676[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 19))
{var inst_179463 = (state_179561[25]);var inst_179467 = cljs.core.chunk_first.call(null,inst_179463);var inst_179468 = cljs.core.chunk_rest.call(null,inst_179463);var inst_179469 = cljs.core.count.call(null,inst_179467);var inst_179443 = inst_179468;var inst_179444 = inst_179467;var inst_179445 = inst_179469;var inst_179446 = 0;var state_179561__$1 = (function (){var statearr_179610 = state_179561;(statearr_179610[14] = inst_179445);
(statearr_179610[15] = inst_179444);
(statearr_179610[16] = inst_179443);
(statearr_179610[17] = inst_179446);
return statearr_179610;
})();var statearr_179611_179677 = state_179561__$1;(statearr_179611_179677[2] = null);
(statearr_179611_179677[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 20))
{var inst_179463 = (state_179561[25]);var inst_179473 = cljs.core.first.call(null,inst_179463);var inst_179474 = cljs.core.nth.call(null,inst_179473,0,null);var inst_179475 = cljs.core.nth.call(null,inst_179473,1,null);var state_179561__$1 = (function (){var statearr_179612 = state_179561;(statearr_179612[27] = inst_179474);
return statearr_179612;
})();if(cljs.core.truth_(inst_179475))
{var statearr_179613_179678 = state_179561__$1;(statearr_179613_179678[1] = 22);
} else
{var statearr_179614_179679 = state_179561__$1;(statearr_179614_179679[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 21))
{var inst_179484 = (state_179561[2]);var state_179561__$1 = state_179561;var statearr_179615_179680 = state_179561__$1;(statearr_179615_179680[2] = inst_179484);
(statearr_179615_179680[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 22))
{var inst_179474 = (state_179561[27]);var inst_179477 = cljs.core.async.close_BANG_.call(null,inst_179474);var state_179561__$1 = state_179561;var statearr_179616_179681 = state_179561__$1;(statearr_179616_179681[2] = inst_179477);
(statearr_179616_179681[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 23))
{var state_179561__$1 = state_179561;var statearr_179617_179682 = state_179561__$1;(statearr_179617_179682[2] = null);
(statearr_179617_179682[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 24))
{var inst_179463 = (state_179561[25]);var inst_179480 = (state_179561[2]);var inst_179481 = cljs.core.next.call(null,inst_179463);var inst_179443 = inst_179481;var inst_179444 = null;var inst_179445 = 0;var inst_179446 = 0;var state_179561__$1 = (function (){var statearr_179618 = state_179561;(statearr_179618[14] = inst_179445);
(statearr_179618[15] = inst_179444);
(statearr_179618[16] = inst_179443);
(statearr_179618[28] = inst_179480);
(statearr_179618[17] = inst_179446);
return statearr_179618;
})();var statearr_179619_179683 = state_179561__$1;(statearr_179619_179683[2] = null);
(statearr_179619_179683[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 25))
{var inst_179504 = (state_179561[12]);var inst_179505 = (state_179561[13]);var inst_179507 = (inst_179505 < inst_179504);var inst_179508 = inst_179507;var state_179561__$1 = state_179561;if(cljs.core.truth_(inst_179508))
{var statearr_179620_179684 = state_179561__$1;(statearr_179620_179684[1] = 27);
} else
{var statearr_179621_179685 = state_179561__$1;(statearr_179621_179685[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 26))
{var inst_179552 = (state_179561[2]);var state_179561__$1 = (function (){var statearr_179622 = state_179561;(statearr_179622[29] = inst_179552);
return statearr_179622;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_179561__$1,42,dchan);
} else
{if((state_val_179562 === 27))
{var inst_179503 = (state_179561[11]);var inst_179505 = (state_179561[13]);var inst_179510 = cljs.core._nth.call(null,inst_179503,inst_179505);var state_179561__$1 = (function (){var statearr_179623 = state_179561;(statearr_179623[8] = inst_179510);
return statearr_179623;
})();var statearr_179624_179686 = state_179561__$1;(statearr_179624_179686[2] = null);
(statearr_179624_179686[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 28))
{var inst_179502 = (state_179561[10]);var inst_179523 = (state_179561[9]);var inst_179523__$1 = cljs.core.seq.call(null,inst_179502);var state_179561__$1 = (function (){var statearr_179628 = state_179561;(statearr_179628[9] = inst_179523__$1);
return statearr_179628;
})();if(inst_179523__$1)
{var statearr_179629_179687 = state_179561__$1;(statearr_179629_179687[1] = 33);
} else
{var statearr_179630_179688 = state_179561__$1;(statearr_179630_179688[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 29))
{var inst_179550 = (state_179561[2]);var state_179561__$1 = state_179561;var statearr_179631_179689 = state_179561__$1;(statearr_179631_179689[2] = inst_179550);
(statearr_179631_179689[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 30))
{var inst_179502 = (state_179561[10]);var inst_179503 = (state_179561[11]);var inst_179504 = (state_179561[12]);var inst_179505 = (state_179561[13]);var inst_179519 = (state_179561[2]);var inst_179520 = (inst_179505 + 1);var tmp179625 = inst_179502;var tmp179626 = inst_179503;var tmp179627 = inst_179504;var inst_179502__$1 = tmp179625;var inst_179503__$1 = tmp179626;var inst_179504__$1 = tmp179627;var inst_179505__$1 = inst_179520;var state_179561__$1 = (function (){var statearr_179632 = state_179561;(statearr_179632[10] = inst_179502__$1);
(statearr_179632[11] = inst_179503__$1);
(statearr_179632[12] = inst_179504__$1);
(statearr_179632[13] = inst_179505__$1);
(statearr_179632[30] = inst_179519);
return statearr_179632;
})();var statearr_179633_179690 = state_179561__$1;(statearr_179633_179690[2] = null);
(statearr_179633_179690[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179562 === 31))
{var inst_179510 = (state_179561[8]);var inst_179511 = (state_179561[2]);var inst_179512 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_179513 = cljs.core.async.untap_STAR_.call(null,m,inst_179510);var state_179561__$1 = (function (){var statearr_179634 = state_179561;(statearr_179634[31] = inst_179512);
(statearr_179634[32] = inst_179511);
return statearr_179634;
})();var statearr_179635_179691 = state_179561__$1;(statearr_179635_179691[2] = inst_179513);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179561__$1);
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
var state_machine__13310__auto____0 = (function (){var statearr_179639 = (new Array(33));(statearr_179639[0] = state_machine__13310__auto__);
(statearr_179639[1] = 1);
return statearr_179639;
});
var state_machine__13310__auto____1 = (function (state_179561){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_179561);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e179640){if((e179640 instanceof Object))
{var ex__13313__auto__ = e179640;var statearr_179641_179692 = state_179561;(statearr_179641_179692[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179561);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e179640;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__179693 = state_179561;
state_179561 = G__179693;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_179561){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_179561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_179642 = f__13410__auto__.call(null);(statearr_179642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___179643);
return statearr_179642;
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
cljs.core.async.Mix = (function (){var obj179695 = {};return obj179695;
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
;var m = (function (){if(typeof cljs.core.async.t179805 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t179805 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta179806){
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
this.meta179806 = meta179806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t179805.cljs$lang$type = true;
cljs.core.async.t179805.cljs$lang$ctorStr = "cljs.core.async/t179805";
cljs.core.async.t179805.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t179805");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t179805.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t179805.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t179805.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t179805.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t179805.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t179805.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t179805.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t179805.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t179805.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_179807){var self__ = this;
var _179807__$1 = this;return self__.meta179806;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t179805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_179807,meta179806__$1){var self__ = this;
var _179807__$1 = this;return (new cljs.core.async.t179805(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta179806__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t179805 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t179805(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta179806){return (new cljs.core.async.t179805(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta179806));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t179805(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13409__auto___179914 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_179872){var state_val_179873 = (state_179872[1]);if((state_val_179873 === 1))
{var inst_179811 = (state_179872[7]);var inst_179811__$1 = calc_state.call(null);var inst_179812 = cljs.core.seq_QMARK_.call(null,inst_179811__$1);var state_179872__$1 = (function (){var statearr_179874 = state_179872;(statearr_179874[7] = inst_179811__$1);
return statearr_179874;
})();if(inst_179812)
{var statearr_179875_179915 = state_179872__$1;(statearr_179875_179915[1] = 2);
} else
{var statearr_179876_179916 = state_179872__$1;(statearr_179876_179916[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 2))
{var inst_179811 = (state_179872[7]);var inst_179814 = cljs.core.apply.call(null,cljs.core.hash_map,inst_179811);var state_179872__$1 = state_179872;var statearr_179877_179917 = state_179872__$1;(statearr_179877_179917[2] = inst_179814);
(statearr_179877_179917[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 3))
{var inst_179811 = (state_179872[7]);var state_179872__$1 = state_179872;var statearr_179878_179918 = state_179872__$1;(statearr_179878_179918[2] = inst_179811);
(statearr_179878_179918[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 4))
{var inst_179811 = (state_179872[7]);var inst_179817 = (state_179872[2]);var inst_179818 = cljs.core.get.call(null,inst_179817,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_179819 = cljs.core.get.call(null,inst_179817,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_179820 = cljs.core.get.call(null,inst_179817,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_179821 = inst_179811;var state_179872__$1 = (function (){var statearr_179879 = state_179872;(statearr_179879[8] = inst_179820);
(statearr_179879[9] = inst_179819);
(statearr_179879[10] = inst_179821);
(statearr_179879[11] = inst_179818);
return statearr_179879;
})();var statearr_179880_179919 = state_179872__$1;(statearr_179880_179919[2] = null);
(statearr_179880_179919[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 5))
{var inst_179821 = (state_179872[10]);var inst_179824 = cljs.core.seq_QMARK_.call(null,inst_179821);var state_179872__$1 = state_179872;if(inst_179824)
{var statearr_179881_179920 = state_179872__$1;(statearr_179881_179920[1] = 7);
} else
{var statearr_179882_179921 = state_179872__$1;(statearr_179882_179921[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 6))
{var inst_179870 = (state_179872[2]);var state_179872__$1 = state_179872;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_179872__$1,inst_179870);
} else
{if((state_val_179873 === 7))
{var inst_179821 = (state_179872[10]);var inst_179826 = cljs.core.apply.call(null,cljs.core.hash_map,inst_179821);var state_179872__$1 = state_179872;var statearr_179883_179922 = state_179872__$1;(statearr_179883_179922[2] = inst_179826);
(statearr_179883_179922[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 8))
{var inst_179821 = (state_179872[10]);var state_179872__$1 = state_179872;var statearr_179884_179923 = state_179872__$1;(statearr_179884_179923[2] = inst_179821);
(statearr_179884_179923[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 9))
{var inst_179829 = (state_179872[12]);var inst_179829__$1 = (state_179872[2]);var inst_179830 = cljs.core.get.call(null,inst_179829__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_179831 = cljs.core.get.call(null,inst_179829__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_179832 = cljs.core.get.call(null,inst_179829__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_179872__$1 = (function (){var statearr_179885 = state_179872;(statearr_179885[13] = inst_179831);
(statearr_179885[14] = inst_179832);
(statearr_179885[12] = inst_179829__$1);
return statearr_179885;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_179872__$1,10,inst_179830);
} else
{if((state_val_179873 === 10))
{var inst_179836 = (state_179872[15]);var inst_179837 = (state_179872[16]);var inst_179835 = (state_179872[2]);var inst_179836__$1 = cljs.core.nth.call(null,inst_179835,0,null);var inst_179837__$1 = cljs.core.nth.call(null,inst_179835,1,null);var inst_179838 = (inst_179836__$1 == null);var inst_179839 = cljs.core._EQ_.call(null,inst_179837__$1,change);var inst_179840 = (inst_179838) || (inst_179839);var state_179872__$1 = (function (){var statearr_179886 = state_179872;(statearr_179886[15] = inst_179836__$1);
(statearr_179886[16] = inst_179837__$1);
return statearr_179886;
})();if(cljs.core.truth_(inst_179840))
{var statearr_179887_179924 = state_179872__$1;(statearr_179887_179924[1] = 11);
} else
{var statearr_179888_179925 = state_179872__$1;(statearr_179888_179925[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 11))
{var inst_179836 = (state_179872[15]);var inst_179842 = (inst_179836 == null);var state_179872__$1 = state_179872;if(cljs.core.truth_(inst_179842))
{var statearr_179889_179926 = state_179872__$1;(statearr_179889_179926[1] = 14);
} else
{var statearr_179890_179927 = state_179872__$1;(statearr_179890_179927[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 12))
{var inst_179832 = (state_179872[14]);var inst_179837 = (state_179872[16]);var inst_179851 = (state_179872[17]);var inst_179851__$1 = inst_179832.call(null,inst_179837);var state_179872__$1 = (function (){var statearr_179891 = state_179872;(statearr_179891[17] = inst_179851__$1);
return statearr_179891;
})();if(cljs.core.truth_(inst_179851__$1))
{var statearr_179892_179928 = state_179872__$1;(statearr_179892_179928[1] = 17);
} else
{var statearr_179893_179929 = state_179872__$1;(statearr_179893_179929[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 13))
{var inst_179868 = (state_179872[2]);var state_179872__$1 = state_179872;var statearr_179894_179930 = state_179872__$1;(statearr_179894_179930[2] = inst_179868);
(statearr_179894_179930[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 14))
{var inst_179837 = (state_179872[16]);var inst_179844 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_179837);var state_179872__$1 = state_179872;var statearr_179895_179931 = state_179872__$1;(statearr_179895_179931[2] = inst_179844);
(statearr_179895_179931[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 15))
{var state_179872__$1 = state_179872;var statearr_179896_179932 = state_179872__$1;(statearr_179896_179932[2] = null);
(statearr_179896_179932[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 16))
{var inst_179847 = (state_179872[2]);var inst_179848 = calc_state.call(null);var inst_179821 = inst_179848;var state_179872__$1 = (function (){var statearr_179897 = state_179872;(statearr_179897[18] = inst_179847);
(statearr_179897[10] = inst_179821);
return statearr_179897;
})();var statearr_179898_179933 = state_179872__$1;(statearr_179898_179933[2] = null);
(statearr_179898_179933[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 17))
{var inst_179851 = (state_179872[17]);var state_179872__$1 = state_179872;var statearr_179899_179934 = state_179872__$1;(statearr_179899_179934[2] = inst_179851);
(statearr_179899_179934[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 18))
{var inst_179831 = (state_179872[13]);var inst_179832 = (state_179872[14]);var inst_179837 = (state_179872[16]);var inst_179854 = cljs.core.empty_QMARK_.call(null,inst_179832);var inst_179855 = inst_179831.call(null,inst_179837);var inst_179856 = cljs.core.not.call(null,inst_179855);var inst_179857 = (inst_179854) && (inst_179856);var state_179872__$1 = state_179872;var statearr_179900_179935 = state_179872__$1;(statearr_179900_179935[2] = inst_179857);
(statearr_179900_179935[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 19))
{var inst_179859 = (state_179872[2]);var state_179872__$1 = state_179872;if(cljs.core.truth_(inst_179859))
{var statearr_179901_179936 = state_179872__$1;(statearr_179901_179936[1] = 20);
} else
{var statearr_179902_179937 = state_179872__$1;(statearr_179902_179937[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 20))
{var inst_179836 = (state_179872[15]);var state_179872__$1 = state_179872;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_179872__$1,23,out,inst_179836);
} else
{if((state_val_179873 === 21))
{var state_179872__$1 = state_179872;var statearr_179903_179938 = state_179872__$1;(statearr_179903_179938[2] = null);
(statearr_179903_179938[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 22))
{var inst_179829 = (state_179872[12]);var inst_179865 = (state_179872[2]);var inst_179821 = inst_179829;var state_179872__$1 = (function (){var statearr_179904 = state_179872;(statearr_179904[19] = inst_179865);
(statearr_179904[10] = inst_179821);
return statearr_179904;
})();var statearr_179905_179939 = state_179872__$1;(statearr_179905_179939[2] = null);
(statearr_179905_179939[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179873 === 23))
{var inst_179862 = (state_179872[2]);var state_179872__$1 = state_179872;var statearr_179906_179940 = state_179872__$1;(statearr_179906_179940[2] = inst_179862);
(statearr_179906_179940[1] = 22);
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
var state_machine__13310__auto____0 = (function (){var statearr_179910 = (new Array(20));(statearr_179910[0] = state_machine__13310__auto__);
(statearr_179910[1] = 1);
return statearr_179910;
});
var state_machine__13310__auto____1 = (function (state_179872){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_179872);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e179911){if((e179911 instanceof Object))
{var ex__13313__auto__ = e179911;var statearr_179912_179941 = state_179872;(statearr_179912_179941[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179872);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e179911;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__179942 = state_179872;
state_179872 = G__179942;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_179872){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_179872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_179913 = f__13410__auto__.call(null);(statearr_179913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___179914);
return statearr_179913;
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
cljs.core.async.Pub = (function (){var obj179944 = {};return obj179944;
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
return (function (p1__179945_SHARP_){if(cljs.core.truth_(p1__179945_SHARP_.call(null,topic)))
{return p1__179945_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__179945_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6289__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t180070 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t180070 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta180071){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta180071 = meta180071;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t180070.cljs$lang$type = true;
cljs.core.async.t180070.cljs$lang$ctorStr = "cljs.core.async/t180070";
cljs.core.async.t180070.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t180070");
});})(mults,ensure_mult))
;
cljs.core.async.t180070.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t180070.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t180070.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t180070.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t180070.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t180070.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t180070.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t180070.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_180072){var self__ = this;
var _180072__$1 = this;return self__.meta180071;
});})(mults,ensure_mult))
;
cljs.core.async.t180070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_180072,meta180071__$1){var self__ = this;
var _180072__$1 = this;return (new cljs.core.async.t180070(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta180071__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t180070 = ((function (mults,ensure_mult){
return (function __GT_t180070(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta180071){return (new cljs.core.async.t180070(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta180071));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t180070(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13409__auto___180194 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_180146){var state_val_180147 = (state_180146[1]);if((state_val_180147 === 1))
{var state_180146__$1 = state_180146;var statearr_180148_180195 = state_180146__$1;(statearr_180148_180195[2] = null);
(statearr_180148_180195[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180147 === 2))
{var state_180146__$1 = state_180146;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_180146__$1,4,ch);
} else
{if((state_val_180147 === 3))
{var inst_180144 = (state_180146[2]);var state_180146__$1 = state_180146;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_180146__$1,inst_180144);
} else
{if((state_val_180147 === 4))
{var inst_180075 = (state_180146[7]);var inst_180075__$1 = (state_180146[2]);var inst_180076 = (inst_180075__$1 == null);var state_180146__$1 = (function (){var statearr_180149 = state_180146;(statearr_180149[7] = inst_180075__$1);
return statearr_180149;
})();if(cljs.core.truth_(inst_180076))
{var statearr_180150_180196 = state_180146__$1;(statearr_180150_180196[1] = 5);
} else
{var statearr_180151_180197 = state_180146__$1;(statearr_180151_180197[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180147 === 5))
{var inst_180082 = cljs.core.deref.call(null,mults);var inst_180083 = cljs.core.vals.call(null,inst_180082);var inst_180084 = cljs.core.seq.call(null,inst_180083);var inst_180085 = inst_180084;var inst_180086 = null;var inst_180087 = 0;var inst_180088 = 0;var state_180146__$1 = (function (){var statearr_180152 = state_180146;(statearr_180152[8] = inst_180088);
(statearr_180152[9] = inst_180085);
(statearr_180152[10] = inst_180086);
(statearr_180152[11] = inst_180087);
return statearr_180152;
})();var statearr_180153_180198 = state_180146__$1;(statearr_180153_180198[2] = null);
(statearr_180153_180198[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180147 === 6))
{var inst_180123 = (state_180146[12]);var inst_180125 = (state_180146[13]);var inst_180075 = (state_180146[7]);var inst_180123__$1 = topic_fn.call(null,inst_180075);var inst_180124 = cljs.core.deref.call(null,mults);var inst_180125__$1 = cljs.core.get.call(null,inst_180124,inst_180123__$1);var state_180146__$1 = (function (){var statearr_180154 = state_180146;(statearr_180154[12] = inst_180123__$1);
(statearr_180154[13] = inst_180125__$1);
return statearr_180154;
})();if(cljs.core.truth_(inst_180125__$1))
{var statearr_180155_180199 = state_180146__$1;(statearr_180155_180199[1] = 19);
} else
{var statearr_180156_180200 = state_180146__$1;(statearr_180156_180200[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180147 === 7))
{var inst_180142 = (state_180146[2]);var state_180146__$1 = state_180146;var statearr_180157_180201 = state_180146__$1;(statearr_180157_180201[2] = inst_180142);
(statearr_180157_180201[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180147 === 8))
{var inst_180088 = (state_180146[8]);var inst_180087 = (state_180146[11]);var inst_180090 = (inst_180088 < inst_180087);var inst_180091 = inst_180090;var state_180146__$1 = state_180146;if(cljs.core.truth_(inst_180091))
{var statearr_180161_180202 = state_180146__$1;(statearr_180161_180202[1] = 10);
} else
{var statearr_180162_180203 = state_180146__$1;(statearr_180162_180203[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180147 === 9))
{var inst_180121 = (state_180146[2]);var state_180146__$1 = state_180146;var statearr_180163_180204 = state_180146__$1;(statearr_180163_180204[2] = inst_180121);
(statearr_180163_180204[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180147 === 10))
{var inst_180088 = (state_180146[8]);var inst_180085 = (state_180146[9]);var inst_180086 = (state_180146[10]);var inst_180087 = (state_180146[11]);var inst_180093 = cljs.core._nth.call(null,inst_180086,inst_180088);var inst_180094 = cljs.core.async.muxch_STAR_.call(null,inst_180093);var inst_180095 = cljs.core.async.close_BANG_.call(null,inst_180094);var inst_180096 = (inst_180088 + 1);var tmp180158 = inst_180085;var tmp180159 = inst_180086;var tmp180160 = inst_180087;var inst_180085__$1 = tmp180158;var inst_180086__$1 = tmp180159;var inst_180087__$1 = tmp180160;var inst_180088__$1 = inst_180096;var state_180146__$1 = (function (){var statearr_180164 = state_180146;(statearr_180164[8] = inst_180088__$1);
(statearr_180164[14] = inst_180095);
(statearr_180164[9] = inst_180085__$1);
(statearr_180164[10] = inst_180086__$1);
(statearr_180164[11] = inst_180087__$1);
return statearr_180164;
})();var statearr_180165_180205 = state_180146__$1;(statearr_180165_180205[2] = null);
(statearr_180165_180205[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180147 === 11))
{var inst_180099 = (state_180146[15]);var inst_180085 = (state_180146[9]);var inst_180099__$1 = cljs.core.seq.call(null,inst_180085);var state_180146__$1 = (function (){var statearr_180166 = state_180146;(statearr_180166[15] = inst_180099__$1);
return statearr_180166;
})();if(inst_180099__$1)
{var statearr_180167_180206 = state_180146__$1;(statearr_180167_180206[1] = 13);
} else
{var statearr_180168_180207 = state_180146__$1;(statearr_180168_180207[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180147 === 12))
{var inst_180119 = (state_180146[2]);var state_180146__$1 = state_180146;var statearr_180169_180208 = state_180146__$1;(statearr_180169_180208[2] = inst_180119);
(statearr_180169_180208[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180147 === 13))
{var inst_180099 = (state_180146[15]);var inst_180101 = cljs.core.chunked_seq_QMARK_.call(null,inst_180099);var state_180146__$1 = state_180146;if(inst_180101)
{var statearr_180170_180209 = state_180146__$1;(statearr_180170_180209[1] = 16);
} else
{var statearr_180171_180210 = state_180146__$1;(statearr_180171_180210[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180147 === 14))
{var state_180146__$1 = state_180146;var statearr_180172_180211 = state_180146__$1;(statearr_180172_180211[2] = null);
(statearr_180172_180211[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180147 === 15))
{var inst_180117 = (state_180146[2]);var state_180146__$1 = state_180146;var statearr_180173_180212 = state_180146__$1;(statearr_180173_180212[2] = inst_180117);
(statearr_180173_180212[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180147 === 16))
{var inst_180099 = (state_180146[15]);var inst_180103 = cljs.core.chunk_first.call(null,inst_180099);var inst_180104 = cljs.core.chunk_rest.call(null,inst_180099);var inst_180105 = cljs.core.count.call(null,inst_180103);var inst_180085 = inst_180104;var inst_180086 = inst_180103;var inst_180087 = inst_180105;var inst_180088 = 0;var state_180146__$1 = (function (){var statearr_180174 = state_180146;(statearr_180174[8] = inst_180088);
(statearr_180174[9] = inst_180085);
(statearr_180174[10] = inst_180086);
(statearr_180174[11] = inst_180087);
return statearr_180174;
})();var statearr_180175_180213 = state_180146__$1;(statearr_180175_180213[2] = null);
(statearr_180175_180213[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180147 === 17))
{var inst_180099 = (state_180146[15]);var inst_180108 = cljs.core.first.call(null,inst_180099);var inst_180109 = cljs.core.async.muxch_STAR_.call(null,inst_180108);var inst_180110 = cljs.core.async.close_BANG_.call(null,inst_180109);var inst_180111 = cljs.core.next.call(null,inst_180099);var inst_180085 = inst_180111;var inst_180086 = null;var inst_180087 = 0;var inst_180088 = 0;var state_180146__$1 = (function (){var statearr_180176 = state_180146;(statearr_180176[16] = inst_180110);
(statearr_180176[8] = inst_180088);
(statearr_180176[9] = inst_180085);
(statearr_180176[10] = inst_180086);
(statearr_180176[11] = inst_180087);
return statearr_180176;
})();var statearr_180177_180214 = state_180146__$1;(statearr_180177_180214[2] = null);
(statearr_180177_180214[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180147 === 18))
{var inst_180114 = (state_180146[2]);var state_180146__$1 = state_180146;var statearr_180178_180215 = state_180146__$1;(statearr_180178_180215[2] = inst_180114);
(statearr_180178_180215[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180147 === 19))
{var state_180146__$1 = state_180146;var statearr_180179_180216 = state_180146__$1;(statearr_180179_180216[2] = null);
(statearr_180179_180216[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180147 === 20))
{var state_180146__$1 = state_180146;var statearr_180180_180217 = state_180146__$1;(statearr_180180_180217[2] = null);
(statearr_180180_180217[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180147 === 21))
{var inst_180139 = (state_180146[2]);var state_180146__$1 = (function (){var statearr_180181 = state_180146;(statearr_180181[17] = inst_180139);
return statearr_180181;
})();var statearr_180182_180218 = state_180146__$1;(statearr_180182_180218[2] = null);
(statearr_180182_180218[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180147 === 22))
{var inst_180136 = (state_180146[2]);var state_180146__$1 = state_180146;var statearr_180183_180219 = state_180146__$1;(statearr_180183_180219[2] = inst_180136);
(statearr_180183_180219[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180147 === 23))
{var inst_180123 = (state_180146[12]);var inst_180127 = (state_180146[2]);var inst_180128 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_180123);var state_180146__$1 = (function (){var statearr_180184 = state_180146;(statearr_180184[18] = inst_180127);
return statearr_180184;
})();var statearr_180185_180220 = state_180146__$1;(statearr_180185_180220[2] = inst_180128);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180146__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180147 === 24))
{var inst_180125 = (state_180146[13]);var inst_180075 = (state_180146[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_180146,23,Object,null,22);var inst_180132 = cljs.core.async.muxch_STAR_.call(null,inst_180125);var state_180146__$1 = state_180146;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_180146__$1,25,inst_180132,inst_180075);
} else
{if((state_val_180147 === 25))
{var inst_180134 = (state_180146[2]);var state_180146__$1 = state_180146;var statearr_180186_180221 = state_180146__$1;(statearr_180186_180221[2] = inst_180134);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180146__$1);
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
var state_machine__13310__auto____0 = (function (){var statearr_180190 = (new Array(19));(statearr_180190[0] = state_machine__13310__auto__);
(statearr_180190[1] = 1);
return statearr_180190;
});
var state_machine__13310__auto____1 = (function (state_180146){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_180146);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e180191){if((e180191 instanceof Object))
{var ex__13313__auto__ = e180191;var statearr_180192_180222 = state_180146;(statearr_180192_180222[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180146);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e180191;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__180223 = state_180146;
state_180146 = G__180223;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_180146){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_180146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_180193 = f__13410__auto__.call(null);(statearr_180193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___180194);
return statearr_180193;
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
,cljs.core.range.call(null,cnt));var c__13409__auto___180360 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_180330){var state_val_180331 = (state_180330[1]);if((state_val_180331 === 1))
{var state_180330__$1 = state_180330;var statearr_180332_180361 = state_180330__$1;(statearr_180332_180361[2] = null);
(statearr_180332_180361[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180331 === 2))
{var inst_180293 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_180294 = 0;var state_180330__$1 = (function (){var statearr_180333 = state_180330;(statearr_180333[7] = inst_180293);
(statearr_180333[8] = inst_180294);
return statearr_180333;
})();var statearr_180334_180362 = state_180330__$1;(statearr_180334_180362[2] = null);
(statearr_180334_180362[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180331 === 3))
{var inst_180328 = (state_180330[2]);var state_180330__$1 = state_180330;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_180330__$1,inst_180328);
} else
{if((state_val_180331 === 4))
{var inst_180294 = (state_180330[8]);var inst_180296 = (inst_180294 < cnt);var state_180330__$1 = state_180330;if(cljs.core.truth_(inst_180296))
{var statearr_180335_180363 = state_180330__$1;(statearr_180335_180363[1] = 6);
} else
{var statearr_180336_180364 = state_180330__$1;(statearr_180336_180364[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180331 === 5))
{var inst_180314 = (state_180330[2]);var state_180330__$1 = (function (){var statearr_180337 = state_180330;(statearr_180337[9] = inst_180314);
return statearr_180337;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_180330__$1,12,dchan);
} else
{if((state_val_180331 === 6))
{var state_180330__$1 = state_180330;var statearr_180338_180365 = state_180330__$1;(statearr_180338_180365[2] = null);
(statearr_180338_180365[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180331 === 7))
{var state_180330__$1 = state_180330;var statearr_180339_180366 = state_180330__$1;(statearr_180339_180366[2] = null);
(statearr_180339_180366[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180331 === 8))
{var inst_180312 = (state_180330[2]);var state_180330__$1 = state_180330;var statearr_180340_180367 = state_180330__$1;(statearr_180340_180367[2] = inst_180312);
(statearr_180340_180367[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180331 === 9))
{var inst_180294 = (state_180330[8]);var inst_180307 = (state_180330[2]);var inst_180308 = (inst_180294 + 1);var inst_180294__$1 = inst_180308;var state_180330__$1 = (function (){var statearr_180341 = state_180330;(statearr_180341[8] = inst_180294__$1);
(statearr_180341[10] = inst_180307);
return statearr_180341;
})();var statearr_180342_180368 = state_180330__$1;(statearr_180342_180368[2] = null);
(statearr_180342_180368[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180331 === 10))
{var inst_180298 = (state_180330[2]);var inst_180299 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_180330__$1 = (function (){var statearr_180343 = state_180330;(statearr_180343[11] = inst_180298);
return statearr_180343;
})();var statearr_180344_180369 = state_180330__$1;(statearr_180344_180369[2] = inst_180299);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180330__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180331 === 11))
{var inst_180294 = (state_180330[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_180330,10,Object,null,9);var inst_180303 = chs__$1.call(null,inst_180294);var inst_180304 = done.call(null,inst_180294);var inst_180305 = cljs.core.async.take_BANG_.call(null,inst_180303,inst_180304);var state_180330__$1 = state_180330;var statearr_180345_180370 = state_180330__$1;(statearr_180345_180370[2] = inst_180305);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180330__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180331 === 12))
{var inst_180316 = (state_180330[12]);var inst_180316__$1 = (state_180330[2]);var inst_180317 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_180316__$1);var state_180330__$1 = (function (){var statearr_180346 = state_180330;(statearr_180346[12] = inst_180316__$1);
return statearr_180346;
})();if(cljs.core.truth_(inst_180317))
{var statearr_180347_180371 = state_180330__$1;(statearr_180347_180371[1] = 13);
} else
{var statearr_180348_180372 = state_180330__$1;(statearr_180348_180372[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180331 === 13))
{var inst_180319 = cljs.core.async.close_BANG_.call(null,out);var state_180330__$1 = state_180330;var statearr_180349_180373 = state_180330__$1;(statearr_180349_180373[2] = inst_180319);
(statearr_180349_180373[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180331 === 14))
{var inst_180316 = (state_180330[12]);var inst_180321 = cljs.core.apply.call(null,f,inst_180316);var state_180330__$1 = state_180330;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_180330__$1,16,out,inst_180321);
} else
{if((state_val_180331 === 15))
{var inst_180326 = (state_180330[2]);var state_180330__$1 = state_180330;var statearr_180350_180374 = state_180330__$1;(statearr_180350_180374[2] = inst_180326);
(statearr_180350_180374[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180331 === 16))
{var inst_180323 = (state_180330[2]);var state_180330__$1 = (function (){var statearr_180351 = state_180330;(statearr_180351[13] = inst_180323);
return statearr_180351;
})();var statearr_180352_180375 = state_180330__$1;(statearr_180352_180375[2] = null);
(statearr_180352_180375[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_180356 = (new Array(14));(statearr_180356[0] = state_machine__13310__auto__);
(statearr_180356[1] = 1);
return statearr_180356;
});
var state_machine__13310__auto____1 = (function (state_180330){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_180330);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e180357){if((e180357 instanceof Object))
{var ex__13313__auto__ = e180357;var statearr_180358_180376 = state_180330;(statearr_180358_180376[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180330);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e180357;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__180377 = state_180330;
state_180330 = G__180377;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_180330){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_180330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_180359 = f__13410__auto__.call(null);(statearr_180359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___180360);
return statearr_180359;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___180485 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_180461){var state_val_180462 = (state_180461[1]);if((state_val_180462 === 1))
{var inst_180432 = cljs.core.vec.call(null,chs);var inst_180433 = inst_180432;var state_180461__$1 = (function (){var statearr_180463 = state_180461;(statearr_180463[7] = inst_180433);
return statearr_180463;
})();var statearr_180464_180486 = state_180461__$1;(statearr_180464_180486[2] = null);
(statearr_180464_180486[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180462 === 2))
{var inst_180433 = (state_180461[7]);var inst_180435 = cljs.core.count.call(null,inst_180433);var inst_180436 = (inst_180435 > 0);var state_180461__$1 = state_180461;if(cljs.core.truth_(inst_180436))
{var statearr_180465_180487 = state_180461__$1;(statearr_180465_180487[1] = 4);
} else
{var statearr_180466_180488 = state_180461__$1;(statearr_180466_180488[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180462 === 3))
{var inst_180459 = (state_180461[2]);var state_180461__$1 = state_180461;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_180461__$1,inst_180459);
} else
{if((state_val_180462 === 4))
{var inst_180433 = (state_180461[7]);var state_180461__$1 = state_180461;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_180461__$1,7,inst_180433);
} else
{if((state_val_180462 === 5))
{var inst_180455 = cljs.core.async.close_BANG_.call(null,out);var state_180461__$1 = state_180461;var statearr_180467_180489 = state_180461__$1;(statearr_180467_180489[2] = inst_180455);
(statearr_180467_180489[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180462 === 6))
{var inst_180457 = (state_180461[2]);var state_180461__$1 = state_180461;var statearr_180468_180490 = state_180461__$1;(statearr_180468_180490[2] = inst_180457);
(statearr_180468_180490[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180462 === 7))
{var inst_180441 = (state_180461[8]);var inst_180440 = (state_180461[9]);var inst_180440__$1 = (state_180461[2]);var inst_180441__$1 = cljs.core.nth.call(null,inst_180440__$1,0,null);var inst_180442 = cljs.core.nth.call(null,inst_180440__$1,1,null);var inst_180443 = (inst_180441__$1 == null);var state_180461__$1 = (function (){var statearr_180469 = state_180461;(statearr_180469[8] = inst_180441__$1);
(statearr_180469[9] = inst_180440__$1);
(statearr_180469[10] = inst_180442);
return statearr_180469;
})();if(cljs.core.truth_(inst_180443))
{var statearr_180470_180491 = state_180461__$1;(statearr_180470_180491[1] = 8);
} else
{var statearr_180471_180492 = state_180461__$1;(statearr_180471_180492[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180462 === 8))
{var inst_180433 = (state_180461[7]);var inst_180441 = (state_180461[8]);var inst_180440 = (state_180461[9]);var inst_180442 = (state_180461[10]);var inst_180445 = (function (){var c = inst_180442;var v = inst_180441;var vec__180438 = inst_180440;var cs = inst_180433;return ((function (c,v,vec__180438,cs,inst_180433,inst_180441,inst_180440,inst_180442,state_val_180462){
return (function (p1__180378_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__180378_SHARP_);
});
;})(c,v,vec__180438,cs,inst_180433,inst_180441,inst_180440,inst_180442,state_val_180462))
})();var inst_180446 = cljs.core.filterv.call(null,inst_180445,inst_180433);var inst_180433__$1 = inst_180446;var state_180461__$1 = (function (){var statearr_180472 = state_180461;(statearr_180472[7] = inst_180433__$1);
return statearr_180472;
})();var statearr_180473_180493 = state_180461__$1;(statearr_180473_180493[2] = null);
(statearr_180473_180493[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180462 === 9))
{var inst_180441 = (state_180461[8]);var state_180461__$1 = state_180461;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_180461__$1,11,out,inst_180441);
} else
{if((state_val_180462 === 10))
{var inst_180453 = (state_180461[2]);var state_180461__$1 = state_180461;var statearr_180475_180494 = state_180461__$1;(statearr_180475_180494[2] = inst_180453);
(statearr_180475_180494[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180462 === 11))
{var inst_180433 = (state_180461[7]);var inst_180450 = (state_180461[2]);var tmp180474 = inst_180433;var inst_180433__$1 = tmp180474;var state_180461__$1 = (function (){var statearr_180476 = state_180461;(statearr_180476[7] = inst_180433__$1);
(statearr_180476[11] = inst_180450);
return statearr_180476;
})();var statearr_180477_180495 = state_180461__$1;(statearr_180477_180495[2] = null);
(statearr_180477_180495[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_180481 = (new Array(12));(statearr_180481[0] = state_machine__13310__auto__);
(statearr_180481[1] = 1);
return statearr_180481;
});
var state_machine__13310__auto____1 = (function (state_180461){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_180461);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e180482){if((e180482 instanceof Object))
{var ex__13313__auto__ = e180482;var statearr_180483_180496 = state_180461;(statearr_180483_180496[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180461);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e180482;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__180497 = state_180461;
state_180461 = G__180497;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_180461){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_180461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_180484 = f__13410__auto__.call(null);(statearr_180484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___180485);
return statearr_180484;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___180590 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_180567){var state_val_180568 = (state_180567[1]);if((state_val_180568 === 1))
{var inst_180544 = 0;var state_180567__$1 = (function (){var statearr_180569 = state_180567;(statearr_180569[7] = inst_180544);
return statearr_180569;
})();var statearr_180570_180591 = state_180567__$1;(statearr_180570_180591[2] = null);
(statearr_180570_180591[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180568 === 2))
{var inst_180544 = (state_180567[7]);var inst_180546 = (inst_180544 < n);var state_180567__$1 = state_180567;if(cljs.core.truth_(inst_180546))
{var statearr_180571_180592 = state_180567__$1;(statearr_180571_180592[1] = 4);
} else
{var statearr_180572_180593 = state_180567__$1;(statearr_180572_180593[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180568 === 3))
{var inst_180564 = (state_180567[2]);var inst_180565 = cljs.core.async.close_BANG_.call(null,out);var state_180567__$1 = (function (){var statearr_180573 = state_180567;(statearr_180573[8] = inst_180564);
return statearr_180573;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_180567__$1,inst_180565);
} else
{if((state_val_180568 === 4))
{var state_180567__$1 = state_180567;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_180567__$1,7,ch);
} else
{if((state_val_180568 === 5))
{var state_180567__$1 = state_180567;var statearr_180574_180594 = state_180567__$1;(statearr_180574_180594[2] = null);
(statearr_180574_180594[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180568 === 6))
{var inst_180562 = (state_180567[2]);var state_180567__$1 = state_180567;var statearr_180575_180595 = state_180567__$1;(statearr_180575_180595[2] = inst_180562);
(statearr_180575_180595[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180568 === 7))
{var inst_180549 = (state_180567[9]);var inst_180549__$1 = (state_180567[2]);var inst_180550 = (inst_180549__$1 == null);var inst_180551 = cljs.core.not.call(null,inst_180550);var state_180567__$1 = (function (){var statearr_180576 = state_180567;(statearr_180576[9] = inst_180549__$1);
return statearr_180576;
})();if(inst_180551)
{var statearr_180577_180596 = state_180567__$1;(statearr_180577_180596[1] = 8);
} else
{var statearr_180578_180597 = state_180567__$1;(statearr_180578_180597[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180568 === 8))
{var inst_180549 = (state_180567[9]);var state_180567__$1 = state_180567;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_180567__$1,11,out,inst_180549);
} else
{if((state_val_180568 === 9))
{var state_180567__$1 = state_180567;var statearr_180579_180598 = state_180567__$1;(statearr_180579_180598[2] = null);
(statearr_180579_180598[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180568 === 10))
{var inst_180559 = (state_180567[2]);var state_180567__$1 = state_180567;var statearr_180580_180599 = state_180567__$1;(statearr_180580_180599[2] = inst_180559);
(statearr_180580_180599[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180568 === 11))
{var inst_180544 = (state_180567[7]);var inst_180554 = (state_180567[2]);var inst_180555 = (inst_180544 + 1);var inst_180544__$1 = inst_180555;var state_180567__$1 = (function (){var statearr_180581 = state_180567;(statearr_180581[10] = inst_180554);
(statearr_180581[7] = inst_180544__$1);
return statearr_180581;
})();var statearr_180582_180600 = state_180567__$1;(statearr_180582_180600[2] = null);
(statearr_180582_180600[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_180586 = (new Array(11));(statearr_180586[0] = state_machine__13310__auto__);
(statearr_180586[1] = 1);
return statearr_180586;
});
var state_machine__13310__auto____1 = (function (state_180567){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_180567);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e180587){if((e180587 instanceof Object))
{var ex__13313__auto__ = e180587;var statearr_180588_180601 = state_180567;(statearr_180588_180601[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180567);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e180587;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__180602 = state_180567;
state_180567 = G__180602;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_180567){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_180567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_180589 = f__13410__auto__.call(null);(statearr_180589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___180590);
return statearr_180589;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___180699 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_180674){var state_val_180675 = (state_180674[1]);if((state_val_180675 === 1))
{var inst_180651 = null;var state_180674__$1 = (function (){var statearr_180676 = state_180674;(statearr_180676[7] = inst_180651);
return statearr_180676;
})();var statearr_180677_180700 = state_180674__$1;(statearr_180677_180700[2] = null);
(statearr_180677_180700[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180675 === 2))
{var state_180674__$1 = state_180674;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_180674__$1,4,ch);
} else
{if((state_val_180675 === 3))
{var inst_180671 = (state_180674[2]);var inst_180672 = cljs.core.async.close_BANG_.call(null,out);var state_180674__$1 = (function (){var statearr_180678 = state_180674;(statearr_180678[8] = inst_180671);
return statearr_180678;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_180674__$1,inst_180672);
} else
{if((state_val_180675 === 4))
{var inst_180654 = (state_180674[9]);var inst_180654__$1 = (state_180674[2]);var inst_180655 = (inst_180654__$1 == null);var inst_180656 = cljs.core.not.call(null,inst_180655);var state_180674__$1 = (function (){var statearr_180679 = state_180674;(statearr_180679[9] = inst_180654__$1);
return statearr_180679;
})();if(inst_180656)
{var statearr_180680_180701 = state_180674__$1;(statearr_180680_180701[1] = 5);
} else
{var statearr_180681_180702 = state_180674__$1;(statearr_180681_180702[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180675 === 5))
{var inst_180651 = (state_180674[7]);var inst_180654 = (state_180674[9]);var inst_180658 = cljs.core._EQ_.call(null,inst_180654,inst_180651);var state_180674__$1 = state_180674;if(inst_180658)
{var statearr_180682_180703 = state_180674__$1;(statearr_180682_180703[1] = 8);
} else
{var statearr_180683_180704 = state_180674__$1;(statearr_180683_180704[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180675 === 6))
{var state_180674__$1 = state_180674;var statearr_180685_180705 = state_180674__$1;(statearr_180685_180705[2] = null);
(statearr_180685_180705[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180675 === 7))
{var inst_180669 = (state_180674[2]);var state_180674__$1 = state_180674;var statearr_180686_180706 = state_180674__$1;(statearr_180686_180706[2] = inst_180669);
(statearr_180686_180706[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180675 === 8))
{var inst_180651 = (state_180674[7]);var tmp180684 = inst_180651;var inst_180651__$1 = tmp180684;var state_180674__$1 = (function (){var statearr_180687 = state_180674;(statearr_180687[7] = inst_180651__$1);
return statearr_180687;
})();var statearr_180688_180707 = state_180674__$1;(statearr_180688_180707[2] = null);
(statearr_180688_180707[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180675 === 9))
{var inst_180654 = (state_180674[9]);var state_180674__$1 = state_180674;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_180674__$1,11,out,inst_180654);
} else
{if((state_val_180675 === 10))
{var inst_180666 = (state_180674[2]);var state_180674__$1 = state_180674;var statearr_180689_180708 = state_180674__$1;(statearr_180689_180708[2] = inst_180666);
(statearr_180689_180708[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180675 === 11))
{var inst_180654 = (state_180674[9]);var inst_180663 = (state_180674[2]);var inst_180651 = inst_180654;var state_180674__$1 = (function (){var statearr_180690 = state_180674;(statearr_180690[7] = inst_180651);
(statearr_180690[10] = inst_180663);
return statearr_180690;
})();var statearr_180691_180709 = state_180674__$1;(statearr_180691_180709[2] = null);
(statearr_180691_180709[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_180695 = (new Array(11));(statearr_180695[0] = state_machine__13310__auto__);
(statearr_180695[1] = 1);
return statearr_180695;
});
var state_machine__13310__auto____1 = (function (state_180674){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_180674);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e180696){if((e180696 instanceof Object))
{var ex__13313__auto__ = e180696;var statearr_180697_180710 = state_180674;(statearr_180697_180710[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180674);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e180696;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__180711 = state_180674;
state_180674 = G__180711;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_180674){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_180674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_180698 = f__13410__auto__.call(null);(statearr_180698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___180699);
return statearr_180698;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___180846 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_180816){var state_val_180817 = (state_180816[1]);if((state_val_180817 === 1))
{var inst_180779 = (new Array(n));var inst_180780 = inst_180779;var inst_180781 = 0;var state_180816__$1 = (function (){var statearr_180818 = state_180816;(statearr_180818[7] = inst_180780);
(statearr_180818[8] = inst_180781);
return statearr_180818;
})();var statearr_180819_180847 = state_180816__$1;(statearr_180819_180847[2] = null);
(statearr_180819_180847[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180817 === 2))
{var state_180816__$1 = state_180816;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_180816__$1,4,ch);
} else
{if((state_val_180817 === 3))
{var inst_180814 = (state_180816[2]);var state_180816__$1 = state_180816;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_180816__$1,inst_180814);
} else
{if((state_val_180817 === 4))
{var inst_180784 = (state_180816[9]);var inst_180784__$1 = (state_180816[2]);var inst_180785 = (inst_180784__$1 == null);var inst_180786 = cljs.core.not.call(null,inst_180785);var state_180816__$1 = (function (){var statearr_180820 = state_180816;(statearr_180820[9] = inst_180784__$1);
return statearr_180820;
})();if(inst_180786)
{var statearr_180821_180848 = state_180816__$1;(statearr_180821_180848[1] = 5);
} else
{var statearr_180822_180849 = state_180816__$1;(statearr_180822_180849[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180817 === 5))
{var inst_180780 = (state_180816[7]);var inst_180789 = (state_180816[10]);var inst_180781 = (state_180816[8]);var inst_180784 = (state_180816[9]);var inst_180788 = (inst_180780[inst_180781] = inst_180784);var inst_180789__$1 = (inst_180781 + 1);var inst_180790 = (inst_180789__$1 < n);var state_180816__$1 = (function (){var statearr_180823 = state_180816;(statearr_180823[10] = inst_180789__$1);
(statearr_180823[11] = inst_180788);
return statearr_180823;
})();if(cljs.core.truth_(inst_180790))
{var statearr_180824_180850 = state_180816__$1;(statearr_180824_180850[1] = 8);
} else
{var statearr_180825_180851 = state_180816__$1;(statearr_180825_180851[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180817 === 6))
{var inst_180781 = (state_180816[8]);var inst_180802 = (inst_180781 > 0);var state_180816__$1 = state_180816;if(cljs.core.truth_(inst_180802))
{var statearr_180827_180852 = state_180816__$1;(statearr_180827_180852[1] = 12);
} else
{var statearr_180828_180853 = state_180816__$1;(statearr_180828_180853[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180817 === 7))
{var inst_180812 = (state_180816[2]);var state_180816__$1 = state_180816;var statearr_180829_180854 = state_180816__$1;(statearr_180829_180854[2] = inst_180812);
(statearr_180829_180854[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180817 === 8))
{var inst_180780 = (state_180816[7]);var inst_180789 = (state_180816[10]);var tmp180826 = inst_180780;var inst_180780__$1 = tmp180826;var inst_180781 = inst_180789;var state_180816__$1 = (function (){var statearr_180830 = state_180816;(statearr_180830[7] = inst_180780__$1);
(statearr_180830[8] = inst_180781);
return statearr_180830;
})();var statearr_180831_180855 = state_180816__$1;(statearr_180831_180855[2] = null);
(statearr_180831_180855[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180817 === 9))
{var inst_180780 = (state_180816[7]);var inst_180794 = cljs.core.vec.call(null,inst_180780);var state_180816__$1 = state_180816;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_180816__$1,11,out,inst_180794);
} else
{if((state_val_180817 === 10))
{var inst_180800 = (state_180816[2]);var state_180816__$1 = state_180816;var statearr_180832_180856 = state_180816__$1;(statearr_180832_180856[2] = inst_180800);
(statearr_180832_180856[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180817 === 11))
{var inst_180796 = (state_180816[2]);var inst_180797 = (new Array(n));var inst_180780 = inst_180797;var inst_180781 = 0;var state_180816__$1 = (function (){var statearr_180833 = state_180816;(statearr_180833[12] = inst_180796);
(statearr_180833[7] = inst_180780);
(statearr_180833[8] = inst_180781);
return statearr_180833;
})();var statearr_180834_180857 = state_180816__$1;(statearr_180834_180857[2] = null);
(statearr_180834_180857[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180817 === 12))
{var inst_180780 = (state_180816[7]);var inst_180804 = cljs.core.vec.call(null,inst_180780);var state_180816__$1 = state_180816;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_180816__$1,15,out,inst_180804);
} else
{if((state_val_180817 === 13))
{var state_180816__$1 = state_180816;var statearr_180835_180858 = state_180816__$1;(statearr_180835_180858[2] = null);
(statearr_180835_180858[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180817 === 14))
{var inst_180809 = (state_180816[2]);var inst_180810 = cljs.core.async.close_BANG_.call(null,out);var state_180816__$1 = (function (){var statearr_180836 = state_180816;(statearr_180836[13] = inst_180809);
return statearr_180836;
})();var statearr_180837_180859 = state_180816__$1;(statearr_180837_180859[2] = inst_180810);
(statearr_180837_180859[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180817 === 15))
{var inst_180806 = (state_180816[2]);var state_180816__$1 = state_180816;var statearr_180838_180860 = state_180816__$1;(statearr_180838_180860[2] = inst_180806);
(statearr_180838_180860[1] = 14);
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
var state_machine__13310__auto____0 = (function (){var statearr_180842 = (new Array(14));(statearr_180842[0] = state_machine__13310__auto__);
(statearr_180842[1] = 1);
return statearr_180842;
});
var state_machine__13310__auto____1 = (function (state_180816){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_180816);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e180843){if((e180843 instanceof Object))
{var ex__13313__auto__ = e180843;var statearr_180844_180861 = state_180816;(statearr_180844_180861[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180816);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e180843;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__180862 = state_180816;
state_180816 = G__180862;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_180816){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_180816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_180845 = f__13410__auto__.call(null);(statearr_180845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___180846);
return statearr_180845;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___181005 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_180975){var state_val_180976 = (state_180975[1]);if((state_val_180976 === 1))
{var inst_180934 = (new Array(0));var inst_180935 = inst_180934;var inst_180936 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_180975__$1 = (function (){var statearr_180977 = state_180975;(statearr_180977[7] = inst_180936);
(statearr_180977[8] = inst_180935);
return statearr_180977;
})();var statearr_180978_181006 = state_180975__$1;(statearr_180978_181006[2] = null);
(statearr_180978_181006[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180976 === 2))
{var state_180975__$1 = state_180975;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_180975__$1,4,ch);
} else
{if((state_val_180976 === 3))
{var inst_180973 = (state_180975[2]);var state_180975__$1 = state_180975;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_180975__$1,inst_180973);
} else
{if((state_val_180976 === 4))
{var inst_180939 = (state_180975[9]);var inst_180939__$1 = (state_180975[2]);var inst_180940 = (inst_180939__$1 == null);var inst_180941 = cljs.core.not.call(null,inst_180940);var state_180975__$1 = (function (){var statearr_180979 = state_180975;(statearr_180979[9] = inst_180939__$1);
return statearr_180979;
})();if(inst_180941)
{var statearr_180980_181007 = state_180975__$1;(statearr_180980_181007[1] = 5);
} else
{var statearr_180981_181008 = state_180975__$1;(statearr_180981_181008[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180976 === 5))
{var inst_180943 = (state_180975[10]);var inst_180936 = (state_180975[7]);var inst_180939 = (state_180975[9]);var inst_180943__$1 = f.call(null,inst_180939);var inst_180944 = cljs.core._EQ_.call(null,inst_180943__$1,inst_180936);var inst_180945 = cljs.core.keyword_identical_QMARK_.call(null,inst_180936,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_180946 = (inst_180944) || (inst_180945);var state_180975__$1 = (function (){var statearr_180982 = state_180975;(statearr_180982[10] = inst_180943__$1);
return statearr_180982;
})();if(cljs.core.truth_(inst_180946))
{var statearr_180983_181009 = state_180975__$1;(statearr_180983_181009[1] = 8);
} else
{var statearr_180984_181010 = state_180975__$1;(statearr_180984_181010[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180976 === 6))
{var inst_180935 = (state_180975[8]);var inst_180960 = inst_180935.length;var inst_180961 = (inst_180960 > 0);var state_180975__$1 = state_180975;if(cljs.core.truth_(inst_180961))
{var statearr_180986_181011 = state_180975__$1;(statearr_180986_181011[1] = 12);
} else
{var statearr_180987_181012 = state_180975__$1;(statearr_180987_181012[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180976 === 7))
{var inst_180971 = (state_180975[2]);var state_180975__$1 = state_180975;var statearr_180988_181013 = state_180975__$1;(statearr_180988_181013[2] = inst_180971);
(statearr_180988_181013[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180976 === 8))
{var inst_180943 = (state_180975[10]);var inst_180935 = (state_180975[8]);var inst_180939 = (state_180975[9]);var inst_180948 = inst_180935.push(inst_180939);var tmp180985 = inst_180935;var inst_180935__$1 = tmp180985;var inst_180936 = inst_180943;var state_180975__$1 = (function (){var statearr_180989 = state_180975;(statearr_180989[11] = inst_180948);
(statearr_180989[7] = inst_180936);
(statearr_180989[8] = inst_180935__$1);
return statearr_180989;
})();var statearr_180990_181014 = state_180975__$1;(statearr_180990_181014[2] = null);
(statearr_180990_181014[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180976 === 9))
{var inst_180935 = (state_180975[8]);var inst_180951 = cljs.core.vec.call(null,inst_180935);var state_180975__$1 = state_180975;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_180975__$1,11,out,inst_180951);
} else
{if((state_val_180976 === 10))
{var inst_180958 = (state_180975[2]);var state_180975__$1 = state_180975;var statearr_180991_181015 = state_180975__$1;(statearr_180991_181015[2] = inst_180958);
(statearr_180991_181015[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180976 === 11))
{var inst_180943 = (state_180975[10]);var inst_180939 = (state_180975[9]);var inst_180953 = (state_180975[2]);var inst_180954 = (new Array(0));var inst_180955 = inst_180954.push(inst_180939);var inst_180935 = inst_180954;var inst_180936 = inst_180943;var state_180975__$1 = (function (){var statearr_180992 = state_180975;(statearr_180992[12] = inst_180953);
(statearr_180992[13] = inst_180955);
(statearr_180992[7] = inst_180936);
(statearr_180992[8] = inst_180935);
return statearr_180992;
})();var statearr_180993_181016 = state_180975__$1;(statearr_180993_181016[2] = null);
(statearr_180993_181016[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180976 === 12))
{var inst_180935 = (state_180975[8]);var inst_180963 = cljs.core.vec.call(null,inst_180935);var state_180975__$1 = state_180975;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_180975__$1,15,out,inst_180963);
} else
{if((state_val_180976 === 13))
{var state_180975__$1 = state_180975;var statearr_180994_181017 = state_180975__$1;(statearr_180994_181017[2] = null);
(statearr_180994_181017[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180976 === 14))
{var inst_180968 = (state_180975[2]);var inst_180969 = cljs.core.async.close_BANG_.call(null,out);var state_180975__$1 = (function (){var statearr_180995 = state_180975;(statearr_180995[14] = inst_180968);
return statearr_180995;
})();var statearr_180996_181018 = state_180975__$1;(statearr_180996_181018[2] = inst_180969);
(statearr_180996_181018[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180976 === 15))
{var inst_180965 = (state_180975[2]);var state_180975__$1 = state_180975;var statearr_180997_181019 = state_180975__$1;(statearr_180997_181019[2] = inst_180965);
(statearr_180997_181019[1] = 14);
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
var state_machine__13310__auto____0 = (function (){var statearr_181001 = (new Array(15));(statearr_181001[0] = state_machine__13310__auto__);
(statearr_181001[1] = 1);
return statearr_181001;
});
var state_machine__13310__auto____1 = (function (state_180975){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_180975);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e181002){if((e181002 instanceof Object))
{var ex__13313__auto__ = e181002;var statearr_181003_181020 = state_180975;(statearr_181003_181020[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180975);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e181002;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__181021 = state_180975;
state_180975 = G__181021;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_180975){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_180975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_181004 = f__13410__auto__.call(null);(statearr_181004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___181005);
return statearr_181004;
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
