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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t31853 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31853 = (function (f,fn_handler,meta31854){
this.f = f;
this.fn_handler = fn_handler;
this.meta31854 = meta31854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31853.cljs$lang$type = true;
cljs.core.async.t31853.cljs$lang$ctorStr = "cljs.core.async/t31853";
cljs.core.async.t31853.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t31853");
});
cljs.core.async.t31853.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31853.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t31853.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t31853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31855){var self__ = this;
var _31855__$1 = this;return self__.meta31854;
});
cljs.core.async.t31853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31855,meta31854__$1){var self__ = this;
var _31855__$1 = this;return (new cljs.core.async.t31853(self__.f,self__.fn_handler,meta31854__$1));
});
cljs.core.async.__GT_t31853 = (function __GT_t31853(f__$1,fn_handler__$1,meta31854){return (new cljs.core.async.t31853(f__$1,fn_handler__$1,meta31854));
});
}
return (new cljs.core.async.t31853(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__31857 = buff;if(G__31857)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__31857.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__31857.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31857);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31857);
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
{var val_31858 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_31858);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_31858);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__14646__auto___31859 = n;var x_31860 = 0;while(true){
if((x_31860 < n__14646__auto___31859))
{(a[x_31860] = 0);
{
var G__31861 = (x_31860 + 1);
x_31860 = G__31861;
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
var G__31862 = (i + 1);
i = G__31862;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t31866 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31866 = (function (flag,alt_flag,meta31867){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31867 = meta31867;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31866.cljs$lang$type = true;
cljs.core.async.t31866.cljs$lang$ctorStr = "cljs.core.async/t31866";
cljs.core.async.t31866.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t31866");
});
cljs.core.async.t31866.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31866.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t31866.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t31866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31868){var self__ = this;
var _31868__$1 = this;return self__.meta31867;
});
cljs.core.async.t31866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31868,meta31867__$1){var self__ = this;
var _31868__$1 = this;return (new cljs.core.async.t31866(self__.flag,self__.alt_flag,meta31867__$1));
});
cljs.core.async.__GT_t31866 = (function __GT_t31866(flag__$1,alt_flag__$1,meta31867){return (new cljs.core.async.t31866(flag__$1,alt_flag__$1,meta31867));
});
}
return (new cljs.core.async.t31866(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t31872 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31872 = (function (cb,flag,alt_handler,meta31873){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31873 = meta31873;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31872.cljs$lang$type = true;
cljs.core.async.t31872.cljs$lang$ctorStr = "cljs.core.async/t31872";
cljs.core.async.t31872.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t31872");
});
cljs.core.async.t31872.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31872.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t31872.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t31872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31874){var self__ = this;
var _31874__$1 = this;return self__.meta31873;
});
cljs.core.async.t31872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31874,meta31873__$1){var self__ = this;
var _31874__$1 = this;return (new cljs.core.async.t31872(self__.cb,self__.flag,self__.alt_handler,meta31873__$1));
});
cljs.core.async.__GT_t31872 = (function __GT_t31872(cb__$1,flag__$1,alt_handler__$1,meta31873){return (new cljs.core.async.t31872(cb__$1,flag__$1,alt_handler__$1,meta31873));
});
}
return (new cljs.core.async.t31872(cb,flag,alt_handler,null));
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
return (function (p1__31875_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31875_SHARP_,port], null));
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
var G__31876 = (i + 1);
i = G__31876;
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
var alts_BANG___delegate = function (ports,p__31877){var map__31879 = p__31877;var map__31879__$1 = ((cljs.core.seq_QMARK_.call(null,map__31879))?cljs.core.apply.call(null,cljs.core.hash_map,map__31879):map__31879);var opts = map__31879__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__31877 = null;if (arguments.length > 1) {
  p__31877 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__31877);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31880){
var ports = cljs.core.first(arglist__31880);
var p__31877 = cljs.core.rest(arglist__31880);
return alts_BANG___delegate(ports,p__31877);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t31888 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31888 = (function (ch,f,map_LT_,meta31889){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31889 = meta31889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31888.cljs$lang$type = true;
cljs.core.async.t31888.cljs$lang$ctorStr = "cljs.core.async/t31888";
cljs.core.async.t31888.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t31888");
});
cljs.core.async.t31888.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31888.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t31888.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31888.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t31891 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31891 = (function (fn1,_,meta31889,ch,f,map_LT_,meta31892){
this.fn1 = fn1;
this._ = _;
this.meta31889 = meta31889;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31892 = meta31892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31891.cljs$lang$type = true;
cljs.core.async.t31891.cljs$lang$ctorStr = "cljs.core.async/t31891";
cljs.core.async.t31891.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t31891");
});
cljs.core.async.t31891.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31891.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t31891.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t31891.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__31881_SHARP_){return f1.call(null,(((p1__31881_SHARP_ == null))?null:self__.f.call(null,p1__31881_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t31891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31893){var self__ = this;
var _31893__$1 = this;return self__.meta31892;
});
cljs.core.async.t31891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31893,meta31892__$1){var self__ = this;
var _31893__$1 = this;return (new cljs.core.async.t31891(self__.fn1,self__._,self__.meta31889,self__.ch,self__.f,self__.map_LT_,meta31892__$1));
});
cljs.core.async.__GT_t31891 = (function __GT_t31891(fn1__$1,___$2,meta31889__$1,ch__$2,f__$2,map_LT___$2,meta31892){return (new cljs.core.async.t31891(fn1__$1,___$2,meta31889__$1,ch__$2,f__$2,map_LT___$2,meta31892));
});
}
return (new cljs.core.async.t31891(fn1,___$1,self__.meta31889,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t31888.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31888.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31890){var self__ = this;
var _31890__$1 = this;return self__.meta31889;
});
cljs.core.async.t31888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31890,meta31889__$1){var self__ = this;
var _31890__$1 = this;return (new cljs.core.async.t31888(self__.ch,self__.f,self__.map_LT_,meta31889__$1));
});
cljs.core.async.__GT_t31888 = (function __GT_t31888(ch__$1,f__$1,map_LT___$1,meta31889){return (new cljs.core.async.t31888(ch__$1,f__$1,map_LT___$1,meta31889));
});
}
return (new cljs.core.async.t31888(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t31897 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31897 = (function (ch,f,map_GT_,meta31898){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31898 = meta31898;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31897.cljs$lang$type = true;
cljs.core.async.t31897.cljs$lang$ctorStr = "cljs.core.async/t31897";
cljs.core.async.t31897.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t31897");
});
cljs.core.async.t31897.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31897.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t31897.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31897.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t31897.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31897.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31899){var self__ = this;
var _31899__$1 = this;return self__.meta31898;
});
cljs.core.async.t31897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31899,meta31898__$1){var self__ = this;
var _31899__$1 = this;return (new cljs.core.async.t31897(self__.ch,self__.f,self__.map_GT_,meta31898__$1));
});
cljs.core.async.__GT_t31897 = (function __GT_t31897(ch__$1,f__$1,map_GT___$1,meta31898){return (new cljs.core.async.t31897(ch__$1,f__$1,map_GT___$1,meta31898));
});
}
return (new cljs.core.async.t31897(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t31903 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31903 = (function (ch,p,filter_GT_,meta31904){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31904 = meta31904;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31903.cljs$lang$type = true;
cljs.core.async.t31903.cljs$lang$ctorStr = "cljs.core.async/t31903";
cljs.core.async.t31903.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t31903");
});
cljs.core.async.t31903.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31903.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t31903.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31903.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t31903.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31903.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31905){var self__ = this;
var _31905__$1 = this;return self__.meta31904;
});
cljs.core.async.t31903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31905,meta31904__$1){var self__ = this;
var _31905__$1 = this;return (new cljs.core.async.t31903(self__.ch,self__.p,self__.filter_GT_,meta31904__$1));
});
cljs.core.async.__GT_t31903 = (function __GT_t31903(ch__$1,p__$1,filter_GT___$1,meta31904){return (new cljs.core.async.t31903(ch__$1,p__$1,filter_GT___$1,meta31904));
});
}
return (new cljs.core.async.t31903(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___31988 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_31967){var state_val_31968 = (state_31967[1]);if((state_val_31968 === 1))
{var state_31967__$1 = state_31967;var statearr_31969_31989 = state_31967__$1;(statearr_31969_31989[2] = null);
(statearr_31969_31989[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31968 === 2))
{var state_31967__$1 = state_31967;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31967__$1,4,ch);
} else
{if((state_val_31968 === 3))
{var inst_31965 = (state_31967[2]);var state_31967__$1 = state_31967;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31967__$1,inst_31965);
} else
{if((state_val_31968 === 4))
{var inst_31949 = (state_31967[7]);var inst_31949__$1 = (state_31967[2]);var inst_31950 = (inst_31949__$1 == null);var state_31967__$1 = (function (){var statearr_31970 = state_31967;(statearr_31970[7] = inst_31949__$1);
return statearr_31970;
})();if(cljs.core.truth_(inst_31950))
{var statearr_31971_31990 = state_31967__$1;(statearr_31971_31990[1] = 5);
} else
{var statearr_31972_31991 = state_31967__$1;(statearr_31972_31991[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31968 === 5))
{var inst_31952 = cljs.core.async.close_BANG_.call(null,out);var state_31967__$1 = state_31967;var statearr_31973_31992 = state_31967__$1;(statearr_31973_31992[2] = inst_31952);
(statearr_31973_31992[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31968 === 6))
{var inst_31949 = (state_31967[7]);var inst_31954 = p.call(null,inst_31949);var state_31967__$1 = state_31967;if(cljs.core.truth_(inst_31954))
{var statearr_31974_31993 = state_31967__$1;(statearr_31974_31993[1] = 8);
} else
{var statearr_31975_31994 = state_31967__$1;(statearr_31975_31994[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31968 === 7))
{var inst_31963 = (state_31967[2]);var state_31967__$1 = state_31967;var statearr_31976_31995 = state_31967__$1;(statearr_31976_31995[2] = inst_31963);
(statearr_31976_31995[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31968 === 8))
{var inst_31949 = (state_31967[7]);var state_31967__$1 = state_31967;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31967__$1,11,out,inst_31949);
} else
{if((state_val_31968 === 9))
{var state_31967__$1 = state_31967;var statearr_31977_31996 = state_31967__$1;(statearr_31977_31996[2] = null);
(statearr_31977_31996[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31968 === 10))
{var inst_31960 = (state_31967[2]);var state_31967__$1 = (function (){var statearr_31978 = state_31967;(statearr_31978[8] = inst_31960);
return statearr_31978;
})();var statearr_31979_31997 = state_31967__$1;(statearr_31979_31997[2] = null);
(statearr_31979_31997[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31968 === 11))
{var inst_31957 = (state_31967[2]);var state_31967__$1 = state_31967;var statearr_31980_31998 = state_31967__$1;(statearr_31980_31998[2] = inst_31957);
(statearr_31980_31998[1] = 10);
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
var state_machine__17982__auto____0 = (function (){var statearr_31984 = (new Array(9));(statearr_31984[0] = state_machine__17982__auto__);
(statearr_31984[1] = 1);
return statearr_31984;
});
var state_machine__17982__auto____1 = (function (state_31967){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_31967);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e31985){if((e31985 instanceof Object))
{var ex__17985__auto__ = e31985;var statearr_31986_31999 = state_31967;(statearr_31986_31999[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31967);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31985;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32000 = state_31967;
state_31967 = G__32000;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_31967){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_31967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_31987 = f__18052__auto__.call(null);(statearr_31987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___31988);
return statearr_31987;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_32152){var state_val_32153 = (state_32152[1]);if((state_val_32153 === 1))
{var state_32152__$1 = state_32152;var statearr_32154_32191 = state_32152__$1;(statearr_32154_32191[2] = null);
(statearr_32154_32191[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32153 === 2))
{var state_32152__$1 = state_32152;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32152__$1,4,in$);
} else
{if((state_val_32153 === 3))
{var inst_32150 = (state_32152[2]);var state_32152__$1 = state_32152;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32152__$1,inst_32150);
} else
{if((state_val_32153 === 4))
{var inst_32098 = (state_32152[7]);var inst_32098__$1 = (state_32152[2]);var inst_32099 = (inst_32098__$1 == null);var state_32152__$1 = (function (){var statearr_32155 = state_32152;(statearr_32155[7] = inst_32098__$1);
return statearr_32155;
})();if(cljs.core.truth_(inst_32099))
{var statearr_32156_32192 = state_32152__$1;(statearr_32156_32192[1] = 5);
} else
{var statearr_32157_32193 = state_32152__$1;(statearr_32157_32193[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32153 === 5))
{var inst_32101 = cljs.core.async.close_BANG_.call(null,out);var state_32152__$1 = state_32152;var statearr_32158_32194 = state_32152__$1;(statearr_32158_32194[2] = inst_32101);
(statearr_32158_32194[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32153 === 6))
{var inst_32098 = (state_32152[7]);var inst_32103 = f.call(null,inst_32098);var inst_32108 = cljs.core.seq.call(null,inst_32103);var inst_32109 = inst_32108;var inst_32110 = null;var inst_32111 = 0;var inst_32112 = 0;var state_32152__$1 = (function (){var statearr_32159 = state_32152;(statearr_32159[8] = inst_32112);
(statearr_32159[9] = inst_32111);
(statearr_32159[10] = inst_32110);
(statearr_32159[11] = inst_32109);
return statearr_32159;
})();var statearr_32160_32195 = state_32152__$1;(statearr_32160_32195[2] = null);
(statearr_32160_32195[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32153 === 7))
{var inst_32148 = (state_32152[2]);var state_32152__$1 = state_32152;var statearr_32161_32196 = state_32152__$1;(statearr_32161_32196[2] = inst_32148);
(statearr_32161_32196[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32153 === 8))
{var inst_32112 = (state_32152[8]);var inst_32111 = (state_32152[9]);var inst_32114 = (inst_32112 < inst_32111);var inst_32115 = inst_32114;var state_32152__$1 = state_32152;if(cljs.core.truth_(inst_32115))
{var statearr_32162_32197 = state_32152__$1;(statearr_32162_32197[1] = 10);
} else
{var statearr_32163_32198 = state_32152__$1;(statearr_32163_32198[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32153 === 9))
{var inst_32145 = (state_32152[2]);var state_32152__$1 = (function (){var statearr_32164 = state_32152;(statearr_32164[12] = inst_32145);
return statearr_32164;
})();var statearr_32165_32199 = state_32152__$1;(statearr_32165_32199[2] = null);
(statearr_32165_32199[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32153 === 10))
{var inst_32112 = (state_32152[8]);var inst_32110 = (state_32152[10]);var inst_32117 = cljs.core._nth.call(null,inst_32110,inst_32112);var state_32152__$1 = state_32152;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32152__$1,13,out,inst_32117);
} else
{if((state_val_32153 === 11))
{var inst_32109 = (state_32152[11]);var inst_32123 = (state_32152[13]);var inst_32123__$1 = cljs.core.seq.call(null,inst_32109);var state_32152__$1 = (function (){var statearr_32169 = state_32152;(statearr_32169[13] = inst_32123__$1);
return statearr_32169;
})();if(inst_32123__$1)
{var statearr_32170_32200 = state_32152__$1;(statearr_32170_32200[1] = 14);
} else
{var statearr_32171_32201 = state_32152__$1;(statearr_32171_32201[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32153 === 12))
{var inst_32143 = (state_32152[2]);var state_32152__$1 = state_32152;var statearr_32172_32202 = state_32152__$1;(statearr_32172_32202[2] = inst_32143);
(statearr_32172_32202[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32153 === 13))
{var inst_32112 = (state_32152[8]);var inst_32111 = (state_32152[9]);var inst_32110 = (state_32152[10]);var inst_32109 = (state_32152[11]);var inst_32119 = (state_32152[2]);var inst_32120 = (inst_32112 + 1);var tmp32166 = inst_32111;var tmp32167 = inst_32110;var tmp32168 = inst_32109;var inst_32109__$1 = tmp32168;var inst_32110__$1 = tmp32167;var inst_32111__$1 = tmp32166;var inst_32112__$1 = inst_32120;var state_32152__$1 = (function (){var statearr_32173 = state_32152;(statearr_32173[14] = inst_32119);
(statearr_32173[8] = inst_32112__$1);
(statearr_32173[9] = inst_32111__$1);
(statearr_32173[10] = inst_32110__$1);
(statearr_32173[11] = inst_32109__$1);
return statearr_32173;
})();var statearr_32174_32203 = state_32152__$1;(statearr_32174_32203[2] = null);
(statearr_32174_32203[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32153 === 14))
{var inst_32123 = (state_32152[13]);var inst_32125 = cljs.core.chunked_seq_QMARK_.call(null,inst_32123);var state_32152__$1 = state_32152;if(inst_32125)
{var statearr_32175_32204 = state_32152__$1;(statearr_32175_32204[1] = 17);
} else
{var statearr_32176_32205 = state_32152__$1;(statearr_32176_32205[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32153 === 15))
{var state_32152__$1 = state_32152;var statearr_32177_32206 = state_32152__$1;(statearr_32177_32206[2] = null);
(statearr_32177_32206[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32153 === 16))
{var inst_32141 = (state_32152[2]);var state_32152__$1 = state_32152;var statearr_32178_32207 = state_32152__$1;(statearr_32178_32207[2] = inst_32141);
(statearr_32178_32207[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32153 === 17))
{var inst_32123 = (state_32152[13]);var inst_32127 = cljs.core.chunk_first.call(null,inst_32123);var inst_32128 = cljs.core.chunk_rest.call(null,inst_32123);var inst_32129 = cljs.core.count.call(null,inst_32127);var inst_32109 = inst_32128;var inst_32110 = inst_32127;var inst_32111 = inst_32129;var inst_32112 = 0;var state_32152__$1 = (function (){var statearr_32179 = state_32152;(statearr_32179[8] = inst_32112);
(statearr_32179[9] = inst_32111);
(statearr_32179[10] = inst_32110);
(statearr_32179[11] = inst_32109);
return statearr_32179;
})();var statearr_32180_32208 = state_32152__$1;(statearr_32180_32208[2] = null);
(statearr_32180_32208[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32153 === 18))
{var inst_32123 = (state_32152[13]);var inst_32132 = cljs.core.first.call(null,inst_32123);var state_32152__$1 = state_32152;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32152__$1,20,out,inst_32132);
} else
{if((state_val_32153 === 19))
{var inst_32138 = (state_32152[2]);var state_32152__$1 = state_32152;var statearr_32181_32209 = state_32152__$1;(statearr_32181_32209[2] = inst_32138);
(statearr_32181_32209[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32153 === 20))
{var inst_32123 = (state_32152[13]);var inst_32134 = (state_32152[2]);var inst_32135 = cljs.core.next.call(null,inst_32123);var inst_32109 = inst_32135;var inst_32110 = null;var inst_32111 = 0;var inst_32112 = 0;var state_32152__$1 = (function (){var statearr_32182 = state_32152;(statearr_32182[8] = inst_32112);
(statearr_32182[9] = inst_32111);
(statearr_32182[10] = inst_32110);
(statearr_32182[15] = inst_32134);
(statearr_32182[11] = inst_32109);
return statearr_32182;
})();var statearr_32183_32210 = state_32152__$1;(statearr_32183_32210[2] = null);
(statearr_32183_32210[1] = 8);
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
var state_machine__17982__auto____0 = (function (){var statearr_32187 = (new Array(16));(statearr_32187[0] = state_machine__17982__auto__);
(statearr_32187[1] = 1);
return statearr_32187;
});
var state_machine__17982__auto____1 = (function (state_32152){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_32152);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e32188){if((e32188 instanceof Object))
{var ex__17985__auto__ = e32188;var statearr_32189_32211 = state_32152;(statearr_32189_32211[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32152);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32188;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32212 = state_32152;
state_32152 = G__32212;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_32152){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_32152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_32190 = f__18052__auto__.call(null);(statearr_32190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_32190;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__18051__auto___32293 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_32272){var state_val_32273 = (state_32272[1]);if((state_val_32273 === 1))
{var state_32272__$1 = state_32272;var statearr_32274_32294 = state_32272__$1;(statearr_32274_32294[2] = null);
(statearr_32274_32294[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32273 === 2))
{var state_32272__$1 = state_32272;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32272__$1,4,from);
} else
{if((state_val_32273 === 3))
{var inst_32270 = (state_32272[2]);var state_32272__$1 = state_32272;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32272__$1,inst_32270);
} else
{if((state_val_32273 === 4))
{var inst_32255 = (state_32272[7]);var inst_32255__$1 = (state_32272[2]);var inst_32256 = (inst_32255__$1 == null);var state_32272__$1 = (function (){var statearr_32275 = state_32272;(statearr_32275[7] = inst_32255__$1);
return statearr_32275;
})();if(cljs.core.truth_(inst_32256))
{var statearr_32276_32295 = state_32272__$1;(statearr_32276_32295[1] = 5);
} else
{var statearr_32277_32296 = state_32272__$1;(statearr_32277_32296[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32273 === 5))
{var state_32272__$1 = state_32272;if(cljs.core.truth_(close_QMARK_))
{var statearr_32278_32297 = state_32272__$1;(statearr_32278_32297[1] = 8);
} else
{var statearr_32279_32298 = state_32272__$1;(statearr_32279_32298[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32273 === 6))
{var inst_32255 = (state_32272[7]);var state_32272__$1 = state_32272;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32272__$1,11,to,inst_32255);
} else
{if((state_val_32273 === 7))
{var inst_32268 = (state_32272[2]);var state_32272__$1 = state_32272;var statearr_32280_32299 = state_32272__$1;(statearr_32280_32299[2] = inst_32268);
(statearr_32280_32299[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32273 === 8))
{var inst_32259 = cljs.core.async.close_BANG_.call(null,to);var state_32272__$1 = state_32272;var statearr_32281_32300 = state_32272__$1;(statearr_32281_32300[2] = inst_32259);
(statearr_32281_32300[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32273 === 9))
{var state_32272__$1 = state_32272;var statearr_32282_32301 = state_32272__$1;(statearr_32282_32301[2] = null);
(statearr_32282_32301[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32273 === 10))
{var inst_32262 = (state_32272[2]);var state_32272__$1 = state_32272;var statearr_32283_32302 = state_32272__$1;(statearr_32283_32302[2] = inst_32262);
(statearr_32283_32302[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32273 === 11))
{var inst_32265 = (state_32272[2]);var state_32272__$1 = (function (){var statearr_32284 = state_32272;(statearr_32284[8] = inst_32265);
return statearr_32284;
})();var statearr_32285_32303 = state_32272__$1;(statearr_32285_32303[2] = null);
(statearr_32285_32303[1] = 2);
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
var state_machine__17982__auto____0 = (function (){var statearr_32289 = (new Array(9));(statearr_32289[0] = state_machine__17982__auto__);
(statearr_32289[1] = 1);
return statearr_32289;
});
var state_machine__17982__auto____1 = (function (state_32272){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_32272);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e32290){if((e32290 instanceof Object))
{var ex__17985__auto__ = e32290;var statearr_32291_32304 = state_32272;(statearr_32291_32304[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32272);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32290;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32305 = state_32272;
state_32272 = G__32305;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_32272){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_32272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_32292 = f__18052__auto__.call(null);(statearr_32292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___32293);
return statearr_32292;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__18051__auto___32392 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_32370){var state_val_32371 = (state_32370[1]);if((state_val_32371 === 1))
{var state_32370__$1 = state_32370;var statearr_32372_32393 = state_32370__$1;(statearr_32372_32393[2] = null);
(statearr_32372_32393[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32371 === 2))
{var state_32370__$1 = state_32370;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32370__$1,4,ch);
} else
{if((state_val_32371 === 3))
{var inst_32368 = (state_32370[2]);var state_32370__$1 = state_32370;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32370__$1,inst_32368);
} else
{if((state_val_32371 === 4))
{var inst_32351 = (state_32370[7]);var inst_32351__$1 = (state_32370[2]);var inst_32352 = (inst_32351__$1 == null);var state_32370__$1 = (function (){var statearr_32373 = state_32370;(statearr_32373[7] = inst_32351__$1);
return statearr_32373;
})();if(cljs.core.truth_(inst_32352))
{var statearr_32374_32394 = state_32370__$1;(statearr_32374_32394[1] = 5);
} else
{var statearr_32375_32395 = state_32370__$1;(statearr_32375_32395[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32371 === 5))
{var inst_32354 = cljs.core.async.close_BANG_.call(null,tc);var inst_32355 = cljs.core.async.close_BANG_.call(null,fc);var state_32370__$1 = (function (){var statearr_32376 = state_32370;(statearr_32376[8] = inst_32354);
return statearr_32376;
})();var statearr_32377_32396 = state_32370__$1;(statearr_32377_32396[2] = inst_32355);
(statearr_32377_32396[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32371 === 6))
{var inst_32351 = (state_32370[7]);var inst_32357 = p.call(null,inst_32351);var state_32370__$1 = state_32370;if(cljs.core.truth_(inst_32357))
{var statearr_32378_32397 = state_32370__$1;(statearr_32378_32397[1] = 9);
} else
{var statearr_32379_32398 = state_32370__$1;(statearr_32379_32398[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32371 === 7))
{var inst_32366 = (state_32370[2]);var state_32370__$1 = state_32370;var statearr_32380_32399 = state_32370__$1;(statearr_32380_32399[2] = inst_32366);
(statearr_32380_32399[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32371 === 8))
{var inst_32363 = (state_32370[2]);var state_32370__$1 = (function (){var statearr_32381 = state_32370;(statearr_32381[9] = inst_32363);
return statearr_32381;
})();var statearr_32382_32400 = state_32370__$1;(statearr_32382_32400[2] = null);
(statearr_32382_32400[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32371 === 9))
{var state_32370__$1 = state_32370;var statearr_32383_32401 = state_32370__$1;(statearr_32383_32401[2] = tc);
(statearr_32383_32401[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32371 === 10))
{var state_32370__$1 = state_32370;var statearr_32384_32402 = state_32370__$1;(statearr_32384_32402[2] = fc);
(statearr_32384_32402[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32371 === 11))
{var inst_32351 = (state_32370[7]);var inst_32361 = (state_32370[2]);var state_32370__$1 = state_32370;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32370__$1,8,inst_32361,inst_32351);
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
var state_machine__17982__auto____0 = (function (){var statearr_32388 = (new Array(10));(statearr_32388[0] = state_machine__17982__auto__);
(statearr_32388[1] = 1);
return statearr_32388;
});
var state_machine__17982__auto____1 = (function (state_32370){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_32370);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e32389){if((e32389 instanceof Object))
{var ex__17985__auto__ = e32389;var statearr_32390_32403 = state_32370;(statearr_32390_32403[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32370);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32389;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32404 = state_32370;
state_32370 = G__32404;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_32370){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_32370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_32391 = f__18052__auto__.call(null);(statearr_32391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___32392);
return statearr_32391;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_32451){var state_val_32452 = (state_32451[1]);if((state_val_32452 === 7))
{var inst_32447 = (state_32451[2]);var state_32451__$1 = state_32451;var statearr_32453_32469 = state_32451__$1;(statearr_32453_32469[2] = inst_32447);
(statearr_32453_32469[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32452 === 6))
{var inst_32437 = (state_32451[7]);var inst_32440 = (state_32451[8]);var inst_32444 = f.call(null,inst_32437,inst_32440);var inst_32437__$1 = inst_32444;var state_32451__$1 = (function (){var statearr_32454 = state_32451;(statearr_32454[7] = inst_32437__$1);
return statearr_32454;
})();var statearr_32455_32470 = state_32451__$1;(statearr_32455_32470[2] = null);
(statearr_32455_32470[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32452 === 5))
{var inst_32437 = (state_32451[7]);var state_32451__$1 = state_32451;var statearr_32456_32471 = state_32451__$1;(statearr_32456_32471[2] = inst_32437);
(statearr_32456_32471[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32452 === 4))
{var inst_32440 = (state_32451[8]);var inst_32440__$1 = (state_32451[2]);var inst_32441 = (inst_32440__$1 == null);var state_32451__$1 = (function (){var statearr_32457 = state_32451;(statearr_32457[8] = inst_32440__$1);
return statearr_32457;
})();if(cljs.core.truth_(inst_32441))
{var statearr_32458_32472 = state_32451__$1;(statearr_32458_32472[1] = 5);
} else
{var statearr_32459_32473 = state_32451__$1;(statearr_32459_32473[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32452 === 3))
{var inst_32449 = (state_32451[2]);var state_32451__$1 = state_32451;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32451__$1,inst_32449);
} else
{if((state_val_32452 === 2))
{var state_32451__$1 = state_32451;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32451__$1,4,ch);
} else
{if((state_val_32452 === 1))
{var inst_32437 = init;var state_32451__$1 = (function (){var statearr_32460 = state_32451;(statearr_32460[7] = inst_32437);
return statearr_32460;
})();var statearr_32461_32474 = state_32451__$1;(statearr_32461_32474[2] = null);
(statearr_32461_32474[1] = 2);
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
var state_machine__17982__auto____0 = (function (){var statearr_32465 = (new Array(9));(statearr_32465[0] = state_machine__17982__auto__);
(statearr_32465[1] = 1);
return statearr_32465;
});
var state_machine__17982__auto____1 = (function (state_32451){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_32451);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e32466){if((e32466 instanceof Object))
{var ex__17985__auto__ = e32466;var statearr_32467_32475 = state_32451;(statearr_32467_32475[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32451);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32466;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32476 = state_32451;
state_32451 = G__32476;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_32451){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_32451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_32468 = f__18052__auto__.call(null);(statearr_32468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_32468;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_32538){var state_val_32539 = (state_32538[1]);if((state_val_32539 === 1))
{var inst_32518 = cljs.core.seq.call(null,coll);var inst_32519 = inst_32518;var state_32538__$1 = (function (){var statearr_32540 = state_32538;(statearr_32540[7] = inst_32519);
return statearr_32540;
})();var statearr_32541_32559 = state_32538__$1;(statearr_32541_32559[2] = null);
(statearr_32541_32559[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32539 === 2))
{var inst_32519 = (state_32538[7]);var state_32538__$1 = state_32538;if(cljs.core.truth_(inst_32519))
{var statearr_32542_32560 = state_32538__$1;(statearr_32542_32560[1] = 4);
} else
{var statearr_32543_32561 = state_32538__$1;(statearr_32543_32561[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32539 === 3))
{var inst_32536 = (state_32538[2]);var state_32538__$1 = state_32538;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32538__$1,inst_32536);
} else
{if((state_val_32539 === 4))
{var inst_32519 = (state_32538[7]);var inst_32522 = cljs.core.first.call(null,inst_32519);var state_32538__$1 = state_32538;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32538__$1,7,ch,inst_32522);
} else
{if((state_val_32539 === 5))
{var state_32538__$1 = state_32538;if(cljs.core.truth_(close_QMARK_))
{var statearr_32544_32562 = state_32538__$1;(statearr_32544_32562[1] = 8);
} else
{var statearr_32545_32563 = state_32538__$1;(statearr_32545_32563[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32539 === 6))
{var inst_32534 = (state_32538[2]);var state_32538__$1 = state_32538;var statearr_32546_32564 = state_32538__$1;(statearr_32546_32564[2] = inst_32534);
(statearr_32546_32564[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32539 === 7))
{var inst_32519 = (state_32538[7]);var inst_32524 = (state_32538[2]);var inst_32525 = cljs.core.next.call(null,inst_32519);var inst_32519__$1 = inst_32525;var state_32538__$1 = (function (){var statearr_32547 = state_32538;(statearr_32547[7] = inst_32519__$1);
(statearr_32547[8] = inst_32524);
return statearr_32547;
})();var statearr_32548_32565 = state_32538__$1;(statearr_32548_32565[2] = null);
(statearr_32548_32565[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32539 === 8))
{var inst_32529 = cljs.core.async.close_BANG_.call(null,ch);var state_32538__$1 = state_32538;var statearr_32549_32566 = state_32538__$1;(statearr_32549_32566[2] = inst_32529);
(statearr_32549_32566[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32539 === 9))
{var state_32538__$1 = state_32538;var statearr_32550_32567 = state_32538__$1;(statearr_32550_32567[2] = null);
(statearr_32550_32567[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32539 === 10))
{var inst_32532 = (state_32538[2]);var state_32538__$1 = state_32538;var statearr_32551_32568 = state_32538__$1;(statearr_32551_32568[2] = inst_32532);
(statearr_32551_32568[1] = 6);
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
var state_machine__17982__auto____0 = (function (){var statearr_32555 = (new Array(9));(statearr_32555[0] = state_machine__17982__auto__);
(statearr_32555[1] = 1);
return statearr_32555;
});
var state_machine__17982__auto____1 = (function (state_32538){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_32538);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e32556){if((e32556 instanceof Object))
{var ex__17985__auto__ = e32556;var statearr_32557_32569 = state_32538;(statearr_32557_32569[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32538);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32556;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32570 = state_32538;
state_32538 = G__32570;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_32538){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_32538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_32558 = f__18052__auto__.call(null);(statearr_32558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_32558;
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
cljs.core.async.Mux = (function (){var obj32572 = {};return obj32572;
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
cljs.core.async.Mult = (function (){var obj32574 = {};return obj32574;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t32798 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32798 = (function (cs,ch,mult,meta32799){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32799 = meta32799;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32798.cljs$lang$type = true;
cljs.core.async.t32798.cljs$lang$ctorStr = "cljs.core.async/t32798";
cljs.core.async.t32798.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t32798");
});})(cs))
;
cljs.core.async.t32798.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t32798.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t32798.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t32798.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t32798.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32798.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t32798.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32800){var self__ = this;
var _32800__$1 = this;return self__.meta32799;
});})(cs))
;
cljs.core.async.t32798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32800,meta32799__$1){var self__ = this;
var _32800__$1 = this;return (new cljs.core.async.t32798(self__.cs,self__.ch,self__.mult,meta32799__$1));
});})(cs))
;
cljs.core.async.__GT_t32798 = ((function (cs){
return (function __GT_t32798(cs__$1,ch__$1,mult__$1,meta32799){return (new cljs.core.async.t32798(cs__$1,ch__$1,mult__$1,meta32799));
});})(cs))
;
}
return (new cljs.core.async.t32798(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__18051__auto___33021 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_32935){var state_val_32936 = (state_32935[1]);if((state_val_32936 === 32))
{var inst_32879 = (state_32935[7]);var inst_32803 = (state_32935[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32935,31,Object,null,30);var inst_32886 = cljs.core.async.put_BANG_.call(null,inst_32879,inst_32803,done);var state_32935__$1 = state_32935;var statearr_32937_33022 = state_32935__$1;(statearr_32937_33022[2] = inst_32886);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32935__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 1))
{var state_32935__$1 = state_32935;var statearr_32938_33023 = state_32935__$1;(statearr_32938_33023[2] = null);
(statearr_32938_33023[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 33))
{var inst_32892 = (state_32935[9]);var inst_32894 = cljs.core.chunked_seq_QMARK_.call(null,inst_32892);var state_32935__$1 = state_32935;if(inst_32894)
{var statearr_32939_33024 = state_32935__$1;(statearr_32939_33024[1] = 36);
} else
{var statearr_32940_33025 = state_32935__$1;(statearr_32940_33025[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 2))
{var state_32935__$1 = state_32935;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32935__$1,4,ch);
} else
{if((state_val_32936 === 34))
{var state_32935__$1 = state_32935;var statearr_32941_33026 = state_32935__$1;(statearr_32941_33026[2] = null);
(statearr_32941_33026[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 3))
{var inst_32933 = (state_32935[2]);var state_32935__$1 = state_32935;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32935__$1,inst_32933);
} else
{if((state_val_32936 === 35))
{var inst_32917 = (state_32935[2]);var state_32935__$1 = state_32935;var statearr_32942_33027 = state_32935__$1;(statearr_32942_33027[2] = inst_32917);
(statearr_32942_33027[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 4))
{var inst_32803 = (state_32935[8]);var inst_32803__$1 = (state_32935[2]);var inst_32804 = (inst_32803__$1 == null);var state_32935__$1 = (function (){var statearr_32943 = state_32935;(statearr_32943[8] = inst_32803__$1);
return statearr_32943;
})();if(cljs.core.truth_(inst_32804))
{var statearr_32944_33028 = state_32935__$1;(statearr_32944_33028[1] = 5);
} else
{var statearr_32945_33029 = state_32935__$1;(statearr_32945_33029[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 36))
{var inst_32892 = (state_32935[9]);var inst_32896 = cljs.core.chunk_first.call(null,inst_32892);var inst_32897 = cljs.core.chunk_rest.call(null,inst_32892);var inst_32898 = cljs.core.count.call(null,inst_32896);var inst_32871 = inst_32897;var inst_32872 = inst_32896;var inst_32873 = inst_32898;var inst_32874 = 0;var state_32935__$1 = (function (){var statearr_32946 = state_32935;(statearr_32946[10] = inst_32872);
(statearr_32946[11] = inst_32871);
(statearr_32946[12] = inst_32873);
(statearr_32946[13] = inst_32874);
return statearr_32946;
})();var statearr_32947_33030 = state_32935__$1;(statearr_32947_33030[2] = null);
(statearr_32947_33030[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 5))
{var inst_32810 = cljs.core.deref.call(null,cs);var inst_32811 = cljs.core.seq.call(null,inst_32810);var inst_32812 = inst_32811;var inst_32813 = null;var inst_32814 = 0;var inst_32815 = 0;var state_32935__$1 = (function (){var statearr_32948 = state_32935;(statearr_32948[14] = inst_32812);
(statearr_32948[15] = inst_32814);
(statearr_32948[16] = inst_32813);
(statearr_32948[17] = inst_32815);
return statearr_32948;
})();var statearr_32949_33031 = state_32935__$1;(statearr_32949_33031[2] = null);
(statearr_32949_33031[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 37))
{var inst_32892 = (state_32935[9]);var inst_32901 = cljs.core.first.call(null,inst_32892);var state_32935__$1 = (function (){var statearr_32950 = state_32935;(statearr_32950[18] = inst_32901);
return statearr_32950;
})();var statearr_32951_33032 = state_32935__$1;(statearr_32951_33032[2] = null);
(statearr_32951_33032[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 6))
{var inst_32863 = (state_32935[19]);var inst_32862 = cljs.core.deref.call(null,cs);var inst_32863__$1 = cljs.core.keys.call(null,inst_32862);var inst_32864 = cljs.core.count.call(null,inst_32863__$1);var inst_32865 = cljs.core.reset_BANG_.call(null,dctr,inst_32864);var inst_32870 = cljs.core.seq.call(null,inst_32863__$1);var inst_32871 = inst_32870;var inst_32872 = null;var inst_32873 = 0;var inst_32874 = 0;var state_32935__$1 = (function (){var statearr_32952 = state_32935;(statearr_32952[10] = inst_32872);
(statearr_32952[11] = inst_32871);
(statearr_32952[19] = inst_32863__$1);
(statearr_32952[20] = inst_32865);
(statearr_32952[12] = inst_32873);
(statearr_32952[13] = inst_32874);
return statearr_32952;
})();var statearr_32953_33033 = state_32935__$1;(statearr_32953_33033[2] = null);
(statearr_32953_33033[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 38))
{var inst_32914 = (state_32935[2]);var state_32935__$1 = state_32935;var statearr_32954_33034 = state_32935__$1;(statearr_32954_33034[2] = inst_32914);
(statearr_32954_33034[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 7))
{var inst_32931 = (state_32935[2]);var state_32935__$1 = state_32935;var statearr_32955_33035 = state_32935__$1;(statearr_32955_33035[2] = inst_32931);
(statearr_32955_33035[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 39))
{var inst_32892 = (state_32935[9]);var inst_32910 = (state_32935[2]);var inst_32911 = cljs.core.next.call(null,inst_32892);var inst_32871 = inst_32911;var inst_32872 = null;var inst_32873 = 0;var inst_32874 = 0;var state_32935__$1 = (function (){var statearr_32956 = state_32935;(statearr_32956[21] = inst_32910);
(statearr_32956[10] = inst_32872);
(statearr_32956[11] = inst_32871);
(statearr_32956[12] = inst_32873);
(statearr_32956[13] = inst_32874);
return statearr_32956;
})();var statearr_32957_33036 = state_32935__$1;(statearr_32957_33036[2] = null);
(statearr_32957_33036[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 8))
{var inst_32814 = (state_32935[15]);var inst_32815 = (state_32935[17]);var inst_32817 = (inst_32815 < inst_32814);var inst_32818 = inst_32817;var state_32935__$1 = state_32935;if(cljs.core.truth_(inst_32818))
{var statearr_32958_33037 = state_32935__$1;(statearr_32958_33037[1] = 10);
} else
{var statearr_32959_33038 = state_32935__$1;(statearr_32959_33038[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 40))
{var inst_32901 = (state_32935[18]);var inst_32902 = (state_32935[2]);var inst_32903 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_32904 = cljs.core.async.untap_STAR_.call(null,m,inst_32901);var state_32935__$1 = (function (){var statearr_32960 = state_32935;(statearr_32960[22] = inst_32902);
(statearr_32960[23] = inst_32903);
return statearr_32960;
})();var statearr_32961_33039 = state_32935__$1;(statearr_32961_33039[2] = inst_32904);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32935__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 9))
{var inst_32860 = (state_32935[2]);var state_32935__$1 = state_32935;var statearr_32962_33040 = state_32935__$1;(statearr_32962_33040[2] = inst_32860);
(statearr_32962_33040[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 41))
{var inst_32803 = (state_32935[8]);var inst_32901 = (state_32935[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32935,40,Object,null,39);var inst_32908 = cljs.core.async.put_BANG_.call(null,inst_32901,inst_32803,done);var state_32935__$1 = state_32935;var statearr_32963_33041 = state_32935__$1;(statearr_32963_33041[2] = inst_32908);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32935__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 10))
{var inst_32813 = (state_32935[16]);var inst_32815 = (state_32935[17]);var inst_32821 = cljs.core._nth.call(null,inst_32813,inst_32815);var inst_32822 = cljs.core.nth.call(null,inst_32821,0,null);var inst_32823 = cljs.core.nth.call(null,inst_32821,1,null);var state_32935__$1 = (function (){var statearr_32964 = state_32935;(statearr_32964[24] = inst_32822);
return statearr_32964;
})();if(cljs.core.truth_(inst_32823))
{var statearr_32965_33042 = state_32935__$1;(statearr_32965_33042[1] = 13);
} else
{var statearr_32966_33043 = state_32935__$1;(statearr_32966_33043[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 42))
{var state_32935__$1 = state_32935;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32935__$1,45,dchan);
} else
{if((state_val_32936 === 11))
{var inst_32812 = (state_32935[14]);var inst_32832 = (state_32935[25]);var inst_32832__$1 = cljs.core.seq.call(null,inst_32812);var state_32935__$1 = (function (){var statearr_32967 = state_32935;(statearr_32967[25] = inst_32832__$1);
return statearr_32967;
})();if(inst_32832__$1)
{var statearr_32968_33044 = state_32935__$1;(statearr_32968_33044[1] = 16);
} else
{var statearr_32969_33045 = state_32935__$1;(statearr_32969_33045[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 43))
{var state_32935__$1 = state_32935;var statearr_32970_33046 = state_32935__$1;(statearr_32970_33046[2] = null);
(statearr_32970_33046[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 12))
{var inst_32858 = (state_32935[2]);var state_32935__$1 = state_32935;var statearr_32971_33047 = state_32935__$1;(statearr_32971_33047[2] = inst_32858);
(statearr_32971_33047[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 44))
{var inst_32928 = (state_32935[2]);var state_32935__$1 = (function (){var statearr_32972 = state_32935;(statearr_32972[26] = inst_32928);
return statearr_32972;
})();var statearr_32973_33048 = state_32935__$1;(statearr_32973_33048[2] = null);
(statearr_32973_33048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 13))
{var inst_32822 = (state_32935[24]);var inst_32825 = cljs.core.async.close_BANG_.call(null,inst_32822);var state_32935__$1 = state_32935;var statearr_32974_33049 = state_32935__$1;(statearr_32974_33049[2] = inst_32825);
(statearr_32974_33049[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 45))
{var inst_32925 = (state_32935[2]);var state_32935__$1 = state_32935;var statearr_32978_33050 = state_32935__$1;(statearr_32978_33050[2] = inst_32925);
(statearr_32978_33050[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 14))
{var state_32935__$1 = state_32935;var statearr_32979_33051 = state_32935__$1;(statearr_32979_33051[2] = null);
(statearr_32979_33051[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 15))
{var inst_32812 = (state_32935[14]);var inst_32814 = (state_32935[15]);var inst_32813 = (state_32935[16]);var inst_32815 = (state_32935[17]);var inst_32828 = (state_32935[2]);var inst_32829 = (inst_32815 + 1);var tmp32975 = inst_32812;var tmp32976 = inst_32814;var tmp32977 = inst_32813;var inst_32812__$1 = tmp32975;var inst_32813__$1 = tmp32977;var inst_32814__$1 = tmp32976;var inst_32815__$1 = inst_32829;var state_32935__$1 = (function (){var statearr_32980 = state_32935;(statearr_32980[14] = inst_32812__$1);
(statearr_32980[15] = inst_32814__$1);
(statearr_32980[16] = inst_32813__$1);
(statearr_32980[17] = inst_32815__$1);
(statearr_32980[27] = inst_32828);
return statearr_32980;
})();var statearr_32981_33052 = state_32935__$1;(statearr_32981_33052[2] = null);
(statearr_32981_33052[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 16))
{var inst_32832 = (state_32935[25]);var inst_32834 = cljs.core.chunked_seq_QMARK_.call(null,inst_32832);var state_32935__$1 = state_32935;if(inst_32834)
{var statearr_32982_33053 = state_32935__$1;(statearr_32982_33053[1] = 19);
} else
{var statearr_32983_33054 = state_32935__$1;(statearr_32983_33054[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 17))
{var state_32935__$1 = state_32935;var statearr_32984_33055 = state_32935__$1;(statearr_32984_33055[2] = null);
(statearr_32984_33055[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 18))
{var inst_32856 = (state_32935[2]);var state_32935__$1 = state_32935;var statearr_32985_33056 = state_32935__$1;(statearr_32985_33056[2] = inst_32856);
(statearr_32985_33056[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 19))
{var inst_32832 = (state_32935[25]);var inst_32836 = cljs.core.chunk_first.call(null,inst_32832);var inst_32837 = cljs.core.chunk_rest.call(null,inst_32832);var inst_32838 = cljs.core.count.call(null,inst_32836);var inst_32812 = inst_32837;var inst_32813 = inst_32836;var inst_32814 = inst_32838;var inst_32815 = 0;var state_32935__$1 = (function (){var statearr_32986 = state_32935;(statearr_32986[14] = inst_32812);
(statearr_32986[15] = inst_32814);
(statearr_32986[16] = inst_32813);
(statearr_32986[17] = inst_32815);
return statearr_32986;
})();var statearr_32987_33057 = state_32935__$1;(statearr_32987_33057[2] = null);
(statearr_32987_33057[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 20))
{var inst_32832 = (state_32935[25]);var inst_32842 = cljs.core.first.call(null,inst_32832);var inst_32843 = cljs.core.nth.call(null,inst_32842,0,null);var inst_32844 = cljs.core.nth.call(null,inst_32842,1,null);var state_32935__$1 = (function (){var statearr_32988 = state_32935;(statearr_32988[28] = inst_32843);
return statearr_32988;
})();if(cljs.core.truth_(inst_32844))
{var statearr_32989_33058 = state_32935__$1;(statearr_32989_33058[1] = 22);
} else
{var statearr_32990_33059 = state_32935__$1;(statearr_32990_33059[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 21))
{var inst_32853 = (state_32935[2]);var state_32935__$1 = state_32935;var statearr_32991_33060 = state_32935__$1;(statearr_32991_33060[2] = inst_32853);
(statearr_32991_33060[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 22))
{var inst_32843 = (state_32935[28]);var inst_32846 = cljs.core.async.close_BANG_.call(null,inst_32843);var state_32935__$1 = state_32935;var statearr_32992_33061 = state_32935__$1;(statearr_32992_33061[2] = inst_32846);
(statearr_32992_33061[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 23))
{var state_32935__$1 = state_32935;var statearr_32993_33062 = state_32935__$1;(statearr_32993_33062[2] = null);
(statearr_32993_33062[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 24))
{var inst_32832 = (state_32935[25]);var inst_32849 = (state_32935[2]);var inst_32850 = cljs.core.next.call(null,inst_32832);var inst_32812 = inst_32850;var inst_32813 = null;var inst_32814 = 0;var inst_32815 = 0;var state_32935__$1 = (function (){var statearr_32994 = state_32935;(statearr_32994[29] = inst_32849);
(statearr_32994[14] = inst_32812);
(statearr_32994[15] = inst_32814);
(statearr_32994[16] = inst_32813);
(statearr_32994[17] = inst_32815);
return statearr_32994;
})();var statearr_32995_33063 = state_32935__$1;(statearr_32995_33063[2] = null);
(statearr_32995_33063[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 25))
{var inst_32873 = (state_32935[12]);var inst_32874 = (state_32935[13]);var inst_32876 = (inst_32874 < inst_32873);var inst_32877 = inst_32876;var state_32935__$1 = state_32935;if(cljs.core.truth_(inst_32877))
{var statearr_32996_33064 = state_32935__$1;(statearr_32996_33064[1] = 27);
} else
{var statearr_32997_33065 = state_32935__$1;(statearr_32997_33065[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 26))
{var inst_32863 = (state_32935[19]);var inst_32921 = (state_32935[2]);var inst_32922 = cljs.core.seq.call(null,inst_32863);var state_32935__$1 = (function (){var statearr_32998 = state_32935;(statearr_32998[30] = inst_32921);
return statearr_32998;
})();if(inst_32922)
{var statearr_32999_33066 = state_32935__$1;(statearr_32999_33066[1] = 42);
} else
{var statearr_33000_33067 = state_32935__$1;(statearr_33000_33067[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 27))
{var inst_32872 = (state_32935[10]);var inst_32874 = (state_32935[13]);var inst_32879 = cljs.core._nth.call(null,inst_32872,inst_32874);var state_32935__$1 = (function (){var statearr_33001 = state_32935;(statearr_33001[7] = inst_32879);
return statearr_33001;
})();var statearr_33002_33068 = state_32935__$1;(statearr_33002_33068[2] = null);
(statearr_33002_33068[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 28))
{var inst_32871 = (state_32935[11]);var inst_32892 = (state_32935[9]);var inst_32892__$1 = cljs.core.seq.call(null,inst_32871);var state_32935__$1 = (function (){var statearr_33006 = state_32935;(statearr_33006[9] = inst_32892__$1);
return statearr_33006;
})();if(inst_32892__$1)
{var statearr_33007_33069 = state_32935__$1;(statearr_33007_33069[1] = 33);
} else
{var statearr_33008_33070 = state_32935__$1;(statearr_33008_33070[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 29))
{var inst_32919 = (state_32935[2]);var state_32935__$1 = state_32935;var statearr_33009_33071 = state_32935__$1;(statearr_33009_33071[2] = inst_32919);
(statearr_33009_33071[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 30))
{var inst_32872 = (state_32935[10]);var inst_32871 = (state_32935[11]);var inst_32873 = (state_32935[12]);var inst_32874 = (state_32935[13]);var inst_32888 = (state_32935[2]);var inst_32889 = (inst_32874 + 1);var tmp33003 = inst_32872;var tmp33004 = inst_32871;var tmp33005 = inst_32873;var inst_32871__$1 = tmp33004;var inst_32872__$1 = tmp33003;var inst_32873__$1 = tmp33005;var inst_32874__$1 = inst_32889;var state_32935__$1 = (function (){var statearr_33010 = state_32935;(statearr_33010[10] = inst_32872__$1);
(statearr_33010[11] = inst_32871__$1);
(statearr_33010[31] = inst_32888);
(statearr_33010[12] = inst_32873__$1);
(statearr_33010[13] = inst_32874__$1);
return statearr_33010;
})();var statearr_33011_33072 = state_32935__$1;(statearr_33011_33072[2] = null);
(statearr_33011_33072[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32936 === 31))
{var inst_32879 = (state_32935[7]);var inst_32880 = (state_32935[2]);var inst_32881 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_32882 = cljs.core.async.untap_STAR_.call(null,m,inst_32879);var state_32935__$1 = (function (){var statearr_33012 = state_32935;(statearr_33012[32] = inst_32881);
(statearr_33012[33] = inst_32880);
return statearr_33012;
})();var statearr_33013_33073 = state_32935__$1;(statearr_33013_33073[2] = inst_32882);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32935__$1);
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
var state_machine__17982__auto____0 = (function (){var statearr_33017 = (new Array(34));(statearr_33017[0] = state_machine__17982__auto__);
(statearr_33017[1] = 1);
return statearr_33017;
});
var state_machine__17982__auto____1 = (function (state_32935){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_32935);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e33018){if((e33018 instanceof Object))
{var ex__17985__auto__ = e33018;var statearr_33019_33074 = state_32935;(statearr_33019_33074[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32935);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33018;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33075 = state_32935;
state_32935 = G__33075;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_32935){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_32935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_33020 = f__18052__auto__.call(null);(statearr_33020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___33021);
return statearr_33020;
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
cljs.core.async.Mix = (function (){var obj33077 = {};return obj33077;
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
;var m = (function (){if(typeof cljs.core.async.t33187 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33187 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta33188){
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
this.meta33188 = meta33188;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33187.cljs$lang$type = true;
cljs.core.async.t33187.cljs$lang$ctorStr = "cljs.core.async/t33187";
cljs.core.async.t33187.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t33187");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33187.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t33187.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33187.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33187.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33187.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33187.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33187.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33187.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33187.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33189){var self__ = this;
var _33189__$1 = this;return self__.meta33188;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33189,meta33188__$1){var self__ = this;
var _33189__$1 = this;return (new cljs.core.async.t33187(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta33188__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t33187 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t33187(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta33188){return (new cljs.core.async.t33187(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta33188));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t33187(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__18051__auto___33296 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_33254){var state_val_33255 = (state_33254[1]);if((state_val_33255 === 1))
{var inst_33193 = (state_33254[7]);var inst_33193__$1 = calc_state.call(null);var inst_33194 = cljs.core.seq_QMARK_.call(null,inst_33193__$1);var state_33254__$1 = (function (){var statearr_33256 = state_33254;(statearr_33256[7] = inst_33193__$1);
return statearr_33256;
})();if(inst_33194)
{var statearr_33257_33297 = state_33254__$1;(statearr_33257_33297[1] = 2);
} else
{var statearr_33258_33298 = state_33254__$1;(statearr_33258_33298[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33255 === 2))
{var inst_33193 = (state_33254[7]);var inst_33196 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33193);var state_33254__$1 = state_33254;var statearr_33259_33299 = state_33254__$1;(statearr_33259_33299[2] = inst_33196);
(statearr_33259_33299[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33255 === 3))
{var inst_33193 = (state_33254[7]);var state_33254__$1 = state_33254;var statearr_33260_33300 = state_33254__$1;(statearr_33260_33300[2] = inst_33193);
(statearr_33260_33300[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33255 === 4))
{var inst_33193 = (state_33254[7]);var inst_33199 = (state_33254[2]);var inst_33200 = cljs.core.get.call(null,inst_33199,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_33201 = cljs.core.get.call(null,inst_33199,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_33202 = cljs.core.get.call(null,inst_33199,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_33203 = inst_33193;var state_33254__$1 = (function (){var statearr_33261 = state_33254;(statearr_33261[8] = inst_33202);
(statearr_33261[9] = inst_33201);
(statearr_33261[10] = inst_33200);
(statearr_33261[11] = inst_33203);
return statearr_33261;
})();var statearr_33262_33301 = state_33254__$1;(statearr_33262_33301[2] = null);
(statearr_33262_33301[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33255 === 5))
{var inst_33203 = (state_33254[11]);var inst_33206 = cljs.core.seq_QMARK_.call(null,inst_33203);var state_33254__$1 = state_33254;if(inst_33206)
{var statearr_33263_33302 = state_33254__$1;(statearr_33263_33302[1] = 7);
} else
{var statearr_33264_33303 = state_33254__$1;(statearr_33264_33303[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33255 === 6))
{var inst_33252 = (state_33254[2]);var state_33254__$1 = state_33254;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33254__$1,inst_33252);
} else
{if((state_val_33255 === 7))
{var inst_33203 = (state_33254[11]);var inst_33208 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33203);var state_33254__$1 = state_33254;var statearr_33265_33304 = state_33254__$1;(statearr_33265_33304[2] = inst_33208);
(statearr_33265_33304[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33255 === 8))
{var inst_33203 = (state_33254[11]);var state_33254__$1 = state_33254;var statearr_33266_33305 = state_33254__$1;(statearr_33266_33305[2] = inst_33203);
(statearr_33266_33305[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33255 === 9))
{var inst_33211 = (state_33254[12]);var inst_33211__$1 = (state_33254[2]);var inst_33212 = cljs.core.get.call(null,inst_33211__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_33213 = cljs.core.get.call(null,inst_33211__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_33214 = cljs.core.get.call(null,inst_33211__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_33254__$1 = (function (){var statearr_33267 = state_33254;(statearr_33267[13] = inst_33214);
(statearr_33267[14] = inst_33213);
(statearr_33267[12] = inst_33211__$1);
return statearr_33267;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33254__$1,10,inst_33212);
} else
{if((state_val_33255 === 10))
{var inst_33219 = (state_33254[15]);var inst_33218 = (state_33254[16]);var inst_33217 = (state_33254[2]);var inst_33218__$1 = cljs.core.nth.call(null,inst_33217,0,null);var inst_33219__$1 = cljs.core.nth.call(null,inst_33217,1,null);var inst_33220 = (inst_33218__$1 == null);var inst_33221 = cljs.core._EQ_.call(null,inst_33219__$1,change);var inst_33222 = (inst_33220) || (inst_33221);var state_33254__$1 = (function (){var statearr_33268 = state_33254;(statearr_33268[15] = inst_33219__$1);
(statearr_33268[16] = inst_33218__$1);
return statearr_33268;
})();if(cljs.core.truth_(inst_33222))
{var statearr_33269_33306 = state_33254__$1;(statearr_33269_33306[1] = 11);
} else
{var statearr_33270_33307 = state_33254__$1;(statearr_33270_33307[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33255 === 11))
{var inst_33218 = (state_33254[16]);var inst_33224 = (inst_33218 == null);var state_33254__$1 = state_33254;if(cljs.core.truth_(inst_33224))
{var statearr_33271_33308 = state_33254__$1;(statearr_33271_33308[1] = 14);
} else
{var statearr_33272_33309 = state_33254__$1;(statearr_33272_33309[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33255 === 12))
{var inst_33219 = (state_33254[15]);var inst_33233 = (state_33254[17]);var inst_33214 = (state_33254[13]);var inst_33233__$1 = inst_33214.call(null,inst_33219);var state_33254__$1 = (function (){var statearr_33273 = state_33254;(statearr_33273[17] = inst_33233__$1);
return statearr_33273;
})();if(cljs.core.truth_(inst_33233__$1))
{var statearr_33274_33310 = state_33254__$1;(statearr_33274_33310[1] = 17);
} else
{var statearr_33275_33311 = state_33254__$1;(statearr_33275_33311[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33255 === 13))
{var inst_33250 = (state_33254[2]);var state_33254__$1 = state_33254;var statearr_33276_33312 = state_33254__$1;(statearr_33276_33312[2] = inst_33250);
(statearr_33276_33312[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33255 === 14))
{var inst_33219 = (state_33254[15]);var inst_33226 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33219);var state_33254__$1 = state_33254;var statearr_33277_33313 = state_33254__$1;(statearr_33277_33313[2] = inst_33226);
(statearr_33277_33313[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33255 === 15))
{var state_33254__$1 = state_33254;var statearr_33278_33314 = state_33254__$1;(statearr_33278_33314[2] = null);
(statearr_33278_33314[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33255 === 16))
{var inst_33229 = (state_33254[2]);var inst_33230 = calc_state.call(null);var inst_33203 = inst_33230;var state_33254__$1 = (function (){var statearr_33279 = state_33254;(statearr_33279[18] = inst_33229);
(statearr_33279[11] = inst_33203);
return statearr_33279;
})();var statearr_33280_33315 = state_33254__$1;(statearr_33280_33315[2] = null);
(statearr_33280_33315[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33255 === 17))
{var inst_33233 = (state_33254[17]);var state_33254__$1 = state_33254;var statearr_33281_33316 = state_33254__$1;(statearr_33281_33316[2] = inst_33233);
(statearr_33281_33316[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33255 === 18))
{var inst_33219 = (state_33254[15]);var inst_33214 = (state_33254[13]);var inst_33213 = (state_33254[14]);var inst_33236 = cljs.core.empty_QMARK_.call(null,inst_33214);var inst_33237 = inst_33213.call(null,inst_33219);var inst_33238 = cljs.core.not.call(null,inst_33237);var inst_33239 = (inst_33236) && (inst_33238);var state_33254__$1 = state_33254;var statearr_33282_33317 = state_33254__$1;(statearr_33282_33317[2] = inst_33239);
(statearr_33282_33317[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33255 === 19))
{var inst_33241 = (state_33254[2]);var state_33254__$1 = state_33254;if(cljs.core.truth_(inst_33241))
{var statearr_33283_33318 = state_33254__$1;(statearr_33283_33318[1] = 20);
} else
{var statearr_33284_33319 = state_33254__$1;(statearr_33284_33319[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33255 === 20))
{var inst_33218 = (state_33254[16]);var state_33254__$1 = state_33254;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33254__$1,23,out,inst_33218);
} else
{if((state_val_33255 === 21))
{var state_33254__$1 = state_33254;var statearr_33285_33320 = state_33254__$1;(statearr_33285_33320[2] = null);
(statearr_33285_33320[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33255 === 22))
{var inst_33211 = (state_33254[12]);var inst_33247 = (state_33254[2]);var inst_33203 = inst_33211;var state_33254__$1 = (function (){var statearr_33286 = state_33254;(statearr_33286[19] = inst_33247);
(statearr_33286[11] = inst_33203);
return statearr_33286;
})();var statearr_33287_33321 = state_33254__$1;(statearr_33287_33321[2] = null);
(statearr_33287_33321[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33255 === 23))
{var inst_33244 = (state_33254[2]);var state_33254__$1 = state_33254;var statearr_33288_33322 = state_33254__$1;(statearr_33288_33322[2] = inst_33244);
(statearr_33288_33322[1] = 22);
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
var state_machine__17982__auto____0 = (function (){var statearr_33292 = (new Array(20));(statearr_33292[0] = state_machine__17982__auto__);
(statearr_33292[1] = 1);
return statearr_33292;
});
var state_machine__17982__auto____1 = (function (state_33254){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_33254);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e33293){if((e33293 instanceof Object))
{var ex__17985__auto__ = e33293;var statearr_33294_33323 = state_33254;(statearr_33294_33323[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33254);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33293;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33324 = state_33254;
state_33254 = G__33324;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_33254){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_33254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_33295 = f__18052__auto__.call(null);(statearr_33295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___33296);
return statearr_33295;
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
cljs.core.async.Pub = (function (){var obj33326 = {};return obj33326;
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
return (function (p1__33327_SHARP_){if(cljs.core.truth_(p1__33327_SHARP_.call(null,topic)))
{return p1__33327_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__33327_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13823__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t33452 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33452 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33453){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33453 = meta33453;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33452.cljs$lang$type = true;
cljs.core.async.t33452.cljs$lang$ctorStr = "cljs.core.async/t33452";
cljs.core.async.t33452.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t33452");
});})(mults,ensure_mult))
;
cljs.core.async.t33452.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t33452.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t33452.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t33452.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t33452.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t33452.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33452.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t33452.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33454){var self__ = this;
var _33454__$1 = this;return self__.meta33453;
});})(mults,ensure_mult))
;
cljs.core.async.t33452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33454,meta33453__$1){var self__ = this;
var _33454__$1 = this;return (new cljs.core.async.t33452(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33453__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t33452 = ((function (mults,ensure_mult){
return (function __GT_t33452(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33453){return (new cljs.core.async.t33452(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33453));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t33452(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__18051__auto___33576 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_33528){var state_val_33529 = (state_33528[1]);if((state_val_33529 === 1))
{var state_33528__$1 = state_33528;var statearr_33530_33577 = state_33528__$1;(statearr_33530_33577[2] = null);
(statearr_33530_33577[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33529 === 2))
{var state_33528__$1 = state_33528;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33528__$1,4,ch);
} else
{if((state_val_33529 === 3))
{var inst_33526 = (state_33528[2]);var state_33528__$1 = state_33528;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33528__$1,inst_33526);
} else
{if((state_val_33529 === 4))
{var inst_33457 = (state_33528[7]);var inst_33457__$1 = (state_33528[2]);var inst_33458 = (inst_33457__$1 == null);var state_33528__$1 = (function (){var statearr_33531 = state_33528;(statearr_33531[7] = inst_33457__$1);
return statearr_33531;
})();if(cljs.core.truth_(inst_33458))
{var statearr_33532_33578 = state_33528__$1;(statearr_33532_33578[1] = 5);
} else
{var statearr_33533_33579 = state_33528__$1;(statearr_33533_33579[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33529 === 5))
{var inst_33464 = cljs.core.deref.call(null,mults);var inst_33465 = cljs.core.vals.call(null,inst_33464);var inst_33466 = cljs.core.seq.call(null,inst_33465);var inst_33467 = inst_33466;var inst_33468 = null;var inst_33469 = 0;var inst_33470 = 0;var state_33528__$1 = (function (){var statearr_33534 = state_33528;(statearr_33534[8] = inst_33470);
(statearr_33534[9] = inst_33467);
(statearr_33534[10] = inst_33468);
(statearr_33534[11] = inst_33469);
return statearr_33534;
})();var statearr_33535_33580 = state_33528__$1;(statearr_33535_33580[2] = null);
(statearr_33535_33580[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33529 === 6))
{var inst_33505 = (state_33528[12]);var inst_33507 = (state_33528[13]);var inst_33457 = (state_33528[7]);var inst_33505__$1 = topic_fn.call(null,inst_33457);var inst_33506 = cljs.core.deref.call(null,mults);var inst_33507__$1 = cljs.core.get.call(null,inst_33506,inst_33505__$1);var state_33528__$1 = (function (){var statearr_33536 = state_33528;(statearr_33536[12] = inst_33505__$1);
(statearr_33536[13] = inst_33507__$1);
return statearr_33536;
})();if(cljs.core.truth_(inst_33507__$1))
{var statearr_33537_33581 = state_33528__$1;(statearr_33537_33581[1] = 19);
} else
{var statearr_33538_33582 = state_33528__$1;(statearr_33538_33582[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33529 === 7))
{var inst_33524 = (state_33528[2]);var state_33528__$1 = state_33528;var statearr_33539_33583 = state_33528__$1;(statearr_33539_33583[2] = inst_33524);
(statearr_33539_33583[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33529 === 8))
{var inst_33470 = (state_33528[8]);var inst_33469 = (state_33528[11]);var inst_33472 = (inst_33470 < inst_33469);var inst_33473 = inst_33472;var state_33528__$1 = state_33528;if(cljs.core.truth_(inst_33473))
{var statearr_33543_33584 = state_33528__$1;(statearr_33543_33584[1] = 10);
} else
{var statearr_33544_33585 = state_33528__$1;(statearr_33544_33585[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33529 === 9))
{var inst_33503 = (state_33528[2]);var state_33528__$1 = state_33528;var statearr_33545_33586 = state_33528__$1;(statearr_33545_33586[2] = inst_33503);
(statearr_33545_33586[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33529 === 10))
{var inst_33470 = (state_33528[8]);var inst_33467 = (state_33528[9]);var inst_33468 = (state_33528[10]);var inst_33469 = (state_33528[11]);var inst_33475 = cljs.core._nth.call(null,inst_33468,inst_33470);var inst_33476 = cljs.core.async.muxch_STAR_.call(null,inst_33475);var inst_33477 = cljs.core.async.close_BANG_.call(null,inst_33476);var inst_33478 = (inst_33470 + 1);var tmp33540 = inst_33467;var tmp33541 = inst_33468;var tmp33542 = inst_33469;var inst_33467__$1 = tmp33540;var inst_33468__$1 = tmp33541;var inst_33469__$1 = tmp33542;var inst_33470__$1 = inst_33478;var state_33528__$1 = (function (){var statearr_33546 = state_33528;(statearr_33546[8] = inst_33470__$1);
(statearr_33546[9] = inst_33467__$1);
(statearr_33546[14] = inst_33477);
(statearr_33546[10] = inst_33468__$1);
(statearr_33546[11] = inst_33469__$1);
return statearr_33546;
})();var statearr_33547_33587 = state_33528__$1;(statearr_33547_33587[2] = null);
(statearr_33547_33587[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33529 === 11))
{var inst_33481 = (state_33528[15]);var inst_33467 = (state_33528[9]);var inst_33481__$1 = cljs.core.seq.call(null,inst_33467);var state_33528__$1 = (function (){var statearr_33548 = state_33528;(statearr_33548[15] = inst_33481__$1);
return statearr_33548;
})();if(inst_33481__$1)
{var statearr_33549_33588 = state_33528__$1;(statearr_33549_33588[1] = 13);
} else
{var statearr_33550_33589 = state_33528__$1;(statearr_33550_33589[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33529 === 12))
{var inst_33501 = (state_33528[2]);var state_33528__$1 = state_33528;var statearr_33551_33590 = state_33528__$1;(statearr_33551_33590[2] = inst_33501);
(statearr_33551_33590[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33529 === 13))
{var inst_33481 = (state_33528[15]);var inst_33483 = cljs.core.chunked_seq_QMARK_.call(null,inst_33481);var state_33528__$1 = state_33528;if(inst_33483)
{var statearr_33552_33591 = state_33528__$1;(statearr_33552_33591[1] = 16);
} else
{var statearr_33553_33592 = state_33528__$1;(statearr_33553_33592[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33529 === 14))
{var state_33528__$1 = state_33528;var statearr_33554_33593 = state_33528__$1;(statearr_33554_33593[2] = null);
(statearr_33554_33593[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33529 === 15))
{var inst_33499 = (state_33528[2]);var state_33528__$1 = state_33528;var statearr_33555_33594 = state_33528__$1;(statearr_33555_33594[2] = inst_33499);
(statearr_33555_33594[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33529 === 16))
{var inst_33481 = (state_33528[15]);var inst_33485 = cljs.core.chunk_first.call(null,inst_33481);var inst_33486 = cljs.core.chunk_rest.call(null,inst_33481);var inst_33487 = cljs.core.count.call(null,inst_33485);var inst_33467 = inst_33486;var inst_33468 = inst_33485;var inst_33469 = inst_33487;var inst_33470 = 0;var state_33528__$1 = (function (){var statearr_33556 = state_33528;(statearr_33556[8] = inst_33470);
(statearr_33556[9] = inst_33467);
(statearr_33556[10] = inst_33468);
(statearr_33556[11] = inst_33469);
return statearr_33556;
})();var statearr_33557_33595 = state_33528__$1;(statearr_33557_33595[2] = null);
(statearr_33557_33595[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33529 === 17))
{var inst_33481 = (state_33528[15]);var inst_33490 = cljs.core.first.call(null,inst_33481);var inst_33491 = cljs.core.async.muxch_STAR_.call(null,inst_33490);var inst_33492 = cljs.core.async.close_BANG_.call(null,inst_33491);var inst_33493 = cljs.core.next.call(null,inst_33481);var inst_33467 = inst_33493;var inst_33468 = null;var inst_33469 = 0;var inst_33470 = 0;var state_33528__$1 = (function (){var statearr_33558 = state_33528;(statearr_33558[8] = inst_33470);
(statearr_33558[9] = inst_33467);
(statearr_33558[10] = inst_33468);
(statearr_33558[11] = inst_33469);
(statearr_33558[16] = inst_33492);
return statearr_33558;
})();var statearr_33559_33596 = state_33528__$1;(statearr_33559_33596[2] = null);
(statearr_33559_33596[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33529 === 18))
{var inst_33496 = (state_33528[2]);var state_33528__$1 = state_33528;var statearr_33560_33597 = state_33528__$1;(statearr_33560_33597[2] = inst_33496);
(statearr_33560_33597[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33529 === 19))
{var state_33528__$1 = state_33528;var statearr_33561_33598 = state_33528__$1;(statearr_33561_33598[2] = null);
(statearr_33561_33598[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33529 === 20))
{var state_33528__$1 = state_33528;var statearr_33562_33599 = state_33528__$1;(statearr_33562_33599[2] = null);
(statearr_33562_33599[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33529 === 21))
{var inst_33521 = (state_33528[2]);var state_33528__$1 = (function (){var statearr_33563 = state_33528;(statearr_33563[17] = inst_33521);
return statearr_33563;
})();var statearr_33564_33600 = state_33528__$1;(statearr_33564_33600[2] = null);
(statearr_33564_33600[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33529 === 22))
{var inst_33518 = (state_33528[2]);var state_33528__$1 = state_33528;var statearr_33565_33601 = state_33528__$1;(statearr_33565_33601[2] = inst_33518);
(statearr_33565_33601[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33529 === 23))
{var inst_33505 = (state_33528[12]);var inst_33509 = (state_33528[2]);var inst_33510 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33505);var state_33528__$1 = (function (){var statearr_33566 = state_33528;(statearr_33566[18] = inst_33509);
return statearr_33566;
})();var statearr_33567_33602 = state_33528__$1;(statearr_33567_33602[2] = inst_33510);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33528__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33529 === 24))
{var inst_33507 = (state_33528[13]);var inst_33457 = (state_33528[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33528,23,Object,null,22);var inst_33514 = cljs.core.async.muxch_STAR_.call(null,inst_33507);var state_33528__$1 = state_33528;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33528__$1,25,inst_33514,inst_33457);
} else
{if((state_val_33529 === 25))
{var inst_33516 = (state_33528[2]);var state_33528__$1 = state_33528;var statearr_33568_33603 = state_33528__$1;(statearr_33568_33603[2] = inst_33516);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33528__$1);
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
var state_machine__17982__auto____0 = (function (){var statearr_33572 = (new Array(19));(statearr_33572[0] = state_machine__17982__auto__);
(statearr_33572[1] = 1);
return statearr_33572;
});
var state_machine__17982__auto____1 = (function (state_33528){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_33528);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e33573){if((e33573 instanceof Object))
{var ex__17985__auto__ = e33573;var statearr_33574_33604 = state_33528;(statearr_33574_33604[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33528);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33573;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33605 = state_33528;
state_33528 = G__33605;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_33528){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_33528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_33575 = f__18052__auto__.call(null);(statearr_33575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___33576);
return statearr_33575;
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
,cljs.core.range.call(null,cnt));var c__18051__auto___33742 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_33712){var state_val_33713 = (state_33712[1]);if((state_val_33713 === 1))
{var state_33712__$1 = state_33712;var statearr_33714_33743 = state_33712__$1;(statearr_33714_33743[2] = null);
(statearr_33714_33743[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33713 === 2))
{var inst_33675 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_33676 = 0;var state_33712__$1 = (function (){var statearr_33715 = state_33712;(statearr_33715[7] = inst_33676);
(statearr_33715[8] = inst_33675);
return statearr_33715;
})();var statearr_33716_33744 = state_33712__$1;(statearr_33716_33744[2] = null);
(statearr_33716_33744[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33713 === 3))
{var inst_33710 = (state_33712[2]);var state_33712__$1 = state_33712;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33712__$1,inst_33710);
} else
{if((state_val_33713 === 4))
{var inst_33676 = (state_33712[7]);var inst_33678 = (inst_33676 < cnt);var state_33712__$1 = state_33712;if(cljs.core.truth_(inst_33678))
{var statearr_33717_33745 = state_33712__$1;(statearr_33717_33745[1] = 6);
} else
{var statearr_33718_33746 = state_33712__$1;(statearr_33718_33746[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33713 === 5))
{var inst_33696 = (state_33712[2]);var state_33712__$1 = (function (){var statearr_33719 = state_33712;(statearr_33719[9] = inst_33696);
return statearr_33719;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33712__$1,12,dchan);
} else
{if((state_val_33713 === 6))
{var state_33712__$1 = state_33712;var statearr_33720_33747 = state_33712__$1;(statearr_33720_33747[2] = null);
(statearr_33720_33747[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33713 === 7))
{var state_33712__$1 = state_33712;var statearr_33721_33748 = state_33712__$1;(statearr_33721_33748[2] = null);
(statearr_33721_33748[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33713 === 8))
{var inst_33694 = (state_33712[2]);var state_33712__$1 = state_33712;var statearr_33722_33749 = state_33712__$1;(statearr_33722_33749[2] = inst_33694);
(statearr_33722_33749[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33713 === 9))
{var inst_33676 = (state_33712[7]);var inst_33689 = (state_33712[2]);var inst_33690 = (inst_33676 + 1);var inst_33676__$1 = inst_33690;var state_33712__$1 = (function (){var statearr_33723 = state_33712;(statearr_33723[7] = inst_33676__$1);
(statearr_33723[10] = inst_33689);
return statearr_33723;
})();var statearr_33724_33750 = state_33712__$1;(statearr_33724_33750[2] = null);
(statearr_33724_33750[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33713 === 10))
{var inst_33680 = (state_33712[2]);var inst_33681 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_33712__$1 = (function (){var statearr_33725 = state_33712;(statearr_33725[11] = inst_33680);
return statearr_33725;
})();var statearr_33726_33751 = state_33712__$1;(statearr_33726_33751[2] = inst_33681);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33712__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33713 === 11))
{var inst_33676 = (state_33712[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33712,10,Object,null,9);var inst_33685 = chs__$1.call(null,inst_33676);var inst_33686 = done.call(null,inst_33676);var inst_33687 = cljs.core.async.take_BANG_.call(null,inst_33685,inst_33686);var state_33712__$1 = state_33712;var statearr_33727_33752 = state_33712__$1;(statearr_33727_33752[2] = inst_33687);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33712__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33713 === 12))
{var inst_33698 = (state_33712[12]);var inst_33698__$1 = (state_33712[2]);var inst_33699 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33698__$1);var state_33712__$1 = (function (){var statearr_33728 = state_33712;(statearr_33728[12] = inst_33698__$1);
return statearr_33728;
})();if(cljs.core.truth_(inst_33699))
{var statearr_33729_33753 = state_33712__$1;(statearr_33729_33753[1] = 13);
} else
{var statearr_33730_33754 = state_33712__$1;(statearr_33730_33754[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33713 === 13))
{var inst_33701 = cljs.core.async.close_BANG_.call(null,out);var state_33712__$1 = state_33712;var statearr_33731_33755 = state_33712__$1;(statearr_33731_33755[2] = inst_33701);
(statearr_33731_33755[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33713 === 14))
{var inst_33698 = (state_33712[12]);var inst_33703 = cljs.core.apply.call(null,f,inst_33698);var state_33712__$1 = state_33712;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33712__$1,16,out,inst_33703);
} else
{if((state_val_33713 === 15))
{var inst_33708 = (state_33712[2]);var state_33712__$1 = state_33712;var statearr_33732_33756 = state_33712__$1;(statearr_33732_33756[2] = inst_33708);
(statearr_33732_33756[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33713 === 16))
{var inst_33705 = (state_33712[2]);var state_33712__$1 = (function (){var statearr_33733 = state_33712;(statearr_33733[13] = inst_33705);
return statearr_33733;
})();var statearr_33734_33757 = state_33712__$1;(statearr_33734_33757[2] = null);
(statearr_33734_33757[1] = 2);
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
var state_machine__17982__auto____0 = (function (){var statearr_33738 = (new Array(14));(statearr_33738[0] = state_machine__17982__auto__);
(statearr_33738[1] = 1);
return statearr_33738;
});
var state_machine__17982__auto____1 = (function (state_33712){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_33712);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e33739){if((e33739 instanceof Object))
{var ex__17985__auto__ = e33739;var statearr_33740_33758 = state_33712;(statearr_33740_33758[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33712);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33739;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33759 = state_33712;
state_33712 = G__33759;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_33712){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_33712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_33741 = f__18052__auto__.call(null);(statearr_33741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___33742);
return statearr_33741;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___33867 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_33843){var state_val_33844 = (state_33843[1]);if((state_val_33844 === 1))
{var inst_33814 = cljs.core.vec.call(null,chs);var inst_33815 = inst_33814;var state_33843__$1 = (function (){var statearr_33845 = state_33843;(statearr_33845[7] = inst_33815);
return statearr_33845;
})();var statearr_33846_33868 = state_33843__$1;(statearr_33846_33868[2] = null);
(statearr_33846_33868[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33844 === 2))
{var inst_33815 = (state_33843[7]);var inst_33817 = cljs.core.count.call(null,inst_33815);var inst_33818 = (inst_33817 > 0);var state_33843__$1 = state_33843;if(cljs.core.truth_(inst_33818))
{var statearr_33847_33869 = state_33843__$1;(statearr_33847_33869[1] = 4);
} else
{var statearr_33848_33870 = state_33843__$1;(statearr_33848_33870[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33844 === 3))
{var inst_33841 = (state_33843[2]);var state_33843__$1 = state_33843;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33843__$1,inst_33841);
} else
{if((state_val_33844 === 4))
{var inst_33815 = (state_33843[7]);var state_33843__$1 = state_33843;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33843__$1,7,inst_33815);
} else
{if((state_val_33844 === 5))
{var inst_33837 = cljs.core.async.close_BANG_.call(null,out);var state_33843__$1 = state_33843;var statearr_33849_33871 = state_33843__$1;(statearr_33849_33871[2] = inst_33837);
(statearr_33849_33871[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33844 === 6))
{var inst_33839 = (state_33843[2]);var state_33843__$1 = state_33843;var statearr_33850_33872 = state_33843__$1;(statearr_33850_33872[2] = inst_33839);
(statearr_33850_33872[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33844 === 7))
{var inst_33822 = (state_33843[8]);var inst_33823 = (state_33843[9]);var inst_33822__$1 = (state_33843[2]);var inst_33823__$1 = cljs.core.nth.call(null,inst_33822__$1,0,null);var inst_33824 = cljs.core.nth.call(null,inst_33822__$1,1,null);var inst_33825 = (inst_33823__$1 == null);var state_33843__$1 = (function (){var statearr_33851 = state_33843;(statearr_33851[8] = inst_33822__$1);
(statearr_33851[10] = inst_33824);
(statearr_33851[9] = inst_33823__$1);
return statearr_33851;
})();if(cljs.core.truth_(inst_33825))
{var statearr_33852_33873 = state_33843__$1;(statearr_33852_33873[1] = 8);
} else
{var statearr_33853_33874 = state_33843__$1;(statearr_33853_33874[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33844 === 8))
{var inst_33815 = (state_33843[7]);var inst_33822 = (state_33843[8]);var inst_33824 = (state_33843[10]);var inst_33823 = (state_33843[9]);var inst_33827 = (function (){var c = inst_33824;var v = inst_33823;var vec__33820 = inst_33822;var cs = inst_33815;return ((function (c,v,vec__33820,cs,inst_33815,inst_33822,inst_33824,inst_33823,state_val_33844){
return (function (p1__33760_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__33760_SHARP_);
});
;})(c,v,vec__33820,cs,inst_33815,inst_33822,inst_33824,inst_33823,state_val_33844))
})();var inst_33828 = cljs.core.filterv.call(null,inst_33827,inst_33815);var inst_33815__$1 = inst_33828;var state_33843__$1 = (function (){var statearr_33854 = state_33843;(statearr_33854[7] = inst_33815__$1);
return statearr_33854;
})();var statearr_33855_33875 = state_33843__$1;(statearr_33855_33875[2] = null);
(statearr_33855_33875[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33844 === 9))
{var inst_33823 = (state_33843[9]);var state_33843__$1 = state_33843;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33843__$1,11,out,inst_33823);
} else
{if((state_val_33844 === 10))
{var inst_33835 = (state_33843[2]);var state_33843__$1 = state_33843;var statearr_33857_33876 = state_33843__$1;(statearr_33857_33876[2] = inst_33835);
(statearr_33857_33876[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33844 === 11))
{var inst_33815 = (state_33843[7]);var inst_33832 = (state_33843[2]);var tmp33856 = inst_33815;var inst_33815__$1 = tmp33856;var state_33843__$1 = (function (){var statearr_33858 = state_33843;(statearr_33858[11] = inst_33832);
(statearr_33858[7] = inst_33815__$1);
return statearr_33858;
})();var statearr_33859_33877 = state_33843__$1;(statearr_33859_33877[2] = null);
(statearr_33859_33877[1] = 2);
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
var state_machine__17982__auto____0 = (function (){var statearr_33863 = (new Array(12));(statearr_33863[0] = state_machine__17982__auto__);
(statearr_33863[1] = 1);
return statearr_33863;
});
var state_machine__17982__auto____1 = (function (state_33843){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_33843);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e33864){if((e33864 instanceof Object))
{var ex__17985__auto__ = e33864;var statearr_33865_33878 = state_33843;(statearr_33865_33878[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33843);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33864;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33879 = state_33843;
state_33843 = G__33879;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_33843){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_33843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_33866 = f__18052__auto__.call(null);(statearr_33866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___33867);
return statearr_33866;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___33972 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_33949){var state_val_33950 = (state_33949[1]);if((state_val_33950 === 1))
{var inst_33926 = 0;var state_33949__$1 = (function (){var statearr_33951 = state_33949;(statearr_33951[7] = inst_33926);
return statearr_33951;
})();var statearr_33952_33973 = state_33949__$1;(statearr_33952_33973[2] = null);
(statearr_33952_33973[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33950 === 2))
{var inst_33926 = (state_33949[7]);var inst_33928 = (inst_33926 < n);var state_33949__$1 = state_33949;if(cljs.core.truth_(inst_33928))
{var statearr_33953_33974 = state_33949__$1;(statearr_33953_33974[1] = 4);
} else
{var statearr_33954_33975 = state_33949__$1;(statearr_33954_33975[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33950 === 3))
{var inst_33946 = (state_33949[2]);var inst_33947 = cljs.core.async.close_BANG_.call(null,out);var state_33949__$1 = (function (){var statearr_33955 = state_33949;(statearr_33955[8] = inst_33946);
return statearr_33955;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33949__$1,inst_33947);
} else
{if((state_val_33950 === 4))
{var state_33949__$1 = state_33949;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33949__$1,7,ch);
} else
{if((state_val_33950 === 5))
{var state_33949__$1 = state_33949;var statearr_33956_33976 = state_33949__$1;(statearr_33956_33976[2] = null);
(statearr_33956_33976[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33950 === 6))
{var inst_33944 = (state_33949[2]);var state_33949__$1 = state_33949;var statearr_33957_33977 = state_33949__$1;(statearr_33957_33977[2] = inst_33944);
(statearr_33957_33977[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33950 === 7))
{var inst_33931 = (state_33949[9]);var inst_33931__$1 = (state_33949[2]);var inst_33932 = (inst_33931__$1 == null);var inst_33933 = cljs.core.not.call(null,inst_33932);var state_33949__$1 = (function (){var statearr_33958 = state_33949;(statearr_33958[9] = inst_33931__$1);
return statearr_33958;
})();if(inst_33933)
{var statearr_33959_33978 = state_33949__$1;(statearr_33959_33978[1] = 8);
} else
{var statearr_33960_33979 = state_33949__$1;(statearr_33960_33979[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33950 === 8))
{var inst_33931 = (state_33949[9]);var state_33949__$1 = state_33949;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33949__$1,11,out,inst_33931);
} else
{if((state_val_33950 === 9))
{var state_33949__$1 = state_33949;var statearr_33961_33980 = state_33949__$1;(statearr_33961_33980[2] = null);
(statearr_33961_33980[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33950 === 10))
{var inst_33941 = (state_33949[2]);var state_33949__$1 = state_33949;var statearr_33962_33981 = state_33949__$1;(statearr_33962_33981[2] = inst_33941);
(statearr_33962_33981[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33950 === 11))
{var inst_33926 = (state_33949[7]);var inst_33936 = (state_33949[2]);var inst_33937 = (inst_33926 + 1);var inst_33926__$1 = inst_33937;var state_33949__$1 = (function (){var statearr_33963 = state_33949;(statearr_33963[7] = inst_33926__$1);
(statearr_33963[10] = inst_33936);
return statearr_33963;
})();var statearr_33964_33982 = state_33949__$1;(statearr_33964_33982[2] = null);
(statearr_33964_33982[1] = 2);
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
var state_machine__17982__auto____0 = (function (){var statearr_33968 = (new Array(11));(statearr_33968[0] = state_machine__17982__auto__);
(statearr_33968[1] = 1);
return statearr_33968;
});
var state_machine__17982__auto____1 = (function (state_33949){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_33949);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e33969){if((e33969 instanceof Object))
{var ex__17985__auto__ = e33969;var statearr_33970_33983 = state_33949;(statearr_33970_33983[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33949);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33969;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33984 = state_33949;
state_33949 = G__33984;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_33949){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_33949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_33971 = f__18052__auto__.call(null);(statearr_33971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___33972);
return statearr_33971;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___34081 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_34056){var state_val_34057 = (state_34056[1]);if((state_val_34057 === 1))
{var inst_34033 = null;var state_34056__$1 = (function (){var statearr_34058 = state_34056;(statearr_34058[7] = inst_34033);
return statearr_34058;
})();var statearr_34059_34082 = state_34056__$1;(statearr_34059_34082[2] = null);
(statearr_34059_34082[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34057 === 2))
{var state_34056__$1 = state_34056;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34056__$1,4,ch);
} else
{if((state_val_34057 === 3))
{var inst_34053 = (state_34056[2]);var inst_34054 = cljs.core.async.close_BANG_.call(null,out);var state_34056__$1 = (function (){var statearr_34060 = state_34056;(statearr_34060[8] = inst_34053);
return statearr_34060;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34056__$1,inst_34054);
} else
{if((state_val_34057 === 4))
{var inst_34036 = (state_34056[9]);var inst_34036__$1 = (state_34056[2]);var inst_34037 = (inst_34036__$1 == null);var inst_34038 = cljs.core.not.call(null,inst_34037);var state_34056__$1 = (function (){var statearr_34061 = state_34056;(statearr_34061[9] = inst_34036__$1);
return statearr_34061;
})();if(inst_34038)
{var statearr_34062_34083 = state_34056__$1;(statearr_34062_34083[1] = 5);
} else
{var statearr_34063_34084 = state_34056__$1;(statearr_34063_34084[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34057 === 5))
{var inst_34036 = (state_34056[9]);var inst_34033 = (state_34056[7]);var inst_34040 = cljs.core._EQ_.call(null,inst_34036,inst_34033);var state_34056__$1 = state_34056;if(inst_34040)
{var statearr_34064_34085 = state_34056__$1;(statearr_34064_34085[1] = 8);
} else
{var statearr_34065_34086 = state_34056__$1;(statearr_34065_34086[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34057 === 6))
{var state_34056__$1 = state_34056;var statearr_34067_34087 = state_34056__$1;(statearr_34067_34087[2] = null);
(statearr_34067_34087[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34057 === 7))
{var inst_34051 = (state_34056[2]);var state_34056__$1 = state_34056;var statearr_34068_34088 = state_34056__$1;(statearr_34068_34088[2] = inst_34051);
(statearr_34068_34088[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34057 === 8))
{var inst_34033 = (state_34056[7]);var tmp34066 = inst_34033;var inst_34033__$1 = tmp34066;var state_34056__$1 = (function (){var statearr_34069 = state_34056;(statearr_34069[7] = inst_34033__$1);
return statearr_34069;
})();var statearr_34070_34089 = state_34056__$1;(statearr_34070_34089[2] = null);
(statearr_34070_34089[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34057 === 9))
{var inst_34036 = (state_34056[9]);var state_34056__$1 = state_34056;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34056__$1,11,out,inst_34036);
} else
{if((state_val_34057 === 10))
{var inst_34048 = (state_34056[2]);var state_34056__$1 = state_34056;var statearr_34071_34090 = state_34056__$1;(statearr_34071_34090[2] = inst_34048);
(statearr_34071_34090[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34057 === 11))
{var inst_34036 = (state_34056[9]);var inst_34045 = (state_34056[2]);var inst_34033 = inst_34036;var state_34056__$1 = (function (){var statearr_34072 = state_34056;(statearr_34072[10] = inst_34045);
(statearr_34072[7] = inst_34033);
return statearr_34072;
})();var statearr_34073_34091 = state_34056__$1;(statearr_34073_34091[2] = null);
(statearr_34073_34091[1] = 2);
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
var state_machine__17982__auto____0 = (function (){var statearr_34077 = (new Array(11));(statearr_34077[0] = state_machine__17982__auto__);
(statearr_34077[1] = 1);
return statearr_34077;
});
var state_machine__17982__auto____1 = (function (state_34056){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_34056);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e34078){if((e34078 instanceof Object))
{var ex__17985__auto__ = e34078;var statearr_34079_34092 = state_34056;(statearr_34079_34092[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34056);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34078;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34093 = state_34056;
state_34056 = G__34093;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_34056){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_34056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_34080 = f__18052__auto__.call(null);(statearr_34080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___34081);
return statearr_34080;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___34228 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_34198){var state_val_34199 = (state_34198[1]);if((state_val_34199 === 1))
{var inst_34161 = (new Array(n));var inst_34162 = inst_34161;var inst_34163 = 0;var state_34198__$1 = (function (){var statearr_34200 = state_34198;(statearr_34200[7] = inst_34163);
(statearr_34200[8] = inst_34162);
return statearr_34200;
})();var statearr_34201_34229 = state_34198__$1;(statearr_34201_34229[2] = null);
(statearr_34201_34229[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34199 === 2))
{var state_34198__$1 = state_34198;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34198__$1,4,ch);
} else
{if((state_val_34199 === 3))
{var inst_34196 = (state_34198[2]);var state_34198__$1 = state_34198;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34198__$1,inst_34196);
} else
{if((state_val_34199 === 4))
{var inst_34166 = (state_34198[9]);var inst_34166__$1 = (state_34198[2]);var inst_34167 = (inst_34166__$1 == null);var inst_34168 = cljs.core.not.call(null,inst_34167);var state_34198__$1 = (function (){var statearr_34202 = state_34198;(statearr_34202[9] = inst_34166__$1);
return statearr_34202;
})();if(inst_34168)
{var statearr_34203_34230 = state_34198__$1;(statearr_34203_34230[1] = 5);
} else
{var statearr_34204_34231 = state_34198__$1;(statearr_34204_34231[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34199 === 5))
{var inst_34166 = (state_34198[9]);var inst_34163 = (state_34198[7]);var inst_34162 = (state_34198[8]);var inst_34171 = (state_34198[10]);var inst_34170 = (inst_34162[inst_34163] = inst_34166);var inst_34171__$1 = (inst_34163 + 1);var inst_34172 = (inst_34171__$1 < n);var state_34198__$1 = (function (){var statearr_34205 = state_34198;(statearr_34205[10] = inst_34171__$1);
(statearr_34205[11] = inst_34170);
return statearr_34205;
})();if(cljs.core.truth_(inst_34172))
{var statearr_34206_34232 = state_34198__$1;(statearr_34206_34232[1] = 8);
} else
{var statearr_34207_34233 = state_34198__$1;(statearr_34207_34233[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34199 === 6))
{var inst_34163 = (state_34198[7]);var inst_34184 = (inst_34163 > 0);var state_34198__$1 = state_34198;if(cljs.core.truth_(inst_34184))
{var statearr_34209_34234 = state_34198__$1;(statearr_34209_34234[1] = 12);
} else
{var statearr_34210_34235 = state_34198__$1;(statearr_34210_34235[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34199 === 7))
{var inst_34194 = (state_34198[2]);var state_34198__$1 = state_34198;var statearr_34211_34236 = state_34198__$1;(statearr_34211_34236[2] = inst_34194);
(statearr_34211_34236[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34199 === 8))
{var inst_34162 = (state_34198[8]);var inst_34171 = (state_34198[10]);var tmp34208 = inst_34162;var inst_34162__$1 = tmp34208;var inst_34163 = inst_34171;var state_34198__$1 = (function (){var statearr_34212 = state_34198;(statearr_34212[7] = inst_34163);
(statearr_34212[8] = inst_34162__$1);
return statearr_34212;
})();var statearr_34213_34237 = state_34198__$1;(statearr_34213_34237[2] = null);
(statearr_34213_34237[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34199 === 9))
{var inst_34162 = (state_34198[8]);var inst_34176 = cljs.core.vec.call(null,inst_34162);var state_34198__$1 = state_34198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34198__$1,11,out,inst_34176);
} else
{if((state_val_34199 === 10))
{var inst_34182 = (state_34198[2]);var state_34198__$1 = state_34198;var statearr_34214_34238 = state_34198__$1;(statearr_34214_34238[2] = inst_34182);
(statearr_34214_34238[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34199 === 11))
{var inst_34178 = (state_34198[2]);var inst_34179 = (new Array(n));var inst_34162 = inst_34179;var inst_34163 = 0;var state_34198__$1 = (function (){var statearr_34215 = state_34198;(statearr_34215[7] = inst_34163);
(statearr_34215[8] = inst_34162);
(statearr_34215[12] = inst_34178);
return statearr_34215;
})();var statearr_34216_34239 = state_34198__$1;(statearr_34216_34239[2] = null);
(statearr_34216_34239[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34199 === 12))
{var inst_34162 = (state_34198[8]);var inst_34186 = cljs.core.vec.call(null,inst_34162);var state_34198__$1 = state_34198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34198__$1,15,out,inst_34186);
} else
{if((state_val_34199 === 13))
{var state_34198__$1 = state_34198;var statearr_34217_34240 = state_34198__$1;(statearr_34217_34240[2] = null);
(statearr_34217_34240[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34199 === 14))
{var inst_34191 = (state_34198[2]);var inst_34192 = cljs.core.async.close_BANG_.call(null,out);var state_34198__$1 = (function (){var statearr_34218 = state_34198;(statearr_34218[13] = inst_34191);
return statearr_34218;
})();var statearr_34219_34241 = state_34198__$1;(statearr_34219_34241[2] = inst_34192);
(statearr_34219_34241[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34199 === 15))
{var inst_34188 = (state_34198[2]);var state_34198__$1 = state_34198;var statearr_34220_34242 = state_34198__$1;(statearr_34220_34242[2] = inst_34188);
(statearr_34220_34242[1] = 14);
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
var state_machine__17982__auto____0 = (function (){var statearr_34224 = (new Array(14));(statearr_34224[0] = state_machine__17982__auto__);
(statearr_34224[1] = 1);
return statearr_34224;
});
var state_machine__17982__auto____1 = (function (state_34198){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_34198);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e34225){if((e34225 instanceof Object))
{var ex__17985__auto__ = e34225;var statearr_34226_34243 = state_34198;(statearr_34226_34243[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34198);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34225;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34244 = state_34198;
state_34198 = G__34244;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_34198){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_34198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_34227 = f__18052__auto__.call(null);(statearr_34227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___34228);
return statearr_34227;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___34387 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_34357){var state_val_34358 = (state_34357[1]);if((state_val_34358 === 1))
{var inst_34316 = (new Array(0));var inst_34317 = inst_34316;var inst_34318 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_34357__$1 = (function (){var statearr_34359 = state_34357;(statearr_34359[7] = inst_34317);
(statearr_34359[8] = inst_34318);
return statearr_34359;
})();var statearr_34360_34388 = state_34357__$1;(statearr_34360_34388[2] = null);
(statearr_34360_34388[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34358 === 2))
{var state_34357__$1 = state_34357;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34357__$1,4,ch);
} else
{if((state_val_34358 === 3))
{var inst_34355 = (state_34357[2]);var state_34357__$1 = state_34357;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34357__$1,inst_34355);
} else
{if((state_val_34358 === 4))
{var inst_34321 = (state_34357[9]);var inst_34321__$1 = (state_34357[2]);var inst_34322 = (inst_34321__$1 == null);var inst_34323 = cljs.core.not.call(null,inst_34322);var state_34357__$1 = (function (){var statearr_34361 = state_34357;(statearr_34361[9] = inst_34321__$1);
return statearr_34361;
})();if(inst_34323)
{var statearr_34362_34389 = state_34357__$1;(statearr_34362_34389[1] = 5);
} else
{var statearr_34363_34390 = state_34357__$1;(statearr_34363_34390[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34358 === 5))
{var inst_34325 = (state_34357[10]);var inst_34321 = (state_34357[9]);var inst_34318 = (state_34357[8]);var inst_34325__$1 = f.call(null,inst_34321);var inst_34326 = cljs.core._EQ_.call(null,inst_34325__$1,inst_34318);var inst_34327 = cljs.core.keyword_identical_QMARK_.call(null,inst_34318,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_34328 = (inst_34326) || (inst_34327);var state_34357__$1 = (function (){var statearr_34364 = state_34357;(statearr_34364[10] = inst_34325__$1);
return statearr_34364;
})();if(cljs.core.truth_(inst_34328))
{var statearr_34365_34391 = state_34357__$1;(statearr_34365_34391[1] = 8);
} else
{var statearr_34366_34392 = state_34357__$1;(statearr_34366_34392[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34358 === 6))
{var inst_34317 = (state_34357[7]);var inst_34342 = inst_34317.length;var inst_34343 = (inst_34342 > 0);var state_34357__$1 = state_34357;if(cljs.core.truth_(inst_34343))
{var statearr_34368_34393 = state_34357__$1;(statearr_34368_34393[1] = 12);
} else
{var statearr_34369_34394 = state_34357__$1;(statearr_34369_34394[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34358 === 7))
{var inst_34353 = (state_34357[2]);var state_34357__$1 = state_34357;var statearr_34370_34395 = state_34357__$1;(statearr_34370_34395[2] = inst_34353);
(statearr_34370_34395[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34358 === 8))
{var inst_34325 = (state_34357[10]);var inst_34321 = (state_34357[9]);var inst_34317 = (state_34357[7]);var inst_34330 = inst_34317.push(inst_34321);var tmp34367 = inst_34317;var inst_34317__$1 = tmp34367;var inst_34318 = inst_34325;var state_34357__$1 = (function (){var statearr_34371 = state_34357;(statearr_34371[11] = inst_34330);
(statearr_34371[7] = inst_34317__$1);
(statearr_34371[8] = inst_34318);
return statearr_34371;
})();var statearr_34372_34396 = state_34357__$1;(statearr_34372_34396[2] = null);
(statearr_34372_34396[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34358 === 9))
{var inst_34317 = (state_34357[7]);var inst_34333 = cljs.core.vec.call(null,inst_34317);var state_34357__$1 = state_34357;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34357__$1,11,out,inst_34333);
} else
{if((state_val_34358 === 10))
{var inst_34340 = (state_34357[2]);var state_34357__$1 = state_34357;var statearr_34373_34397 = state_34357__$1;(statearr_34373_34397[2] = inst_34340);
(statearr_34373_34397[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34358 === 11))
{var inst_34325 = (state_34357[10]);var inst_34321 = (state_34357[9]);var inst_34335 = (state_34357[2]);var inst_34336 = (new Array(0));var inst_34337 = inst_34336.push(inst_34321);var inst_34317 = inst_34336;var inst_34318 = inst_34325;var state_34357__$1 = (function (){var statearr_34374 = state_34357;(statearr_34374[12] = inst_34335);
(statearr_34374[7] = inst_34317);
(statearr_34374[8] = inst_34318);
(statearr_34374[13] = inst_34337);
return statearr_34374;
})();var statearr_34375_34398 = state_34357__$1;(statearr_34375_34398[2] = null);
(statearr_34375_34398[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34358 === 12))
{var inst_34317 = (state_34357[7]);var inst_34345 = cljs.core.vec.call(null,inst_34317);var state_34357__$1 = state_34357;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34357__$1,15,out,inst_34345);
} else
{if((state_val_34358 === 13))
{var state_34357__$1 = state_34357;var statearr_34376_34399 = state_34357__$1;(statearr_34376_34399[2] = null);
(statearr_34376_34399[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34358 === 14))
{var inst_34350 = (state_34357[2]);var inst_34351 = cljs.core.async.close_BANG_.call(null,out);var state_34357__$1 = (function (){var statearr_34377 = state_34357;(statearr_34377[14] = inst_34350);
return statearr_34377;
})();var statearr_34378_34400 = state_34357__$1;(statearr_34378_34400[2] = inst_34351);
(statearr_34378_34400[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34358 === 15))
{var inst_34347 = (state_34357[2]);var state_34357__$1 = state_34357;var statearr_34379_34401 = state_34357__$1;(statearr_34379_34401[2] = inst_34347);
(statearr_34379_34401[1] = 14);
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
var state_machine__17982__auto____0 = (function (){var statearr_34383 = (new Array(15));(statearr_34383[0] = state_machine__17982__auto__);
(statearr_34383[1] = 1);
return statearr_34383;
});
var state_machine__17982__auto____1 = (function (state_34357){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_34357);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e34384){if((e34384 instanceof Object))
{var ex__17985__auto__ = e34384;var statearr_34385_34402 = state_34357;(statearr_34385_34402[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34357);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34384;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34403 = state_34357;
state_34357 = G__34403;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_34357){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_34357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_34386 = f__18052__auto__.call(null);(statearr_34386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___34387);
return statearr_34386;
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