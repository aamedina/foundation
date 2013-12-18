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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t22669 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22669 = (function (f,fn_handler,meta22670){
this.f = f;
this.fn_handler = fn_handler;
this.meta22670 = meta22670;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22669.cljs$lang$type = true;
cljs.core.async.t22669.cljs$lang$ctorStr = "cljs.core.async/t22669";
cljs.core.async.t22669.cljs$lang$ctorPrWriter = (function (this__8779__auto__,writer__8780__auto__,opt__8781__auto__){return cljs.core._write.call(null,writer__8780__auto__,"cljs.core.async/t22669");
});
cljs.core.async.t22669.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22669.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t22669.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t22669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22671){var self__ = this;
var _22671__$1 = this;return self__.meta22670;
});
cljs.core.async.t22669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22671,meta22670__$1){var self__ = this;
var _22671__$1 = this;return (new cljs.core.async.t22669(self__.f,self__.fn_handler,meta22670__$1));
});
cljs.core.async.__GT_t22669 = (function __GT_t22669(f__$1,fn_handler__$1,meta22670){return (new cljs.core.async.t22669(f__$1,fn_handler__$1,meta22670));
});
}
return (new cljs.core.async.t22669(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__22673 = buff;if(G__22673)
{var bit__8861__auto__ = null;if(cljs.core.truth_((function (){var or__8230__auto__ = bit__8861__auto__;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
} else
{return G__22673.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__22673.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22673);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22673);
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
{var val_22674 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_22674);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_22674);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__8218__auto__ = ret;if(cljs.core.truth_(and__8218__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__8218__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9058__auto___22675 = n;var x_22676 = 0;while(true){
if((x_22676 < n__9058__auto___22675))
{(a[x_22676] = 0);
{
var G__22677 = (x_22676 + 1);
x_22676 = G__22677;
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
var G__22678 = (i + 1);
i = G__22678;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t22682 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22682 = (function (flag,alt_flag,meta22683){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22683 = meta22683;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22682.cljs$lang$type = true;
cljs.core.async.t22682.cljs$lang$ctorStr = "cljs.core.async/t22682";
cljs.core.async.t22682.cljs$lang$ctorPrWriter = (function (this__8779__auto__,writer__8780__auto__,opt__8781__auto__){return cljs.core._write.call(null,writer__8780__auto__,"cljs.core.async/t22682");
});
cljs.core.async.t22682.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22682.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t22682.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t22682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22684){var self__ = this;
var _22684__$1 = this;return self__.meta22683;
});
cljs.core.async.t22682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22684,meta22683__$1){var self__ = this;
var _22684__$1 = this;return (new cljs.core.async.t22682(self__.flag,self__.alt_flag,meta22683__$1));
});
cljs.core.async.__GT_t22682 = (function __GT_t22682(flag__$1,alt_flag__$1,meta22683){return (new cljs.core.async.t22682(flag__$1,alt_flag__$1,meta22683));
});
}
return (new cljs.core.async.t22682(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t22688 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22688 = (function (cb,flag,alt_handler,meta22689){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22689 = meta22689;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22688.cljs$lang$type = true;
cljs.core.async.t22688.cljs$lang$ctorStr = "cljs.core.async/t22688";
cljs.core.async.t22688.cljs$lang$ctorPrWriter = (function (this__8779__auto__,writer__8780__auto__,opt__8781__auto__){return cljs.core._write.call(null,writer__8780__auto__,"cljs.core.async/t22688");
});
cljs.core.async.t22688.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22688.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t22688.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t22688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22690){var self__ = this;
var _22690__$1 = this;return self__.meta22689;
});
cljs.core.async.t22688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22690,meta22689__$1){var self__ = this;
var _22690__$1 = this;return (new cljs.core.async.t22688(self__.cb,self__.flag,self__.alt_handler,meta22689__$1));
});
cljs.core.async.__GT_t22688 = (function __GT_t22688(cb__$1,flag__$1,alt_handler__$1,meta22689){return (new cljs.core.async.t22688(cb__$1,flag__$1,alt_handler__$1,meta22689));
});
}
return (new cljs.core.async.t22688(cb,flag,alt_handler,null));
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
return (function (p1__22691_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22691_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8230__auto__ = wport;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__22692 = (i + 1);
i = G__22692;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__8230__auto__ = ret;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__8218__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__8218__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__8218__auto__;
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
var alts_BANG___delegate = function (ports,p__22693){var map__22695 = p__22693;var map__22695__$1 = ((cljs.core.seq_QMARK_.call(null,map__22695))?cljs.core.apply.call(null,cljs.core.hash_map,map__22695):map__22695);var opts = map__22695__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__22693 = null;if (arguments.length > 1) {
  p__22693 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__22693);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22696){
var ports = cljs.core.first(arglist__22696);
var p__22693 = cljs.core.rest(arglist__22696);
return alts_BANG___delegate(ports,p__22693);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t22704 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22704 = (function (ch,f,map_LT_,meta22705){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22705 = meta22705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22704.cljs$lang$type = true;
cljs.core.async.t22704.cljs$lang$ctorStr = "cljs.core.async/t22704";
cljs.core.async.t22704.cljs$lang$ctorPrWriter = (function (this__8779__auto__,writer__8780__auto__,opt__8781__auto__){return cljs.core._write.call(null,writer__8780__auto__,"cljs.core.async/t22704");
});
cljs.core.async.t22704.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22704.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t22704.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22704.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t22707 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22707 = (function (fn1,_,meta22705,ch,f,map_LT_,meta22708){
this.fn1 = fn1;
this._ = _;
this.meta22705 = meta22705;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22708 = meta22708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22707.cljs$lang$type = true;
cljs.core.async.t22707.cljs$lang$ctorStr = "cljs.core.async/t22707";
cljs.core.async.t22707.cljs$lang$ctorPrWriter = (function (this__8779__auto__,writer__8780__auto__,opt__8781__auto__){return cljs.core._write.call(null,writer__8780__auto__,"cljs.core.async/t22707");
});
cljs.core.async.t22707.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t22707.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t22707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__22697_SHARP_){return f1.call(null,(((p1__22697_SHARP_ == null))?null:self__.f.call(null,p1__22697_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t22707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22709){var self__ = this;
var _22709__$1 = this;return self__.meta22708;
});
cljs.core.async.t22707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22709,meta22708__$1){var self__ = this;
var _22709__$1 = this;return (new cljs.core.async.t22707(self__.fn1,self__._,self__.meta22705,self__.ch,self__.f,self__.map_LT_,meta22708__$1));
});
cljs.core.async.__GT_t22707 = (function __GT_t22707(fn1__$1,___$2,meta22705__$1,ch__$2,f__$2,map_LT___$2,meta22708){return (new cljs.core.async.t22707(fn1__$1,___$2,meta22705__$1,ch__$2,f__$2,map_LT___$2,meta22708));
});
}
return (new cljs.core.async.t22707(fn1,___$1,self__.meta22705,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__8218__auto__ = ret;if(cljs.core.truth_(and__8218__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__8218__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t22704.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22704.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t22704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22706){var self__ = this;
var _22706__$1 = this;return self__.meta22705;
});
cljs.core.async.t22704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22706,meta22705__$1){var self__ = this;
var _22706__$1 = this;return (new cljs.core.async.t22704(self__.ch,self__.f,self__.map_LT_,meta22705__$1));
});
cljs.core.async.__GT_t22704 = (function __GT_t22704(ch__$1,f__$1,map_LT___$1,meta22705){return (new cljs.core.async.t22704(ch__$1,f__$1,map_LT___$1,meta22705));
});
}
return (new cljs.core.async.t22704(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t22713 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22713 = (function (ch,f,map_GT_,meta22714){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22714 = meta22714;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22713.cljs$lang$type = true;
cljs.core.async.t22713.cljs$lang$ctorStr = "cljs.core.async/t22713";
cljs.core.async.t22713.cljs$lang$ctorPrWriter = (function (this__8779__auto__,writer__8780__auto__,opt__8781__auto__){return cljs.core._write.call(null,writer__8780__auto__,"cljs.core.async/t22713");
});
cljs.core.async.t22713.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22713.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t22713.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22713.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t22713.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22713.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t22713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22715){var self__ = this;
var _22715__$1 = this;return self__.meta22714;
});
cljs.core.async.t22713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22715,meta22714__$1){var self__ = this;
var _22715__$1 = this;return (new cljs.core.async.t22713(self__.ch,self__.f,self__.map_GT_,meta22714__$1));
});
cljs.core.async.__GT_t22713 = (function __GT_t22713(ch__$1,f__$1,map_GT___$1,meta22714){return (new cljs.core.async.t22713(ch__$1,f__$1,map_GT___$1,meta22714));
});
}
return (new cljs.core.async.t22713(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t22719 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22719 = (function (ch,p,filter_GT_,meta22720){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22720 = meta22720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22719.cljs$lang$type = true;
cljs.core.async.t22719.cljs$lang$ctorStr = "cljs.core.async/t22719";
cljs.core.async.t22719.cljs$lang$ctorPrWriter = (function (this__8779__auto__,writer__8780__auto__,opt__8781__auto__){return cljs.core._write.call(null,writer__8780__auto__,"cljs.core.async/t22719");
});
cljs.core.async.t22719.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22719.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t22719.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22719.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t22719.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22719.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t22719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22721){var self__ = this;
var _22721__$1 = this;return self__.meta22720;
});
cljs.core.async.t22719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22721,meta22720__$1){var self__ = this;
var _22721__$1 = this;return (new cljs.core.async.t22719(self__.ch,self__.p,self__.filter_GT_,meta22720__$1));
});
cljs.core.async.__GT_t22719 = (function __GT_t22719(ch__$1,p__$1,filter_GT___$1,meta22720){return (new cljs.core.async.t22719(ch__$1,p__$1,filter_GT___$1,meta22720));
});
}
return (new cljs.core.async.t22719(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___22804 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_22783){var state_val_22784 = (state_22783[1]);if((state_val_22784 === 1))
{var state_22783__$1 = state_22783;var statearr_22785_22805 = state_22783__$1;(statearr_22785_22805[2] = null);
(statearr_22785_22805[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22784 === 2))
{var state_22783__$1 = state_22783;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22783__$1,4,ch);
} else
{if((state_val_22784 === 3))
{var inst_22781 = (state_22783[2]);var state_22783__$1 = state_22783;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22783__$1,inst_22781);
} else
{if((state_val_22784 === 4))
{var inst_22765 = (state_22783[7]);var inst_22765__$1 = (state_22783[2]);var inst_22766 = (inst_22765__$1 == null);var state_22783__$1 = (function (){var statearr_22786 = state_22783;(statearr_22786[7] = inst_22765__$1);
return statearr_22786;
})();if(cljs.core.truth_(inst_22766))
{var statearr_22787_22806 = state_22783__$1;(statearr_22787_22806[1] = 5);
} else
{var statearr_22788_22807 = state_22783__$1;(statearr_22788_22807[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22784 === 5))
{var inst_22768 = cljs.core.async.close_BANG_.call(null,out);var state_22783__$1 = state_22783;var statearr_22789_22808 = state_22783__$1;(statearr_22789_22808[2] = inst_22768);
(statearr_22789_22808[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22784 === 6))
{var inst_22765 = (state_22783[7]);var inst_22770 = p.call(null,inst_22765);var state_22783__$1 = state_22783;if(cljs.core.truth_(inst_22770))
{var statearr_22790_22809 = state_22783__$1;(statearr_22790_22809[1] = 8);
} else
{var statearr_22791_22810 = state_22783__$1;(statearr_22791_22810[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22784 === 7))
{var inst_22779 = (state_22783[2]);var state_22783__$1 = state_22783;var statearr_22792_22811 = state_22783__$1;(statearr_22792_22811[2] = inst_22779);
(statearr_22792_22811[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22784 === 8))
{var inst_22765 = (state_22783[7]);var state_22783__$1 = state_22783;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22783__$1,11,out,inst_22765);
} else
{if((state_val_22784 === 9))
{var state_22783__$1 = state_22783;var statearr_22793_22812 = state_22783__$1;(statearr_22793_22812[2] = null);
(statearr_22793_22812[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22784 === 10))
{var inst_22776 = (state_22783[2]);var state_22783__$1 = (function (){var statearr_22794 = state_22783;(statearr_22794[8] = inst_22776);
return statearr_22794;
})();var statearr_22795_22813 = state_22783__$1;(statearr_22795_22813[2] = null);
(statearr_22795_22813[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22784 === 11))
{var inst_22773 = (state_22783[2]);var state_22783__$1 = state_22783;var statearr_22796_22814 = state_22783__$1;(statearr_22796_22814[2] = inst_22773);
(statearr_22796_22814[1] = 10);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_22800 = [null,null,null,null,null,null,null,null,null];(statearr_22800[0] = state_machine__12118__auto__);
(statearr_22800[1] = 1);
return statearr_22800;
});
var state_machine__12118__auto____1 = (function (state_22783){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_22783);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e22801){if((e22801 instanceof Object))
{var ex__12121__auto__ = e22801;var statearr_22802_22815 = state_22783;(statearr_22802_22815[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22783);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22801;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22816 = state_22783;
state_22783 = G__22816;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_22783){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_22783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_22803 = f__12188__auto__.call(null);(statearr_22803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___22804);
return statearr_22803;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_22968){var state_val_22969 = (state_22968[1]);if((state_val_22969 === 1))
{var state_22968__$1 = state_22968;var statearr_22970_23007 = state_22968__$1;(statearr_22970_23007[2] = null);
(statearr_22970_23007[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22969 === 2))
{var state_22968__$1 = state_22968;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22968__$1,4,in$);
} else
{if((state_val_22969 === 3))
{var inst_22966 = (state_22968[2]);var state_22968__$1 = state_22968;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22968__$1,inst_22966);
} else
{if((state_val_22969 === 4))
{var inst_22914 = (state_22968[7]);var inst_22914__$1 = (state_22968[2]);var inst_22915 = (inst_22914__$1 == null);var state_22968__$1 = (function (){var statearr_22971 = state_22968;(statearr_22971[7] = inst_22914__$1);
return statearr_22971;
})();if(cljs.core.truth_(inst_22915))
{var statearr_22972_23008 = state_22968__$1;(statearr_22972_23008[1] = 5);
} else
{var statearr_22973_23009 = state_22968__$1;(statearr_22973_23009[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22969 === 5))
{var inst_22917 = cljs.core.async.close_BANG_.call(null,out);var state_22968__$1 = state_22968;var statearr_22974_23010 = state_22968__$1;(statearr_22974_23010[2] = inst_22917);
(statearr_22974_23010[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22969 === 6))
{var inst_22914 = (state_22968[7]);var inst_22919 = f.call(null,inst_22914);var inst_22924 = cljs.core.seq.call(null,inst_22919);var inst_22925 = inst_22924;var inst_22926 = null;var inst_22927 = 0;var inst_22928 = 0;var state_22968__$1 = (function (){var statearr_22975 = state_22968;(statearr_22975[8] = inst_22925);
(statearr_22975[9] = inst_22928);
(statearr_22975[10] = inst_22926);
(statearr_22975[11] = inst_22927);
return statearr_22975;
})();var statearr_22976_23011 = state_22968__$1;(statearr_22976_23011[2] = null);
(statearr_22976_23011[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22969 === 7))
{var inst_22964 = (state_22968[2]);var state_22968__$1 = state_22968;var statearr_22977_23012 = state_22968__$1;(statearr_22977_23012[2] = inst_22964);
(statearr_22977_23012[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22969 === 8))
{var inst_22928 = (state_22968[9]);var inst_22927 = (state_22968[11]);var inst_22930 = (inst_22928 < inst_22927);var inst_22931 = inst_22930;var state_22968__$1 = state_22968;if(cljs.core.truth_(inst_22931))
{var statearr_22978_23013 = state_22968__$1;(statearr_22978_23013[1] = 10);
} else
{var statearr_22979_23014 = state_22968__$1;(statearr_22979_23014[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22969 === 9))
{var inst_22961 = (state_22968[2]);var state_22968__$1 = (function (){var statearr_22980 = state_22968;(statearr_22980[12] = inst_22961);
return statearr_22980;
})();var statearr_22981_23015 = state_22968__$1;(statearr_22981_23015[2] = null);
(statearr_22981_23015[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22969 === 10))
{var inst_22928 = (state_22968[9]);var inst_22926 = (state_22968[10]);var inst_22933 = cljs.core._nth.call(null,inst_22926,inst_22928);var state_22968__$1 = state_22968;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22968__$1,13,out,inst_22933);
} else
{if((state_val_22969 === 11))
{var inst_22925 = (state_22968[8]);var inst_22939 = (state_22968[13]);var inst_22939__$1 = cljs.core.seq.call(null,inst_22925);var state_22968__$1 = (function (){var statearr_22985 = state_22968;(statearr_22985[13] = inst_22939__$1);
return statearr_22985;
})();if(inst_22939__$1)
{var statearr_22986_23016 = state_22968__$1;(statearr_22986_23016[1] = 14);
} else
{var statearr_22987_23017 = state_22968__$1;(statearr_22987_23017[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22969 === 12))
{var inst_22959 = (state_22968[2]);var state_22968__$1 = state_22968;var statearr_22988_23018 = state_22968__$1;(statearr_22988_23018[2] = inst_22959);
(statearr_22988_23018[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22969 === 13))
{var inst_22925 = (state_22968[8]);var inst_22928 = (state_22968[9]);var inst_22926 = (state_22968[10]);var inst_22927 = (state_22968[11]);var inst_22935 = (state_22968[2]);var inst_22936 = (inst_22928 + 1);var tmp22982 = inst_22925;var tmp22983 = inst_22926;var tmp22984 = inst_22927;var inst_22925__$1 = tmp22982;var inst_22926__$1 = tmp22983;var inst_22927__$1 = tmp22984;var inst_22928__$1 = inst_22936;var state_22968__$1 = (function (){var statearr_22989 = state_22968;(statearr_22989[8] = inst_22925__$1);
(statearr_22989[9] = inst_22928__$1);
(statearr_22989[10] = inst_22926__$1);
(statearr_22989[11] = inst_22927__$1);
(statearr_22989[14] = inst_22935);
return statearr_22989;
})();var statearr_22990_23019 = state_22968__$1;(statearr_22990_23019[2] = null);
(statearr_22990_23019[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22969 === 14))
{var inst_22939 = (state_22968[13]);var inst_22941 = cljs.core.chunked_seq_QMARK_.call(null,inst_22939);var state_22968__$1 = state_22968;if(inst_22941)
{var statearr_22991_23020 = state_22968__$1;(statearr_22991_23020[1] = 17);
} else
{var statearr_22992_23021 = state_22968__$1;(statearr_22992_23021[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22969 === 15))
{var state_22968__$1 = state_22968;var statearr_22993_23022 = state_22968__$1;(statearr_22993_23022[2] = null);
(statearr_22993_23022[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22969 === 16))
{var inst_22957 = (state_22968[2]);var state_22968__$1 = state_22968;var statearr_22994_23023 = state_22968__$1;(statearr_22994_23023[2] = inst_22957);
(statearr_22994_23023[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22969 === 17))
{var inst_22939 = (state_22968[13]);var inst_22943 = cljs.core.chunk_first.call(null,inst_22939);var inst_22944 = cljs.core.chunk_rest.call(null,inst_22939);var inst_22945 = cljs.core.count.call(null,inst_22943);var inst_22925 = inst_22944;var inst_22926 = inst_22943;var inst_22927 = inst_22945;var inst_22928 = 0;var state_22968__$1 = (function (){var statearr_22995 = state_22968;(statearr_22995[8] = inst_22925);
(statearr_22995[9] = inst_22928);
(statearr_22995[10] = inst_22926);
(statearr_22995[11] = inst_22927);
return statearr_22995;
})();var statearr_22996_23024 = state_22968__$1;(statearr_22996_23024[2] = null);
(statearr_22996_23024[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22969 === 18))
{var inst_22939 = (state_22968[13]);var inst_22948 = cljs.core.first.call(null,inst_22939);var state_22968__$1 = state_22968;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22968__$1,20,out,inst_22948);
} else
{if((state_val_22969 === 19))
{var inst_22954 = (state_22968[2]);var state_22968__$1 = state_22968;var statearr_22997_23025 = state_22968__$1;(statearr_22997_23025[2] = inst_22954);
(statearr_22997_23025[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22969 === 20))
{var inst_22939 = (state_22968[13]);var inst_22950 = (state_22968[2]);var inst_22951 = cljs.core.next.call(null,inst_22939);var inst_22925 = inst_22951;var inst_22926 = null;var inst_22927 = 0;var inst_22928 = 0;var state_22968__$1 = (function (){var statearr_22998 = state_22968;(statearr_22998[15] = inst_22950);
(statearr_22998[8] = inst_22925);
(statearr_22998[9] = inst_22928);
(statearr_22998[10] = inst_22926);
(statearr_22998[11] = inst_22927);
return statearr_22998;
})();var statearr_22999_23026 = state_22968__$1;(statearr_22999_23026[2] = null);
(statearr_22999_23026[1] = 8);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_23003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23003[0] = state_machine__12118__auto__);
(statearr_23003[1] = 1);
return statearr_23003;
});
var state_machine__12118__auto____1 = (function (state_22968){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_22968);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e23004){if((e23004 instanceof Object))
{var ex__12121__auto__ = e23004;var statearr_23005_23027 = state_22968;(statearr_23005_23027[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22968);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23004;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23028 = state_22968;
state_22968 = G__23028;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_22968){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_22968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_23006 = f__12188__auto__.call(null);(statearr_23006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_23006;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12187__auto___23109 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_23088){var state_val_23089 = (state_23088[1]);if((state_val_23089 === 1))
{var state_23088__$1 = state_23088;var statearr_23090_23110 = state_23088__$1;(statearr_23090_23110[2] = null);
(statearr_23090_23110[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23089 === 2))
{var state_23088__$1 = state_23088;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23088__$1,4,from);
} else
{if((state_val_23089 === 3))
{var inst_23086 = (state_23088[2]);var state_23088__$1 = state_23088;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23088__$1,inst_23086);
} else
{if((state_val_23089 === 4))
{var inst_23071 = (state_23088[7]);var inst_23071__$1 = (state_23088[2]);var inst_23072 = (inst_23071__$1 == null);var state_23088__$1 = (function (){var statearr_23091 = state_23088;(statearr_23091[7] = inst_23071__$1);
return statearr_23091;
})();if(cljs.core.truth_(inst_23072))
{var statearr_23092_23111 = state_23088__$1;(statearr_23092_23111[1] = 5);
} else
{var statearr_23093_23112 = state_23088__$1;(statearr_23093_23112[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23089 === 5))
{var state_23088__$1 = state_23088;if(cljs.core.truth_(close_QMARK_))
{var statearr_23094_23113 = state_23088__$1;(statearr_23094_23113[1] = 8);
} else
{var statearr_23095_23114 = state_23088__$1;(statearr_23095_23114[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23089 === 6))
{var inst_23071 = (state_23088[7]);var state_23088__$1 = state_23088;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23088__$1,11,to,inst_23071);
} else
{if((state_val_23089 === 7))
{var inst_23084 = (state_23088[2]);var state_23088__$1 = state_23088;var statearr_23096_23115 = state_23088__$1;(statearr_23096_23115[2] = inst_23084);
(statearr_23096_23115[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23089 === 8))
{var inst_23075 = cljs.core.async.close_BANG_.call(null,to);var state_23088__$1 = state_23088;var statearr_23097_23116 = state_23088__$1;(statearr_23097_23116[2] = inst_23075);
(statearr_23097_23116[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23089 === 9))
{var state_23088__$1 = state_23088;var statearr_23098_23117 = state_23088__$1;(statearr_23098_23117[2] = null);
(statearr_23098_23117[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23089 === 10))
{var inst_23078 = (state_23088[2]);var state_23088__$1 = state_23088;var statearr_23099_23118 = state_23088__$1;(statearr_23099_23118[2] = inst_23078);
(statearr_23099_23118[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23089 === 11))
{var inst_23081 = (state_23088[2]);var state_23088__$1 = (function (){var statearr_23100 = state_23088;(statearr_23100[8] = inst_23081);
return statearr_23100;
})();var statearr_23101_23119 = state_23088__$1;(statearr_23101_23119[2] = null);
(statearr_23101_23119[1] = 2);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_23105 = [null,null,null,null,null,null,null,null,null];(statearr_23105[0] = state_machine__12118__auto__);
(statearr_23105[1] = 1);
return statearr_23105;
});
var state_machine__12118__auto____1 = (function (state_23088){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_23088);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e23106){if((e23106 instanceof Object))
{var ex__12121__auto__ = e23106;var statearr_23107_23120 = state_23088;(statearr_23107_23120[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23088);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23106;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23121 = state_23088;
state_23088 = G__23121;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_23088){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_23088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_23108 = f__12188__auto__.call(null);(statearr_23108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___23109);
return statearr_23108;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12187__auto___23208 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_23186){var state_val_23187 = (state_23186[1]);if((state_val_23187 === 1))
{var state_23186__$1 = state_23186;var statearr_23188_23209 = state_23186__$1;(statearr_23188_23209[2] = null);
(statearr_23188_23209[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23187 === 2))
{var state_23186__$1 = state_23186;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23186__$1,4,ch);
} else
{if((state_val_23187 === 3))
{var inst_23184 = (state_23186[2]);var state_23186__$1 = state_23186;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23186__$1,inst_23184);
} else
{if((state_val_23187 === 4))
{var inst_23167 = (state_23186[7]);var inst_23167__$1 = (state_23186[2]);var inst_23168 = (inst_23167__$1 == null);var state_23186__$1 = (function (){var statearr_23189 = state_23186;(statearr_23189[7] = inst_23167__$1);
return statearr_23189;
})();if(cljs.core.truth_(inst_23168))
{var statearr_23190_23210 = state_23186__$1;(statearr_23190_23210[1] = 5);
} else
{var statearr_23191_23211 = state_23186__$1;(statearr_23191_23211[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23187 === 5))
{var inst_23170 = cljs.core.async.close_BANG_.call(null,tc);var inst_23171 = cljs.core.async.close_BANG_.call(null,fc);var state_23186__$1 = (function (){var statearr_23192 = state_23186;(statearr_23192[8] = inst_23170);
return statearr_23192;
})();var statearr_23193_23212 = state_23186__$1;(statearr_23193_23212[2] = inst_23171);
(statearr_23193_23212[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23187 === 6))
{var inst_23167 = (state_23186[7]);var inst_23173 = p.call(null,inst_23167);var state_23186__$1 = state_23186;if(cljs.core.truth_(inst_23173))
{var statearr_23194_23213 = state_23186__$1;(statearr_23194_23213[1] = 9);
} else
{var statearr_23195_23214 = state_23186__$1;(statearr_23195_23214[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23187 === 7))
{var inst_23182 = (state_23186[2]);var state_23186__$1 = state_23186;var statearr_23196_23215 = state_23186__$1;(statearr_23196_23215[2] = inst_23182);
(statearr_23196_23215[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23187 === 8))
{var inst_23179 = (state_23186[2]);var state_23186__$1 = (function (){var statearr_23197 = state_23186;(statearr_23197[9] = inst_23179);
return statearr_23197;
})();var statearr_23198_23216 = state_23186__$1;(statearr_23198_23216[2] = null);
(statearr_23198_23216[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23187 === 9))
{var state_23186__$1 = state_23186;var statearr_23199_23217 = state_23186__$1;(statearr_23199_23217[2] = tc);
(statearr_23199_23217[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23187 === 10))
{var state_23186__$1 = state_23186;var statearr_23200_23218 = state_23186__$1;(statearr_23200_23218[2] = fc);
(statearr_23200_23218[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23187 === 11))
{var inst_23167 = (state_23186[7]);var inst_23177 = (state_23186[2]);var state_23186__$1 = state_23186;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23186__$1,8,inst_23177,inst_23167);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_23204 = [null,null,null,null,null,null,null,null,null,null];(statearr_23204[0] = state_machine__12118__auto__);
(statearr_23204[1] = 1);
return statearr_23204;
});
var state_machine__12118__auto____1 = (function (state_23186){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_23186);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e23205){if((e23205 instanceof Object))
{var ex__12121__auto__ = e23205;var statearr_23206_23219 = state_23186;(statearr_23206_23219[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23186);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23205;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23220 = state_23186;
state_23186 = G__23220;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_23186){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_23186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_23207 = f__12188__auto__.call(null);(statearr_23207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___23208);
return statearr_23207;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_23267){var state_val_23268 = (state_23267[1]);if((state_val_23268 === 7))
{var inst_23263 = (state_23267[2]);var state_23267__$1 = state_23267;var statearr_23269_23285 = state_23267__$1;(statearr_23269_23285[2] = inst_23263);
(statearr_23269_23285[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23268 === 6))
{var inst_23253 = (state_23267[7]);var inst_23256 = (state_23267[8]);var inst_23260 = f.call(null,inst_23253,inst_23256);var inst_23253__$1 = inst_23260;var state_23267__$1 = (function (){var statearr_23270 = state_23267;(statearr_23270[7] = inst_23253__$1);
return statearr_23270;
})();var statearr_23271_23286 = state_23267__$1;(statearr_23271_23286[2] = null);
(statearr_23271_23286[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23268 === 5))
{var inst_23253 = (state_23267[7]);var state_23267__$1 = state_23267;var statearr_23272_23287 = state_23267__$1;(statearr_23272_23287[2] = inst_23253);
(statearr_23272_23287[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23268 === 4))
{var inst_23256 = (state_23267[8]);var inst_23256__$1 = (state_23267[2]);var inst_23257 = (inst_23256__$1 == null);var state_23267__$1 = (function (){var statearr_23273 = state_23267;(statearr_23273[8] = inst_23256__$1);
return statearr_23273;
})();if(cljs.core.truth_(inst_23257))
{var statearr_23274_23288 = state_23267__$1;(statearr_23274_23288[1] = 5);
} else
{var statearr_23275_23289 = state_23267__$1;(statearr_23275_23289[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23268 === 3))
{var inst_23265 = (state_23267[2]);var state_23267__$1 = state_23267;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23267__$1,inst_23265);
} else
{if((state_val_23268 === 2))
{var state_23267__$1 = state_23267;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23267__$1,4,ch);
} else
{if((state_val_23268 === 1))
{var inst_23253 = init;var state_23267__$1 = (function (){var statearr_23276 = state_23267;(statearr_23276[7] = inst_23253);
return statearr_23276;
})();var statearr_23277_23290 = state_23267__$1;(statearr_23277_23290[2] = null);
(statearr_23277_23290[1] = 2);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_23281 = [null,null,null,null,null,null,null,null,null];(statearr_23281[0] = state_machine__12118__auto__);
(statearr_23281[1] = 1);
return statearr_23281;
});
var state_machine__12118__auto____1 = (function (state_23267){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_23267);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e23282){if((e23282 instanceof Object))
{var ex__12121__auto__ = e23282;var statearr_23283_23291 = state_23267;(statearr_23283_23291[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23267);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23282;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23292 = state_23267;
state_23267 = G__23292;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_23267){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_23267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_23284 = f__12188__auto__.call(null);(statearr_23284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_23284;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_23354){var state_val_23355 = (state_23354[1]);if((state_val_23355 === 1))
{var inst_23334 = cljs.core.seq.call(null,coll);var inst_23335 = inst_23334;var state_23354__$1 = (function (){var statearr_23356 = state_23354;(statearr_23356[7] = inst_23335);
return statearr_23356;
})();var statearr_23357_23375 = state_23354__$1;(statearr_23357_23375[2] = null);
(statearr_23357_23375[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23355 === 2))
{var inst_23335 = (state_23354[7]);var state_23354__$1 = state_23354;if(cljs.core.truth_(inst_23335))
{var statearr_23358_23376 = state_23354__$1;(statearr_23358_23376[1] = 4);
} else
{var statearr_23359_23377 = state_23354__$1;(statearr_23359_23377[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23355 === 3))
{var inst_23352 = (state_23354[2]);var state_23354__$1 = state_23354;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23354__$1,inst_23352);
} else
{if((state_val_23355 === 4))
{var inst_23335 = (state_23354[7]);var inst_23338 = cljs.core.first.call(null,inst_23335);var state_23354__$1 = state_23354;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23354__$1,7,ch,inst_23338);
} else
{if((state_val_23355 === 5))
{var state_23354__$1 = state_23354;if(cljs.core.truth_(close_QMARK_))
{var statearr_23360_23378 = state_23354__$1;(statearr_23360_23378[1] = 8);
} else
{var statearr_23361_23379 = state_23354__$1;(statearr_23361_23379[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23355 === 6))
{var inst_23350 = (state_23354[2]);var state_23354__$1 = state_23354;var statearr_23362_23380 = state_23354__$1;(statearr_23362_23380[2] = inst_23350);
(statearr_23362_23380[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23355 === 7))
{var inst_23335 = (state_23354[7]);var inst_23340 = (state_23354[2]);var inst_23341 = cljs.core.next.call(null,inst_23335);var inst_23335__$1 = inst_23341;var state_23354__$1 = (function (){var statearr_23363 = state_23354;(statearr_23363[8] = inst_23340);
(statearr_23363[7] = inst_23335__$1);
return statearr_23363;
})();var statearr_23364_23381 = state_23354__$1;(statearr_23364_23381[2] = null);
(statearr_23364_23381[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23355 === 8))
{var inst_23345 = cljs.core.async.close_BANG_.call(null,ch);var state_23354__$1 = state_23354;var statearr_23365_23382 = state_23354__$1;(statearr_23365_23382[2] = inst_23345);
(statearr_23365_23382[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23355 === 9))
{var state_23354__$1 = state_23354;var statearr_23366_23383 = state_23354__$1;(statearr_23366_23383[2] = null);
(statearr_23366_23383[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23355 === 10))
{var inst_23348 = (state_23354[2]);var state_23354__$1 = state_23354;var statearr_23367_23384 = state_23354__$1;(statearr_23367_23384[2] = inst_23348);
(statearr_23367_23384[1] = 6);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_23371 = [null,null,null,null,null,null,null,null,null];(statearr_23371[0] = state_machine__12118__auto__);
(statearr_23371[1] = 1);
return statearr_23371;
});
var state_machine__12118__auto____1 = (function (state_23354){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_23354);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e23372){if((e23372 instanceof Object))
{var ex__12121__auto__ = e23372;var statearr_23373_23385 = state_23354;(statearr_23373_23385[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23354);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23372;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23386 = state_23354;
state_23354 = G__23386;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_23354){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_23354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_23374 = f__12188__auto__.call(null);(statearr_23374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_23374;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
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
cljs.core.async.Mux = (function (){var obj23388 = {};return obj23388;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__8218__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj23390 = {};return obj23390;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__8218__auto__ = m;if(and__8218__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__8218__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8838__auto__ = (((m == null))?null:m);return (function (){var or__8230__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__8218__auto__ = m;if(and__8218__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__8218__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8838__auto__ = (((m == null))?null:m);return (function (){var or__8230__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__8218__auto__ = m;if(and__8218__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__8218__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8838__auto__ = (((m == null))?null:m);return (function (){var or__8230__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t23614 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23614 = (function (cs,ch,mult,meta23615){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23615 = meta23615;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23614.cljs$lang$type = true;
cljs.core.async.t23614.cljs$lang$ctorStr = "cljs.core.async/t23614";
cljs.core.async.t23614.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8779__auto__,writer__8780__auto__,opt__8781__auto__){return cljs.core._write.call(null,writer__8780__auto__,"cljs.core.async/t23614");
});})(cs))
;
cljs.core.async.t23614.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t23614.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t23614.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t23614.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t23614.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23614.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t23614.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23616){var self__ = this;
var _23616__$1 = this;return self__.meta23615;
});})(cs))
;
cljs.core.async.t23614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23616,meta23615__$1){var self__ = this;
var _23616__$1 = this;return (new cljs.core.async.t23614(self__.cs,self__.ch,self__.mult,meta23615__$1));
});})(cs))
;
cljs.core.async.__GT_t23614 = ((function (cs){
return (function __GT_t23614(cs__$1,ch__$1,mult__$1,meta23615){return (new cljs.core.async.t23614(cs__$1,ch__$1,mult__$1,meta23615));
});})(cs))
;
}
return (new cljs.core.async.t23614(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12187__auto___23837 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_23751){var state_val_23752 = (state_23751[1]);if((state_val_23752 === 32))
{var inst_23619 = (state_23751[7]);var inst_23695 = (state_23751[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23751,31,Object,null,30);var inst_23702 = cljs.core.async.put_BANG_.call(null,inst_23695,inst_23619,done);var state_23751__$1 = state_23751;var statearr_23753_23838 = state_23751__$1;(statearr_23753_23838[2] = inst_23702);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23751__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 1))
{var state_23751__$1 = state_23751;var statearr_23754_23839 = state_23751__$1;(statearr_23754_23839[2] = null);
(statearr_23754_23839[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 33))
{var inst_23708 = (state_23751[9]);var inst_23710 = cljs.core.chunked_seq_QMARK_.call(null,inst_23708);var state_23751__$1 = state_23751;if(inst_23710)
{var statearr_23755_23840 = state_23751__$1;(statearr_23755_23840[1] = 36);
} else
{var statearr_23756_23841 = state_23751__$1;(statearr_23756_23841[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 2))
{var state_23751__$1 = state_23751;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23751__$1,4,ch);
} else
{if((state_val_23752 === 34))
{var state_23751__$1 = state_23751;var statearr_23757_23842 = state_23751__$1;(statearr_23757_23842[2] = null);
(statearr_23757_23842[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 3))
{var inst_23749 = (state_23751[2]);var state_23751__$1 = state_23751;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23751__$1,inst_23749);
} else
{if((state_val_23752 === 35))
{var inst_23733 = (state_23751[2]);var state_23751__$1 = state_23751;var statearr_23758_23843 = state_23751__$1;(statearr_23758_23843[2] = inst_23733);
(statearr_23758_23843[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 4))
{var inst_23619 = (state_23751[7]);var inst_23619__$1 = (state_23751[2]);var inst_23620 = (inst_23619__$1 == null);var state_23751__$1 = (function (){var statearr_23759 = state_23751;(statearr_23759[7] = inst_23619__$1);
return statearr_23759;
})();if(cljs.core.truth_(inst_23620))
{var statearr_23760_23844 = state_23751__$1;(statearr_23760_23844[1] = 5);
} else
{var statearr_23761_23845 = state_23751__$1;(statearr_23761_23845[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 36))
{var inst_23708 = (state_23751[9]);var inst_23712 = cljs.core.chunk_first.call(null,inst_23708);var inst_23713 = cljs.core.chunk_rest.call(null,inst_23708);var inst_23714 = cljs.core.count.call(null,inst_23712);var inst_23687 = inst_23713;var inst_23688 = inst_23712;var inst_23689 = inst_23714;var inst_23690 = 0;var state_23751__$1 = (function (){var statearr_23762 = state_23751;(statearr_23762[10] = inst_23687);
(statearr_23762[11] = inst_23690);
(statearr_23762[12] = inst_23688);
(statearr_23762[13] = inst_23689);
return statearr_23762;
})();var statearr_23763_23846 = state_23751__$1;(statearr_23763_23846[2] = null);
(statearr_23763_23846[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 5))
{var inst_23626 = cljs.core.deref.call(null,cs);var inst_23627 = cljs.core.seq.call(null,inst_23626);var inst_23628 = inst_23627;var inst_23629 = null;var inst_23630 = 0;var inst_23631 = 0;var state_23751__$1 = (function (){var statearr_23764 = state_23751;(statearr_23764[14] = inst_23631);
(statearr_23764[15] = inst_23630);
(statearr_23764[16] = inst_23629);
(statearr_23764[17] = inst_23628);
return statearr_23764;
})();var statearr_23765_23847 = state_23751__$1;(statearr_23765_23847[2] = null);
(statearr_23765_23847[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 37))
{var inst_23708 = (state_23751[9]);var inst_23717 = cljs.core.first.call(null,inst_23708);var state_23751__$1 = (function (){var statearr_23766 = state_23751;(statearr_23766[18] = inst_23717);
return statearr_23766;
})();var statearr_23767_23848 = state_23751__$1;(statearr_23767_23848[2] = null);
(statearr_23767_23848[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 6))
{var inst_23679 = (state_23751[19]);var inst_23678 = cljs.core.deref.call(null,cs);var inst_23679__$1 = cljs.core.keys.call(null,inst_23678);var inst_23680 = cljs.core.count.call(null,inst_23679__$1);var inst_23681 = cljs.core.reset_BANG_.call(null,dctr,inst_23680);var inst_23686 = cljs.core.seq.call(null,inst_23679__$1);var inst_23687 = inst_23686;var inst_23688 = null;var inst_23689 = 0;var inst_23690 = 0;var state_23751__$1 = (function (){var statearr_23768 = state_23751;(statearr_23768[10] = inst_23687);
(statearr_23768[19] = inst_23679__$1);
(statearr_23768[20] = inst_23681);
(statearr_23768[11] = inst_23690);
(statearr_23768[12] = inst_23688);
(statearr_23768[13] = inst_23689);
return statearr_23768;
})();var statearr_23769_23849 = state_23751__$1;(statearr_23769_23849[2] = null);
(statearr_23769_23849[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 38))
{var inst_23730 = (state_23751[2]);var state_23751__$1 = state_23751;var statearr_23770_23850 = state_23751__$1;(statearr_23770_23850[2] = inst_23730);
(statearr_23770_23850[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 7))
{var inst_23747 = (state_23751[2]);var state_23751__$1 = state_23751;var statearr_23771_23851 = state_23751__$1;(statearr_23771_23851[2] = inst_23747);
(statearr_23771_23851[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 39))
{var inst_23708 = (state_23751[9]);var inst_23726 = (state_23751[2]);var inst_23727 = cljs.core.next.call(null,inst_23708);var inst_23687 = inst_23727;var inst_23688 = null;var inst_23689 = 0;var inst_23690 = 0;var state_23751__$1 = (function (){var statearr_23772 = state_23751;(statearr_23772[21] = inst_23726);
(statearr_23772[10] = inst_23687);
(statearr_23772[11] = inst_23690);
(statearr_23772[12] = inst_23688);
(statearr_23772[13] = inst_23689);
return statearr_23772;
})();var statearr_23773_23852 = state_23751__$1;(statearr_23773_23852[2] = null);
(statearr_23773_23852[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 8))
{var inst_23631 = (state_23751[14]);var inst_23630 = (state_23751[15]);var inst_23633 = (inst_23631 < inst_23630);var inst_23634 = inst_23633;var state_23751__$1 = state_23751;if(cljs.core.truth_(inst_23634))
{var statearr_23774_23853 = state_23751__$1;(statearr_23774_23853[1] = 10);
} else
{var statearr_23775_23854 = state_23751__$1;(statearr_23775_23854[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 40))
{var inst_23717 = (state_23751[18]);var inst_23718 = (state_23751[2]);var inst_23719 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_23720 = cljs.core.async.untap_STAR_.call(null,m,inst_23717);var state_23751__$1 = (function (){var statearr_23776 = state_23751;(statearr_23776[22] = inst_23718);
(statearr_23776[23] = inst_23719);
return statearr_23776;
})();var statearr_23777_23855 = state_23751__$1;(statearr_23777_23855[2] = inst_23720);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23751__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 9))
{var inst_23676 = (state_23751[2]);var state_23751__$1 = state_23751;var statearr_23778_23856 = state_23751__$1;(statearr_23778_23856[2] = inst_23676);
(statearr_23778_23856[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 41))
{var inst_23619 = (state_23751[7]);var inst_23717 = (state_23751[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23751,40,Object,null,39);var inst_23724 = cljs.core.async.put_BANG_.call(null,inst_23717,inst_23619,done);var state_23751__$1 = state_23751;var statearr_23779_23857 = state_23751__$1;(statearr_23779_23857[2] = inst_23724);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23751__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 10))
{var inst_23631 = (state_23751[14]);var inst_23629 = (state_23751[16]);var inst_23637 = cljs.core._nth.call(null,inst_23629,inst_23631);var inst_23638 = cljs.core.nth.call(null,inst_23637,0,null);var inst_23639 = cljs.core.nth.call(null,inst_23637,1,null);var state_23751__$1 = (function (){var statearr_23780 = state_23751;(statearr_23780[24] = inst_23638);
return statearr_23780;
})();if(cljs.core.truth_(inst_23639))
{var statearr_23781_23858 = state_23751__$1;(statearr_23781_23858[1] = 13);
} else
{var statearr_23782_23859 = state_23751__$1;(statearr_23782_23859[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 42))
{var state_23751__$1 = state_23751;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23751__$1,45,dchan);
} else
{if((state_val_23752 === 11))
{var inst_23648 = (state_23751[25]);var inst_23628 = (state_23751[17]);var inst_23648__$1 = cljs.core.seq.call(null,inst_23628);var state_23751__$1 = (function (){var statearr_23783 = state_23751;(statearr_23783[25] = inst_23648__$1);
return statearr_23783;
})();if(inst_23648__$1)
{var statearr_23784_23860 = state_23751__$1;(statearr_23784_23860[1] = 16);
} else
{var statearr_23785_23861 = state_23751__$1;(statearr_23785_23861[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 43))
{var state_23751__$1 = state_23751;var statearr_23786_23862 = state_23751__$1;(statearr_23786_23862[2] = null);
(statearr_23786_23862[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 12))
{var inst_23674 = (state_23751[2]);var state_23751__$1 = state_23751;var statearr_23787_23863 = state_23751__$1;(statearr_23787_23863[2] = inst_23674);
(statearr_23787_23863[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 44))
{var inst_23744 = (state_23751[2]);var state_23751__$1 = (function (){var statearr_23788 = state_23751;(statearr_23788[26] = inst_23744);
return statearr_23788;
})();var statearr_23789_23864 = state_23751__$1;(statearr_23789_23864[2] = null);
(statearr_23789_23864[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 13))
{var inst_23638 = (state_23751[24]);var inst_23641 = cljs.core.async.close_BANG_.call(null,inst_23638);var state_23751__$1 = state_23751;var statearr_23790_23865 = state_23751__$1;(statearr_23790_23865[2] = inst_23641);
(statearr_23790_23865[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 45))
{var inst_23741 = (state_23751[2]);var state_23751__$1 = state_23751;var statearr_23794_23866 = state_23751__$1;(statearr_23794_23866[2] = inst_23741);
(statearr_23794_23866[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 14))
{var state_23751__$1 = state_23751;var statearr_23795_23867 = state_23751__$1;(statearr_23795_23867[2] = null);
(statearr_23795_23867[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 15))
{var inst_23631 = (state_23751[14]);var inst_23630 = (state_23751[15]);var inst_23629 = (state_23751[16]);var inst_23628 = (state_23751[17]);var inst_23644 = (state_23751[2]);var inst_23645 = (inst_23631 + 1);var tmp23791 = inst_23630;var tmp23792 = inst_23629;var tmp23793 = inst_23628;var inst_23628__$1 = tmp23793;var inst_23629__$1 = tmp23792;var inst_23630__$1 = tmp23791;var inst_23631__$1 = inst_23645;var state_23751__$1 = (function (){var statearr_23796 = state_23751;(statearr_23796[14] = inst_23631__$1);
(statearr_23796[15] = inst_23630__$1);
(statearr_23796[16] = inst_23629__$1);
(statearr_23796[17] = inst_23628__$1);
(statearr_23796[27] = inst_23644);
return statearr_23796;
})();var statearr_23797_23868 = state_23751__$1;(statearr_23797_23868[2] = null);
(statearr_23797_23868[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 16))
{var inst_23648 = (state_23751[25]);var inst_23650 = cljs.core.chunked_seq_QMARK_.call(null,inst_23648);var state_23751__$1 = state_23751;if(inst_23650)
{var statearr_23798_23869 = state_23751__$1;(statearr_23798_23869[1] = 19);
} else
{var statearr_23799_23870 = state_23751__$1;(statearr_23799_23870[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 17))
{var state_23751__$1 = state_23751;var statearr_23800_23871 = state_23751__$1;(statearr_23800_23871[2] = null);
(statearr_23800_23871[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 18))
{var inst_23672 = (state_23751[2]);var state_23751__$1 = state_23751;var statearr_23801_23872 = state_23751__$1;(statearr_23801_23872[2] = inst_23672);
(statearr_23801_23872[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 19))
{var inst_23648 = (state_23751[25]);var inst_23652 = cljs.core.chunk_first.call(null,inst_23648);var inst_23653 = cljs.core.chunk_rest.call(null,inst_23648);var inst_23654 = cljs.core.count.call(null,inst_23652);var inst_23628 = inst_23653;var inst_23629 = inst_23652;var inst_23630 = inst_23654;var inst_23631 = 0;var state_23751__$1 = (function (){var statearr_23802 = state_23751;(statearr_23802[14] = inst_23631);
(statearr_23802[15] = inst_23630);
(statearr_23802[16] = inst_23629);
(statearr_23802[17] = inst_23628);
return statearr_23802;
})();var statearr_23803_23873 = state_23751__$1;(statearr_23803_23873[2] = null);
(statearr_23803_23873[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 20))
{var inst_23648 = (state_23751[25]);var inst_23658 = cljs.core.first.call(null,inst_23648);var inst_23659 = cljs.core.nth.call(null,inst_23658,0,null);var inst_23660 = cljs.core.nth.call(null,inst_23658,1,null);var state_23751__$1 = (function (){var statearr_23804 = state_23751;(statearr_23804[28] = inst_23659);
return statearr_23804;
})();if(cljs.core.truth_(inst_23660))
{var statearr_23805_23874 = state_23751__$1;(statearr_23805_23874[1] = 22);
} else
{var statearr_23806_23875 = state_23751__$1;(statearr_23806_23875[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 21))
{var inst_23669 = (state_23751[2]);var state_23751__$1 = state_23751;var statearr_23807_23876 = state_23751__$1;(statearr_23807_23876[2] = inst_23669);
(statearr_23807_23876[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 22))
{var inst_23659 = (state_23751[28]);var inst_23662 = cljs.core.async.close_BANG_.call(null,inst_23659);var state_23751__$1 = state_23751;var statearr_23808_23877 = state_23751__$1;(statearr_23808_23877[2] = inst_23662);
(statearr_23808_23877[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 23))
{var state_23751__$1 = state_23751;var statearr_23809_23878 = state_23751__$1;(statearr_23809_23878[2] = null);
(statearr_23809_23878[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 24))
{var inst_23648 = (state_23751[25]);var inst_23665 = (state_23751[2]);var inst_23666 = cljs.core.next.call(null,inst_23648);var inst_23628 = inst_23666;var inst_23629 = null;var inst_23630 = 0;var inst_23631 = 0;var state_23751__$1 = (function (){var statearr_23810 = state_23751;(statearr_23810[14] = inst_23631);
(statearr_23810[15] = inst_23630);
(statearr_23810[16] = inst_23629);
(statearr_23810[17] = inst_23628);
(statearr_23810[29] = inst_23665);
return statearr_23810;
})();var statearr_23811_23879 = state_23751__$1;(statearr_23811_23879[2] = null);
(statearr_23811_23879[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 25))
{var inst_23690 = (state_23751[11]);var inst_23689 = (state_23751[13]);var inst_23692 = (inst_23690 < inst_23689);var inst_23693 = inst_23692;var state_23751__$1 = state_23751;if(cljs.core.truth_(inst_23693))
{var statearr_23812_23880 = state_23751__$1;(statearr_23812_23880[1] = 27);
} else
{var statearr_23813_23881 = state_23751__$1;(statearr_23813_23881[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 26))
{var inst_23679 = (state_23751[19]);var inst_23737 = (state_23751[2]);var inst_23738 = cljs.core.seq.call(null,inst_23679);var state_23751__$1 = (function (){var statearr_23814 = state_23751;(statearr_23814[30] = inst_23737);
return statearr_23814;
})();if(inst_23738)
{var statearr_23815_23882 = state_23751__$1;(statearr_23815_23882[1] = 42);
} else
{var statearr_23816_23883 = state_23751__$1;(statearr_23816_23883[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 27))
{var inst_23690 = (state_23751[11]);var inst_23688 = (state_23751[12]);var inst_23695 = cljs.core._nth.call(null,inst_23688,inst_23690);var state_23751__$1 = (function (){var statearr_23817 = state_23751;(statearr_23817[8] = inst_23695);
return statearr_23817;
})();var statearr_23818_23884 = state_23751__$1;(statearr_23818_23884[2] = null);
(statearr_23818_23884[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 28))
{var inst_23687 = (state_23751[10]);var inst_23708 = (state_23751[9]);var inst_23708__$1 = cljs.core.seq.call(null,inst_23687);var state_23751__$1 = (function (){var statearr_23822 = state_23751;(statearr_23822[9] = inst_23708__$1);
return statearr_23822;
})();if(inst_23708__$1)
{var statearr_23823_23885 = state_23751__$1;(statearr_23823_23885[1] = 33);
} else
{var statearr_23824_23886 = state_23751__$1;(statearr_23824_23886[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 29))
{var inst_23735 = (state_23751[2]);var state_23751__$1 = state_23751;var statearr_23825_23887 = state_23751__$1;(statearr_23825_23887[2] = inst_23735);
(statearr_23825_23887[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 30))
{var inst_23687 = (state_23751[10]);var inst_23690 = (state_23751[11]);var inst_23688 = (state_23751[12]);var inst_23689 = (state_23751[13]);var inst_23704 = (state_23751[2]);var inst_23705 = (inst_23690 + 1);var tmp23819 = inst_23687;var tmp23820 = inst_23688;var tmp23821 = inst_23689;var inst_23687__$1 = tmp23819;var inst_23688__$1 = tmp23820;var inst_23689__$1 = tmp23821;var inst_23690__$1 = inst_23705;var state_23751__$1 = (function (){var statearr_23826 = state_23751;(statearr_23826[10] = inst_23687__$1);
(statearr_23826[31] = inst_23704);
(statearr_23826[11] = inst_23690__$1);
(statearr_23826[12] = inst_23688__$1);
(statearr_23826[13] = inst_23689__$1);
return statearr_23826;
})();var statearr_23827_23888 = state_23751__$1;(statearr_23827_23888[2] = null);
(statearr_23827_23888[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23752 === 31))
{var inst_23695 = (state_23751[8]);var inst_23696 = (state_23751[2]);var inst_23697 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_23698 = cljs.core.async.untap_STAR_.call(null,m,inst_23695);var state_23751__$1 = (function (){var statearr_23828 = state_23751;(statearr_23828[32] = inst_23697);
(statearr_23828[33] = inst_23696);
return statearr_23828;
})();var statearr_23829_23889 = state_23751__$1;(statearr_23829_23889[2] = inst_23698);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23751__$1);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_23833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23833[0] = state_machine__12118__auto__);
(statearr_23833[1] = 1);
return statearr_23833;
});
var state_machine__12118__auto____1 = (function (state_23751){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_23751);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e23834){if((e23834 instanceof Object))
{var ex__12121__auto__ = e23834;var statearr_23835_23890 = state_23751;(statearr_23835_23890[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23751);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23834;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23891 = state_23751;
state_23751 = G__23891;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_23751){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_23751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_23836 = f__12188__auto__.call(null);(statearr_23836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___23837);
return statearr_23836;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
cljs.core.async.Mix = (function (){var obj23893 = {};return obj23893;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__8218__auto__ = m;if(and__8218__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__8218__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8838__auto__ = (((m == null))?null:m);return (function (){var or__8230__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__8218__auto__ = m;if(and__8218__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__8218__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8838__auto__ = (((m == null))?null:m);return (function (){var or__8230__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__8218__auto__ = m;if(and__8218__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__8218__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8838__auto__ = (((m == null))?null:m);return (function (){var or__8230__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__8218__auto__ = m;if(and__8218__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__8218__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8838__auto__ = (((m == null))?null:m);return (function (){var or__8230__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__8218__auto__ = m;if(and__8218__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__8218__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8838__auto__ = (((m == null))?null:m);return (function (){var or__8230__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t24003 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24003 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24004){
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
this.meta24004 = meta24004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24003.cljs$lang$type = true;
cljs.core.async.t24003.cljs$lang$ctorStr = "cljs.core.async/t24003";
cljs.core.async.t24003.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8779__auto__,writer__8780__auto__,opt__8781__auto__){return cljs.core._write.call(null,writer__8780__auto__,"cljs.core.async/t24003");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24003.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24003.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24003.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24003.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24003.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24003.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24003.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24003.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24005){var self__ = this;
var _24005__$1 = this;return self__.meta24004;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24005,meta24004__$1){var self__ = this;
var _24005__$1 = this;return (new cljs.core.async.t24003(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24004__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24003 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24003(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24004){return (new cljs.core.async.t24003(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24004));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24003(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__12187__auto___24112 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_24070){var state_val_24071 = (state_24070[1]);if((state_val_24071 === 1))
{var inst_24009 = (state_24070[7]);var inst_24009__$1 = calc_state.call(null);var inst_24010 = cljs.core.seq_QMARK_.call(null,inst_24009__$1);var state_24070__$1 = (function (){var statearr_24072 = state_24070;(statearr_24072[7] = inst_24009__$1);
return statearr_24072;
})();if(inst_24010)
{var statearr_24073_24113 = state_24070__$1;(statearr_24073_24113[1] = 2);
} else
{var statearr_24074_24114 = state_24070__$1;(statearr_24074_24114[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 2))
{var inst_24009 = (state_24070[7]);var inst_24012 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24009);var state_24070__$1 = state_24070;var statearr_24075_24115 = state_24070__$1;(statearr_24075_24115[2] = inst_24012);
(statearr_24075_24115[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 3))
{var inst_24009 = (state_24070[7]);var state_24070__$1 = state_24070;var statearr_24076_24116 = state_24070__$1;(statearr_24076_24116[2] = inst_24009);
(statearr_24076_24116[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 4))
{var inst_24009 = (state_24070[7]);var inst_24015 = (state_24070[2]);var inst_24016 = cljs.core.get.call(null,inst_24015,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_24017 = cljs.core.get.call(null,inst_24015,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_24018 = cljs.core.get.call(null,inst_24015,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_24019 = inst_24009;var state_24070__$1 = (function (){var statearr_24077 = state_24070;(statearr_24077[8] = inst_24017);
(statearr_24077[9] = inst_24016);
(statearr_24077[10] = inst_24018);
(statearr_24077[11] = inst_24019);
return statearr_24077;
})();var statearr_24078_24117 = state_24070__$1;(statearr_24078_24117[2] = null);
(statearr_24078_24117[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 5))
{var inst_24019 = (state_24070[11]);var inst_24022 = cljs.core.seq_QMARK_.call(null,inst_24019);var state_24070__$1 = state_24070;if(inst_24022)
{var statearr_24079_24118 = state_24070__$1;(statearr_24079_24118[1] = 7);
} else
{var statearr_24080_24119 = state_24070__$1;(statearr_24080_24119[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 6))
{var inst_24068 = (state_24070[2]);var state_24070__$1 = state_24070;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24070__$1,inst_24068);
} else
{if((state_val_24071 === 7))
{var inst_24019 = (state_24070[11]);var inst_24024 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24019);var state_24070__$1 = state_24070;var statearr_24081_24120 = state_24070__$1;(statearr_24081_24120[2] = inst_24024);
(statearr_24081_24120[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 8))
{var inst_24019 = (state_24070[11]);var state_24070__$1 = state_24070;var statearr_24082_24121 = state_24070__$1;(statearr_24082_24121[2] = inst_24019);
(statearr_24082_24121[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 9))
{var inst_24027 = (state_24070[12]);var inst_24027__$1 = (state_24070[2]);var inst_24028 = cljs.core.get.call(null,inst_24027__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_24029 = cljs.core.get.call(null,inst_24027__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_24030 = cljs.core.get.call(null,inst_24027__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_24070__$1 = (function (){var statearr_24083 = state_24070;(statearr_24083[13] = inst_24029);
(statearr_24083[12] = inst_24027__$1);
(statearr_24083[14] = inst_24030);
return statearr_24083;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_24070__$1,10,inst_24028);
} else
{if((state_val_24071 === 10))
{var inst_24034 = (state_24070[15]);var inst_24035 = (state_24070[16]);var inst_24033 = (state_24070[2]);var inst_24034__$1 = cljs.core.nth.call(null,inst_24033,0,null);var inst_24035__$1 = cljs.core.nth.call(null,inst_24033,1,null);var inst_24036 = (inst_24034__$1 == null);var inst_24037 = cljs.core._EQ_.call(null,inst_24035__$1,change);var inst_24038 = (inst_24036) || (inst_24037);var state_24070__$1 = (function (){var statearr_24084 = state_24070;(statearr_24084[15] = inst_24034__$1);
(statearr_24084[16] = inst_24035__$1);
return statearr_24084;
})();if(cljs.core.truth_(inst_24038))
{var statearr_24085_24122 = state_24070__$1;(statearr_24085_24122[1] = 11);
} else
{var statearr_24086_24123 = state_24070__$1;(statearr_24086_24123[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 11))
{var inst_24034 = (state_24070[15]);var inst_24040 = (inst_24034 == null);var state_24070__$1 = state_24070;if(cljs.core.truth_(inst_24040))
{var statearr_24087_24124 = state_24070__$1;(statearr_24087_24124[1] = 14);
} else
{var statearr_24088_24125 = state_24070__$1;(statearr_24088_24125[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 12))
{var inst_24049 = (state_24070[17]);var inst_24035 = (state_24070[16]);var inst_24030 = (state_24070[14]);var inst_24049__$1 = inst_24030.call(null,inst_24035);var state_24070__$1 = (function (){var statearr_24089 = state_24070;(statearr_24089[17] = inst_24049__$1);
return statearr_24089;
})();if(cljs.core.truth_(inst_24049__$1))
{var statearr_24090_24126 = state_24070__$1;(statearr_24090_24126[1] = 17);
} else
{var statearr_24091_24127 = state_24070__$1;(statearr_24091_24127[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 13))
{var inst_24066 = (state_24070[2]);var state_24070__$1 = state_24070;var statearr_24092_24128 = state_24070__$1;(statearr_24092_24128[2] = inst_24066);
(statearr_24092_24128[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 14))
{var inst_24035 = (state_24070[16]);var inst_24042 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24035);var state_24070__$1 = state_24070;var statearr_24093_24129 = state_24070__$1;(statearr_24093_24129[2] = inst_24042);
(statearr_24093_24129[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 15))
{var state_24070__$1 = state_24070;var statearr_24094_24130 = state_24070__$1;(statearr_24094_24130[2] = null);
(statearr_24094_24130[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 16))
{var inst_24045 = (state_24070[2]);var inst_24046 = calc_state.call(null);var inst_24019 = inst_24046;var state_24070__$1 = (function (){var statearr_24095 = state_24070;(statearr_24095[18] = inst_24045);
(statearr_24095[11] = inst_24019);
return statearr_24095;
})();var statearr_24096_24131 = state_24070__$1;(statearr_24096_24131[2] = null);
(statearr_24096_24131[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 17))
{var inst_24049 = (state_24070[17]);var state_24070__$1 = state_24070;var statearr_24097_24132 = state_24070__$1;(statearr_24097_24132[2] = inst_24049);
(statearr_24097_24132[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 18))
{var inst_24029 = (state_24070[13]);var inst_24035 = (state_24070[16]);var inst_24030 = (state_24070[14]);var inst_24052 = cljs.core.empty_QMARK_.call(null,inst_24030);var inst_24053 = inst_24029.call(null,inst_24035);var inst_24054 = cljs.core.not.call(null,inst_24053);var inst_24055 = (inst_24052) && (inst_24054);var state_24070__$1 = state_24070;var statearr_24098_24133 = state_24070__$1;(statearr_24098_24133[2] = inst_24055);
(statearr_24098_24133[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 19))
{var inst_24057 = (state_24070[2]);var state_24070__$1 = state_24070;if(cljs.core.truth_(inst_24057))
{var statearr_24099_24134 = state_24070__$1;(statearr_24099_24134[1] = 20);
} else
{var statearr_24100_24135 = state_24070__$1;(statearr_24100_24135[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 20))
{var inst_24034 = (state_24070[15]);var state_24070__$1 = state_24070;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24070__$1,23,out,inst_24034);
} else
{if((state_val_24071 === 21))
{var state_24070__$1 = state_24070;var statearr_24101_24136 = state_24070__$1;(statearr_24101_24136[2] = null);
(statearr_24101_24136[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 22))
{var inst_24027 = (state_24070[12]);var inst_24063 = (state_24070[2]);var inst_24019 = inst_24027;var state_24070__$1 = (function (){var statearr_24102 = state_24070;(statearr_24102[19] = inst_24063);
(statearr_24102[11] = inst_24019);
return statearr_24102;
})();var statearr_24103_24137 = state_24070__$1;(statearr_24103_24137[2] = null);
(statearr_24103_24137[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 23))
{var inst_24060 = (state_24070[2]);var state_24070__$1 = state_24070;var statearr_24104_24138 = state_24070__$1;(statearr_24104_24138[2] = inst_24060);
(statearr_24104_24138[1] = 22);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_24108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24108[0] = state_machine__12118__auto__);
(statearr_24108[1] = 1);
return statearr_24108;
});
var state_machine__12118__auto____1 = (function (state_24070){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_24070);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e24109){if((e24109 instanceof Object))
{var ex__12121__auto__ = e24109;var statearr_24110_24139 = state_24070;(statearr_24110_24139[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24070);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24109;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24140 = state_24070;
state_24070 = G__24140;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_24070){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_24070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_24111 = f__12188__auto__.call(null);(statearr_24111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___24112);
return statearr_24111;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
cljs.core.async.Pub = (function (){var obj24142 = {};return obj24142;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__8218__auto__ = p;if(and__8218__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__8218__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8838__auto__ = (((p == null))?null:p);return (function (){var or__8230__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__8218__auto__ = p;if(and__8218__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__8218__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8838__auto__ = (((p == null))?null:p);return (function (){var or__8230__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__8218__auto__ = p;if(and__8218__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__8218__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8838__auto__ = (((p == null))?null:p);return (function (){var or__8230__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__8218__auto__ = p;if(and__8218__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__8218__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8838__auto__ = (((p == null))?null:p);return (function (){var or__8230__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
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
return (function (topic){var or__8230__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8230__auto__,mults){
return (function (p1__24143_SHARP_){if(cljs.core.truth_(p1__24143_SHARP_.call(null,topic)))
{return p1__24143_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__24143_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8230__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24268 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24268 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24269){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24269 = meta24269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24268.cljs$lang$type = true;
cljs.core.async.t24268.cljs$lang$ctorStr = "cljs.core.async/t24268";
cljs.core.async.t24268.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8779__auto__,writer__8780__auto__,opt__8781__auto__){return cljs.core._write.call(null,writer__8780__auto__,"cljs.core.async/t24268");
});})(mults,ensure_mult))
;
cljs.core.async.t24268.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24268.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24268.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24268.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24268.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24268.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24268.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24268.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24270){var self__ = this;
var _24270__$1 = this;return self__.meta24269;
});})(mults,ensure_mult))
;
cljs.core.async.t24268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24270,meta24269__$1){var self__ = this;
var _24270__$1 = this;return (new cljs.core.async.t24268(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24269__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24268 = ((function (mults,ensure_mult){
return (function __GT_t24268(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24269){return (new cljs.core.async.t24268(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24269));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24268(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12187__auto___24392 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_24344){var state_val_24345 = (state_24344[1]);if((state_val_24345 === 1))
{var state_24344__$1 = state_24344;var statearr_24346_24393 = state_24344__$1;(statearr_24346_24393[2] = null);
(statearr_24346_24393[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24345 === 2))
{var state_24344__$1 = state_24344;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24344__$1,4,ch);
} else
{if((state_val_24345 === 3))
{var inst_24342 = (state_24344[2]);var state_24344__$1 = state_24344;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24344__$1,inst_24342);
} else
{if((state_val_24345 === 4))
{var inst_24273 = (state_24344[7]);var inst_24273__$1 = (state_24344[2]);var inst_24274 = (inst_24273__$1 == null);var state_24344__$1 = (function (){var statearr_24347 = state_24344;(statearr_24347[7] = inst_24273__$1);
return statearr_24347;
})();if(cljs.core.truth_(inst_24274))
{var statearr_24348_24394 = state_24344__$1;(statearr_24348_24394[1] = 5);
} else
{var statearr_24349_24395 = state_24344__$1;(statearr_24349_24395[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24345 === 5))
{var inst_24280 = cljs.core.deref.call(null,mults);var inst_24281 = cljs.core.vals.call(null,inst_24280);var inst_24282 = cljs.core.seq.call(null,inst_24281);var inst_24283 = inst_24282;var inst_24284 = null;var inst_24285 = 0;var inst_24286 = 0;var state_24344__$1 = (function (){var statearr_24350 = state_24344;(statearr_24350[8] = inst_24285);
(statearr_24350[9] = inst_24286);
(statearr_24350[10] = inst_24284);
(statearr_24350[11] = inst_24283);
return statearr_24350;
})();var statearr_24351_24396 = state_24344__$1;(statearr_24351_24396[2] = null);
(statearr_24351_24396[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24345 === 6))
{var inst_24321 = (state_24344[12]);var inst_24323 = (state_24344[13]);var inst_24273 = (state_24344[7]);var inst_24321__$1 = topic_fn.call(null,inst_24273);var inst_24322 = cljs.core.deref.call(null,mults);var inst_24323__$1 = cljs.core.get.call(null,inst_24322,inst_24321__$1);var state_24344__$1 = (function (){var statearr_24352 = state_24344;(statearr_24352[12] = inst_24321__$1);
(statearr_24352[13] = inst_24323__$1);
return statearr_24352;
})();if(cljs.core.truth_(inst_24323__$1))
{var statearr_24353_24397 = state_24344__$1;(statearr_24353_24397[1] = 19);
} else
{var statearr_24354_24398 = state_24344__$1;(statearr_24354_24398[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24345 === 7))
{var inst_24340 = (state_24344[2]);var state_24344__$1 = state_24344;var statearr_24355_24399 = state_24344__$1;(statearr_24355_24399[2] = inst_24340);
(statearr_24355_24399[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24345 === 8))
{var inst_24285 = (state_24344[8]);var inst_24286 = (state_24344[9]);var inst_24288 = (inst_24286 < inst_24285);var inst_24289 = inst_24288;var state_24344__$1 = state_24344;if(cljs.core.truth_(inst_24289))
{var statearr_24359_24400 = state_24344__$1;(statearr_24359_24400[1] = 10);
} else
{var statearr_24360_24401 = state_24344__$1;(statearr_24360_24401[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24345 === 9))
{var inst_24319 = (state_24344[2]);var state_24344__$1 = state_24344;var statearr_24361_24402 = state_24344__$1;(statearr_24361_24402[2] = inst_24319);
(statearr_24361_24402[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24345 === 10))
{var inst_24285 = (state_24344[8]);var inst_24286 = (state_24344[9]);var inst_24284 = (state_24344[10]);var inst_24283 = (state_24344[11]);var inst_24291 = cljs.core._nth.call(null,inst_24284,inst_24286);var inst_24292 = cljs.core.async.muxch_STAR_.call(null,inst_24291);var inst_24293 = cljs.core.async.close_BANG_.call(null,inst_24292);var inst_24294 = (inst_24286 + 1);var tmp24356 = inst_24285;var tmp24357 = inst_24284;var tmp24358 = inst_24283;var inst_24283__$1 = tmp24358;var inst_24284__$1 = tmp24357;var inst_24285__$1 = tmp24356;var inst_24286__$1 = inst_24294;var state_24344__$1 = (function (){var statearr_24362 = state_24344;(statearr_24362[8] = inst_24285__$1);
(statearr_24362[9] = inst_24286__$1);
(statearr_24362[10] = inst_24284__$1);
(statearr_24362[11] = inst_24283__$1);
(statearr_24362[14] = inst_24293);
return statearr_24362;
})();var statearr_24363_24403 = state_24344__$1;(statearr_24363_24403[2] = null);
(statearr_24363_24403[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24345 === 11))
{var inst_24283 = (state_24344[11]);var inst_24297 = (state_24344[15]);var inst_24297__$1 = cljs.core.seq.call(null,inst_24283);var state_24344__$1 = (function (){var statearr_24364 = state_24344;(statearr_24364[15] = inst_24297__$1);
return statearr_24364;
})();if(inst_24297__$1)
{var statearr_24365_24404 = state_24344__$1;(statearr_24365_24404[1] = 13);
} else
{var statearr_24366_24405 = state_24344__$1;(statearr_24366_24405[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24345 === 12))
{var inst_24317 = (state_24344[2]);var state_24344__$1 = state_24344;var statearr_24367_24406 = state_24344__$1;(statearr_24367_24406[2] = inst_24317);
(statearr_24367_24406[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24345 === 13))
{var inst_24297 = (state_24344[15]);var inst_24299 = cljs.core.chunked_seq_QMARK_.call(null,inst_24297);var state_24344__$1 = state_24344;if(inst_24299)
{var statearr_24368_24407 = state_24344__$1;(statearr_24368_24407[1] = 16);
} else
{var statearr_24369_24408 = state_24344__$1;(statearr_24369_24408[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24345 === 14))
{var state_24344__$1 = state_24344;var statearr_24370_24409 = state_24344__$1;(statearr_24370_24409[2] = null);
(statearr_24370_24409[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24345 === 15))
{var inst_24315 = (state_24344[2]);var state_24344__$1 = state_24344;var statearr_24371_24410 = state_24344__$1;(statearr_24371_24410[2] = inst_24315);
(statearr_24371_24410[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24345 === 16))
{var inst_24297 = (state_24344[15]);var inst_24301 = cljs.core.chunk_first.call(null,inst_24297);var inst_24302 = cljs.core.chunk_rest.call(null,inst_24297);var inst_24303 = cljs.core.count.call(null,inst_24301);var inst_24283 = inst_24302;var inst_24284 = inst_24301;var inst_24285 = inst_24303;var inst_24286 = 0;var state_24344__$1 = (function (){var statearr_24372 = state_24344;(statearr_24372[8] = inst_24285);
(statearr_24372[9] = inst_24286);
(statearr_24372[10] = inst_24284);
(statearr_24372[11] = inst_24283);
return statearr_24372;
})();var statearr_24373_24411 = state_24344__$1;(statearr_24373_24411[2] = null);
(statearr_24373_24411[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24345 === 17))
{var inst_24297 = (state_24344[15]);var inst_24306 = cljs.core.first.call(null,inst_24297);var inst_24307 = cljs.core.async.muxch_STAR_.call(null,inst_24306);var inst_24308 = cljs.core.async.close_BANG_.call(null,inst_24307);var inst_24309 = cljs.core.next.call(null,inst_24297);var inst_24283 = inst_24309;var inst_24284 = null;var inst_24285 = 0;var inst_24286 = 0;var state_24344__$1 = (function (){var statearr_24374 = state_24344;(statearr_24374[8] = inst_24285);
(statearr_24374[9] = inst_24286);
(statearr_24374[10] = inst_24284);
(statearr_24374[11] = inst_24283);
(statearr_24374[16] = inst_24308);
return statearr_24374;
})();var statearr_24375_24412 = state_24344__$1;(statearr_24375_24412[2] = null);
(statearr_24375_24412[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24345 === 18))
{var inst_24312 = (state_24344[2]);var state_24344__$1 = state_24344;var statearr_24376_24413 = state_24344__$1;(statearr_24376_24413[2] = inst_24312);
(statearr_24376_24413[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24345 === 19))
{var state_24344__$1 = state_24344;var statearr_24377_24414 = state_24344__$1;(statearr_24377_24414[2] = null);
(statearr_24377_24414[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24345 === 20))
{var state_24344__$1 = state_24344;var statearr_24378_24415 = state_24344__$1;(statearr_24378_24415[2] = null);
(statearr_24378_24415[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24345 === 21))
{var inst_24337 = (state_24344[2]);var state_24344__$1 = (function (){var statearr_24379 = state_24344;(statearr_24379[17] = inst_24337);
return statearr_24379;
})();var statearr_24380_24416 = state_24344__$1;(statearr_24380_24416[2] = null);
(statearr_24380_24416[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24345 === 22))
{var inst_24334 = (state_24344[2]);var state_24344__$1 = state_24344;var statearr_24381_24417 = state_24344__$1;(statearr_24381_24417[2] = inst_24334);
(statearr_24381_24417[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24345 === 23))
{var inst_24321 = (state_24344[12]);var inst_24325 = (state_24344[2]);var inst_24326 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24321);var state_24344__$1 = (function (){var statearr_24382 = state_24344;(statearr_24382[18] = inst_24325);
return statearr_24382;
})();var statearr_24383_24418 = state_24344__$1;(statearr_24383_24418[2] = inst_24326);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24344__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24345 === 24))
{var inst_24323 = (state_24344[13]);var inst_24273 = (state_24344[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24344,23,Object,null,22);var inst_24330 = cljs.core.async.muxch_STAR_.call(null,inst_24323);var state_24344__$1 = state_24344;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24344__$1,25,inst_24330,inst_24273);
} else
{if((state_val_24345 === 25))
{var inst_24332 = (state_24344[2]);var state_24344__$1 = state_24344;var statearr_24384_24419 = state_24344__$1;(statearr_24384_24419[2] = inst_24332);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24344__$1);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_24388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24388[0] = state_machine__12118__auto__);
(statearr_24388[1] = 1);
return statearr_24388;
});
var state_machine__12118__auto____1 = (function (state_24344){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_24344);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e24389){if((e24389 instanceof Object))
{var ex__12121__auto__ = e24389;var statearr_24390_24420 = state_24344;(statearr_24390_24420[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24344);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24389;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24421 = state_24344;
state_24344 = G__24421;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_24344){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_24344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_24391 = f__12188__auto__.call(null);(statearr_24391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___24392);
return statearr_24391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
,cljs.core.range.call(null,cnt));var c__12187__auto___24558 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_24528){var state_val_24529 = (state_24528[1]);if((state_val_24529 === 1))
{var state_24528__$1 = state_24528;var statearr_24530_24559 = state_24528__$1;(statearr_24530_24559[2] = null);
(statearr_24530_24559[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24529 === 2))
{var inst_24491 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_24492 = 0;var state_24528__$1 = (function (){var statearr_24531 = state_24528;(statearr_24531[7] = inst_24491);
(statearr_24531[8] = inst_24492);
return statearr_24531;
})();var statearr_24532_24560 = state_24528__$1;(statearr_24532_24560[2] = null);
(statearr_24532_24560[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24529 === 3))
{var inst_24526 = (state_24528[2]);var state_24528__$1 = state_24528;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24528__$1,inst_24526);
} else
{if((state_val_24529 === 4))
{var inst_24492 = (state_24528[8]);var inst_24494 = (inst_24492 < cnt);var state_24528__$1 = state_24528;if(cljs.core.truth_(inst_24494))
{var statearr_24533_24561 = state_24528__$1;(statearr_24533_24561[1] = 6);
} else
{var statearr_24534_24562 = state_24528__$1;(statearr_24534_24562[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24529 === 5))
{var inst_24512 = (state_24528[2]);var state_24528__$1 = (function (){var statearr_24535 = state_24528;(statearr_24535[9] = inst_24512);
return statearr_24535;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24528__$1,12,dchan);
} else
{if((state_val_24529 === 6))
{var state_24528__$1 = state_24528;var statearr_24536_24563 = state_24528__$1;(statearr_24536_24563[2] = null);
(statearr_24536_24563[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24529 === 7))
{var state_24528__$1 = state_24528;var statearr_24537_24564 = state_24528__$1;(statearr_24537_24564[2] = null);
(statearr_24537_24564[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24529 === 8))
{var inst_24510 = (state_24528[2]);var state_24528__$1 = state_24528;var statearr_24538_24565 = state_24528__$1;(statearr_24538_24565[2] = inst_24510);
(statearr_24538_24565[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24529 === 9))
{var inst_24492 = (state_24528[8]);var inst_24505 = (state_24528[2]);var inst_24506 = (inst_24492 + 1);var inst_24492__$1 = inst_24506;var state_24528__$1 = (function (){var statearr_24539 = state_24528;(statearr_24539[8] = inst_24492__$1);
(statearr_24539[10] = inst_24505);
return statearr_24539;
})();var statearr_24540_24566 = state_24528__$1;(statearr_24540_24566[2] = null);
(statearr_24540_24566[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24529 === 10))
{var inst_24496 = (state_24528[2]);var inst_24497 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_24528__$1 = (function (){var statearr_24541 = state_24528;(statearr_24541[11] = inst_24496);
return statearr_24541;
})();var statearr_24542_24567 = state_24528__$1;(statearr_24542_24567[2] = inst_24497);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24528__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24529 === 11))
{var inst_24492 = (state_24528[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24528,10,Object,null,9);var inst_24501 = chs__$1.call(null,inst_24492);var inst_24502 = done.call(null,inst_24492);var inst_24503 = cljs.core.async.take_BANG_.call(null,inst_24501,inst_24502);var state_24528__$1 = state_24528;var statearr_24543_24568 = state_24528__$1;(statearr_24543_24568[2] = inst_24503);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24528__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24529 === 12))
{var inst_24514 = (state_24528[12]);var inst_24514__$1 = (state_24528[2]);var inst_24515 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24514__$1);var state_24528__$1 = (function (){var statearr_24544 = state_24528;(statearr_24544[12] = inst_24514__$1);
return statearr_24544;
})();if(cljs.core.truth_(inst_24515))
{var statearr_24545_24569 = state_24528__$1;(statearr_24545_24569[1] = 13);
} else
{var statearr_24546_24570 = state_24528__$1;(statearr_24546_24570[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24529 === 13))
{var inst_24517 = cljs.core.async.close_BANG_.call(null,out);var state_24528__$1 = state_24528;var statearr_24547_24571 = state_24528__$1;(statearr_24547_24571[2] = inst_24517);
(statearr_24547_24571[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24529 === 14))
{var inst_24514 = (state_24528[12]);var inst_24519 = cljs.core.apply.call(null,f,inst_24514);var state_24528__$1 = state_24528;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24528__$1,16,out,inst_24519);
} else
{if((state_val_24529 === 15))
{var inst_24524 = (state_24528[2]);var state_24528__$1 = state_24528;var statearr_24548_24572 = state_24528__$1;(statearr_24548_24572[2] = inst_24524);
(statearr_24548_24572[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24529 === 16))
{var inst_24521 = (state_24528[2]);var state_24528__$1 = (function (){var statearr_24549 = state_24528;(statearr_24549[13] = inst_24521);
return statearr_24549;
})();var statearr_24550_24573 = state_24528__$1;(statearr_24550_24573[2] = null);
(statearr_24550_24573[1] = 2);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_24554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24554[0] = state_machine__12118__auto__);
(statearr_24554[1] = 1);
return statearr_24554;
});
var state_machine__12118__auto____1 = (function (state_24528){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_24528);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e24555){if((e24555 instanceof Object))
{var ex__12121__auto__ = e24555;var statearr_24556_24574 = state_24528;(statearr_24556_24574[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24528);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24555;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24575 = state_24528;
state_24528 = G__24575;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_24528){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_24528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_24557 = f__12188__auto__.call(null);(statearr_24557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___24558);
return statearr_24557;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___24683 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_24659){var state_val_24660 = (state_24659[1]);if((state_val_24660 === 1))
{var inst_24630 = cljs.core.vec.call(null,chs);var inst_24631 = inst_24630;var state_24659__$1 = (function (){var statearr_24661 = state_24659;(statearr_24661[7] = inst_24631);
return statearr_24661;
})();var statearr_24662_24684 = state_24659__$1;(statearr_24662_24684[2] = null);
(statearr_24662_24684[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24660 === 2))
{var inst_24631 = (state_24659[7]);var inst_24633 = cljs.core.count.call(null,inst_24631);var inst_24634 = (inst_24633 > 0);var state_24659__$1 = state_24659;if(cljs.core.truth_(inst_24634))
{var statearr_24663_24685 = state_24659__$1;(statearr_24663_24685[1] = 4);
} else
{var statearr_24664_24686 = state_24659__$1;(statearr_24664_24686[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24660 === 3))
{var inst_24657 = (state_24659[2]);var state_24659__$1 = state_24659;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24659__$1,inst_24657);
} else
{if((state_val_24660 === 4))
{var inst_24631 = (state_24659[7]);var state_24659__$1 = state_24659;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_24659__$1,7,inst_24631);
} else
{if((state_val_24660 === 5))
{var inst_24653 = cljs.core.async.close_BANG_.call(null,out);var state_24659__$1 = state_24659;var statearr_24665_24687 = state_24659__$1;(statearr_24665_24687[2] = inst_24653);
(statearr_24665_24687[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24660 === 6))
{var inst_24655 = (state_24659[2]);var state_24659__$1 = state_24659;var statearr_24666_24688 = state_24659__$1;(statearr_24666_24688[2] = inst_24655);
(statearr_24666_24688[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24660 === 7))
{var inst_24639 = (state_24659[8]);var inst_24638 = (state_24659[9]);var inst_24638__$1 = (state_24659[2]);var inst_24639__$1 = cljs.core.nth.call(null,inst_24638__$1,0,null);var inst_24640 = cljs.core.nth.call(null,inst_24638__$1,1,null);var inst_24641 = (inst_24639__$1 == null);var state_24659__$1 = (function (){var statearr_24667 = state_24659;(statearr_24667[10] = inst_24640);
(statearr_24667[8] = inst_24639__$1);
(statearr_24667[9] = inst_24638__$1);
return statearr_24667;
})();if(cljs.core.truth_(inst_24641))
{var statearr_24668_24689 = state_24659__$1;(statearr_24668_24689[1] = 8);
} else
{var statearr_24669_24690 = state_24659__$1;(statearr_24669_24690[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24660 === 8))
{var inst_24640 = (state_24659[10]);var inst_24639 = (state_24659[8]);var inst_24638 = (state_24659[9]);var inst_24631 = (state_24659[7]);var inst_24643 = (function (){var c = inst_24640;var v = inst_24639;var vec__24636 = inst_24638;var cs = inst_24631;return ((function (c,v,vec__24636,cs,inst_24640,inst_24639,inst_24638,inst_24631,state_val_24660){
return (function (p1__24576_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__24576_SHARP_);
});
;})(c,v,vec__24636,cs,inst_24640,inst_24639,inst_24638,inst_24631,state_val_24660))
})();var inst_24644 = cljs.core.filterv.call(null,inst_24643,inst_24631);var inst_24631__$1 = inst_24644;var state_24659__$1 = (function (){var statearr_24670 = state_24659;(statearr_24670[7] = inst_24631__$1);
return statearr_24670;
})();var statearr_24671_24691 = state_24659__$1;(statearr_24671_24691[2] = null);
(statearr_24671_24691[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24660 === 9))
{var inst_24639 = (state_24659[8]);var state_24659__$1 = state_24659;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24659__$1,11,out,inst_24639);
} else
{if((state_val_24660 === 10))
{var inst_24651 = (state_24659[2]);var state_24659__$1 = state_24659;var statearr_24673_24692 = state_24659__$1;(statearr_24673_24692[2] = inst_24651);
(statearr_24673_24692[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24660 === 11))
{var inst_24631 = (state_24659[7]);var inst_24648 = (state_24659[2]);var tmp24672 = inst_24631;var inst_24631__$1 = tmp24672;var state_24659__$1 = (function (){var statearr_24674 = state_24659;(statearr_24674[11] = inst_24648);
(statearr_24674[7] = inst_24631__$1);
return statearr_24674;
})();var statearr_24675_24693 = state_24659__$1;(statearr_24675_24693[2] = null);
(statearr_24675_24693[1] = 2);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_24679 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24679[0] = state_machine__12118__auto__);
(statearr_24679[1] = 1);
return statearr_24679;
});
var state_machine__12118__auto____1 = (function (state_24659){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_24659);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e24680){if((e24680 instanceof Object))
{var ex__12121__auto__ = e24680;var statearr_24681_24694 = state_24659;(statearr_24681_24694[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24659);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24680;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24695 = state_24659;
state_24659 = G__24695;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_24659){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_24659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_24682 = f__12188__auto__.call(null);(statearr_24682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___24683);
return statearr_24682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___24788 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_24765){var state_val_24766 = (state_24765[1]);if((state_val_24766 === 1))
{var inst_24742 = 0;var state_24765__$1 = (function (){var statearr_24767 = state_24765;(statearr_24767[7] = inst_24742);
return statearr_24767;
})();var statearr_24768_24789 = state_24765__$1;(statearr_24768_24789[2] = null);
(statearr_24768_24789[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24766 === 2))
{var inst_24742 = (state_24765[7]);var inst_24744 = (inst_24742 < n);var state_24765__$1 = state_24765;if(cljs.core.truth_(inst_24744))
{var statearr_24769_24790 = state_24765__$1;(statearr_24769_24790[1] = 4);
} else
{var statearr_24770_24791 = state_24765__$1;(statearr_24770_24791[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24766 === 3))
{var inst_24762 = (state_24765[2]);var inst_24763 = cljs.core.async.close_BANG_.call(null,out);var state_24765__$1 = (function (){var statearr_24771 = state_24765;(statearr_24771[8] = inst_24762);
return statearr_24771;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24765__$1,inst_24763);
} else
{if((state_val_24766 === 4))
{var state_24765__$1 = state_24765;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24765__$1,7,ch);
} else
{if((state_val_24766 === 5))
{var state_24765__$1 = state_24765;var statearr_24772_24792 = state_24765__$1;(statearr_24772_24792[2] = null);
(statearr_24772_24792[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24766 === 6))
{var inst_24760 = (state_24765[2]);var state_24765__$1 = state_24765;var statearr_24773_24793 = state_24765__$1;(statearr_24773_24793[2] = inst_24760);
(statearr_24773_24793[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24766 === 7))
{var inst_24747 = (state_24765[9]);var inst_24747__$1 = (state_24765[2]);var inst_24748 = (inst_24747__$1 == null);var inst_24749 = cljs.core.not.call(null,inst_24748);var state_24765__$1 = (function (){var statearr_24774 = state_24765;(statearr_24774[9] = inst_24747__$1);
return statearr_24774;
})();if(inst_24749)
{var statearr_24775_24794 = state_24765__$1;(statearr_24775_24794[1] = 8);
} else
{var statearr_24776_24795 = state_24765__$1;(statearr_24776_24795[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24766 === 8))
{var inst_24747 = (state_24765[9]);var state_24765__$1 = state_24765;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24765__$1,11,out,inst_24747);
} else
{if((state_val_24766 === 9))
{var state_24765__$1 = state_24765;var statearr_24777_24796 = state_24765__$1;(statearr_24777_24796[2] = null);
(statearr_24777_24796[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24766 === 10))
{var inst_24757 = (state_24765[2]);var state_24765__$1 = state_24765;var statearr_24778_24797 = state_24765__$1;(statearr_24778_24797[2] = inst_24757);
(statearr_24778_24797[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24766 === 11))
{var inst_24742 = (state_24765[7]);var inst_24752 = (state_24765[2]);var inst_24753 = (inst_24742 + 1);var inst_24742__$1 = inst_24753;var state_24765__$1 = (function (){var statearr_24779 = state_24765;(statearr_24779[10] = inst_24752);
(statearr_24779[7] = inst_24742__$1);
return statearr_24779;
})();var statearr_24780_24798 = state_24765__$1;(statearr_24780_24798[2] = null);
(statearr_24780_24798[1] = 2);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_24784 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24784[0] = state_machine__12118__auto__);
(statearr_24784[1] = 1);
return statearr_24784;
});
var state_machine__12118__auto____1 = (function (state_24765){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_24765);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e24785){if((e24785 instanceof Object))
{var ex__12121__auto__ = e24785;var statearr_24786_24799 = state_24765;(statearr_24786_24799[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24765);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24785;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24800 = state_24765;
state_24765 = G__24800;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_24765){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_24765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_24787 = f__12188__auto__.call(null);(statearr_24787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___24788);
return statearr_24787;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___24897 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_24872){var state_val_24873 = (state_24872[1]);if((state_val_24873 === 1))
{var inst_24849 = null;var state_24872__$1 = (function (){var statearr_24874 = state_24872;(statearr_24874[7] = inst_24849);
return statearr_24874;
})();var statearr_24875_24898 = state_24872__$1;(statearr_24875_24898[2] = null);
(statearr_24875_24898[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24873 === 2))
{var state_24872__$1 = state_24872;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24872__$1,4,ch);
} else
{if((state_val_24873 === 3))
{var inst_24869 = (state_24872[2]);var inst_24870 = cljs.core.async.close_BANG_.call(null,out);var state_24872__$1 = (function (){var statearr_24876 = state_24872;(statearr_24876[8] = inst_24869);
return statearr_24876;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24872__$1,inst_24870);
} else
{if((state_val_24873 === 4))
{var inst_24852 = (state_24872[9]);var inst_24852__$1 = (state_24872[2]);var inst_24853 = (inst_24852__$1 == null);var inst_24854 = cljs.core.not.call(null,inst_24853);var state_24872__$1 = (function (){var statearr_24877 = state_24872;(statearr_24877[9] = inst_24852__$1);
return statearr_24877;
})();if(inst_24854)
{var statearr_24878_24899 = state_24872__$1;(statearr_24878_24899[1] = 5);
} else
{var statearr_24879_24900 = state_24872__$1;(statearr_24879_24900[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24873 === 5))
{var inst_24852 = (state_24872[9]);var inst_24849 = (state_24872[7]);var inst_24856 = cljs.core._EQ_.call(null,inst_24852,inst_24849);var state_24872__$1 = state_24872;if(inst_24856)
{var statearr_24880_24901 = state_24872__$1;(statearr_24880_24901[1] = 8);
} else
{var statearr_24881_24902 = state_24872__$1;(statearr_24881_24902[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24873 === 6))
{var state_24872__$1 = state_24872;var statearr_24883_24903 = state_24872__$1;(statearr_24883_24903[2] = null);
(statearr_24883_24903[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24873 === 7))
{var inst_24867 = (state_24872[2]);var state_24872__$1 = state_24872;var statearr_24884_24904 = state_24872__$1;(statearr_24884_24904[2] = inst_24867);
(statearr_24884_24904[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24873 === 8))
{var inst_24849 = (state_24872[7]);var tmp24882 = inst_24849;var inst_24849__$1 = tmp24882;var state_24872__$1 = (function (){var statearr_24885 = state_24872;(statearr_24885[7] = inst_24849__$1);
return statearr_24885;
})();var statearr_24886_24905 = state_24872__$1;(statearr_24886_24905[2] = null);
(statearr_24886_24905[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24873 === 9))
{var inst_24852 = (state_24872[9]);var state_24872__$1 = state_24872;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24872__$1,11,out,inst_24852);
} else
{if((state_val_24873 === 10))
{var inst_24864 = (state_24872[2]);var state_24872__$1 = state_24872;var statearr_24887_24906 = state_24872__$1;(statearr_24887_24906[2] = inst_24864);
(statearr_24887_24906[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24873 === 11))
{var inst_24852 = (state_24872[9]);var inst_24861 = (state_24872[2]);var inst_24849 = inst_24852;var state_24872__$1 = (function (){var statearr_24888 = state_24872;(statearr_24888[7] = inst_24849);
(statearr_24888[10] = inst_24861);
return statearr_24888;
})();var statearr_24889_24907 = state_24872__$1;(statearr_24889_24907[2] = null);
(statearr_24889_24907[1] = 2);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_24893 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24893[0] = state_machine__12118__auto__);
(statearr_24893[1] = 1);
return statearr_24893;
});
var state_machine__12118__auto____1 = (function (state_24872){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_24872);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e24894){if((e24894 instanceof Object))
{var ex__12121__auto__ = e24894;var statearr_24895_24908 = state_24872;(statearr_24895_24908[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24872);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24894;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24909 = state_24872;
state_24872 = G__24909;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_24872){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_24872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_24896 = f__12188__auto__.call(null);(statearr_24896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___24897);
return statearr_24896;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___25044 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_25014){var state_val_25015 = (state_25014[1]);if((state_val_25015 === 1))
{var inst_24977 = (new Array(n));var inst_24978 = inst_24977;var inst_24979 = 0;var state_25014__$1 = (function (){var statearr_25016 = state_25014;(statearr_25016[7] = inst_24979);
(statearr_25016[8] = inst_24978);
return statearr_25016;
})();var statearr_25017_25045 = state_25014__$1;(statearr_25017_25045[2] = null);
(statearr_25017_25045[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25015 === 2))
{var state_25014__$1 = state_25014;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25014__$1,4,ch);
} else
{if((state_val_25015 === 3))
{var inst_25012 = (state_25014[2]);var state_25014__$1 = state_25014;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25014__$1,inst_25012);
} else
{if((state_val_25015 === 4))
{var inst_24982 = (state_25014[9]);var inst_24982__$1 = (state_25014[2]);var inst_24983 = (inst_24982__$1 == null);var inst_24984 = cljs.core.not.call(null,inst_24983);var state_25014__$1 = (function (){var statearr_25018 = state_25014;(statearr_25018[9] = inst_24982__$1);
return statearr_25018;
})();if(inst_24984)
{var statearr_25019_25046 = state_25014__$1;(statearr_25019_25046[1] = 5);
} else
{var statearr_25020_25047 = state_25014__$1;(statearr_25020_25047[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25015 === 5))
{var inst_24979 = (state_25014[7]);var inst_24987 = (state_25014[10]);var inst_24982 = (state_25014[9]);var inst_24978 = (state_25014[8]);var inst_24986 = (inst_24978[inst_24979] = inst_24982);var inst_24987__$1 = (inst_24979 + 1);var inst_24988 = (inst_24987__$1 < n);var state_25014__$1 = (function (){var statearr_25021 = state_25014;(statearr_25021[11] = inst_24986);
(statearr_25021[10] = inst_24987__$1);
return statearr_25021;
})();if(cljs.core.truth_(inst_24988))
{var statearr_25022_25048 = state_25014__$1;(statearr_25022_25048[1] = 8);
} else
{var statearr_25023_25049 = state_25014__$1;(statearr_25023_25049[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25015 === 6))
{var inst_24979 = (state_25014[7]);var inst_25000 = (inst_24979 > 0);var state_25014__$1 = state_25014;if(cljs.core.truth_(inst_25000))
{var statearr_25025_25050 = state_25014__$1;(statearr_25025_25050[1] = 12);
} else
{var statearr_25026_25051 = state_25014__$1;(statearr_25026_25051[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25015 === 7))
{var inst_25010 = (state_25014[2]);var state_25014__$1 = state_25014;var statearr_25027_25052 = state_25014__$1;(statearr_25027_25052[2] = inst_25010);
(statearr_25027_25052[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25015 === 8))
{var inst_24987 = (state_25014[10]);var inst_24978 = (state_25014[8]);var tmp25024 = inst_24978;var inst_24978__$1 = tmp25024;var inst_24979 = inst_24987;var state_25014__$1 = (function (){var statearr_25028 = state_25014;(statearr_25028[7] = inst_24979);
(statearr_25028[8] = inst_24978__$1);
return statearr_25028;
})();var statearr_25029_25053 = state_25014__$1;(statearr_25029_25053[2] = null);
(statearr_25029_25053[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25015 === 9))
{var inst_24978 = (state_25014[8]);var inst_24992 = cljs.core.vec.call(null,inst_24978);var state_25014__$1 = state_25014;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25014__$1,11,out,inst_24992);
} else
{if((state_val_25015 === 10))
{var inst_24998 = (state_25014[2]);var state_25014__$1 = state_25014;var statearr_25030_25054 = state_25014__$1;(statearr_25030_25054[2] = inst_24998);
(statearr_25030_25054[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25015 === 11))
{var inst_24994 = (state_25014[2]);var inst_24995 = (new Array(n));var inst_24978 = inst_24995;var inst_24979 = 0;var state_25014__$1 = (function (){var statearr_25031 = state_25014;(statearr_25031[7] = inst_24979);
(statearr_25031[12] = inst_24994);
(statearr_25031[8] = inst_24978);
return statearr_25031;
})();var statearr_25032_25055 = state_25014__$1;(statearr_25032_25055[2] = null);
(statearr_25032_25055[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25015 === 12))
{var inst_24978 = (state_25014[8]);var inst_25002 = cljs.core.vec.call(null,inst_24978);var state_25014__$1 = state_25014;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25014__$1,15,out,inst_25002);
} else
{if((state_val_25015 === 13))
{var state_25014__$1 = state_25014;var statearr_25033_25056 = state_25014__$1;(statearr_25033_25056[2] = null);
(statearr_25033_25056[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25015 === 14))
{var inst_25007 = (state_25014[2]);var inst_25008 = cljs.core.async.close_BANG_.call(null,out);var state_25014__$1 = (function (){var statearr_25034 = state_25014;(statearr_25034[13] = inst_25007);
return statearr_25034;
})();var statearr_25035_25057 = state_25014__$1;(statearr_25035_25057[2] = inst_25008);
(statearr_25035_25057[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25015 === 15))
{var inst_25004 = (state_25014[2]);var state_25014__$1 = state_25014;var statearr_25036_25058 = state_25014__$1;(statearr_25036_25058[2] = inst_25004);
(statearr_25036_25058[1] = 14);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_25040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25040[0] = state_machine__12118__auto__);
(statearr_25040[1] = 1);
return statearr_25040;
});
var state_machine__12118__auto____1 = (function (state_25014){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_25014);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e25041){if((e25041 instanceof Object))
{var ex__12121__auto__ = e25041;var statearr_25042_25059 = state_25014;(statearr_25042_25059[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25014);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25041;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25060 = state_25014;
state_25014 = G__25060;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_25014){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_25014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_25043 = f__12188__auto__.call(null);(statearr_25043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___25044);
return statearr_25043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___25203 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_25173){var state_val_25174 = (state_25173[1]);if((state_val_25174 === 1))
{var inst_25132 = [];var inst_25133 = inst_25132;var inst_25134 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_25173__$1 = (function (){var statearr_25175 = state_25173;(statearr_25175[7] = inst_25134);
(statearr_25175[8] = inst_25133);
return statearr_25175;
})();var statearr_25176_25204 = state_25173__$1;(statearr_25176_25204[2] = null);
(statearr_25176_25204[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25174 === 2))
{var state_25173__$1 = state_25173;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25173__$1,4,ch);
} else
{if((state_val_25174 === 3))
{var inst_25171 = (state_25173[2]);var state_25173__$1 = state_25173;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25173__$1,inst_25171);
} else
{if((state_val_25174 === 4))
{var inst_25137 = (state_25173[9]);var inst_25137__$1 = (state_25173[2]);var inst_25138 = (inst_25137__$1 == null);var inst_25139 = cljs.core.not.call(null,inst_25138);var state_25173__$1 = (function (){var statearr_25177 = state_25173;(statearr_25177[9] = inst_25137__$1);
return statearr_25177;
})();if(inst_25139)
{var statearr_25178_25205 = state_25173__$1;(statearr_25178_25205[1] = 5);
} else
{var statearr_25179_25206 = state_25173__$1;(statearr_25179_25206[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25174 === 5))
{var inst_25134 = (state_25173[7]);var inst_25137 = (state_25173[9]);var inst_25141 = (state_25173[10]);var inst_25141__$1 = f.call(null,inst_25137);var inst_25142 = cljs.core._EQ_.call(null,inst_25141__$1,inst_25134);var inst_25143 = cljs.core.keyword_identical_QMARK_.call(null,inst_25134,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_25144 = (inst_25142) || (inst_25143);var state_25173__$1 = (function (){var statearr_25180 = state_25173;(statearr_25180[10] = inst_25141__$1);
return statearr_25180;
})();if(cljs.core.truth_(inst_25144))
{var statearr_25181_25207 = state_25173__$1;(statearr_25181_25207[1] = 8);
} else
{var statearr_25182_25208 = state_25173__$1;(statearr_25182_25208[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25174 === 6))
{var inst_25133 = (state_25173[8]);var inst_25158 = inst_25133.length;var inst_25159 = (inst_25158 > 0);var state_25173__$1 = state_25173;if(cljs.core.truth_(inst_25159))
{var statearr_25184_25209 = state_25173__$1;(statearr_25184_25209[1] = 12);
} else
{var statearr_25185_25210 = state_25173__$1;(statearr_25185_25210[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25174 === 7))
{var inst_25169 = (state_25173[2]);var state_25173__$1 = state_25173;var statearr_25186_25211 = state_25173__$1;(statearr_25186_25211[2] = inst_25169);
(statearr_25186_25211[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25174 === 8))
{var inst_25133 = (state_25173[8]);var inst_25137 = (state_25173[9]);var inst_25141 = (state_25173[10]);var inst_25146 = inst_25133.push(inst_25137);var tmp25183 = inst_25133;var inst_25133__$1 = tmp25183;var inst_25134 = inst_25141;var state_25173__$1 = (function (){var statearr_25187 = state_25173;(statearr_25187[7] = inst_25134);
(statearr_25187[8] = inst_25133__$1);
(statearr_25187[11] = inst_25146);
return statearr_25187;
})();var statearr_25188_25212 = state_25173__$1;(statearr_25188_25212[2] = null);
(statearr_25188_25212[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25174 === 9))
{var inst_25133 = (state_25173[8]);var inst_25149 = cljs.core.vec.call(null,inst_25133);var state_25173__$1 = state_25173;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25173__$1,11,out,inst_25149);
} else
{if((state_val_25174 === 10))
{var inst_25156 = (state_25173[2]);var state_25173__$1 = state_25173;var statearr_25189_25213 = state_25173__$1;(statearr_25189_25213[2] = inst_25156);
(statearr_25189_25213[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25174 === 11))
{var inst_25137 = (state_25173[9]);var inst_25141 = (state_25173[10]);var inst_25151 = (state_25173[2]);var inst_25152 = [];var inst_25153 = inst_25152.push(inst_25137);var inst_25133 = inst_25152;var inst_25134 = inst_25141;var state_25173__$1 = (function (){var statearr_25190 = state_25173;(statearr_25190[7] = inst_25134);
(statearr_25190[8] = inst_25133);
(statearr_25190[12] = inst_25151);
(statearr_25190[13] = inst_25153);
return statearr_25190;
})();var statearr_25191_25214 = state_25173__$1;(statearr_25191_25214[2] = null);
(statearr_25191_25214[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25174 === 12))
{var inst_25133 = (state_25173[8]);var inst_25161 = cljs.core.vec.call(null,inst_25133);var state_25173__$1 = state_25173;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25173__$1,15,out,inst_25161);
} else
{if((state_val_25174 === 13))
{var state_25173__$1 = state_25173;var statearr_25192_25215 = state_25173__$1;(statearr_25192_25215[2] = null);
(statearr_25192_25215[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25174 === 14))
{var inst_25166 = (state_25173[2]);var inst_25167 = cljs.core.async.close_BANG_.call(null,out);var state_25173__$1 = (function (){var statearr_25193 = state_25173;(statearr_25193[14] = inst_25166);
return statearr_25193;
})();var statearr_25194_25216 = state_25173__$1;(statearr_25194_25216[2] = inst_25167);
(statearr_25194_25216[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25174 === 15))
{var inst_25163 = (state_25173[2]);var state_25173__$1 = state_25173;var statearr_25195_25217 = state_25173__$1;(statearr_25195_25217[2] = inst_25163);
(statearr_25195_25217[1] = 14);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_25199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25199[0] = state_machine__12118__auto__);
(statearr_25199[1] = 1);
return statearr_25199;
});
var state_machine__12118__auto____1 = (function (state_25173){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_25173);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e25200){if((e25200 instanceof Object))
{var ex__12121__auto__ = e25200;var statearr_25201_25218 = state_25173;(statearr_25201_25218[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25173);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25200;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25219 = state_25173;
state_25173 = G__25219;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_25173){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_25173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_25202 = f__12188__auto__.call(null);(statearr_25202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___25203);
return statearr_25202;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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