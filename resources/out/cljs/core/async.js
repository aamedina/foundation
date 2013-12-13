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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t40635 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40635 = (function (f,fn_handler,meta40636){
this.f = f;
this.fn_handler = fn_handler;
this.meta40636 = meta40636;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40635.cljs$lang$type = true;
cljs.core.async.t40635.cljs$lang$ctorStr = "cljs.core.async/t40635";
cljs.core.async.t40635.cljs$lang$ctorPrWriter = (function (this__14332__auto__,writer__14333__auto__,opt__14334__auto__){return cljs.core._write.call(null,writer__14333__auto__,"cljs.core.async/t40635");
});
cljs.core.async.t40635.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40635.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t40635.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t40635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40637){var self__ = this;
var _40637__$1 = this;return self__.meta40636;
});
cljs.core.async.t40635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40637,meta40636__$1){var self__ = this;
var _40637__$1 = this;return (new cljs.core.async.t40635(self__.f,self__.fn_handler,meta40636__$1));
});
cljs.core.async.__GT_t40635 = (function __GT_t40635(f__$1,fn_handler__$1,meta40636){return (new cljs.core.async.t40635(f__$1,fn_handler__$1,meta40636));
});
}
return (new cljs.core.async.t40635(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__40639 = buff;if(G__40639)
{var bit__14414__auto__ = null;if(cljs.core.truth_((function (){var or__13788__auto__ = bit__14414__auto__;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return G__40639.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__40639.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__40639);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__40639);
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
{var val_40640 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_40640);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_40640);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__13776__auto__ = ret;if(cljs.core.truth_(and__13776__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__13776__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__14611__auto___40641 = n;var x_40642 = 0;while(true){
if((x_40642 < n__14611__auto___40641))
{(a[x_40642] = 0);
{
var G__40643 = (x_40642 + 1);
x_40642 = G__40643;
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
var G__40644 = (i + 1);
i = G__40644;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t40648 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40648 = (function (flag,alt_flag,meta40649){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta40649 = meta40649;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40648.cljs$lang$type = true;
cljs.core.async.t40648.cljs$lang$ctorStr = "cljs.core.async/t40648";
cljs.core.async.t40648.cljs$lang$ctorPrWriter = (function (this__14332__auto__,writer__14333__auto__,opt__14334__auto__){return cljs.core._write.call(null,writer__14333__auto__,"cljs.core.async/t40648");
});
cljs.core.async.t40648.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40648.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t40648.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t40648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40650){var self__ = this;
var _40650__$1 = this;return self__.meta40649;
});
cljs.core.async.t40648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40650,meta40649__$1){var self__ = this;
var _40650__$1 = this;return (new cljs.core.async.t40648(self__.flag,self__.alt_flag,meta40649__$1));
});
cljs.core.async.__GT_t40648 = (function __GT_t40648(flag__$1,alt_flag__$1,meta40649){return (new cljs.core.async.t40648(flag__$1,alt_flag__$1,meta40649));
});
}
return (new cljs.core.async.t40648(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t40654 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40654 = (function (cb,flag,alt_handler,meta40655){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta40655 = meta40655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40654.cljs$lang$type = true;
cljs.core.async.t40654.cljs$lang$ctorStr = "cljs.core.async/t40654";
cljs.core.async.t40654.cljs$lang$ctorPrWriter = (function (this__14332__auto__,writer__14333__auto__,opt__14334__auto__){return cljs.core._write.call(null,writer__14333__auto__,"cljs.core.async/t40654");
});
cljs.core.async.t40654.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40654.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t40654.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t40654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40656){var self__ = this;
var _40656__$1 = this;return self__.meta40655;
});
cljs.core.async.t40654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40656,meta40655__$1){var self__ = this;
var _40656__$1 = this;return (new cljs.core.async.t40654(self__.cb,self__.flag,self__.alt_handler,meta40655__$1));
});
cljs.core.async.__GT_t40654 = (function __GT_t40654(cb__$1,flag__$1,alt_handler__$1,meta40655){return (new cljs.core.async.t40654(cb__$1,flag__$1,alt_handler__$1,meta40655));
});
}
return (new cljs.core.async.t40654(cb,flag,alt_handler,null));
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
return (function (p1__40657_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40657_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__13788__auto__ = wport;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__40658 = (i + 1);
i = G__40658;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__13788__auto__ = ret;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__13776__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__13776__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__13776__auto__;
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
var alts_BANG___delegate = function (ports,p__40659){var map__40661 = p__40659;var map__40661__$1 = ((cljs.core.seq_QMARK_.call(null,map__40661))?cljs.core.apply.call(null,cljs.core.hash_map,map__40661):map__40661);var opts = map__40661__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__40659 = null;if (arguments.length > 1) {
  p__40659 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__40659);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__40662){
var ports = cljs.core.first(arglist__40662);
var p__40659 = cljs.core.rest(arglist__40662);
return alts_BANG___delegate(ports,p__40659);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t40670 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40670 = (function (ch,f,map_LT_,meta40671){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta40671 = meta40671;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40670.cljs$lang$type = true;
cljs.core.async.t40670.cljs$lang$ctorStr = "cljs.core.async/t40670";
cljs.core.async.t40670.cljs$lang$ctorPrWriter = (function (this__14332__auto__,writer__14333__auto__,opt__14334__auto__){return cljs.core._write.call(null,writer__14333__auto__,"cljs.core.async/t40670");
});
cljs.core.async.t40670.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t40670.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t40670.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t40670.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t40673 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40673 = (function (fn1,_,meta40671,ch,f,map_LT_,meta40674){
this.fn1 = fn1;
this._ = _;
this.meta40671 = meta40671;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta40674 = meta40674;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40673.cljs$lang$type = true;
cljs.core.async.t40673.cljs$lang$ctorStr = "cljs.core.async/t40673";
cljs.core.async.t40673.cljs$lang$ctorPrWriter = (function (this__14332__auto__,writer__14333__auto__,opt__14334__auto__){return cljs.core._write.call(null,writer__14333__auto__,"cljs.core.async/t40673");
});
cljs.core.async.t40673.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40673.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t40673.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t40673.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__40663_SHARP_){return f1.call(null,(((p1__40663_SHARP_ == null))?null:self__.f.call(null,p1__40663_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t40673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40675){var self__ = this;
var _40675__$1 = this;return self__.meta40674;
});
cljs.core.async.t40673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40675,meta40674__$1){var self__ = this;
var _40675__$1 = this;return (new cljs.core.async.t40673(self__.fn1,self__._,self__.meta40671,self__.ch,self__.f,self__.map_LT_,meta40674__$1));
});
cljs.core.async.__GT_t40673 = (function __GT_t40673(fn1__$1,___$2,meta40671__$1,ch__$2,f__$2,map_LT___$2,meta40674){return (new cljs.core.async.t40673(fn1__$1,___$2,meta40671__$1,ch__$2,f__$2,map_LT___$2,meta40674));
});
}
return (new cljs.core.async.t40673(fn1,___$1,self__.meta40671,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__13776__auto__ = ret;if(cljs.core.truth_(and__13776__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__13776__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t40670.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t40670.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t40670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40672){var self__ = this;
var _40672__$1 = this;return self__.meta40671;
});
cljs.core.async.t40670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40672,meta40671__$1){var self__ = this;
var _40672__$1 = this;return (new cljs.core.async.t40670(self__.ch,self__.f,self__.map_LT_,meta40671__$1));
});
cljs.core.async.__GT_t40670 = (function __GT_t40670(ch__$1,f__$1,map_LT___$1,meta40671){return (new cljs.core.async.t40670(ch__$1,f__$1,map_LT___$1,meta40671));
});
}
return (new cljs.core.async.t40670(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t40679 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40679 = (function (ch,f,map_GT_,meta40680){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta40680 = meta40680;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40679.cljs$lang$type = true;
cljs.core.async.t40679.cljs$lang$ctorStr = "cljs.core.async/t40679";
cljs.core.async.t40679.cljs$lang$ctorPrWriter = (function (this__14332__auto__,writer__14333__auto__,opt__14334__auto__){return cljs.core._write.call(null,writer__14333__auto__,"cljs.core.async/t40679");
});
cljs.core.async.t40679.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t40679.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t40679.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t40679.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t40679.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t40679.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t40679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40681){var self__ = this;
var _40681__$1 = this;return self__.meta40680;
});
cljs.core.async.t40679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40681,meta40680__$1){var self__ = this;
var _40681__$1 = this;return (new cljs.core.async.t40679(self__.ch,self__.f,self__.map_GT_,meta40680__$1));
});
cljs.core.async.__GT_t40679 = (function __GT_t40679(ch__$1,f__$1,map_GT___$1,meta40680){return (new cljs.core.async.t40679(ch__$1,f__$1,map_GT___$1,meta40680));
});
}
return (new cljs.core.async.t40679(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t40685 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40685 = (function (ch,p,filter_GT_,meta40686){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta40686 = meta40686;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40685.cljs$lang$type = true;
cljs.core.async.t40685.cljs$lang$ctorStr = "cljs.core.async/t40685";
cljs.core.async.t40685.cljs$lang$ctorPrWriter = (function (this__14332__auto__,writer__14333__auto__,opt__14334__auto__){return cljs.core._write.call(null,writer__14333__auto__,"cljs.core.async/t40685");
});
cljs.core.async.t40685.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t40685.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t40685.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t40685.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t40685.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t40685.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t40685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40687){var self__ = this;
var _40687__$1 = this;return self__.meta40686;
});
cljs.core.async.t40685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40687,meta40686__$1){var self__ = this;
var _40687__$1 = this;return (new cljs.core.async.t40685(self__.ch,self__.p,self__.filter_GT_,meta40686__$1));
});
cljs.core.async.__GT_t40685 = (function __GT_t40685(ch__$1,p__$1,filter_GT___$1,meta40686){return (new cljs.core.async.t40685(ch__$1,p__$1,filter_GT___$1,meta40686));
});
}
return (new cljs.core.async.t40685(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18801__auto___40770 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18802__auto__ = (function (){var switch__18731__auto__ = (function (state_40749){var state_val_40750 = (state_40749[1]);if((state_val_40750 === 1))
{var state_40749__$1 = state_40749;var statearr_40751_40771 = state_40749__$1;(statearr_40751_40771[2] = null);
(statearr_40751_40771[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40750 === 2))
{var state_40749__$1 = state_40749;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40749__$1,4,ch);
} else
{if((state_val_40750 === 3))
{var inst_40747 = (state_40749[2]);var state_40749__$1 = state_40749;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40749__$1,inst_40747);
} else
{if((state_val_40750 === 4))
{var inst_40731 = (state_40749[7]);var inst_40731__$1 = (state_40749[2]);var inst_40732 = (inst_40731__$1 == null);var state_40749__$1 = (function (){var statearr_40752 = state_40749;(statearr_40752[7] = inst_40731__$1);
return statearr_40752;
})();if(cljs.core.truth_(inst_40732))
{var statearr_40753_40772 = state_40749__$1;(statearr_40753_40772[1] = 5);
} else
{var statearr_40754_40773 = state_40749__$1;(statearr_40754_40773[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40750 === 5))
{var inst_40734 = cljs.core.async.close_BANG_.call(null,out);var state_40749__$1 = state_40749;var statearr_40755_40774 = state_40749__$1;(statearr_40755_40774[2] = inst_40734);
(statearr_40755_40774[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40750 === 6))
{var inst_40731 = (state_40749[7]);var inst_40736 = p.call(null,inst_40731);var state_40749__$1 = state_40749;if(cljs.core.truth_(inst_40736))
{var statearr_40756_40775 = state_40749__$1;(statearr_40756_40775[1] = 8);
} else
{var statearr_40757_40776 = state_40749__$1;(statearr_40757_40776[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40750 === 7))
{var inst_40745 = (state_40749[2]);var state_40749__$1 = state_40749;var statearr_40758_40777 = state_40749__$1;(statearr_40758_40777[2] = inst_40745);
(statearr_40758_40777[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40750 === 8))
{var inst_40731 = (state_40749[7]);var state_40749__$1 = state_40749;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40749__$1,11,out,inst_40731);
} else
{if((state_val_40750 === 9))
{var state_40749__$1 = state_40749;var statearr_40759_40778 = state_40749__$1;(statearr_40759_40778[2] = null);
(statearr_40759_40778[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40750 === 10))
{var inst_40742 = (state_40749[2]);var state_40749__$1 = (function (){var statearr_40760 = state_40749;(statearr_40760[8] = inst_40742);
return statearr_40760;
})();var statearr_40761_40779 = state_40749__$1;(statearr_40761_40779[2] = null);
(statearr_40761_40779[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40750 === 11))
{var inst_40739 = (state_40749[2]);var state_40749__$1 = state_40749;var statearr_40762_40780 = state_40749__$1;(statearr_40762_40780[2] = inst_40739);
(statearr_40762_40780[1] = 10);
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
});return ((function (switch__18731__auto__){
return (function() {
var state_machine__18732__auto__ = null;
var state_machine__18732__auto____0 = (function (){var statearr_40766 = (new Array(9));(statearr_40766[0] = state_machine__18732__auto__);
(statearr_40766[1] = 1);
return statearr_40766;
});
var state_machine__18732__auto____1 = (function (state_40749){while(true){
var ret_value__18733__auto__ = (function (){try{while(true){
var result__18734__auto__ = switch__18731__auto__.call(null,state_40749);if(cljs.core.keyword_identical_QMARK_.call(null,result__18734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18734__auto__;
}
break;
}
}catch (e40767){if((e40767 instanceof Object))
{var ex__18735__auto__ = e40767;var statearr_40768_40781 = state_40749;(statearr_40768_40781[5] = ex__18735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40749);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e40767;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__40782 = state_40749;
state_40749 = G__40782;
continue;
}
} else
{return ret_value__18733__auto__;
}
break;
}
});
state_machine__18732__auto__ = function(state_40749){
switch(arguments.length){
case 0:
return state_machine__18732__auto____0.call(this);
case 1:
return state_machine__18732__auto____1.call(this,state_40749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18732__auto____0;
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18732__auto____1;
return state_machine__18732__auto__;
})()
;})(switch__18731__auto__))
})();var state__18803__auto__ = (function (){var statearr_40769 = f__18802__auto__.call(null);(statearr_40769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18801__auto___40770);
return statearr_40769;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18803__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__18801__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18802__auto__ = (function (){var switch__18731__auto__ = (function (state_40934){var state_val_40935 = (state_40934[1]);if((state_val_40935 === 1))
{var state_40934__$1 = state_40934;var statearr_40936_40973 = state_40934__$1;(statearr_40936_40973[2] = null);
(statearr_40936_40973[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40935 === 2))
{var state_40934__$1 = state_40934;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40934__$1,4,in$);
} else
{if((state_val_40935 === 3))
{var inst_40932 = (state_40934[2]);var state_40934__$1 = state_40934;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40934__$1,inst_40932);
} else
{if((state_val_40935 === 4))
{var inst_40880 = (state_40934[7]);var inst_40880__$1 = (state_40934[2]);var inst_40881 = (inst_40880__$1 == null);var state_40934__$1 = (function (){var statearr_40937 = state_40934;(statearr_40937[7] = inst_40880__$1);
return statearr_40937;
})();if(cljs.core.truth_(inst_40881))
{var statearr_40938_40974 = state_40934__$1;(statearr_40938_40974[1] = 5);
} else
{var statearr_40939_40975 = state_40934__$1;(statearr_40939_40975[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40935 === 5))
{var inst_40883 = cljs.core.async.close_BANG_.call(null,out);var state_40934__$1 = state_40934;var statearr_40940_40976 = state_40934__$1;(statearr_40940_40976[2] = inst_40883);
(statearr_40940_40976[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40935 === 6))
{var inst_40880 = (state_40934[7]);var inst_40885 = f.call(null,inst_40880);var inst_40890 = cljs.core.seq.call(null,inst_40885);var inst_40891 = inst_40890;var inst_40892 = null;var inst_40893 = 0;var inst_40894 = 0;var state_40934__$1 = (function (){var statearr_40941 = state_40934;(statearr_40941[8] = inst_40891);
(statearr_40941[9] = inst_40892);
(statearr_40941[10] = inst_40893);
(statearr_40941[11] = inst_40894);
return statearr_40941;
})();var statearr_40942_40977 = state_40934__$1;(statearr_40942_40977[2] = null);
(statearr_40942_40977[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40935 === 7))
{var inst_40930 = (state_40934[2]);var state_40934__$1 = state_40934;var statearr_40943_40978 = state_40934__$1;(statearr_40943_40978[2] = inst_40930);
(statearr_40943_40978[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40935 === 8))
{var inst_40893 = (state_40934[10]);var inst_40894 = (state_40934[11]);var inst_40896 = (inst_40894 < inst_40893);var inst_40897 = inst_40896;var state_40934__$1 = state_40934;if(cljs.core.truth_(inst_40897))
{var statearr_40944_40979 = state_40934__$1;(statearr_40944_40979[1] = 10);
} else
{var statearr_40945_40980 = state_40934__$1;(statearr_40945_40980[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40935 === 9))
{var inst_40927 = (state_40934[2]);var state_40934__$1 = (function (){var statearr_40946 = state_40934;(statearr_40946[12] = inst_40927);
return statearr_40946;
})();var statearr_40947_40981 = state_40934__$1;(statearr_40947_40981[2] = null);
(statearr_40947_40981[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40935 === 10))
{var inst_40892 = (state_40934[9]);var inst_40894 = (state_40934[11]);var inst_40899 = cljs.core._nth.call(null,inst_40892,inst_40894);var state_40934__$1 = state_40934;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40934__$1,13,out,inst_40899);
} else
{if((state_val_40935 === 11))
{var inst_40905 = (state_40934[13]);var inst_40891 = (state_40934[8]);var inst_40905__$1 = cljs.core.seq.call(null,inst_40891);var state_40934__$1 = (function (){var statearr_40951 = state_40934;(statearr_40951[13] = inst_40905__$1);
return statearr_40951;
})();if(inst_40905__$1)
{var statearr_40952_40982 = state_40934__$1;(statearr_40952_40982[1] = 14);
} else
{var statearr_40953_40983 = state_40934__$1;(statearr_40953_40983[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40935 === 12))
{var inst_40925 = (state_40934[2]);var state_40934__$1 = state_40934;var statearr_40954_40984 = state_40934__$1;(statearr_40954_40984[2] = inst_40925);
(statearr_40954_40984[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40935 === 13))
{var inst_40891 = (state_40934[8]);var inst_40892 = (state_40934[9]);var inst_40893 = (state_40934[10]);var inst_40894 = (state_40934[11]);var inst_40901 = (state_40934[2]);var inst_40902 = (inst_40894 + 1);var tmp40948 = inst_40891;var tmp40949 = inst_40892;var tmp40950 = inst_40893;var inst_40891__$1 = tmp40948;var inst_40892__$1 = tmp40949;var inst_40893__$1 = tmp40950;var inst_40894__$1 = inst_40902;var state_40934__$1 = (function (){var statearr_40955 = state_40934;(statearr_40955[8] = inst_40891__$1);
(statearr_40955[14] = inst_40901);
(statearr_40955[9] = inst_40892__$1);
(statearr_40955[10] = inst_40893__$1);
(statearr_40955[11] = inst_40894__$1);
return statearr_40955;
})();var statearr_40956_40985 = state_40934__$1;(statearr_40956_40985[2] = null);
(statearr_40956_40985[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40935 === 14))
{var inst_40905 = (state_40934[13]);var inst_40907 = cljs.core.chunked_seq_QMARK_.call(null,inst_40905);var state_40934__$1 = state_40934;if(inst_40907)
{var statearr_40957_40986 = state_40934__$1;(statearr_40957_40986[1] = 17);
} else
{var statearr_40958_40987 = state_40934__$1;(statearr_40958_40987[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40935 === 15))
{var state_40934__$1 = state_40934;var statearr_40959_40988 = state_40934__$1;(statearr_40959_40988[2] = null);
(statearr_40959_40988[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40935 === 16))
{var inst_40923 = (state_40934[2]);var state_40934__$1 = state_40934;var statearr_40960_40989 = state_40934__$1;(statearr_40960_40989[2] = inst_40923);
(statearr_40960_40989[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40935 === 17))
{var inst_40905 = (state_40934[13]);var inst_40909 = cljs.core.chunk_first.call(null,inst_40905);var inst_40910 = cljs.core.chunk_rest.call(null,inst_40905);var inst_40911 = cljs.core.count.call(null,inst_40909);var inst_40891 = inst_40910;var inst_40892 = inst_40909;var inst_40893 = inst_40911;var inst_40894 = 0;var state_40934__$1 = (function (){var statearr_40961 = state_40934;(statearr_40961[8] = inst_40891);
(statearr_40961[9] = inst_40892);
(statearr_40961[10] = inst_40893);
(statearr_40961[11] = inst_40894);
return statearr_40961;
})();var statearr_40962_40990 = state_40934__$1;(statearr_40962_40990[2] = null);
(statearr_40962_40990[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40935 === 18))
{var inst_40905 = (state_40934[13]);var inst_40914 = cljs.core.first.call(null,inst_40905);var state_40934__$1 = state_40934;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40934__$1,20,out,inst_40914);
} else
{if((state_val_40935 === 19))
{var inst_40920 = (state_40934[2]);var state_40934__$1 = state_40934;var statearr_40963_40991 = state_40934__$1;(statearr_40963_40991[2] = inst_40920);
(statearr_40963_40991[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40935 === 20))
{var inst_40905 = (state_40934[13]);var inst_40916 = (state_40934[2]);var inst_40917 = cljs.core.next.call(null,inst_40905);var inst_40891 = inst_40917;var inst_40892 = null;var inst_40893 = 0;var inst_40894 = 0;var state_40934__$1 = (function (){var statearr_40964 = state_40934;(statearr_40964[8] = inst_40891);
(statearr_40964[15] = inst_40916);
(statearr_40964[9] = inst_40892);
(statearr_40964[10] = inst_40893);
(statearr_40964[11] = inst_40894);
return statearr_40964;
})();var statearr_40965_40992 = state_40934__$1;(statearr_40965_40992[2] = null);
(statearr_40965_40992[1] = 8);
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
});return ((function (switch__18731__auto__){
return (function() {
var state_machine__18732__auto__ = null;
var state_machine__18732__auto____0 = (function (){var statearr_40969 = (new Array(16));(statearr_40969[0] = state_machine__18732__auto__);
(statearr_40969[1] = 1);
return statearr_40969;
});
var state_machine__18732__auto____1 = (function (state_40934){while(true){
var ret_value__18733__auto__ = (function (){try{while(true){
var result__18734__auto__ = switch__18731__auto__.call(null,state_40934);if(cljs.core.keyword_identical_QMARK_.call(null,result__18734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18734__auto__;
}
break;
}
}catch (e40970){if((e40970 instanceof Object))
{var ex__18735__auto__ = e40970;var statearr_40971_40993 = state_40934;(statearr_40971_40993[5] = ex__18735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40934);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e40970;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__40994 = state_40934;
state_40934 = G__40994;
continue;
}
} else
{return ret_value__18733__auto__;
}
break;
}
});
state_machine__18732__auto__ = function(state_40934){
switch(arguments.length){
case 0:
return state_machine__18732__auto____0.call(this);
case 1:
return state_machine__18732__auto____1.call(this,state_40934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18732__auto____0;
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18732__auto____1;
return state_machine__18732__auto__;
})()
;})(switch__18731__auto__))
})();var state__18803__auto__ = (function (){var statearr_40972 = f__18802__auto__.call(null);(statearr_40972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18801__auto__);
return statearr_40972;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18803__auto__);
}));
return c__18801__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__18801__auto___41075 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18802__auto__ = (function (){var switch__18731__auto__ = (function (state_41054){var state_val_41055 = (state_41054[1]);if((state_val_41055 === 1))
{var state_41054__$1 = state_41054;var statearr_41056_41076 = state_41054__$1;(statearr_41056_41076[2] = null);
(statearr_41056_41076[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41055 === 2))
{var state_41054__$1 = state_41054;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41054__$1,4,from);
} else
{if((state_val_41055 === 3))
{var inst_41052 = (state_41054[2]);var state_41054__$1 = state_41054;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41054__$1,inst_41052);
} else
{if((state_val_41055 === 4))
{var inst_41037 = (state_41054[7]);var inst_41037__$1 = (state_41054[2]);var inst_41038 = (inst_41037__$1 == null);var state_41054__$1 = (function (){var statearr_41057 = state_41054;(statearr_41057[7] = inst_41037__$1);
return statearr_41057;
})();if(cljs.core.truth_(inst_41038))
{var statearr_41058_41077 = state_41054__$1;(statearr_41058_41077[1] = 5);
} else
{var statearr_41059_41078 = state_41054__$1;(statearr_41059_41078[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41055 === 5))
{var state_41054__$1 = state_41054;if(cljs.core.truth_(close_QMARK_))
{var statearr_41060_41079 = state_41054__$1;(statearr_41060_41079[1] = 8);
} else
{var statearr_41061_41080 = state_41054__$1;(statearr_41061_41080[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41055 === 6))
{var inst_41037 = (state_41054[7]);var state_41054__$1 = state_41054;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41054__$1,11,to,inst_41037);
} else
{if((state_val_41055 === 7))
{var inst_41050 = (state_41054[2]);var state_41054__$1 = state_41054;var statearr_41062_41081 = state_41054__$1;(statearr_41062_41081[2] = inst_41050);
(statearr_41062_41081[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41055 === 8))
{var inst_41041 = cljs.core.async.close_BANG_.call(null,to);var state_41054__$1 = state_41054;var statearr_41063_41082 = state_41054__$1;(statearr_41063_41082[2] = inst_41041);
(statearr_41063_41082[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41055 === 9))
{var state_41054__$1 = state_41054;var statearr_41064_41083 = state_41054__$1;(statearr_41064_41083[2] = null);
(statearr_41064_41083[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41055 === 10))
{var inst_41044 = (state_41054[2]);var state_41054__$1 = state_41054;var statearr_41065_41084 = state_41054__$1;(statearr_41065_41084[2] = inst_41044);
(statearr_41065_41084[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41055 === 11))
{var inst_41047 = (state_41054[2]);var state_41054__$1 = (function (){var statearr_41066 = state_41054;(statearr_41066[8] = inst_41047);
return statearr_41066;
})();var statearr_41067_41085 = state_41054__$1;(statearr_41067_41085[2] = null);
(statearr_41067_41085[1] = 2);
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
});return ((function (switch__18731__auto__){
return (function() {
var state_machine__18732__auto__ = null;
var state_machine__18732__auto____0 = (function (){var statearr_41071 = (new Array(9));(statearr_41071[0] = state_machine__18732__auto__);
(statearr_41071[1] = 1);
return statearr_41071;
});
var state_machine__18732__auto____1 = (function (state_41054){while(true){
var ret_value__18733__auto__ = (function (){try{while(true){
var result__18734__auto__ = switch__18731__auto__.call(null,state_41054);if(cljs.core.keyword_identical_QMARK_.call(null,result__18734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18734__auto__;
}
break;
}
}catch (e41072){if((e41072 instanceof Object))
{var ex__18735__auto__ = e41072;var statearr_41073_41086 = state_41054;(statearr_41073_41086[5] = ex__18735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41054);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e41072;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__41087 = state_41054;
state_41054 = G__41087;
continue;
}
} else
{return ret_value__18733__auto__;
}
break;
}
});
state_machine__18732__auto__ = function(state_41054){
switch(arguments.length){
case 0:
return state_machine__18732__auto____0.call(this);
case 1:
return state_machine__18732__auto____1.call(this,state_41054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18732__auto____0;
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18732__auto____1;
return state_machine__18732__auto__;
})()
;})(switch__18731__auto__))
})();var state__18803__auto__ = (function (){var statearr_41074 = f__18802__auto__.call(null);(statearr_41074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18801__auto___41075);
return statearr_41074;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18803__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__18801__auto___41174 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18802__auto__ = (function (){var switch__18731__auto__ = (function (state_41152){var state_val_41153 = (state_41152[1]);if((state_val_41153 === 1))
{var state_41152__$1 = state_41152;var statearr_41154_41175 = state_41152__$1;(statearr_41154_41175[2] = null);
(statearr_41154_41175[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41153 === 2))
{var state_41152__$1 = state_41152;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41152__$1,4,ch);
} else
{if((state_val_41153 === 3))
{var inst_41150 = (state_41152[2]);var state_41152__$1 = state_41152;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41152__$1,inst_41150);
} else
{if((state_val_41153 === 4))
{var inst_41133 = (state_41152[7]);var inst_41133__$1 = (state_41152[2]);var inst_41134 = (inst_41133__$1 == null);var state_41152__$1 = (function (){var statearr_41155 = state_41152;(statearr_41155[7] = inst_41133__$1);
return statearr_41155;
})();if(cljs.core.truth_(inst_41134))
{var statearr_41156_41176 = state_41152__$1;(statearr_41156_41176[1] = 5);
} else
{var statearr_41157_41177 = state_41152__$1;(statearr_41157_41177[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41153 === 5))
{var inst_41136 = cljs.core.async.close_BANG_.call(null,tc);var inst_41137 = cljs.core.async.close_BANG_.call(null,fc);var state_41152__$1 = (function (){var statearr_41158 = state_41152;(statearr_41158[8] = inst_41136);
return statearr_41158;
})();var statearr_41159_41178 = state_41152__$1;(statearr_41159_41178[2] = inst_41137);
(statearr_41159_41178[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41153 === 6))
{var inst_41133 = (state_41152[7]);var inst_41139 = p.call(null,inst_41133);var state_41152__$1 = state_41152;if(cljs.core.truth_(inst_41139))
{var statearr_41160_41179 = state_41152__$1;(statearr_41160_41179[1] = 9);
} else
{var statearr_41161_41180 = state_41152__$1;(statearr_41161_41180[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41153 === 7))
{var inst_41148 = (state_41152[2]);var state_41152__$1 = state_41152;var statearr_41162_41181 = state_41152__$1;(statearr_41162_41181[2] = inst_41148);
(statearr_41162_41181[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41153 === 8))
{var inst_41145 = (state_41152[2]);var state_41152__$1 = (function (){var statearr_41163 = state_41152;(statearr_41163[9] = inst_41145);
return statearr_41163;
})();var statearr_41164_41182 = state_41152__$1;(statearr_41164_41182[2] = null);
(statearr_41164_41182[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41153 === 9))
{var state_41152__$1 = state_41152;var statearr_41165_41183 = state_41152__$1;(statearr_41165_41183[2] = tc);
(statearr_41165_41183[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41153 === 10))
{var state_41152__$1 = state_41152;var statearr_41166_41184 = state_41152__$1;(statearr_41166_41184[2] = fc);
(statearr_41166_41184[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41153 === 11))
{var inst_41133 = (state_41152[7]);var inst_41143 = (state_41152[2]);var state_41152__$1 = state_41152;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41152__$1,8,inst_41143,inst_41133);
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
});return ((function (switch__18731__auto__){
return (function() {
var state_machine__18732__auto__ = null;
var state_machine__18732__auto____0 = (function (){var statearr_41170 = (new Array(10));(statearr_41170[0] = state_machine__18732__auto__);
(statearr_41170[1] = 1);
return statearr_41170;
});
var state_machine__18732__auto____1 = (function (state_41152){while(true){
var ret_value__18733__auto__ = (function (){try{while(true){
var result__18734__auto__ = switch__18731__auto__.call(null,state_41152);if(cljs.core.keyword_identical_QMARK_.call(null,result__18734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18734__auto__;
}
break;
}
}catch (e41171){if((e41171 instanceof Object))
{var ex__18735__auto__ = e41171;var statearr_41172_41185 = state_41152;(statearr_41172_41185[5] = ex__18735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41152);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e41171;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__41186 = state_41152;
state_41152 = G__41186;
continue;
}
} else
{return ret_value__18733__auto__;
}
break;
}
});
state_machine__18732__auto__ = function(state_41152){
switch(arguments.length){
case 0:
return state_machine__18732__auto____0.call(this);
case 1:
return state_machine__18732__auto____1.call(this,state_41152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18732__auto____0;
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18732__auto____1;
return state_machine__18732__auto__;
})()
;})(switch__18731__auto__))
})();var state__18803__auto__ = (function (){var statearr_41173 = f__18802__auto__.call(null);(statearr_41173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18801__auto___41174);
return statearr_41173;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18803__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__18801__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18802__auto__ = (function (){var switch__18731__auto__ = (function (state_41233){var state_val_41234 = (state_41233[1]);if((state_val_41234 === 7))
{var inst_41229 = (state_41233[2]);var state_41233__$1 = state_41233;var statearr_41235_41251 = state_41233__$1;(statearr_41235_41251[2] = inst_41229);
(statearr_41235_41251[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41234 === 6))
{var inst_41222 = (state_41233[7]);var inst_41219 = (state_41233[8]);var inst_41226 = f.call(null,inst_41219,inst_41222);var inst_41219__$1 = inst_41226;var state_41233__$1 = (function (){var statearr_41236 = state_41233;(statearr_41236[8] = inst_41219__$1);
return statearr_41236;
})();var statearr_41237_41252 = state_41233__$1;(statearr_41237_41252[2] = null);
(statearr_41237_41252[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41234 === 5))
{var inst_41219 = (state_41233[8]);var state_41233__$1 = state_41233;var statearr_41238_41253 = state_41233__$1;(statearr_41238_41253[2] = inst_41219);
(statearr_41238_41253[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41234 === 4))
{var inst_41222 = (state_41233[7]);var inst_41222__$1 = (state_41233[2]);var inst_41223 = (inst_41222__$1 == null);var state_41233__$1 = (function (){var statearr_41239 = state_41233;(statearr_41239[7] = inst_41222__$1);
return statearr_41239;
})();if(cljs.core.truth_(inst_41223))
{var statearr_41240_41254 = state_41233__$1;(statearr_41240_41254[1] = 5);
} else
{var statearr_41241_41255 = state_41233__$1;(statearr_41241_41255[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41234 === 3))
{var inst_41231 = (state_41233[2]);var state_41233__$1 = state_41233;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41233__$1,inst_41231);
} else
{if((state_val_41234 === 2))
{var state_41233__$1 = state_41233;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41233__$1,4,ch);
} else
{if((state_val_41234 === 1))
{var inst_41219 = init;var state_41233__$1 = (function (){var statearr_41242 = state_41233;(statearr_41242[8] = inst_41219);
return statearr_41242;
})();var statearr_41243_41256 = state_41233__$1;(statearr_41243_41256[2] = null);
(statearr_41243_41256[1] = 2);
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
});return ((function (switch__18731__auto__){
return (function() {
var state_machine__18732__auto__ = null;
var state_machine__18732__auto____0 = (function (){var statearr_41247 = (new Array(9));(statearr_41247[0] = state_machine__18732__auto__);
(statearr_41247[1] = 1);
return statearr_41247;
});
var state_machine__18732__auto____1 = (function (state_41233){while(true){
var ret_value__18733__auto__ = (function (){try{while(true){
var result__18734__auto__ = switch__18731__auto__.call(null,state_41233);if(cljs.core.keyword_identical_QMARK_.call(null,result__18734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18734__auto__;
}
break;
}
}catch (e41248){if((e41248 instanceof Object))
{var ex__18735__auto__ = e41248;var statearr_41249_41257 = state_41233;(statearr_41249_41257[5] = ex__18735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41233);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e41248;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__41258 = state_41233;
state_41233 = G__41258;
continue;
}
} else
{return ret_value__18733__auto__;
}
break;
}
});
state_machine__18732__auto__ = function(state_41233){
switch(arguments.length){
case 0:
return state_machine__18732__auto____0.call(this);
case 1:
return state_machine__18732__auto____1.call(this,state_41233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18732__auto____0;
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18732__auto____1;
return state_machine__18732__auto__;
})()
;})(switch__18731__auto__))
})();var state__18803__auto__ = (function (){var statearr_41250 = f__18802__auto__.call(null);(statearr_41250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18801__auto__);
return statearr_41250;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18803__auto__);
}));
return c__18801__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__18801__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18802__auto__ = (function (){var switch__18731__auto__ = (function (state_41320){var state_val_41321 = (state_41320[1]);if((state_val_41321 === 1))
{var inst_41300 = cljs.core.seq.call(null,coll);var inst_41301 = inst_41300;var state_41320__$1 = (function (){var statearr_41322 = state_41320;(statearr_41322[7] = inst_41301);
return statearr_41322;
})();var statearr_41323_41341 = state_41320__$1;(statearr_41323_41341[2] = null);
(statearr_41323_41341[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41321 === 2))
{var inst_41301 = (state_41320[7]);var state_41320__$1 = state_41320;if(cljs.core.truth_(inst_41301))
{var statearr_41324_41342 = state_41320__$1;(statearr_41324_41342[1] = 4);
} else
{var statearr_41325_41343 = state_41320__$1;(statearr_41325_41343[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41321 === 3))
{var inst_41318 = (state_41320[2]);var state_41320__$1 = state_41320;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41320__$1,inst_41318);
} else
{if((state_val_41321 === 4))
{var inst_41301 = (state_41320[7]);var inst_41304 = cljs.core.first.call(null,inst_41301);var state_41320__$1 = state_41320;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41320__$1,7,ch,inst_41304);
} else
{if((state_val_41321 === 5))
{var state_41320__$1 = state_41320;if(cljs.core.truth_(close_QMARK_))
{var statearr_41326_41344 = state_41320__$1;(statearr_41326_41344[1] = 8);
} else
{var statearr_41327_41345 = state_41320__$1;(statearr_41327_41345[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41321 === 6))
{var inst_41316 = (state_41320[2]);var state_41320__$1 = state_41320;var statearr_41328_41346 = state_41320__$1;(statearr_41328_41346[2] = inst_41316);
(statearr_41328_41346[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41321 === 7))
{var inst_41301 = (state_41320[7]);var inst_41306 = (state_41320[2]);var inst_41307 = cljs.core.next.call(null,inst_41301);var inst_41301__$1 = inst_41307;var state_41320__$1 = (function (){var statearr_41329 = state_41320;(statearr_41329[8] = inst_41306);
(statearr_41329[7] = inst_41301__$1);
return statearr_41329;
})();var statearr_41330_41347 = state_41320__$1;(statearr_41330_41347[2] = null);
(statearr_41330_41347[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41321 === 8))
{var inst_41311 = cljs.core.async.close_BANG_.call(null,ch);var state_41320__$1 = state_41320;var statearr_41331_41348 = state_41320__$1;(statearr_41331_41348[2] = inst_41311);
(statearr_41331_41348[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41321 === 9))
{var state_41320__$1 = state_41320;var statearr_41332_41349 = state_41320__$1;(statearr_41332_41349[2] = null);
(statearr_41332_41349[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41321 === 10))
{var inst_41314 = (state_41320[2]);var state_41320__$1 = state_41320;var statearr_41333_41350 = state_41320__$1;(statearr_41333_41350[2] = inst_41314);
(statearr_41333_41350[1] = 6);
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
});return ((function (switch__18731__auto__){
return (function() {
var state_machine__18732__auto__ = null;
var state_machine__18732__auto____0 = (function (){var statearr_41337 = (new Array(9));(statearr_41337[0] = state_machine__18732__auto__);
(statearr_41337[1] = 1);
return statearr_41337;
});
var state_machine__18732__auto____1 = (function (state_41320){while(true){
var ret_value__18733__auto__ = (function (){try{while(true){
var result__18734__auto__ = switch__18731__auto__.call(null,state_41320);if(cljs.core.keyword_identical_QMARK_.call(null,result__18734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18734__auto__;
}
break;
}
}catch (e41338){if((e41338 instanceof Object))
{var ex__18735__auto__ = e41338;var statearr_41339_41351 = state_41320;(statearr_41339_41351[5] = ex__18735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41320);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e41338;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__41352 = state_41320;
state_41320 = G__41352;
continue;
}
} else
{return ret_value__18733__auto__;
}
break;
}
});
state_machine__18732__auto__ = function(state_41320){
switch(arguments.length){
case 0:
return state_machine__18732__auto____0.call(this);
case 1:
return state_machine__18732__auto____1.call(this,state_41320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18732__auto____0;
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18732__auto____1;
return state_machine__18732__auto__;
})()
;})(switch__18731__auto__))
})();var state__18803__auto__ = (function (){var statearr_41340 = f__18802__auto__.call(null);(statearr_41340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18801__auto__);
return statearr_41340;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18803__auto__);
}));
return c__18801__auto__;
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
cljs.core.async.Mux = (function (){var obj41354 = {};return obj41354;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__13776__auto__ = _;if(and__13776__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__13776__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__14391__auto__ = (((_ == null))?null:_);return (function (){var or__13788__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj41356 = {};return obj41356;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__13776__auto__ = m;if(and__13776__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__13776__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__14391__auto__ = (((m == null))?null:m);return (function (){var or__13788__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__13776__auto__ = m;if(and__13776__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__13776__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__14391__auto__ = (((m == null))?null:m);return (function (){var or__13788__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__13776__auto__ = m;if(and__13776__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__13776__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__14391__auto__ = (((m == null))?null:m);return (function (){var or__13788__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t41580 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41580 = (function (cs,ch,mult,meta41581){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta41581 = meta41581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41580.cljs$lang$type = true;
cljs.core.async.t41580.cljs$lang$ctorStr = "cljs.core.async/t41580";
cljs.core.async.t41580.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__14332__auto__,writer__14333__auto__,opt__14334__auto__){return cljs.core._write.call(null,writer__14333__auto__,"cljs.core.async/t41580");
});})(cs))
;
cljs.core.async.t41580.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t41580.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t41580.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t41580.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t41580.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t41580.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t41580.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41582){var self__ = this;
var _41582__$1 = this;return self__.meta41581;
});})(cs))
;
cljs.core.async.t41580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41582,meta41581__$1){var self__ = this;
var _41582__$1 = this;return (new cljs.core.async.t41580(self__.cs,self__.ch,self__.mult,meta41581__$1));
});})(cs))
;
cljs.core.async.__GT_t41580 = ((function (cs){
return (function __GT_t41580(cs__$1,ch__$1,mult__$1,meta41581){return (new cljs.core.async.t41580(cs__$1,ch__$1,mult__$1,meta41581));
});})(cs))
;
}
return (new cljs.core.async.t41580(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__18801__auto___41803 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18802__auto__ = (function (){var switch__18731__auto__ = (function (state_41717){var state_val_41718 = (state_41717[1]);if((state_val_41718 === 32))
{var inst_41661 = (state_41717[7]);var inst_41585 = (state_41717[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41717,31,Object,null,30);var inst_41668 = cljs.core.async.put_BANG_.call(null,inst_41661,inst_41585,done);var state_41717__$1 = state_41717;var statearr_41719_41804 = state_41717__$1;(statearr_41719_41804[2] = inst_41668);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41717__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 1))
{var state_41717__$1 = state_41717;var statearr_41720_41805 = state_41717__$1;(statearr_41720_41805[2] = null);
(statearr_41720_41805[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 33))
{var inst_41674 = (state_41717[9]);var inst_41676 = cljs.core.chunked_seq_QMARK_.call(null,inst_41674);var state_41717__$1 = state_41717;if(inst_41676)
{var statearr_41721_41806 = state_41717__$1;(statearr_41721_41806[1] = 36);
} else
{var statearr_41722_41807 = state_41717__$1;(statearr_41722_41807[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 2))
{var state_41717__$1 = state_41717;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41717__$1,4,ch);
} else
{if((state_val_41718 === 34))
{var state_41717__$1 = state_41717;var statearr_41723_41808 = state_41717__$1;(statearr_41723_41808[2] = null);
(statearr_41723_41808[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 3))
{var inst_41715 = (state_41717[2]);var state_41717__$1 = state_41717;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41717__$1,inst_41715);
} else
{if((state_val_41718 === 35))
{var inst_41699 = (state_41717[2]);var state_41717__$1 = state_41717;var statearr_41724_41809 = state_41717__$1;(statearr_41724_41809[2] = inst_41699);
(statearr_41724_41809[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 4))
{var inst_41585 = (state_41717[8]);var inst_41585__$1 = (state_41717[2]);var inst_41586 = (inst_41585__$1 == null);var state_41717__$1 = (function (){var statearr_41725 = state_41717;(statearr_41725[8] = inst_41585__$1);
return statearr_41725;
})();if(cljs.core.truth_(inst_41586))
{var statearr_41726_41810 = state_41717__$1;(statearr_41726_41810[1] = 5);
} else
{var statearr_41727_41811 = state_41717__$1;(statearr_41727_41811[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 36))
{var inst_41674 = (state_41717[9]);var inst_41678 = cljs.core.chunk_first.call(null,inst_41674);var inst_41679 = cljs.core.chunk_rest.call(null,inst_41674);var inst_41680 = cljs.core.count.call(null,inst_41678);var inst_41653 = inst_41679;var inst_41654 = inst_41678;var inst_41655 = inst_41680;var inst_41656 = 0;var state_41717__$1 = (function (){var statearr_41728 = state_41717;(statearr_41728[10] = inst_41653);
(statearr_41728[11] = inst_41654);
(statearr_41728[12] = inst_41656);
(statearr_41728[13] = inst_41655);
return statearr_41728;
})();var statearr_41729_41812 = state_41717__$1;(statearr_41729_41812[2] = null);
(statearr_41729_41812[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 5))
{var inst_41592 = cljs.core.deref.call(null,cs);var inst_41593 = cljs.core.seq.call(null,inst_41592);var inst_41594 = inst_41593;var inst_41595 = null;var inst_41596 = 0;var inst_41597 = 0;var state_41717__$1 = (function (){var statearr_41730 = state_41717;(statearr_41730[14] = inst_41596);
(statearr_41730[15] = inst_41597);
(statearr_41730[16] = inst_41595);
(statearr_41730[17] = inst_41594);
return statearr_41730;
})();var statearr_41731_41813 = state_41717__$1;(statearr_41731_41813[2] = null);
(statearr_41731_41813[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 37))
{var inst_41674 = (state_41717[9]);var inst_41683 = cljs.core.first.call(null,inst_41674);var state_41717__$1 = (function (){var statearr_41732 = state_41717;(statearr_41732[18] = inst_41683);
return statearr_41732;
})();var statearr_41733_41814 = state_41717__$1;(statearr_41733_41814[2] = null);
(statearr_41733_41814[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 6))
{var inst_41645 = (state_41717[19]);var inst_41644 = cljs.core.deref.call(null,cs);var inst_41645__$1 = cljs.core.keys.call(null,inst_41644);var inst_41646 = cljs.core.count.call(null,inst_41645__$1);var inst_41647 = cljs.core.reset_BANG_.call(null,dctr,inst_41646);var inst_41652 = cljs.core.seq.call(null,inst_41645__$1);var inst_41653 = inst_41652;var inst_41654 = null;var inst_41655 = 0;var inst_41656 = 0;var state_41717__$1 = (function (){var statearr_41734 = state_41717;(statearr_41734[10] = inst_41653);
(statearr_41734[11] = inst_41654);
(statearr_41734[19] = inst_41645__$1);
(statearr_41734[20] = inst_41647);
(statearr_41734[12] = inst_41656);
(statearr_41734[13] = inst_41655);
return statearr_41734;
})();var statearr_41735_41815 = state_41717__$1;(statearr_41735_41815[2] = null);
(statearr_41735_41815[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 38))
{var inst_41696 = (state_41717[2]);var state_41717__$1 = state_41717;var statearr_41736_41816 = state_41717__$1;(statearr_41736_41816[2] = inst_41696);
(statearr_41736_41816[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 7))
{var inst_41713 = (state_41717[2]);var state_41717__$1 = state_41717;var statearr_41737_41817 = state_41717__$1;(statearr_41737_41817[2] = inst_41713);
(statearr_41737_41817[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 39))
{var inst_41674 = (state_41717[9]);var inst_41692 = (state_41717[2]);var inst_41693 = cljs.core.next.call(null,inst_41674);var inst_41653 = inst_41693;var inst_41654 = null;var inst_41655 = 0;var inst_41656 = 0;var state_41717__$1 = (function (){var statearr_41738 = state_41717;(statearr_41738[10] = inst_41653);
(statearr_41738[11] = inst_41654);
(statearr_41738[21] = inst_41692);
(statearr_41738[12] = inst_41656);
(statearr_41738[13] = inst_41655);
return statearr_41738;
})();var statearr_41739_41818 = state_41717__$1;(statearr_41739_41818[2] = null);
(statearr_41739_41818[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 8))
{var inst_41596 = (state_41717[14]);var inst_41597 = (state_41717[15]);var inst_41599 = (inst_41597 < inst_41596);var inst_41600 = inst_41599;var state_41717__$1 = state_41717;if(cljs.core.truth_(inst_41600))
{var statearr_41740_41819 = state_41717__$1;(statearr_41740_41819[1] = 10);
} else
{var statearr_41741_41820 = state_41717__$1;(statearr_41741_41820[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 40))
{var inst_41683 = (state_41717[18]);var inst_41684 = (state_41717[2]);var inst_41685 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_41686 = cljs.core.async.untap_STAR_.call(null,m,inst_41683);var state_41717__$1 = (function (){var statearr_41742 = state_41717;(statearr_41742[22] = inst_41684);
(statearr_41742[23] = inst_41685);
return statearr_41742;
})();var statearr_41743_41821 = state_41717__$1;(statearr_41743_41821[2] = inst_41686);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41717__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 9))
{var inst_41642 = (state_41717[2]);var state_41717__$1 = state_41717;var statearr_41744_41822 = state_41717__$1;(statearr_41744_41822[2] = inst_41642);
(statearr_41744_41822[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 41))
{var inst_41683 = (state_41717[18]);var inst_41585 = (state_41717[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41717,40,Object,null,39);var inst_41690 = cljs.core.async.put_BANG_.call(null,inst_41683,inst_41585,done);var state_41717__$1 = state_41717;var statearr_41745_41823 = state_41717__$1;(statearr_41745_41823[2] = inst_41690);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41717__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 10))
{var inst_41597 = (state_41717[15]);var inst_41595 = (state_41717[16]);var inst_41603 = cljs.core._nth.call(null,inst_41595,inst_41597);var inst_41604 = cljs.core.nth.call(null,inst_41603,0,null);var inst_41605 = cljs.core.nth.call(null,inst_41603,1,null);var state_41717__$1 = (function (){var statearr_41746 = state_41717;(statearr_41746[24] = inst_41604);
return statearr_41746;
})();if(cljs.core.truth_(inst_41605))
{var statearr_41747_41824 = state_41717__$1;(statearr_41747_41824[1] = 13);
} else
{var statearr_41748_41825 = state_41717__$1;(statearr_41748_41825[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 42))
{var state_41717__$1 = state_41717;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41717__$1,45,dchan);
} else
{if((state_val_41718 === 11))
{var inst_41614 = (state_41717[25]);var inst_41594 = (state_41717[17]);var inst_41614__$1 = cljs.core.seq.call(null,inst_41594);var state_41717__$1 = (function (){var statearr_41749 = state_41717;(statearr_41749[25] = inst_41614__$1);
return statearr_41749;
})();if(inst_41614__$1)
{var statearr_41750_41826 = state_41717__$1;(statearr_41750_41826[1] = 16);
} else
{var statearr_41751_41827 = state_41717__$1;(statearr_41751_41827[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 43))
{var state_41717__$1 = state_41717;var statearr_41752_41828 = state_41717__$1;(statearr_41752_41828[2] = null);
(statearr_41752_41828[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 12))
{var inst_41640 = (state_41717[2]);var state_41717__$1 = state_41717;var statearr_41753_41829 = state_41717__$1;(statearr_41753_41829[2] = inst_41640);
(statearr_41753_41829[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 44))
{var inst_41710 = (state_41717[2]);var state_41717__$1 = (function (){var statearr_41754 = state_41717;(statearr_41754[26] = inst_41710);
return statearr_41754;
})();var statearr_41755_41830 = state_41717__$1;(statearr_41755_41830[2] = null);
(statearr_41755_41830[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 13))
{var inst_41604 = (state_41717[24]);var inst_41607 = cljs.core.async.close_BANG_.call(null,inst_41604);var state_41717__$1 = state_41717;var statearr_41756_41831 = state_41717__$1;(statearr_41756_41831[2] = inst_41607);
(statearr_41756_41831[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 45))
{var inst_41707 = (state_41717[2]);var state_41717__$1 = state_41717;var statearr_41760_41832 = state_41717__$1;(statearr_41760_41832[2] = inst_41707);
(statearr_41760_41832[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 14))
{var state_41717__$1 = state_41717;var statearr_41761_41833 = state_41717__$1;(statearr_41761_41833[2] = null);
(statearr_41761_41833[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 15))
{var inst_41596 = (state_41717[14]);var inst_41597 = (state_41717[15]);var inst_41595 = (state_41717[16]);var inst_41594 = (state_41717[17]);var inst_41610 = (state_41717[2]);var inst_41611 = (inst_41597 + 1);var tmp41757 = inst_41596;var tmp41758 = inst_41595;var tmp41759 = inst_41594;var inst_41594__$1 = tmp41759;var inst_41595__$1 = tmp41758;var inst_41596__$1 = tmp41757;var inst_41597__$1 = inst_41611;var state_41717__$1 = (function (){var statearr_41762 = state_41717;(statearr_41762[27] = inst_41610);
(statearr_41762[14] = inst_41596__$1);
(statearr_41762[15] = inst_41597__$1);
(statearr_41762[16] = inst_41595__$1);
(statearr_41762[17] = inst_41594__$1);
return statearr_41762;
})();var statearr_41763_41834 = state_41717__$1;(statearr_41763_41834[2] = null);
(statearr_41763_41834[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 16))
{var inst_41614 = (state_41717[25]);var inst_41616 = cljs.core.chunked_seq_QMARK_.call(null,inst_41614);var state_41717__$1 = state_41717;if(inst_41616)
{var statearr_41764_41835 = state_41717__$1;(statearr_41764_41835[1] = 19);
} else
{var statearr_41765_41836 = state_41717__$1;(statearr_41765_41836[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 17))
{var state_41717__$1 = state_41717;var statearr_41766_41837 = state_41717__$1;(statearr_41766_41837[2] = null);
(statearr_41766_41837[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 18))
{var inst_41638 = (state_41717[2]);var state_41717__$1 = state_41717;var statearr_41767_41838 = state_41717__$1;(statearr_41767_41838[2] = inst_41638);
(statearr_41767_41838[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 19))
{var inst_41614 = (state_41717[25]);var inst_41618 = cljs.core.chunk_first.call(null,inst_41614);var inst_41619 = cljs.core.chunk_rest.call(null,inst_41614);var inst_41620 = cljs.core.count.call(null,inst_41618);var inst_41594 = inst_41619;var inst_41595 = inst_41618;var inst_41596 = inst_41620;var inst_41597 = 0;var state_41717__$1 = (function (){var statearr_41768 = state_41717;(statearr_41768[14] = inst_41596);
(statearr_41768[15] = inst_41597);
(statearr_41768[16] = inst_41595);
(statearr_41768[17] = inst_41594);
return statearr_41768;
})();var statearr_41769_41839 = state_41717__$1;(statearr_41769_41839[2] = null);
(statearr_41769_41839[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 20))
{var inst_41614 = (state_41717[25]);var inst_41624 = cljs.core.first.call(null,inst_41614);var inst_41625 = cljs.core.nth.call(null,inst_41624,0,null);var inst_41626 = cljs.core.nth.call(null,inst_41624,1,null);var state_41717__$1 = (function (){var statearr_41770 = state_41717;(statearr_41770[28] = inst_41625);
return statearr_41770;
})();if(cljs.core.truth_(inst_41626))
{var statearr_41771_41840 = state_41717__$1;(statearr_41771_41840[1] = 22);
} else
{var statearr_41772_41841 = state_41717__$1;(statearr_41772_41841[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 21))
{var inst_41635 = (state_41717[2]);var state_41717__$1 = state_41717;var statearr_41773_41842 = state_41717__$1;(statearr_41773_41842[2] = inst_41635);
(statearr_41773_41842[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 22))
{var inst_41625 = (state_41717[28]);var inst_41628 = cljs.core.async.close_BANG_.call(null,inst_41625);var state_41717__$1 = state_41717;var statearr_41774_41843 = state_41717__$1;(statearr_41774_41843[2] = inst_41628);
(statearr_41774_41843[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 23))
{var state_41717__$1 = state_41717;var statearr_41775_41844 = state_41717__$1;(statearr_41775_41844[2] = null);
(statearr_41775_41844[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 24))
{var inst_41614 = (state_41717[25]);var inst_41631 = (state_41717[2]);var inst_41632 = cljs.core.next.call(null,inst_41614);var inst_41594 = inst_41632;var inst_41595 = null;var inst_41596 = 0;var inst_41597 = 0;var state_41717__$1 = (function (){var statearr_41776 = state_41717;(statearr_41776[14] = inst_41596);
(statearr_41776[15] = inst_41597);
(statearr_41776[29] = inst_41631);
(statearr_41776[16] = inst_41595);
(statearr_41776[17] = inst_41594);
return statearr_41776;
})();var statearr_41777_41845 = state_41717__$1;(statearr_41777_41845[2] = null);
(statearr_41777_41845[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 25))
{var inst_41656 = (state_41717[12]);var inst_41655 = (state_41717[13]);var inst_41658 = (inst_41656 < inst_41655);var inst_41659 = inst_41658;var state_41717__$1 = state_41717;if(cljs.core.truth_(inst_41659))
{var statearr_41778_41846 = state_41717__$1;(statearr_41778_41846[1] = 27);
} else
{var statearr_41779_41847 = state_41717__$1;(statearr_41779_41847[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 26))
{var inst_41645 = (state_41717[19]);var inst_41703 = (state_41717[2]);var inst_41704 = cljs.core.seq.call(null,inst_41645);var state_41717__$1 = (function (){var statearr_41780 = state_41717;(statearr_41780[30] = inst_41703);
return statearr_41780;
})();if(inst_41704)
{var statearr_41781_41848 = state_41717__$1;(statearr_41781_41848[1] = 42);
} else
{var statearr_41782_41849 = state_41717__$1;(statearr_41782_41849[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 27))
{var inst_41654 = (state_41717[11]);var inst_41656 = (state_41717[12]);var inst_41661 = cljs.core._nth.call(null,inst_41654,inst_41656);var state_41717__$1 = (function (){var statearr_41783 = state_41717;(statearr_41783[7] = inst_41661);
return statearr_41783;
})();var statearr_41784_41850 = state_41717__$1;(statearr_41784_41850[2] = null);
(statearr_41784_41850[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 28))
{var inst_41653 = (state_41717[10]);var inst_41674 = (state_41717[9]);var inst_41674__$1 = cljs.core.seq.call(null,inst_41653);var state_41717__$1 = (function (){var statearr_41788 = state_41717;(statearr_41788[9] = inst_41674__$1);
return statearr_41788;
})();if(inst_41674__$1)
{var statearr_41789_41851 = state_41717__$1;(statearr_41789_41851[1] = 33);
} else
{var statearr_41790_41852 = state_41717__$1;(statearr_41790_41852[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 29))
{var inst_41701 = (state_41717[2]);var state_41717__$1 = state_41717;var statearr_41791_41853 = state_41717__$1;(statearr_41791_41853[2] = inst_41701);
(statearr_41791_41853[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 30))
{var inst_41653 = (state_41717[10]);var inst_41654 = (state_41717[11]);var inst_41656 = (state_41717[12]);var inst_41655 = (state_41717[13]);var inst_41670 = (state_41717[2]);var inst_41671 = (inst_41656 + 1);var tmp41785 = inst_41653;var tmp41786 = inst_41654;var tmp41787 = inst_41655;var inst_41653__$1 = tmp41785;var inst_41654__$1 = tmp41786;var inst_41655__$1 = tmp41787;var inst_41656__$1 = inst_41671;var state_41717__$1 = (function (){var statearr_41792 = state_41717;(statearr_41792[10] = inst_41653__$1);
(statearr_41792[11] = inst_41654__$1);
(statearr_41792[12] = inst_41656__$1);
(statearr_41792[13] = inst_41655__$1);
(statearr_41792[31] = inst_41670);
return statearr_41792;
})();var statearr_41793_41854 = state_41717__$1;(statearr_41793_41854[2] = null);
(statearr_41793_41854[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41718 === 31))
{var inst_41661 = (state_41717[7]);var inst_41662 = (state_41717[2]);var inst_41663 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_41664 = cljs.core.async.untap_STAR_.call(null,m,inst_41661);var state_41717__$1 = (function (){var statearr_41794 = state_41717;(statearr_41794[32] = inst_41662);
(statearr_41794[33] = inst_41663);
return statearr_41794;
})();var statearr_41795_41855 = state_41717__$1;(statearr_41795_41855[2] = inst_41664);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41717__$1);
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
});return ((function (switch__18731__auto__){
return (function() {
var state_machine__18732__auto__ = null;
var state_machine__18732__auto____0 = (function (){var statearr_41799 = (new Array(34));(statearr_41799[0] = state_machine__18732__auto__);
(statearr_41799[1] = 1);
return statearr_41799;
});
var state_machine__18732__auto____1 = (function (state_41717){while(true){
var ret_value__18733__auto__ = (function (){try{while(true){
var result__18734__auto__ = switch__18731__auto__.call(null,state_41717);if(cljs.core.keyword_identical_QMARK_.call(null,result__18734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18734__auto__;
}
break;
}
}catch (e41800){if((e41800 instanceof Object))
{var ex__18735__auto__ = e41800;var statearr_41801_41856 = state_41717;(statearr_41801_41856[5] = ex__18735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41717);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e41800;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__41857 = state_41717;
state_41717 = G__41857;
continue;
}
} else
{return ret_value__18733__auto__;
}
break;
}
});
state_machine__18732__auto__ = function(state_41717){
switch(arguments.length){
case 0:
return state_machine__18732__auto____0.call(this);
case 1:
return state_machine__18732__auto____1.call(this,state_41717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18732__auto____0;
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18732__auto____1;
return state_machine__18732__auto__;
})()
;})(switch__18731__auto__))
})();var state__18803__auto__ = (function (){var statearr_41802 = f__18802__auto__.call(null);(statearr_41802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18801__auto___41803);
return statearr_41802;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18803__auto__);
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
cljs.core.async.Mix = (function (){var obj41859 = {};return obj41859;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__13776__auto__ = m;if(and__13776__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__13776__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__14391__auto__ = (((m == null))?null:m);return (function (){var or__13788__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__13776__auto__ = m;if(and__13776__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__13776__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__14391__auto__ = (((m == null))?null:m);return (function (){var or__13788__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__13776__auto__ = m;if(and__13776__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__13776__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__14391__auto__ = (((m == null))?null:m);return (function (){var or__13788__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__13776__auto__ = m;if(and__13776__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__13776__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__14391__auto__ = (((m == null))?null:m);return (function (){var or__13788__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__13776__auto__ = m;if(and__13776__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__13776__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__14391__auto__ = (((m == null))?null:m);return (function (){var or__13788__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t41969 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41969 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta41970){
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
this.meta41970 = meta41970;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41969.cljs$lang$type = true;
cljs.core.async.t41969.cljs$lang$ctorStr = "cljs.core.async/t41969";
cljs.core.async.t41969.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__14332__auto__,writer__14333__auto__,opt__14334__auto__){return cljs.core._write.call(null,writer__14333__auto__,"cljs.core.async/t41969");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41969.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t41969.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41969.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41969.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41969.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41969.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41969.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t41969.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41969.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41971){var self__ = this;
var _41971__$1 = this;return self__.meta41970;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41971,meta41970__$1){var self__ = this;
var _41971__$1 = this;return (new cljs.core.async.t41969(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta41970__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t41969 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t41969(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta41970){return (new cljs.core.async.t41969(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta41970));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t41969(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__18801__auto___42078 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18802__auto__ = (function (){var switch__18731__auto__ = (function (state_42036){var state_val_42037 = (state_42036[1]);if((state_val_42037 === 1))
{var inst_41975 = (state_42036[7]);var inst_41975__$1 = calc_state.call(null);var inst_41976 = cljs.core.seq_QMARK_.call(null,inst_41975__$1);var state_42036__$1 = (function (){var statearr_42038 = state_42036;(statearr_42038[7] = inst_41975__$1);
return statearr_42038;
})();if(inst_41976)
{var statearr_42039_42079 = state_42036__$1;(statearr_42039_42079[1] = 2);
} else
{var statearr_42040_42080 = state_42036__$1;(statearr_42040_42080[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42037 === 2))
{var inst_41975 = (state_42036[7]);var inst_41978 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41975);var state_42036__$1 = state_42036;var statearr_42041_42081 = state_42036__$1;(statearr_42041_42081[2] = inst_41978);
(statearr_42041_42081[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42037 === 3))
{var inst_41975 = (state_42036[7]);var state_42036__$1 = state_42036;var statearr_42042_42082 = state_42036__$1;(statearr_42042_42082[2] = inst_41975);
(statearr_42042_42082[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42037 === 4))
{var inst_41975 = (state_42036[7]);var inst_41981 = (state_42036[2]);var inst_41982 = cljs.core.get.call(null,inst_41981,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_41983 = cljs.core.get.call(null,inst_41981,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_41984 = cljs.core.get.call(null,inst_41981,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_41985 = inst_41975;var state_42036__$1 = (function (){var statearr_42043 = state_42036;(statearr_42043[8] = inst_41985);
(statearr_42043[9] = inst_41982);
(statearr_42043[10] = inst_41983);
(statearr_42043[11] = inst_41984);
return statearr_42043;
})();var statearr_42044_42083 = state_42036__$1;(statearr_42044_42083[2] = null);
(statearr_42044_42083[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42037 === 5))
{var inst_41985 = (state_42036[8]);var inst_41988 = cljs.core.seq_QMARK_.call(null,inst_41985);var state_42036__$1 = state_42036;if(inst_41988)
{var statearr_42045_42084 = state_42036__$1;(statearr_42045_42084[1] = 7);
} else
{var statearr_42046_42085 = state_42036__$1;(statearr_42046_42085[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42037 === 6))
{var inst_42034 = (state_42036[2]);var state_42036__$1 = state_42036;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42036__$1,inst_42034);
} else
{if((state_val_42037 === 7))
{var inst_41985 = (state_42036[8]);var inst_41990 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41985);var state_42036__$1 = state_42036;var statearr_42047_42086 = state_42036__$1;(statearr_42047_42086[2] = inst_41990);
(statearr_42047_42086[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42037 === 8))
{var inst_41985 = (state_42036[8]);var state_42036__$1 = state_42036;var statearr_42048_42087 = state_42036__$1;(statearr_42048_42087[2] = inst_41985);
(statearr_42048_42087[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42037 === 9))
{var inst_41993 = (state_42036[12]);var inst_41993__$1 = (state_42036[2]);var inst_41994 = cljs.core.get.call(null,inst_41993__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_41995 = cljs.core.get.call(null,inst_41993__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_41996 = cljs.core.get.call(null,inst_41993__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_42036__$1 = (function (){var statearr_42049 = state_42036;(statearr_42049[13] = inst_41996);
(statearr_42049[12] = inst_41993__$1);
(statearr_42049[14] = inst_41995);
return statearr_42049;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_42036__$1,10,inst_41994);
} else
{if((state_val_42037 === 10))
{var inst_42001 = (state_42036[15]);var inst_42000 = (state_42036[16]);var inst_41999 = (state_42036[2]);var inst_42000__$1 = cljs.core.nth.call(null,inst_41999,0,null);var inst_42001__$1 = cljs.core.nth.call(null,inst_41999,1,null);var inst_42002 = (inst_42000__$1 == null);var inst_42003 = cljs.core._EQ_.call(null,inst_42001__$1,change);var inst_42004 = (inst_42002) || (inst_42003);var state_42036__$1 = (function (){var statearr_42050 = state_42036;(statearr_42050[15] = inst_42001__$1);
(statearr_42050[16] = inst_42000__$1);
return statearr_42050;
})();if(cljs.core.truth_(inst_42004))
{var statearr_42051_42088 = state_42036__$1;(statearr_42051_42088[1] = 11);
} else
{var statearr_42052_42089 = state_42036__$1;(statearr_42052_42089[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42037 === 11))
{var inst_42000 = (state_42036[16]);var inst_42006 = (inst_42000 == null);var state_42036__$1 = state_42036;if(cljs.core.truth_(inst_42006))
{var statearr_42053_42090 = state_42036__$1;(statearr_42053_42090[1] = 14);
} else
{var statearr_42054_42091 = state_42036__$1;(statearr_42054_42091[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42037 === 12))
{var inst_41996 = (state_42036[13]);var inst_42015 = (state_42036[17]);var inst_42001 = (state_42036[15]);var inst_42015__$1 = inst_41996.call(null,inst_42001);var state_42036__$1 = (function (){var statearr_42055 = state_42036;(statearr_42055[17] = inst_42015__$1);
return statearr_42055;
})();if(cljs.core.truth_(inst_42015__$1))
{var statearr_42056_42092 = state_42036__$1;(statearr_42056_42092[1] = 17);
} else
{var statearr_42057_42093 = state_42036__$1;(statearr_42057_42093[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42037 === 13))
{var inst_42032 = (state_42036[2]);var state_42036__$1 = state_42036;var statearr_42058_42094 = state_42036__$1;(statearr_42058_42094[2] = inst_42032);
(statearr_42058_42094[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42037 === 14))
{var inst_42001 = (state_42036[15]);var inst_42008 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42001);var state_42036__$1 = state_42036;var statearr_42059_42095 = state_42036__$1;(statearr_42059_42095[2] = inst_42008);
(statearr_42059_42095[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42037 === 15))
{var state_42036__$1 = state_42036;var statearr_42060_42096 = state_42036__$1;(statearr_42060_42096[2] = null);
(statearr_42060_42096[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42037 === 16))
{var inst_42011 = (state_42036[2]);var inst_42012 = calc_state.call(null);var inst_41985 = inst_42012;var state_42036__$1 = (function (){var statearr_42061 = state_42036;(statearr_42061[8] = inst_41985);
(statearr_42061[18] = inst_42011);
return statearr_42061;
})();var statearr_42062_42097 = state_42036__$1;(statearr_42062_42097[2] = null);
(statearr_42062_42097[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42037 === 17))
{var inst_42015 = (state_42036[17]);var state_42036__$1 = state_42036;var statearr_42063_42098 = state_42036__$1;(statearr_42063_42098[2] = inst_42015);
(statearr_42063_42098[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42037 === 18))
{var inst_41996 = (state_42036[13]);var inst_41995 = (state_42036[14]);var inst_42001 = (state_42036[15]);var inst_42018 = cljs.core.empty_QMARK_.call(null,inst_41996);var inst_42019 = inst_41995.call(null,inst_42001);var inst_42020 = cljs.core.not.call(null,inst_42019);var inst_42021 = (inst_42018) && (inst_42020);var state_42036__$1 = state_42036;var statearr_42064_42099 = state_42036__$1;(statearr_42064_42099[2] = inst_42021);
(statearr_42064_42099[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42037 === 19))
{var inst_42023 = (state_42036[2]);var state_42036__$1 = state_42036;if(cljs.core.truth_(inst_42023))
{var statearr_42065_42100 = state_42036__$1;(statearr_42065_42100[1] = 20);
} else
{var statearr_42066_42101 = state_42036__$1;(statearr_42066_42101[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42037 === 20))
{var inst_42000 = (state_42036[16]);var state_42036__$1 = state_42036;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42036__$1,23,out,inst_42000);
} else
{if((state_val_42037 === 21))
{var state_42036__$1 = state_42036;var statearr_42067_42102 = state_42036__$1;(statearr_42067_42102[2] = null);
(statearr_42067_42102[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42037 === 22))
{var inst_41993 = (state_42036[12]);var inst_42029 = (state_42036[2]);var inst_41985 = inst_41993;var state_42036__$1 = (function (){var statearr_42068 = state_42036;(statearr_42068[8] = inst_41985);
(statearr_42068[19] = inst_42029);
return statearr_42068;
})();var statearr_42069_42103 = state_42036__$1;(statearr_42069_42103[2] = null);
(statearr_42069_42103[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42037 === 23))
{var inst_42026 = (state_42036[2]);var state_42036__$1 = state_42036;var statearr_42070_42104 = state_42036__$1;(statearr_42070_42104[2] = inst_42026);
(statearr_42070_42104[1] = 22);
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
});return ((function (switch__18731__auto__){
return (function() {
var state_machine__18732__auto__ = null;
var state_machine__18732__auto____0 = (function (){var statearr_42074 = (new Array(20));(statearr_42074[0] = state_machine__18732__auto__);
(statearr_42074[1] = 1);
return statearr_42074;
});
var state_machine__18732__auto____1 = (function (state_42036){while(true){
var ret_value__18733__auto__ = (function (){try{while(true){
var result__18734__auto__ = switch__18731__auto__.call(null,state_42036);if(cljs.core.keyword_identical_QMARK_.call(null,result__18734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18734__auto__;
}
break;
}
}catch (e42075){if((e42075 instanceof Object))
{var ex__18735__auto__ = e42075;var statearr_42076_42105 = state_42036;(statearr_42076_42105[5] = ex__18735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42036);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42075;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42106 = state_42036;
state_42036 = G__42106;
continue;
}
} else
{return ret_value__18733__auto__;
}
break;
}
});
state_machine__18732__auto__ = function(state_42036){
switch(arguments.length){
case 0:
return state_machine__18732__auto____0.call(this);
case 1:
return state_machine__18732__auto____1.call(this,state_42036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18732__auto____0;
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18732__auto____1;
return state_machine__18732__auto__;
})()
;})(switch__18731__auto__))
})();var state__18803__auto__ = (function (){var statearr_42077 = f__18802__auto__.call(null);(statearr_42077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18801__auto___42078);
return statearr_42077;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18803__auto__);
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
cljs.core.async.Pub = (function (){var obj42108 = {};return obj42108;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__13776__auto__ = p;if(and__13776__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__13776__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__14391__auto__ = (((p == null))?null:p);return (function (){var or__13788__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__13776__auto__ = p;if(and__13776__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__13776__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__14391__auto__ = (((p == null))?null:p);return (function (){var or__13788__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__13776__auto__ = p;if(and__13776__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__13776__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__14391__auto__ = (((p == null))?null:p);return (function (){var or__13788__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__13776__auto__ = p;if(and__13776__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__13776__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__14391__auto__ = (((p == null))?null:p);return (function (){var or__13788__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
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
return (function (topic){var or__13788__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__13788__auto__,mults){
return (function (p1__42109_SHARP_){if(cljs.core.truth_(p1__42109_SHARP_.call(null,topic)))
{return p1__42109_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__42109_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13788__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t42234 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42234 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta42235){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta42235 = meta42235;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42234.cljs$lang$type = true;
cljs.core.async.t42234.cljs$lang$ctorStr = "cljs.core.async/t42234";
cljs.core.async.t42234.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__14332__auto__,writer__14333__auto__,opt__14334__auto__){return cljs.core._write.call(null,writer__14333__auto__,"cljs.core.async/t42234");
});})(mults,ensure_mult))
;
cljs.core.async.t42234.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t42234.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t42234.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t42234.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t42234.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t42234.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t42234.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t42234.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42236){var self__ = this;
var _42236__$1 = this;return self__.meta42235;
});})(mults,ensure_mult))
;
cljs.core.async.t42234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42236,meta42235__$1){var self__ = this;
var _42236__$1 = this;return (new cljs.core.async.t42234(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta42235__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t42234 = ((function (mults,ensure_mult){
return (function __GT_t42234(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42235){return (new cljs.core.async.t42234(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42235));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t42234(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__18801__auto___42358 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18802__auto__ = (function (){var switch__18731__auto__ = (function (state_42310){var state_val_42311 = (state_42310[1]);if((state_val_42311 === 1))
{var state_42310__$1 = state_42310;var statearr_42312_42359 = state_42310__$1;(statearr_42312_42359[2] = null);
(statearr_42312_42359[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42311 === 2))
{var state_42310__$1 = state_42310;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42310__$1,4,ch);
} else
{if((state_val_42311 === 3))
{var inst_42308 = (state_42310[2]);var state_42310__$1 = state_42310;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42310__$1,inst_42308);
} else
{if((state_val_42311 === 4))
{var inst_42239 = (state_42310[7]);var inst_42239__$1 = (state_42310[2]);var inst_42240 = (inst_42239__$1 == null);var state_42310__$1 = (function (){var statearr_42313 = state_42310;(statearr_42313[7] = inst_42239__$1);
return statearr_42313;
})();if(cljs.core.truth_(inst_42240))
{var statearr_42314_42360 = state_42310__$1;(statearr_42314_42360[1] = 5);
} else
{var statearr_42315_42361 = state_42310__$1;(statearr_42315_42361[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42311 === 5))
{var inst_42246 = cljs.core.deref.call(null,mults);var inst_42247 = cljs.core.vals.call(null,inst_42246);var inst_42248 = cljs.core.seq.call(null,inst_42247);var inst_42249 = inst_42248;var inst_42250 = null;var inst_42251 = 0;var inst_42252 = 0;var state_42310__$1 = (function (){var statearr_42316 = state_42310;(statearr_42316[8] = inst_42249);
(statearr_42316[9] = inst_42252);
(statearr_42316[10] = inst_42250);
(statearr_42316[11] = inst_42251);
return statearr_42316;
})();var statearr_42317_42362 = state_42310__$1;(statearr_42317_42362[2] = null);
(statearr_42317_42362[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42311 === 6))
{var inst_42239 = (state_42310[7]);var inst_42289 = (state_42310[12]);var inst_42287 = (state_42310[13]);var inst_42287__$1 = topic_fn.call(null,inst_42239);var inst_42288 = cljs.core.deref.call(null,mults);var inst_42289__$1 = cljs.core.get.call(null,inst_42288,inst_42287__$1);var state_42310__$1 = (function (){var statearr_42318 = state_42310;(statearr_42318[12] = inst_42289__$1);
(statearr_42318[13] = inst_42287__$1);
return statearr_42318;
})();if(cljs.core.truth_(inst_42289__$1))
{var statearr_42319_42363 = state_42310__$1;(statearr_42319_42363[1] = 19);
} else
{var statearr_42320_42364 = state_42310__$1;(statearr_42320_42364[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42311 === 7))
{var inst_42306 = (state_42310[2]);var state_42310__$1 = state_42310;var statearr_42321_42365 = state_42310__$1;(statearr_42321_42365[2] = inst_42306);
(statearr_42321_42365[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42311 === 8))
{var inst_42252 = (state_42310[9]);var inst_42251 = (state_42310[11]);var inst_42254 = (inst_42252 < inst_42251);var inst_42255 = inst_42254;var state_42310__$1 = state_42310;if(cljs.core.truth_(inst_42255))
{var statearr_42325_42366 = state_42310__$1;(statearr_42325_42366[1] = 10);
} else
{var statearr_42326_42367 = state_42310__$1;(statearr_42326_42367[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42311 === 9))
{var inst_42285 = (state_42310[2]);var state_42310__$1 = state_42310;var statearr_42327_42368 = state_42310__$1;(statearr_42327_42368[2] = inst_42285);
(statearr_42327_42368[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42311 === 10))
{var inst_42249 = (state_42310[8]);var inst_42252 = (state_42310[9]);var inst_42250 = (state_42310[10]);var inst_42251 = (state_42310[11]);var inst_42257 = cljs.core._nth.call(null,inst_42250,inst_42252);var inst_42258 = cljs.core.async.muxch_STAR_.call(null,inst_42257);var inst_42259 = cljs.core.async.close_BANG_.call(null,inst_42258);var inst_42260 = (inst_42252 + 1);var tmp42322 = inst_42249;var tmp42323 = inst_42250;var tmp42324 = inst_42251;var inst_42249__$1 = tmp42322;var inst_42250__$1 = tmp42323;var inst_42251__$1 = tmp42324;var inst_42252__$1 = inst_42260;var state_42310__$1 = (function (){var statearr_42328 = state_42310;(statearr_42328[8] = inst_42249__$1);
(statearr_42328[14] = inst_42259);
(statearr_42328[9] = inst_42252__$1);
(statearr_42328[10] = inst_42250__$1);
(statearr_42328[11] = inst_42251__$1);
return statearr_42328;
})();var statearr_42329_42369 = state_42310__$1;(statearr_42329_42369[2] = null);
(statearr_42329_42369[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42311 === 11))
{var inst_42249 = (state_42310[8]);var inst_42263 = (state_42310[15]);var inst_42263__$1 = cljs.core.seq.call(null,inst_42249);var state_42310__$1 = (function (){var statearr_42330 = state_42310;(statearr_42330[15] = inst_42263__$1);
return statearr_42330;
})();if(inst_42263__$1)
{var statearr_42331_42370 = state_42310__$1;(statearr_42331_42370[1] = 13);
} else
{var statearr_42332_42371 = state_42310__$1;(statearr_42332_42371[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42311 === 12))
{var inst_42283 = (state_42310[2]);var state_42310__$1 = state_42310;var statearr_42333_42372 = state_42310__$1;(statearr_42333_42372[2] = inst_42283);
(statearr_42333_42372[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42311 === 13))
{var inst_42263 = (state_42310[15]);var inst_42265 = cljs.core.chunked_seq_QMARK_.call(null,inst_42263);var state_42310__$1 = state_42310;if(inst_42265)
{var statearr_42334_42373 = state_42310__$1;(statearr_42334_42373[1] = 16);
} else
{var statearr_42335_42374 = state_42310__$1;(statearr_42335_42374[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42311 === 14))
{var state_42310__$1 = state_42310;var statearr_42336_42375 = state_42310__$1;(statearr_42336_42375[2] = null);
(statearr_42336_42375[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42311 === 15))
{var inst_42281 = (state_42310[2]);var state_42310__$1 = state_42310;var statearr_42337_42376 = state_42310__$1;(statearr_42337_42376[2] = inst_42281);
(statearr_42337_42376[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42311 === 16))
{var inst_42263 = (state_42310[15]);var inst_42267 = cljs.core.chunk_first.call(null,inst_42263);var inst_42268 = cljs.core.chunk_rest.call(null,inst_42263);var inst_42269 = cljs.core.count.call(null,inst_42267);var inst_42249 = inst_42268;var inst_42250 = inst_42267;var inst_42251 = inst_42269;var inst_42252 = 0;var state_42310__$1 = (function (){var statearr_42338 = state_42310;(statearr_42338[8] = inst_42249);
(statearr_42338[9] = inst_42252);
(statearr_42338[10] = inst_42250);
(statearr_42338[11] = inst_42251);
return statearr_42338;
})();var statearr_42339_42377 = state_42310__$1;(statearr_42339_42377[2] = null);
(statearr_42339_42377[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42311 === 17))
{var inst_42263 = (state_42310[15]);var inst_42272 = cljs.core.first.call(null,inst_42263);var inst_42273 = cljs.core.async.muxch_STAR_.call(null,inst_42272);var inst_42274 = cljs.core.async.close_BANG_.call(null,inst_42273);var inst_42275 = cljs.core.next.call(null,inst_42263);var inst_42249 = inst_42275;var inst_42250 = null;var inst_42251 = 0;var inst_42252 = 0;var state_42310__$1 = (function (){var statearr_42340 = state_42310;(statearr_42340[16] = inst_42274);
(statearr_42340[8] = inst_42249);
(statearr_42340[9] = inst_42252);
(statearr_42340[10] = inst_42250);
(statearr_42340[11] = inst_42251);
return statearr_42340;
})();var statearr_42341_42378 = state_42310__$1;(statearr_42341_42378[2] = null);
(statearr_42341_42378[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42311 === 18))
{var inst_42278 = (state_42310[2]);var state_42310__$1 = state_42310;var statearr_42342_42379 = state_42310__$1;(statearr_42342_42379[2] = inst_42278);
(statearr_42342_42379[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42311 === 19))
{var state_42310__$1 = state_42310;var statearr_42343_42380 = state_42310__$1;(statearr_42343_42380[2] = null);
(statearr_42343_42380[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42311 === 20))
{var state_42310__$1 = state_42310;var statearr_42344_42381 = state_42310__$1;(statearr_42344_42381[2] = null);
(statearr_42344_42381[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42311 === 21))
{var inst_42303 = (state_42310[2]);var state_42310__$1 = (function (){var statearr_42345 = state_42310;(statearr_42345[17] = inst_42303);
return statearr_42345;
})();var statearr_42346_42382 = state_42310__$1;(statearr_42346_42382[2] = null);
(statearr_42346_42382[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42311 === 22))
{var inst_42300 = (state_42310[2]);var state_42310__$1 = state_42310;var statearr_42347_42383 = state_42310__$1;(statearr_42347_42383[2] = inst_42300);
(statearr_42347_42383[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42311 === 23))
{var inst_42287 = (state_42310[13]);var inst_42291 = (state_42310[2]);var inst_42292 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42287);var state_42310__$1 = (function (){var statearr_42348 = state_42310;(statearr_42348[18] = inst_42291);
return statearr_42348;
})();var statearr_42349_42384 = state_42310__$1;(statearr_42349_42384[2] = inst_42292);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42310__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42311 === 24))
{var inst_42239 = (state_42310[7]);var inst_42289 = (state_42310[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42310,23,Object,null,22);var inst_42296 = cljs.core.async.muxch_STAR_.call(null,inst_42289);var state_42310__$1 = state_42310;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42310__$1,25,inst_42296,inst_42239);
} else
{if((state_val_42311 === 25))
{var inst_42298 = (state_42310[2]);var state_42310__$1 = state_42310;var statearr_42350_42385 = state_42310__$1;(statearr_42350_42385[2] = inst_42298);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42310__$1);
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
});return ((function (switch__18731__auto__){
return (function() {
var state_machine__18732__auto__ = null;
var state_machine__18732__auto____0 = (function (){var statearr_42354 = (new Array(19));(statearr_42354[0] = state_machine__18732__auto__);
(statearr_42354[1] = 1);
return statearr_42354;
});
var state_machine__18732__auto____1 = (function (state_42310){while(true){
var ret_value__18733__auto__ = (function (){try{while(true){
var result__18734__auto__ = switch__18731__auto__.call(null,state_42310);if(cljs.core.keyword_identical_QMARK_.call(null,result__18734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18734__auto__;
}
break;
}
}catch (e42355){if((e42355 instanceof Object))
{var ex__18735__auto__ = e42355;var statearr_42356_42386 = state_42310;(statearr_42356_42386[5] = ex__18735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42310);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42355;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42387 = state_42310;
state_42310 = G__42387;
continue;
}
} else
{return ret_value__18733__auto__;
}
break;
}
});
state_machine__18732__auto__ = function(state_42310){
switch(arguments.length){
case 0:
return state_machine__18732__auto____0.call(this);
case 1:
return state_machine__18732__auto____1.call(this,state_42310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18732__auto____0;
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18732__auto____1;
return state_machine__18732__auto__;
})()
;})(switch__18731__auto__))
})();var state__18803__auto__ = (function (){var statearr_42357 = f__18802__auto__.call(null);(statearr_42357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18801__auto___42358);
return statearr_42357;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18803__auto__);
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
,cljs.core.range.call(null,cnt));var c__18801__auto___42524 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18802__auto__ = (function (){var switch__18731__auto__ = (function (state_42494){var state_val_42495 = (state_42494[1]);if((state_val_42495 === 1))
{var state_42494__$1 = state_42494;var statearr_42496_42525 = state_42494__$1;(statearr_42496_42525[2] = null);
(statearr_42496_42525[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42495 === 2))
{var inst_42457 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_42458 = 0;var state_42494__$1 = (function (){var statearr_42497 = state_42494;(statearr_42497[7] = inst_42457);
(statearr_42497[8] = inst_42458);
return statearr_42497;
})();var statearr_42498_42526 = state_42494__$1;(statearr_42498_42526[2] = null);
(statearr_42498_42526[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42495 === 3))
{var inst_42492 = (state_42494[2]);var state_42494__$1 = state_42494;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42494__$1,inst_42492);
} else
{if((state_val_42495 === 4))
{var inst_42458 = (state_42494[8]);var inst_42460 = (inst_42458 < cnt);var state_42494__$1 = state_42494;if(cljs.core.truth_(inst_42460))
{var statearr_42499_42527 = state_42494__$1;(statearr_42499_42527[1] = 6);
} else
{var statearr_42500_42528 = state_42494__$1;(statearr_42500_42528[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42495 === 5))
{var inst_42478 = (state_42494[2]);var state_42494__$1 = (function (){var statearr_42501 = state_42494;(statearr_42501[9] = inst_42478);
return statearr_42501;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42494__$1,12,dchan);
} else
{if((state_val_42495 === 6))
{var state_42494__$1 = state_42494;var statearr_42502_42529 = state_42494__$1;(statearr_42502_42529[2] = null);
(statearr_42502_42529[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42495 === 7))
{var state_42494__$1 = state_42494;var statearr_42503_42530 = state_42494__$1;(statearr_42503_42530[2] = null);
(statearr_42503_42530[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42495 === 8))
{var inst_42476 = (state_42494[2]);var state_42494__$1 = state_42494;var statearr_42504_42531 = state_42494__$1;(statearr_42504_42531[2] = inst_42476);
(statearr_42504_42531[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42495 === 9))
{var inst_42458 = (state_42494[8]);var inst_42471 = (state_42494[2]);var inst_42472 = (inst_42458 + 1);var inst_42458__$1 = inst_42472;var state_42494__$1 = (function (){var statearr_42505 = state_42494;(statearr_42505[10] = inst_42471);
(statearr_42505[8] = inst_42458__$1);
return statearr_42505;
})();var statearr_42506_42532 = state_42494__$1;(statearr_42506_42532[2] = null);
(statearr_42506_42532[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42495 === 10))
{var inst_42462 = (state_42494[2]);var inst_42463 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_42494__$1 = (function (){var statearr_42507 = state_42494;(statearr_42507[11] = inst_42462);
return statearr_42507;
})();var statearr_42508_42533 = state_42494__$1;(statearr_42508_42533[2] = inst_42463);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42494__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42495 === 11))
{var inst_42458 = (state_42494[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42494,10,Object,null,9);var inst_42467 = chs__$1.call(null,inst_42458);var inst_42468 = done.call(null,inst_42458);var inst_42469 = cljs.core.async.take_BANG_.call(null,inst_42467,inst_42468);var state_42494__$1 = state_42494;var statearr_42509_42534 = state_42494__$1;(statearr_42509_42534[2] = inst_42469);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42494__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42495 === 12))
{var inst_42480 = (state_42494[12]);var inst_42480__$1 = (state_42494[2]);var inst_42481 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42480__$1);var state_42494__$1 = (function (){var statearr_42510 = state_42494;(statearr_42510[12] = inst_42480__$1);
return statearr_42510;
})();if(cljs.core.truth_(inst_42481))
{var statearr_42511_42535 = state_42494__$1;(statearr_42511_42535[1] = 13);
} else
{var statearr_42512_42536 = state_42494__$1;(statearr_42512_42536[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42495 === 13))
{var inst_42483 = cljs.core.async.close_BANG_.call(null,out);var state_42494__$1 = state_42494;var statearr_42513_42537 = state_42494__$1;(statearr_42513_42537[2] = inst_42483);
(statearr_42513_42537[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42495 === 14))
{var inst_42480 = (state_42494[12]);var inst_42485 = cljs.core.apply.call(null,f,inst_42480);var state_42494__$1 = state_42494;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42494__$1,16,out,inst_42485);
} else
{if((state_val_42495 === 15))
{var inst_42490 = (state_42494[2]);var state_42494__$1 = state_42494;var statearr_42514_42538 = state_42494__$1;(statearr_42514_42538[2] = inst_42490);
(statearr_42514_42538[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42495 === 16))
{var inst_42487 = (state_42494[2]);var state_42494__$1 = (function (){var statearr_42515 = state_42494;(statearr_42515[13] = inst_42487);
return statearr_42515;
})();var statearr_42516_42539 = state_42494__$1;(statearr_42516_42539[2] = null);
(statearr_42516_42539[1] = 2);
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
});return ((function (switch__18731__auto__){
return (function() {
var state_machine__18732__auto__ = null;
var state_machine__18732__auto____0 = (function (){var statearr_42520 = (new Array(14));(statearr_42520[0] = state_machine__18732__auto__);
(statearr_42520[1] = 1);
return statearr_42520;
});
var state_machine__18732__auto____1 = (function (state_42494){while(true){
var ret_value__18733__auto__ = (function (){try{while(true){
var result__18734__auto__ = switch__18731__auto__.call(null,state_42494);if(cljs.core.keyword_identical_QMARK_.call(null,result__18734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18734__auto__;
}
break;
}
}catch (e42521){if((e42521 instanceof Object))
{var ex__18735__auto__ = e42521;var statearr_42522_42540 = state_42494;(statearr_42522_42540[5] = ex__18735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42494);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42521;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42541 = state_42494;
state_42494 = G__42541;
continue;
}
} else
{return ret_value__18733__auto__;
}
break;
}
});
state_machine__18732__auto__ = function(state_42494){
switch(arguments.length){
case 0:
return state_machine__18732__auto____0.call(this);
case 1:
return state_machine__18732__auto____1.call(this,state_42494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18732__auto____0;
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18732__auto____1;
return state_machine__18732__auto__;
})()
;})(switch__18731__auto__))
})();var state__18803__auto__ = (function (){var statearr_42523 = f__18802__auto__.call(null);(statearr_42523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18801__auto___42524);
return statearr_42523;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18803__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18801__auto___42649 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18802__auto__ = (function (){var switch__18731__auto__ = (function (state_42625){var state_val_42626 = (state_42625[1]);if((state_val_42626 === 1))
{var inst_42596 = cljs.core.vec.call(null,chs);var inst_42597 = inst_42596;var state_42625__$1 = (function (){var statearr_42627 = state_42625;(statearr_42627[7] = inst_42597);
return statearr_42627;
})();var statearr_42628_42650 = state_42625__$1;(statearr_42628_42650[2] = null);
(statearr_42628_42650[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42626 === 2))
{var inst_42597 = (state_42625[7]);var inst_42599 = cljs.core.count.call(null,inst_42597);var inst_42600 = (inst_42599 > 0);var state_42625__$1 = state_42625;if(cljs.core.truth_(inst_42600))
{var statearr_42629_42651 = state_42625__$1;(statearr_42629_42651[1] = 4);
} else
{var statearr_42630_42652 = state_42625__$1;(statearr_42630_42652[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42626 === 3))
{var inst_42623 = (state_42625[2]);var state_42625__$1 = state_42625;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42625__$1,inst_42623);
} else
{if((state_val_42626 === 4))
{var inst_42597 = (state_42625[7]);var state_42625__$1 = state_42625;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_42625__$1,7,inst_42597);
} else
{if((state_val_42626 === 5))
{var inst_42619 = cljs.core.async.close_BANG_.call(null,out);var state_42625__$1 = state_42625;var statearr_42631_42653 = state_42625__$1;(statearr_42631_42653[2] = inst_42619);
(statearr_42631_42653[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42626 === 6))
{var inst_42621 = (state_42625[2]);var state_42625__$1 = state_42625;var statearr_42632_42654 = state_42625__$1;(statearr_42632_42654[2] = inst_42621);
(statearr_42632_42654[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42626 === 7))
{var inst_42604 = (state_42625[8]);var inst_42605 = (state_42625[9]);var inst_42604__$1 = (state_42625[2]);var inst_42605__$1 = cljs.core.nth.call(null,inst_42604__$1,0,null);var inst_42606 = cljs.core.nth.call(null,inst_42604__$1,1,null);var inst_42607 = (inst_42605__$1 == null);var state_42625__$1 = (function (){var statearr_42633 = state_42625;(statearr_42633[8] = inst_42604__$1);
(statearr_42633[9] = inst_42605__$1);
(statearr_42633[10] = inst_42606);
return statearr_42633;
})();if(cljs.core.truth_(inst_42607))
{var statearr_42634_42655 = state_42625__$1;(statearr_42634_42655[1] = 8);
} else
{var statearr_42635_42656 = state_42625__$1;(statearr_42635_42656[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42626 === 8))
{var inst_42604 = (state_42625[8]);var inst_42605 = (state_42625[9]);var inst_42606 = (state_42625[10]);var inst_42597 = (state_42625[7]);var inst_42609 = (function (){var c = inst_42606;var v = inst_42605;var vec__42602 = inst_42604;var cs = inst_42597;return ((function (c,v,vec__42602,cs,inst_42604,inst_42605,inst_42606,inst_42597,state_val_42626){
return (function (p1__42542_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__42542_SHARP_);
});
;})(c,v,vec__42602,cs,inst_42604,inst_42605,inst_42606,inst_42597,state_val_42626))
})();var inst_42610 = cljs.core.filterv.call(null,inst_42609,inst_42597);var inst_42597__$1 = inst_42610;var state_42625__$1 = (function (){var statearr_42636 = state_42625;(statearr_42636[7] = inst_42597__$1);
return statearr_42636;
})();var statearr_42637_42657 = state_42625__$1;(statearr_42637_42657[2] = null);
(statearr_42637_42657[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42626 === 9))
{var inst_42605 = (state_42625[9]);var state_42625__$1 = state_42625;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42625__$1,11,out,inst_42605);
} else
{if((state_val_42626 === 10))
{var inst_42617 = (state_42625[2]);var state_42625__$1 = state_42625;var statearr_42639_42658 = state_42625__$1;(statearr_42639_42658[2] = inst_42617);
(statearr_42639_42658[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42626 === 11))
{var inst_42597 = (state_42625[7]);var inst_42614 = (state_42625[2]);var tmp42638 = inst_42597;var inst_42597__$1 = tmp42638;var state_42625__$1 = (function (){var statearr_42640 = state_42625;(statearr_42640[11] = inst_42614);
(statearr_42640[7] = inst_42597__$1);
return statearr_42640;
})();var statearr_42641_42659 = state_42625__$1;(statearr_42641_42659[2] = null);
(statearr_42641_42659[1] = 2);
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
});return ((function (switch__18731__auto__){
return (function() {
var state_machine__18732__auto__ = null;
var state_machine__18732__auto____0 = (function (){var statearr_42645 = (new Array(12));(statearr_42645[0] = state_machine__18732__auto__);
(statearr_42645[1] = 1);
return statearr_42645;
});
var state_machine__18732__auto____1 = (function (state_42625){while(true){
var ret_value__18733__auto__ = (function (){try{while(true){
var result__18734__auto__ = switch__18731__auto__.call(null,state_42625);if(cljs.core.keyword_identical_QMARK_.call(null,result__18734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18734__auto__;
}
break;
}
}catch (e42646){if((e42646 instanceof Object))
{var ex__18735__auto__ = e42646;var statearr_42647_42660 = state_42625;(statearr_42647_42660[5] = ex__18735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42625);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42646;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42661 = state_42625;
state_42625 = G__42661;
continue;
}
} else
{return ret_value__18733__auto__;
}
break;
}
});
state_machine__18732__auto__ = function(state_42625){
switch(arguments.length){
case 0:
return state_machine__18732__auto____0.call(this);
case 1:
return state_machine__18732__auto____1.call(this,state_42625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18732__auto____0;
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18732__auto____1;
return state_machine__18732__auto__;
})()
;})(switch__18731__auto__))
})();var state__18803__auto__ = (function (){var statearr_42648 = f__18802__auto__.call(null);(statearr_42648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18801__auto___42649);
return statearr_42648;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18803__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18801__auto___42754 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18802__auto__ = (function (){var switch__18731__auto__ = (function (state_42731){var state_val_42732 = (state_42731[1]);if((state_val_42732 === 1))
{var inst_42708 = 0;var state_42731__$1 = (function (){var statearr_42733 = state_42731;(statearr_42733[7] = inst_42708);
return statearr_42733;
})();var statearr_42734_42755 = state_42731__$1;(statearr_42734_42755[2] = null);
(statearr_42734_42755[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42732 === 2))
{var inst_42708 = (state_42731[7]);var inst_42710 = (inst_42708 < n);var state_42731__$1 = state_42731;if(cljs.core.truth_(inst_42710))
{var statearr_42735_42756 = state_42731__$1;(statearr_42735_42756[1] = 4);
} else
{var statearr_42736_42757 = state_42731__$1;(statearr_42736_42757[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42732 === 3))
{var inst_42728 = (state_42731[2]);var inst_42729 = cljs.core.async.close_BANG_.call(null,out);var state_42731__$1 = (function (){var statearr_42737 = state_42731;(statearr_42737[8] = inst_42728);
return statearr_42737;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42731__$1,inst_42729);
} else
{if((state_val_42732 === 4))
{var state_42731__$1 = state_42731;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42731__$1,7,ch);
} else
{if((state_val_42732 === 5))
{var state_42731__$1 = state_42731;var statearr_42738_42758 = state_42731__$1;(statearr_42738_42758[2] = null);
(statearr_42738_42758[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42732 === 6))
{var inst_42726 = (state_42731[2]);var state_42731__$1 = state_42731;var statearr_42739_42759 = state_42731__$1;(statearr_42739_42759[2] = inst_42726);
(statearr_42739_42759[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42732 === 7))
{var inst_42713 = (state_42731[9]);var inst_42713__$1 = (state_42731[2]);var inst_42714 = (inst_42713__$1 == null);var inst_42715 = cljs.core.not.call(null,inst_42714);var state_42731__$1 = (function (){var statearr_42740 = state_42731;(statearr_42740[9] = inst_42713__$1);
return statearr_42740;
})();if(inst_42715)
{var statearr_42741_42760 = state_42731__$1;(statearr_42741_42760[1] = 8);
} else
{var statearr_42742_42761 = state_42731__$1;(statearr_42742_42761[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42732 === 8))
{var inst_42713 = (state_42731[9]);var state_42731__$1 = state_42731;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42731__$1,11,out,inst_42713);
} else
{if((state_val_42732 === 9))
{var state_42731__$1 = state_42731;var statearr_42743_42762 = state_42731__$1;(statearr_42743_42762[2] = null);
(statearr_42743_42762[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42732 === 10))
{var inst_42723 = (state_42731[2]);var state_42731__$1 = state_42731;var statearr_42744_42763 = state_42731__$1;(statearr_42744_42763[2] = inst_42723);
(statearr_42744_42763[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42732 === 11))
{var inst_42708 = (state_42731[7]);var inst_42718 = (state_42731[2]);var inst_42719 = (inst_42708 + 1);var inst_42708__$1 = inst_42719;var state_42731__$1 = (function (){var statearr_42745 = state_42731;(statearr_42745[10] = inst_42718);
(statearr_42745[7] = inst_42708__$1);
return statearr_42745;
})();var statearr_42746_42764 = state_42731__$1;(statearr_42746_42764[2] = null);
(statearr_42746_42764[1] = 2);
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
});return ((function (switch__18731__auto__){
return (function() {
var state_machine__18732__auto__ = null;
var state_machine__18732__auto____0 = (function (){var statearr_42750 = (new Array(11));(statearr_42750[0] = state_machine__18732__auto__);
(statearr_42750[1] = 1);
return statearr_42750;
});
var state_machine__18732__auto____1 = (function (state_42731){while(true){
var ret_value__18733__auto__ = (function (){try{while(true){
var result__18734__auto__ = switch__18731__auto__.call(null,state_42731);if(cljs.core.keyword_identical_QMARK_.call(null,result__18734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18734__auto__;
}
break;
}
}catch (e42751){if((e42751 instanceof Object))
{var ex__18735__auto__ = e42751;var statearr_42752_42765 = state_42731;(statearr_42752_42765[5] = ex__18735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42731);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42751;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42766 = state_42731;
state_42731 = G__42766;
continue;
}
} else
{return ret_value__18733__auto__;
}
break;
}
});
state_machine__18732__auto__ = function(state_42731){
switch(arguments.length){
case 0:
return state_machine__18732__auto____0.call(this);
case 1:
return state_machine__18732__auto____1.call(this,state_42731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18732__auto____0;
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18732__auto____1;
return state_machine__18732__auto__;
})()
;})(switch__18731__auto__))
})();var state__18803__auto__ = (function (){var statearr_42753 = f__18802__auto__.call(null);(statearr_42753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18801__auto___42754);
return statearr_42753;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18803__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18801__auto___42863 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18802__auto__ = (function (){var switch__18731__auto__ = (function (state_42838){var state_val_42839 = (state_42838[1]);if((state_val_42839 === 1))
{var inst_42815 = null;var state_42838__$1 = (function (){var statearr_42840 = state_42838;(statearr_42840[7] = inst_42815);
return statearr_42840;
})();var statearr_42841_42864 = state_42838__$1;(statearr_42841_42864[2] = null);
(statearr_42841_42864[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42839 === 2))
{var state_42838__$1 = state_42838;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42838__$1,4,ch);
} else
{if((state_val_42839 === 3))
{var inst_42835 = (state_42838[2]);var inst_42836 = cljs.core.async.close_BANG_.call(null,out);var state_42838__$1 = (function (){var statearr_42842 = state_42838;(statearr_42842[8] = inst_42835);
return statearr_42842;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42838__$1,inst_42836);
} else
{if((state_val_42839 === 4))
{var inst_42818 = (state_42838[9]);var inst_42818__$1 = (state_42838[2]);var inst_42819 = (inst_42818__$1 == null);var inst_42820 = cljs.core.not.call(null,inst_42819);var state_42838__$1 = (function (){var statearr_42843 = state_42838;(statearr_42843[9] = inst_42818__$1);
return statearr_42843;
})();if(inst_42820)
{var statearr_42844_42865 = state_42838__$1;(statearr_42844_42865[1] = 5);
} else
{var statearr_42845_42866 = state_42838__$1;(statearr_42845_42866[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42839 === 5))
{var inst_42815 = (state_42838[7]);var inst_42818 = (state_42838[9]);var inst_42822 = cljs.core._EQ_.call(null,inst_42818,inst_42815);var state_42838__$1 = state_42838;if(inst_42822)
{var statearr_42846_42867 = state_42838__$1;(statearr_42846_42867[1] = 8);
} else
{var statearr_42847_42868 = state_42838__$1;(statearr_42847_42868[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42839 === 6))
{var state_42838__$1 = state_42838;var statearr_42849_42869 = state_42838__$1;(statearr_42849_42869[2] = null);
(statearr_42849_42869[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42839 === 7))
{var inst_42833 = (state_42838[2]);var state_42838__$1 = state_42838;var statearr_42850_42870 = state_42838__$1;(statearr_42850_42870[2] = inst_42833);
(statearr_42850_42870[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42839 === 8))
{var inst_42815 = (state_42838[7]);var tmp42848 = inst_42815;var inst_42815__$1 = tmp42848;var state_42838__$1 = (function (){var statearr_42851 = state_42838;(statearr_42851[7] = inst_42815__$1);
return statearr_42851;
})();var statearr_42852_42871 = state_42838__$1;(statearr_42852_42871[2] = null);
(statearr_42852_42871[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42839 === 9))
{var inst_42818 = (state_42838[9]);var state_42838__$1 = state_42838;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42838__$1,11,out,inst_42818);
} else
{if((state_val_42839 === 10))
{var inst_42830 = (state_42838[2]);var state_42838__$1 = state_42838;var statearr_42853_42872 = state_42838__$1;(statearr_42853_42872[2] = inst_42830);
(statearr_42853_42872[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42839 === 11))
{var inst_42818 = (state_42838[9]);var inst_42827 = (state_42838[2]);var inst_42815 = inst_42818;var state_42838__$1 = (function (){var statearr_42854 = state_42838;(statearr_42854[7] = inst_42815);
(statearr_42854[10] = inst_42827);
return statearr_42854;
})();var statearr_42855_42873 = state_42838__$1;(statearr_42855_42873[2] = null);
(statearr_42855_42873[1] = 2);
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
});return ((function (switch__18731__auto__){
return (function() {
var state_machine__18732__auto__ = null;
var state_machine__18732__auto____0 = (function (){var statearr_42859 = (new Array(11));(statearr_42859[0] = state_machine__18732__auto__);
(statearr_42859[1] = 1);
return statearr_42859;
});
var state_machine__18732__auto____1 = (function (state_42838){while(true){
var ret_value__18733__auto__ = (function (){try{while(true){
var result__18734__auto__ = switch__18731__auto__.call(null,state_42838);if(cljs.core.keyword_identical_QMARK_.call(null,result__18734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18734__auto__;
}
break;
}
}catch (e42860){if((e42860 instanceof Object))
{var ex__18735__auto__ = e42860;var statearr_42861_42874 = state_42838;(statearr_42861_42874[5] = ex__18735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42838);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42860;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42875 = state_42838;
state_42838 = G__42875;
continue;
}
} else
{return ret_value__18733__auto__;
}
break;
}
});
state_machine__18732__auto__ = function(state_42838){
switch(arguments.length){
case 0:
return state_machine__18732__auto____0.call(this);
case 1:
return state_machine__18732__auto____1.call(this,state_42838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18732__auto____0;
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18732__auto____1;
return state_machine__18732__auto__;
})()
;})(switch__18731__auto__))
})();var state__18803__auto__ = (function (){var statearr_42862 = f__18802__auto__.call(null);(statearr_42862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18801__auto___42863);
return statearr_42862;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18803__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18801__auto___43010 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18802__auto__ = (function (){var switch__18731__auto__ = (function (state_42980){var state_val_42981 = (state_42980[1]);if((state_val_42981 === 1))
{var inst_42943 = (new Array(n));var inst_42944 = inst_42943;var inst_42945 = 0;var state_42980__$1 = (function (){var statearr_42982 = state_42980;(statearr_42982[7] = inst_42945);
(statearr_42982[8] = inst_42944);
return statearr_42982;
})();var statearr_42983_43011 = state_42980__$1;(statearr_42983_43011[2] = null);
(statearr_42983_43011[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42981 === 2))
{var state_42980__$1 = state_42980;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42980__$1,4,ch);
} else
{if((state_val_42981 === 3))
{var inst_42978 = (state_42980[2]);var state_42980__$1 = state_42980;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42980__$1,inst_42978);
} else
{if((state_val_42981 === 4))
{var inst_42948 = (state_42980[9]);var inst_42948__$1 = (state_42980[2]);var inst_42949 = (inst_42948__$1 == null);var inst_42950 = cljs.core.not.call(null,inst_42949);var state_42980__$1 = (function (){var statearr_42984 = state_42980;(statearr_42984[9] = inst_42948__$1);
return statearr_42984;
})();if(inst_42950)
{var statearr_42985_43012 = state_42980__$1;(statearr_42985_43012[1] = 5);
} else
{var statearr_42986_43013 = state_42980__$1;(statearr_42986_43013[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42981 === 5))
{var inst_42953 = (state_42980[10]);var inst_42945 = (state_42980[7]);var inst_42944 = (state_42980[8]);var inst_42948 = (state_42980[9]);var inst_42952 = (inst_42944[inst_42945] = inst_42948);var inst_42953__$1 = (inst_42945 + 1);var inst_42954 = (inst_42953__$1 < n);var state_42980__$1 = (function (){var statearr_42987 = state_42980;(statearr_42987[10] = inst_42953__$1);
(statearr_42987[11] = inst_42952);
return statearr_42987;
})();if(cljs.core.truth_(inst_42954))
{var statearr_42988_43014 = state_42980__$1;(statearr_42988_43014[1] = 8);
} else
{var statearr_42989_43015 = state_42980__$1;(statearr_42989_43015[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42981 === 6))
{var inst_42945 = (state_42980[7]);var inst_42966 = (inst_42945 > 0);var state_42980__$1 = state_42980;if(cljs.core.truth_(inst_42966))
{var statearr_42991_43016 = state_42980__$1;(statearr_42991_43016[1] = 12);
} else
{var statearr_42992_43017 = state_42980__$1;(statearr_42992_43017[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42981 === 7))
{var inst_42976 = (state_42980[2]);var state_42980__$1 = state_42980;var statearr_42993_43018 = state_42980__$1;(statearr_42993_43018[2] = inst_42976);
(statearr_42993_43018[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42981 === 8))
{var inst_42953 = (state_42980[10]);var inst_42944 = (state_42980[8]);var tmp42990 = inst_42944;var inst_42944__$1 = tmp42990;var inst_42945 = inst_42953;var state_42980__$1 = (function (){var statearr_42994 = state_42980;(statearr_42994[7] = inst_42945);
(statearr_42994[8] = inst_42944__$1);
return statearr_42994;
})();var statearr_42995_43019 = state_42980__$1;(statearr_42995_43019[2] = null);
(statearr_42995_43019[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42981 === 9))
{var inst_42944 = (state_42980[8]);var inst_42958 = cljs.core.vec.call(null,inst_42944);var state_42980__$1 = state_42980;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42980__$1,11,out,inst_42958);
} else
{if((state_val_42981 === 10))
{var inst_42964 = (state_42980[2]);var state_42980__$1 = state_42980;var statearr_42996_43020 = state_42980__$1;(statearr_42996_43020[2] = inst_42964);
(statearr_42996_43020[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42981 === 11))
{var inst_42960 = (state_42980[2]);var inst_42961 = (new Array(n));var inst_42944 = inst_42961;var inst_42945 = 0;var state_42980__$1 = (function (){var statearr_42997 = state_42980;(statearr_42997[12] = inst_42960);
(statearr_42997[7] = inst_42945);
(statearr_42997[8] = inst_42944);
return statearr_42997;
})();var statearr_42998_43021 = state_42980__$1;(statearr_42998_43021[2] = null);
(statearr_42998_43021[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42981 === 12))
{var inst_42944 = (state_42980[8]);var inst_42968 = cljs.core.vec.call(null,inst_42944);var state_42980__$1 = state_42980;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42980__$1,15,out,inst_42968);
} else
{if((state_val_42981 === 13))
{var state_42980__$1 = state_42980;var statearr_42999_43022 = state_42980__$1;(statearr_42999_43022[2] = null);
(statearr_42999_43022[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42981 === 14))
{var inst_42973 = (state_42980[2]);var inst_42974 = cljs.core.async.close_BANG_.call(null,out);var state_42980__$1 = (function (){var statearr_43000 = state_42980;(statearr_43000[13] = inst_42973);
return statearr_43000;
})();var statearr_43001_43023 = state_42980__$1;(statearr_43001_43023[2] = inst_42974);
(statearr_43001_43023[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42981 === 15))
{var inst_42970 = (state_42980[2]);var state_42980__$1 = state_42980;var statearr_43002_43024 = state_42980__$1;(statearr_43002_43024[2] = inst_42970);
(statearr_43002_43024[1] = 14);
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
});return ((function (switch__18731__auto__){
return (function() {
var state_machine__18732__auto__ = null;
var state_machine__18732__auto____0 = (function (){var statearr_43006 = (new Array(14));(statearr_43006[0] = state_machine__18732__auto__);
(statearr_43006[1] = 1);
return statearr_43006;
});
var state_machine__18732__auto____1 = (function (state_42980){while(true){
var ret_value__18733__auto__ = (function (){try{while(true){
var result__18734__auto__ = switch__18731__auto__.call(null,state_42980);if(cljs.core.keyword_identical_QMARK_.call(null,result__18734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18734__auto__;
}
break;
}
}catch (e43007){if((e43007 instanceof Object))
{var ex__18735__auto__ = e43007;var statearr_43008_43025 = state_42980;(statearr_43008_43025[5] = ex__18735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42980);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43007;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43026 = state_42980;
state_42980 = G__43026;
continue;
}
} else
{return ret_value__18733__auto__;
}
break;
}
});
state_machine__18732__auto__ = function(state_42980){
switch(arguments.length){
case 0:
return state_machine__18732__auto____0.call(this);
case 1:
return state_machine__18732__auto____1.call(this,state_42980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18732__auto____0;
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18732__auto____1;
return state_machine__18732__auto__;
})()
;})(switch__18731__auto__))
})();var state__18803__auto__ = (function (){var statearr_43009 = f__18802__auto__.call(null);(statearr_43009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18801__auto___43010);
return statearr_43009;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18803__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18801__auto___43169 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18802__auto__ = (function (){var switch__18731__auto__ = (function (state_43139){var state_val_43140 = (state_43139[1]);if((state_val_43140 === 1))
{var inst_43098 = (new Array(0));var inst_43099 = inst_43098;var inst_43100 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_43139__$1 = (function (){var statearr_43141 = state_43139;(statearr_43141[7] = inst_43100);
(statearr_43141[8] = inst_43099);
return statearr_43141;
})();var statearr_43142_43170 = state_43139__$1;(statearr_43142_43170[2] = null);
(statearr_43142_43170[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43140 === 2))
{var state_43139__$1 = state_43139;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43139__$1,4,ch);
} else
{if((state_val_43140 === 3))
{var inst_43137 = (state_43139[2]);var state_43139__$1 = state_43139;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43139__$1,inst_43137);
} else
{if((state_val_43140 === 4))
{var inst_43103 = (state_43139[9]);var inst_43103__$1 = (state_43139[2]);var inst_43104 = (inst_43103__$1 == null);var inst_43105 = cljs.core.not.call(null,inst_43104);var state_43139__$1 = (function (){var statearr_43143 = state_43139;(statearr_43143[9] = inst_43103__$1);
return statearr_43143;
})();if(inst_43105)
{var statearr_43144_43171 = state_43139__$1;(statearr_43144_43171[1] = 5);
} else
{var statearr_43145_43172 = state_43139__$1;(statearr_43145_43172[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43140 === 5))
{var inst_43103 = (state_43139[9]);var inst_43107 = (state_43139[10]);var inst_43100 = (state_43139[7]);var inst_43107__$1 = f.call(null,inst_43103);var inst_43108 = cljs.core._EQ_.call(null,inst_43107__$1,inst_43100);var inst_43109 = cljs.core.keyword_identical_QMARK_.call(null,inst_43100,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_43110 = (inst_43108) || (inst_43109);var state_43139__$1 = (function (){var statearr_43146 = state_43139;(statearr_43146[10] = inst_43107__$1);
return statearr_43146;
})();if(cljs.core.truth_(inst_43110))
{var statearr_43147_43173 = state_43139__$1;(statearr_43147_43173[1] = 8);
} else
{var statearr_43148_43174 = state_43139__$1;(statearr_43148_43174[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43140 === 6))
{var inst_43099 = (state_43139[8]);var inst_43124 = inst_43099.length;var inst_43125 = (inst_43124 > 0);var state_43139__$1 = state_43139;if(cljs.core.truth_(inst_43125))
{var statearr_43150_43175 = state_43139__$1;(statearr_43150_43175[1] = 12);
} else
{var statearr_43151_43176 = state_43139__$1;(statearr_43151_43176[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43140 === 7))
{var inst_43135 = (state_43139[2]);var state_43139__$1 = state_43139;var statearr_43152_43177 = state_43139__$1;(statearr_43152_43177[2] = inst_43135);
(statearr_43152_43177[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43140 === 8))
{var inst_43103 = (state_43139[9]);var inst_43107 = (state_43139[10]);var inst_43099 = (state_43139[8]);var inst_43112 = inst_43099.push(inst_43103);var tmp43149 = inst_43099;var inst_43099__$1 = tmp43149;var inst_43100 = inst_43107;var state_43139__$1 = (function (){var statearr_43153 = state_43139;(statearr_43153[11] = inst_43112);
(statearr_43153[7] = inst_43100);
(statearr_43153[8] = inst_43099__$1);
return statearr_43153;
})();var statearr_43154_43178 = state_43139__$1;(statearr_43154_43178[2] = null);
(statearr_43154_43178[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43140 === 9))
{var inst_43099 = (state_43139[8]);var inst_43115 = cljs.core.vec.call(null,inst_43099);var state_43139__$1 = state_43139;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43139__$1,11,out,inst_43115);
} else
{if((state_val_43140 === 10))
{var inst_43122 = (state_43139[2]);var state_43139__$1 = state_43139;var statearr_43155_43179 = state_43139__$1;(statearr_43155_43179[2] = inst_43122);
(statearr_43155_43179[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43140 === 11))
{var inst_43103 = (state_43139[9]);var inst_43107 = (state_43139[10]);var inst_43117 = (state_43139[2]);var inst_43118 = (new Array(0));var inst_43119 = inst_43118.push(inst_43103);var inst_43099 = inst_43118;var inst_43100 = inst_43107;var state_43139__$1 = (function (){var statearr_43156 = state_43139;(statearr_43156[12] = inst_43117);
(statearr_43156[7] = inst_43100);
(statearr_43156[13] = inst_43119);
(statearr_43156[8] = inst_43099);
return statearr_43156;
})();var statearr_43157_43180 = state_43139__$1;(statearr_43157_43180[2] = null);
(statearr_43157_43180[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43140 === 12))
{var inst_43099 = (state_43139[8]);var inst_43127 = cljs.core.vec.call(null,inst_43099);var state_43139__$1 = state_43139;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43139__$1,15,out,inst_43127);
} else
{if((state_val_43140 === 13))
{var state_43139__$1 = state_43139;var statearr_43158_43181 = state_43139__$1;(statearr_43158_43181[2] = null);
(statearr_43158_43181[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43140 === 14))
{var inst_43132 = (state_43139[2]);var inst_43133 = cljs.core.async.close_BANG_.call(null,out);var state_43139__$1 = (function (){var statearr_43159 = state_43139;(statearr_43159[14] = inst_43132);
return statearr_43159;
})();var statearr_43160_43182 = state_43139__$1;(statearr_43160_43182[2] = inst_43133);
(statearr_43160_43182[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43140 === 15))
{var inst_43129 = (state_43139[2]);var state_43139__$1 = state_43139;var statearr_43161_43183 = state_43139__$1;(statearr_43161_43183[2] = inst_43129);
(statearr_43161_43183[1] = 14);
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
});return ((function (switch__18731__auto__){
return (function() {
var state_machine__18732__auto__ = null;
var state_machine__18732__auto____0 = (function (){var statearr_43165 = (new Array(15));(statearr_43165[0] = state_machine__18732__auto__);
(statearr_43165[1] = 1);
return statearr_43165;
});
var state_machine__18732__auto____1 = (function (state_43139){while(true){
var ret_value__18733__auto__ = (function (){try{while(true){
var result__18734__auto__ = switch__18731__auto__.call(null,state_43139);if(cljs.core.keyword_identical_QMARK_.call(null,result__18734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18734__auto__;
}
break;
}
}catch (e43166){if((e43166 instanceof Object))
{var ex__18735__auto__ = e43166;var statearr_43167_43184 = state_43139;(statearr_43167_43184[5] = ex__18735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43139);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43166;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43185 = state_43139;
state_43139 = G__43185;
continue;
}
} else
{return ret_value__18733__auto__;
}
break;
}
});
state_machine__18732__auto__ = function(state_43139){
switch(arguments.length){
case 0:
return state_machine__18732__auto____0.call(this);
case 1:
return state_machine__18732__auto____1.call(this,state_43139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18732__auto____0;
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18732__auto____1;
return state_machine__18732__auto__;
})()
;})(switch__18731__auto__))
})();var state__18803__auto__ = (function (){var statearr_43168 = f__18802__auto__.call(null);(statearr_43168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18801__auto___43169);
return statearr_43168;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18803__auto__);
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