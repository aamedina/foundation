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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t55135 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t55135 = (function (f,fn_handler,meta55136){
this.f = f;
this.fn_handler = fn_handler;
this.meta55136 = meta55136;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t55135.cljs$lang$type = true;
cljs.core.async.t55135.cljs$lang$ctorStr = "cljs.core.async/t55135";
cljs.core.async.t55135.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t55135");
});
cljs.core.async.t55135.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t55135.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t55135.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t55135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55137){var self__ = this;
var _55137__$1 = this;return self__.meta55136;
});
cljs.core.async.t55135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55137,meta55136__$1){var self__ = this;
var _55137__$1 = this;return (new cljs.core.async.t55135(self__.f,self__.fn_handler,meta55136__$1));
});
cljs.core.async.__GT_t55135 = (function __GT_t55135(f__$1,fn_handler__$1,meta55136){return (new cljs.core.async.t55135(f__$1,fn_handler__$1,meta55136));
});
}
return (new cljs.core.async.t55135(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__55139 = buff;if(G__55139)
{var bit__6915__auto__ = null;if(cljs.core.truth_((function (){var or__6289__auto__ = bit__6915__auto__;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return G__55139.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__55139.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__55139);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__55139);
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
{var val_55140 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_55140);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_55140);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7112__auto___55141 = n;var x_55142 = 0;while(true){
if((x_55142 < n__7112__auto___55141))
{(a[x_55142] = 0);
{
var G__55143 = (x_55142 + 1);
x_55142 = G__55143;
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
var G__55144 = (i + 1);
i = G__55144;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t55148 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t55148 = (function (flag,alt_flag,meta55149){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta55149 = meta55149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t55148.cljs$lang$type = true;
cljs.core.async.t55148.cljs$lang$ctorStr = "cljs.core.async/t55148";
cljs.core.async.t55148.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t55148");
});
cljs.core.async.t55148.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t55148.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t55148.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t55148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55150){var self__ = this;
var _55150__$1 = this;return self__.meta55149;
});
cljs.core.async.t55148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55150,meta55149__$1){var self__ = this;
var _55150__$1 = this;return (new cljs.core.async.t55148(self__.flag,self__.alt_flag,meta55149__$1));
});
cljs.core.async.__GT_t55148 = (function __GT_t55148(flag__$1,alt_flag__$1,meta55149){return (new cljs.core.async.t55148(flag__$1,alt_flag__$1,meta55149));
});
}
return (new cljs.core.async.t55148(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t55154 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t55154 = (function (cb,flag,alt_handler,meta55155){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta55155 = meta55155;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t55154.cljs$lang$type = true;
cljs.core.async.t55154.cljs$lang$ctorStr = "cljs.core.async/t55154";
cljs.core.async.t55154.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t55154");
});
cljs.core.async.t55154.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t55154.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t55154.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t55154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55156){var self__ = this;
var _55156__$1 = this;return self__.meta55155;
});
cljs.core.async.t55154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55156,meta55155__$1){var self__ = this;
var _55156__$1 = this;return (new cljs.core.async.t55154(self__.cb,self__.flag,self__.alt_handler,meta55155__$1));
});
cljs.core.async.__GT_t55154 = (function __GT_t55154(cb__$1,flag__$1,alt_handler__$1,meta55155){return (new cljs.core.async.t55154(cb__$1,flag__$1,alt_handler__$1,meta55155));
});
}
return (new cljs.core.async.t55154(cb,flag,alt_handler,null));
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
return (function (p1__55157_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__55157_SHARP_,port], null));
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
var G__55158 = (i + 1);
i = G__55158;
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
var alts_BANG___delegate = function (ports,p__55159){var map__55161 = p__55159;var map__55161__$1 = ((cljs.core.seq_QMARK_.call(null,map__55161))?cljs.core.apply.call(null,cljs.core.hash_map,map__55161):map__55161);var opts = map__55161__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__55159 = null;if (arguments.length > 1) {
  p__55159 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__55159);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__55162){
var ports = cljs.core.first(arglist__55162);
var p__55159 = cljs.core.rest(arglist__55162);
return alts_BANG___delegate(ports,p__55159);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t55170 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t55170 = (function (ch,f,map_LT_,meta55171){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta55171 = meta55171;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t55170.cljs$lang$type = true;
cljs.core.async.t55170.cljs$lang$ctorStr = "cljs.core.async/t55170";
cljs.core.async.t55170.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t55170");
});
cljs.core.async.t55170.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t55170.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t55170.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t55170.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t55173 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t55173 = (function (fn1,_,meta55171,ch,f,map_LT_,meta55174){
this.fn1 = fn1;
this._ = _;
this.meta55171 = meta55171;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta55174 = meta55174;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t55173.cljs$lang$type = true;
cljs.core.async.t55173.cljs$lang$ctorStr = "cljs.core.async/t55173";
cljs.core.async.t55173.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t55173");
});
cljs.core.async.t55173.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t55173.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t55173.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t55173.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__55163_SHARP_){return f1.call(null,(((p1__55163_SHARP_ == null))?null:self__.f.call(null,p1__55163_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t55173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55175){var self__ = this;
var _55175__$1 = this;return self__.meta55174;
});
cljs.core.async.t55173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55175,meta55174__$1){var self__ = this;
var _55175__$1 = this;return (new cljs.core.async.t55173(self__.fn1,self__._,self__.meta55171,self__.ch,self__.f,self__.map_LT_,meta55174__$1));
});
cljs.core.async.__GT_t55173 = (function __GT_t55173(fn1__$1,___$2,meta55171__$1,ch__$2,f__$2,map_LT___$2,meta55174){return (new cljs.core.async.t55173(fn1__$1,___$2,meta55171__$1,ch__$2,f__$2,map_LT___$2,meta55174));
});
}
return (new cljs.core.async.t55173(fn1,___$1,self__.meta55171,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t55170.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t55170.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t55170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55172){var self__ = this;
var _55172__$1 = this;return self__.meta55171;
});
cljs.core.async.t55170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55172,meta55171__$1){var self__ = this;
var _55172__$1 = this;return (new cljs.core.async.t55170(self__.ch,self__.f,self__.map_LT_,meta55171__$1));
});
cljs.core.async.__GT_t55170 = (function __GT_t55170(ch__$1,f__$1,map_LT___$1,meta55171){return (new cljs.core.async.t55170(ch__$1,f__$1,map_LT___$1,meta55171));
});
}
return (new cljs.core.async.t55170(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t55179 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t55179 = (function (ch,f,map_GT_,meta55180){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta55180 = meta55180;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t55179.cljs$lang$type = true;
cljs.core.async.t55179.cljs$lang$ctorStr = "cljs.core.async/t55179";
cljs.core.async.t55179.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t55179");
});
cljs.core.async.t55179.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t55179.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t55179.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t55179.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t55179.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t55179.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t55179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55181){var self__ = this;
var _55181__$1 = this;return self__.meta55180;
});
cljs.core.async.t55179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55181,meta55180__$1){var self__ = this;
var _55181__$1 = this;return (new cljs.core.async.t55179(self__.ch,self__.f,self__.map_GT_,meta55180__$1));
});
cljs.core.async.__GT_t55179 = (function __GT_t55179(ch__$1,f__$1,map_GT___$1,meta55180){return (new cljs.core.async.t55179(ch__$1,f__$1,map_GT___$1,meta55180));
});
}
return (new cljs.core.async.t55179(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t55185 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t55185 = (function (ch,p,filter_GT_,meta55186){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta55186 = meta55186;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t55185.cljs$lang$type = true;
cljs.core.async.t55185.cljs$lang$ctorStr = "cljs.core.async/t55185";
cljs.core.async.t55185.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t55185");
});
cljs.core.async.t55185.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t55185.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t55185.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t55185.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t55185.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t55185.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t55185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55187){var self__ = this;
var _55187__$1 = this;return self__.meta55186;
});
cljs.core.async.t55185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55187,meta55186__$1){var self__ = this;
var _55187__$1 = this;return (new cljs.core.async.t55185(self__.ch,self__.p,self__.filter_GT_,meta55186__$1));
});
cljs.core.async.__GT_t55185 = (function __GT_t55185(ch__$1,p__$1,filter_GT___$1,meta55186){return (new cljs.core.async.t55185(ch__$1,p__$1,filter_GT___$1,meta55186));
});
}
return (new cljs.core.async.t55185(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___55270 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_55249){var state_val_55250 = (state_55249[1]);if((state_val_55250 === 1))
{var state_55249__$1 = state_55249;var statearr_55251_55271 = state_55249__$1;(statearr_55251_55271[2] = null);
(statearr_55251_55271[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55250 === 2))
{var state_55249__$1 = state_55249;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55249__$1,4,ch);
} else
{if((state_val_55250 === 3))
{var inst_55247 = (state_55249[2]);var state_55249__$1 = state_55249;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55249__$1,inst_55247);
} else
{if((state_val_55250 === 4))
{var inst_55231 = (state_55249[7]);var inst_55231__$1 = (state_55249[2]);var inst_55232 = (inst_55231__$1 == null);var state_55249__$1 = (function (){var statearr_55252 = state_55249;(statearr_55252[7] = inst_55231__$1);
return statearr_55252;
})();if(cljs.core.truth_(inst_55232))
{var statearr_55253_55272 = state_55249__$1;(statearr_55253_55272[1] = 5);
} else
{var statearr_55254_55273 = state_55249__$1;(statearr_55254_55273[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55250 === 5))
{var inst_55234 = cljs.core.async.close_BANG_.call(null,out);var state_55249__$1 = state_55249;var statearr_55255_55274 = state_55249__$1;(statearr_55255_55274[2] = inst_55234);
(statearr_55255_55274[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55250 === 6))
{var inst_55231 = (state_55249[7]);var inst_55236 = p.call(null,inst_55231);var state_55249__$1 = state_55249;if(cljs.core.truth_(inst_55236))
{var statearr_55256_55275 = state_55249__$1;(statearr_55256_55275[1] = 8);
} else
{var statearr_55257_55276 = state_55249__$1;(statearr_55257_55276[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55250 === 7))
{var inst_55245 = (state_55249[2]);var state_55249__$1 = state_55249;var statearr_55258_55277 = state_55249__$1;(statearr_55258_55277[2] = inst_55245);
(statearr_55258_55277[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55250 === 8))
{var inst_55231 = (state_55249[7]);var state_55249__$1 = state_55249;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55249__$1,11,out,inst_55231);
} else
{if((state_val_55250 === 9))
{var state_55249__$1 = state_55249;var statearr_55259_55278 = state_55249__$1;(statearr_55259_55278[2] = null);
(statearr_55259_55278[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55250 === 10))
{var inst_55242 = (state_55249[2]);var state_55249__$1 = (function (){var statearr_55260 = state_55249;(statearr_55260[8] = inst_55242);
return statearr_55260;
})();var statearr_55261_55279 = state_55249__$1;(statearr_55261_55279[2] = null);
(statearr_55261_55279[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55250 === 11))
{var inst_55239 = (state_55249[2]);var state_55249__$1 = state_55249;var statearr_55262_55280 = state_55249__$1;(statearr_55262_55280[2] = inst_55239);
(statearr_55262_55280[1] = 10);
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
var state_machine__13310__auto____0 = (function (){var statearr_55266 = (new Array(9));(statearr_55266[0] = state_machine__13310__auto__);
(statearr_55266[1] = 1);
return statearr_55266;
});
var state_machine__13310__auto____1 = (function (state_55249){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_55249);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e55267){if((e55267 instanceof Object))
{var ex__13313__auto__ = e55267;var statearr_55268_55281 = state_55249;(statearr_55268_55281[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55249);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e55267;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__55282 = state_55249;
state_55249 = G__55282;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_55249){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_55249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_55269 = f__13410__auto__.call(null);(statearr_55269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___55270);
return statearr_55269;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_55434){var state_val_55435 = (state_55434[1]);if((state_val_55435 === 1))
{var state_55434__$1 = state_55434;var statearr_55436_55473 = state_55434__$1;(statearr_55436_55473[2] = null);
(statearr_55436_55473[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55435 === 2))
{var state_55434__$1 = state_55434;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55434__$1,4,in$);
} else
{if((state_val_55435 === 3))
{var inst_55432 = (state_55434[2]);var state_55434__$1 = state_55434;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55434__$1,inst_55432);
} else
{if((state_val_55435 === 4))
{var inst_55380 = (state_55434[7]);var inst_55380__$1 = (state_55434[2]);var inst_55381 = (inst_55380__$1 == null);var state_55434__$1 = (function (){var statearr_55437 = state_55434;(statearr_55437[7] = inst_55380__$1);
return statearr_55437;
})();if(cljs.core.truth_(inst_55381))
{var statearr_55438_55474 = state_55434__$1;(statearr_55438_55474[1] = 5);
} else
{var statearr_55439_55475 = state_55434__$1;(statearr_55439_55475[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55435 === 5))
{var inst_55383 = cljs.core.async.close_BANG_.call(null,out);var state_55434__$1 = state_55434;var statearr_55440_55476 = state_55434__$1;(statearr_55440_55476[2] = inst_55383);
(statearr_55440_55476[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55435 === 6))
{var inst_55380 = (state_55434[7]);var inst_55385 = f.call(null,inst_55380);var inst_55390 = cljs.core.seq.call(null,inst_55385);var inst_55391 = inst_55390;var inst_55392 = null;var inst_55393 = 0;var inst_55394 = 0;var state_55434__$1 = (function (){var statearr_55441 = state_55434;(statearr_55441[8] = inst_55393);
(statearr_55441[9] = inst_55394);
(statearr_55441[10] = inst_55392);
(statearr_55441[11] = inst_55391);
return statearr_55441;
})();var statearr_55442_55477 = state_55434__$1;(statearr_55442_55477[2] = null);
(statearr_55442_55477[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55435 === 7))
{var inst_55430 = (state_55434[2]);var state_55434__$1 = state_55434;var statearr_55443_55478 = state_55434__$1;(statearr_55443_55478[2] = inst_55430);
(statearr_55443_55478[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55435 === 8))
{var inst_55393 = (state_55434[8]);var inst_55394 = (state_55434[9]);var inst_55396 = (inst_55394 < inst_55393);var inst_55397 = inst_55396;var state_55434__$1 = state_55434;if(cljs.core.truth_(inst_55397))
{var statearr_55444_55479 = state_55434__$1;(statearr_55444_55479[1] = 10);
} else
{var statearr_55445_55480 = state_55434__$1;(statearr_55445_55480[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55435 === 9))
{var inst_55427 = (state_55434[2]);var state_55434__$1 = (function (){var statearr_55446 = state_55434;(statearr_55446[12] = inst_55427);
return statearr_55446;
})();var statearr_55447_55481 = state_55434__$1;(statearr_55447_55481[2] = null);
(statearr_55447_55481[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55435 === 10))
{var inst_55394 = (state_55434[9]);var inst_55392 = (state_55434[10]);var inst_55399 = cljs.core._nth.call(null,inst_55392,inst_55394);var state_55434__$1 = state_55434;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55434__$1,13,out,inst_55399);
} else
{if((state_val_55435 === 11))
{var inst_55405 = (state_55434[13]);var inst_55391 = (state_55434[11]);var inst_55405__$1 = cljs.core.seq.call(null,inst_55391);var state_55434__$1 = (function (){var statearr_55451 = state_55434;(statearr_55451[13] = inst_55405__$1);
return statearr_55451;
})();if(inst_55405__$1)
{var statearr_55452_55482 = state_55434__$1;(statearr_55452_55482[1] = 14);
} else
{var statearr_55453_55483 = state_55434__$1;(statearr_55453_55483[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55435 === 12))
{var inst_55425 = (state_55434[2]);var state_55434__$1 = state_55434;var statearr_55454_55484 = state_55434__$1;(statearr_55454_55484[2] = inst_55425);
(statearr_55454_55484[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55435 === 13))
{var inst_55393 = (state_55434[8]);var inst_55394 = (state_55434[9]);var inst_55392 = (state_55434[10]);var inst_55391 = (state_55434[11]);var inst_55401 = (state_55434[2]);var inst_55402 = (inst_55394 + 1);var tmp55448 = inst_55393;var tmp55449 = inst_55392;var tmp55450 = inst_55391;var inst_55391__$1 = tmp55450;var inst_55392__$1 = tmp55449;var inst_55393__$1 = tmp55448;var inst_55394__$1 = inst_55402;var state_55434__$1 = (function (){var statearr_55455 = state_55434;(statearr_55455[14] = inst_55401);
(statearr_55455[8] = inst_55393__$1);
(statearr_55455[9] = inst_55394__$1);
(statearr_55455[10] = inst_55392__$1);
(statearr_55455[11] = inst_55391__$1);
return statearr_55455;
})();var statearr_55456_55485 = state_55434__$1;(statearr_55456_55485[2] = null);
(statearr_55456_55485[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55435 === 14))
{var inst_55405 = (state_55434[13]);var inst_55407 = cljs.core.chunked_seq_QMARK_.call(null,inst_55405);var state_55434__$1 = state_55434;if(inst_55407)
{var statearr_55457_55486 = state_55434__$1;(statearr_55457_55486[1] = 17);
} else
{var statearr_55458_55487 = state_55434__$1;(statearr_55458_55487[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55435 === 15))
{var state_55434__$1 = state_55434;var statearr_55459_55488 = state_55434__$1;(statearr_55459_55488[2] = null);
(statearr_55459_55488[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55435 === 16))
{var inst_55423 = (state_55434[2]);var state_55434__$1 = state_55434;var statearr_55460_55489 = state_55434__$1;(statearr_55460_55489[2] = inst_55423);
(statearr_55460_55489[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55435 === 17))
{var inst_55405 = (state_55434[13]);var inst_55409 = cljs.core.chunk_first.call(null,inst_55405);var inst_55410 = cljs.core.chunk_rest.call(null,inst_55405);var inst_55411 = cljs.core.count.call(null,inst_55409);var inst_55391 = inst_55410;var inst_55392 = inst_55409;var inst_55393 = inst_55411;var inst_55394 = 0;var state_55434__$1 = (function (){var statearr_55461 = state_55434;(statearr_55461[8] = inst_55393);
(statearr_55461[9] = inst_55394);
(statearr_55461[10] = inst_55392);
(statearr_55461[11] = inst_55391);
return statearr_55461;
})();var statearr_55462_55490 = state_55434__$1;(statearr_55462_55490[2] = null);
(statearr_55462_55490[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55435 === 18))
{var inst_55405 = (state_55434[13]);var inst_55414 = cljs.core.first.call(null,inst_55405);var state_55434__$1 = state_55434;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55434__$1,20,out,inst_55414);
} else
{if((state_val_55435 === 19))
{var inst_55420 = (state_55434[2]);var state_55434__$1 = state_55434;var statearr_55463_55491 = state_55434__$1;(statearr_55463_55491[2] = inst_55420);
(statearr_55463_55491[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55435 === 20))
{var inst_55405 = (state_55434[13]);var inst_55416 = (state_55434[2]);var inst_55417 = cljs.core.next.call(null,inst_55405);var inst_55391 = inst_55417;var inst_55392 = null;var inst_55393 = 0;var inst_55394 = 0;var state_55434__$1 = (function (){var statearr_55464 = state_55434;(statearr_55464[8] = inst_55393);
(statearr_55464[9] = inst_55394);
(statearr_55464[10] = inst_55392);
(statearr_55464[11] = inst_55391);
(statearr_55464[15] = inst_55416);
return statearr_55464;
})();var statearr_55465_55492 = state_55434__$1;(statearr_55465_55492[2] = null);
(statearr_55465_55492[1] = 8);
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
var state_machine__13310__auto____0 = (function (){var statearr_55469 = (new Array(16));(statearr_55469[0] = state_machine__13310__auto__);
(statearr_55469[1] = 1);
return statearr_55469;
});
var state_machine__13310__auto____1 = (function (state_55434){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_55434);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e55470){if((e55470 instanceof Object))
{var ex__13313__auto__ = e55470;var statearr_55471_55493 = state_55434;(statearr_55471_55493[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55434);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e55470;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__55494 = state_55434;
state_55434 = G__55494;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_55434){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_55434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_55472 = f__13410__auto__.call(null);(statearr_55472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_55472;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13409__auto___55575 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_55554){var state_val_55555 = (state_55554[1]);if((state_val_55555 === 1))
{var state_55554__$1 = state_55554;var statearr_55556_55576 = state_55554__$1;(statearr_55556_55576[2] = null);
(statearr_55556_55576[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55555 === 2))
{var state_55554__$1 = state_55554;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55554__$1,4,from);
} else
{if((state_val_55555 === 3))
{var inst_55552 = (state_55554[2]);var state_55554__$1 = state_55554;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55554__$1,inst_55552);
} else
{if((state_val_55555 === 4))
{var inst_55537 = (state_55554[7]);var inst_55537__$1 = (state_55554[2]);var inst_55538 = (inst_55537__$1 == null);var state_55554__$1 = (function (){var statearr_55557 = state_55554;(statearr_55557[7] = inst_55537__$1);
return statearr_55557;
})();if(cljs.core.truth_(inst_55538))
{var statearr_55558_55577 = state_55554__$1;(statearr_55558_55577[1] = 5);
} else
{var statearr_55559_55578 = state_55554__$1;(statearr_55559_55578[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55555 === 5))
{var state_55554__$1 = state_55554;if(cljs.core.truth_(close_QMARK_))
{var statearr_55560_55579 = state_55554__$1;(statearr_55560_55579[1] = 8);
} else
{var statearr_55561_55580 = state_55554__$1;(statearr_55561_55580[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55555 === 6))
{var inst_55537 = (state_55554[7]);var state_55554__$1 = state_55554;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55554__$1,11,to,inst_55537);
} else
{if((state_val_55555 === 7))
{var inst_55550 = (state_55554[2]);var state_55554__$1 = state_55554;var statearr_55562_55581 = state_55554__$1;(statearr_55562_55581[2] = inst_55550);
(statearr_55562_55581[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55555 === 8))
{var inst_55541 = cljs.core.async.close_BANG_.call(null,to);var state_55554__$1 = state_55554;var statearr_55563_55582 = state_55554__$1;(statearr_55563_55582[2] = inst_55541);
(statearr_55563_55582[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55555 === 9))
{var state_55554__$1 = state_55554;var statearr_55564_55583 = state_55554__$1;(statearr_55564_55583[2] = null);
(statearr_55564_55583[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55555 === 10))
{var inst_55544 = (state_55554[2]);var state_55554__$1 = state_55554;var statearr_55565_55584 = state_55554__$1;(statearr_55565_55584[2] = inst_55544);
(statearr_55565_55584[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55555 === 11))
{var inst_55547 = (state_55554[2]);var state_55554__$1 = (function (){var statearr_55566 = state_55554;(statearr_55566[8] = inst_55547);
return statearr_55566;
})();var statearr_55567_55585 = state_55554__$1;(statearr_55567_55585[2] = null);
(statearr_55567_55585[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_55571 = (new Array(9));(statearr_55571[0] = state_machine__13310__auto__);
(statearr_55571[1] = 1);
return statearr_55571;
});
var state_machine__13310__auto____1 = (function (state_55554){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_55554);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e55572){if((e55572 instanceof Object))
{var ex__13313__auto__ = e55572;var statearr_55573_55586 = state_55554;(statearr_55573_55586[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55554);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e55572;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__55587 = state_55554;
state_55554 = G__55587;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_55554){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_55554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_55574 = f__13410__auto__.call(null);(statearr_55574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___55575);
return statearr_55574;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13409__auto___55674 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_55652){var state_val_55653 = (state_55652[1]);if((state_val_55653 === 1))
{var state_55652__$1 = state_55652;var statearr_55654_55675 = state_55652__$1;(statearr_55654_55675[2] = null);
(statearr_55654_55675[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55653 === 2))
{var state_55652__$1 = state_55652;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55652__$1,4,ch);
} else
{if((state_val_55653 === 3))
{var inst_55650 = (state_55652[2]);var state_55652__$1 = state_55652;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55652__$1,inst_55650);
} else
{if((state_val_55653 === 4))
{var inst_55633 = (state_55652[7]);var inst_55633__$1 = (state_55652[2]);var inst_55634 = (inst_55633__$1 == null);var state_55652__$1 = (function (){var statearr_55655 = state_55652;(statearr_55655[7] = inst_55633__$1);
return statearr_55655;
})();if(cljs.core.truth_(inst_55634))
{var statearr_55656_55676 = state_55652__$1;(statearr_55656_55676[1] = 5);
} else
{var statearr_55657_55677 = state_55652__$1;(statearr_55657_55677[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55653 === 5))
{var inst_55636 = cljs.core.async.close_BANG_.call(null,tc);var inst_55637 = cljs.core.async.close_BANG_.call(null,fc);var state_55652__$1 = (function (){var statearr_55658 = state_55652;(statearr_55658[8] = inst_55636);
return statearr_55658;
})();var statearr_55659_55678 = state_55652__$1;(statearr_55659_55678[2] = inst_55637);
(statearr_55659_55678[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55653 === 6))
{var inst_55633 = (state_55652[7]);var inst_55639 = p.call(null,inst_55633);var state_55652__$1 = state_55652;if(cljs.core.truth_(inst_55639))
{var statearr_55660_55679 = state_55652__$1;(statearr_55660_55679[1] = 9);
} else
{var statearr_55661_55680 = state_55652__$1;(statearr_55661_55680[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55653 === 7))
{var inst_55648 = (state_55652[2]);var state_55652__$1 = state_55652;var statearr_55662_55681 = state_55652__$1;(statearr_55662_55681[2] = inst_55648);
(statearr_55662_55681[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55653 === 8))
{var inst_55645 = (state_55652[2]);var state_55652__$1 = (function (){var statearr_55663 = state_55652;(statearr_55663[9] = inst_55645);
return statearr_55663;
})();var statearr_55664_55682 = state_55652__$1;(statearr_55664_55682[2] = null);
(statearr_55664_55682[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55653 === 9))
{var state_55652__$1 = state_55652;var statearr_55665_55683 = state_55652__$1;(statearr_55665_55683[2] = tc);
(statearr_55665_55683[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55653 === 10))
{var state_55652__$1 = state_55652;var statearr_55666_55684 = state_55652__$1;(statearr_55666_55684[2] = fc);
(statearr_55666_55684[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55653 === 11))
{var inst_55633 = (state_55652[7]);var inst_55643 = (state_55652[2]);var state_55652__$1 = state_55652;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55652__$1,8,inst_55643,inst_55633);
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
var state_machine__13310__auto____0 = (function (){var statearr_55670 = (new Array(10));(statearr_55670[0] = state_machine__13310__auto__);
(statearr_55670[1] = 1);
return statearr_55670;
});
var state_machine__13310__auto____1 = (function (state_55652){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_55652);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e55671){if((e55671 instanceof Object))
{var ex__13313__auto__ = e55671;var statearr_55672_55685 = state_55652;(statearr_55672_55685[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55652);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e55671;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__55686 = state_55652;
state_55652 = G__55686;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_55652){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_55652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_55673 = f__13410__auto__.call(null);(statearr_55673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___55674);
return statearr_55673;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_55733){var state_val_55734 = (state_55733[1]);if((state_val_55734 === 7))
{var inst_55729 = (state_55733[2]);var state_55733__$1 = state_55733;var statearr_55735_55751 = state_55733__$1;(statearr_55735_55751[2] = inst_55729);
(statearr_55735_55751[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55734 === 6))
{var inst_55719 = (state_55733[7]);var inst_55722 = (state_55733[8]);var inst_55726 = f.call(null,inst_55719,inst_55722);var inst_55719__$1 = inst_55726;var state_55733__$1 = (function (){var statearr_55736 = state_55733;(statearr_55736[7] = inst_55719__$1);
return statearr_55736;
})();var statearr_55737_55752 = state_55733__$1;(statearr_55737_55752[2] = null);
(statearr_55737_55752[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55734 === 5))
{var inst_55719 = (state_55733[7]);var state_55733__$1 = state_55733;var statearr_55738_55753 = state_55733__$1;(statearr_55738_55753[2] = inst_55719);
(statearr_55738_55753[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55734 === 4))
{var inst_55722 = (state_55733[8]);var inst_55722__$1 = (state_55733[2]);var inst_55723 = (inst_55722__$1 == null);var state_55733__$1 = (function (){var statearr_55739 = state_55733;(statearr_55739[8] = inst_55722__$1);
return statearr_55739;
})();if(cljs.core.truth_(inst_55723))
{var statearr_55740_55754 = state_55733__$1;(statearr_55740_55754[1] = 5);
} else
{var statearr_55741_55755 = state_55733__$1;(statearr_55741_55755[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55734 === 3))
{var inst_55731 = (state_55733[2]);var state_55733__$1 = state_55733;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55733__$1,inst_55731);
} else
{if((state_val_55734 === 2))
{var state_55733__$1 = state_55733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55733__$1,4,ch);
} else
{if((state_val_55734 === 1))
{var inst_55719 = init;var state_55733__$1 = (function (){var statearr_55742 = state_55733;(statearr_55742[7] = inst_55719);
return statearr_55742;
})();var statearr_55743_55756 = state_55733__$1;(statearr_55743_55756[2] = null);
(statearr_55743_55756[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_55747 = (new Array(9));(statearr_55747[0] = state_machine__13310__auto__);
(statearr_55747[1] = 1);
return statearr_55747;
});
var state_machine__13310__auto____1 = (function (state_55733){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_55733);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e55748){if((e55748 instanceof Object))
{var ex__13313__auto__ = e55748;var statearr_55749_55757 = state_55733;(statearr_55749_55757[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55733);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e55748;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__55758 = state_55733;
state_55733 = G__55758;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_55733){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_55733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_55750 = f__13410__auto__.call(null);(statearr_55750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_55750;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_55820){var state_val_55821 = (state_55820[1]);if((state_val_55821 === 1))
{var inst_55800 = cljs.core.seq.call(null,coll);var inst_55801 = inst_55800;var state_55820__$1 = (function (){var statearr_55822 = state_55820;(statearr_55822[7] = inst_55801);
return statearr_55822;
})();var statearr_55823_55841 = state_55820__$1;(statearr_55823_55841[2] = null);
(statearr_55823_55841[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55821 === 2))
{var inst_55801 = (state_55820[7]);var state_55820__$1 = state_55820;if(cljs.core.truth_(inst_55801))
{var statearr_55824_55842 = state_55820__$1;(statearr_55824_55842[1] = 4);
} else
{var statearr_55825_55843 = state_55820__$1;(statearr_55825_55843[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55821 === 3))
{var inst_55818 = (state_55820[2]);var state_55820__$1 = state_55820;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55820__$1,inst_55818);
} else
{if((state_val_55821 === 4))
{var inst_55801 = (state_55820[7]);var inst_55804 = cljs.core.first.call(null,inst_55801);var state_55820__$1 = state_55820;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55820__$1,7,ch,inst_55804);
} else
{if((state_val_55821 === 5))
{var state_55820__$1 = state_55820;if(cljs.core.truth_(close_QMARK_))
{var statearr_55826_55844 = state_55820__$1;(statearr_55826_55844[1] = 8);
} else
{var statearr_55827_55845 = state_55820__$1;(statearr_55827_55845[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55821 === 6))
{var inst_55816 = (state_55820[2]);var state_55820__$1 = state_55820;var statearr_55828_55846 = state_55820__$1;(statearr_55828_55846[2] = inst_55816);
(statearr_55828_55846[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55821 === 7))
{var inst_55801 = (state_55820[7]);var inst_55806 = (state_55820[2]);var inst_55807 = cljs.core.next.call(null,inst_55801);var inst_55801__$1 = inst_55807;var state_55820__$1 = (function (){var statearr_55829 = state_55820;(statearr_55829[7] = inst_55801__$1);
(statearr_55829[8] = inst_55806);
return statearr_55829;
})();var statearr_55830_55847 = state_55820__$1;(statearr_55830_55847[2] = null);
(statearr_55830_55847[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55821 === 8))
{var inst_55811 = cljs.core.async.close_BANG_.call(null,ch);var state_55820__$1 = state_55820;var statearr_55831_55848 = state_55820__$1;(statearr_55831_55848[2] = inst_55811);
(statearr_55831_55848[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55821 === 9))
{var state_55820__$1 = state_55820;var statearr_55832_55849 = state_55820__$1;(statearr_55832_55849[2] = null);
(statearr_55832_55849[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55821 === 10))
{var inst_55814 = (state_55820[2]);var state_55820__$1 = state_55820;var statearr_55833_55850 = state_55820__$1;(statearr_55833_55850[2] = inst_55814);
(statearr_55833_55850[1] = 6);
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
var state_machine__13310__auto____0 = (function (){var statearr_55837 = (new Array(9));(statearr_55837[0] = state_machine__13310__auto__);
(statearr_55837[1] = 1);
return statearr_55837;
});
var state_machine__13310__auto____1 = (function (state_55820){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_55820);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e55838){if((e55838 instanceof Object))
{var ex__13313__auto__ = e55838;var statearr_55839_55851 = state_55820;(statearr_55839_55851[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55820);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e55838;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__55852 = state_55820;
state_55820 = G__55852;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_55820){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_55820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_55840 = f__13410__auto__.call(null);(statearr_55840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_55840;
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
cljs.core.async.Mux = (function (){var obj55854 = {};return obj55854;
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
cljs.core.async.Mult = (function (){var obj55856 = {};return obj55856;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t56071 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t56071 = (function (cs,ch,mult,meta56072){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta56072 = meta56072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t56071.cljs$lang$type = true;
cljs.core.async.t56071.cljs$lang$ctorStr = "cljs.core.async/t56071";
cljs.core.async.t56071.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t56071");
});})(cs))
;
cljs.core.async.t56071.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t56071.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t56071.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t56071.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t56071.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t56071.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t56071.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_56073){var self__ = this;
var _56073__$1 = this;return self__.meta56072;
});})(cs))
;
cljs.core.async.t56071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_56073,meta56072__$1){var self__ = this;
var _56073__$1 = this;return (new cljs.core.async.t56071(self__.cs,self__.ch,self__.mult,meta56072__$1));
});})(cs))
;
cljs.core.async.__GT_t56071 = ((function (cs){
return (function __GT_t56071(cs__$1,ch__$1,mult__$1,meta56072){return (new cljs.core.async.t56071(cs__$1,ch__$1,mult__$1,meta56072));
});})(cs))
;
}
return (new cljs.core.async.t56071(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13409__auto___56285 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_56203){var state_val_56204 = (state_56203[1]);if((state_val_56204 === 32))
{var inst_56152 = (state_56203[7]);var inst_56076 = (state_56203[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_56203,31,Object,null,30);var inst_56159 = cljs.core.async.put_BANG_.call(null,inst_56152,inst_56076,done);var state_56203__$1 = state_56203;var statearr_56205_56286 = state_56203__$1;(statearr_56205_56286[2] = inst_56159);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56203__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 1))
{var state_56203__$1 = state_56203;var statearr_56206_56287 = state_56203__$1;(statearr_56206_56287[2] = null);
(statearr_56206_56287[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 33))
{var inst_56165 = (state_56203[9]);var inst_56167 = cljs.core.chunked_seq_QMARK_.call(null,inst_56165);var state_56203__$1 = state_56203;if(inst_56167)
{var statearr_56207_56288 = state_56203__$1;(statearr_56207_56288[1] = 36);
} else
{var statearr_56208_56289 = state_56203__$1;(statearr_56208_56289[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 2))
{var state_56203__$1 = state_56203;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56203__$1,4,ch);
} else
{if((state_val_56204 === 34))
{var state_56203__$1 = state_56203;var statearr_56209_56290 = state_56203__$1;(statearr_56209_56290[2] = null);
(statearr_56209_56290[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 3))
{var inst_56201 = (state_56203[2]);var state_56203__$1 = state_56203;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56203__$1,inst_56201);
} else
{if((state_val_56204 === 35))
{var inst_56190 = (state_56203[2]);var state_56203__$1 = state_56203;var statearr_56210_56291 = state_56203__$1;(statearr_56210_56291[2] = inst_56190);
(statearr_56210_56291[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 4))
{var inst_56076 = (state_56203[8]);var inst_56076__$1 = (state_56203[2]);var inst_56077 = (inst_56076__$1 == null);var state_56203__$1 = (function (){var statearr_56211 = state_56203;(statearr_56211[8] = inst_56076__$1);
return statearr_56211;
})();if(cljs.core.truth_(inst_56077))
{var statearr_56212_56292 = state_56203__$1;(statearr_56212_56292[1] = 5);
} else
{var statearr_56213_56293 = state_56203__$1;(statearr_56213_56293[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 36))
{var inst_56165 = (state_56203[9]);var inst_56169 = cljs.core.chunk_first.call(null,inst_56165);var inst_56170 = cljs.core.chunk_rest.call(null,inst_56165);var inst_56171 = cljs.core.count.call(null,inst_56169);var inst_56144 = inst_56170;var inst_56145 = inst_56169;var inst_56146 = inst_56171;var inst_56147 = 0;var state_56203__$1 = (function (){var statearr_56214 = state_56203;(statearr_56214[10] = inst_56144);
(statearr_56214[11] = inst_56147);
(statearr_56214[12] = inst_56146);
(statearr_56214[13] = inst_56145);
return statearr_56214;
})();var statearr_56215_56294 = state_56203__$1;(statearr_56215_56294[2] = null);
(statearr_56215_56294[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 5))
{var inst_56083 = cljs.core.deref.call(null,cs);var inst_56084 = cljs.core.seq.call(null,inst_56083);var inst_56085 = inst_56084;var inst_56086 = null;var inst_56087 = 0;var inst_56088 = 0;var state_56203__$1 = (function (){var statearr_56216 = state_56203;(statearr_56216[14] = inst_56088);
(statearr_56216[15] = inst_56086);
(statearr_56216[16] = inst_56087);
(statearr_56216[17] = inst_56085);
return statearr_56216;
})();var statearr_56217_56295 = state_56203__$1;(statearr_56217_56295[2] = null);
(statearr_56217_56295[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 37))
{var inst_56165 = (state_56203[9]);var inst_56174 = cljs.core.first.call(null,inst_56165);var state_56203__$1 = (function (){var statearr_56218 = state_56203;(statearr_56218[18] = inst_56174);
return statearr_56218;
})();var statearr_56219_56296 = state_56203__$1;(statearr_56219_56296[2] = null);
(statearr_56219_56296[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 6))
{var inst_56135 = cljs.core.deref.call(null,cs);var inst_56136 = cljs.core.keys.call(null,inst_56135);var inst_56137 = cljs.core.count.call(null,inst_56136);var inst_56138 = cljs.core.reset_BANG_.call(null,dctr,inst_56137);var inst_56143 = cljs.core.seq.call(null,inst_56136);var inst_56144 = inst_56143;var inst_56145 = null;var inst_56146 = 0;var inst_56147 = 0;var state_56203__$1 = (function (){var statearr_56220 = state_56203;(statearr_56220[10] = inst_56144);
(statearr_56220[19] = inst_56138);
(statearr_56220[11] = inst_56147);
(statearr_56220[12] = inst_56146);
(statearr_56220[13] = inst_56145);
return statearr_56220;
})();var statearr_56221_56297 = state_56203__$1;(statearr_56221_56297[2] = null);
(statearr_56221_56297[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 38))
{var inst_56187 = (state_56203[2]);var state_56203__$1 = state_56203;var statearr_56222_56298 = state_56203__$1;(statearr_56222_56298[2] = inst_56187);
(statearr_56222_56298[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 7))
{var inst_56199 = (state_56203[2]);var state_56203__$1 = state_56203;var statearr_56223_56299 = state_56203__$1;(statearr_56223_56299[2] = inst_56199);
(statearr_56223_56299[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 39))
{var inst_56165 = (state_56203[9]);var inst_56183 = (state_56203[2]);var inst_56184 = cljs.core.next.call(null,inst_56165);var inst_56144 = inst_56184;var inst_56145 = null;var inst_56146 = 0;var inst_56147 = 0;var state_56203__$1 = (function (){var statearr_56224 = state_56203;(statearr_56224[10] = inst_56144);
(statearr_56224[20] = inst_56183);
(statearr_56224[11] = inst_56147);
(statearr_56224[12] = inst_56146);
(statearr_56224[13] = inst_56145);
return statearr_56224;
})();var statearr_56225_56300 = state_56203__$1;(statearr_56225_56300[2] = null);
(statearr_56225_56300[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 8))
{var inst_56088 = (state_56203[14]);var inst_56087 = (state_56203[16]);var inst_56090 = (inst_56088 < inst_56087);var inst_56091 = inst_56090;var state_56203__$1 = state_56203;if(cljs.core.truth_(inst_56091))
{var statearr_56226_56301 = state_56203__$1;(statearr_56226_56301[1] = 10);
} else
{var statearr_56227_56302 = state_56203__$1;(statearr_56227_56302[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 40))
{var inst_56174 = (state_56203[18]);var inst_56175 = (state_56203[2]);var inst_56176 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_56177 = cljs.core.async.untap_STAR_.call(null,m,inst_56174);var state_56203__$1 = (function (){var statearr_56228 = state_56203;(statearr_56228[21] = inst_56176);
(statearr_56228[22] = inst_56175);
return statearr_56228;
})();var statearr_56229_56303 = state_56203__$1;(statearr_56229_56303[2] = inst_56177);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56203__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 9))
{var inst_56133 = (state_56203[2]);var state_56203__$1 = state_56203;var statearr_56230_56304 = state_56203__$1;(statearr_56230_56304[2] = inst_56133);
(statearr_56230_56304[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 41))
{var inst_56076 = (state_56203[8]);var inst_56174 = (state_56203[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_56203,40,Object,null,39);var inst_56181 = cljs.core.async.put_BANG_.call(null,inst_56174,inst_56076,done);var state_56203__$1 = state_56203;var statearr_56231_56305 = state_56203__$1;(statearr_56231_56305[2] = inst_56181);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56203__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 10))
{var inst_56088 = (state_56203[14]);var inst_56086 = (state_56203[15]);var inst_56094 = cljs.core._nth.call(null,inst_56086,inst_56088);var inst_56095 = cljs.core.nth.call(null,inst_56094,0,null);var inst_56096 = cljs.core.nth.call(null,inst_56094,1,null);var state_56203__$1 = (function (){var statearr_56232 = state_56203;(statearr_56232[23] = inst_56095);
return statearr_56232;
})();if(cljs.core.truth_(inst_56096))
{var statearr_56233_56306 = state_56203__$1;(statearr_56233_56306[1] = 13);
} else
{var statearr_56234_56307 = state_56203__$1;(statearr_56234_56307[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 42))
{var inst_56196 = (state_56203[2]);var state_56203__$1 = (function (){var statearr_56235 = state_56203;(statearr_56235[24] = inst_56196);
return statearr_56235;
})();var statearr_56236_56308 = state_56203__$1;(statearr_56236_56308[2] = null);
(statearr_56236_56308[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 11))
{var inst_56105 = (state_56203[25]);var inst_56085 = (state_56203[17]);var inst_56105__$1 = cljs.core.seq.call(null,inst_56085);var state_56203__$1 = (function (){var statearr_56237 = state_56203;(statearr_56237[25] = inst_56105__$1);
return statearr_56237;
})();if(inst_56105__$1)
{var statearr_56238_56309 = state_56203__$1;(statearr_56238_56309[1] = 16);
} else
{var statearr_56239_56310 = state_56203__$1;(statearr_56239_56310[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 12))
{var inst_56131 = (state_56203[2]);var state_56203__$1 = state_56203;var statearr_56240_56311 = state_56203__$1;(statearr_56240_56311[2] = inst_56131);
(statearr_56240_56311[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 13))
{var inst_56095 = (state_56203[23]);var inst_56098 = cljs.core.async.close_BANG_.call(null,inst_56095);var state_56203__$1 = state_56203;var statearr_56244_56312 = state_56203__$1;(statearr_56244_56312[2] = inst_56098);
(statearr_56244_56312[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 14))
{var state_56203__$1 = state_56203;var statearr_56245_56313 = state_56203__$1;(statearr_56245_56313[2] = null);
(statearr_56245_56313[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 15))
{var inst_56088 = (state_56203[14]);var inst_56086 = (state_56203[15]);var inst_56087 = (state_56203[16]);var inst_56085 = (state_56203[17]);var inst_56101 = (state_56203[2]);var inst_56102 = (inst_56088 + 1);var tmp56241 = inst_56086;var tmp56242 = inst_56087;var tmp56243 = inst_56085;var inst_56085__$1 = tmp56243;var inst_56086__$1 = tmp56241;var inst_56087__$1 = tmp56242;var inst_56088__$1 = inst_56102;var state_56203__$1 = (function (){var statearr_56246 = state_56203;(statearr_56246[26] = inst_56101);
(statearr_56246[14] = inst_56088__$1);
(statearr_56246[15] = inst_56086__$1);
(statearr_56246[16] = inst_56087__$1);
(statearr_56246[17] = inst_56085__$1);
return statearr_56246;
})();var statearr_56247_56314 = state_56203__$1;(statearr_56247_56314[2] = null);
(statearr_56247_56314[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 16))
{var inst_56105 = (state_56203[25]);var inst_56107 = cljs.core.chunked_seq_QMARK_.call(null,inst_56105);var state_56203__$1 = state_56203;if(inst_56107)
{var statearr_56248_56315 = state_56203__$1;(statearr_56248_56315[1] = 19);
} else
{var statearr_56249_56316 = state_56203__$1;(statearr_56249_56316[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 17))
{var state_56203__$1 = state_56203;var statearr_56250_56317 = state_56203__$1;(statearr_56250_56317[2] = null);
(statearr_56250_56317[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 18))
{var inst_56129 = (state_56203[2]);var state_56203__$1 = state_56203;var statearr_56251_56318 = state_56203__$1;(statearr_56251_56318[2] = inst_56129);
(statearr_56251_56318[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 19))
{var inst_56105 = (state_56203[25]);var inst_56109 = cljs.core.chunk_first.call(null,inst_56105);var inst_56110 = cljs.core.chunk_rest.call(null,inst_56105);var inst_56111 = cljs.core.count.call(null,inst_56109);var inst_56085 = inst_56110;var inst_56086 = inst_56109;var inst_56087 = inst_56111;var inst_56088 = 0;var state_56203__$1 = (function (){var statearr_56252 = state_56203;(statearr_56252[14] = inst_56088);
(statearr_56252[15] = inst_56086);
(statearr_56252[16] = inst_56087);
(statearr_56252[17] = inst_56085);
return statearr_56252;
})();var statearr_56253_56319 = state_56203__$1;(statearr_56253_56319[2] = null);
(statearr_56253_56319[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 20))
{var inst_56105 = (state_56203[25]);var inst_56115 = cljs.core.first.call(null,inst_56105);var inst_56116 = cljs.core.nth.call(null,inst_56115,0,null);var inst_56117 = cljs.core.nth.call(null,inst_56115,1,null);var state_56203__$1 = (function (){var statearr_56254 = state_56203;(statearr_56254[27] = inst_56116);
return statearr_56254;
})();if(cljs.core.truth_(inst_56117))
{var statearr_56255_56320 = state_56203__$1;(statearr_56255_56320[1] = 22);
} else
{var statearr_56256_56321 = state_56203__$1;(statearr_56256_56321[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 21))
{var inst_56126 = (state_56203[2]);var state_56203__$1 = state_56203;var statearr_56257_56322 = state_56203__$1;(statearr_56257_56322[2] = inst_56126);
(statearr_56257_56322[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 22))
{var inst_56116 = (state_56203[27]);var inst_56119 = cljs.core.async.close_BANG_.call(null,inst_56116);var state_56203__$1 = state_56203;var statearr_56258_56323 = state_56203__$1;(statearr_56258_56323[2] = inst_56119);
(statearr_56258_56323[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 23))
{var state_56203__$1 = state_56203;var statearr_56259_56324 = state_56203__$1;(statearr_56259_56324[2] = null);
(statearr_56259_56324[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 24))
{var inst_56105 = (state_56203[25]);var inst_56122 = (state_56203[2]);var inst_56123 = cljs.core.next.call(null,inst_56105);var inst_56085 = inst_56123;var inst_56086 = null;var inst_56087 = 0;var inst_56088 = 0;var state_56203__$1 = (function (){var statearr_56260 = state_56203;(statearr_56260[14] = inst_56088);
(statearr_56260[28] = inst_56122);
(statearr_56260[15] = inst_56086);
(statearr_56260[16] = inst_56087);
(statearr_56260[17] = inst_56085);
return statearr_56260;
})();var statearr_56261_56325 = state_56203__$1;(statearr_56261_56325[2] = null);
(statearr_56261_56325[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 25))
{var inst_56147 = (state_56203[11]);var inst_56146 = (state_56203[12]);var inst_56149 = (inst_56147 < inst_56146);var inst_56150 = inst_56149;var state_56203__$1 = state_56203;if(cljs.core.truth_(inst_56150))
{var statearr_56262_56326 = state_56203__$1;(statearr_56262_56326[1] = 27);
} else
{var statearr_56263_56327 = state_56203__$1;(statearr_56263_56327[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 26))
{var inst_56194 = (state_56203[2]);var state_56203__$1 = (function (){var statearr_56264 = state_56203;(statearr_56264[29] = inst_56194);
return statearr_56264;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56203__$1,42,dchan);
} else
{if((state_val_56204 === 27))
{var inst_56147 = (state_56203[11]);var inst_56145 = (state_56203[13]);var inst_56152 = cljs.core._nth.call(null,inst_56145,inst_56147);var state_56203__$1 = (function (){var statearr_56265 = state_56203;(statearr_56265[7] = inst_56152);
return statearr_56265;
})();var statearr_56266_56328 = state_56203__$1;(statearr_56266_56328[2] = null);
(statearr_56266_56328[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 28))
{var inst_56144 = (state_56203[10]);var inst_56165 = (state_56203[9]);var inst_56165__$1 = cljs.core.seq.call(null,inst_56144);var state_56203__$1 = (function (){var statearr_56270 = state_56203;(statearr_56270[9] = inst_56165__$1);
return statearr_56270;
})();if(inst_56165__$1)
{var statearr_56271_56329 = state_56203__$1;(statearr_56271_56329[1] = 33);
} else
{var statearr_56272_56330 = state_56203__$1;(statearr_56272_56330[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 29))
{var inst_56192 = (state_56203[2]);var state_56203__$1 = state_56203;var statearr_56273_56331 = state_56203__$1;(statearr_56273_56331[2] = inst_56192);
(statearr_56273_56331[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 30))
{var inst_56144 = (state_56203[10]);var inst_56147 = (state_56203[11]);var inst_56146 = (state_56203[12]);var inst_56145 = (state_56203[13]);var inst_56161 = (state_56203[2]);var inst_56162 = (inst_56147 + 1);var tmp56267 = inst_56144;var tmp56268 = inst_56146;var tmp56269 = inst_56145;var inst_56144__$1 = tmp56267;var inst_56145__$1 = tmp56269;var inst_56146__$1 = tmp56268;var inst_56147__$1 = inst_56162;var state_56203__$1 = (function (){var statearr_56274 = state_56203;(statearr_56274[10] = inst_56144__$1);
(statearr_56274[11] = inst_56147__$1);
(statearr_56274[12] = inst_56146__$1);
(statearr_56274[13] = inst_56145__$1);
(statearr_56274[30] = inst_56161);
return statearr_56274;
})();var statearr_56275_56332 = state_56203__$1;(statearr_56275_56332[2] = null);
(statearr_56275_56332[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56204 === 31))
{var inst_56152 = (state_56203[7]);var inst_56153 = (state_56203[2]);var inst_56154 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_56155 = cljs.core.async.untap_STAR_.call(null,m,inst_56152);var state_56203__$1 = (function (){var statearr_56276 = state_56203;(statearr_56276[31] = inst_56154);
(statearr_56276[32] = inst_56153);
return statearr_56276;
})();var statearr_56277_56333 = state_56203__$1;(statearr_56277_56333[2] = inst_56155);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56203__$1);
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
var state_machine__13310__auto____0 = (function (){var statearr_56281 = (new Array(33));(statearr_56281[0] = state_machine__13310__auto__);
(statearr_56281[1] = 1);
return statearr_56281;
});
var state_machine__13310__auto____1 = (function (state_56203){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_56203);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e56282){if((e56282 instanceof Object))
{var ex__13313__auto__ = e56282;var statearr_56283_56334 = state_56203;(statearr_56283_56334[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56203);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e56282;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__56335 = state_56203;
state_56203 = G__56335;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_56203){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_56203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_56284 = f__13410__auto__.call(null);(statearr_56284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___56285);
return statearr_56284;
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
cljs.core.async.Mix = (function (){var obj56337 = {};return obj56337;
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
;var m = (function (){if(typeof cljs.core.async.t56447 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t56447 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta56448){
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
this.meta56448 = meta56448;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t56447.cljs$lang$type = true;
cljs.core.async.t56447.cljs$lang$ctorStr = "cljs.core.async/t56447";
cljs.core.async.t56447.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t56447");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t56447.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t56447.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t56447.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t56447.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t56447.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t56447.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t56447.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t56447.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t56447.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_56449){var self__ = this;
var _56449__$1 = this;return self__.meta56448;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t56447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_56449,meta56448__$1){var self__ = this;
var _56449__$1 = this;return (new cljs.core.async.t56447(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta56448__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t56447 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t56447(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta56448){return (new cljs.core.async.t56447(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta56448));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t56447(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13409__auto___56556 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_56514){var state_val_56515 = (state_56514[1]);if((state_val_56515 === 1))
{var inst_56453 = (state_56514[7]);var inst_56453__$1 = calc_state.call(null);var inst_56454 = cljs.core.seq_QMARK_.call(null,inst_56453__$1);var state_56514__$1 = (function (){var statearr_56516 = state_56514;(statearr_56516[7] = inst_56453__$1);
return statearr_56516;
})();if(inst_56454)
{var statearr_56517_56557 = state_56514__$1;(statearr_56517_56557[1] = 2);
} else
{var statearr_56518_56558 = state_56514__$1;(statearr_56518_56558[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56515 === 2))
{var inst_56453 = (state_56514[7]);var inst_56456 = cljs.core.apply.call(null,cljs.core.hash_map,inst_56453);var state_56514__$1 = state_56514;var statearr_56519_56559 = state_56514__$1;(statearr_56519_56559[2] = inst_56456);
(statearr_56519_56559[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56515 === 3))
{var inst_56453 = (state_56514[7]);var state_56514__$1 = state_56514;var statearr_56520_56560 = state_56514__$1;(statearr_56520_56560[2] = inst_56453);
(statearr_56520_56560[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56515 === 4))
{var inst_56453 = (state_56514[7]);var inst_56459 = (state_56514[2]);var inst_56460 = cljs.core.get.call(null,inst_56459,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_56461 = cljs.core.get.call(null,inst_56459,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_56462 = cljs.core.get.call(null,inst_56459,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_56463 = inst_56453;var state_56514__$1 = (function (){var statearr_56521 = state_56514;(statearr_56521[8] = inst_56462);
(statearr_56521[9] = inst_56463);
(statearr_56521[10] = inst_56460);
(statearr_56521[11] = inst_56461);
return statearr_56521;
})();var statearr_56522_56561 = state_56514__$1;(statearr_56522_56561[2] = null);
(statearr_56522_56561[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56515 === 5))
{var inst_56463 = (state_56514[9]);var inst_56466 = cljs.core.seq_QMARK_.call(null,inst_56463);var state_56514__$1 = state_56514;if(inst_56466)
{var statearr_56523_56562 = state_56514__$1;(statearr_56523_56562[1] = 7);
} else
{var statearr_56524_56563 = state_56514__$1;(statearr_56524_56563[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56515 === 6))
{var inst_56512 = (state_56514[2]);var state_56514__$1 = state_56514;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56514__$1,inst_56512);
} else
{if((state_val_56515 === 7))
{var inst_56463 = (state_56514[9]);var inst_56468 = cljs.core.apply.call(null,cljs.core.hash_map,inst_56463);var state_56514__$1 = state_56514;var statearr_56525_56564 = state_56514__$1;(statearr_56525_56564[2] = inst_56468);
(statearr_56525_56564[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56515 === 8))
{var inst_56463 = (state_56514[9]);var state_56514__$1 = state_56514;var statearr_56526_56565 = state_56514__$1;(statearr_56526_56565[2] = inst_56463);
(statearr_56526_56565[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56515 === 9))
{var inst_56471 = (state_56514[12]);var inst_56471__$1 = (state_56514[2]);var inst_56472 = cljs.core.get.call(null,inst_56471__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_56473 = cljs.core.get.call(null,inst_56471__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_56474 = cljs.core.get.call(null,inst_56471__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_56514__$1 = (function (){var statearr_56527 = state_56514;(statearr_56527[13] = inst_56473);
(statearr_56527[14] = inst_56474);
(statearr_56527[12] = inst_56471__$1);
return statearr_56527;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_56514__$1,10,inst_56472);
} else
{if((state_val_56515 === 10))
{var inst_56478 = (state_56514[15]);var inst_56479 = (state_56514[16]);var inst_56477 = (state_56514[2]);var inst_56478__$1 = cljs.core.nth.call(null,inst_56477,0,null);var inst_56479__$1 = cljs.core.nth.call(null,inst_56477,1,null);var inst_56480 = (inst_56478__$1 == null);var inst_56481 = cljs.core._EQ_.call(null,inst_56479__$1,change);var inst_56482 = (inst_56480) || (inst_56481);var state_56514__$1 = (function (){var statearr_56528 = state_56514;(statearr_56528[15] = inst_56478__$1);
(statearr_56528[16] = inst_56479__$1);
return statearr_56528;
})();if(cljs.core.truth_(inst_56482))
{var statearr_56529_56566 = state_56514__$1;(statearr_56529_56566[1] = 11);
} else
{var statearr_56530_56567 = state_56514__$1;(statearr_56530_56567[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56515 === 11))
{var inst_56478 = (state_56514[15]);var inst_56484 = (inst_56478 == null);var state_56514__$1 = state_56514;if(cljs.core.truth_(inst_56484))
{var statearr_56531_56568 = state_56514__$1;(statearr_56531_56568[1] = 14);
} else
{var statearr_56532_56569 = state_56514__$1;(statearr_56532_56569[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56515 === 12))
{var inst_56474 = (state_56514[14]);var inst_56493 = (state_56514[17]);var inst_56479 = (state_56514[16]);var inst_56493__$1 = inst_56474.call(null,inst_56479);var state_56514__$1 = (function (){var statearr_56533 = state_56514;(statearr_56533[17] = inst_56493__$1);
return statearr_56533;
})();if(cljs.core.truth_(inst_56493__$1))
{var statearr_56534_56570 = state_56514__$1;(statearr_56534_56570[1] = 17);
} else
{var statearr_56535_56571 = state_56514__$1;(statearr_56535_56571[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56515 === 13))
{var inst_56510 = (state_56514[2]);var state_56514__$1 = state_56514;var statearr_56536_56572 = state_56514__$1;(statearr_56536_56572[2] = inst_56510);
(statearr_56536_56572[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56515 === 14))
{var inst_56479 = (state_56514[16]);var inst_56486 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_56479);var state_56514__$1 = state_56514;var statearr_56537_56573 = state_56514__$1;(statearr_56537_56573[2] = inst_56486);
(statearr_56537_56573[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56515 === 15))
{var state_56514__$1 = state_56514;var statearr_56538_56574 = state_56514__$1;(statearr_56538_56574[2] = null);
(statearr_56538_56574[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56515 === 16))
{var inst_56489 = (state_56514[2]);var inst_56490 = calc_state.call(null);var inst_56463 = inst_56490;var state_56514__$1 = (function (){var statearr_56539 = state_56514;(statearr_56539[9] = inst_56463);
(statearr_56539[18] = inst_56489);
return statearr_56539;
})();var statearr_56540_56575 = state_56514__$1;(statearr_56540_56575[2] = null);
(statearr_56540_56575[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56515 === 17))
{var inst_56493 = (state_56514[17]);var state_56514__$1 = state_56514;var statearr_56541_56576 = state_56514__$1;(statearr_56541_56576[2] = inst_56493);
(statearr_56541_56576[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56515 === 18))
{var inst_56473 = (state_56514[13]);var inst_56474 = (state_56514[14]);var inst_56479 = (state_56514[16]);var inst_56496 = cljs.core.empty_QMARK_.call(null,inst_56474);var inst_56497 = inst_56473.call(null,inst_56479);var inst_56498 = cljs.core.not.call(null,inst_56497);var inst_56499 = (inst_56496) && (inst_56498);var state_56514__$1 = state_56514;var statearr_56542_56577 = state_56514__$1;(statearr_56542_56577[2] = inst_56499);
(statearr_56542_56577[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56515 === 19))
{var inst_56501 = (state_56514[2]);var state_56514__$1 = state_56514;if(cljs.core.truth_(inst_56501))
{var statearr_56543_56578 = state_56514__$1;(statearr_56543_56578[1] = 20);
} else
{var statearr_56544_56579 = state_56514__$1;(statearr_56544_56579[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56515 === 20))
{var inst_56478 = (state_56514[15]);var state_56514__$1 = state_56514;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56514__$1,23,out,inst_56478);
} else
{if((state_val_56515 === 21))
{var state_56514__$1 = state_56514;var statearr_56545_56580 = state_56514__$1;(statearr_56545_56580[2] = null);
(statearr_56545_56580[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56515 === 22))
{var inst_56471 = (state_56514[12]);var inst_56507 = (state_56514[2]);var inst_56463 = inst_56471;var state_56514__$1 = (function (){var statearr_56546 = state_56514;(statearr_56546[9] = inst_56463);
(statearr_56546[19] = inst_56507);
return statearr_56546;
})();var statearr_56547_56581 = state_56514__$1;(statearr_56547_56581[2] = null);
(statearr_56547_56581[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56515 === 23))
{var inst_56504 = (state_56514[2]);var state_56514__$1 = state_56514;var statearr_56548_56582 = state_56514__$1;(statearr_56548_56582[2] = inst_56504);
(statearr_56548_56582[1] = 22);
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
var state_machine__13310__auto____0 = (function (){var statearr_56552 = (new Array(20));(statearr_56552[0] = state_machine__13310__auto__);
(statearr_56552[1] = 1);
return statearr_56552;
});
var state_machine__13310__auto____1 = (function (state_56514){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_56514);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e56553){if((e56553 instanceof Object))
{var ex__13313__auto__ = e56553;var statearr_56554_56583 = state_56514;(statearr_56554_56583[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56514);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e56553;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__56584 = state_56514;
state_56514 = G__56584;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_56514){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_56514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_56555 = f__13410__auto__.call(null);(statearr_56555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___56556);
return statearr_56555;
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
cljs.core.async.Pub = (function (){var obj56586 = {};return obj56586;
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
return (function (p1__56587_SHARP_){if(cljs.core.truth_(p1__56587_SHARP_.call(null,topic)))
{return p1__56587_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__56587_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6289__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t56712 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t56712 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta56713){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta56713 = meta56713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t56712.cljs$lang$type = true;
cljs.core.async.t56712.cljs$lang$ctorStr = "cljs.core.async/t56712";
cljs.core.async.t56712.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t56712");
});})(mults,ensure_mult))
;
cljs.core.async.t56712.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t56712.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t56712.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t56712.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t56712.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t56712.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t56712.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t56712.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_56714){var self__ = this;
var _56714__$1 = this;return self__.meta56713;
});})(mults,ensure_mult))
;
cljs.core.async.t56712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_56714,meta56713__$1){var self__ = this;
var _56714__$1 = this;return (new cljs.core.async.t56712(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta56713__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t56712 = ((function (mults,ensure_mult){
return (function __GT_t56712(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta56713){return (new cljs.core.async.t56712(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta56713));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t56712(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13409__auto___56836 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_56788){var state_val_56789 = (state_56788[1]);if((state_val_56789 === 1))
{var state_56788__$1 = state_56788;var statearr_56790_56837 = state_56788__$1;(statearr_56790_56837[2] = null);
(statearr_56790_56837[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56789 === 2))
{var state_56788__$1 = state_56788;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56788__$1,4,ch);
} else
{if((state_val_56789 === 3))
{var inst_56786 = (state_56788[2]);var state_56788__$1 = state_56788;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56788__$1,inst_56786);
} else
{if((state_val_56789 === 4))
{var inst_56717 = (state_56788[7]);var inst_56717__$1 = (state_56788[2]);var inst_56718 = (inst_56717__$1 == null);var state_56788__$1 = (function (){var statearr_56791 = state_56788;(statearr_56791[7] = inst_56717__$1);
return statearr_56791;
})();if(cljs.core.truth_(inst_56718))
{var statearr_56792_56838 = state_56788__$1;(statearr_56792_56838[1] = 5);
} else
{var statearr_56793_56839 = state_56788__$1;(statearr_56793_56839[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56789 === 5))
{var inst_56724 = cljs.core.deref.call(null,mults);var inst_56725 = cljs.core.vals.call(null,inst_56724);var inst_56726 = cljs.core.seq.call(null,inst_56725);var inst_56727 = inst_56726;var inst_56728 = null;var inst_56729 = 0;var inst_56730 = 0;var state_56788__$1 = (function (){var statearr_56794 = state_56788;(statearr_56794[8] = inst_56728);
(statearr_56794[9] = inst_56727);
(statearr_56794[10] = inst_56729);
(statearr_56794[11] = inst_56730);
return statearr_56794;
})();var statearr_56795_56840 = state_56788__$1;(statearr_56795_56840[2] = null);
(statearr_56795_56840[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56789 === 6))
{var inst_56717 = (state_56788[7]);var inst_56765 = (state_56788[12]);var inst_56767 = (state_56788[13]);var inst_56765__$1 = topic_fn.call(null,inst_56717);var inst_56766 = cljs.core.deref.call(null,mults);var inst_56767__$1 = cljs.core.get.call(null,inst_56766,inst_56765__$1);var state_56788__$1 = (function (){var statearr_56796 = state_56788;(statearr_56796[12] = inst_56765__$1);
(statearr_56796[13] = inst_56767__$1);
return statearr_56796;
})();if(cljs.core.truth_(inst_56767__$1))
{var statearr_56797_56841 = state_56788__$1;(statearr_56797_56841[1] = 19);
} else
{var statearr_56798_56842 = state_56788__$1;(statearr_56798_56842[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56789 === 7))
{var inst_56784 = (state_56788[2]);var state_56788__$1 = state_56788;var statearr_56799_56843 = state_56788__$1;(statearr_56799_56843[2] = inst_56784);
(statearr_56799_56843[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56789 === 8))
{var inst_56729 = (state_56788[10]);var inst_56730 = (state_56788[11]);var inst_56732 = (inst_56730 < inst_56729);var inst_56733 = inst_56732;var state_56788__$1 = state_56788;if(cljs.core.truth_(inst_56733))
{var statearr_56803_56844 = state_56788__$1;(statearr_56803_56844[1] = 10);
} else
{var statearr_56804_56845 = state_56788__$1;(statearr_56804_56845[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56789 === 9))
{var inst_56763 = (state_56788[2]);var state_56788__$1 = state_56788;var statearr_56805_56846 = state_56788__$1;(statearr_56805_56846[2] = inst_56763);
(statearr_56805_56846[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56789 === 10))
{var inst_56728 = (state_56788[8]);var inst_56727 = (state_56788[9]);var inst_56729 = (state_56788[10]);var inst_56730 = (state_56788[11]);var inst_56735 = cljs.core._nth.call(null,inst_56728,inst_56730);var inst_56736 = cljs.core.async.muxch_STAR_.call(null,inst_56735);var inst_56737 = cljs.core.async.close_BANG_.call(null,inst_56736);var inst_56738 = (inst_56730 + 1);var tmp56800 = inst_56728;var tmp56801 = inst_56727;var tmp56802 = inst_56729;var inst_56727__$1 = tmp56801;var inst_56728__$1 = tmp56800;var inst_56729__$1 = tmp56802;var inst_56730__$1 = inst_56738;var state_56788__$1 = (function (){var statearr_56806 = state_56788;(statearr_56806[8] = inst_56728__$1);
(statearr_56806[9] = inst_56727__$1);
(statearr_56806[10] = inst_56729__$1);
(statearr_56806[14] = inst_56737);
(statearr_56806[11] = inst_56730__$1);
return statearr_56806;
})();var statearr_56807_56847 = state_56788__$1;(statearr_56807_56847[2] = null);
(statearr_56807_56847[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56789 === 11))
{var inst_56727 = (state_56788[9]);var inst_56741 = (state_56788[15]);var inst_56741__$1 = cljs.core.seq.call(null,inst_56727);var state_56788__$1 = (function (){var statearr_56808 = state_56788;(statearr_56808[15] = inst_56741__$1);
return statearr_56808;
})();if(inst_56741__$1)
{var statearr_56809_56848 = state_56788__$1;(statearr_56809_56848[1] = 13);
} else
{var statearr_56810_56849 = state_56788__$1;(statearr_56810_56849[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56789 === 12))
{var inst_56761 = (state_56788[2]);var state_56788__$1 = state_56788;var statearr_56811_56850 = state_56788__$1;(statearr_56811_56850[2] = inst_56761);
(statearr_56811_56850[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56789 === 13))
{var inst_56741 = (state_56788[15]);var inst_56743 = cljs.core.chunked_seq_QMARK_.call(null,inst_56741);var state_56788__$1 = state_56788;if(inst_56743)
{var statearr_56812_56851 = state_56788__$1;(statearr_56812_56851[1] = 16);
} else
{var statearr_56813_56852 = state_56788__$1;(statearr_56813_56852[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56789 === 14))
{var state_56788__$1 = state_56788;var statearr_56814_56853 = state_56788__$1;(statearr_56814_56853[2] = null);
(statearr_56814_56853[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56789 === 15))
{var inst_56759 = (state_56788[2]);var state_56788__$1 = state_56788;var statearr_56815_56854 = state_56788__$1;(statearr_56815_56854[2] = inst_56759);
(statearr_56815_56854[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56789 === 16))
{var inst_56741 = (state_56788[15]);var inst_56745 = cljs.core.chunk_first.call(null,inst_56741);var inst_56746 = cljs.core.chunk_rest.call(null,inst_56741);var inst_56747 = cljs.core.count.call(null,inst_56745);var inst_56727 = inst_56746;var inst_56728 = inst_56745;var inst_56729 = inst_56747;var inst_56730 = 0;var state_56788__$1 = (function (){var statearr_56816 = state_56788;(statearr_56816[8] = inst_56728);
(statearr_56816[9] = inst_56727);
(statearr_56816[10] = inst_56729);
(statearr_56816[11] = inst_56730);
return statearr_56816;
})();var statearr_56817_56855 = state_56788__$1;(statearr_56817_56855[2] = null);
(statearr_56817_56855[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56789 === 17))
{var inst_56741 = (state_56788[15]);var inst_56750 = cljs.core.first.call(null,inst_56741);var inst_56751 = cljs.core.async.muxch_STAR_.call(null,inst_56750);var inst_56752 = cljs.core.async.close_BANG_.call(null,inst_56751);var inst_56753 = cljs.core.next.call(null,inst_56741);var inst_56727 = inst_56753;var inst_56728 = null;var inst_56729 = 0;var inst_56730 = 0;var state_56788__$1 = (function (){var statearr_56818 = state_56788;(statearr_56818[16] = inst_56752);
(statearr_56818[8] = inst_56728);
(statearr_56818[9] = inst_56727);
(statearr_56818[10] = inst_56729);
(statearr_56818[11] = inst_56730);
return statearr_56818;
})();var statearr_56819_56856 = state_56788__$1;(statearr_56819_56856[2] = null);
(statearr_56819_56856[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56789 === 18))
{var inst_56756 = (state_56788[2]);var state_56788__$1 = state_56788;var statearr_56820_56857 = state_56788__$1;(statearr_56820_56857[2] = inst_56756);
(statearr_56820_56857[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56789 === 19))
{var state_56788__$1 = state_56788;var statearr_56821_56858 = state_56788__$1;(statearr_56821_56858[2] = null);
(statearr_56821_56858[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56789 === 20))
{var state_56788__$1 = state_56788;var statearr_56822_56859 = state_56788__$1;(statearr_56822_56859[2] = null);
(statearr_56822_56859[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56789 === 21))
{var inst_56781 = (state_56788[2]);var state_56788__$1 = (function (){var statearr_56823 = state_56788;(statearr_56823[17] = inst_56781);
return statearr_56823;
})();var statearr_56824_56860 = state_56788__$1;(statearr_56824_56860[2] = null);
(statearr_56824_56860[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56789 === 22))
{var inst_56778 = (state_56788[2]);var state_56788__$1 = state_56788;var statearr_56825_56861 = state_56788__$1;(statearr_56825_56861[2] = inst_56778);
(statearr_56825_56861[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56789 === 23))
{var inst_56765 = (state_56788[12]);var inst_56769 = (state_56788[2]);var inst_56770 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_56765);var state_56788__$1 = (function (){var statearr_56826 = state_56788;(statearr_56826[18] = inst_56769);
return statearr_56826;
})();var statearr_56827_56862 = state_56788__$1;(statearr_56827_56862[2] = inst_56770);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56788__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56789 === 24))
{var inst_56717 = (state_56788[7]);var inst_56767 = (state_56788[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_56788,23,Object,null,22);var inst_56774 = cljs.core.async.muxch_STAR_.call(null,inst_56767);var state_56788__$1 = state_56788;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56788__$1,25,inst_56774,inst_56717);
} else
{if((state_val_56789 === 25))
{var inst_56776 = (state_56788[2]);var state_56788__$1 = state_56788;var statearr_56828_56863 = state_56788__$1;(statearr_56828_56863[2] = inst_56776);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56788__$1);
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
var state_machine__13310__auto____0 = (function (){var statearr_56832 = (new Array(19));(statearr_56832[0] = state_machine__13310__auto__);
(statearr_56832[1] = 1);
return statearr_56832;
});
var state_machine__13310__auto____1 = (function (state_56788){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_56788);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e56833){if((e56833 instanceof Object))
{var ex__13313__auto__ = e56833;var statearr_56834_56864 = state_56788;(statearr_56834_56864[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56788);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e56833;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__56865 = state_56788;
state_56788 = G__56865;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_56788){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_56788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_56835 = f__13410__auto__.call(null);(statearr_56835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___56836);
return statearr_56835;
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
,cljs.core.range.call(null,cnt));var c__13409__auto___57002 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_56972){var state_val_56973 = (state_56972[1]);if((state_val_56973 === 1))
{var state_56972__$1 = state_56972;var statearr_56974_57003 = state_56972__$1;(statearr_56974_57003[2] = null);
(statearr_56974_57003[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56973 === 2))
{var inst_56935 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_56936 = 0;var state_56972__$1 = (function (){var statearr_56975 = state_56972;(statearr_56975[7] = inst_56935);
(statearr_56975[8] = inst_56936);
return statearr_56975;
})();var statearr_56976_57004 = state_56972__$1;(statearr_56976_57004[2] = null);
(statearr_56976_57004[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56973 === 3))
{var inst_56970 = (state_56972[2]);var state_56972__$1 = state_56972;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56972__$1,inst_56970);
} else
{if((state_val_56973 === 4))
{var inst_56936 = (state_56972[8]);var inst_56938 = (inst_56936 < cnt);var state_56972__$1 = state_56972;if(cljs.core.truth_(inst_56938))
{var statearr_56977_57005 = state_56972__$1;(statearr_56977_57005[1] = 6);
} else
{var statearr_56978_57006 = state_56972__$1;(statearr_56978_57006[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56973 === 5))
{var inst_56956 = (state_56972[2]);var state_56972__$1 = (function (){var statearr_56979 = state_56972;(statearr_56979[9] = inst_56956);
return statearr_56979;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56972__$1,12,dchan);
} else
{if((state_val_56973 === 6))
{var state_56972__$1 = state_56972;var statearr_56980_57007 = state_56972__$1;(statearr_56980_57007[2] = null);
(statearr_56980_57007[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56973 === 7))
{var state_56972__$1 = state_56972;var statearr_56981_57008 = state_56972__$1;(statearr_56981_57008[2] = null);
(statearr_56981_57008[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56973 === 8))
{var inst_56954 = (state_56972[2]);var state_56972__$1 = state_56972;var statearr_56982_57009 = state_56972__$1;(statearr_56982_57009[2] = inst_56954);
(statearr_56982_57009[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56973 === 9))
{var inst_56936 = (state_56972[8]);var inst_56949 = (state_56972[2]);var inst_56950 = (inst_56936 + 1);var inst_56936__$1 = inst_56950;var state_56972__$1 = (function (){var statearr_56983 = state_56972;(statearr_56983[8] = inst_56936__$1);
(statearr_56983[10] = inst_56949);
return statearr_56983;
})();var statearr_56984_57010 = state_56972__$1;(statearr_56984_57010[2] = null);
(statearr_56984_57010[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56973 === 10))
{var inst_56940 = (state_56972[2]);var inst_56941 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_56972__$1 = (function (){var statearr_56985 = state_56972;(statearr_56985[11] = inst_56940);
return statearr_56985;
})();var statearr_56986_57011 = state_56972__$1;(statearr_56986_57011[2] = inst_56941);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56972__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56973 === 11))
{var inst_56936 = (state_56972[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_56972,10,Object,null,9);var inst_56945 = chs__$1.call(null,inst_56936);var inst_56946 = done.call(null,inst_56936);var inst_56947 = cljs.core.async.take_BANG_.call(null,inst_56945,inst_56946);var state_56972__$1 = state_56972;var statearr_56987_57012 = state_56972__$1;(statearr_56987_57012[2] = inst_56947);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56972__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56973 === 12))
{var inst_56958 = (state_56972[12]);var inst_56958__$1 = (state_56972[2]);var inst_56959 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_56958__$1);var state_56972__$1 = (function (){var statearr_56988 = state_56972;(statearr_56988[12] = inst_56958__$1);
return statearr_56988;
})();if(cljs.core.truth_(inst_56959))
{var statearr_56989_57013 = state_56972__$1;(statearr_56989_57013[1] = 13);
} else
{var statearr_56990_57014 = state_56972__$1;(statearr_56990_57014[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56973 === 13))
{var inst_56961 = cljs.core.async.close_BANG_.call(null,out);var state_56972__$1 = state_56972;var statearr_56991_57015 = state_56972__$1;(statearr_56991_57015[2] = inst_56961);
(statearr_56991_57015[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56973 === 14))
{var inst_56958 = (state_56972[12]);var inst_56963 = cljs.core.apply.call(null,f,inst_56958);var state_56972__$1 = state_56972;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56972__$1,16,out,inst_56963);
} else
{if((state_val_56973 === 15))
{var inst_56968 = (state_56972[2]);var state_56972__$1 = state_56972;var statearr_56992_57016 = state_56972__$1;(statearr_56992_57016[2] = inst_56968);
(statearr_56992_57016[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_56973 === 16))
{var inst_56965 = (state_56972[2]);var state_56972__$1 = (function (){var statearr_56993 = state_56972;(statearr_56993[13] = inst_56965);
return statearr_56993;
})();var statearr_56994_57017 = state_56972__$1;(statearr_56994_57017[2] = null);
(statearr_56994_57017[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_56998 = (new Array(14));(statearr_56998[0] = state_machine__13310__auto__);
(statearr_56998[1] = 1);
return statearr_56998;
});
var state_machine__13310__auto____1 = (function (state_56972){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_56972);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e56999){if((e56999 instanceof Object))
{var ex__13313__auto__ = e56999;var statearr_57000_57018 = state_56972;(statearr_57000_57018[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56972);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e56999;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__57019 = state_56972;
state_56972 = G__57019;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_56972){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_56972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_57001 = f__13410__auto__.call(null);(statearr_57001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___57002);
return statearr_57001;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___57127 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_57103){var state_val_57104 = (state_57103[1]);if((state_val_57104 === 1))
{var inst_57074 = cljs.core.vec.call(null,chs);var inst_57075 = inst_57074;var state_57103__$1 = (function (){var statearr_57105 = state_57103;(statearr_57105[7] = inst_57075);
return statearr_57105;
})();var statearr_57106_57128 = state_57103__$1;(statearr_57106_57128[2] = null);
(statearr_57106_57128[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57104 === 2))
{var inst_57075 = (state_57103[7]);var inst_57077 = cljs.core.count.call(null,inst_57075);var inst_57078 = (inst_57077 > 0);var state_57103__$1 = state_57103;if(cljs.core.truth_(inst_57078))
{var statearr_57107_57129 = state_57103__$1;(statearr_57107_57129[1] = 4);
} else
{var statearr_57108_57130 = state_57103__$1;(statearr_57108_57130[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57104 === 3))
{var inst_57101 = (state_57103[2]);var state_57103__$1 = state_57103;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57103__$1,inst_57101);
} else
{if((state_val_57104 === 4))
{var inst_57075 = (state_57103[7]);var state_57103__$1 = state_57103;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_57103__$1,7,inst_57075);
} else
{if((state_val_57104 === 5))
{var inst_57097 = cljs.core.async.close_BANG_.call(null,out);var state_57103__$1 = state_57103;var statearr_57109_57131 = state_57103__$1;(statearr_57109_57131[2] = inst_57097);
(statearr_57109_57131[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57104 === 6))
{var inst_57099 = (state_57103[2]);var state_57103__$1 = state_57103;var statearr_57110_57132 = state_57103__$1;(statearr_57110_57132[2] = inst_57099);
(statearr_57110_57132[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57104 === 7))
{var inst_57083 = (state_57103[8]);var inst_57082 = (state_57103[9]);var inst_57082__$1 = (state_57103[2]);var inst_57083__$1 = cljs.core.nth.call(null,inst_57082__$1,0,null);var inst_57084 = cljs.core.nth.call(null,inst_57082__$1,1,null);var inst_57085 = (inst_57083__$1 == null);var state_57103__$1 = (function (){var statearr_57111 = state_57103;(statearr_57111[10] = inst_57084);
(statearr_57111[8] = inst_57083__$1);
(statearr_57111[9] = inst_57082__$1);
return statearr_57111;
})();if(cljs.core.truth_(inst_57085))
{var statearr_57112_57133 = state_57103__$1;(statearr_57112_57133[1] = 8);
} else
{var statearr_57113_57134 = state_57103__$1;(statearr_57113_57134[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57104 === 8))
{var inst_57075 = (state_57103[7]);var inst_57084 = (state_57103[10]);var inst_57083 = (state_57103[8]);var inst_57082 = (state_57103[9]);var inst_57087 = (function (){var c = inst_57084;var v = inst_57083;var vec__57080 = inst_57082;var cs = inst_57075;return ((function (c,v,vec__57080,cs,inst_57075,inst_57084,inst_57083,inst_57082,state_val_57104){
return (function (p1__57020_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__57020_SHARP_);
});
;})(c,v,vec__57080,cs,inst_57075,inst_57084,inst_57083,inst_57082,state_val_57104))
})();var inst_57088 = cljs.core.filterv.call(null,inst_57087,inst_57075);var inst_57075__$1 = inst_57088;var state_57103__$1 = (function (){var statearr_57114 = state_57103;(statearr_57114[7] = inst_57075__$1);
return statearr_57114;
})();var statearr_57115_57135 = state_57103__$1;(statearr_57115_57135[2] = null);
(statearr_57115_57135[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57104 === 9))
{var inst_57083 = (state_57103[8]);var state_57103__$1 = state_57103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57103__$1,11,out,inst_57083);
} else
{if((state_val_57104 === 10))
{var inst_57095 = (state_57103[2]);var state_57103__$1 = state_57103;var statearr_57117_57136 = state_57103__$1;(statearr_57117_57136[2] = inst_57095);
(statearr_57117_57136[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57104 === 11))
{var inst_57075 = (state_57103[7]);var inst_57092 = (state_57103[2]);var tmp57116 = inst_57075;var inst_57075__$1 = tmp57116;var state_57103__$1 = (function (){var statearr_57118 = state_57103;(statearr_57118[7] = inst_57075__$1);
(statearr_57118[11] = inst_57092);
return statearr_57118;
})();var statearr_57119_57137 = state_57103__$1;(statearr_57119_57137[2] = null);
(statearr_57119_57137[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_57123 = (new Array(12));(statearr_57123[0] = state_machine__13310__auto__);
(statearr_57123[1] = 1);
return statearr_57123;
});
var state_machine__13310__auto____1 = (function (state_57103){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_57103);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e57124){if((e57124 instanceof Object))
{var ex__13313__auto__ = e57124;var statearr_57125_57138 = state_57103;(statearr_57125_57138[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57103);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e57124;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__57139 = state_57103;
state_57103 = G__57139;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_57103){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_57103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_57126 = f__13410__auto__.call(null);(statearr_57126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___57127);
return statearr_57126;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___57232 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_57209){var state_val_57210 = (state_57209[1]);if((state_val_57210 === 1))
{var inst_57186 = 0;var state_57209__$1 = (function (){var statearr_57211 = state_57209;(statearr_57211[7] = inst_57186);
return statearr_57211;
})();var statearr_57212_57233 = state_57209__$1;(statearr_57212_57233[2] = null);
(statearr_57212_57233[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57210 === 2))
{var inst_57186 = (state_57209[7]);var inst_57188 = (inst_57186 < n);var state_57209__$1 = state_57209;if(cljs.core.truth_(inst_57188))
{var statearr_57213_57234 = state_57209__$1;(statearr_57213_57234[1] = 4);
} else
{var statearr_57214_57235 = state_57209__$1;(statearr_57214_57235[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57210 === 3))
{var inst_57206 = (state_57209[2]);var inst_57207 = cljs.core.async.close_BANG_.call(null,out);var state_57209__$1 = (function (){var statearr_57215 = state_57209;(statearr_57215[8] = inst_57206);
return statearr_57215;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57209__$1,inst_57207);
} else
{if((state_val_57210 === 4))
{var state_57209__$1 = state_57209;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57209__$1,7,ch);
} else
{if((state_val_57210 === 5))
{var state_57209__$1 = state_57209;var statearr_57216_57236 = state_57209__$1;(statearr_57216_57236[2] = null);
(statearr_57216_57236[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57210 === 6))
{var inst_57204 = (state_57209[2]);var state_57209__$1 = state_57209;var statearr_57217_57237 = state_57209__$1;(statearr_57217_57237[2] = inst_57204);
(statearr_57217_57237[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57210 === 7))
{var inst_57191 = (state_57209[9]);var inst_57191__$1 = (state_57209[2]);var inst_57192 = (inst_57191__$1 == null);var inst_57193 = cljs.core.not.call(null,inst_57192);var state_57209__$1 = (function (){var statearr_57218 = state_57209;(statearr_57218[9] = inst_57191__$1);
return statearr_57218;
})();if(inst_57193)
{var statearr_57219_57238 = state_57209__$1;(statearr_57219_57238[1] = 8);
} else
{var statearr_57220_57239 = state_57209__$1;(statearr_57220_57239[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57210 === 8))
{var inst_57191 = (state_57209[9]);var state_57209__$1 = state_57209;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57209__$1,11,out,inst_57191);
} else
{if((state_val_57210 === 9))
{var state_57209__$1 = state_57209;var statearr_57221_57240 = state_57209__$1;(statearr_57221_57240[2] = null);
(statearr_57221_57240[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57210 === 10))
{var inst_57201 = (state_57209[2]);var state_57209__$1 = state_57209;var statearr_57222_57241 = state_57209__$1;(statearr_57222_57241[2] = inst_57201);
(statearr_57222_57241[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57210 === 11))
{var inst_57186 = (state_57209[7]);var inst_57196 = (state_57209[2]);var inst_57197 = (inst_57186 + 1);var inst_57186__$1 = inst_57197;var state_57209__$1 = (function (){var statearr_57223 = state_57209;(statearr_57223[10] = inst_57196);
(statearr_57223[7] = inst_57186__$1);
return statearr_57223;
})();var statearr_57224_57242 = state_57209__$1;(statearr_57224_57242[2] = null);
(statearr_57224_57242[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_57228 = (new Array(11));(statearr_57228[0] = state_machine__13310__auto__);
(statearr_57228[1] = 1);
return statearr_57228;
});
var state_machine__13310__auto____1 = (function (state_57209){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_57209);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e57229){if((e57229 instanceof Object))
{var ex__13313__auto__ = e57229;var statearr_57230_57243 = state_57209;(statearr_57230_57243[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57209);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e57229;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__57244 = state_57209;
state_57209 = G__57244;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_57209){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_57209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_57231 = f__13410__auto__.call(null);(statearr_57231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___57232);
return statearr_57231;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___57341 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_57316){var state_val_57317 = (state_57316[1]);if((state_val_57317 === 1))
{var inst_57293 = null;var state_57316__$1 = (function (){var statearr_57318 = state_57316;(statearr_57318[7] = inst_57293);
return statearr_57318;
})();var statearr_57319_57342 = state_57316__$1;(statearr_57319_57342[2] = null);
(statearr_57319_57342[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57317 === 2))
{var state_57316__$1 = state_57316;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57316__$1,4,ch);
} else
{if((state_val_57317 === 3))
{var inst_57313 = (state_57316[2]);var inst_57314 = cljs.core.async.close_BANG_.call(null,out);var state_57316__$1 = (function (){var statearr_57320 = state_57316;(statearr_57320[8] = inst_57313);
return statearr_57320;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57316__$1,inst_57314);
} else
{if((state_val_57317 === 4))
{var inst_57296 = (state_57316[9]);var inst_57296__$1 = (state_57316[2]);var inst_57297 = (inst_57296__$1 == null);var inst_57298 = cljs.core.not.call(null,inst_57297);var state_57316__$1 = (function (){var statearr_57321 = state_57316;(statearr_57321[9] = inst_57296__$1);
return statearr_57321;
})();if(inst_57298)
{var statearr_57322_57343 = state_57316__$1;(statearr_57322_57343[1] = 5);
} else
{var statearr_57323_57344 = state_57316__$1;(statearr_57323_57344[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57317 === 5))
{var inst_57296 = (state_57316[9]);var inst_57293 = (state_57316[7]);var inst_57300 = cljs.core._EQ_.call(null,inst_57296,inst_57293);var state_57316__$1 = state_57316;if(inst_57300)
{var statearr_57324_57345 = state_57316__$1;(statearr_57324_57345[1] = 8);
} else
{var statearr_57325_57346 = state_57316__$1;(statearr_57325_57346[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57317 === 6))
{var state_57316__$1 = state_57316;var statearr_57327_57347 = state_57316__$1;(statearr_57327_57347[2] = null);
(statearr_57327_57347[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57317 === 7))
{var inst_57311 = (state_57316[2]);var state_57316__$1 = state_57316;var statearr_57328_57348 = state_57316__$1;(statearr_57328_57348[2] = inst_57311);
(statearr_57328_57348[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57317 === 8))
{var inst_57293 = (state_57316[7]);var tmp57326 = inst_57293;var inst_57293__$1 = tmp57326;var state_57316__$1 = (function (){var statearr_57329 = state_57316;(statearr_57329[7] = inst_57293__$1);
return statearr_57329;
})();var statearr_57330_57349 = state_57316__$1;(statearr_57330_57349[2] = null);
(statearr_57330_57349[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57317 === 9))
{var inst_57296 = (state_57316[9]);var state_57316__$1 = state_57316;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57316__$1,11,out,inst_57296);
} else
{if((state_val_57317 === 10))
{var inst_57308 = (state_57316[2]);var state_57316__$1 = state_57316;var statearr_57331_57350 = state_57316__$1;(statearr_57331_57350[2] = inst_57308);
(statearr_57331_57350[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57317 === 11))
{var inst_57296 = (state_57316[9]);var inst_57305 = (state_57316[2]);var inst_57293 = inst_57296;var state_57316__$1 = (function (){var statearr_57332 = state_57316;(statearr_57332[10] = inst_57305);
(statearr_57332[7] = inst_57293);
return statearr_57332;
})();var statearr_57333_57351 = state_57316__$1;(statearr_57333_57351[2] = null);
(statearr_57333_57351[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_57337 = (new Array(11));(statearr_57337[0] = state_machine__13310__auto__);
(statearr_57337[1] = 1);
return statearr_57337;
});
var state_machine__13310__auto____1 = (function (state_57316){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_57316);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e57338){if((e57338 instanceof Object))
{var ex__13313__auto__ = e57338;var statearr_57339_57352 = state_57316;(statearr_57339_57352[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57316);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e57338;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__57353 = state_57316;
state_57316 = G__57353;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_57316){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_57316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_57340 = f__13410__auto__.call(null);(statearr_57340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___57341);
return statearr_57340;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___57488 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_57458){var state_val_57459 = (state_57458[1]);if((state_val_57459 === 1))
{var inst_57421 = (new Array(n));var inst_57422 = inst_57421;var inst_57423 = 0;var state_57458__$1 = (function (){var statearr_57460 = state_57458;(statearr_57460[7] = inst_57423);
(statearr_57460[8] = inst_57422);
return statearr_57460;
})();var statearr_57461_57489 = state_57458__$1;(statearr_57461_57489[2] = null);
(statearr_57461_57489[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57459 === 2))
{var state_57458__$1 = state_57458;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57458__$1,4,ch);
} else
{if((state_val_57459 === 3))
{var inst_57456 = (state_57458[2]);var state_57458__$1 = state_57458;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57458__$1,inst_57456);
} else
{if((state_val_57459 === 4))
{var inst_57426 = (state_57458[9]);var inst_57426__$1 = (state_57458[2]);var inst_57427 = (inst_57426__$1 == null);var inst_57428 = cljs.core.not.call(null,inst_57427);var state_57458__$1 = (function (){var statearr_57462 = state_57458;(statearr_57462[9] = inst_57426__$1);
return statearr_57462;
})();if(inst_57428)
{var statearr_57463_57490 = state_57458__$1;(statearr_57463_57490[1] = 5);
} else
{var statearr_57464_57491 = state_57458__$1;(statearr_57464_57491[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57459 === 5))
{var inst_57431 = (state_57458[10]);var inst_57426 = (state_57458[9]);var inst_57423 = (state_57458[7]);var inst_57422 = (state_57458[8]);var inst_57430 = (inst_57422[inst_57423] = inst_57426);var inst_57431__$1 = (inst_57423 + 1);var inst_57432 = (inst_57431__$1 < n);var state_57458__$1 = (function (){var statearr_57465 = state_57458;(statearr_57465[11] = inst_57430);
(statearr_57465[10] = inst_57431__$1);
return statearr_57465;
})();if(cljs.core.truth_(inst_57432))
{var statearr_57466_57492 = state_57458__$1;(statearr_57466_57492[1] = 8);
} else
{var statearr_57467_57493 = state_57458__$1;(statearr_57467_57493[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57459 === 6))
{var inst_57423 = (state_57458[7]);var inst_57444 = (inst_57423 > 0);var state_57458__$1 = state_57458;if(cljs.core.truth_(inst_57444))
{var statearr_57469_57494 = state_57458__$1;(statearr_57469_57494[1] = 12);
} else
{var statearr_57470_57495 = state_57458__$1;(statearr_57470_57495[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57459 === 7))
{var inst_57454 = (state_57458[2]);var state_57458__$1 = state_57458;var statearr_57471_57496 = state_57458__$1;(statearr_57471_57496[2] = inst_57454);
(statearr_57471_57496[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57459 === 8))
{var inst_57431 = (state_57458[10]);var inst_57422 = (state_57458[8]);var tmp57468 = inst_57422;var inst_57422__$1 = tmp57468;var inst_57423 = inst_57431;var state_57458__$1 = (function (){var statearr_57472 = state_57458;(statearr_57472[7] = inst_57423);
(statearr_57472[8] = inst_57422__$1);
return statearr_57472;
})();var statearr_57473_57497 = state_57458__$1;(statearr_57473_57497[2] = null);
(statearr_57473_57497[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57459 === 9))
{var inst_57422 = (state_57458[8]);var inst_57436 = cljs.core.vec.call(null,inst_57422);var state_57458__$1 = state_57458;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57458__$1,11,out,inst_57436);
} else
{if((state_val_57459 === 10))
{var inst_57442 = (state_57458[2]);var state_57458__$1 = state_57458;var statearr_57474_57498 = state_57458__$1;(statearr_57474_57498[2] = inst_57442);
(statearr_57474_57498[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57459 === 11))
{var inst_57438 = (state_57458[2]);var inst_57439 = (new Array(n));var inst_57422 = inst_57439;var inst_57423 = 0;var state_57458__$1 = (function (){var statearr_57475 = state_57458;(statearr_57475[12] = inst_57438);
(statearr_57475[7] = inst_57423);
(statearr_57475[8] = inst_57422);
return statearr_57475;
})();var statearr_57476_57499 = state_57458__$1;(statearr_57476_57499[2] = null);
(statearr_57476_57499[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57459 === 12))
{var inst_57422 = (state_57458[8]);var inst_57446 = cljs.core.vec.call(null,inst_57422);var state_57458__$1 = state_57458;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57458__$1,15,out,inst_57446);
} else
{if((state_val_57459 === 13))
{var state_57458__$1 = state_57458;var statearr_57477_57500 = state_57458__$1;(statearr_57477_57500[2] = null);
(statearr_57477_57500[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57459 === 14))
{var inst_57451 = (state_57458[2]);var inst_57452 = cljs.core.async.close_BANG_.call(null,out);var state_57458__$1 = (function (){var statearr_57478 = state_57458;(statearr_57478[13] = inst_57451);
return statearr_57478;
})();var statearr_57479_57501 = state_57458__$1;(statearr_57479_57501[2] = inst_57452);
(statearr_57479_57501[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57459 === 15))
{var inst_57448 = (state_57458[2]);var state_57458__$1 = state_57458;var statearr_57480_57502 = state_57458__$1;(statearr_57480_57502[2] = inst_57448);
(statearr_57480_57502[1] = 14);
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
var state_machine__13310__auto____0 = (function (){var statearr_57484 = (new Array(14));(statearr_57484[0] = state_machine__13310__auto__);
(statearr_57484[1] = 1);
return statearr_57484;
});
var state_machine__13310__auto____1 = (function (state_57458){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_57458);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e57485){if((e57485 instanceof Object))
{var ex__13313__auto__ = e57485;var statearr_57486_57503 = state_57458;(statearr_57486_57503[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57458);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e57485;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__57504 = state_57458;
state_57458 = G__57504;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_57458){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_57458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_57487 = f__13410__auto__.call(null);(statearr_57487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___57488);
return statearr_57487;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___57647 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_57617){var state_val_57618 = (state_57617[1]);if((state_val_57618 === 1))
{var inst_57576 = (new Array(0));var inst_57577 = inst_57576;var inst_57578 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_57617__$1 = (function (){var statearr_57619 = state_57617;(statearr_57619[7] = inst_57578);
(statearr_57619[8] = inst_57577);
return statearr_57619;
})();var statearr_57620_57648 = state_57617__$1;(statearr_57620_57648[2] = null);
(statearr_57620_57648[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57618 === 2))
{var state_57617__$1 = state_57617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57617__$1,4,ch);
} else
{if((state_val_57618 === 3))
{var inst_57615 = (state_57617[2]);var state_57617__$1 = state_57617;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57617__$1,inst_57615);
} else
{if((state_val_57618 === 4))
{var inst_57581 = (state_57617[9]);var inst_57581__$1 = (state_57617[2]);var inst_57582 = (inst_57581__$1 == null);var inst_57583 = cljs.core.not.call(null,inst_57582);var state_57617__$1 = (function (){var statearr_57621 = state_57617;(statearr_57621[9] = inst_57581__$1);
return statearr_57621;
})();if(inst_57583)
{var statearr_57622_57649 = state_57617__$1;(statearr_57622_57649[1] = 5);
} else
{var statearr_57623_57650 = state_57617__$1;(statearr_57623_57650[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57618 === 5))
{var inst_57585 = (state_57617[10]);var inst_57578 = (state_57617[7]);var inst_57581 = (state_57617[9]);var inst_57585__$1 = f.call(null,inst_57581);var inst_57586 = cljs.core._EQ_.call(null,inst_57585__$1,inst_57578);var inst_57587 = cljs.core.keyword_identical_QMARK_.call(null,inst_57578,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_57588 = (inst_57586) || (inst_57587);var state_57617__$1 = (function (){var statearr_57624 = state_57617;(statearr_57624[10] = inst_57585__$1);
return statearr_57624;
})();if(cljs.core.truth_(inst_57588))
{var statearr_57625_57651 = state_57617__$1;(statearr_57625_57651[1] = 8);
} else
{var statearr_57626_57652 = state_57617__$1;(statearr_57626_57652[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57618 === 6))
{var inst_57577 = (state_57617[8]);var inst_57602 = inst_57577.length;var inst_57603 = (inst_57602 > 0);var state_57617__$1 = state_57617;if(cljs.core.truth_(inst_57603))
{var statearr_57628_57653 = state_57617__$1;(statearr_57628_57653[1] = 12);
} else
{var statearr_57629_57654 = state_57617__$1;(statearr_57629_57654[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57618 === 7))
{var inst_57613 = (state_57617[2]);var state_57617__$1 = state_57617;var statearr_57630_57655 = state_57617__$1;(statearr_57630_57655[2] = inst_57613);
(statearr_57630_57655[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57618 === 8))
{var inst_57585 = (state_57617[10]);var inst_57577 = (state_57617[8]);var inst_57581 = (state_57617[9]);var inst_57590 = inst_57577.push(inst_57581);var tmp57627 = inst_57577;var inst_57577__$1 = tmp57627;var inst_57578 = inst_57585;var state_57617__$1 = (function (){var statearr_57631 = state_57617;(statearr_57631[11] = inst_57590);
(statearr_57631[7] = inst_57578);
(statearr_57631[8] = inst_57577__$1);
return statearr_57631;
})();var statearr_57632_57656 = state_57617__$1;(statearr_57632_57656[2] = null);
(statearr_57632_57656[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57618 === 9))
{var inst_57577 = (state_57617[8]);var inst_57593 = cljs.core.vec.call(null,inst_57577);var state_57617__$1 = state_57617;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57617__$1,11,out,inst_57593);
} else
{if((state_val_57618 === 10))
{var inst_57600 = (state_57617[2]);var state_57617__$1 = state_57617;var statearr_57633_57657 = state_57617__$1;(statearr_57633_57657[2] = inst_57600);
(statearr_57633_57657[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57618 === 11))
{var inst_57585 = (state_57617[10]);var inst_57581 = (state_57617[9]);var inst_57595 = (state_57617[2]);var inst_57596 = (new Array(0));var inst_57597 = inst_57596.push(inst_57581);var inst_57577 = inst_57596;var inst_57578 = inst_57585;var state_57617__$1 = (function (){var statearr_57634 = state_57617;(statearr_57634[12] = inst_57595);
(statearr_57634[13] = inst_57597);
(statearr_57634[7] = inst_57578);
(statearr_57634[8] = inst_57577);
return statearr_57634;
})();var statearr_57635_57658 = state_57617__$1;(statearr_57635_57658[2] = null);
(statearr_57635_57658[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57618 === 12))
{var inst_57577 = (state_57617[8]);var inst_57605 = cljs.core.vec.call(null,inst_57577);var state_57617__$1 = state_57617;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57617__$1,15,out,inst_57605);
} else
{if((state_val_57618 === 13))
{var state_57617__$1 = state_57617;var statearr_57636_57659 = state_57617__$1;(statearr_57636_57659[2] = null);
(statearr_57636_57659[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57618 === 14))
{var inst_57610 = (state_57617[2]);var inst_57611 = cljs.core.async.close_BANG_.call(null,out);var state_57617__$1 = (function (){var statearr_57637 = state_57617;(statearr_57637[14] = inst_57610);
return statearr_57637;
})();var statearr_57638_57660 = state_57617__$1;(statearr_57638_57660[2] = inst_57611);
(statearr_57638_57660[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57618 === 15))
{var inst_57607 = (state_57617[2]);var state_57617__$1 = state_57617;var statearr_57639_57661 = state_57617__$1;(statearr_57639_57661[2] = inst_57607);
(statearr_57639_57661[1] = 14);
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
var state_machine__13310__auto____0 = (function (){var statearr_57643 = (new Array(15));(statearr_57643[0] = state_machine__13310__auto__);
(statearr_57643[1] = 1);
return statearr_57643;
});
var state_machine__13310__auto____1 = (function (state_57617){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_57617);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e57644){if((e57644 instanceof Object))
{var ex__13313__auto__ = e57644;var statearr_57645_57662 = state_57617;(statearr_57645_57662[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57617);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e57644;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__57663 = state_57617;
state_57617 = G__57663;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_57617){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_57617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_57646 = f__13410__auto__.call(null);(statearr_57646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___57647);
return statearr_57646;
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
