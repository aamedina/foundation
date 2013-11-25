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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t154090 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t154090 = (function (f,fn_handler,meta154091){
this.f = f;
this.fn_handler = fn_handler;
this.meta154091 = meta154091;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t154090.cljs$lang$type = true;
cljs.core.async.t154090.cljs$lang$ctorStr = "cljs.core.async/t154090";
cljs.core.async.t154090.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t154090");
});
cljs.core.async.t154090.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t154090.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t154090.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t154090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_154092){var self__ = this;
var _154092__$1 = this;return self__.meta154091;
});
cljs.core.async.t154090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_154092,meta154091__$1){var self__ = this;
var _154092__$1 = this;return (new cljs.core.async.t154090(self__.f,self__.fn_handler,meta154091__$1));
});
cljs.core.async.__GT_t154090 = (function __GT_t154090(f__$1,fn_handler__$1,meta154091){return (new cljs.core.async.t154090(f__$1,fn_handler__$1,meta154091));
});
}
return (new cljs.core.async.t154090(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__154096 = buff;if(G__154096)
{var bit__6915__auto__ = null;if((function (){var or__6289__auto__ = bit__6915__auto__;if(or__6289__auto__)
{return or__6289__auto__;
} else
{return G__154096.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())
{return true;
} else
{if((!G__154096.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__154096);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__154096);
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
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(ret)
{var val_154097 = cljs.core.deref.call(null,ret);if(on_caller_QMARK_)
{fn1.call(null,val_154097);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_154097);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7112__auto___154098 = n;var x_154099 = 0;while(true){
if((x_154099 < n__7112__auto___154098))
{(a[x_154099] = 0);
{
var G__154100 = (x_154099 + 1);
x_154099 = G__154100;
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
var G__154101 = (i + 1);
i = G__154101;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t154105 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t154105 = (function (flag,alt_flag,meta154106){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta154106 = meta154106;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t154105.cljs$lang$type = true;
cljs.core.async.t154105.cljs$lang$ctorStr = "cljs.core.async/t154105";
cljs.core.async.t154105.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t154105");
});
cljs.core.async.t154105.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t154105.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t154105.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t154105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_154107){var self__ = this;
var _154107__$1 = this;return self__.meta154106;
});
cljs.core.async.t154105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_154107,meta154106__$1){var self__ = this;
var _154107__$1 = this;return (new cljs.core.async.t154105(self__.flag,self__.alt_flag,meta154106__$1));
});
cljs.core.async.__GT_t154105 = (function __GT_t154105(flag__$1,alt_flag__$1,meta154106){return (new cljs.core.async.t154105(flag__$1,alt_flag__$1,meta154106));
});
}
return (new cljs.core.async.t154105(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t154111 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t154111 = (function (cb,flag,alt_handler,meta154112){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta154112 = meta154112;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t154111.cljs$lang$type = true;
cljs.core.async.t154111.cljs$lang$ctorStr = "cljs.core.async/t154111";
cljs.core.async.t154111.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t154111");
});
cljs.core.async.t154111.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t154111.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t154111.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t154111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_154113){var self__ = this;
var _154113__$1 = this;return self__.meta154112;
});
cljs.core.async.t154111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_154113,meta154112__$1){var self__ = this;
var _154113__$1 = this;return (new cljs.core.async.t154111(self__.cb,self__.flag,self__.alt_handler,meta154112__$1));
});
cljs.core.async.__GT_t154111 = (function __GT_t154111(cb__$1,flag__$1,alt_handler__$1,meta154112){return (new cljs.core.async.t154111(cb__$1,flag__$1,alt_handler__$1,meta154112));
});
}
return (new cljs.core.async.t154111(cb,flag,alt_handler,null));
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
return (function (p1__154114_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__154114_SHARP_,port], null));
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
var G__154116 = (i + 1);
i = G__154116;
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
var alts_BANG___delegate = function (ports,p__154118){var map__154120 = p__154118;var map__154120__$1 = ((cljs.core.seq_QMARK_.call(null,map__154120))?cljs.core.apply.call(null,cljs.core.hash_map,map__154120):map__154120);var opts = map__154120__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__154118 = null;if (arguments.length > 1) {
  p__154118 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__154118);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__154121){
var ports = cljs.core.first(arglist__154121);
var p__154118 = cljs.core.rest(arglist__154121);
return alts_BANG___delegate(ports,p__154118);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t154129 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t154129 = (function (ch,f,map_LT_,meta154130){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta154130 = meta154130;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t154129.cljs$lang$type = true;
cljs.core.async.t154129.cljs$lang$ctorStr = "cljs.core.async/t154129";
cljs.core.async.t154129.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t154129");
});
cljs.core.async.t154129.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t154129.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t154129.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t154129.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t154132 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t154132 = (function (fn1,_,meta154130,ch,f,map_LT_,meta154133){
this.fn1 = fn1;
this._ = _;
this.meta154130 = meta154130;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta154133 = meta154133;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t154132.cljs$lang$type = true;
cljs.core.async.t154132.cljs$lang$ctorStr = "cljs.core.async/t154132";
cljs.core.async.t154132.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t154132");
});
cljs.core.async.t154132.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t154132.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t154132.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t154132.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__154122_SHARP_){return f1.call(null,(((p1__154122_SHARP_ == null))?null:self__.f.call(null,p1__154122_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t154132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_154134){var self__ = this;
var _154134__$1 = this;return self__.meta154133;
});
cljs.core.async.t154132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_154134,meta154133__$1){var self__ = this;
var _154134__$1 = this;return (new cljs.core.async.t154132(self__.fn1,self__._,self__.meta154130,self__.ch,self__.f,self__.map_LT_,meta154133__$1));
});
cljs.core.async.__GT_t154132 = (function __GT_t154132(fn1__$1,___$2,meta154130__$1,ch__$2,f__$2,map_LT___$2,meta154133){return (new cljs.core.async.t154132(fn1__$1,___$2,meta154130__$1,ch__$2,f__$2,map_LT___$2,meta154133));
});
}
return (new cljs.core.async.t154132(fn1,___$1,self__.meta154130,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t154129.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t154129.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t154129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_154131){var self__ = this;
var _154131__$1 = this;return self__.meta154130;
});
cljs.core.async.t154129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_154131,meta154130__$1){var self__ = this;
var _154131__$1 = this;return (new cljs.core.async.t154129(self__.ch,self__.f,self__.map_LT_,meta154130__$1));
});
cljs.core.async.__GT_t154129 = (function __GT_t154129(ch__$1,f__$1,map_LT___$1,meta154130){return (new cljs.core.async.t154129(ch__$1,f__$1,map_LT___$1,meta154130));
});
}
return (new cljs.core.async.t154129(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t154139 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t154139 = (function (ch,f,map_GT_,meta154140){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta154140 = meta154140;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t154139.cljs$lang$type = true;
cljs.core.async.t154139.cljs$lang$ctorStr = "cljs.core.async/t154139";
cljs.core.async.t154139.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t154139");
});
cljs.core.async.t154139.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t154139.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t154139.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t154139.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t154139.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t154139.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t154139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_154141){var self__ = this;
var _154141__$1 = this;return self__.meta154140;
});
cljs.core.async.t154139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_154141,meta154140__$1){var self__ = this;
var _154141__$1 = this;return (new cljs.core.async.t154139(self__.ch,self__.f,self__.map_GT_,meta154140__$1));
});
cljs.core.async.__GT_t154139 = (function __GT_t154139(ch__$1,f__$1,map_GT___$1,meta154140){return (new cljs.core.async.t154139(ch__$1,f__$1,map_GT___$1,meta154140));
});
}
return (new cljs.core.async.t154139(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t154146 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t154146 = (function (ch,p,filter_GT_,meta154147){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta154147 = meta154147;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t154146.cljs$lang$type = true;
cljs.core.async.t154146.cljs$lang$ctorStr = "cljs.core.async/t154146";
cljs.core.async.t154146.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t154146");
});
cljs.core.async.t154146.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t154146.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t154146.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t154146.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t154146.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t154146.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t154146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_154148){var self__ = this;
var _154148__$1 = this;return self__.meta154147;
});
cljs.core.async.t154146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_154148,meta154147__$1){var self__ = this;
var _154148__$1 = this;return (new cljs.core.async.t154146(self__.ch,self__.p,self__.filter_GT_,meta154147__$1));
});
cljs.core.async.__GT_t154146 = (function __GT_t154146(ch__$1,p__$1,filter_GT___$1,meta154147){return (new cljs.core.async.t154146(ch__$1,p__$1,filter_GT___$1,meta154147));
});
}
return (new cljs.core.async.t154146(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___154235 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_154214){var state_val_154215 = (state_154214[1]);if((state_val_154215 === 1))
{var state_154214__$1 = state_154214;var statearr_154216_154236 = state_154214__$1;(statearr_154216_154236[2] = null);
(statearr_154216_154236[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154215 === 2))
{var state_154214__$1 = state_154214;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154214__$1,4,ch);
} else
{if((state_val_154215 === 3))
{var inst_154212 = (state_154214[2]);var state_154214__$1 = state_154214;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_154214__$1,inst_154212);
} else
{if((state_val_154215 === 4))
{var inst_154196 = (state_154214[7]);var inst_154196__$1 = (state_154214[2]);var inst_154197 = (inst_154196__$1 == null);var state_154214__$1 = (function (){var statearr_154217 = state_154214;(statearr_154217[7] = inst_154196__$1);
return statearr_154217;
})();if(inst_154197)
{var statearr_154218_154237 = state_154214__$1;(statearr_154218_154237[1] = 5);
} else
{var statearr_154219_154238 = state_154214__$1;(statearr_154219_154238[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154215 === 5))
{var inst_154199 = cljs.core.async.close_BANG_.call(null,out);var state_154214__$1 = state_154214;var statearr_154220_154239 = state_154214__$1;(statearr_154220_154239[2] = inst_154199);
(statearr_154220_154239[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154215 === 6))
{var inst_154196 = (state_154214[7]);var inst_154201 = p.call(null,inst_154196);var state_154214__$1 = state_154214;if(inst_154201)
{var statearr_154221_154240 = state_154214__$1;(statearr_154221_154240[1] = 8);
} else
{var statearr_154222_154241 = state_154214__$1;(statearr_154222_154241[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154215 === 7))
{var inst_154210 = (state_154214[2]);var state_154214__$1 = state_154214;var statearr_154223_154242 = state_154214__$1;(statearr_154223_154242[2] = inst_154210);
(statearr_154223_154242[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154215 === 8))
{var inst_154196 = (state_154214[7]);var state_154214__$1 = state_154214;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_154214__$1,11,out,inst_154196);
} else
{if((state_val_154215 === 9))
{var state_154214__$1 = state_154214;var statearr_154224_154243 = state_154214__$1;(statearr_154224_154243[2] = null);
(statearr_154224_154243[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154215 === 10))
{var inst_154207 = (state_154214[2]);var state_154214__$1 = (function (){var statearr_154225 = state_154214;(statearr_154225[8] = inst_154207);
return statearr_154225;
})();var statearr_154226_154244 = state_154214__$1;(statearr_154226_154244[2] = null);
(statearr_154226_154244[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154215 === 11))
{var inst_154204 = (state_154214[2]);var state_154214__$1 = state_154214;var statearr_154227_154245 = state_154214__$1;(statearr_154227_154245[2] = inst_154204);
(statearr_154227_154245[1] = 10);
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
var state_machine__13310__auto____0 = (function (){var statearr_154231 = (new Array(9));(statearr_154231[0] = state_machine__13310__auto__);
(statearr_154231[1] = 1);
return statearr_154231;
});
var state_machine__13310__auto____1 = (function (state_154214){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_154214);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e154232){if((e154232 instanceof Object))
{var ex__13313__auto__ = e154232;var statearr_154233_154246 = state_154214;(statearr_154233_154246[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154214);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e154232;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__154247 = state_154214;
state_154214 = G__154247;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_154214){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_154214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_154234 = f__13410__auto__.call(null);(statearr_154234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___154235);
return statearr_154234;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_154399){var state_val_154400 = (state_154399[1]);if((state_val_154400 === 1))
{var state_154399__$1 = state_154399;var statearr_154401_154442 = state_154399__$1;(statearr_154401_154442[2] = null);
(statearr_154401_154442[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154400 === 2))
{var state_154399__$1 = state_154399;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154399__$1,4,in$);
} else
{if((state_val_154400 === 3))
{var inst_154397 = (state_154399[2]);var state_154399__$1 = state_154399;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_154399__$1,inst_154397);
} else
{if((state_val_154400 === 4))
{var inst_154345 = (state_154399[7]);var inst_154345__$1 = (state_154399[2]);var inst_154346 = (inst_154345__$1 == null);var state_154399__$1 = (function (){var statearr_154404 = state_154399;(statearr_154404[7] = inst_154345__$1);
return statearr_154404;
})();if(cljs.core.truth_(inst_154346))
{var statearr_154405_154445 = state_154399__$1;(statearr_154405_154445[1] = 5);
} else
{var statearr_154406_154446 = state_154399__$1;(statearr_154406_154446[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154400 === 5))
{var inst_154348 = cljs.core.async.close_BANG_.call(null,out);var state_154399__$1 = state_154399;var statearr_154407_154447 = state_154399__$1;(statearr_154407_154447[2] = inst_154348);
(statearr_154407_154447[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154400 === 6))
{var inst_154345 = (state_154399[7]);var inst_154350 = f.call(null,inst_154345);var inst_154355 = cljs.core.seq.call(null,inst_154350);var inst_154356 = inst_154355;var inst_154357 = null;var inst_154358 = 0;var inst_154359 = 0;var state_154399__$1 = (function (){var statearr_154408 = state_154399;(statearr_154408[8] = inst_154359);
(statearr_154408[9] = inst_154356);
(statearr_154408[10] = inst_154357);
(statearr_154408[11] = inst_154358);
return statearr_154408;
})();var statearr_154409_154448 = state_154399__$1;(statearr_154409_154448[2] = null);
(statearr_154409_154448[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154400 === 7))
{var inst_154395 = (state_154399[2]);var state_154399__$1 = state_154399;var statearr_154410_154449 = state_154399__$1;(statearr_154410_154449[2] = inst_154395);
(statearr_154410_154449[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154400 === 8))
{var inst_154359 = (state_154399[8]);var inst_154358 = (state_154399[11]);var inst_154361 = (inst_154359 < inst_154358);var inst_154362 = inst_154361;var state_154399__$1 = state_154399;if(cljs.core.truth_(inst_154362))
{var statearr_154411_154450 = state_154399__$1;(statearr_154411_154450[1] = 10);
} else
{var statearr_154412_154451 = state_154399__$1;(statearr_154412_154451[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154400 === 9))
{var inst_154392 = (state_154399[2]);var state_154399__$1 = (function (){var statearr_154413 = state_154399;(statearr_154413[12] = inst_154392);
return statearr_154413;
})();var statearr_154414_154452 = state_154399__$1;(statearr_154414_154452[2] = null);
(statearr_154414_154452[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154400 === 10))
{var inst_154359 = (state_154399[8]);var inst_154357 = (state_154399[10]);var inst_154364 = cljs.core._nth.call(null,inst_154357,inst_154359);var state_154399__$1 = state_154399;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_154399__$1,13,out,inst_154364);
} else
{if((state_val_154400 === 11))
{var inst_154370 = (state_154399[13]);var inst_154356 = (state_154399[9]);var inst_154370__$1 = cljs.core.seq.call(null,inst_154356);var state_154399__$1 = (function (){var statearr_154418 = state_154399;(statearr_154418[13] = inst_154370__$1);
return statearr_154418;
})();if(inst_154370__$1)
{var statearr_154419_154453 = state_154399__$1;(statearr_154419_154453[1] = 14);
} else
{var statearr_154420_154454 = state_154399__$1;(statearr_154420_154454[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154400 === 12))
{var inst_154390 = (state_154399[2]);var state_154399__$1 = state_154399;var statearr_154421_154455 = state_154399__$1;(statearr_154421_154455[2] = inst_154390);
(statearr_154421_154455[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154400 === 13))
{var inst_154359 = (state_154399[8]);var inst_154356 = (state_154399[9]);var inst_154357 = (state_154399[10]);var inst_154358 = (state_154399[11]);var inst_154366 = (state_154399[2]);var inst_154367 = (inst_154359 + 1);var tmp154415 = inst_154356;var tmp154416 = inst_154357;var tmp154417 = inst_154358;var inst_154356__$1 = tmp154415;var inst_154357__$1 = tmp154416;var inst_154358__$1 = tmp154417;var inst_154359__$1 = inst_154367;var state_154399__$1 = (function (){var statearr_154422 = state_154399;(statearr_154422[8] = inst_154359__$1);
(statearr_154422[14] = inst_154366);
(statearr_154422[9] = inst_154356__$1);
(statearr_154422[10] = inst_154357__$1);
(statearr_154422[11] = inst_154358__$1);
return statearr_154422;
})();var statearr_154423_154456 = state_154399__$1;(statearr_154423_154456[2] = null);
(statearr_154423_154456[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154400 === 14))
{var inst_154370 = (state_154399[13]);var inst_154372 = cljs.core.chunked_seq_QMARK_.call(null,inst_154370);var state_154399__$1 = state_154399;if(inst_154372)
{var statearr_154424_154462 = state_154399__$1;(statearr_154424_154462[1] = 17);
} else
{var statearr_154425_154465 = state_154399__$1;(statearr_154425_154465[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154400 === 15))
{var state_154399__$1 = state_154399;var statearr_154426_154469 = state_154399__$1;(statearr_154426_154469[2] = null);
(statearr_154426_154469[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154400 === 16))
{var inst_154388 = (state_154399[2]);var state_154399__$1 = state_154399;var statearr_154427_154470 = state_154399__$1;(statearr_154427_154470[2] = inst_154388);
(statearr_154427_154470[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154400 === 17))
{var inst_154370 = (state_154399[13]);var inst_154374 = cljs.core.chunk_first.call(null,inst_154370);var inst_154375 = cljs.core.chunk_rest.call(null,inst_154370);var inst_154376 = cljs.core.count.call(null,inst_154374);var inst_154356 = inst_154375;var inst_154357 = inst_154374;var inst_154358 = inst_154376;var inst_154359 = 0;var state_154399__$1 = (function (){var statearr_154428 = state_154399;(statearr_154428[8] = inst_154359);
(statearr_154428[9] = inst_154356);
(statearr_154428[10] = inst_154357);
(statearr_154428[11] = inst_154358);
return statearr_154428;
})();var statearr_154429_154471 = state_154399__$1;(statearr_154429_154471[2] = null);
(statearr_154429_154471[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154400 === 18))
{var inst_154370 = (state_154399[13]);var inst_154379 = cljs.core.first.call(null,inst_154370);var state_154399__$1 = state_154399;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_154399__$1,20,out,inst_154379);
} else
{if((state_val_154400 === 19))
{var inst_154385 = (state_154399[2]);var state_154399__$1 = state_154399;var statearr_154430_154472 = state_154399__$1;(statearr_154430_154472[2] = inst_154385);
(statearr_154430_154472[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154400 === 20))
{var inst_154370 = (state_154399[13]);var inst_154381 = (state_154399[2]);var inst_154382 = cljs.core.next.call(null,inst_154370);var inst_154356 = inst_154382;var inst_154357 = null;var inst_154358 = 0;var inst_154359 = 0;var state_154399__$1 = (function (){var statearr_154431 = state_154399;(statearr_154431[8] = inst_154359);
(statearr_154431[15] = inst_154381);
(statearr_154431[9] = inst_154356);
(statearr_154431[10] = inst_154357);
(statearr_154431[11] = inst_154358);
return statearr_154431;
})();var statearr_154432_154475 = state_154399__$1;(statearr_154432_154475[2] = null);
(statearr_154432_154475[1] = 8);
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
var state_machine__13310__auto____0 = (function (){var statearr_154436 = (new Array(16));(statearr_154436[0] = state_machine__13310__auto__);
(statearr_154436[1] = 1);
return statearr_154436;
});
var state_machine__13310__auto____1 = (function (state_154399){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_154399);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e154437){if((e154437 instanceof Object))
{var ex__13313__auto__ = e154437;var statearr_154438_154476 = state_154399;(statearr_154438_154476[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154399);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e154437;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__154479 = state_154399;
state_154399 = G__154479;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_154399){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_154399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_154441 = f__13410__auto__.call(null);(statearr_154441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_154441;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13409__auto___154562 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_154541){var state_val_154542 = (state_154541[1]);if((state_val_154542 === 1))
{var state_154541__$1 = state_154541;var statearr_154543_154563 = state_154541__$1;(statearr_154543_154563[2] = null);
(statearr_154543_154563[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154542 === 2))
{var state_154541__$1 = state_154541;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154541__$1,4,from);
} else
{if((state_val_154542 === 3))
{var inst_154539 = (state_154541[2]);var state_154541__$1 = state_154541;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_154541__$1,inst_154539);
} else
{if((state_val_154542 === 4))
{var inst_154524 = (state_154541[7]);var inst_154524__$1 = (state_154541[2]);var inst_154525 = (inst_154524__$1 == null);var state_154541__$1 = (function (){var statearr_154544 = state_154541;(statearr_154544[7] = inst_154524__$1);
return statearr_154544;
})();if(cljs.core.truth_(inst_154525))
{var statearr_154545_154564 = state_154541__$1;(statearr_154545_154564[1] = 5);
} else
{var statearr_154546_154565 = state_154541__$1;(statearr_154546_154565[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154542 === 5))
{var state_154541__$1 = state_154541;if(cljs.core.truth_(close_QMARK_))
{var statearr_154547_154566 = state_154541__$1;(statearr_154547_154566[1] = 8);
} else
{var statearr_154548_154567 = state_154541__$1;(statearr_154548_154567[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154542 === 6))
{var inst_154524 = (state_154541[7]);var state_154541__$1 = state_154541;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_154541__$1,11,to,inst_154524);
} else
{if((state_val_154542 === 7))
{var inst_154537 = (state_154541[2]);var state_154541__$1 = state_154541;var statearr_154549_154568 = state_154541__$1;(statearr_154549_154568[2] = inst_154537);
(statearr_154549_154568[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154542 === 8))
{var inst_154528 = cljs.core.async.close_BANG_.call(null,to);var state_154541__$1 = state_154541;var statearr_154550_154569 = state_154541__$1;(statearr_154550_154569[2] = inst_154528);
(statearr_154550_154569[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154542 === 9))
{var state_154541__$1 = state_154541;var statearr_154551_154571 = state_154541__$1;(statearr_154551_154571[2] = null);
(statearr_154551_154571[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154542 === 10))
{var inst_154531 = (state_154541[2]);var state_154541__$1 = state_154541;var statearr_154552_154572 = state_154541__$1;(statearr_154552_154572[2] = inst_154531);
(statearr_154552_154572[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154542 === 11))
{var inst_154534 = (state_154541[2]);var state_154541__$1 = (function (){var statearr_154553 = state_154541;(statearr_154553[8] = inst_154534);
return statearr_154553;
})();var statearr_154554_154573 = state_154541__$1;(statearr_154554_154573[2] = null);
(statearr_154554_154573[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_154558 = (new Array(9));(statearr_154558[0] = state_machine__13310__auto__);
(statearr_154558[1] = 1);
return statearr_154558;
});
var state_machine__13310__auto____1 = (function (state_154541){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_154541);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e154559){if((e154559 instanceof Object))
{var ex__13313__auto__ = e154559;var statearr_154560_154574 = state_154541;(statearr_154560_154574[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154541);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e154559;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__154575 = state_154541;
state_154541 = G__154575;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_154541){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_154541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_154561 = f__13410__auto__.call(null);(statearr_154561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___154562);
return statearr_154561;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13409__auto___154662 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_154640){var state_val_154641 = (state_154640[1]);if((state_val_154641 === 1))
{var state_154640__$1 = state_154640;var statearr_154642_154663 = state_154640__$1;(statearr_154642_154663[2] = null);
(statearr_154642_154663[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154641 === 2))
{var state_154640__$1 = state_154640;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154640__$1,4,ch);
} else
{if((state_val_154641 === 3))
{var inst_154638 = (state_154640[2]);var state_154640__$1 = state_154640;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_154640__$1,inst_154638);
} else
{if((state_val_154641 === 4))
{var inst_154621 = (state_154640[7]);var inst_154621__$1 = (state_154640[2]);var inst_154622 = (inst_154621__$1 == null);var state_154640__$1 = (function (){var statearr_154643 = state_154640;(statearr_154643[7] = inst_154621__$1);
return statearr_154643;
})();if(cljs.core.truth_(inst_154622))
{var statearr_154644_154664 = state_154640__$1;(statearr_154644_154664[1] = 5);
} else
{var statearr_154645_154665 = state_154640__$1;(statearr_154645_154665[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154641 === 5))
{var inst_154624 = cljs.core.async.close_BANG_.call(null,tc);var inst_154625 = cljs.core.async.close_BANG_.call(null,fc);var state_154640__$1 = (function (){var statearr_154646 = state_154640;(statearr_154646[8] = inst_154624);
return statearr_154646;
})();var statearr_154647_154666 = state_154640__$1;(statearr_154647_154666[2] = inst_154625);
(statearr_154647_154666[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154641 === 6))
{var inst_154621 = (state_154640[7]);var inst_154627 = p.call(null,inst_154621);var state_154640__$1 = state_154640;if(cljs.core.truth_(inst_154627))
{var statearr_154648_154667 = state_154640__$1;(statearr_154648_154667[1] = 9);
} else
{var statearr_154649_154668 = state_154640__$1;(statearr_154649_154668[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154641 === 7))
{var inst_154636 = (state_154640[2]);var state_154640__$1 = state_154640;var statearr_154650_154669 = state_154640__$1;(statearr_154650_154669[2] = inst_154636);
(statearr_154650_154669[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154641 === 8))
{var inst_154633 = (state_154640[2]);var state_154640__$1 = (function (){var statearr_154651 = state_154640;(statearr_154651[9] = inst_154633);
return statearr_154651;
})();var statearr_154652_154670 = state_154640__$1;(statearr_154652_154670[2] = null);
(statearr_154652_154670[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154641 === 9))
{var state_154640__$1 = state_154640;var statearr_154653_154671 = state_154640__$1;(statearr_154653_154671[2] = tc);
(statearr_154653_154671[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154641 === 10))
{var state_154640__$1 = state_154640;var statearr_154654_154672 = state_154640__$1;(statearr_154654_154672[2] = fc);
(statearr_154654_154672[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154641 === 11))
{var inst_154621 = (state_154640[7]);var inst_154631 = (state_154640[2]);var state_154640__$1 = state_154640;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_154640__$1,8,inst_154631,inst_154621);
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
var state_machine__13310__auto____0 = (function (){var statearr_154658 = (new Array(10));(statearr_154658[0] = state_machine__13310__auto__);
(statearr_154658[1] = 1);
return statearr_154658;
});
var state_machine__13310__auto____1 = (function (state_154640){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_154640);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e154659){if((e154659 instanceof Object))
{var ex__13313__auto__ = e154659;var statearr_154660_154673 = state_154640;(statearr_154660_154673[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154640);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e154659;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__154674 = state_154640;
state_154640 = G__154674;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_154640){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_154640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_154661 = f__13410__auto__.call(null);(statearr_154661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___154662);
return statearr_154661;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_154721){var state_val_154722 = (state_154721[1]);if((state_val_154722 === 7))
{var inst_154717 = (state_154721[2]);var state_154721__$1 = state_154721;var statearr_154723_154739 = state_154721__$1;(statearr_154723_154739[2] = inst_154717);
(statearr_154723_154739[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154722 === 6))
{var inst_154707 = (state_154721[7]);var inst_154710 = (state_154721[8]);var inst_154714 = f.call(null,inst_154707,inst_154710);var inst_154707__$1 = inst_154714;var state_154721__$1 = (function (){var statearr_154724 = state_154721;(statearr_154724[7] = inst_154707__$1);
return statearr_154724;
})();var statearr_154725_154740 = state_154721__$1;(statearr_154725_154740[2] = null);
(statearr_154725_154740[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154722 === 5))
{var inst_154707 = (state_154721[7]);var state_154721__$1 = state_154721;var statearr_154726_154741 = state_154721__$1;(statearr_154726_154741[2] = inst_154707);
(statearr_154726_154741[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154722 === 4))
{var inst_154710 = (state_154721[8]);var inst_154710__$1 = (state_154721[2]);var inst_154711 = (inst_154710__$1 == null);var state_154721__$1 = (function (){var statearr_154727 = state_154721;(statearr_154727[8] = inst_154710__$1);
return statearr_154727;
})();if(cljs.core.truth_(inst_154711))
{var statearr_154728_154742 = state_154721__$1;(statearr_154728_154742[1] = 5);
} else
{var statearr_154729_154743 = state_154721__$1;(statearr_154729_154743[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154722 === 3))
{var inst_154719 = (state_154721[2]);var state_154721__$1 = state_154721;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_154721__$1,inst_154719);
} else
{if((state_val_154722 === 2))
{var state_154721__$1 = state_154721;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154721__$1,4,ch);
} else
{if((state_val_154722 === 1))
{var inst_154707 = init;var state_154721__$1 = (function (){var statearr_154730 = state_154721;(statearr_154730[7] = inst_154707);
return statearr_154730;
})();var statearr_154731_154744 = state_154721__$1;(statearr_154731_154744[2] = null);
(statearr_154731_154744[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_154735 = (new Array(9));(statearr_154735[0] = state_machine__13310__auto__);
(statearr_154735[1] = 1);
return statearr_154735;
});
var state_machine__13310__auto____1 = (function (state_154721){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_154721);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e154736){if((e154736 instanceof Object))
{var ex__13313__auto__ = e154736;var statearr_154737_154745 = state_154721;(statearr_154737_154745[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154721);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e154736;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__154746 = state_154721;
state_154721 = G__154746;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_154721){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_154721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_154738 = f__13410__auto__.call(null);(statearr_154738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_154738;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_154808){var state_val_154809 = (state_154808[1]);if((state_val_154809 === 1))
{var inst_154788 = cljs.core.seq.call(null,coll);var inst_154789 = inst_154788;var state_154808__$1 = (function (){var statearr_154810 = state_154808;(statearr_154810[7] = inst_154789);
return statearr_154810;
})();var statearr_154811_154829 = state_154808__$1;(statearr_154811_154829[2] = null);
(statearr_154811_154829[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154809 === 2))
{var inst_154789 = (state_154808[7]);var state_154808__$1 = state_154808;if(cljs.core.truth_(inst_154789))
{var statearr_154812_154830 = state_154808__$1;(statearr_154812_154830[1] = 4);
} else
{var statearr_154813_154831 = state_154808__$1;(statearr_154813_154831[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154809 === 3))
{var inst_154806 = (state_154808[2]);var state_154808__$1 = state_154808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_154808__$1,inst_154806);
} else
{if((state_val_154809 === 4))
{var inst_154789 = (state_154808[7]);var inst_154792 = cljs.core.first.call(null,inst_154789);var state_154808__$1 = state_154808;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_154808__$1,7,ch,inst_154792);
} else
{if((state_val_154809 === 5))
{var state_154808__$1 = state_154808;if(cljs.core.truth_(close_QMARK_))
{var statearr_154814_154832 = state_154808__$1;(statearr_154814_154832[1] = 8);
} else
{var statearr_154815_154833 = state_154808__$1;(statearr_154815_154833[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154809 === 6))
{var inst_154804 = (state_154808[2]);var state_154808__$1 = state_154808;var statearr_154816_154834 = state_154808__$1;(statearr_154816_154834[2] = inst_154804);
(statearr_154816_154834[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154809 === 7))
{var inst_154789 = (state_154808[7]);var inst_154794 = (state_154808[2]);var inst_154795 = cljs.core.next.call(null,inst_154789);var inst_154789__$1 = inst_154795;var state_154808__$1 = (function (){var statearr_154817 = state_154808;(statearr_154817[8] = inst_154794);
(statearr_154817[7] = inst_154789__$1);
return statearr_154817;
})();var statearr_154818_154835 = state_154808__$1;(statearr_154818_154835[2] = null);
(statearr_154818_154835[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154809 === 8))
{var inst_154799 = cljs.core.async.close_BANG_.call(null,ch);var state_154808__$1 = state_154808;var statearr_154819_154836 = state_154808__$1;(statearr_154819_154836[2] = inst_154799);
(statearr_154819_154836[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154809 === 9))
{var state_154808__$1 = state_154808;var statearr_154820_154837 = state_154808__$1;(statearr_154820_154837[2] = null);
(statearr_154820_154837[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_154809 === 10))
{var inst_154802 = (state_154808[2]);var state_154808__$1 = state_154808;var statearr_154821_154838 = state_154808__$1;(statearr_154821_154838[2] = inst_154802);
(statearr_154821_154838[1] = 6);
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
var state_machine__13310__auto____0 = (function (){var statearr_154825 = (new Array(9));(statearr_154825[0] = state_machine__13310__auto__);
(statearr_154825[1] = 1);
return statearr_154825;
});
var state_machine__13310__auto____1 = (function (state_154808){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_154808);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e154826){if((e154826 instanceof Object))
{var ex__13313__auto__ = e154826;var statearr_154827_154839 = state_154808;(statearr_154827_154839[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154808);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e154826;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__154840 = state_154808;
state_154808 = G__154840;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_154808){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_154808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_154828 = f__13410__auto__.call(null);(statearr_154828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_154828;
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
cljs.core.async.Mux = (function (){var obj154842 = {};return obj154842;
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
cljs.core.async.Mult = (function (){var obj154844 = {};return obj154844;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t155059 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t155059 = (function (cs,ch,mult,meta155060){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta155060 = meta155060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t155059.cljs$lang$type = true;
cljs.core.async.t155059.cljs$lang$ctorStr = "cljs.core.async/t155059";
cljs.core.async.t155059.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t155059");
});})(cs))
;
cljs.core.async.t155059.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t155059.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t155059.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t155059.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t155059.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t155059.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t155059.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_155061){var self__ = this;
var _155061__$1 = this;return self__.meta155060;
});})(cs))
;
cljs.core.async.t155059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_155061,meta155060__$1){var self__ = this;
var _155061__$1 = this;return (new cljs.core.async.t155059(self__.cs,self__.ch,self__.mult,meta155060__$1));
});})(cs))
;
cljs.core.async.__GT_t155059 = ((function (cs){
return (function __GT_t155059(cs__$1,ch__$1,mult__$1,meta155060){return (new cljs.core.async.t155059(cs__$1,ch__$1,mult__$1,meta155060));
});})(cs))
;
}
return (new cljs.core.async.t155059(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13409__auto___155273 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_155191){var state_val_155192 = (state_155191[1]);if((state_val_155192 === 32))
{var inst_155064 = (state_155191[7]);var inst_155140 = (state_155191[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_155191,31,Object,null,30);var inst_155147 = cljs.core.async.put_BANG_.call(null,inst_155140,inst_155064,done);var state_155191__$1 = state_155191;var statearr_155193_155274 = state_155191__$1;(statearr_155193_155274[2] = inst_155147);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155191__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 1))
{var state_155191__$1 = state_155191;var statearr_155194_155275 = state_155191__$1;(statearr_155194_155275[2] = null);
(statearr_155194_155275[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 33))
{var inst_155153 = (state_155191[9]);var inst_155155 = cljs.core.chunked_seq_QMARK_.call(null,inst_155153);var state_155191__$1 = state_155191;if(inst_155155)
{var statearr_155195_155276 = state_155191__$1;(statearr_155195_155276[1] = 36);
} else
{var statearr_155196_155277 = state_155191__$1;(statearr_155196_155277[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 2))
{var state_155191__$1 = state_155191;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_155191__$1,4,ch);
} else
{if((state_val_155192 === 34))
{var state_155191__$1 = state_155191;var statearr_155197_155278 = state_155191__$1;(statearr_155197_155278[2] = null);
(statearr_155197_155278[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 3))
{var inst_155189 = (state_155191[2]);var state_155191__$1 = state_155191;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155191__$1,inst_155189);
} else
{if((state_val_155192 === 35))
{var inst_155178 = (state_155191[2]);var state_155191__$1 = state_155191;var statearr_155198_155279 = state_155191__$1;(statearr_155198_155279[2] = inst_155178);
(statearr_155198_155279[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 4))
{var inst_155064 = (state_155191[7]);var inst_155064__$1 = (state_155191[2]);var inst_155065 = (inst_155064__$1 == null);var state_155191__$1 = (function (){var statearr_155199 = state_155191;(statearr_155199[7] = inst_155064__$1);
return statearr_155199;
})();if(cljs.core.truth_(inst_155065))
{var statearr_155200_155280 = state_155191__$1;(statearr_155200_155280[1] = 5);
} else
{var statearr_155201_155281 = state_155191__$1;(statearr_155201_155281[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 36))
{var inst_155153 = (state_155191[9]);var inst_155157 = cljs.core.chunk_first.call(null,inst_155153);var inst_155158 = cljs.core.chunk_rest.call(null,inst_155153);var inst_155159 = cljs.core.count.call(null,inst_155157);var inst_155132 = inst_155158;var inst_155133 = inst_155157;var inst_155134 = inst_155159;var inst_155135 = 0;var state_155191__$1 = (function (){var statearr_155202 = state_155191;(statearr_155202[10] = inst_155135);
(statearr_155202[11] = inst_155134);
(statearr_155202[12] = inst_155133);
(statearr_155202[13] = inst_155132);
return statearr_155202;
})();var statearr_155203_155282 = state_155191__$1;(statearr_155203_155282[2] = null);
(statearr_155203_155282[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 5))
{var inst_155071 = cljs.core.deref.call(null,cs);var inst_155072 = cljs.core.seq.call(null,inst_155071);var inst_155073 = inst_155072;var inst_155074 = null;var inst_155075 = 0;var inst_155076 = 0;var state_155191__$1 = (function (){var statearr_155204 = state_155191;(statearr_155204[14] = inst_155075);
(statearr_155204[15] = inst_155076);
(statearr_155204[16] = inst_155073);
(statearr_155204[17] = inst_155074);
return statearr_155204;
})();var statearr_155205_155283 = state_155191__$1;(statearr_155205_155283[2] = null);
(statearr_155205_155283[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 37))
{var inst_155153 = (state_155191[9]);var inst_155162 = cljs.core.first.call(null,inst_155153);var state_155191__$1 = (function (){var statearr_155206 = state_155191;(statearr_155206[18] = inst_155162);
return statearr_155206;
})();var statearr_155207_155284 = state_155191__$1;(statearr_155207_155284[2] = null);
(statearr_155207_155284[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 6))
{var inst_155123 = cljs.core.deref.call(null,cs);var inst_155124 = cljs.core.keys.call(null,inst_155123);var inst_155125 = cljs.core.count.call(null,inst_155124);var inst_155126 = cljs.core.reset_BANG_.call(null,dctr,inst_155125);var inst_155131 = cljs.core.seq.call(null,inst_155124);var inst_155132 = inst_155131;var inst_155133 = null;var inst_155134 = 0;var inst_155135 = 0;var state_155191__$1 = (function (){var statearr_155208 = state_155191;(statearr_155208[10] = inst_155135);
(statearr_155208[19] = inst_155126);
(statearr_155208[11] = inst_155134);
(statearr_155208[12] = inst_155133);
(statearr_155208[13] = inst_155132);
return statearr_155208;
})();var statearr_155209_155285 = state_155191__$1;(statearr_155209_155285[2] = null);
(statearr_155209_155285[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 38))
{var inst_155175 = (state_155191[2]);var state_155191__$1 = state_155191;var statearr_155210_155286 = state_155191__$1;(statearr_155210_155286[2] = inst_155175);
(statearr_155210_155286[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 7))
{var inst_155187 = (state_155191[2]);var state_155191__$1 = state_155191;var statearr_155211_155287 = state_155191__$1;(statearr_155211_155287[2] = inst_155187);
(statearr_155211_155287[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 39))
{var inst_155153 = (state_155191[9]);var inst_155171 = (state_155191[2]);var inst_155172 = cljs.core.next.call(null,inst_155153);var inst_155132 = inst_155172;var inst_155133 = null;var inst_155134 = 0;var inst_155135 = 0;var state_155191__$1 = (function (){var statearr_155212 = state_155191;(statearr_155212[20] = inst_155171);
(statearr_155212[10] = inst_155135);
(statearr_155212[11] = inst_155134);
(statearr_155212[12] = inst_155133);
(statearr_155212[13] = inst_155132);
return statearr_155212;
})();var statearr_155213_155288 = state_155191__$1;(statearr_155213_155288[2] = null);
(statearr_155213_155288[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 8))
{var inst_155075 = (state_155191[14]);var inst_155076 = (state_155191[15]);var inst_155078 = (inst_155076 < inst_155075);var inst_155079 = inst_155078;var state_155191__$1 = state_155191;if(cljs.core.truth_(inst_155079))
{var statearr_155214_155289 = state_155191__$1;(statearr_155214_155289[1] = 10);
} else
{var statearr_155215_155290 = state_155191__$1;(statearr_155215_155290[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 40))
{var inst_155162 = (state_155191[18]);var inst_155163 = (state_155191[2]);var inst_155164 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_155165 = cljs.core.async.untap_STAR_.call(null,m,inst_155162);var state_155191__$1 = (function (){var statearr_155216 = state_155191;(statearr_155216[21] = inst_155163);
(statearr_155216[22] = inst_155164);
return statearr_155216;
})();var statearr_155217_155291 = state_155191__$1;(statearr_155217_155291[2] = inst_155165);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155191__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 9))
{var inst_155121 = (state_155191[2]);var state_155191__$1 = state_155191;var statearr_155218_155292 = state_155191__$1;(statearr_155218_155292[2] = inst_155121);
(statearr_155218_155292[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 41))
{var inst_155162 = (state_155191[18]);var inst_155064 = (state_155191[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_155191,40,Object,null,39);var inst_155169 = cljs.core.async.put_BANG_.call(null,inst_155162,inst_155064,done);var state_155191__$1 = state_155191;var statearr_155219_155293 = state_155191__$1;(statearr_155219_155293[2] = inst_155169);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155191__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 10))
{var inst_155076 = (state_155191[15]);var inst_155074 = (state_155191[17]);var inst_155082 = cljs.core._nth.call(null,inst_155074,inst_155076);var inst_155083 = cljs.core.nth.call(null,inst_155082,0,null);var inst_155084 = cljs.core.nth.call(null,inst_155082,1,null);var state_155191__$1 = (function (){var statearr_155220 = state_155191;(statearr_155220[23] = inst_155083);
return statearr_155220;
})();if(cljs.core.truth_(inst_155084))
{var statearr_155221_155294 = state_155191__$1;(statearr_155221_155294[1] = 13);
} else
{var statearr_155222_155295 = state_155191__$1;(statearr_155222_155295[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 42))
{var inst_155184 = (state_155191[2]);var state_155191__$1 = (function (){var statearr_155223 = state_155191;(statearr_155223[24] = inst_155184);
return statearr_155223;
})();var statearr_155224_155296 = state_155191__$1;(statearr_155224_155296[2] = null);
(statearr_155224_155296[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 11))
{var inst_155073 = (state_155191[16]);var inst_155093 = (state_155191[25]);var inst_155093__$1 = cljs.core.seq.call(null,inst_155073);var state_155191__$1 = (function (){var statearr_155225 = state_155191;(statearr_155225[25] = inst_155093__$1);
return statearr_155225;
})();if(inst_155093__$1)
{var statearr_155226_155297 = state_155191__$1;(statearr_155226_155297[1] = 16);
} else
{var statearr_155227_155298 = state_155191__$1;(statearr_155227_155298[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 12))
{var inst_155119 = (state_155191[2]);var state_155191__$1 = state_155191;var statearr_155228_155299 = state_155191__$1;(statearr_155228_155299[2] = inst_155119);
(statearr_155228_155299[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 13))
{var inst_155083 = (state_155191[23]);var inst_155086 = cljs.core.async.close_BANG_.call(null,inst_155083);var state_155191__$1 = state_155191;var statearr_155232_155300 = state_155191__$1;(statearr_155232_155300[2] = inst_155086);
(statearr_155232_155300[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 14))
{var state_155191__$1 = state_155191;var statearr_155233_155301 = state_155191__$1;(statearr_155233_155301[2] = null);
(statearr_155233_155301[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 15))
{var inst_155075 = (state_155191[14]);var inst_155076 = (state_155191[15]);var inst_155073 = (state_155191[16]);var inst_155074 = (state_155191[17]);var inst_155089 = (state_155191[2]);var inst_155090 = (inst_155076 + 1);var tmp155229 = inst_155075;var tmp155230 = inst_155073;var tmp155231 = inst_155074;var inst_155073__$1 = tmp155230;var inst_155074__$1 = tmp155231;var inst_155075__$1 = tmp155229;var inst_155076__$1 = inst_155090;var state_155191__$1 = (function (){var statearr_155234 = state_155191;(statearr_155234[14] = inst_155075__$1);
(statearr_155234[15] = inst_155076__$1);
(statearr_155234[16] = inst_155073__$1);
(statearr_155234[17] = inst_155074__$1);
(statearr_155234[26] = inst_155089);
return statearr_155234;
})();var statearr_155235_155302 = state_155191__$1;(statearr_155235_155302[2] = null);
(statearr_155235_155302[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 16))
{var inst_155093 = (state_155191[25]);var inst_155095 = cljs.core.chunked_seq_QMARK_.call(null,inst_155093);var state_155191__$1 = state_155191;if(inst_155095)
{var statearr_155236_155303 = state_155191__$1;(statearr_155236_155303[1] = 19);
} else
{var statearr_155237_155304 = state_155191__$1;(statearr_155237_155304[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 17))
{var state_155191__$1 = state_155191;var statearr_155238_155305 = state_155191__$1;(statearr_155238_155305[2] = null);
(statearr_155238_155305[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 18))
{var inst_155117 = (state_155191[2]);var state_155191__$1 = state_155191;var statearr_155239_155306 = state_155191__$1;(statearr_155239_155306[2] = inst_155117);
(statearr_155239_155306[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 19))
{var inst_155093 = (state_155191[25]);var inst_155097 = cljs.core.chunk_first.call(null,inst_155093);var inst_155098 = cljs.core.chunk_rest.call(null,inst_155093);var inst_155099 = cljs.core.count.call(null,inst_155097);var inst_155073 = inst_155098;var inst_155074 = inst_155097;var inst_155075 = inst_155099;var inst_155076 = 0;var state_155191__$1 = (function (){var statearr_155240 = state_155191;(statearr_155240[14] = inst_155075);
(statearr_155240[15] = inst_155076);
(statearr_155240[16] = inst_155073);
(statearr_155240[17] = inst_155074);
return statearr_155240;
})();var statearr_155241_155307 = state_155191__$1;(statearr_155241_155307[2] = null);
(statearr_155241_155307[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 20))
{var inst_155093 = (state_155191[25]);var inst_155103 = cljs.core.first.call(null,inst_155093);var inst_155104 = cljs.core.nth.call(null,inst_155103,0,null);var inst_155105 = cljs.core.nth.call(null,inst_155103,1,null);var state_155191__$1 = (function (){var statearr_155242 = state_155191;(statearr_155242[27] = inst_155104);
return statearr_155242;
})();if(cljs.core.truth_(inst_155105))
{var statearr_155243_155308 = state_155191__$1;(statearr_155243_155308[1] = 22);
} else
{var statearr_155244_155309 = state_155191__$1;(statearr_155244_155309[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 21))
{var inst_155114 = (state_155191[2]);var state_155191__$1 = state_155191;var statearr_155245_155310 = state_155191__$1;(statearr_155245_155310[2] = inst_155114);
(statearr_155245_155310[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 22))
{var inst_155104 = (state_155191[27]);var inst_155107 = cljs.core.async.close_BANG_.call(null,inst_155104);var state_155191__$1 = state_155191;var statearr_155246_155311 = state_155191__$1;(statearr_155246_155311[2] = inst_155107);
(statearr_155246_155311[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 23))
{var state_155191__$1 = state_155191;var statearr_155247_155312 = state_155191__$1;(statearr_155247_155312[2] = null);
(statearr_155247_155312[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 24))
{var inst_155093 = (state_155191[25]);var inst_155110 = (state_155191[2]);var inst_155111 = cljs.core.next.call(null,inst_155093);var inst_155073 = inst_155111;var inst_155074 = null;var inst_155075 = 0;var inst_155076 = 0;var state_155191__$1 = (function (){var statearr_155248 = state_155191;(statearr_155248[14] = inst_155075);
(statearr_155248[15] = inst_155076);
(statearr_155248[16] = inst_155073);
(statearr_155248[17] = inst_155074);
(statearr_155248[28] = inst_155110);
return statearr_155248;
})();var statearr_155249_155313 = state_155191__$1;(statearr_155249_155313[2] = null);
(statearr_155249_155313[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 25))
{var inst_155135 = (state_155191[10]);var inst_155134 = (state_155191[11]);var inst_155137 = (inst_155135 < inst_155134);var inst_155138 = inst_155137;var state_155191__$1 = state_155191;if(cljs.core.truth_(inst_155138))
{var statearr_155250_155314 = state_155191__$1;(statearr_155250_155314[1] = 27);
} else
{var statearr_155251_155315 = state_155191__$1;(statearr_155251_155315[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 26))
{var inst_155182 = (state_155191[2]);var state_155191__$1 = (function (){var statearr_155252 = state_155191;(statearr_155252[29] = inst_155182);
return statearr_155252;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_155191__$1,42,dchan);
} else
{if((state_val_155192 === 27))
{var inst_155135 = (state_155191[10]);var inst_155133 = (state_155191[12]);var inst_155140 = cljs.core._nth.call(null,inst_155133,inst_155135);var state_155191__$1 = (function (){var statearr_155253 = state_155191;(statearr_155253[8] = inst_155140);
return statearr_155253;
})();var statearr_155254_155316 = state_155191__$1;(statearr_155254_155316[2] = null);
(statearr_155254_155316[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 28))
{var inst_155153 = (state_155191[9]);var inst_155132 = (state_155191[13]);var inst_155153__$1 = cljs.core.seq.call(null,inst_155132);var state_155191__$1 = (function (){var statearr_155258 = state_155191;(statearr_155258[9] = inst_155153__$1);
return statearr_155258;
})();if(inst_155153__$1)
{var statearr_155259_155317 = state_155191__$1;(statearr_155259_155317[1] = 33);
} else
{var statearr_155260_155318 = state_155191__$1;(statearr_155260_155318[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 29))
{var inst_155180 = (state_155191[2]);var state_155191__$1 = state_155191;var statearr_155261_155319 = state_155191__$1;(statearr_155261_155319[2] = inst_155180);
(statearr_155261_155319[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 30))
{var inst_155135 = (state_155191[10]);var inst_155134 = (state_155191[11]);var inst_155133 = (state_155191[12]);var inst_155132 = (state_155191[13]);var inst_155149 = (state_155191[2]);var inst_155150 = (inst_155135 + 1);var tmp155255 = inst_155134;var tmp155256 = inst_155133;var tmp155257 = inst_155132;var inst_155132__$1 = tmp155257;var inst_155133__$1 = tmp155256;var inst_155134__$1 = tmp155255;var inst_155135__$1 = inst_155150;var state_155191__$1 = (function (){var statearr_155262 = state_155191;(statearr_155262[30] = inst_155149);
(statearr_155262[10] = inst_155135__$1);
(statearr_155262[11] = inst_155134__$1);
(statearr_155262[12] = inst_155133__$1);
(statearr_155262[13] = inst_155132__$1);
return statearr_155262;
})();var statearr_155263_155320 = state_155191__$1;(statearr_155263_155320[2] = null);
(statearr_155263_155320[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155192 === 31))
{var inst_155140 = (state_155191[8]);var inst_155141 = (state_155191[2]);var inst_155142 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_155143 = cljs.core.async.untap_STAR_.call(null,m,inst_155140);var state_155191__$1 = (function (){var statearr_155264 = state_155191;(statearr_155264[31] = inst_155141);
(statearr_155264[32] = inst_155142);
return statearr_155264;
})();var statearr_155265_155321 = state_155191__$1;(statearr_155265_155321[2] = inst_155143);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155191__$1);
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
var state_machine__13310__auto____0 = (function (){var statearr_155269 = (new Array(33));(statearr_155269[0] = state_machine__13310__auto__);
(statearr_155269[1] = 1);
return statearr_155269;
});
var state_machine__13310__auto____1 = (function (state_155191){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_155191);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e155270){if((e155270 instanceof Object))
{var ex__13313__auto__ = e155270;var statearr_155271_155322 = state_155191;(statearr_155271_155322[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155191);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e155270;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__155323 = state_155191;
state_155191 = G__155323;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_155191){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_155191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_155272 = f__13410__auto__.call(null);(statearr_155272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___155273);
return statearr_155272;
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
cljs.core.async.Mix = (function (){var obj155325 = {};return obj155325;
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
;var m = (function (){if(typeof cljs.core.async.t155435 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t155435 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta155436){
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
this.meta155436 = meta155436;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t155435.cljs$lang$type = true;
cljs.core.async.t155435.cljs$lang$ctorStr = "cljs.core.async/t155435";
cljs.core.async.t155435.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t155435");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t155435.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t155435.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t155435.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t155435.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t155435.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t155435.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t155435.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t155435.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t155435.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_155437){var self__ = this;
var _155437__$1 = this;return self__.meta155436;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t155435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_155437,meta155436__$1){var self__ = this;
var _155437__$1 = this;return (new cljs.core.async.t155435(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta155436__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t155435 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t155435(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta155436){return (new cljs.core.async.t155435(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta155436));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t155435(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13409__auto___155544 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_155502){var state_val_155503 = (state_155502[1]);if((state_val_155503 === 1))
{var inst_155441 = (state_155502[7]);var inst_155441__$1 = calc_state.call(null);var inst_155442 = cljs.core.seq_QMARK_.call(null,inst_155441__$1);var state_155502__$1 = (function (){var statearr_155504 = state_155502;(statearr_155504[7] = inst_155441__$1);
return statearr_155504;
})();if(inst_155442)
{var statearr_155505_155545 = state_155502__$1;(statearr_155505_155545[1] = 2);
} else
{var statearr_155506_155546 = state_155502__$1;(statearr_155506_155546[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155503 === 2))
{var inst_155441 = (state_155502[7]);var inst_155444 = cljs.core.apply.call(null,cljs.core.hash_map,inst_155441);var state_155502__$1 = state_155502;var statearr_155507_155547 = state_155502__$1;(statearr_155507_155547[2] = inst_155444);
(statearr_155507_155547[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155503 === 3))
{var inst_155441 = (state_155502[7]);var state_155502__$1 = state_155502;var statearr_155508_155548 = state_155502__$1;(statearr_155508_155548[2] = inst_155441);
(statearr_155508_155548[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155503 === 4))
{var inst_155441 = (state_155502[7]);var inst_155447 = (state_155502[2]);var inst_155448 = cljs.core.get.call(null,inst_155447,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_155449 = cljs.core.get.call(null,inst_155447,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_155450 = cljs.core.get.call(null,inst_155447,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_155451 = inst_155441;var state_155502__$1 = (function (){var statearr_155509 = state_155502;(statearr_155509[8] = inst_155449);
(statearr_155509[9] = inst_155448);
(statearr_155509[10] = inst_155450);
(statearr_155509[11] = inst_155451);
return statearr_155509;
})();var statearr_155510_155549 = state_155502__$1;(statearr_155510_155549[2] = null);
(statearr_155510_155549[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155503 === 5))
{var inst_155451 = (state_155502[11]);var inst_155454 = cljs.core.seq_QMARK_.call(null,inst_155451);var state_155502__$1 = state_155502;if(inst_155454)
{var statearr_155511_155550 = state_155502__$1;(statearr_155511_155550[1] = 7);
} else
{var statearr_155512_155551 = state_155502__$1;(statearr_155512_155551[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155503 === 6))
{var inst_155500 = (state_155502[2]);var state_155502__$1 = state_155502;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155502__$1,inst_155500);
} else
{if((state_val_155503 === 7))
{var inst_155451 = (state_155502[11]);var inst_155456 = cljs.core.apply.call(null,cljs.core.hash_map,inst_155451);var state_155502__$1 = state_155502;var statearr_155513_155552 = state_155502__$1;(statearr_155513_155552[2] = inst_155456);
(statearr_155513_155552[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155503 === 8))
{var inst_155451 = (state_155502[11]);var state_155502__$1 = state_155502;var statearr_155514_155553 = state_155502__$1;(statearr_155514_155553[2] = inst_155451);
(statearr_155514_155553[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155503 === 9))
{var inst_155459 = (state_155502[12]);var inst_155459__$1 = (state_155502[2]);var inst_155460 = cljs.core.get.call(null,inst_155459__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_155461 = cljs.core.get.call(null,inst_155459__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_155462 = cljs.core.get.call(null,inst_155459__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_155502__$1 = (function (){var statearr_155515 = state_155502;(statearr_155515[12] = inst_155459__$1);
(statearr_155515[13] = inst_155462);
(statearr_155515[14] = inst_155461);
return statearr_155515;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_155502__$1,10,inst_155460);
} else
{if((state_val_155503 === 10))
{var inst_155466 = (state_155502[15]);var inst_155467 = (state_155502[16]);var inst_155465 = (state_155502[2]);var inst_155466__$1 = cljs.core.nth.call(null,inst_155465,0,null);var inst_155467__$1 = cljs.core.nth.call(null,inst_155465,1,null);var inst_155468 = (inst_155466__$1 == null);var inst_155469 = cljs.core._EQ_.call(null,inst_155467__$1,change);var inst_155470 = (inst_155468) || (inst_155469);var state_155502__$1 = (function (){var statearr_155516 = state_155502;(statearr_155516[15] = inst_155466__$1);
(statearr_155516[16] = inst_155467__$1);
return statearr_155516;
})();if(cljs.core.truth_(inst_155470))
{var statearr_155517_155554 = state_155502__$1;(statearr_155517_155554[1] = 11);
} else
{var statearr_155518_155555 = state_155502__$1;(statearr_155518_155555[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155503 === 11))
{var inst_155466 = (state_155502[15]);var inst_155472 = (inst_155466 == null);var state_155502__$1 = state_155502;if(cljs.core.truth_(inst_155472))
{var statearr_155519_155556 = state_155502__$1;(statearr_155519_155556[1] = 14);
} else
{var statearr_155520_155557 = state_155502__$1;(statearr_155520_155557[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155503 === 12))
{var inst_155481 = (state_155502[17]);var inst_155467 = (state_155502[16]);var inst_155462 = (state_155502[13]);var inst_155481__$1 = inst_155462.call(null,inst_155467);var state_155502__$1 = (function (){var statearr_155521 = state_155502;(statearr_155521[17] = inst_155481__$1);
return statearr_155521;
})();if(cljs.core.truth_(inst_155481__$1))
{var statearr_155522_155558 = state_155502__$1;(statearr_155522_155558[1] = 17);
} else
{var statearr_155523_155559 = state_155502__$1;(statearr_155523_155559[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155503 === 13))
{var inst_155498 = (state_155502[2]);var state_155502__$1 = state_155502;var statearr_155524_155560 = state_155502__$1;(statearr_155524_155560[2] = inst_155498);
(statearr_155524_155560[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155503 === 14))
{var inst_155467 = (state_155502[16]);var inst_155474 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_155467);var state_155502__$1 = state_155502;var statearr_155525_155561 = state_155502__$1;(statearr_155525_155561[2] = inst_155474);
(statearr_155525_155561[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155503 === 15))
{var state_155502__$1 = state_155502;var statearr_155526_155562 = state_155502__$1;(statearr_155526_155562[2] = null);
(statearr_155526_155562[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155503 === 16))
{var inst_155477 = (state_155502[2]);var inst_155478 = calc_state.call(null);var inst_155451 = inst_155478;var state_155502__$1 = (function (){var statearr_155527 = state_155502;(statearr_155527[18] = inst_155477);
(statearr_155527[11] = inst_155451);
return statearr_155527;
})();var statearr_155528_155563 = state_155502__$1;(statearr_155528_155563[2] = null);
(statearr_155528_155563[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155503 === 17))
{var inst_155481 = (state_155502[17]);var state_155502__$1 = state_155502;var statearr_155529_155564 = state_155502__$1;(statearr_155529_155564[2] = inst_155481);
(statearr_155529_155564[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155503 === 18))
{var inst_155467 = (state_155502[16]);var inst_155462 = (state_155502[13]);var inst_155461 = (state_155502[14]);var inst_155484 = cljs.core.empty_QMARK_.call(null,inst_155462);var inst_155485 = inst_155461.call(null,inst_155467);var inst_155486 = cljs.core.not.call(null,inst_155485);var inst_155487 = (inst_155484) && (inst_155486);var state_155502__$1 = state_155502;var statearr_155530_155565 = state_155502__$1;(statearr_155530_155565[2] = inst_155487);
(statearr_155530_155565[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155503 === 19))
{var inst_155489 = (state_155502[2]);var state_155502__$1 = state_155502;if(cljs.core.truth_(inst_155489))
{var statearr_155531_155566 = state_155502__$1;(statearr_155531_155566[1] = 20);
} else
{var statearr_155532_155567 = state_155502__$1;(statearr_155532_155567[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155503 === 20))
{var inst_155466 = (state_155502[15]);var state_155502__$1 = state_155502;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_155502__$1,23,out,inst_155466);
} else
{if((state_val_155503 === 21))
{var state_155502__$1 = state_155502;var statearr_155533_155568 = state_155502__$1;(statearr_155533_155568[2] = null);
(statearr_155533_155568[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155503 === 22))
{var inst_155459 = (state_155502[12]);var inst_155495 = (state_155502[2]);var inst_155451 = inst_155459;var state_155502__$1 = (function (){var statearr_155534 = state_155502;(statearr_155534[11] = inst_155451);
(statearr_155534[19] = inst_155495);
return statearr_155534;
})();var statearr_155535_155569 = state_155502__$1;(statearr_155535_155569[2] = null);
(statearr_155535_155569[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155503 === 23))
{var inst_155492 = (state_155502[2]);var state_155502__$1 = state_155502;var statearr_155536_155570 = state_155502__$1;(statearr_155536_155570[2] = inst_155492);
(statearr_155536_155570[1] = 22);
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
var state_machine__13310__auto____0 = (function (){var statearr_155540 = (new Array(20));(statearr_155540[0] = state_machine__13310__auto__);
(statearr_155540[1] = 1);
return statearr_155540;
});
var state_machine__13310__auto____1 = (function (state_155502){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_155502);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e155541){if((e155541 instanceof Object))
{var ex__13313__auto__ = e155541;var statearr_155542_155571 = state_155502;(statearr_155542_155571[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155502);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e155541;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__155572 = state_155502;
state_155502 = G__155572;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_155502){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_155502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_155543 = f__13410__auto__.call(null);(statearr_155543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___155544);
return statearr_155543;
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
cljs.core.async.Pub = (function (){var obj155574 = {};return obj155574;
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
return (function (p1__155575_SHARP_){if(cljs.core.truth_(p1__155575_SHARP_.call(null,topic)))
{return p1__155575_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__155575_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6289__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t155700 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t155700 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta155701){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta155701 = meta155701;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t155700.cljs$lang$type = true;
cljs.core.async.t155700.cljs$lang$ctorStr = "cljs.core.async/t155700";
cljs.core.async.t155700.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t155700");
});})(mults,ensure_mult))
;
cljs.core.async.t155700.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t155700.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t155700.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t155700.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t155700.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t155700.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t155700.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t155700.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_155702){var self__ = this;
var _155702__$1 = this;return self__.meta155701;
});})(mults,ensure_mult))
;
cljs.core.async.t155700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_155702,meta155701__$1){var self__ = this;
var _155702__$1 = this;return (new cljs.core.async.t155700(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta155701__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t155700 = ((function (mults,ensure_mult){
return (function __GT_t155700(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta155701){return (new cljs.core.async.t155700(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta155701));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t155700(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13409__auto___155824 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_155776){var state_val_155777 = (state_155776[1]);if((state_val_155777 === 1))
{var state_155776__$1 = state_155776;var statearr_155778_155825 = state_155776__$1;(statearr_155778_155825[2] = null);
(statearr_155778_155825[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155777 === 2))
{var state_155776__$1 = state_155776;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_155776__$1,4,ch);
} else
{if((state_val_155777 === 3))
{var inst_155774 = (state_155776[2]);var state_155776__$1 = state_155776;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155776__$1,inst_155774);
} else
{if((state_val_155777 === 4))
{var inst_155705 = (state_155776[7]);var inst_155705__$1 = (state_155776[2]);var inst_155706 = (inst_155705__$1 == null);var state_155776__$1 = (function (){var statearr_155779 = state_155776;(statearr_155779[7] = inst_155705__$1);
return statearr_155779;
})();if(cljs.core.truth_(inst_155706))
{var statearr_155780_155826 = state_155776__$1;(statearr_155780_155826[1] = 5);
} else
{var statearr_155781_155827 = state_155776__$1;(statearr_155781_155827[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155777 === 5))
{var inst_155712 = cljs.core.deref.call(null,mults);var inst_155713 = cljs.core.vals.call(null,inst_155712);var inst_155714 = cljs.core.seq.call(null,inst_155713);var inst_155715 = inst_155714;var inst_155716 = null;var inst_155717 = 0;var inst_155718 = 0;var state_155776__$1 = (function (){var statearr_155782 = state_155776;(statearr_155782[8] = inst_155715);
(statearr_155782[9] = inst_155718);
(statearr_155782[10] = inst_155716);
(statearr_155782[11] = inst_155717);
return statearr_155782;
})();var statearr_155783_155828 = state_155776__$1;(statearr_155783_155828[2] = null);
(statearr_155783_155828[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155777 === 6))
{var inst_155753 = (state_155776[12]);var inst_155755 = (state_155776[13]);var inst_155705 = (state_155776[7]);var inst_155753__$1 = topic_fn.call(null,inst_155705);var inst_155754 = cljs.core.deref.call(null,mults);var inst_155755__$1 = cljs.core.get.call(null,inst_155754,inst_155753__$1);var state_155776__$1 = (function (){var statearr_155784 = state_155776;(statearr_155784[12] = inst_155753__$1);
(statearr_155784[13] = inst_155755__$1);
return statearr_155784;
})();if(cljs.core.truth_(inst_155755__$1))
{var statearr_155785_155829 = state_155776__$1;(statearr_155785_155829[1] = 19);
} else
{var statearr_155786_155830 = state_155776__$1;(statearr_155786_155830[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155777 === 7))
{var inst_155772 = (state_155776[2]);var state_155776__$1 = state_155776;var statearr_155787_155831 = state_155776__$1;(statearr_155787_155831[2] = inst_155772);
(statearr_155787_155831[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155777 === 8))
{var inst_155718 = (state_155776[9]);var inst_155717 = (state_155776[11]);var inst_155720 = (inst_155718 < inst_155717);var inst_155721 = inst_155720;var state_155776__$1 = state_155776;if(cljs.core.truth_(inst_155721))
{var statearr_155791_155832 = state_155776__$1;(statearr_155791_155832[1] = 10);
} else
{var statearr_155792_155833 = state_155776__$1;(statearr_155792_155833[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155777 === 9))
{var inst_155751 = (state_155776[2]);var state_155776__$1 = state_155776;var statearr_155793_155834 = state_155776__$1;(statearr_155793_155834[2] = inst_155751);
(statearr_155793_155834[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155777 === 10))
{var inst_155715 = (state_155776[8]);var inst_155718 = (state_155776[9]);var inst_155716 = (state_155776[10]);var inst_155717 = (state_155776[11]);var inst_155723 = cljs.core._nth.call(null,inst_155716,inst_155718);var inst_155724 = cljs.core.async.muxch_STAR_.call(null,inst_155723);var inst_155725 = cljs.core.async.close_BANG_.call(null,inst_155724);var inst_155726 = (inst_155718 + 1);var tmp155788 = inst_155715;var tmp155789 = inst_155716;var tmp155790 = inst_155717;var inst_155715__$1 = tmp155788;var inst_155716__$1 = tmp155789;var inst_155717__$1 = tmp155790;var inst_155718__$1 = inst_155726;var state_155776__$1 = (function (){var statearr_155794 = state_155776;(statearr_155794[14] = inst_155725);
(statearr_155794[8] = inst_155715__$1);
(statearr_155794[9] = inst_155718__$1);
(statearr_155794[10] = inst_155716__$1);
(statearr_155794[11] = inst_155717__$1);
return statearr_155794;
})();var statearr_155795_155835 = state_155776__$1;(statearr_155795_155835[2] = null);
(statearr_155795_155835[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155777 === 11))
{var inst_155729 = (state_155776[15]);var inst_155715 = (state_155776[8]);var inst_155729__$1 = cljs.core.seq.call(null,inst_155715);var state_155776__$1 = (function (){var statearr_155796 = state_155776;(statearr_155796[15] = inst_155729__$1);
return statearr_155796;
})();if(inst_155729__$1)
{var statearr_155797_155836 = state_155776__$1;(statearr_155797_155836[1] = 13);
} else
{var statearr_155798_155837 = state_155776__$1;(statearr_155798_155837[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155777 === 12))
{var inst_155749 = (state_155776[2]);var state_155776__$1 = state_155776;var statearr_155799_155838 = state_155776__$1;(statearr_155799_155838[2] = inst_155749);
(statearr_155799_155838[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155777 === 13))
{var inst_155729 = (state_155776[15]);var inst_155731 = cljs.core.chunked_seq_QMARK_.call(null,inst_155729);var state_155776__$1 = state_155776;if(inst_155731)
{var statearr_155800_155839 = state_155776__$1;(statearr_155800_155839[1] = 16);
} else
{var statearr_155801_155840 = state_155776__$1;(statearr_155801_155840[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155777 === 14))
{var state_155776__$1 = state_155776;var statearr_155802_155841 = state_155776__$1;(statearr_155802_155841[2] = null);
(statearr_155802_155841[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155777 === 15))
{var inst_155747 = (state_155776[2]);var state_155776__$1 = state_155776;var statearr_155803_155842 = state_155776__$1;(statearr_155803_155842[2] = inst_155747);
(statearr_155803_155842[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155777 === 16))
{var inst_155729 = (state_155776[15]);var inst_155733 = cljs.core.chunk_first.call(null,inst_155729);var inst_155734 = cljs.core.chunk_rest.call(null,inst_155729);var inst_155735 = cljs.core.count.call(null,inst_155733);var inst_155715 = inst_155734;var inst_155716 = inst_155733;var inst_155717 = inst_155735;var inst_155718 = 0;var state_155776__$1 = (function (){var statearr_155804 = state_155776;(statearr_155804[8] = inst_155715);
(statearr_155804[9] = inst_155718);
(statearr_155804[10] = inst_155716);
(statearr_155804[11] = inst_155717);
return statearr_155804;
})();var statearr_155805_155843 = state_155776__$1;(statearr_155805_155843[2] = null);
(statearr_155805_155843[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155777 === 17))
{var inst_155729 = (state_155776[15]);var inst_155738 = cljs.core.first.call(null,inst_155729);var inst_155739 = cljs.core.async.muxch_STAR_.call(null,inst_155738);var inst_155740 = cljs.core.async.close_BANG_.call(null,inst_155739);var inst_155741 = cljs.core.next.call(null,inst_155729);var inst_155715 = inst_155741;var inst_155716 = null;var inst_155717 = 0;var inst_155718 = 0;var state_155776__$1 = (function (){var statearr_155806 = state_155776;(statearr_155806[16] = inst_155740);
(statearr_155806[8] = inst_155715);
(statearr_155806[9] = inst_155718);
(statearr_155806[10] = inst_155716);
(statearr_155806[11] = inst_155717);
return statearr_155806;
})();var statearr_155807_155844 = state_155776__$1;(statearr_155807_155844[2] = null);
(statearr_155807_155844[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155777 === 18))
{var inst_155744 = (state_155776[2]);var state_155776__$1 = state_155776;var statearr_155808_155845 = state_155776__$1;(statearr_155808_155845[2] = inst_155744);
(statearr_155808_155845[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155777 === 19))
{var state_155776__$1 = state_155776;var statearr_155809_155846 = state_155776__$1;(statearr_155809_155846[2] = null);
(statearr_155809_155846[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155777 === 20))
{var state_155776__$1 = state_155776;var statearr_155810_155847 = state_155776__$1;(statearr_155810_155847[2] = null);
(statearr_155810_155847[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155777 === 21))
{var inst_155769 = (state_155776[2]);var state_155776__$1 = (function (){var statearr_155811 = state_155776;(statearr_155811[17] = inst_155769);
return statearr_155811;
})();var statearr_155812_155848 = state_155776__$1;(statearr_155812_155848[2] = null);
(statearr_155812_155848[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155777 === 22))
{var inst_155766 = (state_155776[2]);var state_155776__$1 = state_155776;var statearr_155813_155849 = state_155776__$1;(statearr_155813_155849[2] = inst_155766);
(statearr_155813_155849[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155777 === 23))
{var inst_155753 = (state_155776[12]);var inst_155757 = (state_155776[2]);var inst_155758 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_155753);var state_155776__$1 = (function (){var statearr_155814 = state_155776;(statearr_155814[18] = inst_155757);
return statearr_155814;
})();var statearr_155815_155850 = state_155776__$1;(statearr_155815_155850[2] = inst_155758);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155776__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155777 === 24))
{var inst_155755 = (state_155776[13]);var inst_155705 = (state_155776[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_155776,23,Object,null,22);var inst_155762 = cljs.core.async.muxch_STAR_.call(null,inst_155755);var state_155776__$1 = state_155776;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_155776__$1,25,inst_155762,inst_155705);
} else
{if((state_val_155777 === 25))
{var inst_155764 = (state_155776[2]);var state_155776__$1 = state_155776;var statearr_155816_155851 = state_155776__$1;(statearr_155816_155851[2] = inst_155764);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155776__$1);
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
var state_machine__13310__auto____0 = (function (){var statearr_155820 = (new Array(19));(statearr_155820[0] = state_machine__13310__auto__);
(statearr_155820[1] = 1);
return statearr_155820;
});
var state_machine__13310__auto____1 = (function (state_155776){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_155776);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e155821){if((e155821 instanceof Object))
{var ex__13313__auto__ = e155821;var statearr_155822_155852 = state_155776;(statearr_155822_155852[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155776);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e155821;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__155853 = state_155776;
state_155776 = G__155853;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_155776){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_155776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_155823 = f__13410__auto__.call(null);(statearr_155823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___155824);
return statearr_155823;
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
,cljs.core.range.call(null,cnt));var c__13409__auto___155990 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_155960){var state_val_155961 = (state_155960[1]);if((state_val_155961 === 1))
{var state_155960__$1 = state_155960;var statearr_155962_155991 = state_155960__$1;(statearr_155962_155991[2] = null);
(statearr_155962_155991[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155961 === 2))
{var inst_155923 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_155924 = 0;var state_155960__$1 = (function (){var statearr_155963 = state_155960;(statearr_155963[7] = inst_155924);
(statearr_155963[8] = inst_155923);
return statearr_155963;
})();var statearr_155964_155992 = state_155960__$1;(statearr_155964_155992[2] = null);
(statearr_155964_155992[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155961 === 3))
{var inst_155958 = (state_155960[2]);var state_155960__$1 = state_155960;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155960__$1,inst_155958);
} else
{if((state_val_155961 === 4))
{var inst_155924 = (state_155960[7]);var inst_155926 = (inst_155924 < cnt);var state_155960__$1 = state_155960;if(cljs.core.truth_(inst_155926))
{var statearr_155965_155993 = state_155960__$1;(statearr_155965_155993[1] = 6);
} else
{var statearr_155966_155994 = state_155960__$1;(statearr_155966_155994[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155961 === 5))
{var inst_155944 = (state_155960[2]);var state_155960__$1 = (function (){var statearr_155967 = state_155960;(statearr_155967[9] = inst_155944);
return statearr_155967;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_155960__$1,12,dchan);
} else
{if((state_val_155961 === 6))
{var state_155960__$1 = state_155960;var statearr_155968_155995 = state_155960__$1;(statearr_155968_155995[2] = null);
(statearr_155968_155995[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155961 === 7))
{var state_155960__$1 = state_155960;var statearr_155969_155996 = state_155960__$1;(statearr_155969_155996[2] = null);
(statearr_155969_155996[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155961 === 8))
{var inst_155942 = (state_155960[2]);var state_155960__$1 = state_155960;var statearr_155970_155997 = state_155960__$1;(statearr_155970_155997[2] = inst_155942);
(statearr_155970_155997[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155961 === 9))
{var inst_155924 = (state_155960[7]);var inst_155937 = (state_155960[2]);var inst_155938 = (inst_155924 + 1);var inst_155924__$1 = inst_155938;var state_155960__$1 = (function (){var statearr_155971 = state_155960;(statearr_155971[7] = inst_155924__$1);
(statearr_155971[10] = inst_155937);
return statearr_155971;
})();var statearr_155972_155998 = state_155960__$1;(statearr_155972_155998[2] = null);
(statearr_155972_155998[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155961 === 10))
{var inst_155928 = (state_155960[2]);var inst_155929 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_155960__$1 = (function (){var statearr_155973 = state_155960;(statearr_155973[11] = inst_155928);
return statearr_155973;
})();var statearr_155974_155999 = state_155960__$1;(statearr_155974_155999[2] = inst_155929);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155960__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155961 === 11))
{var inst_155924 = (state_155960[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_155960,10,Object,null,9);var inst_155933 = chs__$1.call(null,inst_155924);var inst_155934 = done.call(null,inst_155924);var inst_155935 = cljs.core.async.take_BANG_.call(null,inst_155933,inst_155934);var state_155960__$1 = state_155960;var statearr_155975_156000 = state_155960__$1;(statearr_155975_156000[2] = inst_155935);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155960__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155961 === 12))
{var inst_155946 = (state_155960[12]);var inst_155946__$1 = (state_155960[2]);var inst_155947 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_155946__$1);var state_155960__$1 = (function (){var statearr_155976 = state_155960;(statearr_155976[12] = inst_155946__$1);
return statearr_155976;
})();if(cljs.core.truth_(inst_155947))
{var statearr_155977_156001 = state_155960__$1;(statearr_155977_156001[1] = 13);
} else
{var statearr_155978_156002 = state_155960__$1;(statearr_155978_156002[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155961 === 13))
{var inst_155949 = cljs.core.async.close_BANG_.call(null,out);var state_155960__$1 = state_155960;var statearr_155979_156003 = state_155960__$1;(statearr_155979_156003[2] = inst_155949);
(statearr_155979_156003[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155961 === 14))
{var inst_155946 = (state_155960[12]);var inst_155951 = cljs.core.apply.call(null,f,inst_155946);var state_155960__$1 = state_155960;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_155960__$1,16,out,inst_155951);
} else
{if((state_val_155961 === 15))
{var inst_155956 = (state_155960[2]);var state_155960__$1 = state_155960;var statearr_155980_156004 = state_155960__$1;(statearr_155980_156004[2] = inst_155956);
(statearr_155980_156004[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_155961 === 16))
{var inst_155953 = (state_155960[2]);var state_155960__$1 = (function (){var statearr_155981 = state_155960;(statearr_155981[13] = inst_155953);
return statearr_155981;
})();var statearr_155982_156005 = state_155960__$1;(statearr_155982_156005[2] = null);
(statearr_155982_156005[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_155986 = (new Array(14));(statearr_155986[0] = state_machine__13310__auto__);
(statearr_155986[1] = 1);
return statearr_155986;
});
var state_machine__13310__auto____1 = (function (state_155960){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_155960);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e155987){if((e155987 instanceof Object))
{var ex__13313__auto__ = e155987;var statearr_155988_156006 = state_155960;(statearr_155988_156006[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155960);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e155987;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__156007 = state_155960;
state_155960 = G__156007;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_155960){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_155960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_155989 = f__13410__auto__.call(null);(statearr_155989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___155990);
return statearr_155989;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___156115 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_156091){var state_val_156092 = (state_156091[1]);if((state_val_156092 === 1))
{var inst_156062 = cljs.core.vec.call(null,chs);var inst_156063 = inst_156062;var state_156091__$1 = (function (){var statearr_156093 = state_156091;(statearr_156093[7] = inst_156063);
return statearr_156093;
})();var statearr_156094_156116 = state_156091__$1;(statearr_156094_156116[2] = null);
(statearr_156094_156116[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156092 === 2))
{var inst_156063 = (state_156091[7]);var inst_156065 = cljs.core.count.call(null,inst_156063);var inst_156066 = (inst_156065 > 0);var state_156091__$1 = state_156091;if(cljs.core.truth_(inst_156066))
{var statearr_156095_156117 = state_156091__$1;(statearr_156095_156117[1] = 4);
} else
{var statearr_156096_156118 = state_156091__$1;(statearr_156096_156118[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156092 === 3))
{var inst_156089 = (state_156091[2]);var state_156091__$1 = state_156091;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156091__$1,inst_156089);
} else
{if((state_val_156092 === 4))
{var inst_156063 = (state_156091[7]);var state_156091__$1 = state_156091;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_156091__$1,7,inst_156063);
} else
{if((state_val_156092 === 5))
{var inst_156085 = cljs.core.async.close_BANG_.call(null,out);var state_156091__$1 = state_156091;var statearr_156097_156119 = state_156091__$1;(statearr_156097_156119[2] = inst_156085);
(statearr_156097_156119[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156092 === 6))
{var inst_156087 = (state_156091[2]);var state_156091__$1 = state_156091;var statearr_156098_156120 = state_156091__$1;(statearr_156098_156120[2] = inst_156087);
(statearr_156098_156120[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156092 === 7))
{var inst_156071 = (state_156091[8]);var inst_156070 = (state_156091[9]);var inst_156070__$1 = (state_156091[2]);var inst_156071__$1 = cljs.core.nth.call(null,inst_156070__$1,0,null);var inst_156072 = cljs.core.nth.call(null,inst_156070__$1,1,null);var inst_156073 = (inst_156071__$1 == null);var state_156091__$1 = (function (){var statearr_156099 = state_156091;(statearr_156099[8] = inst_156071__$1);
(statearr_156099[9] = inst_156070__$1);
(statearr_156099[10] = inst_156072);
return statearr_156099;
})();if(cljs.core.truth_(inst_156073))
{var statearr_156100_156121 = state_156091__$1;(statearr_156100_156121[1] = 8);
} else
{var statearr_156101_156122 = state_156091__$1;(statearr_156101_156122[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156092 === 8))
{var inst_156063 = (state_156091[7]);var inst_156071 = (state_156091[8]);var inst_156070 = (state_156091[9]);var inst_156072 = (state_156091[10]);var inst_156075 = (function (){var c = inst_156072;var v = inst_156071;var vec__156068 = inst_156070;var cs = inst_156063;return ((function (c,v,vec__156068,cs,inst_156063,inst_156071,inst_156070,inst_156072,state_val_156092){
return (function (p1__156008_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__156008_SHARP_);
});
;})(c,v,vec__156068,cs,inst_156063,inst_156071,inst_156070,inst_156072,state_val_156092))
})();var inst_156076 = cljs.core.filterv.call(null,inst_156075,inst_156063);var inst_156063__$1 = inst_156076;var state_156091__$1 = (function (){var statearr_156102 = state_156091;(statearr_156102[7] = inst_156063__$1);
return statearr_156102;
})();var statearr_156103_156123 = state_156091__$1;(statearr_156103_156123[2] = null);
(statearr_156103_156123[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156092 === 9))
{var inst_156071 = (state_156091[8]);var state_156091__$1 = state_156091;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_156091__$1,11,out,inst_156071);
} else
{if((state_val_156092 === 10))
{var inst_156083 = (state_156091[2]);var state_156091__$1 = state_156091;var statearr_156105_156124 = state_156091__$1;(statearr_156105_156124[2] = inst_156083);
(statearr_156105_156124[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156092 === 11))
{var inst_156063 = (state_156091[7]);var inst_156080 = (state_156091[2]);var tmp156104 = inst_156063;var inst_156063__$1 = tmp156104;var state_156091__$1 = (function (){var statearr_156106 = state_156091;(statearr_156106[7] = inst_156063__$1);
(statearr_156106[11] = inst_156080);
return statearr_156106;
})();var statearr_156107_156125 = state_156091__$1;(statearr_156107_156125[2] = null);
(statearr_156107_156125[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_156111 = (new Array(12));(statearr_156111[0] = state_machine__13310__auto__);
(statearr_156111[1] = 1);
return statearr_156111;
});
var state_machine__13310__auto____1 = (function (state_156091){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_156091);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e156112){if((e156112 instanceof Object))
{var ex__13313__auto__ = e156112;var statearr_156113_156126 = state_156091;(statearr_156113_156126[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156091);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e156112;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__156127 = state_156091;
state_156091 = G__156127;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_156091){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_156091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_156114 = f__13410__auto__.call(null);(statearr_156114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___156115);
return statearr_156114;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___156220 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_156197){var state_val_156198 = (state_156197[1]);if((state_val_156198 === 1))
{var inst_156174 = 0;var state_156197__$1 = (function (){var statearr_156199 = state_156197;(statearr_156199[7] = inst_156174);
return statearr_156199;
})();var statearr_156200_156221 = state_156197__$1;(statearr_156200_156221[2] = null);
(statearr_156200_156221[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156198 === 2))
{var inst_156174 = (state_156197[7]);var inst_156176 = (inst_156174 < n);var state_156197__$1 = state_156197;if(cljs.core.truth_(inst_156176))
{var statearr_156201_156222 = state_156197__$1;(statearr_156201_156222[1] = 4);
} else
{var statearr_156202_156223 = state_156197__$1;(statearr_156202_156223[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156198 === 3))
{var inst_156194 = (state_156197[2]);var inst_156195 = cljs.core.async.close_BANG_.call(null,out);var state_156197__$1 = (function (){var statearr_156203 = state_156197;(statearr_156203[8] = inst_156194);
return statearr_156203;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156197__$1,inst_156195);
} else
{if((state_val_156198 === 4))
{var state_156197__$1 = state_156197;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156197__$1,7,ch);
} else
{if((state_val_156198 === 5))
{var state_156197__$1 = state_156197;var statearr_156204_156224 = state_156197__$1;(statearr_156204_156224[2] = null);
(statearr_156204_156224[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156198 === 6))
{var inst_156192 = (state_156197[2]);var state_156197__$1 = state_156197;var statearr_156205_156225 = state_156197__$1;(statearr_156205_156225[2] = inst_156192);
(statearr_156205_156225[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156198 === 7))
{var inst_156179 = (state_156197[9]);var inst_156179__$1 = (state_156197[2]);var inst_156180 = (inst_156179__$1 == null);var inst_156181 = cljs.core.not.call(null,inst_156180);var state_156197__$1 = (function (){var statearr_156206 = state_156197;(statearr_156206[9] = inst_156179__$1);
return statearr_156206;
})();if(inst_156181)
{var statearr_156207_156226 = state_156197__$1;(statearr_156207_156226[1] = 8);
} else
{var statearr_156208_156227 = state_156197__$1;(statearr_156208_156227[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156198 === 8))
{var inst_156179 = (state_156197[9]);var state_156197__$1 = state_156197;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_156197__$1,11,out,inst_156179);
} else
{if((state_val_156198 === 9))
{var state_156197__$1 = state_156197;var statearr_156209_156228 = state_156197__$1;(statearr_156209_156228[2] = null);
(statearr_156209_156228[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156198 === 10))
{var inst_156189 = (state_156197[2]);var state_156197__$1 = state_156197;var statearr_156210_156229 = state_156197__$1;(statearr_156210_156229[2] = inst_156189);
(statearr_156210_156229[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156198 === 11))
{var inst_156174 = (state_156197[7]);var inst_156184 = (state_156197[2]);var inst_156185 = (inst_156174 + 1);var inst_156174__$1 = inst_156185;var state_156197__$1 = (function (){var statearr_156211 = state_156197;(statearr_156211[7] = inst_156174__$1);
(statearr_156211[10] = inst_156184);
return statearr_156211;
})();var statearr_156212_156230 = state_156197__$1;(statearr_156212_156230[2] = null);
(statearr_156212_156230[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_156216 = (new Array(11));(statearr_156216[0] = state_machine__13310__auto__);
(statearr_156216[1] = 1);
return statearr_156216;
});
var state_machine__13310__auto____1 = (function (state_156197){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_156197);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e156217){if((e156217 instanceof Object))
{var ex__13313__auto__ = e156217;var statearr_156218_156231 = state_156197;(statearr_156218_156231[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156197);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e156217;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__156232 = state_156197;
state_156197 = G__156232;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_156197){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_156197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_156219 = f__13410__auto__.call(null);(statearr_156219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___156220);
return statearr_156219;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___156329 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_156304){var state_val_156305 = (state_156304[1]);if((state_val_156305 === 1))
{var inst_156281 = null;var state_156304__$1 = (function (){var statearr_156306 = state_156304;(statearr_156306[7] = inst_156281);
return statearr_156306;
})();var statearr_156307_156330 = state_156304__$1;(statearr_156307_156330[2] = null);
(statearr_156307_156330[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156305 === 2))
{var state_156304__$1 = state_156304;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156304__$1,4,ch);
} else
{if((state_val_156305 === 3))
{var inst_156301 = (state_156304[2]);var inst_156302 = cljs.core.async.close_BANG_.call(null,out);var state_156304__$1 = (function (){var statearr_156308 = state_156304;(statearr_156308[8] = inst_156301);
return statearr_156308;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156304__$1,inst_156302);
} else
{if((state_val_156305 === 4))
{var inst_156284 = (state_156304[9]);var inst_156284__$1 = (state_156304[2]);var inst_156285 = (inst_156284__$1 == null);var inst_156286 = cljs.core.not.call(null,inst_156285);var state_156304__$1 = (function (){var statearr_156309 = state_156304;(statearr_156309[9] = inst_156284__$1);
return statearr_156309;
})();if(inst_156286)
{var statearr_156310_156331 = state_156304__$1;(statearr_156310_156331[1] = 5);
} else
{var statearr_156311_156332 = state_156304__$1;(statearr_156311_156332[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156305 === 5))
{var inst_156284 = (state_156304[9]);var inst_156281 = (state_156304[7]);var inst_156288 = cljs.core._EQ_.call(null,inst_156284,inst_156281);var state_156304__$1 = state_156304;if(inst_156288)
{var statearr_156312_156333 = state_156304__$1;(statearr_156312_156333[1] = 8);
} else
{var statearr_156313_156334 = state_156304__$1;(statearr_156313_156334[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156305 === 6))
{var state_156304__$1 = state_156304;var statearr_156315_156335 = state_156304__$1;(statearr_156315_156335[2] = null);
(statearr_156315_156335[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156305 === 7))
{var inst_156299 = (state_156304[2]);var state_156304__$1 = state_156304;var statearr_156316_156336 = state_156304__$1;(statearr_156316_156336[2] = inst_156299);
(statearr_156316_156336[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156305 === 8))
{var inst_156281 = (state_156304[7]);var tmp156314 = inst_156281;var inst_156281__$1 = tmp156314;var state_156304__$1 = (function (){var statearr_156317 = state_156304;(statearr_156317[7] = inst_156281__$1);
return statearr_156317;
})();var statearr_156318_156337 = state_156304__$1;(statearr_156318_156337[2] = null);
(statearr_156318_156337[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156305 === 9))
{var inst_156284 = (state_156304[9]);var state_156304__$1 = state_156304;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_156304__$1,11,out,inst_156284);
} else
{if((state_val_156305 === 10))
{var inst_156296 = (state_156304[2]);var state_156304__$1 = state_156304;var statearr_156319_156338 = state_156304__$1;(statearr_156319_156338[2] = inst_156296);
(statearr_156319_156338[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156305 === 11))
{var inst_156284 = (state_156304[9]);var inst_156293 = (state_156304[2]);var inst_156281 = inst_156284;var state_156304__$1 = (function (){var statearr_156320 = state_156304;(statearr_156320[7] = inst_156281);
(statearr_156320[10] = inst_156293);
return statearr_156320;
})();var statearr_156321_156339 = state_156304__$1;(statearr_156321_156339[2] = null);
(statearr_156321_156339[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_156325 = (new Array(11));(statearr_156325[0] = state_machine__13310__auto__);
(statearr_156325[1] = 1);
return statearr_156325;
});
var state_machine__13310__auto____1 = (function (state_156304){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_156304);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e156326){if((e156326 instanceof Object))
{var ex__13313__auto__ = e156326;var statearr_156327_156340 = state_156304;(statearr_156327_156340[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156304);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e156326;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__156341 = state_156304;
state_156304 = G__156341;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_156304){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_156304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_156328 = f__13410__auto__.call(null);(statearr_156328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___156329);
return statearr_156328;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___156476 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_156446){var state_val_156447 = (state_156446[1]);if((state_val_156447 === 1))
{var inst_156409 = (new Array(n));var inst_156410 = inst_156409;var inst_156411 = 0;var state_156446__$1 = (function (){var statearr_156448 = state_156446;(statearr_156448[7] = inst_156411);
(statearr_156448[8] = inst_156410);
return statearr_156448;
})();var statearr_156449_156477 = state_156446__$1;(statearr_156449_156477[2] = null);
(statearr_156449_156477[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156447 === 2))
{var state_156446__$1 = state_156446;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156446__$1,4,ch);
} else
{if((state_val_156447 === 3))
{var inst_156444 = (state_156446[2]);var state_156446__$1 = state_156446;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156446__$1,inst_156444);
} else
{if((state_val_156447 === 4))
{var inst_156414 = (state_156446[9]);var inst_156414__$1 = (state_156446[2]);var inst_156415 = (inst_156414__$1 == null);var inst_156416 = cljs.core.not.call(null,inst_156415);var state_156446__$1 = (function (){var statearr_156450 = state_156446;(statearr_156450[9] = inst_156414__$1);
return statearr_156450;
})();if(inst_156416)
{var statearr_156451_156478 = state_156446__$1;(statearr_156451_156478[1] = 5);
} else
{var statearr_156452_156479 = state_156446__$1;(statearr_156452_156479[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156447 === 5))
{var inst_156419 = (state_156446[10]);var inst_156411 = (state_156446[7]);var inst_156410 = (state_156446[8]);var inst_156414 = (state_156446[9]);var inst_156418 = (inst_156410[inst_156411] = inst_156414);var inst_156419__$1 = (inst_156411 + 1);var inst_156420 = (inst_156419__$1 < n);var state_156446__$1 = (function (){var statearr_156453 = state_156446;(statearr_156453[10] = inst_156419__$1);
(statearr_156453[11] = inst_156418);
return statearr_156453;
})();if(cljs.core.truth_(inst_156420))
{var statearr_156454_156480 = state_156446__$1;(statearr_156454_156480[1] = 8);
} else
{var statearr_156455_156481 = state_156446__$1;(statearr_156455_156481[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156447 === 6))
{var inst_156411 = (state_156446[7]);var inst_156432 = (inst_156411 > 0);var state_156446__$1 = state_156446;if(cljs.core.truth_(inst_156432))
{var statearr_156457_156482 = state_156446__$1;(statearr_156457_156482[1] = 12);
} else
{var statearr_156458_156483 = state_156446__$1;(statearr_156458_156483[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156447 === 7))
{var inst_156442 = (state_156446[2]);var state_156446__$1 = state_156446;var statearr_156459_156484 = state_156446__$1;(statearr_156459_156484[2] = inst_156442);
(statearr_156459_156484[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156447 === 8))
{var inst_156419 = (state_156446[10]);var inst_156410 = (state_156446[8]);var tmp156456 = inst_156410;var inst_156410__$1 = tmp156456;var inst_156411 = inst_156419;var state_156446__$1 = (function (){var statearr_156460 = state_156446;(statearr_156460[7] = inst_156411);
(statearr_156460[8] = inst_156410__$1);
return statearr_156460;
})();var statearr_156461_156485 = state_156446__$1;(statearr_156461_156485[2] = null);
(statearr_156461_156485[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156447 === 9))
{var inst_156410 = (state_156446[8]);var inst_156424 = cljs.core.vec.call(null,inst_156410);var state_156446__$1 = state_156446;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_156446__$1,11,out,inst_156424);
} else
{if((state_val_156447 === 10))
{var inst_156430 = (state_156446[2]);var state_156446__$1 = state_156446;var statearr_156462_156486 = state_156446__$1;(statearr_156462_156486[2] = inst_156430);
(statearr_156462_156486[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156447 === 11))
{var inst_156426 = (state_156446[2]);var inst_156427 = (new Array(n));var inst_156410 = inst_156427;var inst_156411 = 0;var state_156446__$1 = (function (){var statearr_156463 = state_156446;(statearr_156463[7] = inst_156411);
(statearr_156463[8] = inst_156410);
(statearr_156463[12] = inst_156426);
return statearr_156463;
})();var statearr_156464_156487 = state_156446__$1;(statearr_156464_156487[2] = null);
(statearr_156464_156487[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156447 === 12))
{var inst_156410 = (state_156446[8]);var inst_156434 = cljs.core.vec.call(null,inst_156410);var state_156446__$1 = state_156446;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_156446__$1,15,out,inst_156434);
} else
{if((state_val_156447 === 13))
{var state_156446__$1 = state_156446;var statearr_156465_156488 = state_156446__$1;(statearr_156465_156488[2] = null);
(statearr_156465_156488[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156447 === 14))
{var inst_156439 = (state_156446[2]);var inst_156440 = cljs.core.async.close_BANG_.call(null,out);var state_156446__$1 = (function (){var statearr_156466 = state_156446;(statearr_156466[13] = inst_156439);
return statearr_156466;
})();var statearr_156467_156489 = state_156446__$1;(statearr_156467_156489[2] = inst_156440);
(statearr_156467_156489[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156447 === 15))
{var inst_156436 = (state_156446[2]);var state_156446__$1 = state_156446;var statearr_156468_156490 = state_156446__$1;(statearr_156468_156490[2] = inst_156436);
(statearr_156468_156490[1] = 14);
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
var state_machine__13310__auto____0 = (function (){var statearr_156472 = (new Array(14));(statearr_156472[0] = state_machine__13310__auto__);
(statearr_156472[1] = 1);
return statearr_156472;
});
var state_machine__13310__auto____1 = (function (state_156446){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_156446);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e156473){if((e156473 instanceof Object))
{var ex__13313__auto__ = e156473;var statearr_156474_156491 = state_156446;(statearr_156474_156491[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156446);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e156473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__156492 = state_156446;
state_156446 = G__156492;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_156446){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_156446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_156475 = f__13410__auto__.call(null);(statearr_156475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___156476);
return statearr_156475;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___156635 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_156605){var state_val_156606 = (state_156605[1]);if((state_val_156606 === 1))
{var inst_156564 = (new Array(0));var inst_156565 = inst_156564;var inst_156566 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_156605__$1 = (function (){var statearr_156607 = state_156605;(statearr_156607[7] = inst_156566);
(statearr_156607[8] = inst_156565);
return statearr_156607;
})();var statearr_156608_156636 = state_156605__$1;(statearr_156608_156636[2] = null);
(statearr_156608_156636[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156606 === 2))
{var state_156605__$1 = state_156605;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156605__$1,4,ch);
} else
{if((state_val_156606 === 3))
{var inst_156603 = (state_156605[2]);var state_156605__$1 = state_156605;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156605__$1,inst_156603);
} else
{if((state_val_156606 === 4))
{var inst_156569 = (state_156605[9]);var inst_156569__$1 = (state_156605[2]);var inst_156570 = (inst_156569__$1 == null);var inst_156571 = cljs.core.not.call(null,inst_156570);var state_156605__$1 = (function (){var statearr_156609 = state_156605;(statearr_156609[9] = inst_156569__$1);
return statearr_156609;
})();if(inst_156571)
{var statearr_156610_156637 = state_156605__$1;(statearr_156610_156637[1] = 5);
} else
{var statearr_156611_156638 = state_156605__$1;(statearr_156611_156638[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156606 === 5))
{var inst_156566 = (state_156605[7]);var inst_156573 = (state_156605[10]);var inst_156569 = (state_156605[9]);var inst_156573__$1 = f.call(null,inst_156569);var inst_156574 = cljs.core._EQ_.call(null,inst_156573__$1,inst_156566);var inst_156575 = cljs.core.keyword_identical_QMARK_.call(null,inst_156566,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_156576 = (inst_156574) || (inst_156575);var state_156605__$1 = (function (){var statearr_156612 = state_156605;(statearr_156612[10] = inst_156573__$1);
return statearr_156612;
})();if(cljs.core.truth_(inst_156576))
{var statearr_156613_156639 = state_156605__$1;(statearr_156613_156639[1] = 8);
} else
{var statearr_156614_156640 = state_156605__$1;(statearr_156614_156640[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156606 === 6))
{var inst_156565 = (state_156605[8]);var inst_156590 = inst_156565.length;var inst_156591 = (inst_156590 > 0);var state_156605__$1 = state_156605;if(cljs.core.truth_(inst_156591))
{var statearr_156616_156641 = state_156605__$1;(statearr_156616_156641[1] = 12);
} else
{var statearr_156617_156642 = state_156605__$1;(statearr_156617_156642[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156606 === 7))
{var inst_156601 = (state_156605[2]);var state_156605__$1 = state_156605;var statearr_156618_156643 = state_156605__$1;(statearr_156618_156643[2] = inst_156601);
(statearr_156618_156643[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156606 === 8))
{var inst_156573 = (state_156605[10]);var inst_156569 = (state_156605[9]);var inst_156565 = (state_156605[8]);var inst_156578 = inst_156565.push(inst_156569);var tmp156615 = inst_156565;var inst_156565__$1 = tmp156615;var inst_156566 = inst_156573;var state_156605__$1 = (function (){var statearr_156619 = state_156605;(statearr_156619[7] = inst_156566);
(statearr_156619[8] = inst_156565__$1);
(statearr_156619[11] = inst_156578);
return statearr_156619;
})();var statearr_156620_156644 = state_156605__$1;(statearr_156620_156644[2] = null);
(statearr_156620_156644[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156606 === 9))
{var inst_156565 = (state_156605[8]);var inst_156581 = cljs.core.vec.call(null,inst_156565);var state_156605__$1 = state_156605;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_156605__$1,11,out,inst_156581);
} else
{if((state_val_156606 === 10))
{var inst_156588 = (state_156605[2]);var state_156605__$1 = state_156605;var statearr_156621_156645 = state_156605__$1;(statearr_156621_156645[2] = inst_156588);
(statearr_156621_156645[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156606 === 11))
{var inst_156573 = (state_156605[10]);var inst_156569 = (state_156605[9]);var inst_156583 = (state_156605[2]);var inst_156584 = (new Array(0));var inst_156585 = inst_156584.push(inst_156569);var inst_156565 = inst_156584;var inst_156566 = inst_156573;var state_156605__$1 = (function (){var statearr_156622 = state_156605;(statearr_156622[7] = inst_156566);
(statearr_156622[8] = inst_156565);
(statearr_156622[12] = inst_156583);
(statearr_156622[13] = inst_156585);
return statearr_156622;
})();var statearr_156623_156646 = state_156605__$1;(statearr_156623_156646[2] = null);
(statearr_156623_156646[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156606 === 12))
{var inst_156565 = (state_156605[8]);var inst_156593 = cljs.core.vec.call(null,inst_156565);var state_156605__$1 = state_156605;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_156605__$1,15,out,inst_156593);
} else
{if((state_val_156606 === 13))
{var state_156605__$1 = state_156605;var statearr_156624_156647 = state_156605__$1;(statearr_156624_156647[2] = null);
(statearr_156624_156647[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156606 === 14))
{var inst_156598 = (state_156605[2]);var inst_156599 = cljs.core.async.close_BANG_.call(null,out);var state_156605__$1 = (function (){var statearr_156625 = state_156605;(statearr_156625[14] = inst_156598);
return statearr_156625;
})();var statearr_156626_156648 = state_156605__$1;(statearr_156626_156648[2] = inst_156599);
(statearr_156626_156648[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_156606 === 15))
{var inst_156595 = (state_156605[2]);var state_156605__$1 = state_156605;var statearr_156627_156649 = state_156605__$1;(statearr_156627_156649[2] = inst_156595);
(statearr_156627_156649[1] = 14);
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
var state_machine__13310__auto____0 = (function (){var statearr_156631 = (new Array(15));(statearr_156631[0] = state_machine__13310__auto__);
(statearr_156631[1] = 1);
return statearr_156631;
});
var state_machine__13310__auto____1 = (function (state_156605){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_156605);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e156632){if((e156632 instanceof Object))
{var ex__13313__auto__ = e156632;var statearr_156633_156650 = state_156605;(statearr_156633_156650[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156605);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e156632;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__156651 = state_156605;
state_156605 = G__156651;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_156605){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_156605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_156634 = f__13410__auto__.call(null);(statearr_156634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___156635);
return statearr_156634;
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
