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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t31637 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31637 = (function (f,fn_handler,meta31638){
this.f = f;
this.fn_handler = fn_handler;
this.meta31638 = meta31638;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31637.cljs$lang$type = true;
cljs.core.async.t31637.cljs$lang$ctorStr = "cljs.core.async/t31637";
cljs.core.async.t31637.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t31637");
});
cljs.core.async.t31637.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31637.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t31637.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t31637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31639){var self__ = this;
var _31639__$1 = this;return self__.meta31638;
});
cljs.core.async.t31637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31639,meta31638__$1){var self__ = this;
var _31639__$1 = this;return (new cljs.core.async.t31637(self__.f,self__.fn_handler,meta31638__$1));
});
cljs.core.async.__GT_t31637 = (function __GT_t31637(f__$1,fn_handler__$1,meta31638){return (new cljs.core.async.t31637(f__$1,fn_handler__$1,meta31638));
});
}
return (new cljs.core.async.t31637(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__31641 = buff;if(G__31641)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__31641.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__31641.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31641);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31641);
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
{var val_31642 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_31642);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_31642);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__13811__auto__ = ret;if(cljs.core.truth_(and__13811__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__13811__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__14646__auto___31643 = n;var x_31644 = 0;while(true){
if((x_31644 < n__14646__auto___31643))
{(a[x_31644] = 0);
{
var G__31645 = (x_31644 + 1);
x_31644 = G__31645;
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
var G__31646 = (i + 1);
i = G__31646;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t31650 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31650 = (function (flag,alt_flag,meta31651){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31651 = meta31651;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31650.cljs$lang$type = true;
cljs.core.async.t31650.cljs$lang$ctorStr = "cljs.core.async/t31650";
cljs.core.async.t31650.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t31650");
});
cljs.core.async.t31650.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31650.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t31650.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t31650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31652){var self__ = this;
var _31652__$1 = this;return self__.meta31651;
});
cljs.core.async.t31650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31652,meta31651__$1){var self__ = this;
var _31652__$1 = this;return (new cljs.core.async.t31650(self__.flag,self__.alt_flag,meta31651__$1));
});
cljs.core.async.__GT_t31650 = (function __GT_t31650(flag__$1,alt_flag__$1,meta31651){return (new cljs.core.async.t31650(flag__$1,alt_flag__$1,meta31651));
});
}
return (new cljs.core.async.t31650(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t31656 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31656 = (function (cb,flag,alt_handler,meta31657){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31657 = meta31657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31656.cljs$lang$type = true;
cljs.core.async.t31656.cljs$lang$ctorStr = "cljs.core.async/t31656";
cljs.core.async.t31656.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t31656");
});
cljs.core.async.t31656.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t31656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t31656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31658){var self__ = this;
var _31658__$1 = this;return self__.meta31657;
});
cljs.core.async.t31656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31658,meta31657__$1){var self__ = this;
var _31658__$1 = this;return (new cljs.core.async.t31656(self__.cb,self__.flag,self__.alt_handler,meta31657__$1));
});
cljs.core.async.__GT_t31656 = (function __GT_t31656(cb__$1,flag__$1,alt_handler__$1,meta31657){return (new cljs.core.async.t31656(cb__$1,flag__$1,alt_handler__$1,meta31657));
});
}
return (new cljs.core.async.t31656(cb,flag,alt_handler,null));
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
return (function (p1__31659_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31659_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__13823__auto__ = wport;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__31660 = (i + 1);
i = G__31660;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__13823__auto__ = ret;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__13811__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__13811__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__13811__auto__;
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
var alts_BANG___delegate = function (ports,p__31661){var map__31663 = p__31661;var map__31663__$1 = ((cljs.core.seq_QMARK_.call(null,map__31663))?cljs.core.apply.call(null,cljs.core.hash_map,map__31663):map__31663);var opts = map__31663__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__31661 = null;if (arguments.length > 1) {
  p__31661 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__31661);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31664){
var ports = cljs.core.first(arglist__31664);
var p__31661 = cljs.core.rest(arglist__31664);
return alts_BANG___delegate(ports,p__31661);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t31672 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31672 = (function (ch,f,map_LT_,meta31673){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31673 = meta31673;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31672.cljs$lang$type = true;
cljs.core.async.t31672.cljs$lang$ctorStr = "cljs.core.async/t31672";
cljs.core.async.t31672.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t31672");
});
cljs.core.async.t31672.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31672.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t31672.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31672.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t31675 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31675 = (function (fn1,_,meta31673,ch,f,map_LT_,meta31676){
this.fn1 = fn1;
this._ = _;
this.meta31673 = meta31673;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31676 = meta31676;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31675.cljs$lang$type = true;
cljs.core.async.t31675.cljs$lang$ctorStr = "cljs.core.async/t31675";
cljs.core.async.t31675.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t31675");
});
cljs.core.async.t31675.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31675.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t31675.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t31675.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__31665_SHARP_){return f1.call(null,(((p1__31665_SHARP_ == null))?null:self__.f.call(null,p1__31665_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t31675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31677){var self__ = this;
var _31677__$1 = this;return self__.meta31676;
});
cljs.core.async.t31675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31677,meta31676__$1){var self__ = this;
var _31677__$1 = this;return (new cljs.core.async.t31675(self__.fn1,self__._,self__.meta31673,self__.ch,self__.f,self__.map_LT_,meta31676__$1));
});
cljs.core.async.__GT_t31675 = (function __GT_t31675(fn1__$1,___$2,meta31673__$1,ch__$2,f__$2,map_LT___$2,meta31676){return (new cljs.core.async.t31675(fn1__$1,___$2,meta31673__$1,ch__$2,f__$2,map_LT___$2,meta31676));
});
}
return (new cljs.core.async.t31675(fn1,___$1,self__.meta31673,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__13811__auto__ = ret;if(cljs.core.truth_(and__13811__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__13811__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t31672.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31672.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31674){var self__ = this;
var _31674__$1 = this;return self__.meta31673;
});
cljs.core.async.t31672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31674,meta31673__$1){var self__ = this;
var _31674__$1 = this;return (new cljs.core.async.t31672(self__.ch,self__.f,self__.map_LT_,meta31673__$1));
});
cljs.core.async.__GT_t31672 = (function __GT_t31672(ch__$1,f__$1,map_LT___$1,meta31673){return (new cljs.core.async.t31672(ch__$1,f__$1,map_LT___$1,meta31673));
});
}
return (new cljs.core.async.t31672(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t31681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31681 = (function (ch,f,map_GT_,meta31682){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31682 = meta31682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31681.cljs$lang$type = true;
cljs.core.async.t31681.cljs$lang$ctorStr = "cljs.core.async/t31681";
cljs.core.async.t31681.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t31681");
});
cljs.core.async.t31681.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31681.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t31681.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31681.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t31681.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31681.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31683){var self__ = this;
var _31683__$1 = this;return self__.meta31682;
});
cljs.core.async.t31681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31683,meta31682__$1){var self__ = this;
var _31683__$1 = this;return (new cljs.core.async.t31681(self__.ch,self__.f,self__.map_GT_,meta31682__$1));
});
cljs.core.async.__GT_t31681 = (function __GT_t31681(ch__$1,f__$1,map_GT___$1,meta31682){return (new cljs.core.async.t31681(ch__$1,f__$1,map_GT___$1,meta31682));
});
}
return (new cljs.core.async.t31681(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t31687 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31687 = (function (ch,p,filter_GT_,meta31688){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31688 = meta31688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31687.cljs$lang$type = true;
cljs.core.async.t31687.cljs$lang$ctorStr = "cljs.core.async/t31687";
cljs.core.async.t31687.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t31687");
});
cljs.core.async.t31687.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31687.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t31687.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31687.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t31687.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31687.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31689){var self__ = this;
var _31689__$1 = this;return self__.meta31688;
});
cljs.core.async.t31687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31689,meta31688__$1){var self__ = this;
var _31689__$1 = this;return (new cljs.core.async.t31687(self__.ch,self__.p,self__.filter_GT_,meta31688__$1));
});
cljs.core.async.__GT_t31687 = (function __GT_t31687(ch__$1,p__$1,filter_GT___$1,meta31688){return (new cljs.core.async.t31687(ch__$1,p__$1,filter_GT___$1,meta31688));
});
}
return (new cljs.core.async.t31687(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___31772 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_31751){var state_val_31752 = (state_31751[1]);if((state_val_31752 === 1))
{var state_31751__$1 = state_31751;var statearr_31753_31773 = state_31751__$1;(statearr_31753_31773[2] = null);
(statearr_31753_31773[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31752 === 2))
{var state_31751__$1 = state_31751;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31751__$1,4,ch);
} else
{if((state_val_31752 === 3))
{var inst_31749 = (state_31751[2]);var state_31751__$1 = state_31751;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31751__$1,inst_31749);
} else
{if((state_val_31752 === 4))
{var inst_31733 = (state_31751[7]);var inst_31733__$1 = (state_31751[2]);var inst_31734 = (inst_31733__$1 == null);var state_31751__$1 = (function (){var statearr_31754 = state_31751;(statearr_31754[7] = inst_31733__$1);
return statearr_31754;
})();if(cljs.core.truth_(inst_31734))
{var statearr_31755_31774 = state_31751__$1;(statearr_31755_31774[1] = 5);
} else
{var statearr_31756_31775 = state_31751__$1;(statearr_31756_31775[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31752 === 5))
{var inst_31736 = cljs.core.async.close_BANG_.call(null,out);var state_31751__$1 = state_31751;var statearr_31757_31776 = state_31751__$1;(statearr_31757_31776[2] = inst_31736);
(statearr_31757_31776[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31752 === 6))
{var inst_31733 = (state_31751[7]);var inst_31738 = p.call(null,inst_31733);var state_31751__$1 = state_31751;if(cljs.core.truth_(inst_31738))
{var statearr_31758_31777 = state_31751__$1;(statearr_31758_31777[1] = 8);
} else
{var statearr_31759_31778 = state_31751__$1;(statearr_31759_31778[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31752 === 7))
{var inst_31747 = (state_31751[2]);var state_31751__$1 = state_31751;var statearr_31760_31779 = state_31751__$1;(statearr_31760_31779[2] = inst_31747);
(statearr_31760_31779[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31752 === 8))
{var inst_31733 = (state_31751[7]);var state_31751__$1 = state_31751;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31751__$1,11,out,inst_31733);
} else
{if((state_val_31752 === 9))
{var state_31751__$1 = state_31751;var statearr_31761_31780 = state_31751__$1;(statearr_31761_31780[2] = null);
(statearr_31761_31780[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31752 === 10))
{var inst_31744 = (state_31751[2]);var state_31751__$1 = (function (){var statearr_31762 = state_31751;(statearr_31762[8] = inst_31744);
return statearr_31762;
})();var statearr_31763_31781 = state_31751__$1;(statearr_31763_31781[2] = null);
(statearr_31763_31781[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31752 === 11))
{var inst_31741 = (state_31751[2]);var state_31751__$1 = state_31751;var statearr_31764_31782 = state_31751__$1;(statearr_31764_31782[2] = inst_31741);
(statearr_31764_31782[1] = 10);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_31768 = (new Array(9));(statearr_31768[0] = state_machine__17982__auto__);
(statearr_31768[1] = 1);
return statearr_31768;
});
var state_machine__17982__auto____1 = (function (state_31751){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_31751);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e31769){if((e31769 instanceof Object))
{var ex__17985__auto__ = e31769;var statearr_31770_31783 = state_31751;(statearr_31770_31783[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31751);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31769;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31784 = state_31751;
state_31751 = G__31784;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_31751){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_31751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_31771 = f__18052__auto__.call(null);(statearr_31771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___31772);
return statearr_31771;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_31936){var state_val_31937 = (state_31936[1]);if((state_val_31937 === 1))
{var state_31936__$1 = state_31936;var statearr_31938_31975 = state_31936__$1;(statearr_31938_31975[2] = null);
(statearr_31938_31975[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31937 === 2))
{var state_31936__$1 = state_31936;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31936__$1,4,in$);
} else
{if((state_val_31937 === 3))
{var inst_31934 = (state_31936[2]);var state_31936__$1 = state_31936;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31936__$1,inst_31934);
} else
{if((state_val_31937 === 4))
{var inst_31882 = (state_31936[7]);var inst_31882__$1 = (state_31936[2]);var inst_31883 = (inst_31882__$1 == null);var state_31936__$1 = (function (){var statearr_31939 = state_31936;(statearr_31939[7] = inst_31882__$1);
return statearr_31939;
})();if(cljs.core.truth_(inst_31883))
{var statearr_31940_31976 = state_31936__$1;(statearr_31940_31976[1] = 5);
} else
{var statearr_31941_31977 = state_31936__$1;(statearr_31941_31977[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31937 === 5))
{var inst_31885 = cljs.core.async.close_BANG_.call(null,out);var state_31936__$1 = state_31936;var statearr_31942_31978 = state_31936__$1;(statearr_31942_31978[2] = inst_31885);
(statearr_31942_31978[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31937 === 6))
{var inst_31882 = (state_31936[7]);var inst_31887 = f.call(null,inst_31882);var inst_31892 = cljs.core.seq.call(null,inst_31887);var inst_31893 = inst_31892;var inst_31894 = null;var inst_31895 = 0;var inst_31896 = 0;var state_31936__$1 = (function (){var statearr_31943 = state_31936;(statearr_31943[8] = inst_31894);
(statearr_31943[9] = inst_31895);
(statearr_31943[10] = inst_31896);
(statearr_31943[11] = inst_31893);
return statearr_31943;
})();var statearr_31944_31979 = state_31936__$1;(statearr_31944_31979[2] = null);
(statearr_31944_31979[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31937 === 7))
{var inst_31932 = (state_31936[2]);var state_31936__$1 = state_31936;var statearr_31945_31980 = state_31936__$1;(statearr_31945_31980[2] = inst_31932);
(statearr_31945_31980[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31937 === 8))
{var inst_31895 = (state_31936[9]);var inst_31896 = (state_31936[10]);var inst_31898 = (inst_31896 < inst_31895);var inst_31899 = inst_31898;var state_31936__$1 = state_31936;if(cljs.core.truth_(inst_31899))
{var statearr_31946_31981 = state_31936__$1;(statearr_31946_31981[1] = 10);
} else
{var statearr_31947_31982 = state_31936__$1;(statearr_31947_31982[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31937 === 9))
{var inst_31929 = (state_31936[2]);var state_31936__$1 = (function (){var statearr_31948 = state_31936;(statearr_31948[12] = inst_31929);
return statearr_31948;
})();var statearr_31949_31983 = state_31936__$1;(statearr_31949_31983[2] = null);
(statearr_31949_31983[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31937 === 10))
{var inst_31894 = (state_31936[8]);var inst_31896 = (state_31936[10]);var inst_31901 = cljs.core._nth.call(null,inst_31894,inst_31896);var state_31936__$1 = state_31936;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31936__$1,13,out,inst_31901);
} else
{if((state_val_31937 === 11))
{var inst_31907 = (state_31936[13]);var inst_31893 = (state_31936[11]);var inst_31907__$1 = cljs.core.seq.call(null,inst_31893);var state_31936__$1 = (function (){var statearr_31953 = state_31936;(statearr_31953[13] = inst_31907__$1);
return statearr_31953;
})();if(inst_31907__$1)
{var statearr_31954_31984 = state_31936__$1;(statearr_31954_31984[1] = 14);
} else
{var statearr_31955_31985 = state_31936__$1;(statearr_31955_31985[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31937 === 12))
{var inst_31927 = (state_31936[2]);var state_31936__$1 = state_31936;var statearr_31956_31986 = state_31936__$1;(statearr_31956_31986[2] = inst_31927);
(statearr_31956_31986[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31937 === 13))
{var inst_31894 = (state_31936[8]);var inst_31895 = (state_31936[9]);var inst_31896 = (state_31936[10]);var inst_31893 = (state_31936[11]);var inst_31903 = (state_31936[2]);var inst_31904 = (inst_31896 + 1);var tmp31950 = inst_31894;var tmp31951 = inst_31895;var tmp31952 = inst_31893;var inst_31893__$1 = tmp31952;var inst_31894__$1 = tmp31950;var inst_31895__$1 = tmp31951;var inst_31896__$1 = inst_31904;var state_31936__$1 = (function (){var statearr_31957 = state_31936;(statearr_31957[8] = inst_31894__$1);
(statearr_31957[9] = inst_31895__$1);
(statearr_31957[10] = inst_31896__$1);
(statearr_31957[14] = inst_31903);
(statearr_31957[11] = inst_31893__$1);
return statearr_31957;
})();var statearr_31958_31987 = state_31936__$1;(statearr_31958_31987[2] = null);
(statearr_31958_31987[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31937 === 14))
{var inst_31907 = (state_31936[13]);var inst_31909 = cljs.core.chunked_seq_QMARK_.call(null,inst_31907);var state_31936__$1 = state_31936;if(inst_31909)
{var statearr_31959_31988 = state_31936__$1;(statearr_31959_31988[1] = 17);
} else
{var statearr_31960_31989 = state_31936__$1;(statearr_31960_31989[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31937 === 15))
{var state_31936__$1 = state_31936;var statearr_31961_31990 = state_31936__$1;(statearr_31961_31990[2] = null);
(statearr_31961_31990[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31937 === 16))
{var inst_31925 = (state_31936[2]);var state_31936__$1 = state_31936;var statearr_31962_31991 = state_31936__$1;(statearr_31962_31991[2] = inst_31925);
(statearr_31962_31991[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31937 === 17))
{var inst_31907 = (state_31936[13]);var inst_31911 = cljs.core.chunk_first.call(null,inst_31907);var inst_31912 = cljs.core.chunk_rest.call(null,inst_31907);var inst_31913 = cljs.core.count.call(null,inst_31911);var inst_31893 = inst_31912;var inst_31894 = inst_31911;var inst_31895 = inst_31913;var inst_31896 = 0;var state_31936__$1 = (function (){var statearr_31963 = state_31936;(statearr_31963[8] = inst_31894);
(statearr_31963[9] = inst_31895);
(statearr_31963[10] = inst_31896);
(statearr_31963[11] = inst_31893);
return statearr_31963;
})();var statearr_31964_31992 = state_31936__$1;(statearr_31964_31992[2] = null);
(statearr_31964_31992[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31937 === 18))
{var inst_31907 = (state_31936[13]);var inst_31916 = cljs.core.first.call(null,inst_31907);var state_31936__$1 = state_31936;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31936__$1,20,out,inst_31916);
} else
{if((state_val_31937 === 19))
{var inst_31922 = (state_31936[2]);var state_31936__$1 = state_31936;var statearr_31965_31993 = state_31936__$1;(statearr_31965_31993[2] = inst_31922);
(statearr_31965_31993[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31937 === 20))
{var inst_31907 = (state_31936[13]);var inst_31918 = (state_31936[2]);var inst_31919 = cljs.core.next.call(null,inst_31907);var inst_31893 = inst_31919;var inst_31894 = null;var inst_31895 = 0;var inst_31896 = 0;var state_31936__$1 = (function (){var statearr_31966 = state_31936;(statearr_31966[15] = inst_31918);
(statearr_31966[8] = inst_31894);
(statearr_31966[9] = inst_31895);
(statearr_31966[10] = inst_31896);
(statearr_31966[11] = inst_31893);
return statearr_31966;
})();var statearr_31967_31994 = state_31936__$1;(statearr_31967_31994[2] = null);
(statearr_31967_31994[1] = 8);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_31971 = (new Array(16));(statearr_31971[0] = state_machine__17982__auto__);
(statearr_31971[1] = 1);
return statearr_31971;
});
var state_machine__17982__auto____1 = (function (state_31936){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_31936);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e31972){if((e31972 instanceof Object))
{var ex__17985__auto__ = e31972;var statearr_31973_31995 = state_31936;(statearr_31973_31995[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31936);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31972;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31996 = state_31936;
state_31936 = G__31996;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_31936){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_31936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_31974 = f__18052__auto__.call(null);(statearr_31974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_31974;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__18051__auto___32077 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_32056){var state_val_32057 = (state_32056[1]);if((state_val_32057 === 1))
{var state_32056__$1 = state_32056;var statearr_32058_32078 = state_32056__$1;(statearr_32058_32078[2] = null);
(statearr_32058_32078[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32057 === 2))
{var state_32056__$1 = state_32056;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32056__$1,4,from);
} else
{if((state_val_32057 === 3))
{var inst_32054 = (state_32056[2]);var state_32056__$1 = state_32056;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32056__$1,inst_32054);
} else
{if((state_val_32057 === 4))
{var inst_32039 = (state_32056[7]);var inst_32039__$1 = (state_32056[2]);var inst_32040 = (inst_32039__$1 == null);var state_32056__$1 = (function (){var statearr_32059 = state_32056;(statearr_32059[7] = inst_32039__$1);
return statearr_32059;
})();if(cljs.core.truth_(inst_32040))
{var statearr_32060_32079 = state_32056__$1;(statearr_32060_32079[1] = 5);
} else
{var statearr_32061_32080 = state_32056__$1;(statearr_32061_32080[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32057 === 5))
{var state_32056__$1 = state_32056;if(cljs.core.truth_(close_QMARK_))
{var statearr_32062_32081 = state_32056__$1;(statearr_32062_32081[1] = 8);
} else
{var statearr_32063_32082 = state_32056__$1;(statearr_32063_32082[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32057 === 6))
{var inst_32039 = (state_32056[7]);var state_32056__$1 = state_32056;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32056__$1,11,to,inst_32039);
} else
{if((state_val_32057 === 7))
{var inst_32052 = (state_32056[2]);var state_32056__$1 = state_32056;var statearr_32064_32083 = state_32056__$1;(statearr_32064_32083[2] = inst_32052);
(statearr_32064_32083[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32057 === 8))
{var inst_32043 = cljs.core.async.close_BANG_.call(null,to);var state_32056__$1 = state_32056;var statearr_32065_32084 = state_32056__$1;(statearr_32065_32084[2] = inst_32043);
(statearr_32065_32084[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32057 === 9))
{var state_32056__$1 = state_32056;var statearr_32066_32085 = state_32056__$1;(statearr_32066_32085[2] = null);
(statearr_32066_32085[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32057 === 10))
{var inst_32046 = (state_32056[2]);var state_32056__$1 = state_32056;var statearr_32067_32086 = state_32056__$1;(statearr_32067_32086[2] = inst_32046);
(statearr_32067_32086[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32057 === 11))
{var inst_32049 = (state_32056[2]);var state_32056__$1 = (function (){var statearr_32068 = state_32056;(statearr_32068[8] = inst_32049);
return statearr_32068;
})();var statearr_32069_32087 = state_32056__$1;(statearr_32069_32087[2] = null);
(statearr_32069_32087[1] = 2);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_32073 = (new Array(9));(statearr_32073[0] = state_machine__17982__auto__);
(statearr_32073[1] = 1);
return statearr_32073;
});
var state_machine__17982__auto____1 = (function (state_32056){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_32056);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e32074){if((e32074 instanceof Object))
{var ex__17985__auto__ = e32074;var statearr_32075_32088 = state_32056;(statearr_32075_32088[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32056);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32074;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32089 = state_32056;
state_32056 = G__32089;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_32056){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_32056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_32076 = f__18052__auto__.call(null);(statearr_32076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___32077);
return statearr_32076;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__18051__auto___32176 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_32154){var state_val_32155 = (state_32154[1]);if((state_val_32155 === 1))
{var state_32154__$1 = state_32154;var statearr_32156_32177 = state_32154__$1;(statearr_32156_32177[2] = null);
(statearr_32156_32177[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32155 === 2))
{var state_32154__$1 = state_32154;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32154__$1,4,ch);
} else
{if((state_val_32155 === 3))
{var inst_32152 = (state_32154[2]);var state_32154__$1 = state_32154;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32154__$1,inst_32152);
} else
{if((state_val_32155 === 4))
{var inst_32135 = (state_32154[7]);var inst_32135__$1 = (state_32154[2]);var inst_32136 = (inst_32135__$1 == null);var state_32154__$1 = (function (){var statearr_32157 = state_32154;(statearr_32157[7] = inst_32135__$1);
return statearr_32157;
})();if(cljs.core.truth_(inst_32136))
{var statearr_32158_32178 = state_32154__$1;(statearr_32158_32178[1] = 5);
} else
{var statearr_32159_32179 = state_32154__$1;(statearr_32159_32179[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32155 === 5))
{var inst_32138 = cljs.core.async.close_BANG_.call(null,tc);var inst_32139 = cljs.core.async.close_BANG_.call(null,fc);var state_32154__$1 = (function (){var statearr_32160 = state_32154;(statearr_32160[8] = inst_32138);
return statearr_32160;
})();var statearr_32161_32180 = state_32154__$1;(statearr_32161_32180[2] = inst_32139);
(statearr_32161_32180[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32155 === 6))
{var inst_32135 = (state_32154[7]);var inst_32141 = p.call(null,inst_32135);var state_32154__$1 = state_32154;if(cljs.core.truth_(inst_32141))
{var statearr_32162_32181 = state_32154__$1;(statearr_32162_32181[1] = 9);
} else
{var statearr_32163_32182 = state_32154__$1;(statearr_32163_32182[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32155 === 7))
{var inst_32150 = (state_32154[2]);var state_32154__$1 = state_32154;var statearr_32164_32183 = state_32154__$1;(statearr_32164_32183[2] = inst_32150);
(statearr_32164_32183[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32155 === 8))
{var inst_32147 = (state_32154[2]);var state_32154__$1 = (function (){var statearr_32165 = state_32154;(statearr_32165[9] = inst_32147);
return statearr_32165;
})();var statearr_32166_32184 = state_32154__$1;(statearr_32166_32184[2] = null);
(statearr_32166_32184[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32155 === 9))
{var state_32154__$1 = state_32154;var statearr_32167_32185 = state_32154__$1;(statearr_32167_32185[2] = tc);
(statearr_32167_32185[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32155 === 10))
{var state_32154__$1 = state_32154;var statearr_32168_32186 = state_32154__$1;(statearr_32168_32186[2] = fc);
(statearr_32168_32186[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32155 === 11))
{var inst_32135 = (state_32154[7]);var inst_32145 = (state_32154[2]);var state_32154__$1 = state_32154;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32154__$1,8,inst_32145,inst_32135);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_32172 = (new Array(10));(statearr_32172[0] = state_machine__17982__auto__);
(statearr_32172[1] = 1);
return statearr_32172;
});
var state_machine__17982__auto____1 = (function (state_32154){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_32154);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e32173){if((e32173 instanceof Object))
{var ex__17985__auto__ = e32173;var statearr_32174_32187 = state_32154;(statearr_32174_32187[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32154);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32173;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32188 = state_32154;
state_32154 = G__32188;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_32154){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_32154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_32175 = f__18052__auto__.call(null);(statearr_32175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___32176);
return statearr_32175;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_32235){var state_val_32236 = (state_32235[1]);if((state_val_32236 === 7))
{var inst_32231 = (state_32235[2]);var state_32235__$1 = state_32235;var statearr_32237_32253 = state_32235__$1;(statearr_32237_32253[2] = inst_32231);
(statearr_32237_32253[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32236 === 6))
{var inst_32224 = (state_32235[7]);var inst_32221 = (state_32235[8]);var inst_32228 = f.call(null,inst_32221,inst_32224);var inst_32221__$1 = inst_32228;var state_32235__$1 = (function (){var statearr_32238 = state_32235;(statearr_32238[8] = inst_32221__$1);
return statearr_32238;
})();var statearr_32239_32254 = state_32235__$1;(statearr_32239_32254[2] = null);
(statearr_32239_32254[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32236 === 5))
{var inst_32221 = (state_32235[8]);var state_32235__$1 = state_32235;var statearr_32240_32255 = state_32235__$1;(statearr_32240_32255[2] = inst_32221);
(statearr_32240_32255[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32236 === 4))
{var inst_32224 = (state_32235[7]);var inst_32224__$1 = (state_32235[2]);var inst_32225 = (inst_32224__$1 == null);var state_32235__$1 = (function (){var statearr_32241 = state_32235;(statearr_32241[7] = inst_32224__$1);
return statearr_32241;
})();if(cljs.core.truth_(inst_32225))
{var statearr_32242_32256 = state_32235__$1;(statearr_32242_32256[1] = 5);
} else
{var statearr_32243_32257 = state_32235__$1;(statearr_32243_32257[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32236 === 3))
{var inst_32233 = (state_32235[2]);var state_32235__$1 = state_32235;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32235__$1,inst_32233);
} else
{if((state_val_32236 === 2))
{var state_32235__$1 = state_32235;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32235__$1,4,ch);
} else
{if((state_val_32236 === 1))
{var inst_32221 = init;var state_32235__$1 = (function (){var statearr_32244 = state_32235;(statearr_32244[8] = inst_32221);
return statearr_32244;
})();var statearr_32245_32258 = state_32235__$1;(statearr_32245_32258[2] = null);
(statearr_32245_32258[1] = 2);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_32249 = (new Array(9));(statearr_32249[0] = state_machine__17982__auto__);
(statearr_32249[1] = 1);
return statearr_32249;
});
var state_machine__17982__auto____1 = (function (state_32235){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_32235);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e32250){if((e32250 instanceof Object))
{var ex__17985__auto__ = e32250;var statearr_32251_32259 = state_32235;(statearr_32251_32259[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32235);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32250;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32260 = state_32235;
state_32235 = G__32260;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_32235){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_32235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_32252 = f__18052__auto__.call(null);(statearr_32252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_32252;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_32322){var state_val_32323 = (state_32322[1]);if((state_val_32323 === 1))
{var inst_32302 = cljs.core.seq.call(null,coll);var inst_32303 = inst_32302;var state_32322__$1 = (function (){var statearr_32324 = state_32322;(statearr_32324[7] = inst_32303);
return statearr_32324;
})();var statearr_32325_32343 = state_32322__$1;(statearr_32325_32343[2] = null);
(statearr_32325_32343[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32323 === 2))
{var inst_32303 = (state_32322[7]);var state_32322__$1 = state_32322;if(cljs.core.truth_(inst_32303))
{var statearr_32326_32344 = state_32322__$1;(statearr_32326_32344[1] = 4);
} else
{var statearr_32327_32345 = state_32322__$1;(statearr_32327_32345[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32323 === 3))
{var inst_32320 = (state_32322[2]);var state_32322__$1 = state_32322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32322__$1,inst_32320);
} else
{if((state_val_32323 === 4))
{var inst_32303 = (state_32322[7]);var inst_32306 = cljs.core.first.call(null,inst_32303);var state_32322__$1 = state_32322;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32322__$1,7,ch,inst_32306);
} else
{if((state_val_32323 === 5))
{var state_32322__$1 = state_32322;if(cljs.core.truth_(close_QMARK_))
{var statearr_32328_32346 = state_32322__$1;(statearr_32328_32346[1] = 8);
} else
{var statearr_32329_32347 = state_32322__$1;(statearr_32329_32347[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32323 === 6))
{var inst_32318 = (state_32322[2]);var state_32322__$1 = state_32322;var statearr_32330_32348 = state_32322__$1;(statearr_32330_32348[2] = inst_32318);
(statearr_32330_32348[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32323 === 7))
{var inst_32303 = (state_32322[7]);var inst_32308 = (state_32322[2]);var inst_32309 = cljs.core.next.call(null,inst_32303);var inst_32303__$1 = inst_32309;var state_32322__$1 = (function (){var statearr_32331 = state_32322;(statearr_32331[7] = inst_32303__$1);
(statearr_32331[8] = inst_32308);
return statearr_32331;
})();var statearr_32332_32349 = state_32322__$1;(statearr_32332_32349[2] = null);
(statearr_32332_32349[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32323 === 8))
{var inst_32313 = cljs.core.async.close_BANG_.call(null,ch);var state_32322__$1 = state_32322;var statearr_32333_32350 = state_32322__$1;(statearr_32333_32350[2] = inst_32313);
(statearr_32333_32350[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32323 === 9))
{var state_32322__$1 = state_32322;var statearr_32334_32351 = state_32322__$1;(statearr_32334_32351[2] = null);
(statearr_32334_32351[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32323 === 10))
{var inst_32316 = (state_32322[2]);var state_32322__$1 = state_32322;var statearr_32335_32352 = state_32322__$1;(statearr_32335_32352[2] = inst_32316);
(statearr_32335_32352[1] = 6);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_32339 = (new Array(9));(statearr_32339[0] = state_machine__17982__auto__);
(statearr_32339[1] = 1);
return statearr_32339;
});
var state_machine__17982__auto____1 = (function (state_32322){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_32322);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e32340){if((e32340 instanceof Object))
{var ex__17985__auto__ = e32340;var statearr_32341_32353 = state_32322;(statearr_32341_32353[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32322);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32340;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32354 = state_32322;
state_32322 = G__32354;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_32322){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_32322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_32342 = f__18052__auto__.call(null);(statearr_32342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_32342;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
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
cljs.core.async.Mux = (function (){var obj32356 = {};return obj32356;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__13811__auto__ = _;if(and__13811__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__13811__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__14426__auto__ = (((_ == null))?null:_);return (function (){var or__13823__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj32358 = {};return obj32358;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t32582 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32582 = (function (cs,ch,mult,meta32583){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32583 = meta32583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32582.cljs$lang$type = true;
cljs.core.async.t32582.cljs$lang$ctorStr = "cljs.core.async/t32582";
cljs.core.async.t32582.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t32582");
});})(cs))
;
cljs.core.async.t32582.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t32582.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t32582.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t32582.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t32582.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32582.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t32582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32584){var self__ = this;
var _32584__$1 = this;return self__.meta32583;
});})(cs))
;
cljs.core.async.t32582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32584,meta32583__$1){var self__ = this;
var _32584__$1 = this;return (new cljs.core.async.t32582(self__.cs,self__.ch,self__.mult,meta32583__$1));
});})(cs))
;
cljs.core.async.__GT_t32582 = ((function (cs){
return (function __GT_t32582(cs__$1,ch__$1,mult__$1,meta32583){return (new cljs.core.async.t32582(cs__$1,ch__$1,mult__$1,meta32583));
});})(cs))
;
}
return (new cljs.core.async.t32582(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__18051__auto___32805 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_32719){var state_val_32720 = (state_32719[1]);if((state_val_32720 === 32))
{var inst_32587 = (state_32719[7]);var inst_32663 = (state_32719[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32719,31,Object,null,30);var inst_32670 = cljs.core.async.put_BANG_.call(null,inst_32663,inst_32587,done);var state_32719__$1 = state_32719;var statearr_32721_32806 = state_32719__$1;(statearr_32721_32806[2] = inst_32670);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32719__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 1))
{var state_32719__$1 = state_32719;var statearr_32722_32807 = state_32719__$1;(statearr_32722_32807[2] = null);
(statearr_32722_32807[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 33))
{var inst_32676 = (state_32719[9]);var inst_32678 = cljs.core.chunked_seq_QMARK_.call(null,inst_32676);var state_32719__$1 = state_32719;if(inst_32678)
{var statearr_32723_32808 = state_32719__$1;(statearr_32723_32808[1] = 36);
} else
{var statearr_32724_32809 = state_32719__$1;(statearr_32724_32809[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 2))
{var state_32719__$1 = state_32719;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32719__$1,4,ch);
} else
{if((state_val_32720 === 34))
{var state_32719__$1 = state_32719;var statearr_32725_32810 = state_32719__$1;(statearr_32725_32810[2] = null);
(statearr_32725_32810[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 3))
{var inst_32717 = (state_32719[2]);var state_32719__$1 = state_32719;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32719__$1,inst_32717);
} else
{if((state_val_32720 === 35))
{var inst_32701 = (state_32719[2]);var state_32719__$1 = state_32719;var statearr_32726_32811 = state_32719__$1;(statearr_32726_32811[2] = inst_32701);
(statearr_32726_32811[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 4))
{var inst_32587 = (state_32719[7]);var inst_32587__$1 = (state_32719[2]);var inst_32588 = (inst_32587__$1 == null);var state_32719__$1 = (function (){var statearr_32727 = state_32719;(statearr_32727[7] = inst_32587__$1);
return statearr_32727;
})();if(cljs.core.truth_(inst_32588))
{var statearr_32728_32812 = state_32719__$1;(statearr_32728_32812[1] = 5);
} else
{var statearr_32729_32813 = state_32719__$1;(statearr_32729_32813[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 36))
{var inst_32676 = (state_32719[9]);var inst_32680 = cljs.core.chunk_first.call(null,inst_32676);var inst_32681 = cljs.core.chunk_rest.call(null,inst_32676);var inst_32682 = cljs.core.count.call(null,inst_32680);var inst_32655 = inst_32681;var inst_32656 = inst_32680;var inst_32657 = inst_32682;var inst_32658 = 0;var state_32719__$1 = (function (){var statearr_32730 = state_32719;(statearr_32730[10] = inst_32655);
(statearr_32730[11] = inst_32656);
(statearr_32730[12] = inst_32658);
(statearr_32730[13] = inst_32657);
return statearr_32730;
})();var statearr_32731_32814 = state_32719__$1;(statearr_32731_32814[2] = null);
(statearr_32731_32814[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 5))
{var inst_32594 = cljs.core.deref.call(null,cs);var inst_32595 = cljs.core.seq.call(null,inst_32594);var inst_32596 = inst_32595;var inst_32597 = null;var inst_32598 = 0;var inst_32599 = 0;var state_32719__$1 = (function (){var statearr_32732 = state_32719;(statearr_32732[14] = inst_32597);
(statearr_32732[15] = inst_32596);
(statearr_32732[16] = inst_32598);
(statearr_32732[17] = inst_32599);
return statearr_32732;
})();var statearr_32733_32815 = state_32719__$1;(statearr_32733_32815[2] = null);
(statearr_32733_32815[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 37))
{var inst_32676 = (state_32719[9]);var inst_32685 = cljs.core.first.call(null,inst_32676);var state_32719__$1 = (function (){var statearr_32734 = state_32719;(statearr_32734[18] = inst_32685);
return statearr_32734;
})();var statearr_32735_32816 = state_32719__$1;(statearr_32735_32816[2] = null);
(statearr_32735_32816[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 6))
{var inst_32647 = (state_32719[19]);var inst_32646 = cljs.core.deref.call(null,cs);var inst_32647__$1 = cljs.core.keys.call(null,inst_32646);var inst_32648 = cljs.core.count.call(null,inst_32647__$1);var inst_32649 = cljs.core.reset_BANG_.call(null,dctr,inst_32648);var inst_32654 = cljs.core.seq.call(null,inst_32647__$1);var inst_32655 = inst_32654;var inst_32656 = null;var inst_32657 = 0;var inst_32658 = 0;var state_32719__$1 = (function (){var statearr_32736 = state_32719;(statearr_32736[19] = inst_32647__$1);
(statearr_32736[20] = inst_32649);
(statearr_32736[10] = inst_32655);
(statearr_32736[11] = inst_32656);
(statearr_32736[12] = inst_32658);
(statearr_32736[13] = inst_32657);
return statearr_32736;
})();var statearr_32737_32817 = state_32719__$1;(statearr_32737_32817[2] = null);
(statearr_32737_32817[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 38))
{var inst_32698 = (state_32719[2]);var state_32719__$1 = state_32719;var statearr_32738_32818 = state_32719__$1;(statearr_32738_32818[2] = inst_32698);
(statearr_32738_32818[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 7))
{var inst_32715 = (state_32719[2]);var state_32719__$1 = state_32719;var statearr_32739_32819 = state_32719__$1;(statearr_32739_32819[2] = inst_32715);
(statearr_32739_32819[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 39))
{var inst_32676 = (state_32719[9]);var inst_32694 = (state_32719[2]);var inst_32695 = cljs.core.next.call(null,inst_32676);var inst_32655 = inst_32695;var inst_32656 = null;var inst_32657 = 0;var inst_32658 = 0;var state_32719__$1 = (function (){var statearr_32740 = state_32719;(statearr_32740[10] = inst_32655);
(statearr_32740[11] = inst_32656);
(statearr_32740[12] = inst_32658);
(statearr_32740[13] = inst_32657);
(statearr_32740[21] = inst_32694);
return statearr_32740;
})();var statearr_32741_32820 = state_32719__$1;(statearr_32741_32820[2] = null);
(statearr_32741_32820[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 8))
{var inst_32598 = (state_32719[16]);var inst_32599 = (state_32719[17]);var inst_32601 = (inst_32599 < inst_32598);var inst_32602 = inst_32601;var state_32719__$1 = state_32719;if(cljs.core.truth_(inst_32602))
{var statearr_32742_32821 = state_32719__$1;(statearr_32742_32821[1] = 10);
} else
{var statearr_32743_32822 = state_32719__$1;(statearr_32743_32822[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 40))
{var inst_32685 = (state_32719[18]);var inst_32686 = (state_32719[2]);var inst_32687 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_32688 = cljs.core.async.untap_STAR_.call(null,m,inst_32685);var state_32719__$1 = (function (){var statearr_32744 = state_32719;(statearr_32744[22] = inst_32686);
(statearr_32744[23] = inst_32687);
return statearr_32744;
})();var statearr_32745_32823 = state_32719__$1;(statearr_32745_32823[2] = inst_32688);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32719__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 9))
{var inst_32644 = (state_32719[2]);var state_32719__$1 = state_32719;var statearr_32746_32824 = state_32719__$1;(statearr_32746_32824[2] = inst_32644);
(statearr_32746_32824[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 41))
{var inst_32587 = (state_32719[7]);var inst_32685 = (state_32719[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32719,40,Object,null,39);var inst_32692 = cljs.core.async.put_BANG_.call(null,inst_32685,inst_32587,done);var state_32719__$1 = state_32719;var statearr_32747_32825 = state_32719__$1;(statearr_32747_32825[2] = inst_32692);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32719__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 10))
{var inst_32597 = (state_32719[14]);var inst_32599 = (state_32719[17]);var inst_32605 = cljs.core._nth.call(null,inst_32597,inst_32599);var inst_32606 = cljs.core.nth.call(null,inst_32605,0,null);var inst_32607 = cljs.core.nth.call(null,inst_32605,1,null);var state_32719__$1 = (function (){var statearr_32748 = state_32719;(statearr_32748[24] = inst_32606);
return statearr_32748;
})();if(cljs.core.truth_(inst_32607))
{var statearr_32749_32826 = state_32719__$1;(statearr_32749_32826[1] = 13);
} else
{var statearr_32750_32827 = state_32719__$1;(statearr_32750_32827[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 42))
{var state_32719__$1 = state_32719;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32719__$1,45,dchan);
} else
{if((state_val_32720 === 11))
{var inst_32596 = (state_32719[15]);var inst_32616 = (state_32719[25]);var inst_32616__$1 = cljs.core.seq.call(null,inst_32596);var state_32719__$1 = (function (){var statearr_32751 = state_32719;(statearr_32751[25] = inst_32616__$1);
return statearr_32751;
})();if(inst_32616__$1)
{var statearr_32752_32828 = state_32719__$1;(statearr_32752_32828[1] = 16);
} else
{var statearr_32753_32829 = state_32719__$1;(statearr_32753_32829[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 43))
{var state_32719__$1 = state_32719;var statearr_32754_32830 = state_32719__$1;(statearr_32754_32830[2] = null);
(statearr_32754_32830[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 12))
{var inst_32642 = (state_32719[2]);var state_32719__$1 = state_32719;var statearr_32755_32831 = state_32719__$1;(statearr_32755_32831[2] = inst_32642);
(statearr_32755_32831[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 44))
{var inst_32712 = (state_32719[2]);var state_32719__$1 = (function (){var statearr_32756 = state_32719;(statearr_32756[26] = inst_32712);
return statearr_32756;
})();var statearr_32757_32832 = state_32719__$1;(statearr_32757_32832[2] = null);
(statearr_32757_32832[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 13))
{var inst_32606 = (state_32719[24]);var inst_32609 = cljs.core.async.close_BANG_.call(null,inst_32606);var state_32719__$1 = state_32719;var statearr_32758_32833 = state_32719__$1;(statearr_32758_32833[2] = inst_32609);
(statearr_32758_32833[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 45))
{var inst_32709 = (state_32719[2]);var state_32719__$1 = state_32719;var statearr_32762_32834 = state_32719__$1;(statearr_32762_32834[2] = inst_32709);
(statearr_32762_32834[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 14))
{var state_32719__$1 = state_32719;var statearr_32763_32835 = state_32719__$1;(statearr_32763_32835[2] = null);
(statearr_32763_32835[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 15))
{var inst_32597 = (state_32719[14]);var inst_32596 = (state_32719[15]);var inst_32598 = (state_32719[16]);var inst_32599 = (state_32719[17]);var inst_32612 = (state_32719[2]);var inst_32613 = (inst_32599 + 1);var tmp32759 = inst_32597;var tmp32760 = inst_32596;var tmp32761 = inst_32598;var inst_32596__$1 = tmp32760;var inst_32597__$1 = tmp32759;var inst_32598__$1 = tmp32761;var inst_32599__$1 = inst_32613;var state_32719__$1 = (function (){var statearr_32764 = state_32719;(statearr_32764[14] = inst_32597__$1);
(statearr_32764[15] = inst_32596__$1);
(statearr_32764[27] = inst_32612);
(statearr_32764[16] = inst_32598__$1);
(statearr_32764[17] = inst_32599__$1);
return statearr_32764;
})();var statearr_32765_32836 = state_32719__$1;(statearr_32765_32836[2] = null);
(statearr_32765_32836[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 16))
{var inst_32616 = (state_32719[25]);var inst_32618 = cljs.core.chunked_seq_QMARK_.call(null,inst_32616);var state_32719__$1 = state_32719;if(inst_32618)
{var statearr_32766_32837 = state_32719__$1;(statearr_32766_32837[1] = 19);
} else
{var statearr_32767_32838 = state_32719__$1;(statearr_32767_32838[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 17))
{var state_32719__$1 = state_32719;var statearr_32768_32839 = state_32719__$1;(statearr_32768_32839[2] = null);
(statearr_32768_32839[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 18))
{var inst_32640 = (state_32719[2]);var state_32719__$1 = state_32719;var statearr_32769_32840 = state_32719__$1;(statearr_32769_32840[2] = inst_32640);
(statearr_32769_32840[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 19))
{var inst_32616 = (state_32719[25]);var inst_32620 = cljs.core.chunk_first.call(null,inst_32616);var inst_32621 = cljs.core.chunk_rest.call(null,inst_32616);var inst_32622 = cljs.core.count.call(null,inst_32620);var inst_32596 = inst_32621;var inst_32597 = inst_32620;var inst_32598 = inst_32622;var inst_32599 = 0;var state_32719__$1 = (function (){var statearr_32770 = state_32719;(statearr_32770[14] = inst_32597);
(statearr_32770[15] = inst_32596);
(statearr_32770[16] = inst_32598);
(statearr_32770[17] = inst_32599);
return statearr_32770;
})();var statearr_32771_32841 = state_32719__$1;(statearr_32771_32841[2] = null);
(statearr_32771_32841[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 20))
{var inst_32616 = (state_32719[25]);var inst_32626 = cljs.core.first.call(null,inst_32616);var inst_32627 = cljs.core.nth.call(null,inst_32626,0,null);var inst_32628 = cljs.core.nth.call(null,inst_32626,1,null);var state_32719__$1 = (function (){var statearr_32772 = state_32719;(statearr_32772[28] = inst_32627);
return statearr_32772;
})();if(cljs.core.truth_(inst_32628))
{var statearr_32773_32842 = state_32719__$1;(statearr_32773_32842[1] = 22);
} else
{var statearr_32774_32843 = state_32719__$1;(statearr_32774_32843[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 21))
{var inst_32637 = (state_32719[2]);var state_32719__$1 = state_32719;var statearr_32775_32844 = state_32719__$1;(statearr_32775_32844[2] = inst_32637);
(statearr_32775_32844[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 22))
{var inst_32627 = (state_32719[28]);var inst_32630 = cljs.core.async.close_BANG_.call(null,inst_32627);var state_32719__$1 = state_32719;var statearr_32776_32845 = state_32719__$1;(statearr_32776_32845[2] = inst_32630);
(statearr_32776_32845[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 23))
{var state_32719__$1 = state_32719;var statearr_32777_32846 = state_32719__$1;(statearr_32777_32846[2] = null);
(statearr_32777_32846[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 24))
{var inst_32616 = (state_32719[25]);var inst_32633 = (state_32719[2]);var inst_32634 = cljs.core.next.call(null,inst_32616);var inst_32596 = inst_32634;var inst_32597 = null;var inst_32598 = 0;var inst_32599 = 0;var state_32719__$1 = (function (){var statearr_32778 = state_32719;(statearr_32778[14] = inst_32597);
(statearr_32778[15] = inst_32596);
(statearr_32778[16] = inst_32598);
(statearr_32778[17] = inst_32599);
(statearr_32778[29] = inst_32633);
return statearr_32778;
})();var statearr_32779_32847 = state_32719__$1;(statearr_32779_32847[2] = null);
(statearr_32779_32847[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 25))
{var inst_32658 = (state_32719[12]);var inst_32657 = (state_32719[13]);var inst_32660 = (inst_32658 < inst_32657);var inst_32661 = inst_32660;var state_32719__$1 = state_32719;if(cljs.core.truth_(inst_32661))
{var statearr_32780_32848 = state_32719__$1;(statearr_32780_32848[1] = 27);
} else
{var statearr_32781_32849 = state_32719__$1;(statearr_32781_32849[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 26))
{var inst_32647 = (state_32719[19]);var inst_32705 = (state_32719[2]);var inst_32706 = cljs.core.seq.call(null,inst_32647);var state_32719__$1 = (function (){var statearr_32782 = state_32719;(statearr_32782[30] = inst_32705);
return statearr_32782;
})();if(inst_32706)
{var statearr_32783_32850 = state_32719__$1;(statearr_32783_32850[1] = 42);
} else
{var statearr_32784_32851 = state_32719__$1;(statearr_32784_32851[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 27))
{var inst_32656 = (state_32719[11]);var inst_32658 = (state_32719[12]);var inst_32663 = cljs.core._nth.call(null,inst_32656,inst_32658);var state_32719__$1 = (function (){var statearr_32785 = state_32719;(statearr_32785[8] = inst_32663);
return statearr_32785;
})();var statearr_32786_32852 = state_32719__$1;(statearr_32786_32852[2] = null);
(statearr_32786_32852[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 28))
{var inst_32655 = (state_32719[10]);var inst_32676 = (state_32719[9]);var inst_32676__$1 = cljs.core.seq.call(null,inst_32655);var state_32719__$1 = (function (){var statearr_32790 = state_32719;(statearr_32790[9] = inst_32676__$1);
return statearr_32790;
})();if(inst_32676__$1)
{var statearr_32791_32853 = state_32719__$1;(statearr_32791_32853[1] = 33);
} else
{var statearr_32792_32854 = state_32719__$1;(statearr_32792_32854[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 29))
{var inst_32703 = (state_32719[2]);var state_32719__$1 = state_32719;var statearr_32793_32855 = state_32719__$1;(statearr_32793_32855[2] = inst_32703);
(statearr_32793_32855[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 30))
{var inst_32655 = (state_32719[10]);var inst_32656 = (state_32719[11]);var inst_32658 = (state_32719[12]);var inst_32657 = (state_32719[13]);var inst_32672 = (state_32719[2]);var inst_32673 = (inst_32658 + 1);var tmp32787 = inst_32655;var tmp32788 = inst_32656;var tmp32789 = inst_32657;var inst_32655__$1 = tmp32787;var inst_32656__$1 = tmp32788;var inst_32657__$1 = tmp32789;var inst_32658__$1 = inst_32673;var state_32719__$1 = (function (){var statearr_32794 = state_32719;(statearr_32794[31] = inst_32672);
(statearr_32794[10] = inst_32655__$1);
(statearr_32794[11] = inst_32656__$1);
(statearr_32794[12] = inst_32658__$1);
(statearr_32794[13] = inst_32657__$1);
return statearr_32794;
})();var statearr_32795_32856 = state_32719__$1;(statearr_32795_32856[2] = null);
(statearr_32795_32856[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32720 === 31))
{var inst_32663 = (state_32719[8]);var inst_32664 = (state_32719[2]);var inst_32665 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_32666 = cljs.core.async.untap_STAR_.call(null,m,inst_32663);var state_32719__$1 = (function (){var statearr_32796 = state_32719;(statearr_32796[32] = inst_32664);
(statearr_32796[33] = inst_32665);
return statearr_32796;
})();var statearr_32797_32857 = state_32719__$1;(statearr_32797_32857[2] = inst_32666);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32719__$1);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_32801 = (new Array(34));(statearr_32801[0] = state_machine__17982__auto__);
(statearr_32801[1] = 1);
return statearr_32801;
});
var state_machine__17982__auto____1 = (function (state_32719){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_32719);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e32802){if((e32802 instanceof Object))
{var ex__17985__auto__ = e32802;var statearr_32803_32858 = state_32719;(statearr_32803_32858[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32719);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32859 = state_32719;
state_32719 = G__32859;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_32719){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_32719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_32804 = f__18052__auto__.call(null);(statearr_32804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___32805);
return statearr_32804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
cljs.core.async.Mix = (function (){var obj32861 = {};return obj32861;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t32971 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32971 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta32972){
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
this.meta32972 = meta32972;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32971.cljs$lang$type = true;
cljs.core.async.t32971.cljs$lang$ctorStr = "cljs.core.async/t32971";
cljs.core.async.t32971.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t32971");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32971.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t32971.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32971.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32971.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32971.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32971.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32971.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32971.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32973){var self__ = this;
var _32973__$1 = this;return self__.meta32972;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32973,meta32972__$1){var self__ = this;
var _32973__$1 = this;return (new cljs.core.async.t32971(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta32972__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t32971 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32971(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta32972){return (new cljs.core.async.t32971(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta32972));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t32971(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__18051__auto___33080 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_33038){var state_val_33039 = (state_33038[1]);if((state_val_33039 === 1))
{var inst_32977 = (state_33038[7]);var inst_32977__$1 = calc_state.call(null);var inst_32978 = cljs.core.seq_QMARK_.call(null,inst_32977__$1);var state_33038__$1 = (function (){var statearr_33040 = state_33038;(statearr_33040[7] = inst_32977__$1);
return statearr_33040;
})();if(inst_32978)
{var statearr_33041_33081 = state_33038__$1;(statearr_33041_33081[1] = 2);
} else
{var statearr_33042_33082 = state_33038__$1;(statearr_33042_33082[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33039 === 2))
{var inst_32977 = (state_33038[7]);var inst_32980 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32977);var state_33038__$1 = state_33038;var statearr_33043_33083 = state_33038__$1;(statearr_33043_33083[2] = inst_32980);
(statearr_33043_33083[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33039 === 3))
{var inst_32977 = (state_33038[7]);var state_33038__$1 = state_33038;var statearr_33044_33084 = state_33038__$1;(statearr_33044_33084[2] = inst_32977);
(statearr_33044_33084[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33039 === 4))
{var inst_32977 = (state_33038[7]);var inst_32983 = (state_33038[2]);var inst_32984 = cljs.core.get.call(null,inst_32983,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_32985 = cljs.core.get.call(null,inst_32983,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_32986 = cljs.core.get.call(null,inst_32983,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_32987 = inst_32977;var state_33038__$1 = (function (){var statearr_33045 = state_33038;(statearr_33045[8] = inst_32984);
(statearr_33045[9] = inst_32985);
(statearr_33045[10] = inst_32986);
(statearr_33045[11] = inst_32987);
return statearr_33045;
})();var statearr_33046_33085 = state_33038__$1;(statearr_33046_33085[2] = null);
(statearr_33046_33085[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33039 === 5))
{var inst_32987 = (state_33038[11]);var inst_32990 = cljs.core.seq_QMARK_.call(null,inst_32987);var state_33038__$1 = state_33038;if(inst_32990)
{var statearr_33047_33086 = state_33038__$1;(statearr_33047_33086[1] = 7);
} else
{var statearr_33048_33087 = state_33038__$1;(statearr_33048_33087[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33039 === 6))
{var inst_33036 = (state_33038[2]);var state_33038__$1 = state_33038;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33038__$1,inst_33036);
} else
{if((state_val_33039 === 7))
{var inst_32987 = (state_33038[11]);var inst_32992 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32987);var state_33038__$1 = state_33038;var statearr_33049_33088 = state_33038__$1;(statearr_33049_33088[2] = inst_32992);
(statearr_33049_33088[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33039 === 8))
{var inst_32987 = (state_33038[11]);var state_33038__$1 = state_33038;var statearr_33050_33089 = state_33038__$1;(statearr_33050_33089[2] = inst_32987);
(statearr_33050_33089[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33039 === 9))
{var inst_32995 = (state_33038[12]);var inst_32995__$1 = (state_33038[2]);var inst_32996 = cljs.core.get.call(null,inst_32995__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_32997 = cljs.core.get.call(null,inst_32995__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_32998 = cljs.core.get.call(null,inst_32995__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_33038__$1 = (function (){var statearr_33051 = state_33038;(statearr_33051[13] = inst_32998);
(statearr_33051[12] = inst_32995__$1);
(statearr_33051[14] = inst_32997);
return statearr_33051;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33038__$1,10,inst_32996);
} else
{if((state_val_33039 === 10))
{var inst_33003 = (state_33038[15]);var inst_33002 = (state_33038[16]);var inst_33001 = (state_33038[2]);var inst_33002__$1 = cljs.core.nth.call(null,inst_33001,0,null);var inst_33003__$1 = cljs.core.nth.call(null,inst_33001,1,null);var inst_33004 = (inst_33002__$1 == null);var inst_33005 = cljs.core._EQ_.call(null,inst_33003__$1,change);var inst_33006 = (inst_33004) || (inst_33005);var state_33038__$1 = (function (){var statearr_33052 = state_33038;(statearr_33052[15] = inst_33003__$1);
(statearr_33052[16] = inst_33002__$1);
return statearr_33052;
})();if(cljs.core.truth_(inst_33006))
{var statearr_33053_33090 = state_33038__$1;(statearr_33053_33090[1] = 11);
} else
{var statearr_33054_33091 = state_33038__$1;(statearr_33054_33091[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33039 === 11))
{var inst_33002 = (state_33038[16]);var inst_33008 = (inst_33002 == null);var state_33038__$1 = state_33038;if(cljs.core.truth_(inst_33008))
{var statearr_33055_33092 = state_33038__$1;(statearr_33055_33092[1] = 14);
} else
{var statearr_33056_33093 = state_33038__$1;(statearr_33056_33093[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33039 === 12))
{var inst_32998 = (state_33038[13]);var inst_33003 = (state_33038[15]);var inst_33017 = (state_33038[17]);var inst_33017__$1 = inst_32998.call(null,inst_33003);var state_33038__$1 = (function (){var statearr_33057 = state_33038;(statearr_33057[17] = inst_33017__$1);
return statearr_33057;
})();if(cljs.core.truth_(inst_33017__$1))
{var statearr_33058_33094 = state_33038__$1;(statearr_33058_33094[1] = 17);
} else
{var statearr_33059_33095 = state_33038__$1;(statearr_33059_33095[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33039 === 13))
{var inst_33034 = (state_33038[2]);var state_33038__$1 = state_33038;var statearr_33060_33096 = state_33038__$1;(statearr_33060_33096[2] = inst_33034);
(statearr_33060_33096[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33039 === 14))
{var inst_33003 = (state_33038[15]);var inst_33010 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33003);var state_33038__$1 = state_33038;var statearr_33061_33097 = state_33038__$1;(statearr_33061_33097[2] = inst_33010);
(statearr_33061_33097[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33039 === 15))
{var state_33038__$1 = state_33038;var statearr_33062_33098 = state_33038__$1;(statearr_33062_33098[2] = null);
(statearr_33062_33098[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33039 === 16))
{var inst_33013 = (state_33038[2]);var inst_33014 = calc_state.call(null);var inst_32987 = inst_33014;var state_33038__$1 = (function (){var statearr_33063 = state_33038;(statearr_33063[11] = inst_32987);
(statearr_33063[18] = inst_33013);
return statearr_33063;
})();var statearr_33064_33099 = state_33038__$1;(statearr_33064_33099[2] = null);
(statearr_33064_33099[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33039 === 17))
{var inst_33017 = (state_33038[17]);var state_33038__$1 = state_33038;var statearr_33065_33100 = state_33038__$1;(statearr_33065_33100[2] = inst_33017);
(statearr_33065_33100[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33039 === 18))
{var inst_32998 = (state_33038[13]);var inst_33003 = (state_33038[15]);var inst_32997 = (state_33038[14]);var inst_33020 = cljs.core.empty_QMARK_.call(null,inst_32998);var inst_33021 = inst_32997.call(null,inst_33003);var inst_33022 = cljs.core.not.call(null,inst_33021);var inst_33023 = (inst_33020) && (inst_33022);var state_33038__$1 = state_33038;var statearr_33066_33101 = state_33038__$1;(statearr_33066_33101[2] = inst_33023);
(statearr_33066_33101[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33039 === 19))
{var inst_33025 = (state_33038[2]);var state_33038__$1 = state_33038;if(cljs.core.truth_(inst_33025))
{var statearr_33067_33102 = state_33038__$1;(statearr_33067_33102[1] = 20);
} else
{var statearr_33068_33103 = state_33038__$1;(statearr_33068_33103[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33039 === 20))
{var inst_33002 = (state_33038[16]);var state_33038__$1 = state_33038;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33038__$1,23,out,inst_33002);
} else
{if((state_val_33039 === 21))
{var state_33038__$1 = state_33038;var statearr_33069_33104 = state_33038__$1;(statearr_33069_33104[2] = null);
(statearr_33069_33104[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33039 === 22))
{var inst_32995 = (state_33038[12]);var inst_33031 = (state_33038[2]);var inst_32987 = inst_32995;var state_33038__$1 = (function (){var statearr_33070 = state_33038;(statearr_33070[19] = inst_33031);
(statearr_33070[11] = inst_32987);
return statearr_33070;
})();var statearr_33071_33105 = state_33038__$1;(statearr_33071_33105[2] = null);
(statearr_33071_33105[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33039 === 23))
{var inst_33028 = (state_33038[2]);var state_33038__$1 = state_33038;var statearr_33072_33106 = state_33038__$1;(statearr_33072_33106[2] = inst_33028);
(statearr_33072_33106[1] = 22);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_33076 = (new Array(20));(statearr_33076[0] = state_machine__17982__auto__);
(statearr_33076[1] = 1);
return statearr_33076;
});
var state_machine__17982__auto____1 = (function (state_33038){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_33038);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e33077){if((e33077 instanceof Object))
{var ex__17985__auto__ = e33077;var statearr_33078_33107 = state_33038;(statearr_33078_33107[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33038);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33077;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33108 = state_33038;
state_33038 = G__33108;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_33038){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_33038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_33079 = f__18052__auto__.call(null);(statearr_33079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___33080);
return statearr_33079;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
cljs.core.async.Pub = (function (){var obj33110 = {};return obj33110;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__13811__auto__ = p;if(and__13811__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__13811__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__14426__auto__ = (((p == null))?null:p);return (function (){var or__13823__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__13811__auto__ = p;if(and__13811__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__13811__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__14426__auto__ = (((p == null))?null:p);return (function (){var or__13823__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__13811__auto__ = p;if(and__13811__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__13811__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__14426__auto__ = (((p == null))?null:p);return (function (){var or__13823__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__13811__auto__ = p;if(and__13811__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__13811__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__14426__auto__ = (((p == null))?null:p);return (function (){var or__13823__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
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
return (function (topic){var or__13823__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__13823__auto__,mults){
return (function (p1__33111_SHARP_){if(cljs.core.truth_(p1__33111_SHARP_.call(null,topic)))
{return p1__33111_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__33111_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13823__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t33236 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33236 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33237){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33237 = meta33237;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33236.cljs$lang$type = true;
cljs.core.async.t33236.cljs$lang$ctorStr = "cljs.core.async/t33236";
cljs.core.async.t33236.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t33236");
});})(mults,ensure_mult))
;
cljs.core.async.t33236.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t33236.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t33236.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t33236.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t33236.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t33236.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33236.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t33236.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33238){var self__ = this;
var _33238__$1 = this;return self__.meta33237;
});})(mults,ensure_mult))
;
cljs.core.async.t33236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33238,meta33237__$1){var self__ = this;
var _33238__$1 = this;return (new cljs.core.async.t33236(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33237__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t33236 = ((function (mults,ensure_mult){
return (function __GT_t33236(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33237){return (new cljs.core.async.t33236(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33237));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t33236(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__18051__auto___33360 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_33312){var state_val_33313 = (state_33312[1]);if((state_val_33313 === 1))
{var state_33312__$1 = state_33312;var statearr_33314_33361 = state_33312__$1;(statearr_33314_33361[2] = null);
(statearr_33314_33361[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33313 === 2))
{var state_33312__$1 = state_33312;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33312__$1,4,ch);
} else
{if((state_val_33313 === 3))
{var inst_33310 = (state_33312[2]);var state_33312__$1 = state_33312;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33312__$1,inst_33310);
} else
{if((state_val_33313 === 4))
{var inst_33241 = (state_33312[7]);var inst_33241__$1 = (state_33312[2]);var inst_33242 = (inst_33241__$1 == null);var state_33312__$1 = (function (){var statearr_33315 = state_33312;(statearr_33315[7] = inst_33241__$1);
return statearr_33315;
})();if(cljs.core.truth_(inst_33242))
{var statearr_33316_33362 = state_33312__$1;(statearr_33316_33362[1] = 5);
} else
{var statearr_33317_33363 = state_33312__$1;(statearr_33317_33363[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33313 === 5))
{var inst_33248 = cljs.core.deref.call(null,mults);var inst_33249 = cljs.core.vals.call(null,inst_33248);var inst_33250 = cljs.core.seq.call(null,inst_33249);var inst_33251 = inst_33250;var inst_33252 = null;var inst_33253 = 0;var inst_33254 = 0;var state_33312__$1 = (function (){var statearr_33318 = state_33312;(statearr_33318[8] = inst_33252);
(statearr_33318[9] = inst_33253);
(statearr_33318[10] = inst_33251);
(statearr_33318[11] = inst_33254);
return statearr_33318;
})();var statearr_33319_33364 = state_33312__$1;(statearr_33319_33364[2] = null);
(statearr_33319_33364[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33313 === 6))
{var inst_33289 = (state_33312[12]);var inst_33241 = (state_33312[7]);var inst_33291 = (state_33312[13]);var inst_33289__$1 = topic_fn.call(null,inst_33241);var inst_33290 = cljs.core.deref.call(null,mults);var inst_33291__$1 = cljs.core.get.call(null,inst_33290,inst_33289__$1);var state_33312__$1 = (function (){var statearr_33320 = state_33312;(statearr_33320[12] = inst_33289__$1);
(statearr_33320[13] = inst_33291__$1);
return statearr_33320;
})();if(cljs.core.truth_(inst_33291__$1))
{var statearr_33321_33365 = state_33312__$1;(statearr_33321_33365[1] = 19);
} else
{var statearr_33322_33366 = state_33312__$1;(statearr_33322_33366[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33313 === 7))
{var inst_33308 = (state_33312[2]);var state_33312__$1 = state_33312;var statearr_33323_33367 = state_33312__$1;(statearr_33323_33367[2] = inst_33308);
(statearr_33323_33367[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33313 === 8))
{var inst_33253 = (state_33312[9]);var inst_33254 = (state_33312[11]);var inst_33256 = (inst_33254 < inst_33253);var inst_33257 = inst_33256;var state_33312__$1 = state_33312;if(cljs.core.truth_(inst_33257))
{var statearr_33327_33368 = state_33312__$1;(statearr_33327_33368[1] = 10);
} else
{var statearr_33328_33369 = state_33312__$1;(statearr_33328_33369[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33313 === 9))
{var inst_33287 = (state_33312[2]);var state_33312__$1 = state_33312;var statearr_33329_33370 = state_33312__$1;(statearr_33329_33370[2] = inst_33287);
(statearr_33329_33370[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33313 === 10))
{var inst_33252 = (state_33312[8]);var inst_33253 = (state_33312[9]);var inst_33251 = (state_33312[10]);var inst_33254 = (state_33312[11]);var inst_33259 = cljs.core._nth.call(null,inst_33252,inst_33254);var inst_33260 = cljs.core.async.muxch_STAR_.call(null,inst_33259);var inst_33261 = cljs.core.async.close_BANG_.call(null,inst_33260);var inst_33262 = (inst_33254 + 1);var tmp33324 = inst_33252;var tmp33325 = inst_33253;var tmp33326 = inst_33251;var inst_33251__$1 = tmp33326;var inst_33252__$1 = tmp33324;var inst_33253__$1 = tmp33325;var inst_33254__$1 = inst_33262;var state_33312__$1 = (function (){var statearr_33330 = state_33312;(statearr_33330[8] = inst_33252__$1);
(statearr_33330[9] = inst_33253__$1);
(statearr_33330[10] = inst_33251__$1);
(statearr_33330[14] = inst_33261);
(statearr_33330[11] = inst_33254__$1);
return statearr_33330;
})();var statearr_33331_33371 = state_33312__$1;(statearr_33331_33371[2] = null);
(statearr_33331_33371[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33313 === 11))
{var inst_33251 = (state_33312[10]);var inst_33265 = (state_33312[15]);var inst_33265__$1 = cljs.core.seq.call(null,inst_33251);var state_33312__$1 = (function (){var statearr_33332 = state_33312;(statearr_33332[15] = inst_33265__$1);
return statearr_33332;
})();if(inst_33265__$1)
{var statearr_33333_33372 = state_33312__$1;(statearr_33333_33372[1] = 13);
} else
{var statearr_33334_33373 = state_33312__$1;(statearr_33334_33373[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33313 === 12))
{var inst_33285 = (state_33312[2]);var state_33312__$1 = state_33312;var statearr_33335_33374 = state_33312__$1;(statearr_33335_33374[2] = inst_33285);
(statearr_33335_33374[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33313 === 13))
{var inst_33265 = (state_33312[15]);var inst_33267 = cljs.core.chunked_seq_QMARK_.call(null,inst_33265);var state_33312__$1 = state_33312;if(inst_33267)
{var statearr_33336_33375 = state_33312__$1;(statearr_33336_33375[1] = 16);
} else
{var statearr_33337_33376 = state_33312__$1;(statearr_33337_33376[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33313 === 14))
{var state_33312__$1 = state_33312;var statearr_33338_33377 = state_33312__$1;(statearr_33338_33377[2] = null);
(statearr_33338_33377[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33313 === 15))
{var inst_33283 = (state_33312[2]);var state_33312__$1 = state_33312;var statearr_33339_33378 = state_33312__$1;(statearr_33339_33378[2] = inst_33283);
(statearr_33339_33378[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33313 === 16))
{var inst_33265 = (state_33312[15]);var inst_33269 = cljs.core.chunk_first.call(null,inst_33265);var inst_33270 = cljs.core.chunk_rest.call(null,inst_33265);var inst_33271 = cljs.core.count.call(null,inst_33269);var inst_33251 = inst_33270;var inst_33252 = inst_33269;var inst_33253 = inst_33271;var inst_33254 = 0;var state_33312__$1 = (function (){var statearr_33340 = state_33312;(statearr_33340[8] = inst_33252);
(statearr_33340[9] = inst_33253);
(statearr_33340[10] = inst_33251);
(statearr_33340[11] = inst_33254);
return statearr_33340;
})();var statearr_33341_33379 = state_33312__$1;(statearr_33341_33379[2] = null);
(statearr_33341_33379[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33313 === 17))
{var inst_33265 = (state_33312[15]);var inst_33274 = cljs.core.first.call(null,inst_33265);var inst_33275 = cljs.core.async.muxch_STAR_.call(null,inst_33274);var inst_33276 = cljs.core.async.close_BANG_.call(null,inst_33275);var inst_33277 = cljs.core.next.call(null,inst_33265);var inst_33251 = inst_33277;var inst_33252 = null;var inst_33253 = 0;var inst_33254 = 0;var state_33312__$1 = (function (){var statearr_33342 = state_33312;(statearr_33342[16] = inst_33276);
(statearr_33342[8] = inst_33252);
(statearr_33342[9] = inst_33253);
(statearr_33342[10] = inst_33251);
(statearr_33342[11] = inst_33254);
return statearr_33342;
})();var statearr_33343_33380 = state_33312__$1;(statearr_33343_33380[2] = null);
(statearr_33343_33380[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33313 === 18))
{var inst_33280 = (state_33312[2]);var state_33312__$1 = state_33312;var statearr_33344_33381 = state_33312__$1;(statearr_33344_33381[2] = inst_33280);
(statearr_33344_33381[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33313 === 19))
{var state_33312__$1 = state_33312;var statearr_33345_33382 = state_33312__$1;(statearr_33345_33382[2] = null);
(statearr_33345_33382[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33313 === 20))
{var state_33312__$1 = state_33312;var statearr_33346_33383 = state_33312__$1;(statearr_33346_33383[2] = null);
(statearr_33346_33383[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33313 === 21))
{var inst_33305 = (state_33312[2]);var state_33312__$1 = (function (){var statearr_33347 = state_33312;(statearr_33347[17] = inst_33305);
return statearr_33347;
})();var statearr_33348_33384 = state_33312__$1;(statearr_33348_33384[2] = null);
(statearr_33348_33384[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33313 === 22))
{var inst_33302 = (state_33312[2]);var state_33312__$1 = state_33312;var statearr_33349_33385 = state_33312__$1;(statearr_33349_33385[2] = inst_33302);
(statearr_33349_33385[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33313 === 23))
{var inst_33289 = (state_33312[12]);var inst_33293 = (state_33312[2]);var inst_33294 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33289);var state_33312__$1 = (function (){var statearr_33350 = state_33312;(statearr_33350[18] = inst_33293);
return statearr_33350;
})();var statearr_33351_33386 = state_33312__$1;(statearr_33351_33386[2] = inst_33294);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33312__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33313 === 24))
{var inst_33241 = (state_33312[7]);var inst_33291 = (state_33312[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33312,23,Object,null,22);var inst_33298 = cljs.core.async.muxch_STAR_.call(null,inst_33291);var state_33312__$1 = state_33312;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33312__$1,25,inst_33298,inst_33241);
} else
{if((state_val_33313 === 25))
{var inst_33300 = (state_33312[2]);var state_33312__$1 = state_33312;var statearr_33352_33387 = state_33312__$1;(statearr_33352_33387[2] = inst_33300);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33312__$1);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_33356 = (new Array(19));(statearr_33356[0] = state_machine__17982__auto__);
(statearr_33356[1] = 1);
return statearr_33356;
});
var state_machine__17982__auto____1 = (function (state_33312){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_33312);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e33357){if((e33357 instanceof Object))
{var ex__17985__auto__ = e33357;var statearr_33358_33388 = state_33312;(statearr_33358_33388[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33312);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33357;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33389 = state_33312;
state_33312 = G__33389;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_33312){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_33312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_33359 = f__18052__auto__.call(null);(statearr_33359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___33360);
return statearr_33359;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
,cljs.core.range.call(null,cnt));var c__18051__auto___33526 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_33496){var state_val_33497 = (state_33496[1]);if((state_val_33497 === 1))
{var state_33496__$1 = state_33496;var statearr_33498_33527 = state_33496__$1;(statearr_33498_33527[2] = null);
(statearr_33498_33527[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33497 === 2))
{var inst_33459 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_33460 = 0;var state_33496__$1 = (function (){var statearr_33499 = state_33496;(statearr_33499[7] = inst_33459);
(statearr_33499[8] = inst_33460);
return statearr_33499;
})();var statearr_33500_33528 = state_33496__$1;(statearr_33500_33528[2] = null);
(statearr_33500_33528[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33497 === 3))
{var inst_33494 = (state_33496[2]);var state_33496__$1 = state_33496;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33496__$1,inst_33494);
} else
{if((state_val_33497 === 4))
{var inst_33460 = (state_33496[8]);var inst_33462 = (inst_33460 < cnt);var state_33496__$1 = state_33496;if(cljs.core.truth_(inst_33462))
{var statearr_33501_33529 = state_33496__$1;(statearr_33501_33529[1] = 6);
} else
{var statearr_33502_33530 = state_33496__$1;(statearr_33502_33530[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33497 === 5))
{var inst_33480 = (state_33496[2]);var state_33496__$1 = (function (){var statearr_33503 = state_33496;(statearr_33503[9] = inst_33480);
return statearr_33503;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33496__$1,12,dchan);
} else
{if((state_val_33497 === 6))
{var state_33496__$1 = state_33496;var statearr_33504_33531 = state_33496__$1;(statearr_33504_33531[2] = null);
(statearr_33504_33531[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33497 === 7))
{var state_33496__$1 = state_33496;var statearr_33505_33532 = state_33496__$1;(statearr_33505_33532[2] = null);
(statearr_33505_33532[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33497 === 8))
{var inst_33478 = (state_33496[2]);var state_33496__$1 = state_33496;var statearr_33506_33533 = state_33496__$1;(statearr_33506_33533[2] = inst_33478);
(statearr_33506_33533[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33497 === 9))
{var inst_33460 = (state_33496[8]);var inst_33473 = (state_33496[2]);var inst_33474 = (inst_33460 + 1);var inst_33460__$1 = inst_33474;var state_33496__$1 = (function (){var statearr_33507 = state_33496;(statearr_33507[10] = inst_33473);
(statearr_33507[8] = inst_33460__$1);
return statearr_33507;
})();var statearr_33508_33534 = state_33496__$1;(statearr_33508_33534[2] = null);
(statearr_33508_33534[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33497 === 10))
{var inst_33464 = (state_33496[2]);var inst_33465 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_33496__$1 = (function (){var statearr_33509 = state_33496;(statearr_33509[11] = inst_33464);
return statearr_33509;
})();var statearr_33510_33535 = state_33496__$1;(statearr_33510_33535[2] = inst_33465);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33496__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33497 === 11))
{var inst_33460 = (state_33496[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33496,10,Object,null,9);var inst_33469 = chs__$1.call(null,inst_33460);var inst_33470 = done.call(null,inst_33460);var inst_33471 = cljs.core.async.take_BANG_.call(null,inst_33469,inst_33470);var state_33496__$1 = state_33496;var statearr_33511_33536 = state_33496__$1;(statearr_33511_33536[2] = inst_33471);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33496__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33497 === 12))
{var inst_33482 = (state_33496[12]);var inst_33482__$1 = (state_33496[2]);var inst_33483 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33482__$1);var state_33496__$1 = (function (){var statearr_33512 = state_33496;(statearr_33512[12] = inst_33482__$1);
return statearr_33512;
})();if(cljs.core.truth_(inst_33483))
{var statearr_33513_33537 = state_33496__$1;(statearr_33513_33537[1] = 13);
} else
{var statearr_33514_33538 = state_33496__$1;(statearr_33514_33538[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33497 === 13))
{var inst_33485 = cljs.core.async.close_BANG_.call(null,out);var state_33496__$1 = state_33496;var statearr_33515_33539 = state_33496__$1;(statearr_33515_33539[2] = inst_33485);
(statearr_33515_33539[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33497 === 14))
{var inst_33482 = (state_33496[12]);var inst_33487 = cljs.core.apply.call(null,f,inst_33482);var state_33496__$1 = state_33496;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33496__$1,16,out,inst_33487);
} else
{if((state_val_33497 === 15))
{var inst_33492 = (state_33496[2]);var state_33496__$1 = state_33496;var statearr_33516_33540 = state_33496__$1;(statearr_33516_33540[2] = inst_33492);
(statearr_33516_33540[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33497 === 16))
{var inst_33489 = (state_33496[2]);var state_33496__$1 = (function (){var statearr_33517 = state_33496;(statearr_33517[13] = inst_33489);
return statearr_33517;
})();var statearr_33518_33541 = state_33496__$1;(statearr_33518_33541[2] = null);
(statearr_33518_33541[1] = 2);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_33522 = (new Array(14));(statearr_33522[0] = state_machine__17982__auto__);
(statearr_33522[1] = 1);
return statearr_33522;
});
var state_machine__17982__auto____1 = (function (state_33496){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_33496);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e33523){if((e33523 instanceof Object))
{var ex__17985__auto__ = e33523;var statearr_33524_33542 = state_33496;(statearr_33524_33542[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33496);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33523;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33543 = state_33496;
state_33496 = G__33543;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_33496){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_33496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_33525 = f__18052__auto__.call(null);(statearr_33525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___33526);
return statearr_33525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___33651 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_33627){var state_val_33628 = (state_33627[1]);if((state_val_33628 === 1))
{var inst_33598 = cljs.core.vec.call(null,chs);var inst_33599 = inst_33598;var state_33627__$1 = (function (){var statearr_33629 = state_33627;(statearr_33629[7] = inst_33599);
return statearr_33629;
})();var statearr_33630_33652 = state_33627__$1;(statearr_33630_33652[2] = null);
(statearr_33630_33652[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33628 === 2))
{var inst_33599 = (state_33627[7]);var inst_33601 = cljs.core.count.call(null,inst_33599);var inst_33602 = (inst_33601 > 0);var state_33627__$1 = state_33627;if(cljs.core.truth_(inst_33602))
{var statearr_33631_33653 = state_33627__$1;(statearr_33631_33653[1] = 4);
} else
{var statearr_33632_33654 = state_33627__$1;(statearr_33632_33654[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33628 === 3))
{var inst_33625 = (state_33627[2]);var state_33627__$1 = state_33627;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33627__$1,inst_33625);
} else
{if((state_val_33628 === 4))
{var inst_33599 = (state_33627[7]);var state_33627__$1 = state_33627;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33627__$1,7,inst_33599);
} else
{if((state_val_33628 === 5))
{var inst_33621 = cljs.core.async.close_BANG_.call(null,out);var state_33627__$1 = state_33627;var statearr_33633_33655 = state_33627__$1;(statearr_33633_33655[2] = inst_33621);
(statearr_33633_33655[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33628 === 6))
{var inst_33623 = (state_33627[2]);var state_33627__$1 = state_33627;var statearr_33634_33656 = state_33627__$1;(statearr_33634_33656[2] = inst_33623);
(statearr_33634_33656[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33628 === 7))
{var inst_33606 = (state_33627[8]);var inst_33607 = (state_33627[9]);var inst_33606__$1 = (state_33627[2]);var inst_33607__$1 = cljs.core.nth.call(null,inst_33606__$1,0,null);var inst_33608 = cljs.core.nth.call(null,inst_33606__$1,1,null);var inst_33609 = (inst_33607__$1 == null);var state_33627__$1 = (function (){var statearr_33635 = state_33627;(statearr_33635[8] = inst_33606__$1);
(statearr_33635[9] = inst_33607__$1);
(statearr_33635[10] = inst_33608);
return statearr_33635;
})();if(cljs.core.truth_(inst_33609))
{var statearr_33636_33657 = state_33627__$1;(statearr_33636_33657[1] = 8);
} else
{var statearr_33637_33658 = state_33627__$1;(statearr_33637_33658[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33628 === 8))
{var inst_33606 = (state_33627[8]);var inst_33599 = (state_33627[7]);var inst_33607 = (state_33627[9]);var inst_33608 = (state_33627[10]);var inst_33611 = (function (){var c = inst_33608;var v = inst_33607;var vec__33604 = inst_33606;var cs = inst_33599;return ((function (c,v,vec__33604,cs,inst_33606,inst_33599,inst_33607,inst_33608,state_val_33628){
return (function (p1__33544_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__33544_SHARP_);
});
;})(c,v,vec__33604,cs,inst_33606,inst_33599,inst_33607,inst_33608,state_val_33628))
})();var inst_33612 = cljs.core.filterv.call(null,inst_33611,inst_33599);var inst_33599__$1 = inst_33612;var state_33627__$1 = (function (){var statearr_33638 = state_33627;(statearr_33638[7] = inst_33599__$1);
return statearr_33638;
})();var statearr_33639_33659 = state_33627__$1;(statearr_33639_33659[2] = null);
(statearr_33639_33659[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33628 === 9))
{var inst_33607 = (state_33627[9]);var state_33627__$1 = state_33627;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33627__$1,11,out,inst_33607);
} else
{if((state_val_33628 === 10))
{var inst_33619 = (state_33627[2]);var state_33627__$1 = state_33627;var statearr_33641_33660 = state_33627__$1;(statearr_33641_33660[2] = inst_33619);
(statearr_33641_33660[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33628 === 11))
{var inst_33599 = (state_33627[7]);var inst_33616 = (state_33627[2]);var tmp33640 = inst_33599;var inst_33599__$1 = tmp33640;var state_33627__$1 = (function (){var statearr_33642 = state_33627;(statearr_33642[7] = inst_33599__$1);
(statearr_33642[11] = inst_33616);
return statearr_33642;
})();var statearr_33643_33661 = state_33627__$1;(statearr_33643_33661[2] = null);
(statearr_33643_33661[1] = 2);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_33647 = (new Array(12));(statearr_33647[0] = state_machine__17982__auto__);
(statearr_33647[1] = 1);
return statearr_33647;
});
var state_machine__17982__auto____1 = (function (state_33627){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_33627);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e33648){if((e33648 instanceof Object))
{var ex__17985__auto__ = e33648;var statearr_33649_33662 = state_33627;(statearr_33649_33662[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33627);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33648;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33663 = state_33627;
state_33627 = G__33663;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_33627){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_33627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_33650 = f__18052__auto__.call(null);(statearr_33650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___33651);
return statearr_33650;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___33756 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_33733){var state_val_33734 = (state_33733[1]);if((state_val_33734 === 1))
{var inst_33710 = 0;var state_33733__$1 = (function (){var statearr_33735 = state_33733;(statearr_33735[7] = inst_33710);
return statearr_33735;
})();var statearr_33736_33757 = state_33733__$1;(statearr_33736_33757[2] = null);
(statearr_33736_33757[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33734 === 2))
{var inst_33710 = (state_33733[7]);var inst_33712 = (inst_33710 < n);var state_33733__$1 = state_33733;if(cljs.core.truth_(inst_33712))
{var statearr_33737_33758 = state_33733__$1;(statearr_33737_33758[1] = 4);
} else
{var statearr_33738_33759 = state_33733__$1;(statearr_33738_33759[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33734 === 3))
{var inst_33730 = (state_33733[2]);var inst_33731 = cljs.core.async.close_BANG_.call(null,out);var state_33733__$1 = (function (){var statearr_33739 = state_33733;(statearr_33739[8] = inst_33730);
return statearr_33739;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33733__$1,inst_33731);
} else
{if((state_val_33734 === 4))
{var state_33733__$1 = state_33733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33733__$1,7,ch);
} else
{if((state_val_33734 === 5))
{var state_33733__$1 = state_33733;var statearr_33740_33760 = state_33733__$1;(statearr_33740_33760[2] = null);
(statearr_33740_33760[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33734 === 6))
{var inst_33728 = (state_33733[2]);var state_33733__$1 = state_33733;var statearr_33741_33761 = state_33733__$1;(statearr_33741_33761[2] = inst_33728);
(statearr_33741_33761[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33734 === 7))
{var inst_33715 = (state_33733[9]);var inst_33715__$1 = (state_33733[2]);var inst_33716 = (inst_33715__$1 == null);var inst_33717 = cljs.core.not.call(null,inst_33716);var state_33733__$1 = (function (){var statearr_33742 = state_33733;(statearr_33742[9] = inst_33715__$1);
return statearr_33742;
})();if(inst_33717)
{var statearr_33743_33762 = state_33733__$1;(statearr_33743_33762[1] = 8);
} else
{var statearr_33744_33763 = state_33733__$1;(statearr_33744_33763[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33734 === 8))
{var inst_33715 = (state_33733[9]);var state_33733__$1 = state_33733;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33733__$1,11,out,inst_33715);
} else
{if((state_val_33734 === 9))
{var state_33733__$1 = state_33733;var statearr_33745_33764 = state_33733__$1;(statearr_33745_33764[2] = null);
(statearr_33745_33764[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33734 === 10))
{var inst_33725 = (state_33733[2]);var state_33733__$1 = state_33733;var statearr_33746_33765 = state_33733__$1;(statearr_33746_33765[2] = inst_33725);
(statearr_33746_33765[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33734 === 11))
{var inst_33710 = (state_33733[7]);var inst_33720 = (state_33733[2]);var inst_33721 = (inst_33710 + 1);var inst_33710__$1 = inst_33721;var state_33733__$1 = (function (){var statearr_33747 = state_33733;(statearr_33747[7] = inst_33710__$1);
(statearr_33747[10] = inst_33720);
return statearr_33747;
})();var statearr_33748_33766 = state_33733__$1;(statearr_33748_33766[2] = null);
(statearr_33748_33766[1] = 2);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_33752 = (new Array(11));(statearr_33752[0] = state_machine__17982__auto__);
(statearr_33752[1] = 1);
return statearr_33752;
});
var state_machine__17982__auto____1 = (function (state_33733){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_33733);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e33753){if((e33753 instanceof Object))
{var ex__17985__auto__ = e33753;var statearr_33754_33767 = state_33733;(statearr_33754_33767[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33733);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33753;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33768 = state_33733;
state_33733 = G__33768;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_33733){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_33733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_33755 = f__18052__auto__.call(null);(statearr_33755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___33756);
return statearr_33755;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___33865 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_33840){var state_val_33841 = (state_33840[1]);if((state_val_33841 === 1))
{var inst_33817 = null;var state_33840__$1 = (function (){var statearr_33842 = state_33840;(statearr_33842[7] = inst_33817);
return statearr_33842;
})();var statearr_33843_33866 = state_33840__$1;(statearr_33843_33866[2] = null);
(statearr_33843_33866[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33841 === 2))
{var state_33840__$1 = state_33840;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33840__$1,4,ch);
} else
{if((state_val_33841 === 3))
{var inst_33837 = (state_33840[2]);var inst_33838 = cljs.core.async.close_BANG_.call(null,out);var state_33840__$1 = (function (){var statearr_33844 = state_33840;(statearr_33844[8] = inst_33837);
return statearr_33844;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33840__$1,inst_33838);
} else
{if((state_val_33841 === 4))
{var inst_33820 = (state_33840[9]);var inst_33820__$1 = (state_33840[2]);var inst_33821 = (inst_33820__$1 == null);var inst_33822 = cljs.core.not.call(null,inst_33821);var state_33840__$1 = (function (){var statearr_33845 = state_33840;(statearr_33845[9] = inst_33820__$1);
return statearr_33845;
})();if(inst_33822)
{var statearr_33846_33867 = state_33840__$1;(statearr_33846_33867[1] = 5);
} else
{var statearr_33847_33868 = state_33840__$1;(statearr_33847_33868[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33841 === 5))
{var inst_33820 = (state_33840[9]);var inst_33817 = (state_33840[7]);var inst_33824 = cljs.core._EQ_.call(null,inst_33820,inst_33817);var state_33840__$1 = state_33840;if(inst_33824)
{var statearr_33848_33869 = state_33840__$1;(statearr_33848_33869[1] = 8);
} else
{var statearr_33849_33870 = state_33840__$1;(statearr_33849_33870[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33841 === 6))
{var state_33840__$1 = state_33840;var statearr_33851_33871 = state_33840__$1;(statearr_33851_33871[2] = null);
(statearr_33851_33871[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33841 === 7))
{var inst_33835 = (state_33840[2]);var state_33840__$1 = state_33840;var statearr_33852_33872 = state_33840__$1;(statearr_33852_33872[2] = inst_33835);
(statearr_33852_33872[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33841 === 8))
{var inst_33817 = (state_33840[7]);var tmp33850 = inst_33817;var inst_33817__$1 = tmp33850;var state_33840__$1 = (function (){var statearr_33853 = state_33840;(statearr_33853[7] = inst_33817__$1);
return statearr_33853;
})();var statearr_33854_33873 = state_33840__$1;(statearr_33854_33873[2] = null);
(statearr_33854_33873[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33841 === 9))
{var inst_33820 = (state_33840[9]);var state_33840__$1 = state_33840;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33840__$1,11,out,inst_33820);
} else
{if((state_val_33841 === 10))
{var inst_33832 = (state_33840[2]);var state_33840__$1 = state_33840;var statearr_33855_33874 = state_33840__$1;(statearr_33855_33874[2] = inst_33832);
(statearr_33855_33874[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33841 === 11))
{var inst_33820 = (state_33840[9]);var inst_33829 = (state_33840[2]);var inst_33817 = inst_33820;var state_33840__$1 = (function (){var statearr_33856 = state_33840;(statearr_33856[7] = inst_33817);
(statearr_33856[10] = inst_33829);
return statearr_33856;
})();var statearr_33857_33875 = state_33840__$1;(statearr_33857_33875[2] = null);
(statearr_33857_33875[1] = 2);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_33861 = (new Array(11));(statearr_33861[0] = state_machine__17982__auto__);
(statearr_33861[1] = 1);
return statearr_33861;
});
var state_machine__17982__auto____1 = (function (state_33840){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_33840);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e33862){if((e33862 instanceof Object))
{var ex__17985__auto__ = e33862;var statearr_33863_33876 = state_33840;(statearr_33863_33876[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33840);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33862;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33877 = state_33840;
state_33840 = G__33877;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_33840){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_33840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_33864 = f__18052__auto__.call(null);(statearr_33864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___33865);
return statearr_33864;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___34012 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_33982){var state_val_33983 = (state_33982[1]);if((state_val_33983 === 1))
{var inst_33945 = (new Array(n));var inst_33946 = inst_33945;var inst_33947 = 0;var state_33982__$1 = (function (){var statearr_33984 = state_33982;(statearr_33984[7] = inst_33947);
(statearr_33984[8] = inst_33946);
return statearr_33984;
})();var statearr_33985_34013 = state_33982__$1;(statearr_33985_34013[2] = null);
(statearr_33985_34013[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33983 === 2))
{var state_33982__$1 = state_33982;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33982__$1,4,ch);
} else
{if((state_val_33983 === 3))
{var inst_33980 = (state_33982[2]);var state_33982__$1 = state_33982;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33982__$1,inst_33980);
} else
{if((state_val_33983 === 4))
{var inst_33950 = (state_33982[9]);var inst_33950__$1 = (state_33982[2]);var inst_33951 = (inst_33950__$1 == null);var inst_33952 = cljs.core.not.call(null,inst_33951);var state_33982__$1 = (function (){var statearr_33986 = state_33982;(statearr_33986[9] = inst_33950__$1);
return statearr_33986;
})();if(inst_33952)
{var statearr_33987_34014 = state_33982__$1;(statearr_33987_34014[1] = 5);
} else
{var statearr_33988_34015 = state_33982__$1;(statearr_33988_34015[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33983 === 5))
{var inst_33950 = (state_33982[9]);var inst_33947 = (state_33982[7]);var inst_33946 = (state_33982[8]);var inst_33955 = (state_33982[10]);var inst_33954 = (inst_33946[inst_33947] = inst_33950);var inst_33955__$1 = (inst_33947 + 1);var inst_33956 = (inst_33955__$1 < n);var state_33982__$1 = (function (){var statearr_33989 = state_33982;(statearr_33989[11] = inst_33954);
(statearr_33989[10] = inst_33955__$1);
return statearr_33989;
})();if(cljs.core.truth_(inst_33956))
{var statearr_33990_34016 = state_33982__$1;(statearr_33990_34016[1] = 8);
} else
{var statearr_33991_34017 = state_33982__$1;(statearr_33991_34017[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33983 === 6))
{var inst_33947 = (state_33982[7]);var inst_33968 = (inst_33947 > 0);var state_33982__$1 = state_33982;if(cljs.core.truth_(inst_33968))
{var statearr_33993_34018 = state_33982__$1;(statearr_33993_34018[1] = 12);
} else
{var statearr_33994_34019 = state_33982__$1;(statearr_33994_34019[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33983 === 7))
{var inst_33978 = (state_33982[2]);var state_33982__$1 = state_33982;var statearr_33995_34020 = state_33982__$1;(statearr_33995_34020[2] = inst_33978);
(statearr_33995_34020[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33983 === 8))
{var inst_33946 = (state_33982[8]);var inst_33955 = (state_33982[10]);var tmp33992 = inst_33946;var inst_33946__$1 = tmp33992;var inst_33947 = inst_33955;var state_33982__$1 = (function (){var statearr_33996 = state_33982;(statearr_33996[7] = inst_33947);
(statearr_33996[8] = inst_33946__$1);
return statearr_33996;
})();var statearr_33997_34021 = state_33982__$1;(statearr_33997_34021[2] = null);
(statearr_33997_34021[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33983 === 9))
{var inst_33946 = (state_33982[8]);var inst_33960 = cljs.core.vec.call(null,inst_33946);var state_33982__$1 = state_33982;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33982__$1,11,out,inst_33960);
} else
{if((state_val_33983 === 10))
{var inst_33966 = (state_33982[2]);var state_33982__$1 = state_33982;var statearr_33998_34022 = state_33982__$1;(statearr_33998_34022[2] = inst_33966);
(statearr_33998_34022[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33983 === 11))
{var inst_33962 = (state_33982[2]);var inst_33963 = (new Array(n));var inst_33946 = inst_33963;var inst_33947 = 0;var state_33982__$1 = (function (){var statearr_33999 = state_33982;(statearr_33999[7] = inst_33947);
(statearr_33999[8] = inst_33946);
(statearr_33999[12] = inst_33962);
return statearr_33999;
})();var statearr_34000_34023 = state_33982__$1;(statearr_34000_34023[2] = null);
(statearr_34000_34023[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33983 === 12))
{var inst_33946 = (state_33982[8]);var inst_33970 = cljs.core.vec.call(null,inst_33946);var state_33982__$1 = state_33982;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33982__$1,15,out,inst_33970);
} else
{if((state_val_33983 === 13))
{var state_33982__$1 = state_33982;var statearr_34001_34024 = state_33982__$1;(statearr_34001_34024[2] = null);
(statearr_34001_34024[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33983 === 14))
{var inst_33975 = (state_33982[2]);var inst_33976 = cljs.core.async.close_BANG_.call(null,out);var state_33982__$1 = (function (){var statearr_34002 = state_33982;(statearr_34002[13] = inst_33975);
return statearr_34002;
})();var statearr_34003_34025 = state_33982__$1;(statearr_34003_34025[2] = inst_33976);
(statearr_34003_34025[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33983 === 15))
{var inst_33972 = (state_33982[2]);var state_33982__$1 = state_33982;var statearr_34004_34026 = state_33982__$1;(statearr_34004_34026[2] = inst_33972);
(statearr_34004_34026[1] = 14);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_34008 = (new Array(14));(statearr_34008[0] = state_machine__17982__auto__);
(statearr_34008[1] = 1);
return statearr_34008;
});
var state_machine__17982__auto____1 = (function (state_33982){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_33982);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e34009){if((e34009 instanceof Object))
{var ex__17985__auto__ = e34009;var statearr_34010_34027 = state_33982;(statearr_34010_34027[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33982);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34009;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34028 = state_33982;
state_33982 = G__34028;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_33982){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_33982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_34011 = f__18052__auto__.call(null);(statearr_34011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___34012);
return statearr_34011;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___34171 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_34141){var state_val_34142 = (state_34141[1]);if((state_val_34142 === 1))
{var inst_34100 = (new Array(0));var inst_34101 = inst_34100;var inst_34102 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_34141__$1 = (function (){var statearr_34143 = state_34141;(statearr_34143[7] = inst_34102);
(statearr_34143[8] = inst_34101);
return statearr_34143;
})();var statearr_34144_34172 = state_34141__$1;(statearr_34144_34172[2] = null);
(statearr_34144_34172[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34142 === 2))
{var state_34141__$1 = state_34141;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34141__$1,4,ch);
} else
{if((state_val_34142 === 3))
{var inst_34139 = (state_34141[2]);var state_34141__$1 = state_34141;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34141__$1,inst_34139);
} else
{if((state_val_34142 === 4))
{var inst_34105 = (state_34141[9]);var inst_34105__$1 = (state_34141[2]);var inst_34106 = (inst_34105__$1 == null);var inst_34107 = cljs.core.not.call(null,inst_34106);var state_34141__$1 = (function (){var statearr_34145 = state_34141;(statearr_34145[9] = inst_34105__$1);
return statearr_34145;
})();if(inst_34107)
{var statearr_34146_34173 = state_34141__$1;(statearr_34146_34173[1] = 5);
} else
{var statearr_34147_34174 = state_34141__$1;(statearr_34147_34174[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34142 === 5))
{var inst_34109 = (state_34141[10]);var inst_34105 = (state_34141[9]);var inst_34102 = (state_34141[7]);var inst_34109__$1 = f.call(null,inst_34105);var inst_34110 = cljs.core._EQ_.call(null,inst_34109__$1,inst_34102);var inst_34111 = cljs.core.keyword_identical_QMARK_.call(null,inst_34102,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_34112 = (inst_34110) || (inst_34111);var state_34141__$1 = (function (){var statearr_34148 = state_34141;(statearr_34148[10] = inst_34109__$1);
return statearr_34148;
})();if(cljs.core.truth_(inst_34112))
{var statearr_34149_34175 = state_34141__$1;(statearr_34149_34175[1] = 8);
} else
{var statearr_34150_34176 = state_34141__$1;(statearr_34150_34176[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34142 === 6))
{var inst_34101 = (state_34141[8]);var inst_34126 = inst_34101.length;var inst_34127 = (inst_34126 > 0);var state_34141__$1 = state_34141;if(cljs.core.truth_(inst_34127))
{var statearr_34152_34177 = state_34141__$1;(statearr_34152_34177[1] = 12);
} else
{var statearr_34153_34178 = state_34141__$1;(statearr_34153_34178[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34142 === 7))
{var inst_34137 = (state_34141[2]);var state_34141__$1 = state_34141;var statearr_34154_34179 = state_34141__$1;(statearr_34154_34179[2] = inst_34137);
(statearr_34154_34179[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34142 === 8))
{var inst_34109 = (state_34141[10]);var inst_34105 = (state_34141[9]);var inst_34101 = (state_34141[8]);var inst_34114 = inst_34101.push(inst_34105);var tmp34151 = inst_34101;var inst_34101__$1 = tmp34151;var inst_34102 = inst_34109;var state_34141__$1 = (function (){var statearr_34155 = state_34141;(statearr_34155[11] = inst_34114);
(statearr_34155[7] = inst_34102);
(statearr_34155[8] = inst_34101__$1);
return statearr_34155;
})();var statearr_34156_34180 = state_34141__$1;(statearr_34156_34180[2] = null);
(statearr_34156_34180[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34142 === 9))
{var inst_34101 = (state_34141[8]);var inst_34117 = cljs.core.vec.call(null,inst_34101);var state_34141__$1 = state_34141;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34141__$1,11,out,inst_34117);
} else
{if((state_val_34142 === 10))
{var inst_34124 = (state_34141[2]);var state_34141__$1 = state_34141;var statearr_34157_34181 = state_34141__$1;(statearr_34157_34181[2] = inst_34124);
(statearr_34157_34181[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34142 === 11))
{var inst_34109 = (state_34141[10]);var inst_34105 = (state_34141[9]);var inst_34119 = (state_34141[2]);var inst_34120 = (new Array(0));var inst_34121 = inst_34120.push(inst_34105);var inst_34101 = inst_34120;var inst_34102 = inst_34109;var state_34141__$1 = (function (){var statearr_34158 = state_34141;(statearr_34158[12] = inst_34121);
(statearr_34158[13] = inst_34119);
(statearr_34158[7] = inst_34102);
(statearr_34158[8] = inst_34101);
return statearr_34158;
})();var statearr_34159_34182 = state_34141__$1;(statearr_34159_34182[2] = null);
(statearr_34159_34182[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34142 === 12))
{var inst_34101 = (state_34141[8]);var inst_34129 = cljs.core.vec.call(null,inst_34101);var state_34141__$1 = state_34141;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34141__$1,15,out,inst_34129);
} else
{if((state_val_34142 === 13))
{var state_34141__$1 = state_34141;var statearr_34160_34183 = state_34141__$1;(statearr_34160_34183[2] = null);
(statearr_34160_34183[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34142 === 14))
{var inst_34134 = (state_34141[2]);var inst_34135 = cljs.core.async.close_BANG_.call(null,out);var state_34141__$1 = (function (){var statearr_34161 = state_34141;(statearr_34161[14] = inst_34134);
return statearr_34161;
})();var statearr_34162_34184 = state_34141__$1;(statearr_34162_34184[2] = inst_34135);
(statearr_34162_34184[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34142 === 15))
{var inst_34131 = (state_34141[2]);var state_34141__$1 = state_34141;var statearr_34163_34185 = state_34141__$1;(statearr_34163_34185[2] = inst_34131);
(statearr_34163_34185[1] = 14);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_34167 = (new Array(15));(statearr_34167[0] = state_machine__17982__auto__);
(statearr_34167[1] = 1);
return statearr_34167;
});
var state_machine__17982__auto____1 = (function (state_34141){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_34141);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e34168){if((e34168 instanceof Object))
{var ex__17985__auto__ = e34168;var statearr_34169_34186 = state_34141;(statearr_34169_34186[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34141);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34168;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34187 = state_34141;
state_34141 = G__34187;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_34141){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_34141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_34170 = f__18052__auto__.call(null);(statearr_34170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___34171);
return statearr_34170;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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