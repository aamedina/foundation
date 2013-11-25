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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t20159 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20159 = (function (f,fn_handler,meta20160){
this.f = f;
this.fn_handler = fn_handler;
this.meta20160 = meta20160;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20159.cljs$lang$type = true;
cljs.core.async.t20159.cljs$lang$ctorStr = "cljs.core.async/t20159";
cljs.core.async.t20159.cljs$lang$ctorPrWriter = (function (this__6848__auto__,writer__6849__auto__,opt__6850__auto__){return cljs.core._write.call(null,writer__6849__auto__,"cljs.core.async/t20159");
});
cljs.core.async.t20159.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t20159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t20159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20161){var self__ = this;
var _20161__$1 = this;return self__.meta20160;
});
cljs.core.async.t20159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20161,meta20160__$1){var self__ = this;
var _20161__$1 = this;return (new cljs.core.async.t20159(self__.f,self__.fn_handler,meta20160__$1));
});
cljs.core.async.__GT_t20159 = (function __GT_t20159(f__$1,fn_handler__$1,meta20160){return (new cljs.core.async.t20159(f__$1,fn_handler__$1,meta20160));
});
}
return (new cljs.core.async.t20159(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__20163 = buff;if(G__20163)
{var bit__6930__auto__ = null;if(cljs.core.truth_((function (){var or__6304__auto__ = bit__6930__auto__;if(cljs.core.truth_(or__6304__auto__))
{return or__6304__auto__;
} else
{return G__20163.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__20163.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20163);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20163);
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
{var val_20164 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_20164);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_20164);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__6292__auto__ = ret;if(cljs.core.truth_(and__6292__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__6292__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7127__auto___20165 = n;var x_20166 = 0;while(true){
if((x_20166 < n__7127__auto___20165))
{(a[x_20166] = 0);
{
var G__20167 = (x_20166 + 1);
x_20166 = G__20167;
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
var G__20168 = (i + 1);
i = G__20168;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t20172 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20172 = (function (flag,alt_flag,meta20173){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20173 = meta20173;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20172.cljs$lang$type = true;
cljs.core.async.t20172.cljs$lang$ctorStr = "cljs.core.async/t20172";
cljs.core.async.t20172.cljs$lang$ctorPrWriter = (function (this__6848__auto__,writer__6849__auto__,opt__6850__auto__){return cljs.core._write.call(null,writer__6849__auto__,"cljs.core.async/t20172");
});
cljs.core.async.t20172.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20172.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t20172.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t20172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20174){var self__ = this;
var _20174__$1 = this;return self__.meta20173;
});
cljs.core.async.t20172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20174,meta20173__$1){var self__ = this;
var _20174__$1 = this;return (new cljs.core.async.t20172(self__.flag,self__.alt_flag,meta20173__$1));
});
cljs.core.async.__GT_t20172 = (function __GT_t20172(flag__$1,alt_flag__$1,meta20173){return (new cljs.core.async.t20172(flag__$1,alt_flag__$1,meta20173));
});
}
return (new cljs.core.async.t20172(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t20178 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20178 = (function (cb,flag,alt_handler,meta20179){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20179 = meta20179;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20178.cljs$lang$type = true;
cljs.core.async.t20178.cljs$lang$ctorStr = "cljs.core.async/t20178";
cljs.core.async.t20178.cljs$lang$ctorPrWriter = (function (this__6848__auto__,writer__6849__auto__,opt__6850__auto__){return cljs.core._write.call(null,writer__6849__auto__,"cljs.core.async/t20178");
});
cljs.core.async.t20178.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20178.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t20178.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t20178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20180){var self__ = this;
var _20180__$1 = this;return self__.meta20179;
});
cljs.core.async.t20178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20180,meta20179__$1){var self__ = this;
var _20180__$1 = this;return (new cljs.core.async.t20178(self__.cb,self__.flag,self__.alt_handler,meta20179__$1));
});
cljs.core.async.__GT_t20178 = (function __GT_t20178(cb__$1,flag__$1,alt_handler__$1,meta20179){return (new cljs.core.async.t20178(cb__$1,flag__$1,alt_handler__$1,meta20179));
});
}
return (new cljs.core.async.t20178(cb,flag,alt_handler,null));
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
return (function (p1__20181_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20181_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6304__auto__ = wport;if(cljs.core.truth_(or__6304__auto__))
{return or__6304__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__20182 = (i + 1);
i = G__20182;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__6304__auto__ = ret;if(cljs.core.truth_(or__6304__auto__))
{return or__6304__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4098__auto__ = (function (){var and__6292__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__6292__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__6292__auto__;
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
var alts_BANG___delegate = function (ports,p__20183){var map__20185 = p__20183;var map__20185__$1 = ((cljs.core.seq_QMARK_.call(null,map__20185))?cljs.core.apply.call(null,cljs.core.hash_map,map__20185):map__20185);var opts = map__20185__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__20183 = null;if (arguments.length > 1) {
  p__20183 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__20183);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20186){
var ports = cljs.core.first(arglist__20186);
var p__20183 = cljs.core.rest(arglist__20186);
return alts_BANG___delegate(ports,p__20183);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t20194 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20194 = (function (ch,f,map_LT_,meta20195){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20195 = meta20195;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20194.cljs$lang$type = true;
cljs.core.async.t20194.cljs$lang$ctorStr = "cljs.core.async/t20194";
cljs.core.async.t20194.cljs$lang$ctorPrWriter = (function (this__6848__auto__,writer__6849__auto__,opt__6850__auto__){return cljs.core._write.call(null,writer__6849__auto__,"cljs.core.async/t20194");
});
cljs.core.async.t20194.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20194.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t20194.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20194.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t20197 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20197 = (function (fn1,_,meta20195,ch,f,map_LT_,meta20198){
this.fn1 = fn1;
this._ = _;
this.meta20195 = meta20195;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20198 = meta20198;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20197.cljs$lang$type = true;
cljs.core.async.t20197.cljs$lang$ctorStr = "cljs.core.async/t20197";
cljs.core.async.t20197.cljs$lang$ctorPrWriter = (function (this__6848__auto__,writer__6849__auto__,opt__6850__auto__){return cljs.core._write.call(null,writer__6849__auto__,"cljs.core.async/t20197");
});
cljs.core.async.t20197.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20197.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t20197.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t20197.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__20187_SHARP_){return f1.call(null,(((p1__20187_SHARP_ == null))?null:self__.f.call(null,p1__20187_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t20197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20199){var self__ = this;
var _20199__$1 = this;return self__.meta20198;
});
cljs.core.async.t20197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20199,meta20198__$1){var self__ = this;
var _20199__$1 = this;return (new cljs.core.async.t20197(self__.fn1,self__._,self__.meta20195,self__.ch,self__.f,self__.map_LT_,meta20198__$1));
});
cljs.core.async.__GT_t20197 = (function __GT_t20197(fn1__$1,___$2,meta20195__$1,ch__$2,f__$2,map_LT___$2,meta20198){return (new cljs.core.async.t20197(fn1__$1,___$2,meta20195__$1,ch__$2,f__$2,map_LT___$2,meta20198));
});
}
return (new cljs.core.async.t20197(fn1,___$1,self__.meta20195,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__6292__auto__ = ret;if(cljs.core.truth_(and__6292__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__6292__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t20194.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20194.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t20194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20196){var self__ = this;
var _20196__$1 = this;return self__.meta20195;
});
cljs.core.async.t20194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20196,meta20195__$1){var self__ = this;
var _20196__$1 = this;return (new cljs.core.async.t20194(self__.ch,self__.f,self__.map_LT_,meta20195__$1));
});
cljs.core.async.__GT_t20194 = (function __GT_t20194(ch__$1,f__$1,map_LT___$1,meta20195){return (new cljs.core.async.t20194(ch__$1,f__$1,map_LT___$1,meta20195));
});
}
return (new cljs.core.async.t20194(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t20203 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20203 = (function (ch,f,map_GT_,meta20204){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20204 = meta20204;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20203.cljs$lang$type = true;
cljs.core.async.t20203.cljs$lang$ctorStr = "cljs.core.async/t20203";
cljs.core.async.t20203.cljs$lang$ctorPrWriter = (function (this__6848__auto__,writer__6849__auto__,opt__6850__auto__){return cljs.core._write.call(null,writer__6849__auto__,"cljs.core.async/t20203");
});
cljs.core.async.t20203.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20203.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t20203.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20203.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t20203.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20203.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t20203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20205){var self__ = this;
var _20205__$1 = this;return self__.meta20204;
});
cljs.core.async.t20203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20205,meta20204__$1){var self__ = this;
var _20205__$1 = this;return (new cljs.core.async.t20203(self__.ch,self__.f,self__.map_GT_,meta20204__$1));
});
cljs.core.async.__GT_t20203 = (function __GT_t20203(ch__$1,f__$1,map_GT___$1,meta20204){return (new cljs.core.async.t20203(ch__$1,f__$1,map_GT___$1,meta20204));
});
}
return (new cljs.core.async.t20203(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t20209 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20209 = (function (ch,p,filter_GT_,meta20210){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20210 = meta20210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20209.cljs$lang$type = true;
cljs.core.async.t20209.cljs$lang$ctorStr = "cljs.core.async/t20209";
cljs.core.async.t20209.cljs$lang$ctorPrWriter = (function (this__6848__auto__,writer__6849__auto__,opt__6850__auto__){return cljs.core._write.call(null,writer__6849__auto__,"cljs.core.async/t20209");
});
cljs.core.async.t20209.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20209.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t20209.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20209.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t20209.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20209.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t20209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20211){var self__ = this;
var _20211__$1 = this;return self__.meta20210;
});
cljs.core.async.t20209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20211,meta20210__$1){var self__ = this;
var _20211__$1 = this;return (new cljs.core.async.t20209(self__.ch,self__.p,self__.filter_GT_,meta20210__$1));
});
cljs.core.async.__GT_t20209 = (function __GT_t20209(ch__$1,p__$1,filter_GT___$1,meta20210){return (new cljs.core.async.t20209(ch__$1,p__$1,filter_GT___$1,meta20210));
});
}
return (new cljs.core.async.t20209(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12343__auto___20294 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12344__auto__ = (function (){var switch__12213__auto__ = (function (state_20273){var state_val_20274 = (state_20273[1]);if((state_val_20274 === 1))
{var state_20273__$1 = state_20273;var statearr_20275_20295 = state_20273__$1;(statearr_20275_20295[2] = null);
(statearr_20275_20295[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20274 === 2))
{var state_20273__$1 = state_20273;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20273__$1,4,ch);
} else
{if((state_val_20274 === 3))
{var inst_20271 = (state_20273[2]);var state_20273__$1 = state_20273;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20273__$1,inst_20271);
} else
{if((state_val_20274 === 4))
{var inst_20255 = (state_20273[7]);var inst_20255__$1 = (state_20273[2]);var inst_20256 = (inst_20255__$1 == null);var state_20273__$1 = (function (){var statearr_20276 = state_20273;(statearr_20276[7] = inst_20255__$1);
return statearr_20276;
})();if(cljs.core.truth_(inst_20256))
{var statearr_20277_20296 = state_20273__$1;(statearr_20277_20296[1] = 5);
} else
{var statearr_20278_20297 = state_20273__$1;(statearr_20278_20297[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20274 === 5))
{var inst_20258 = cljs.core.async.close_BANG_.call(null,out);var state_20273__$1 = state_20273;var statearr_20279_20298 = state_20273__$1;(statearr_20279_20298[2] = inst_20258);
(statearr_20279_20298[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20274 === 6))
{var inst_20255 = (state_20273[7]);var inst_20260 = p.call(null,inst_20255);var state_20273__$1 = state_20273;if(cljs.core.truth_(inst_20260))
{var statearr_20280_20299 = state_20273__$1;(statearr_20280_20299[1] = 8);
} else
{var statearr_20281_20300 = state_20273__$1;(statearr_20281_20300[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20274 === 7))
{var inst_20269 = (state_20273[2]);var state_20273__$1 = state_20273;var statearr_20282_20301 = state_20273__$1;(statearr_20282_20301[2] = inst_20269);
(statearr_20282_20301[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20274 === 8))
{var inst_20255 = (state_20273[7]);var state_20273__$1 = state_20273;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20273__$1,11,out,inst_20255);
} else
{if((state_val_20274 === 9))
{var state_20273__$1 = state_20273;var statearr_20283_20302 = state_20273__$1;(statearr_20283_20302[2] = null);
(statearr_20283_20302[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20274 === 10))
{var inst_20266 = (state_20273[2]);var state_20273__$1 = (function (){var statearr_20284 = state_20273;(statearr_20284[8] = inst_20266);
return statearr_20284;
})();var statearr_20285_20303 = state_20273__$1;(statearr_20285_20303[2] = null);
(statearr_20285_20303[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20274 === 11))
{var inst_20263 = (state_20273[2]);var state_20273__$1 = state_20273;var statearr_20286_20304 = state_20273__$1;(statearr_20286_20304[2] = inst_20263);
(statearr_20286_20304[1] = 10);
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
});return ((function (switch__12213__auto__){
return (function() {
var state_machine__12214__auto__ = null;
var state_machine__12214__auto____0 = (function (){var statearr_20290 = (new Array(9));(statearr_20290[0] = state_machine__12214__auto__);
(statearr_20290[1] = 1);
return statearr_20290;
});
var state_machine__12214__auto____1 = (function (state_20273){while(true){
var ret_value__12215__auto__ = (function (){try{while(true){
var result__12216__auto__ = switch__12213__auto__.call(null,state_20273);if(cljs.core.keyword_identical_QMARK_.call(null,result__12216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12216__auto__;
}
break;
}
}catch (e20291){if((e20291 instanceof Object))
{var ex__12217__auto__ = e20291;var statearr_20292_20305 = state_20273;(statearr_20292_20305[5] = ex__12217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20273);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20306 = state_20273;
state_20273 = G__20306;
continue;
}
} else
{return ret_value__12215__auto__;
}
break;
}
});
state_machine__12214__auto__ = function(state_20273){
switch(arguments.length){
case 0:
return state_machine__12214__auto____0.call(this);
case 1:
return state_machine__12214__auto____1.call(this,state_20273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12214__auto____0;
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12214__auto____1;
return state_machine__12214__auto__;
})()
;})(switch__12213__auto__))
})();var state__12345__auto__ = (function (){var statearr_20293 = f__12344__auto__.call(null);(statearr_20293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12343__auto___20294);
return statearr_20293;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12345__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12343__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12344__auto__ = (function (){var switch__12213__auto__ = (function (state_20458){var state_val_20459 = (state_20458[1]);if((state_val_20459 === 1))
{var state_20458__$1 = state_20458;var statearr_20460_20497 = state_20458__$1;(statearr_20460_20497[2] = null);
(statearr_20460_20497[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 2))
{var state_20458__$1 = state_20458;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20458__$1,4,in$);
} else
{if((state_val_20459 === 3))
{var inst_20456 = (state_20458[2]);var state_20458__$1 = state_20458;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20458__$1,inst_20456);
} else
{if((state_val_20459 === 4))
{var inst_20404 = (state_20458[7]);var inst_20404__$1 = (state_20458[2]);var inst_20405 = (inst_20404__$1 == null);var state_20458__$1 = (function (){var statearr_20461 = state_20458;(statearr_20461[7] = inst_20404__$1);
return statearr_20461;
})();if(cljs.core.truth_(inst_20405))
{var statearr_20462_20498 = state_20458__$1;(statearr_20462_20498[1] = 5);
} else
{var statearr_20463_20499 = state_20458__$1;(statearr_20463_20499[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 5))
{var inst_20407 = cljs.core.async.close_BANG_.call(null,out);var state_20458__$1 = state_20458;var statearr_20464_20500 = state_20458__$1;(statearr_20464_20500[2] = inst_20407);
(statearr_20464_20500[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 6))
{var inst_20404 = (state_20458[7]);var inst_20409 = f.call(null,inst_20404);var inst_20414 = cljs.core.seq.call(null,inst_20409);var inst_20415 = inst_20414;var inst_20416 = null;var inst_20417 = 0;var inst_20418 = 0;var state_20458__$1 = (function (){var statearr_20465 = state_20458;(statearr_20465[8] = inst_20415);
(statearr_20465[9] = inst_20417);
(statearr_20465[10] = inst_20416);
(statearr_20465[11] = inst_20418);
return statearr_20465;
})();var statearr_20466_20501 = state_20458__$1;(statearr_20466_20501[2] = null);
(statearr_20466_20501[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 7))
{var inst_20454 = (state_20458[2]);var state_20458__$1 = state_20458;var statearr_20467_20502 = state_20458__$1;(statearr_20467_20502[2] = inst_20454);
(statearr_20467_20502[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 8))
{var inst_20417 = (state_20458[9]);var inst_20418 = (state_20458[11]);var inst_20420 = (inst_20418 < inst_20417);var inst_20421 = inst_20420;var state_20458__$1 = state_20458;if(cljs.core.truth_(inst_20421))
{var statearr_20468_20503 = state_20458__$1;(statearr_20468_20503[1] = 10);
} else
{var statearr_20469_20504 = state_20458__$1;(statearr_20469_20504[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 9))
{var inst_20451 = (state_20458[2]);var state_20458__$1 = (function (){var statearr_20470 = state_20458;(statearr_20470[12] = inst_20451);
return statearr_20470;
})();var statearr_20471_20505 = state_20458__$1;(statearr_20471_20505[2] = null);
(statearr_20471_20505[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 10))
{var inst_20416 = (state_20458[10]);var inst_20418 = (state_20458[11]);var inst_20423 = cljs.core._nth.call(null,inst_20416,inst_20418);var state_20458__$1 = state_20458;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20458__$1,13,out,inst_20423);
} else
{if((state_val_20459 === 11))
{var inst_20415 = (state_20458[8]);var inst_20429 = (state_20458[13]);var inst_20429__$1 = cljs.core.seq.call(null,inst_20415);var state_20458__$1 = (function (){var statearr_20475 = state_20458;(statearr_20475[13] = inst_20429__$1);
return statearr_20475;
})();if(inst_20429__$1)
{var statearr_20476_20506 = state_20458__$1;(statearr_20476_20506[1] = 14);
} else
{var statearr_20477_20507 = state_20458__$1;(statearr_20477_20507[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 12))
{var inst_20449 = (state_20458[2]);var state_20458__$1 = state_20458;var statearr_20478_20508 = state_20458__$1;(statearr_20478_20508[2] = inst_20449);
(statearr_20478_20508[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 13))
{var inst_20415 = (state_20458[8]);var inst_20417 = (state_20458[9]);var inst_20416 = (state_20458[10]);var inst_20418 = (state_20458[11]);var inst_20425 = (state_20458[2]);var inst_20426 = (inst_20418 + 1);var tmp20472 = inst_20415;var tmp20473 = inst_20417;var tmp20474 = inst_20416;var inst_20415__$1 = tmp20472;var inst_20416__$1 = tmp20474;var inst_20417__$1 = tmp20473;var inst_20418__$1 = inst_20426;var state_20458__$1 = (function (){var statearr_20479 = state_20458;(statearr_20479[8] = inst_20415__$1);
(statearr_20479[9] = inst_20417__$1);
(statearr_20479[10] = inst_20416__$1);
(statearr_20479[11] = inst_20418__$1);
(statearr_20479[14] = inst_20425);
return statearr_20479;
})();var statearr_20480_20509 = state_20458__$1;(statearr_20480_20509[2] = null);
(statearr_20480_20509[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 14))
{var inst_20429 = (state_20458[13]);var inst_20431 = cljs.core.chunked_seq_QMARK_.call(null,inst_20429);var state_20458__$1 = state_20458;if(inst_20431)
{var statearr_20481_20510 = state_20458__$1;(statearr_20481_20510[1] = 17);
} else
{var statearr_20482_20511 = state_20458__$1;(statearr_20482_20511[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 15))
{var state_20458__$1 = state_20458;var statearr_20483_20512 = state_20458__$1;(statearr_20483_20512[2] = null);
(statearr_20483_20512[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 16))
{var inst_20447 = (state_20458[2]);var state_20458__$1 = state_20458;var statearr_20484_20513 = state_20458__$1;(statearr_20484_20513[2] = inst_20447);
(statearr_20484_20513[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 17))
{var inst_20429 = (state_20458[13]);var inst_20433 = cljs.core.chunk_first.call(null,inst_20429);var inst_20434 = cljs.core.chunk_rest.call(null,inst_20429);var inst_20435 = cljs.core.count.call(null,inst_20433);var inst_20415 = inst_20434;var inst_20416 = inst_20433;var inst_20417 = inst_20435;var inst_20418 = 0;var state_20458__$1 = (function (){var statearr_20485 = state_20458;(statearr_20485[8] = inst_20415);
(statearr_20485[9] = inst_20417);
(statearr_20485[10] = inst_20416);
(statearr_20485[11] = inst_20418);
return statearr_20485;
})();var statearr_20486_20514 = state_20458__$1;(statearr_20486_20514[2] = null);
(statearr_20486_20514[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 18))
{var inst_20429 = (state_20458[13]);var inst_20438 = cljs.core.first.call(null,inst_20429);var state_20458__$1 = state_20458;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20458__$1,20,out,inst_20438);
} else
{if((state_val_20459 === 19))
{var inst_20444 = (state_20458[2]);var state_20458__$1 = state_20458;var statearr_20487_20515 = state_20458__$1;(statearr_20487_20515[2] = inst_20444);
(statearr_20487_20515[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20459 === 20))
{var inst_20429 = (state_20458[13]);var inst_20440 = (state_20458[2]);var inst_20441 = cljs.core.next.call(null,inst_20429);var inst_20415 = inst_20441;var inst_20416 = null;var inst_20417 = 0;var inst_20418 = 0;var state_20458__$1 = (function (){var statearr_20488 = state_20458;(statearr_20488[8] = inst_20415);
(statearr_20488[9] = inst_20417);
(statearr_20488[10] = inst_20416);
(statearr_20488[11] = inst_20418);
(statearr_20488[15] = inst_20440);
return statearr_20488;
})();var statearr_20489_20516 = state_20458__$1;(statearr_20489_20516[2] = null);
(statearr_20489_20516[1] = 8);
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
});return ((function (switch__12213__auto__){
return (function() {
var state_machine__12214__auto__ = null;
var state_machine__12214__auto____0 = (function (){var statearr_20493 = (new Array(16));(statearr_20493[0] = state_machine__12214__auto__);
(statearr_20493[1] = 1);
return statearr_20493;
});
var state_machine__12214__auto____1 = (function (state_20458){while(true){
var ret_value__12215__auto__ = (function (){try{while(true){
var result__12216__auto__ = switch__12213__auto__.call(null,state_20458);if(cljs.core.keyword_identical_QMARK_.call(null,result__12216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12216__auto__;
}
break;
}
}catch (e20494){if((e20494 instanceof Object))
{var ex__12217__auto__ = e20494;var statearr_20495_20517 = state_20458;(statearr_20495_20517[5] = ex__12217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20458);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20494;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20518 = state_20458;
state_20458 = G__20518;
continue;
}
} else
{return ret_value__12215__auto__;
}
break;
}
});
state_machine__12214__auto__ = function(state_20458){
switch(arguments.length){
case 0:
return state_machine__12214__auto____0.call(this);
case 1:
return state_machine__12214__auto____1.call(this,state_20458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12214__auto____0;
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12214__auto____1;
return state_machine__12214__auto__;
})()
;})(switch__12213__auto__))
})();var state__12345__auto__ = (function (){var statearr_20496 = f__12344__auto__.call(null);(statearr_20496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12343__auto__);
return statearr_20496;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12345__auto__);
}));
return c__12343__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12343__auto___20599 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12344__auto__ = (function (){var switch__12213__auto__ = (function (state_20578){var state_val_20579 = (state_20578[1]);if((state_val_20579 === 1))
{var state_20578__$1 = state_20578;var statearr_20580_20600 = state_20578__$1;(statearr_20580_20600[2] = null);
(statearr_20580_20600[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20579 === 2))
{var state_20578__$1 = state_20578;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20578__$1,4,from);
} else
{if((state_val_20579 === 3))
{var inst_20576 = (state_20578[2]);var state_20578__$1 = state_20578;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20578__$1,inst_20576);
} else
{if((state_val_20579 === 4))
{var inst_20561 = (state_20578[7]);var inst_20561__$1 = (state_20578[2]);var inst_20562 = (inst_20561__$1 == null);var state_20578__$1 = (function (){var statearr_20581 = state_20578;(statearr_20581[7] = inst_20561__$1);
return statearr_20581;
})();if(cljs.core.truth_(inst_20562))
{var statearr_20582_20601 = state_20578__$1;(statearr_20582_20601[1] = 5);
} else
{var statearr_20583_20602 = state_20578__$1;(statearr_20583_20602[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20579 === 5))
{var state_20578__$1 = state_20578;if(cljs.core.truth_(close_QMARK_))
{var statearr_20584_20603 = state_20578__$1;(statearr_20584_20603[1] = 8);
} else
{var statearr_20585_20604 = state_20578__$1;(statearr_20585_20604[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20579 === 6))
{var inst_20561 = (state_20578[7]);var state_20578__$1 = state_20578;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20578__$1,11,to,inst_20561);
} else
{if((state_val_20579 === 7))
{var inst_20574 = (state_20578[2]);var state_20578__$1 = state_20578;var statearr_20586_20605 = state_20578__$1;(statearr_20586_20605[2] = inst_20574);
(statearr_20586_20605[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20579 === 8))
{var inst_20565 = cljs.core.async.close_BANG_.call(null,to);var state_20578__$1 = state_20578;var statearr_20587_20606 = state_20578__$1;(statearr_20587_20606[2] = inst_20565);
(statearr_20587_20606[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20579 === 9))
{var state_20578__$1 = state_20578;var statearr_20588_20607 = state_20578__$1;(statearr_20588_20607[2] = null);
(statearr_20588_20607[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20579 === 10))
{var inst_20568 = (state_20578[2]);var state_20578__$1 = state_20578;var statearr_20589_20608 = state_20578__$1;(statearr_20589_20608[2] = inst_20568);
(statearr_20589_20608[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20579 === 11))
{var inst_20571 = (state_20578[2]);var state_20578__$1 = (function (){var statearr_20590 = state_20578;(statearr_20590[8] = inst_20571);
return statearr_20590;
})();var statearr_20591_20609 = state_20578__$1;(statearr_20591_20609[2] = null);
(statearr_20591_20609[1] = 2);
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
});return ((function (switch__12213__auto__){
return (function() {
var state_machine__12214__auto__ = null;
var state_machine__12214__auto____0 = (function (){var statearr_20595 = (new Array(9));(statearr_20595[0] = state_machine__12214__auto__);
(statearr_20595[1] = 1);
return statearr_20595;
});
var state_machine__12214__auto____1 = (function (state_20578){while(true){
var ret_value__12215__auto__ = (function (){try{while(true){
var result__12216__auto__ = switch__12213__auto__.call(null,state_20578);if(cljs.core.keyword_identical_QMARK_.call(null,result__12216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12216__auto__;
}
break;
}
}catch (e20596){if((e20596 instanceof Object))
{var ex__12217__auto__ = e20596;var statearr_20597_20610 = state_20578;(statearr_20597_20610[5] = ex__12217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20578);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20596;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20611 = state_20578;
state_20578 = G__20611;
continue;
}
} else
{return ret_value__12215__auto__;
}
break;
}
});
state_machine__12214__auto__ = function(state_20578){
switch(arguments.length){
case 0:
return state_machine__12214__auto____0.call(this);
case 1:
return state_machine__12214__auto____1.call(this,state_20578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12214__auto____0;
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12214__auto____1;
return state_machine__12214__auto__;
})()
;})(switch__12213__auto__))
})();var state__12345__auto__ = (function (){var statearr_20598 = f__12344__auto__.call(null);(statearr_20598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12343__auto___20599);
return statearr_20598;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12345__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12343__auto___20698 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12344__auto__ = (function (){var switch__12213__auto__ = (function (state_20676){var state_val_20677 = (state_20676[1]);if((state_val_20677 === 1))
{var state_20676__$1 = state_20676;var statearr_20678_20699 = state_20676__$1;(statearr_20678_20699[2] = null);
(statearr_20678_20699[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20677 === 2))
{var state_20676__$1 = state_20676;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20676__$1,4,ch);
} else
{if((state_val_20677 === 3))
{var inst_20674 = (state_20676[2]);var state_20676__$1 = state_20676;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20676__$1,inst_20674);
} else
{if((state_val_20677 === 4))
{var inst_20657 = (state_20676[7]);var inst_20657__$1 = (state_20676[2]);var inst_20658 = (inst_20657__$1 == null);var state_20676__$1 = (function (){var statearr_20679 = state_20676;(statearr_20679[7] = inst_20657__$1);
return statearr_20679;
})();if(cljs.core.truth_(inst_20658))
{var statearr_20680_20700 = state_20676__$1;(statearr_20680_20700[1] = 5);
} else
{var statearr_20681_20701 = state_20676__$1;(statearr_20681_20701[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20677 === 5))
{var inst_20660 = cljs.core.async.close_BANG_.call(null,tc);var inst_20661 = cljs.core.async.close_BANG_.call(null,fc);var state_20676__$1 = (function (){var statearr_20682 = state_20676;(statearr_20682[8] = inst_20660);
return statearr_20682;
})();var statearr_20683_20702 = state_20676__$1;(statearr_20683_20702[2] = inst_20661);
(statearr_20683_20702[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20677 === 6))
{var inst_20657 = (state_20676[7]);var inst_20663 = p.call(null,inst_20657);var state_20676__$1 = state_20676;if(cljs.core.truth_(inst_20663))
{var statearr_20684_20703 = state_20676__$1;(statearr_20684_20703[1] = 9);
} else
{var statearr_20685_20704 = state_20676__$1;(statearr_20685_20704[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20677 === 7))
{var inst_20672 = (state_20676[2]);var state_20676__$1 = state_20676;var statearr_20686_20705 = state_20676__$1;(statearr_20686_20705[2] = inst_20672);
(statearr_20686_20705[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20677 === 8))
{var inst_20669 = (state_20676[2]);var state_20676__$1 = (function (){var statearr_20687 = state_20676;(statearr_20687[9] = inst_20669);
return statearr_20687;
})();var statearr_20688_20706 = state_20676__$1;(statearr_20688_20706[2] = null);
(statearr_20688_20706[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20677 === 9))
{var state_20676__$1 = state_20676;var statearr_20689_20707 = state_20676__$1;(statearr_20689_20707[2] = tc);
(statearr_20689_20707[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20677 === 10))
{var state_20676__$1 = state_20676;var statearr_20690_20708 = state_20676__$1;(statearr_20690_20708[2] = fc);
(statearr_20690_20708[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20677 === 11))
{var inst_20657 = (state_20676[7]);var inst_20667 = (state_20676[2]);var state_20676__$1 = state_20676;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20676__$1,8,inst_20667,inst_20657);
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
});return ((function (switch__12213__auto__){
return (function() {
var state_machine__12214__auto__ = null;
var state_machine__12214__auto____0 = (function (){var statearr_20694 = (new Array(10));(statearr_20694[0] = state_machine__12214__auto__);
(statearr_20694[1] = 1);
return statearr_20694;
});
var state_machine__12214__auto____1 = (function (state_20676){while(true){
var ret_value__12215__auto__ = (function (){try{while(true){
var result__12216__auto__ = switch__12213__auto__.call(null,state_20676);if(cljs.core.keyword_identical_QMARK_.call(null,result__12216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12216__auto__;
}
break;
}
}catch (e20695){if((e20695 instanceof Object))
{var ex__12217__auto__ = e20695;var statearr_20696_20709 = state_20676;(statearr_20696_20709[5] = ex__12217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20676);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20695;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20710 = state_20676;
state_20676 = G__20710;
continue;
}
} else
{return ret_value__12215__auto__;
}
break;
}
});
state_machine__12214__auto__ = function(state_20676){
switch(arguments.length){
case 0:
return state_machine__12214__auto____0.call(this);
case 1:
return state_machine__12214__auto____1.call(this,state_20676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12214__auto____0;
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12214__auto____1;
return state_machine__12214__auto__;
})()
;})(switch__12213__auto__))
})();var state__12345__auto__ = (function (){var statearr_20697 = f__12344__auto__.call(null);(statearr_20697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12343__auto___20698);
return statearr_20697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12345__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12343__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12344__auto__ = (function (){var switch__12213__auto__ = (function (state_20757){var state_val_20758 = (state_20757[1]);if((state_val_20758 === 7))
{var inst_20753 = (state_20757[2]);var state_20757__$1 = state_20757;var statearr_20759_20775 = state_20757__$1;(statearr_20759_20775[2] = inst_20753);
(statearr_20759_20775[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20758 === 6))
{var inst_20746 = (state_20757[7]);var inst_20743 = (state_20757[8]);var inst_20750 = f.call(null,inst_20743,inst_20746);var inst_20743__$1 = inst_20750;var state_20757__$1 = (function (){var statearr_20760 = state_20757;(statearr_20760[8] = inst_20743__$1);
return statearr_20760;
})();var statearr_20761_20776 = state_20757__$1;(statearr_20761_20776[2] = null);
(statearr_20761_20776[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20758 === 5))
{var inst_20743 = (state_20757[8]);var state_20757__$1 = state_20757;var statearr_20762_20777 = state_20757__$1;(statearr_20762_20777[2] = inst_20743);
(statearr_20762_20777[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20758 === 4))
{var inst_20746 = (state_20757[7]);var inst_20746__$1 = (state_20757[2]);var inst_20747 = (inst_20746__$1 == null);var state_20757__$1 = (function (){var statearr_20763 = state_20757;(statearr_20763[7] = inst_20746__$1);
return statearr_20763;
})();if(cljs.core.truth_(inst_20747))
{var statearr_20764_20778 = state_20757__$1;(statearr_20764_20778[1] = 5);
} else
{var statearr_20765_20779 = state_20757__$1;(statearr_20765_20779[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20758 === 3))
{var inst_20755 = (state_20757[2]);var state_20757__$1 = state_20757;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20757__$1,inst_20755);
} else
{if((state_val_20758 === 2))
{var state_20757__$1 = state_20757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20757__$1,4,ch);
} else
{if((state_val_20758 === 1))
{var inst_20743 = init;var state_20757__$1 = (function (){var statearr_20766 = state_20757;(statearr_20766[8] = inst_20743);
return statearr_20766;
})();var statearr_20767_20780 = state_20757__$1;(statearr_20767_20780[2] = null);
(statearr_20767_20780[1] = 2);
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
});return ((function (switch__12213__auto__){
return (function() {
var state_machine__12214__auto__ = null;
var state_machine__12214__auto____0 = (function (){var statearr_20771 = (new Array(9));(statearr_20771[0] = state_machine__12214__auto__);
(statearr_20771[1] = 1);
return statearr_20771;
});
var state_machine__12214__auto____1 = (function (state_20757){while(true){
var ret_value__12215__auto__ = (function (){try{while(true){
var result__12216__auto__ = switch__12213__auto__.call(null,state_20757);if(cljs.core.keyword_identical_QMARK_.call(null,result__12216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12216__auto__;
}
break;
}
}catch (e20772){if((e20772 instanceof Object))
{var ex__12217__auto__ = e20772;var statearr_20773_20781 = state_20757;(statearr_20773_20781[5] = ex__12217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20757);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20782 = state_20757;
state_20757 = G__20782;
continue;
}
} else
{return ret_value__12215__auto__;
}
break;
}
});
state_machine__12214__auto__ = function(state_20757){
switch(arguments.length){
case 0:
return state_machine__12214__auto____0.call(this);
case 1:
return state_machine__12214__auto____1.call(this,state_20757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12214__auto____0;
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12214__auto____1;
return state_machine__12214__auto__;
})()
;})(switch__12213__auto__))
})();var state__12345__auto__ = (function (){var statearr_20774 = f__12344__auto__.call(null);(statearr_20774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12343__auto__);
return statearr_20774;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12345__auto__);
}));
return c__12343__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12343__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12344__auto__ = (function (){var switch__12213__auto__ = (function (state_20844){var state_val_20845 = (state_20844[1]);if((state_val_20845 === 1))
{var inst_20824 = cljs.core.seq.call(null,coll);var inst_20825 = inst_20824;var state_20844__$1 = (function (){var statearr_20846 = state_20844;(statearr_20846[7] = inst_20825);
return statearr_20846;
})();var statearr_20847_20865 = state_20844__$1;(statearr_20847_20865[2] = null);
(statearr_20847_20865[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20845 === 2))
{var inst_20825 = (state_20844[7]);var state_20844__$1 = state_20844;if(cljs.core.truth_(inst_20825))
{var statearr_20848_20866 = state_20844__$1;(statearr_20848_20866[1] = 4);
} else
{var statearr_20849_20867 = state_20844__$1;(statearr_20849_20867[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20845 === 3))
{var inst_20842 = (state_20844[2]);var state_20844__$1 = state_20844;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20844__$1,inst_20842);
} else
{if((state_val_20845 === 4))
{var inst_20825 = (state_20844[7]);var inst_20828 = cljs.core.first.call(null,inst_20825);var state_20844__$1 = state_20844;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20844__$1,7,ch,inst_20828);
} else
{if((state_val_20845 === 5))
{var state_20844__$1 = state_20844;if(cljs.core.truth_(close_QMARK_))
{var statearr_20850_20868 = state_20844__$1;(statearr_20850_20868[1] = 8);
} else
{var statearr_20851_20869 = state_20844__$1;(statearr_20851_20869[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20845 === 6))
{var inst_20840 = (state_20844[2]);var state_20844__$1 = state_20844;var statearr_20852_20870 = state_20844__$1;(statearr_20852_20870[2] = inst_20840);
(statearr_20852_20870[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20845 === 7))
{var inst_20825 = (state_20844[7]);var inst_20830 = (state_20844[2]);var inst_20831 = cljs.core.next.call(null,inst_20825);var inst_20825__$1 = inst_20831;var state_20844__$1 = (function (){var statearr_20853 = state_20844;(statearr_20853[7] = inst_20825__$1);
(statearr_20853[8] = inst_20830);
return statearr_20853;
})();var statearr_20854_20871 = state_20844__$1;(statearr_20854_20871[2] = null);
(statearr_20854_20871[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20845 === 8))
{var inst_20835 = cljs.core.async.close_BANG_.call(null,ch);var state_20844__$1 = state_20844;var statearr_20855_20872 = state_20844__$1;(statearr_20855_20872[2] = inst_20835);
(statearr_20855_20872[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20845 === 9))
{var state_20844__$1 = state_20844;var statearr_20856_20873 = state_20844__$1;(statearr_20856_20873[2] = null);
(statearr_20856_20873[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20845 === 10))
{var inst_20838 = (state_20844[2]);var state_20844__$1 = state_20844;var statearr_20857_20874 = state_20844__$1;(statearr_20857_20874[2] = inst_20838);
(statearr_20857_20874[1] = 6);
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
});return ((function (switch__12213__auto__){
return (function() {
var state_machine__12214__auto__ = null;
var state_machine__12214__auto____0 = (function (){var statearr_20861 = (new Array(9));(statearr_20861[0] = state_machine__12214__auto__);
(statearr_20861[1] = 1);
return statearr_20861;
});
var state_machine__12214__auto____1 = (function (state_20844){while(true){
var ret_value__12215__auto__ = (function (){try{while(true){
var result__12216__auto__ = switch__12213__auto__.call(null,state_20844);if(cljs.core.keyword_identical_QMARK_.call(null,result__12216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12216__auto__;
}
break;
}
}catch (e20862){if((e20862 instanceof Object))
{var ex__12217__auto__ = e20862;var statearr_20863_20875 = state_20844;(statearr_20863_20875[5] = ex__12217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20844);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20862;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20876 = state_20844;
state_20844 = G__20876;
continue;
}
} else
{return ret_value__12215__auto__;
}
break;
}
});
state_machine__12214__auto__ = function(state_20844){
switch(arguments.length){
case 0:
return state_machine__12214__auto____0.call(this);
case 1:
return state_machine__12214__auto____1.call(this,state_20844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12214__auto____0;
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12214__auto____1;
return state_machine__12214__auto__;
})()
;})(switch__12213__auto__))
})();var state__12345__auto__ = (function (){var statearr_20864 = f__12344__auto__.call(null);(statearr_20864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12343__auto__);
return statearr_20864;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12345__auto__);
}));
return c__12343__auto__;
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
cljs.core.async.Mux = (function (){var obj20878 = {};return obj20878;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__6292__auto__ = _;if(and__6292__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__6292__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__6907__auto__ = (((_ == null))?null:_);return (function (){var or__6304__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj20880 = {};return obj20880;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__6292__auto__ = m;if(and__6292__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__6292__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__6907__auto__ = (((m == null))?null:m);return (function (){var or__6304__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__6292__auto__ = m;if(and__6292__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__6292__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__6907__auto__ = (((m == null))?null:m);return (function (){var or__6304__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__6292__auto__ = m;if(and__6292__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__6292__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__6907__auto__ = (((m == null))?null:m);return (function (){var or__6304__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t21095 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21095 = (function (cs,ch,mult,meta21096){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21096 = meta21096;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21095.cljs$lang$type = true;
cljs.core.async.t21095.cljs$lang$ctorStr = "cljs.core.async/t21095";
cljs.core.async.t21095.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6848__auto__,writer__6849__auto__,opt__6850__auto__){return cljs.core._write.call(null,writer__6849__auto__,"cljs.core.async/t21095");
});})(cs))
;
cljs.core.async.t21095.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t21095.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t21095.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t21095.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t21095.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21095.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t21095.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21097){var self__ = this;
var _21097__$1 = this;return self__.meta21096;
});})(cs))
;
cljs.core.async.t21095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21097,meta21096__$1){var self__ = this;
var _21097__$1 = this;return (new cljs.core.async.t21095(self__.cs,self__.ch,self__.mult,meta21096__$1));
});})(cs))
;
cljs.core.async.__GT_t21095 = ((function (cs){
return (function __GT_t21095(cs__$1,ch__$1,mult__$1,meta21096){return (new cljs.core.async.t21095(cs__$1,ch__$1,mult__$1,meta21096));
});})(cs))
;
}
return (new cljs.core.async.t21095(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12343__auto___21309 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12344__auto__ = (function (){var switch__12213__auto__ = (function (state_21227){var state_val_21228 = (state_21227[1]);if((state_val_21228 === 32))
{var inst_21100 = (state_21227[7]);var inst_21176 = (state_21227[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21227,31,Object,null,30);var inst_21183 = cljs.core.async.put_BANG_.call(null,inst_21176,inst_21100,done);var state_21227__$1 = state_21227;var statearr_21229_21310 = state_21227__$1;(statearr_21229_21310[2] = inst_21183);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21227__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 1))
{var state_21227__$1 = state_21227;var statearr_21230_21311 = state_21227__$1;(statearr_21230_21311[2] = null);
(statearr_21230_21311[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 33))
{var inst_21189 = (state_21227[9]);var inst_21191 = cljs.core.chunked_seq_QMARK_.call(null,inst_21189);var state_21227__$1 = state_21227;if(inst_21191)
{var statearr_21231_21312 = state_21227__$1;(statearr_21231_21312[1] = 36);
} else
{var statearr_21232_21313 = state_21227__$1;(statearr_21232_21313[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 2))
{var state_21227__$1 = state_21227;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21227__$1,4,ch);
} else
{if((state_val_21228 === 34))
{var state_21227__$1 = state_21227;var statearr_21233_21314 = state_21227__$1;(statearr_21233_21314[2] = null);
(statearr_21233_21314[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 3))
{var inst_21225 = (state_21227[2]);var state_21227__$1 = state_21227;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21227__$1,inst_21225);
} else
{if((state_val_21228 === 35))
{var inst_21214 = (state_21227[2]);var state_21227__$1 = state_21227;var statearr_21234_21315 = state_21227__$1;(statearr_21234_21315[2] = inst_21214);
(statearr_21234_21315[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 4))
{var inst_21100 = (state_21227[7]);var inst_21100__$1 = (state_21227[2]);var inst_21101 = (inst_21100__$1 == null);var state_21227__$1 = (function (){var statearr_21235 = state_21227;(statearr_21235[7] = inst_21100__$1);
return statearr_21235;
})();if(cljs.core.truth_(inst_21101))
{var statearr_21236_21316 = state_21227__$1;(statearr_21236_21316[1] = 5);
} else
{var statearr_21237_21317 = state_21227__$1;(statearr_21237_21317[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 36))
{var inst_21189 = (state_21227[9]);var inst_21193 = cljs.core.chunk_first.call(null,inst_21189);var inst_21194 = cljs.core.chunk_rest.call(null,inst_21189);var inst_21195 = cljs.core.count.call(null,inst_21193);var inst_21168 = inst_21194;var inst_21169 = inst_21193;var inst_21170 = inst_21195;var inst_21171 = 0;var state_21227__$1 = (function (){var statearr_21238 = state_21227;(statearr_21238[10] = inst_21171);
(statearr_21238[11] = inst_21170);
(statearr_21238[12] = inst_21169);
(statearr_21238[13] = inst_21168);
return statearr_21238;
})();var statearr_21239_21318 = state_21227__$1;(statearr_21239_21318[2] = null);
(statearr_21239_21318[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 5))
{var inst_21107 = cljs.core.deref.call(null,cs);var inst_21108 = cljs.core.seq.call(null,inst_21107);var inst_21109 = inst_21108;var inst_21110 = null;var inst_21111 = 0;var inst_21112 = 0;var state_21227__$1 = (function (){var statearr_21240 = state_21227;(statearr_21240[14] = inst_21109);
(statearr_21240[15] = inst_21112);
(statearr_21240[16] = inst_21111);
(statearr_21240[17] = inst_21110);
return statearr_21240;
})();var statearr_21241_21319 = state_21227__$1;(statearr_21241_21319[2] = null);
(statearr_21241_21319[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 37))
{var inst_21189 = (state_21227[9]);var inst_21198 = cljs.core.first.call(null,inst_21189);var state_21227__$1 = (function (){var statearr_21242 = state_21227;(statearr_21242[18] = inst_21198);
return statearr_21242;
})();var statearr_21243_21320 = state_21227__$1;(statearr_21243_21320[2] = null);
(statearr_21243_21320[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 6))
{var inst_21159 = cljs.core.deref.call(null,cs);var inst_21160 = cljs.core.keys.call(null,inst_21159);var inst_21161 = cljs.core.count.call(null,inst_21160);var inst_21162 = cljs.core.reset_BANG_.call(null,dctr,inst_21161);var inst_21167 = cljs.core.seq.call(null,inst_21160);var inst_21168 = inst_21167;var inst_21169 = null;var inst_21170 = 0;var inst_21171 = 0;var state_21227__$1 = (function (){var statearr_21244 = state_21227;(statearr_21244[10] = inst_21171);
(statearr_21244[11] = inst_21170);
(statearr_21244[12] = inst_21169);
(statearr_21244[13] = inst_21168);
(statearr_21244[19] = inst_21162);
return statearr_21244;
})();var statearr_21245_21321 = state_21227__$1;(statearr_21245_21321[2] = null);
(statearr_21245_21321[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 38))
{var inst_21211 = (state_21227[2]);var state_21227__$1 = state_21227;var statearr_21246_21322 = state_21227__$1;(statearr_21246_21322[2] = inst_21211);
(statearr_21246_21322[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 7))
{var inst_21223 = (state_21227[2]);var state_21227__$1 = state_21227;var statearr_21247_21323 = state_21227__$1;(statearr_21247_21323[2] = inst_21223);
(statearr_21247_21323[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 39))
{var inst_21189 = (state_21227[9]);var inst_21207 = (state_21227[2]);var inst_21208 = cljs.core.next.call(null,inst_21189);var inst_21168 = inst_21208;var inst_21169 = null;var inst_21170 = 0;var inst_21171 = 0;var state_21227__$1 = (function (){var statearr_21248 = state_21227;(statearr_21248[10] = inst_21171);
(statearr_21248[11] = inst_21170);
(statearr_21248[12] = inst_21169);
(statearr_21248[20] = inst_21207);
(statearr_21248[13] = inst_21168);
return statearr_21248;
})();var statearr_21249_21324 = state_21227__$1;(statearr_21249_21324[2] = null);
(statearr_21249_21324[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 8))
{var inst_21112 = (state_21227[15]);var inst_21111 = (state_21227[16]);var inst_21114 = (inst_21112 < inst_21111);var inst_21115 = inst_21114;var state_21227__$1 = state_21227;if(cljs.core.truth_(inst_21115))
{var statearr_21250_21325 = state_21227__$1;(statearr_21250_21325[1] = 10);
} else
{var statearr_21251_21326 = state_21227__$1;(statearr_21251_21326[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 40))
{var inst_21198 = (state_21227[18]);var inst_21199 = (state_21227[2]);var inst_21200 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_21201 = cljs.core.async.untap_STAR_.call(null,m,inst_21198);var state_21227__$1 = (function (){var statearr_21252 = state_21227;(statearr_21252[21] = inst_21200);
(statearr_21252[22] = inst_21199);
return statearr_21252;
})();var statearr_21253_21327 = state_21227__$1;(statearr_21253_21327[2] = inst_21201);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21227__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 9))
{var inst_21157 = (state_21227[2]);var state_21227__$1 = state_21227;var statearr_21254_21328 = state_21227__$1;(statearr_21254_21328[2] = inst_21157);
(statearr_21254_21328[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 41))
{var inst_21100 = (state_21227[7]);var inst_21198 = (state_21227[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21227,40,Object,null,39);var inst_21205 = cljs.core.async.put_BANG_.call(null,inst_21198,inst_21100,done);var state_21227__$1 = state_21227;var statearr_21255_21329 = state_21227__$1;(statearr_21255_21329[2] = inst_21205);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21227__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 10))
{var inst_21112 = (state_21227[15]);var inst_21110 = (state_21227[17]);var inst_21118 = cljs.core._nth.call(null,inst_21110,inst_21112);var inst_21119 = cljs.core.nth.call(null,inst_21118,0,null);var inst_21120 = cljs.core.nth.call(null,inst_21118,1,null);var state_21227__$1 = (function (){var statearr_21256 = state_21227;(statearr_21256[23] = inst_21119);
return statearr_21256;
})();if(cljs.core.truth_(inst_21120))
{var statearr_21257_21330 = state_21227__$1;(statearr_21257_21330[1] = 13);
} else
{var statearr_21258_21331 = state_21227__$1;(statearr_21258_21331[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 42))
{var inst_21220 = (state_21227[2]);var state_21227__$1 = (function (){var statearr_21259 = state_21227;(statearr_21259[24] = inst_21220);
return statearr_21259;
})();var statearr_21260_21332 = state_21227__$1;(statearr_21260_21332[2] = null);
(statearr_21260_21332[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 11))
{var inst_21109 = (state_21227[14]);var inst_21129 = (state_21227[25]);var inst_21129__$1 = cljs.core.seq.call(null,inst_21109);var state_21227__$1 = (function (){var statearr_21261 = state_21227;(statearr_21261[25] = inst_21129__$1);
return statearr_21261;
})();if(inst_21129__$1)
{var statearr_21262_21333 = state_21227__$1;(statearr_21262_21333[1] = 16);
} else
{var statearr_21263_21334 = state_21227__$1;(statearr_21263_21334[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 12))
{var inst_21155 = (state_21227[2]);var state_21227__$1 = state_21227;var statearr_21264_21335 = state_21227__$1;(statearr_21264_21335[2] = inst_21155);
(statearr_21264_21335[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 13))
{var inst_21119 = (state_21227[23]);var inst_21122 = cljs.core.async.close_BANG_.call(null,inst_21119);var state_21227__$1 = state_21227;var statearr_21268_21336 = state_21227__$1;(statearr_21268_21336[2] = inst_21122);
(statearr_21268_21336[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 14))
{var state_21227__$1 = state_21227;var statearr_21269_21337 = state_21227__$1;(statearr_21269_21337[2] = null);
(statearr_21269_21337[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 15))
{var inst_21109 = (state_21227[14]);var inst_21112 = (state_21227[15]);var inst_21111 = (state_21227[16]);var inst_21110 = (state_21227[17]);var inst_21125 = (state_21227[2]);var inst_21126 = (inst_21112 + 1);var tmp21265 = inst_21109;var tmp21266 = inst_21111;var tmp21267 = inst_21110;var inst_21109__$1 = tmp21265;var inst_21110__$1 = tmp21267;var inst_21111__$1 = tmp21266;var inst_21112__$1 = inst_21126;var state_21227__$1 = (function (){var statearr_21270 = state_21227;(statearr_21270[14] = inst_21109__$1);
(statearr_21270[26] = inst_21125);
(statearr_21270[15] = inst_21112__$1);
(statearr_21270[16] = inst_21111__$1);
(statearr_21270[17] = inst_21110__$1);
return statearr_21270;
})();var statearr_21271_21338 = state_21227__$1;(statearr_21271_21338[2] = null);
(statearr_21271_21338[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 16))
{var inst_21129 = (state_21227[25]);var inst_21131 = cljs.core.chunked_seq_QMARK_.call(null,inst_21129);var state_21227__$1 = state_21227;if(inst_21131)
{var statearr_21272_21339 = state_21227__$1;(statearr_21272_21339[1] = 19);
} else
{var statearr_21273_21340 = state_21227__$1;(statearr_21273_21340[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 17))
{var state_21227__$1 = state_21227;var statearr_21274_21341 = state_21227__$1;(statearr_21274_21341[2] = null);
(statearr_21274_21341[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 18))
{var inst_21153 = (state_21227[2]);var state_21227__$1 = state_21227;var statearr_21275_21342 = state_21227__$1;(statearr_21275_21342[2] = inst_21153);
(statearr_21275_21342[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 19))
{var inst_21129 = (state_21227[25]);var inst_21133 = cljs.core.chunk_first.call(null,inst_21129);var inst_21134 = cljs.core.chunk_rest.call(null,inst_21129);var inst_21135 = cljs.core.count.call(null,inst_21133);var inst_21109 = inst_21134;var inst_21110 = inst_21133;var inst_21111 = inst_21135;var inst_21112 = 0;var state_21227__$1 = (function (){var statearr_21276 = state_21227;(statearr_21276[14] = inst_21109);
(statearr_21276[15] = inst_21112);
(statearr_21276[16] = inst_21111);
(statearr_21276[17] = inst_21110);
return statearr_21276;
})();var statearr_21277_21343 = state_21227__$1;(statearr_21277_21343[2] = null);
(statearr_21277_21343[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 20))
{var inst_21129 = (state_21227[25]);var inst_21139 = cljs.core.first.call(null,inst_21129);var inst_21140 = cljs.core.nth.call(null,inst_21139,0,null);var inst_21141 = cljs.core.nth.call(null,inst_21139,1,null);var state_21227__$1 = (function (){var statearr_21278 = state_21227;(statearr_21278[27] = inst_21140);
return statearr_21278;
})();if(cljs.core.truth_(inst_21141))
{var statearr_21279_21344 = state_21227__$1;(statearr_21279_21344[1] = 22);
} else
{var statearr_21280_21345 = state_21227__$1;(statearr_21280_21345[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 21))
{var inst_21150 = (state_21227[2]);var state_21227__$1 = state_21227;var statearr_21281_21346 = state_21227__$1;(statearr_21281_21346[2] = inst_21150);
(statearr_21281_21346[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 22))
{var inst_21140 = (state_21227[27]);var inst_21143 = cljs.core.async.close_BANG_.call(null,inst_21140);var state_21227__$1 = state_21227;var statearr_21282_21347 = state_21227__$1;(statearr_21282_21347[2] = inst_21143);
(statearr_21282_21347[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 23))
{var state_21227__$1 = state_21227;var statearr_21283_21348 = state_21227__$1;(statearr_21283_21348[2] = null);
(statearr_21283_21348[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 24))
{var inst_21129 = (state_21227[25]);var inst_21146 = (state_21227[2]);var inst_21147 = cljs.core.next.call(null,inst_21129);var inst_21109 = inst_21147;var inst_21110 = null;var inst_21111 = 0;var inst_21112 = 0;var state_21227__$1 = (function (){var statearr_21284 = state_21227;(statearr_21284[14] = inst_21109);
(statearr_21284[28] = inst_21146);
(statearr_21284[15] = inst_21112);
(statearr_21284[16] = inst_21111);
(statearr_21284[17] = inst_21110);
return statearr_21284;
})();var statearr_21285_21349 = state_21227__$1;(statearr_21285_21349[2] = null);
(statearr_21285_21349[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 25))
{var inst_21171 = (state_21227[10]);var inst_21170 = (state_21227[11]);var inst_21173 = (inst_21171 < inst_21170);var inst_21174 = inst_21173;var state_21227__$1 = state_21227;if(cljs.core.truth_(inst_21174))
{var statearr_21286_21350 = state_21227__$1;(statearr_21286_21350[1] = 27);
} else
{var statearr_21287_21351 = state_21227__$1;(statearr_21287_21351[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 26))
{var inst_21218 = (state_21227[2]);var state_21227__$1 = (function (){var statearr_21288 = state_21227;(statearr_21288[29] = inst_21218);
return statearr_21288;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21227__$1,42,dchan);
} else
{if((state_val_21228 === 27))
{var inst_21171 = (state_21227[10]);var inst_21169 = (state_21227[12]);var inst_21176 = cljs.core._nth.call(null,inst_21169,inst_21171);var state_21227__$1 = (function (){var statearr_21289 = state_21227;(statearr_21289[8] = inst_21176);
return statearr_21289;
})();var statearr_21290_21352 = state_21227__$1;(statearr_21290_21352[2] = null);
(statearr_21290_21352[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 28))
{var inst_21189 = (state_21227[9]);var inst_21168 = (state_21227[13]);var inst_21189__$1 = cljs.core.seq.call(null,inst_21168);var state_21227__$1 = (function (){var statearr_21294 = state_21227;(statearr_21294[9] = inst_21189__$1);
return statearr_21294;
})();if(inst_21189__$1)
{var statearr_21295_21353 = state_21227__$1;(statearr_21295_21353[1] = 33);
} else
{var statearr_21296_21354 = state_21227__$1;(statearr_21296_21354[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 29))
{var inst_21216 = (state_21227[2]);var state_21227__$1 = state_21227;var statearr_21297_21355 = state_21227__$1;(statearr_21297_21355[2] = inst_21216);
(statearr_21297_21355[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 30))
{var inst_21171 = (state_21227[10]);var inst_21170 = (state_21227[11]);var inst_21169 = (state_21227[12]);var inst_21168 = (state_21227[13]);var inst_21185 = (state_21227[2]);var inst_21186 = (inst_21171 + 1);var tmp21291 = inst_21170;var tmp21292 = inst_21169;var tmp21293 = inst_21168;var inst_21168__$1 = tmp21293;var inst_21169__$1 = tmp21292;var inst_21170__$1 = tmp21291;var inst_21171__$1 = inst_21186;var state_21227__$1 = (function (){var statearr_21298 = state_21227;(statearr_21298[10] = inst_21171__$1);
(statearr_21298[11] = inst_21170__$1);
(statearr_21298[30] = inst_21185);
(statearr_21298[12] = inst_21169__$1);
(statearr_21298[13] = inst_21168__$1);
return statearr_21298;
})();var statearr_21299_21356 = state_21227__$1;(statearr_21299_21356[2] = null);
(statearr_21299_21356[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21228 === 31))
{var inst_21176 = (state_21227[8]);var inst_21177 = (state_21227[2]);var inst_21178 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_21179 = cljs.core.async.untap_STAR_.call(null,m,inst_21176);var state_21227__$1 = (function (){var statearr_21300 = state_21227;(statearr_21300[31] = inst_21178);
(statearr_21300[32] = inst_21177);
return statearr_21300;
})();var statearr_21301_21357 = state_21227__$1;(statearr_21301_21357[2] = inst_21179);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21227__$1);
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
});return ((function (switch__12213__auto__){
return (function() {
var state_machine__12214__auto__ = null;
var state_machine__12214__auto____0 = (function (){var statearr_21305 = (new Array(33));(statearr_21305[0] = state_machine__12214__auto__);
(statearr_21305[1] = 1);
return statearr_21305;
});
var state_machine__12214__auto____1 = (function (state_21227){while(true){
var ret_value__12215__auto__ = (function (){try{while(true){
var result__12216__auto__ = switch__12213__auto__.call(null,state_21227);if(cljs.core.keyword_identical_QMARK_.call(null,result__12216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12216__auto__;
}
break;
}
}catch (e21306){if((e21306 instanceof Object))
{var ex__12217__auto__ = e21306;var statearr_21307_21358 = state_21227;(statearr_21307_21358[5] = ex__12217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21227);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21306;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21359 = state_21227;
state_21227 = G__21359;
continue;
}
} else
{return ret_value__12215__auto__;
}
break;
}
});
state_machine__12214__auto__ = function(state_21227){
switch(arguments.length){
case 0:
return state_machine__12214__auto____0.call(this);
case 1:
return state_machine__12214__auto____1.call(this,state_21227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12214__auto____0;
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12214__auto____1;
return state_machine__12214__auto__;
})()
;})(switch__12213__auto__))
})();var state__12345__auto__ = (function (){var statearr_21308 = f__12344__auto__.call(null);(statearr_21308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12343__auto___21309);
return statearr_21308;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12345__auto__);
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
cljs.core.async.Mix = (function (){var obj21361 = {};return obj21361;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__6292__auto__ = m;if(and__6292__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__6292__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__6907__auto__ = (((m == null))?null:m);return (function (){var or__6304__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__6292__auto__ = m;if(and__6292__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__6292__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__6907__auto__ = (((m == null))?null:m);return (function (){var or__6304__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__6292__auto__ = m;if(and__6292__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__6292__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__6907__auto__ = (((m == null))?null:m);return (function (){var or__6304__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__6292__auto__ = m;if(and__6292__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__6292__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__6907__auto__ = (((m == null))?null:m);return (function (){var or__6304__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__6292__auto__ = m;if(and__6292__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__6292__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__6907__auto__ = (((m == null))?null:m);return (function (){var or__6304__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t21471 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21471 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta21472){
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
this.meta21472 = meta21472;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21471.cljs$lang$type = true;
cljs.core.async.t21471.cljs$lang$ctorStr = "cljs.core.async/t21471";
cljs.core.async.t21471.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6848__auto__,writer__6849__auto__,opt__6850__auto__){return cljs.core._write.call(null,writer__6849__auto__,"cljs.core.async/t21471");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21471.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t21471.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21471.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21471.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21471.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21471.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21471.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21471.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21471.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21473){var self__ = this;
var _21473__$1 = this;return self__.meta21472;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21473,meta21472__$1){var self__ = this;
var _21473__$1 = this;return (new cljs.core.async.t21471(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta21472__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t21471 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t21471(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta21472){return (new cljs.core.async.t21471(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta21472));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t21471(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__12343__auto___21580 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12344__auto__ = (function (){var switch__12213__auto__ = (function (state_21538){var state_val_21539 = (state_21538[1]);if((state_val_21539 === 1))
{var inst_21477 = (state_21538[7]);var inst_21477__$1 = calc_state.call(null);var inst_21478 = cljs.core.seq_QMARK_.call(null,inst_21477__$1);var state_21538__$1 = (function (){var statearr_21540 = state_21538;(statearr_21540[7] = inst_21477__$1);
return statearr_21540;
})();if(inst_21478)
{var statearr_21541_21581 = state_21538__$1;(statearr_21541_21581[1] = 2);
} else
{var statearr_21542_21582 = state_21538__$1;(statearr_21542_21582[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21539 === 2))
{var inst_21477 = (state_21538[7]);var inst_21480 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21477);var state_21538__$1 = state_21538;var statearr_21543_21583 = state_21538__$1;(statearr_21543_21583[2] = inst_21480);
(statearr_21543_21583[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21539 === 3))
{var inst_21477 = (state_21538[7]);var state_21538__$1 = state_21538;var statearr_21544_21584 = state_21538__$1;(statearr_21544_21584[2] = inst_21477);
(statearr_21544_21584[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21539 === 4))
{var inst_21477 = (state_21538[7]);var inst_21483 = (state_21538[2]);var inst_21484 = cljs.core.get.call(null,inst_21483,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_21485 = cljs.core.get.call(null,inst_21483,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_21486 = cljs.core.get.call(null,inst_21483,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_21487 = inst_21477;var state_21538__$1 = (function (){var statearr_21545 = state_21538;(statearr_21545[8] = inst_21487);
(statearr_21545[9] = inst_21486);
(statearr_21545[10] = inst_21485);
(statearr_21545[11] = inst_21484);
return statearr_21545;
})();var statearr_21546_21585 = state_21538__$1;(statearr_21546_21585[2] = null);
(statearr_21546_21585[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21539 === 5))
{var inst_21487 = (state_21538[8]);var inst_21490 = cljs.core.seq_QMARK_.call(null,inst_21487);var state_21538__$1 = state_21538;if(inst_21490)
{var statearr_21547_21586 = state_21538__$1;(statearr_21547_21586[1] = 7);
} else
{var statearr_21548_21587 = state_21538__$1;(statearr_21548_21587[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21539 === 6))
{var inst_21536 = (state_21538[2]);var state_21538__$1 = state_21538;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21538__$1,inst_21536);
} else
{if((state_val_21539 === 7))
{var inst_21487 = (state_21538[8]);var inst_21492 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21487);var state_21538__$1 = state_21538;var statearr_21549_21588 = state_21538__$1;(statearr_21549_21588[2] = inst_21492);
(statearr_21549_21588[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21539 === 8))
{var inst_21487 = (state_21538[8]);var state_21538__$1 = state_21538;var statearr_21550_21589 = state_21538__$1;(statearr_21550_21589[2] = inst_21487);
(statearr_21550_21589[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21539 === 9))
{var inst_21495 = (state_21538[12]);var inst_21495__$1 = (state_21538[2]);var inst_21496 = cljs.core.get.call(null,inst_21495__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_21497 = cljs.core.get.call(null,inst_21495__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_21498 = cljs.core.get.call(null,inst_21495__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_21538__$1 = (function (){var statearr_21551 = state_21538;(statearr_21551[13] = inst_21498);
(statearr_21551[14] = inst_21497);
(statearr_21551[12] = inst_21495__$1);
return statearr_21551;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21538__$1,10,inst_21496);
} else
{if((state_val_21539 === 10))
{var inst_21503 = (state_21538[15]);var inst_21502 = (state_21538[16]);var inst_21501 = (state_21538[2]);var inst_21502__$1 = cljs.core.nth.call(null,inst_21501,0,null);var inst_21503__$1 = cljs.core.nth.call(null,inst_21501,1,null);var inst_21504 = (inst_21502__$1 == null);var inst_21505 = cljs.core._EQ_.call(null,inst_21503__$1,change);var inst_21506 = (inst_21504) || (inst_21505);var state_21538__$1 = (function (){var statearr_21552 = state_21538;(statearr_21552[15] = inst_21503__$1);
(statearr_21552[16] = inst_21502__$1);
return statearr_21552;
})();if(cljs.core.truth_(inst_21506))
{var statearr_21553_21590 = state_21538__$1;(statearr_21553_21590[1] = 11);
} else
{var statearr_21554_21591 = state_21538__$1;(statearr_21554_21591[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21539 === 11))
{var inst_21502 = (state_21538[16]);var inst_21508 = (inst_21502 == null);var state_21538__$1 = state_21538;if(cljs.core.truth_(inst_21508))
{var statearr_21555_21592 = state_21538__$1;(statearr_21555_21592[1] = 14);
} else
{var statearr_21556_21593 = state_21538__$1;(statearr_21556_21593[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21539 === 12))
{var inst_21503 = (state_21538[15]);var inst_21517 = (state_21538[17]);var inst_21498 = (state_21538[13]);var inst_21517__$1 = inst_21498.call(null,inst_21503);var state_21538__$1 = (function (){var statearr_21557 = state_21538;(statearr_21557[17] = inst_21517__$1);
return statearr_21557;
})();if(cljs.core.truth_(inst_21517__$1))
{var statearr_21558_21594 = state_21538__$1;(statearr_21558_21594[1] = 17);
} else
{var statearr_21559_21595 = state_21538__$1;(statearr_21559_21595[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21539 === 13))
{var inst_21534 = (state_21538[2]);var state_21538__$1 = state_21538;var statearr_21560_21596 = state_21538__$1;(statearr_21560_21596[2] = inst_21534);
(statearr_21560_21596[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21539 === 14))
{var inst_21503 = (state_21538[15]);var inst_21510 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21503);var state_21538__$1 = state_21538;var statearr_21561_21597 = state_21538__$1;(statearr_21561_21597[2] = inst_21510);
(statearr_21561_21597[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21539 === 15))
{var state_21538__$1 = state_21538;var statearr_21562_21598 = state_21538__$1;(statearr_21562_21598[2] = null);
(statearr_21562_21598[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21539 === 16))
{var inst_21513 = (state_21538[2]);var inst_21514 = calc_state.call(null);var inst_21487 = inst_21514;var state_21538__$1 = (function (){var statearr_21563 = state_21538;(statearr_21563[8] = inst_21487);
(statearr_21563[18] = inst_21513);
return statearr_21563;
})();var statearr_21564_21599 = state_21538__$1;(statearr_21564_21599[2] = null);
(statearr_21564_21599[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21539 === 17))
{var inst_21517 = (state_21538[17]);var state_21538__$1 = state_21538;var statearr_21565_21600 = state_21538__$1;(statearr_21565_21600[2] = inst_21517);
(statearr_21565_21600[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21539 === 18))
{var inst_21503 = (state_21538[15]);var inst_21498 = (state_21538[13]);var inst_21497 = (state_21538[14]);var inst_21520 = cljs.core.empty_QMARK_.call(null,inst_21498);var inst_21521 = inst_21497.call(null,inst_21503);var inst_21522 = cljs.core.not.call(null,inst_21521);var inst_21523 = (inst_21520) && (inst_21522);var state_21538__$1 = state_21538;var statearr_21566_21601 = state_21538__$1;(statearr_21566_21601[2] = inst_21523);
(statearr_21566_21601[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21539 === 19))
{var inst_21525 = (state_21538[2]);var state_21538__$1 = state_21538;if(cljs.core.truth_(inst_21525))
{var statearr_21567_21602 = state_21538__$1;(statearr_21567_21602[1] = 20);
} else
{var statearr_21568_21603 = state_21538__$1;(statearr_21568_21603[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21539 === 20))
{var inst_21502 = (state_21538[16]);var state_21538__$1 = state_21538;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21538__$1,23,out,inst_21502);
} else
{if((state_val_21539 === 21))
{var state_21538__$1 = state_21538;var statearr_21569_21604 = state_21538__$1;(statearr_21569_21604[2] = null);
(statearr_21569_21604[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21539 === 22))
{var inst_21495 = (state_21538[12]);var inst_21531 = (state_21538[2]);var inst_21487 = inst_21495;var state_21538__$1 = (function (){var statearr_21570 = state_21538;(statearr_21570[19] = inst_21531);
(statearr_21570[8] = inst_21487);
return statearr_21570;
})();var statearr_21571_21605 = state_21538__$1;(statearr_21571_21605[2] = null);
(statearr_21571_21605[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21539 === 23))
{var inst_21528 = (state_21538[2]);var state_21538__$1 = state_21538;var statearr_21572_21606 = state_21538__$1;(statearr_21572_21606[2] = inst_21528);
(statearr_21572_21606[1] = 22);
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
});return ((function (switch__12213__auto__){
return (function() {
var state_machine__12214__auto__ = null;
var state_machine__12214__auto____0 = (function (){var statearr_21576 = (new Array(20));(statearr_21576[0] = state_machine__12214__auto__);
(statearr_21576[1] = 1);
return statearr_21576;
});
var state_machine__12214__auto____1 = (function (state_21538){while(true){
var ret_value__12215__auto__ = (function (){try{while(true){
var result__12216__auto__ = switch__12213__auto__.call(null,state_21538);if(cljs.core.keyword_identical_QMARK_.call(null,result__12216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12216__auto__;
}
break;
}
}catch (e21577){if((e21577 instanceof Object))
{var ex__12217__auto__ = e21577;var statearr_21578_21607 = state_21538;(statearr_21578_21607[5] = ex__12217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21538);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21577;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21608 = state_21538;
state_21538 = G__21608;
continue;
}
} else
{return ret_value__12215__auto__;
}
break;
}
});
state_machine__12214__auto__ = function(state_21538){
switch(arguments.length){
case 0:
return state_machine__12214__auto____0.call(this);
case 1:
return state_machine__12214__auto____1.call(this,state_21538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12214__auto____0;
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12214__auto____1;
return state_machine__12214__auto__;
})()
;})(switch__12213__auto__))
})();var state__12345__auto__ = (function (){var statearr_21579 = f__12344__auto__.call(null);(statearr_21579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12343__auto___21580);
return statearr_21579;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12345__auto__);
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
cljs.core.async.Pub = (function (){var obj21610 = {};return obj21610;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__6292__auto__ = p;if(and__6292__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__6292__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__6907__auto__ = (((p == null))?null:p);return (function (){var or__6304__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__6292__auto__ = p;if(and__6292__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__6292__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__6907__auto__ = (((p == null))?null:p);return (function (){var or__6304__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__6292__auto__ = p;if(and__6292__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__6292__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__6907__auto__ = (((p == null))?null:p);return (function (){var or__6304__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__6292__auto__ = p;if(and__6292__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__6292__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__6907__auto__ = (((p == null))?null:p);return (function (){var or__6304__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
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
return (function (topic){var or__6304__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__6304__auto__))
{return or__6304__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6304__auto__,mults){
return (function (p1__21611_SHARP_){if(cljs.core.truth_(p1__21611_SHARP_.call(null,topic)))
{return p1__21611_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__21611_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6304__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t21736 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21736 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta21737){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta21737 = meta21737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21736.cljs$lang$type = true;
cljs.core.async.t21736.cljs$lang$ctorStr = "cljs.core.async/t21736";
cljs.core.async.t21736.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6848__auto__,writer__6849__auto__,opt__6850__auto__){return cljs.core._write.call(null,writer__6849__auto__,"cljs.core.async/t21736");
});})(mults,ensure_mult))
;
cljs.core.async.t21736.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t21736.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t21736.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t21736.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t21736.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t21736.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21736.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t21736.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21738){var self__ = this;
var _21738__$1 = this;return self__.meta21737;
});})(mults,ensure_mult))
;
cljs.core.async.t21736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21738,meta21737__$1){var self__ = this;
var _21738__$1 = this;return (new cljs.core.async.t21736(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta21737__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t21736 = ((function (mults,ensure_mult){
return (function __GT_t21736(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21737){return (new cljs.core.async.t21736(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21737));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t21736(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12343__auto___21860 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12344__auto__ = (function (){var switch__12213__auto__ = (function (state_21812){var state_val_21813 = (state_21812[1]);if((state_val_21813 === 1))
{var state_21812__$1 = state_21812;var statearr_21814_21861 = state_21812__$1;(statearr_21814_21861[2] = null);
(statearr_21814_21861[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21813 === 2))
{var state_21812__$1 = state_21812;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21812__$1,4,ch);
} else
{if((state_val_21813 === 3))
{var inst_21810 = (state_21812[2]);var state_21812__$1 = state_21812;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21812__$1,inst_21810);
} else
{if((state_val_21813 === 4))
{var inst_21741 = (state_21812[7]);var inst_21741__$1 = (state_21812[2]);var inst_21742 = (inst_21741__$1 == null);var state_21812__$1 = (function (){var statearr_21815 = state_21812;(statearr_21815[7] = inst_21741__$1);
return statearr_21815;
})();if(cljs.core.truth_(inst_21742))
{var statearr_21816_21862 = state_21812__$1;(statearr_21816_21862[1] = 5);
} else
{var statearr_21817_21863 = state_21812__$1;(statearr_21817_21863[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21813 === 5))
{var inst_21748 = cljs.core.deref.call(null,mults);var inst_21749 = cljs.core.vals.call(null,inst_21748);var inst_21750 = cljs.core.seq.call(null,inst_21749);var inst_21751 = inst_21750;var inst_21752 = null;var inst_21753 = 0;var inst_21754 = 0;var state_21812__$1 = (function (){var statearr_21818 = state_21812;(statearr_21818[8] = inst_21752);
(statearr_21818[9] = inst_21753);
(statearr_21818[10] = inst_21754);
(statearr_21818[11] = inst_21751);
return statearr_21818;
})();var statearr_21819_21864 = state_21812__$1;(statearr_21819_21864[2] = null);
(statearr_21819_21864[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21813 === 6))
{var inst_21789 = (state_21812[12]);var inst_21791 = (state_21812[13]);var inst_21741 = (state_21812[7]);var inst_21789__$1 = topic_fn.call(null,inst_21741);var inst_21790 = cljs.core.deref.call(null,mults);var inst_21791__$1 = cljs.core.get.call(null,inst_21790,inst_21789__$1);var state_21812__$1 = (function (){var statearr_21820 = state_21812;(statearr_21820[12] = inst_21789__$1);
(statearr_21820[13] = inst_21791__$1);
return statearr_21820;
})();if(cljs.core.truth_(inst_21791__$1))
{var statearr_21821_21865 = state_21812__$1;(statearr_21821_21865[1] = 19);
} else
{var statearr_21822_21866 = state_21812__$1;(statearr_21822_21866[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21813 === 7))
{var inst_21808 = (state_21812[2]);var state_21812__$1 = state_21812;var statearr_21823_21867 = state_21812__$1;(statearr_21823_21867[2] = inst_21808);
(statearr_21823_21867[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21813 === 8))
{var inst_21753 = (state_21812[9]);var inst_21754 = (state_21812[10]);var inst_21756 = (inst_21754 < inst_21753);var inst_21757 = inst_21756;var state_21812__$1 = state_21812;if(cljs.core.truth_(inst_21757))
{var statearr_21827_21868 = state_21812__$1;(statearr_21827_21868[1] = 10);
} else
{var statearr_21828_21869 = state_21812__$1;(statearr_21828_21869[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21813 === 9))
{var inst_21787 = (state_21812[2]);var state_21812__$1 = state_21812;var statearr_21829_21870 = state_21812__$1;(statearr_21829_21870[2] = inst_21787);
(statearr_21829_21870[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21813 === 10))
{var inst_21752 = (state_21812[8]);var inst_21753 = (state_21812[9]);var inst_21754 = (state_21812[10]);var inst_21751 = (state_21812[11]);var inst_21759 = cljs.core._nth.call(null,inst_21752,inst_21754);var inst_21760 = cljs.core.async.muxch_STAR_.call(null,inst_21759);var inst_21761 = cljs.core.async.close_BANG_.call(null,inst_21760);var inst_21762 = (inst_21754 + 1);var tmp21824 = inst_21752;var tmp21825 = inst_21753;var tmp21826 = inst_21751;var inst_21751__$1 = tmp21826;var inst_21752__$1 = tmp21824;var inst_21753__$1 = tmp21825;var inst_21754__$1 = inst_21762;var state_21812__$1 = (function (){var statearr_21830 = state_21812;(statearr_21830[8] = inst_21752__$1);
(statearr_21830[14] = inst_21761);
(statearr_21830[9] = inst_21753__$1);
(statearr_21830[10] = inst_21754__$1);
(statearr_21830[11] = inst_21751__$1);
return statearr_21830;
})();var statearr_21831_21871 = state_21812__$1;(statearr_21831_21871[2] = null);
(statearr_21831_21871[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21813 === 11))
{var inst_21765 = (state_21812[15]);var inst_21751 = (state_21812[11]);var inst_21765__$1 = cljs.core.seq.call(null,inst_21751);var state_21812__$1 = (function (){var statearr_21832 = state_21812;(statearr_21832[15] = inst_21765__$1);
return statearr_21832;
})();if(inst_21765__$1)
{var statearr_21833_21872 = state_21812__$1;(statearr_21833_21872[1] = 13);
} else
{var statearr_21834_21873 = state_21812__$1;(statearr_21834_21873[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21813 === 12))
{var inst_21785 = (state_21812[2]);var state_21812__$1 = state_21812;var statearr_21835_21874 = state_21812__$1;(statearr_21835_21874[2] = inst_21785);
(statearr_21835_21874[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21813 === 13))
{var inst_21765 = (state_21812[15]);var inst_21767 = cljs.core.chunked_seq_QMARK_.call(null,inst_21765);var state_21812__$1 = state_21812;if(inst_21767)
{var statearr_21836_21875 = state_21812__$1;(statearr_21836_21875[1] = 16);
} else
{var statearr_21837_21876 = state_21812__$1;(statearr_21837_21876[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21813 === 14))
{var state_21812__$1 = state_21812;var statearr_21838_21877 = state_21812__$1;(statearr_21838_21877[2] = null);
(statearr_21838_21877[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21813 === 15))
{var inst_21783 = (state_21812[2]);var state_21812__$1 = state_21812;var statearr_21839_21878 = state_21812__$1;(statearr_21839_21878[2] = inst_21783);
(statearr_21839_21878[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21813 === 16))
{var inst_21765 = (state_21812[15]);var inst_21769 = cljs.core.chunk_first.call(null,inst_21765);var inst_21770 = cljs.core.chunk_rest.call(null,inst_21765);var inst_21771 = cljs.core.count.call(null,inst_21769);var inst_21751 = inst_21770;var inst_21752 = inst_21769;var inst_21753 = inst_21771;var inst_21754 = 0;var state_21812__$1 = (function (){var statearr_21840 = state_21812;(statearr_21840[8] = inst_21752);
(statearr_21840[9] = inst_21753);
(statearr_21840[10] = inst_21754);
(statearr_21840[11] = inst_21751);
return statearr_21840;
})();var statearr_21841_21879 = state_21812__$1;(statearr_21841_21879[2] = null);
(statearr_21841_21879[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21813 === 17))
{var inst_21765 = (state_21812[15]);var inst_21774 = cljs.core.first.call(null,inst_21765);var inst_21775 = cljs.core.async.muxch_STAR_.call(null,inst_21774);var inst_21776 = cljs.core.async.close_BANG_.call(null,inst_21775);var inst_21777 = cljs.core.next.call(null,inst_21765);var inst_21751 = inst_21777;var inst_21752 = null;var inst_21753 = 0;var inst_21754 = 0;var state_21812__$1 = (function (){var statearr_21842 = state_21812;(statearr_21842[16] = inst_21776);
(statearr_21842[8] = inst_21752);
(statearr_21842[9] = inst_21753);
(statearr_21842[10] = inst_21754);
(statearr_21842[11] = inst_21751);
return statearr_21842;
})();var statearr_21843_21880 = state_21812__$1;(statearr_21843_21880[2] = null);
(statearr_21843_21880[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21813 === 18))
{var inst_21780 = (state_21812[2]);var state_21812__$1 = state_21812;var statearr_21844_21881 = state_21812__$1;(statearr_21844_21881[2] = inst_21780);
(statearr_21844_21881[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21813 === 19))
{var state_21812__$1 = state_21812;var statearr_21845_21882 = state_21812__$1;(statearr_21845_21882[2] = null);
(statearr_21845_21882[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21813 === 20))
{var state_21812__$1 = state_21812;var statearr_21846_21883 = state_21812__$1;(statearr_21846_21883[2] = null);
(statearr_21846_21883[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21813 === 21))
{var inst_21805 = (state_21812[2]);var state_21812__$1 = (function (){var statearr_21847 = state_21812;(statearr_21847[17] = inst_21805);
return statearr_21847;
})();var statearr_21848_21884 = state_21812__$1;(statearr_21848_21884[2] = null);
(statearr_21848_21884[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21813 === 22))
{var inst_21802 = (state_21812[2]);var state_21812__$1 = state_21812;var statearr_21849_21885 = state_21812__$1;(statearr_21849_21885[2] = inst_21802);
(statearr_21849_21885[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21813 === 23))
{var inst_21789 = (state_21812[12]);var inst_21793 = (state_21812[2]);var inst_21794 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21789);var state_21812__$1 = (function (){var statearr_21850 = state_21812;(statearr_21850[18] = inst_21793);
return statearr_21850;
})();var statearr_21851_21886 = state_21812__$1;(statearr_21851_21886[2] = inst_21794);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21812__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21813 === 24))
{var inst_21791 = (state_21812[13]);var inst_21741 = (state_21812[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21812,23,Object,null,22);var inst_21798 = cljs.core.async.muxch_STAR_.call(null,inst_21791);var state_21812__$1 = state_21812;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21812__$1,25,inst_21798,inst_21741);
} else
{if((state_val_21813 === 25))
{var inst_21800 = (state_21812[2]);var state_21812__$1 = state_21812;var statearr_21852_21887 = state_21812__$1;(statearr_21852_21887[2] = inst_21800);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21812__$1);
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
});return ((function (switch__12213__auto__){
return (function() {
var state_machine__12214__auto__ = null;
var state_machine__12214__auto____0 = (function (){var statearr_21856 = (new Array(19));(statearr_21856[0] = state_machine__12214__auto__);
(statearr_21856[1] = 1);
return statearr_21856;
});
var state_machine__12214__auto____1 = (function (state_21812){while(true){
var ret_value__12215__auto__ = (function (){try{while(true){
var result__12216__auto__ = switch__12213__auto__.call(null,state_21812);if(cljs.core.keyword_identical_QMARK_.call(null,result__12216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12216__auto__;
}
break;
}
}catch (e21857){if((e21857 instanceof Object))
{var ex__12217__auto__ = e21857;var statearr_21858_21888 = state_21812;(statearr_21858_21888[5] = ex__12217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21812);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21857;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21889 = state_21812;
state_21812 = G__21889;
continue;
}
} else
{return ret_value__12215__auto__;
}
break;
}
});
state_machine__12214__auto__ = function(state_21812){
switch(arguments.length){
case 0:
return state_machine__12214__auto____0.call(this);
case 1:
return state_machine__12214__auto____1.call(this,state_21812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12214__auto____0;
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12214__auto____1;
return state_machine__12214__auto__;
})()
;})(switch__12213__auto__))
})();var state__12345__auto__ = (function (){var statearr_21859 = f__12344__auto__.call(null);(statearr_21859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12343__auto___21860);
return statearr_21859;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12345__auto__);
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
,cljs.core.range.call(null,cnt));var c__12343__auto___22026 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12344__auto__ = (function (){var switch__12213__auto__ = (function (state_21996){var state_val_21997 = (state_21996[1]);if((state_val_21997 === 1))
{var state_21996__$1 = state_21996;var statearr_21998_22027 = state_21996__$1;(statearr_21998_22027[2] = null);
(statearr_21998_22027[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21997 === 2))
{var inst_21959 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_21960 = 0;var state_21996__$1 = (function (){var statearr_21999 = state_21996;(statearr_21999[7] = inst_21959);
(statearr_21999[8] = inst_21960);
return statearr_21999;
})();var statearr_22000_22028 = state_21996__$1;(statearr_22000_22028[2] = null);
(statearr_22000_22028[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21997 === 3))
{var inst_21994 = (state_21996[2]);var state_21996__$1 = state_21996;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21996__$1,inst_21994);
} else
{if((state_val_21997 === 4))
{var inst_21960 = (state_21996[8]);var inst_21962 = (inst_21960 < cnt);var state_21996__$1 = state_21996;if(cljs.core.truth_(inst_21962))
{var statearr_22001_22029 = state_21996__$1;(statearr_22001_22029[1] = 6);
} else
{var statearr_22002_22030 = state_21996__$1;(statearr_22002_22030[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21997 === 5))
{var inst_21980 = (state_21996[2]);var state_21996__$1 = (function (){var statearr_22003 = state_21996;(statearr_22003[9] = inst_21980);
return statearr_22003;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21996__$1,12,dchan);
} else
{if((state_val_21997 === 6))
{var state_21996__$1 = state_21996;var statearr_22004_22031 = state_21996__$1;(statearr_22004_22031[2] = null);
(statearr_22004_22031[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21997 === 7))
{var state_21996__$1 = state_21996;var statearr_22005_22032 = state_21996__$1;(statearr_22005_22032[2] = null);
(statearr_22005_22032[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21997 === 8))
{var inst_21978 = (state_21996[2]);var state_21996__$1 = state_21996;var statearr_22006_22033 = state_21996__$1;(statearr_22006_22033[2] = inst_21978);
(statearr_22006_22033[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21997 === 9))
{var inst_21960 = (state_21996[8]);var inst_21973 = (state_21996[2]);var inst_21974 = (inst_21960 + 1);var inst_21960__$1 = inst_21974;var state_21996__$1 = (function (){var statearr_22007 = state_21996;(statearr_22007[10] = inst_21973);
(statearr_22007[8] = inst_21960__$1);
return statearr_22007;
})();var statearr_22008_22034 = state_21996__$1;(statearr_22008_22034[2] = null);
(statearr_22008_22034[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21997 === 10))
{var inst_21964 = (state_21996[2]);var inst_21965 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_21996__$1 = (function (){var statearr_22009 = state_21996;(statearr_22009[11] = inst_21964);
return statearr_22009;
})();var statearr_22010_22035 = state_21996__$1;(statearr_22010_22035[2] = inst_21965);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21996__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21997 === 11))
{var inst_21960 = (state_21996[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21996,10,Object,null,9);var inst_21969 = chs__$1.call(null,inst_21960);var inst_21970 = done.call(null,inst_21960);var inst_21971 = cljs.core.async.take_BANG_.call(null,inst_21969,inst_21970);var state_21996__$1 = state_21996;var statearr_22011_22036 = state_21996__$1;(statearr_22011_22036[2] = inst_21971);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21996__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21997 === 12))
{var inst_21982 = (state_21996[12]);var inst_21982__$1 = (state_21996[2]);var inst_21983 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21982__$1);var state_21996__$1 = (function (){var statearr_22012 = state_21996;(statearr_22012[12] = inst_21982__$1);
return statearr_22012;
})();if(cljs.core.truth_(inst_21983))
{var statearr_22013_22037 = state_21996__$1;(statearr_22013_22037[1] = 13);
} else
{var statearr_22014_22038 = state_21996__$1;(statearr_22014_22038[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21997 === 13))
{var inst_21985 = cljs.core.async.close_BANG_.call(null,out);var state_21996__$1 = state_21996;var statearr_22015_22039 = state_21996__$1;(statearr_22015_22039[2] = inst_21985);
(statearr_22015_22039[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21997 === 14))
{var inst_21982 = (state_21996[12]);var inst_21987 = cljs.core.apply.call(null,f,inst_21982);var state_21996__$1 = state_21996;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21996__$1,16,out,inst_21987);
} else
{if((state_val_21997 === 15))
{var inst_21992 = (state_21996[2]);var state_21996__$1 = state_21996;var statearr_22016_22040 = state_21996__$1;(statearr_22016_22040[2] = inst_21992);
(statearr_22016_22040[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21997 === 16))
{var inst_21989 = (state_21996[2]);var state_21996__$1 = (function (){var statearr_22017 = state_21996;(statearr_22017[13] = inst_21989);
return statearr_22017;
})();var statearr_22018_22041 = state_21996__$1;(statearr_22018_22041[2] = null);
(statearr_22018_22041[1] = 2);
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
});return ((function (switch__12213__auto__){
return (function() {
var state_machine__12214__auto__ = null;
var state_machine__12214__auto____0 = (function (){var statearr_22022 = (new Array(14));(statearr_22022[0] = state_machine__12214__auto__);
(statearr_22022[1] = 1);
return statearr_22022;
});
var state_machine__12214__auto____1 = (function (state_21996){while(true){
var ret_value__12215__auto__ = (function (){try{while(true){
var result__12216__auto__ = switch__12213__auto__.call(null,state_21996);if(cljs.core.keyword_identical_QMARK_.call(null,result__12216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12216__auto__;
}
break;
}
}catch (e22023){if((e22023 instanceof Object))
{var ex__12217__auto__ = e22023;var statearr_22024_22042 = state_21996;(statearr_22024_22042[5] = ex__12217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21996);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22023;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22043 = state_21996;
state_21996 = G__22043;
continue;
}
} else
{return ret_value__12215__auto__;
}
break;
}
});
state_machine__12214__auto__ = function(state_21996){
switch(arguments.length){
case 0:
return state_machine__12214__auto____0.call(this);
case 1:
return state_machine__12214__auto____1.call(this,state_21996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12214__auto____0;
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12214__auto____1;
return state_machine__12214__auto__;
})()
;})(switch__12213__auto__))
})();var state__12345__auto__ = (function (){var statearr_22025 = f__12344__auto__.call(null);(statearr_22025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12343__auto___22026);
return statearr_22025;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12345__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12343__auto___22151 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12344__auto__ = (function (){var switch__12213__auto__ = (function (state_22127){var state_val_22128 = (state_22127[1]);if((state_val_22128 === 1))
{var inst_22098 = cljs.core.vec.call(null,chs);var inst_22099 = inst_22098;var state_22127__$1 = (function (){var statearr_22129 = state_22127;(statearr_22129[7] = inst_22099);
return statearr_22129;
})();var statearr_22130_22152 = state_22127__$1;(statearr_22130_22152[2] = null);
(statearr_22130_22152[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22128 === 2))
{var inst_22099 = (state_22127[7]);var inst_22101 = cljs.core.count.call(null,inst_22099);var inst_22102 = (inst_22101 > 0);var state_22127__$1 = state_22127;if(cljs.core.truth_(inst_22102))
{var statearr_22131_22153 = state_22127__$1;(statearr_22131_22153[1] = 4);
} else
{var statearr_22132_22154 = state_22127__$1;(statearr_22132_22154[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22128 === 3))
{var inst_22125 = (state_22127[2]);var state_22127__$1 = state_22127;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22127__$1,inst_22125);
} else
{if((state_val_22128 === 4))
{var inst_22099 = (state_22127[7]);var state_22127__$1 = state_22127;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22127__$1,7,inst_22099);
} else
{if((state_val_22128 === 5))
{var inst_22121 = cljs.core.async.close_BANG_.call(null,out);var state_22127__$1 = state_22127;var statearr_22133_22155 = state_22127__$1;(statearr_22133_22155[2] = inst_22121);
(statearr_22133_22155[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22128 === 6))
{var inst_22123 = (state_22127[2]);var state_22127__$1 = state_22127;var statearr_22134_22156 = state_22127__$1;(statearr_22134_22156[2] = inst_22123);
(statearr_22134_22156[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22128 === 7))
{var inst_22106 = (state_22127[8]);var inst_22107 = (state_22127[9]);var inst_22106__$1 = (state_22127[2]);var inst_22107__$1 = cljs.core.nth.call(null,inst_22106__$1,0,null);var inst_22108 = cljs.core.nth.call(null,inst_22106__$1,1,null);var inst_22109 = (inst_22107__$1 == null);var state_22127__$1 = (function (){var statearr_22135 = state_22127;(statearr_22135[8] = inst_22106__$1);
(statearr_22135[9] = inst_22107__$1);
(statearr_22135[10] = inst_22108);
return statearr_22135;
})();if(cljs.core.truth_(inst_22109))
{var statearr_22136_22157 = state_22127__$1;(statearr_22136_22157[1] = 8);
} else
{var statearr_22137_22158 = state_22127__$1;(statearr_22137_22158[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22128 === 8))
{var inst_22106 = (state_22127[8]);var inst_22107 = (state_22127[9]);var inst_22099 = (state_22127[7]);var inst_22108 = (state_22127[10]);var inst_22111 = (function (){var c = inst_22108;var v = inst_22107;var vec__22104 = inst_22106;var cs = inst_22099;return ((function (c,v,vec__22104,cs,inst_22106,inst_22107,inst_22099,inst_22108,state_val_22128){
return (function (p1__22044_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__22044_SHARP_);
});
;})(c,v,vec__22104,cs,inst_22106,inst_22107,inst_22099,inst_22108,state_val_22128))
})();var inst_22112 = cljs.core.filterv.call(null,inst_22111,inst_22099);var inst_22099__$1 = inst_22112;var state_22127__$1 = (function (){var statearr_22138 = state_22127;(statearr_22138[7] = inst_22099__$1);
return statearr_22138;
})();var statearr_22139_22159 = state_22127__$1;(statearr_22139_22159[2] = null);
(statearr_22139_22159[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22128 === 9))
{var inst_22107 = (state_22127[9]);var state_22127__$1 = state_22127;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22127__$1,11,out,inst_22107);
} else
{if((state_val_22128 === 10))
{var inst_22119 = (state_22127[2]);var state_22127__$1 = state_22127;var statearr_22141_22160 = state_22127__$1;(statearr_22141_22160[2] = inst_22119);
(statearr_22141_22160[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22128 === 11))
{var inst_22099 = (state_22127[7]);var inst_22116 = (state_22127[2]);var tmp22140 = inst_22099;var inst_22099__$1 = tmp22140;var state_22127__$1 = (function (){var statearr_22142 = state_22127;(statearr_22142[7] = inst_22099__$1);
(statearr_22142[11] = inst_22116);
return statearr_22142;
})();var statearr_22143_22161 = state_22127__$1;(statearr_22143_22161[2] = null);
(statearr_22143_22161[1] = 2);
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
});return ((function (switch__12213__auto__){
return (function() {
var state_machine__12214__auto__ = null;
var state_machine__12214__auto____0 = (function (){var statearr_22147 = (new Array(12));(statearr_22147[0] = state_machine__12214__auto__);
(statearr_22147[1] = 1);
return statearr_22147;
});
var state_machine__12214__auto____1 = (function (state_22127){while(true){
var ret_value__12215__auto__ = (function (){try{while(true){
var result__12216__auto__ = switch__12213__auto__.call(null,state_22127);if(cljs.core.keyword_identical_QMARK_.call(null,result__12216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12216__auto__;
}
break;
}
}catch (e22148){if((e22148 instanceof Object))
{var ex__12217__auto__ = e22148;var statearr_22149_22162 = state_22127;(statearr_22149_22162[5] = ex__12217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22127);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22148;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22163 = state_22127;
state_22127 = G__22163;
continue;
}
} else
{return ret_value__12215__auto__;
}
break;
}
});
state_machine__12214__auto__ = function(state_22127){
switch(arguments.length){
case 0:
return state_machine__12214__auto____0.call(this);
case 1:
return state_machine__12214__auto____1.call(this,state_22127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12214__auto____0;
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12214__auto____1;
return state_machine__12214__auto__;
})()
;})(switch__12213__auto__))
})();var state__12345__auto__ = (function (){var statearr_22150 = f__12344__auto__.call(null);(statearr_22150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12343__auto___22151);
return statearr_22150;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12345__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12343__auto___22256 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12344__auto__ = (function (){var switch__12213__auto__ = (function (state_22233){var state_val_22234 = (state_22233[1]);if((state_val_22234 === 1))
{var inst_22210 = 0;var state_22233__$1 = (function (){var statearr_22235 = state_22233;(statearr_22235[7] = inst_22210);
return statearr_22235;
})();var statearr_22236_22257 = state_22233__$1;(statearr_22236_22257[2] = null);
(statearr_22236_22257[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22234 === 2))
{var inst_22210 = (state_22233[7]);var inst_22212 = (inst_22210 < n);var state_22233__$1 = state_22233;if(cljs.core.truth_(inst_22212))
{var statearr_22237_22258 = state_22233__$1;(statearr_22237_22258[1] = 4);
} else
{var statearr_22238_22259 = state_22233__$1;(statearr_22238_22259[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22234 === 3))
{var inst_22230 = (state_22233[2]);var inst_22231 = cljs.core.async.close_BANG_.call(null,out);var state_22233__$1 = (function (){var statearr_22239 = state_22233;(statearr_22239[8] = inst_22230);
return statearr_22239;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22233__$1,inst_22231);
} else
{if((state_val_22234 === 4))
{var state_22233__$1 = state_22233;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22233__$1,7,ch);
} else
{if((state_val_22234 === 5))
{var state_22233__$1 = state_22233;var statearr_22240_22260 = state_22233__$1;(statearr_22240_22260[2] = null);
(statearr_22240_22260[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22234 === 6))
{var inst_22228 = (state_22233[2]);var state_22233__$1 = state_22233;var statearr_22241_22261 = state_22233__$1;(statearr_22241_22261[2] = inst_22228);
(statearr_22241_22261[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22234 === 7))
{var inst_22215 = (state_22233[9]);var inst_22215__$1 = (state_22233[2]);var inst_22216 = (inst_22215__$1 == null);var inst_22217 = cljs.core.not.call(null,inst_22216);var state_22233__$1 = (function (){var statearr_22242 = state_22233;(statearr_22242[9] = inst_22215__$1);
return statearr_22242;
})();if(inst_22217)
{var statearr_22243_22262 = state_22233__$1;(statearr_22243_22262[1] = 8);
} else
{var statearr_22244_22263 = state_22233__$1;(statearr_22244_22263[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22234 === 8))
{var inst_22215 = (state_22233[9]);var state_22233__$1 = state_22233;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22233__$1,11,out,inst_22215);
} else
{if((state_val_22234 === 9))
{var state_22233__$1 = state_22233;var statearr_22245_22264 = state_22233__$1;(statearr_22245_22264[2] = null);
(statearr_22245_22264[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22234 === 10))
{var inst_22225 = (state_22233[2]);var state_22233__$1 = state_22233;var statearr_22246_22265 = state_22233__$1;(statearr_22246_22265[2] = inst_22225);
(statearr_22246_22265[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22234 === 11))
{var inst_22210 = (state_22233[7]);var inst_22220 = (state_22233[2]);var inst_22221 = (inst_22210 + 1);var inst_22210__$1 = inst_22221;var state_22233__$1 = (function (){var statearr_22247 = state_22233;(statearr_22247[10] = inst_22220);
(statearr_22247[7] = inst_22210__$1);
return statearr_22247;
})();var statearr_22248_22266 = state_22233__$1;(statearr_22248_22266[2] = null);
(statearr_22248_22266[1] = 2);
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
});return ((function (switch__12213__auto__){
return (function() {
var state_machine__12214__auto__ = null;
var state_machine__12214__auto____0 = (function (){var statearr_22252 = (new Array(11));(statearr_22252[0] = state_machine__12214__auto__);
(statearr_22252[1] = 1);
return statearr_22252;
});
var state_machine__12214__auto____1 = (function (state_22233){while(true){
var ret_value__12215__auto__ = (function (){try{while(true){
var result__12216__auto__ = switch__12213__auto__.call(null,state_22233);if(cljs.core.keyword_identical_QMARK_.call(null,result__12216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12216__auto__;
}
break;
}
}catch (e22253){if((e22253 instanceof Object))
{var ex__12217__auto__ = e22253;var statearr_22254_22267 = state_22233;(statearr_22254_22267[5] = ex__12217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22233);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22253;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22268 = state_22233;
state_22233 = G__22268;
continue;
}
} else
{return ret_value__12215__auto__;
}
break;
}
});
state_machine__12214__auto__ = function(state_22233){
switch(arguments.length){
case 0:
return state_machine__12214__auto____0.call(this);
case 1:
return state_machine__12214__auto____1.call(this,state_22233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12214__auto____0;
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12214__auto____1;
return state_machine__12214__auto__;
})()
;})(switch__12213__auto__))
})();var state__12345__auto__ = (function (){var statearr_22255 = f__12344__auto__.call(null);(statearr_22255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12343__auto___22256);
return statearr_22255;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12345__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12343__auto___22365 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12344__auto__ = (function (){var switch__12213__auto__ = (function (state_22340){var state_val_22341 = (state_22340[1]);if((state_val_22341 === 1))
{var inst_22317 = null;var state_22340__$1 = (function (){var statearr_22342 = state_22340;(statearr_22342[7] = inst_22317);
return statearr_22342;
})();var statearr_22343_22366 = state_22340__$1;(statearr_22343_22366[2] = null);
(statearr_22343_22366[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22341 === 2))
{var state_22340__$1 = state_22340;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22340__$1,4,ch);
} else
{if((state_val_22341 === 3))
{var inst_22337 = (state_22340[2]);var inst_22338 = cljs.core.async.close_BANG_.call(null,out);var state_22340__$1 = (function (){var statearr_22344 = state_22340;(statearr_22344[8] = inst_22337);
return statearr_22344;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22340__$1,inst_22338);
} else
{if((state_val_22341 === 4))
{var inst_22320 = (state_22340[9]);var inst_22320__$1 = (state_22340[2]);var inst_22321 = (inst_22320__$1 == null);var inst_22322 = cljs.core.not.call(null,inst_22321);var state_22340__$1 = (function (){var statearr_22345 = state_22340;(statearr_22345[9] = inst_22320__$1);
return statearr_22345;
})();if(inst_22322)
{var statearr_22346_22367 = state_22340__$1;(statearr_22346_22367[1] = 5);
} else
{var statearr_22347_22368 = state_22340__$1;(statearr_22347_22368[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22341 === 5))
{var inst_22317 = (state_22340[7]);var inst_22320 = (state_22340[9]);var inst_22324 = cljs.core._EQ_.call(null,inst_22320,inst_22317);var state_22340__$1 = state_22340;if(inst_22324)
{var statearr_22348_22369 = state_22340__$1;(statearr_22348_22369[1] = 8);
} else
{var statearr_22349_22370 = state_22340__$1;(statearr_22349_22370[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22341 === 6))
{var state_22340__$1 = state_22340;var statearr_22351_22371 = state_22340__$1;(statearr_22351_22371[2] = null);
(statearr_22351_22371[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22341 === 7))
{var inst_22335 = (state_22340[2]);var state_22340__$1 = state_22340;var statearr_22352_22372 = state_22340__$1;(statearr_22352_22372[2] = inst_22335);
(statearr_22352_22372[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22341 === 8))
{var inst_22317 = (state_22340[7]);var tmp22350 = inst_22317;var inst_22317__$1 = tmp22350;var state_22340__$1 = (function (){var statearr_22353 = state_22340;(statearr_22353[7] = inst_22317__$1);
return statearr_22353;
})();var statearr_22354_22373 = state_22340__$1;(statearr_22354_22373[2] = null);
(statearr_22354_22373[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22341 === 9))
{var inst_22320 = (state_22340[9]);var state_22340__$1 = state_22340;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22340__$1,11,out,inst_22320);
} else
{if((state_val_22341 === 10))
{var inst_22332 = (state_22340[2]);var state_22340__$1 = state_22340;var statearr_22355_22374 = state_22340__$1;(statearr_22355_22374[2] = inst_22332);
(statearr_22355_22374[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22341 === 11))
{var inst_22320 = (state_22340[9]);var inst_22329 = (state_22340[2]);var inst_22317 = inst_22320;var state_22340__$1 = (function (){var statearr_22356 = state_22340;(statearr_22356[7] = inst_22317);
(statearr_22356[10] = inst_22329);
return statearr_22356;
})();var statearr_22357_22375 = state_22340__$1;(statearr_22357_22375[2] = null);
(statearr_22357_22375[1] = 2);
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
});return ((function (switch__12213__auto__){
return (function() {
var state_machine__12214__auto__ = null;
var state_machine__12214__auto____0 = (function (){var statearr_22361 = (new Array(11));(statearr_22361[0] = state_machine__12214__auto__);
(statearr_22361[1] = 1);
return statearr_22361;
});
var state_machine__12214__auto____1 = (function (state_22340){while(true){
var ret_value__12215__auto__ = (function (){try{while(true){
var result__12216__auto__ = switch__12213__auto__.call(null,state_22340);if(cljs.core.keyword_identical_QMARK_.call(null,result__12216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12216__auto__;
}
break;
}
}catch (e22362){if((e22362 instanceof Object))
{var ex__12217__auto__ = e22362;var statearr_22363_22376 = state_22340;(statearr_22363_22376[5] = ex__12217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22340);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22362;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22377 = state_22340;
state_22340 = G__22377;
continue;
}
} else
{return ret_value__12215__auto__;
}
break;
}
});
state_machine__12214__auto__ = function(state_22340){
switch(arguments.length){
case 0:
return state_machine__12214__auto____0.call(this);
case 1:
return state_machine__12214__auto____1.call(this,state_22340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12214__auto____0;
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12214__auto____1;
return state_machine__12214__auto__;
})()
;})(switch__12213__auto__))
})();var state__12345__auto__ = (function (){var statearr_22364 = f__12344__auto__.call(null);(statearr_22364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12343__auto___22365);
return statearr_22364;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12345__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12343__auto___22512 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12344__auto__ = (function (){var switch__12213__auto__ = (function (state_22482){var state_val_22483 = (state_22482[1]);if((state_val_22483 === 1))
{var inst_22445 = (new Array(n));var inst_22446 = inst_22445;var inst_22447 = 0;var state_22482__$1 = (function (){var statearr_22484 = state_22482;(statearr_22484[7] = inst_22446);
(statearr_22484[8] = inst_22447);
return statearr_22484;
})();var statearr_22485_22513 = state_22482__$1;(statearr_22485_22513[2] = null);
(statearr_22485_22513[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22483 === 2))
{var state_22482__$1 = state_22482;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22482__$1,4,ch);
} else
{if((state_val_22483 === 3))
{var inst_22480 = (state_22482[2]);var state_22482__$1 = state_22482;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22482__$1,inst_22480);
} else
{if((state_val_22483 === 4))
{var inst_22450 = (state_22482[9]);var inst_22450__$1 = (state_22482[2]);var inst_22451 = (inst_22450__$1 == null);var inst_22452 = cljs.core.not.call(null,inst_22451);var state_22482__$1 = (function (){var statearr_22486 = state_22482;(statearr_22486[9] = inst_22450__$1);
return statearr_22486;
})();if(inst_22452)
{var statearr_22487_22514 = state_22482__$1;(statearr_22487_22514[1] = 5);
} else
{var statearr_22488_22515 = state_22482__$1;(statearr_22488_22515[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22483 === 5))
{var inst_22455 = (state_22482[10]);var inst_22446 = (state_22482[7]);var inst_22447 = (state_22482[8]);var inst_22450 = (state_22482[9]);var inst_22454 = (inst_22446[inst_22447] = inst_22450);var inst_22455__$1 = (inst_22447 + 1);var inst_22456 = (inst_22455__$1 < n);var state_22482__$1 = (function (){var statearr_22489 = state_22482;(statearr_22489[10] = inst_22455__$1);
(statearr_22489[11] = inst_22454);
return statearr_22489;
})();if(cljs.core.truth_(inst_22456))
{var statearr_22490_22516 = state_22482__$1;(statearr_22490_22516[1] = 8);
} else
{var statearr_22491_22517 = state_22482__$1;(statearr_22491_22517[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22483 === 6))
{var inst_22447 = (state_22482[8]);var inst_22468 = (inst_22447 > 0);var state_22482__$1 = state_22482;if(cljs.core.truth_(inst_22468))
{var statearr_22493_22518 = state_22482__$1;(statearr_22493_22518[1] = 12);
} else
{var statearr_22494_22519 = state_22482__$1;(statearr_22494_22519[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22483 === 7))
{var inst_22478 = (state_22482[2]);var state_22482__$1 = state_22482;var statearr_22495_22520 = state_22482__$1;(statearr_22495_22520[2] = inst_22478);
(statearr_22495_22520[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22483 === 8))
{var inst_22455 = (state_22482[10]);var inst_22446 = (state_22482[7]);var tmp22492 = inst_22446;var inst_22446__$1 = tmp22492;var inst_22447 = inst_22455;var state_22482__$1 = (function (){var statearr_22496 = state_22482;(statearr_22496[7] = inst_22446__$1);
(statearr_22496[8] = inst_22447);
return statearr_22496;
})();var statearr_22497_22521 = state_22482__$1;(statearr_22497_22521[2] = null);
(statearr_22497_22521[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22483 === 9))
{var inst_22446 = (state_22482[7]);var inst_22460 = cljs.core.vec.call(null,inst_22446);var state_22482__$1 = state_22482;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22482__$1,11,out,inst_22460);
} else
{if((state_val_22483 === 10))
{var inst_22466 = (state_22482[2]);var state_22482__$1 = state_22482;var statearr_22498_22522 = state_22482__$1;(statearr_22498_22522[2] = inst_22466);
(statearr_22498_22522[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22483 === 11))
{var inst_22462 = (state_22482[2]);var inst_22463 = (new Array(n));var inst_22446 = inst_22463;var inst_22447 = 0;var state_22482__$1 = (function (){var statearr_22499 = state_22482;(statearr_22499[12] = inst_22462);
(statearr_22499[7] = inst_22446);
(statearr_22499[8] = inst_22447);
return statearr_22499;
})();var statearr_22500_22523 = state_22482__$1;(statearr_22500_22523[2] = null);
(statearr_22500_22523[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22483 === 12))
{var inst_22446 = (state_22482[7]);var inst_22470 = cljs.core.vec.call(null,inst_22446);var state_22482__$1 = state_22482;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22482__$1,15,out,inst_22470);
} else
{if((state_val_22483 === 13))
{var state_22482__$1 = state_22482;var statearr_22501_22524 = state_22482__$1;(statearr_22501_22524[2] = null);
(statearr_22501_22524[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22483 === 14))
{var inst_22475 = (state_22482[2]);var inst_22476 = cljs.core.async.close_BANG_.call(null,out);var state_22482__$1 = (function (){var statearr_22502 = state_22482;(statearr_22502[13] = inst_22475);
return statearr_22502;
})();var statearr_22503_22525 = state_22482__$1;(statearr_22503_22525[2] = inst_22476);
(statearr_22503_22525[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22483 === 15))
{var inst_22472 = (state_22482[2]);var state_22482__$1 = state_22482;var statearr_22504_22526 = state_22482__$1;(statearr_22504_22526[2] = inst_22472);
(statearr_22504_22526[1] = 14);
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
});return ((function (switch__12213__auto__){
return (function() {
var state_machine__12214__auto__ = null;
var state_machine__12214__auto____0 = (function (){var statearr_22508 = (new Array(14));(statearr_22508[0] = state_machine__12214__auto__);
(statearr_22508[1] = 1);
return statearr_22508;
});
var state_machine__12214__auto____1 = (function (state_22482){while(true){
var ret_value__12215__auto__ = (function (){try{while(true){
var result__12216__auto__ = switch__12213__auto__.call(null,state_22482);if(cljs.core.keyword_identical_QMARK_.call(null,result__12216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12216__auto__;
}
break;
}
}catch (e22509){if((e22509 instanceof Object))
{var ex__12217__auto__ = e22509;var statearr_22510_22527 = state_22482;(statearr_22510_22527[5] = ex__12217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22482);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22509;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22528 = state_22482;
state_22482 = G__22528;
continue;
}
} else
{return ret_value__12215__auto__;
}
break;
}
});
state_machine__12214__auto__ = function(state_22482){
switch(arguments.length){
case 0:
return state_machine__12214__auto____0.call(this);
case 1:
return state_machine__12214__auto____1.call(this,state_22482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12214__auto____0;
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12214__auto____1;
return state_machine__12214__auto__;
})()
;})(switch__12213__auto__))
})();var state__12345__auto__ = (function (){var statearr_22511 = f__12344__auto__.call(null);(statearr_22511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12343__auto___22512);
return statearr_22511;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12345__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12343__auto___22671 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12344__auto__ = (function (){var switch__12213__auto__ = (function (state_22641){var state_val_22642 = (state_22641[1]);if((state_val_22642 === 1))
{var inst_22600 = (new Array(0));var inst_22601 = inst_22600;var inst_22602 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_22641__$1 = (function (){var statearr_22643 = state_22641;(statearr_22643[7] = inst_22601);
(statearr_22643[8] = inst_22602);
return statearr_22643;
})();var statearr_22644_22672 = state_22641__$1;(statearr_22644_22672[2] = null);
(statearr_22644_22672[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22642 === 2))
{var state_22641__$1 = state_22641;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22641__$1,4,ch);
} else
{if((state_val_22642 === 3))
{var inst_22639 = (state_22641[2]);var state_22641__$1 = state_22641;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22641__$1,inst_22639);
} else
{if((state_val_22642 === 4))
{var inst_22605 = (state_22641[9]);var inst_22605__$1 = (state_22641[2]);var inst_22606 = (inst_22605__$1 == null);var inst_22607 = cljs.core.not.call(null,inst_22606);var state_22641__$1 = (function (){var statearr_22645 = state_22641;(statearr_22645[9] = inst_22605__$1);
return statearr_22645;
})();if(inst_22607)
{var statearr_22646_22673 = state_22641__$1;(statearr_22646_22673[1] = 5);
} else
{var statearr_22647_22674 = state_22641__$1;(statearr_22647_22674[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22642 === 5))
{var inst_22605 = (state_22641[9]);var inst_22609 = (state_22641[10]);var inst_22602 = (state_22641[8]);var inst_22609__$1 = f.call(null,inst_22605);var inst_22610 = cljs.core._EQ_.call(null,inst_22609__$1,inst_22602);var inst_22611 = cljs.core.keyword_identical_QMARK_.call(null,inst_22602,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_22612 = (inst_22610) || (inst_22611);var state_22641__$1 = (function (){var statearr_22648 = state_22641;(statearr_22648[10] = inst_22609__$1);
return statearr_22648;
})();if(cljs.core.truth_(inst_22612))
{var statearr_22649_22675 = state_22641__$1;(statearr_22649_22675[1] = 8);
} else
{var statearr_22650_22676 = state_22641__$1;(statearr_22650_22676[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22642 === 6))
{var inst_22601 = (state_22641[7]);var inst_22626 = inst_22601.length;var inst_22627 = (inst_22626 > 0);var state_22641__$1 = state_22641;if(cljs.core.truth_(inst_22627))
{var statearr_22652_22677 = state_22641__$1;(statearr_22652_22677[1] = 12);
} else
{var statearr_22653_22678 = state_22641__$1;(statearr_22653_22678[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22642 === 7))
{var inst_22637 = (state_22641[2]);var state_22641__$1 = state_22641;var statearr_22654_22679 = state_22641__$1;(statearr_22654_22679[2] = inst_22637);
(statearr_22654_22679[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22642 === 8))
{var inst_22605 = (state_22641[9]);var inst_22609 = (state_22641[10]);var inst_22601 = (state_22641[7]);var inst_22614 = inst_22601.push(inst_22605);var tmp22651 = inst_22601;var inst_22601__$1 = tmp22651;var inst_22602 = inst_22609;var state_22641__$1 = (function (){var statearr_22655 = state_22641;(statearr_22655[11] = inst_22614);
(statearr_22655[7] = inst_22601__$1);
(statearr_22655[8] = inst_22602);
return statearr_22655;
})();var statearr_22656_22680 = state_22641__$1;(statearr_22656_22680[2] = null);
(statearr_22656_22680[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22642 === 9))
{var inst_22601 = (state_22641[7]);var inst_22617 = cljs.core.vec.call(null,inst_22601);var state_22641__$1 = state_22641;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22641__$1,11,out,inst_22617);
} else
{if((state_val_22642 === 10))
{var inst_22624 = (state_22641[2]);var state_22641__$1 = state_22641;var statearr_22657_22681 = state_22641__$1;(statearr_22657_22681[2] = inst_22624);
(statearr_22657_22681[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22642 === 11))
{var inst_22605 = (state_22641[9]);var inst_22609 = (state_22641[10]);var inst_22619 = (state_22641[2]);var inst_22620 = (new Array(0));var inst_22621 = inst_22620.push(inst_22605);var inst_22601 = inst_22620;var inst_22602 = inst_22609;var state_22641__$1 = (function (){var statearr_22658 = state_22641;(statearr_22658[12] = inst_22621);
(statearr_22658[7] = inst_22601);
(statearr_22658[13] = inst_22619);
(statearr_22658[8] = inst_22602);
return statearr_22658;
})();var statearr_22659_22682 = state_22641__$1;(statearr_22659_22682[2] = null);
(statearr_22659_22682[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22642 === 12))
{var inst_22601 = (state_22641[7]);var inst_22629 = cljs.core.vec.call(null,inst_22601);var state_22641__$1 = state_22641;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22641__$1,15,out,inst_22629);
} else
{if((state_val_22642 === 13))
{var state_22641__$1 = state_22641;var statearr_22660_22683 = state_22641__$1;(statearr_22660_22683[2] = null);
(statearr_22660_22683[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22642 === 14))
{var inst_22634 = (state_22641[2]);var inst_22635 = cljs.core.async.close_BANG_.call(null,out);var state_22641__$1 = (function (){var statearr_22661 = state_22641;(statearr_22661[14] = inst_22634);
return statearr_22661;
})();var statearr_22662_22684 = state_22641__$1;(statearr_22662_22684[2] = inst_22635);
(statearr_22662_22684[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22642 === 15))
{var inst_22631 = (state_22641[2]);var state_22641__$1 = state_22641;var statearr_22663_22685 = state_22641__$1;(statearr_22663_22685[2] = inst_22631);
(statearr_22663_22685[1] = 14);
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
});return ((function (switch__12213__auto__){
return (function() {
var state_machine__12214__auto__ = null;
var state_machine__12214__auto____0 = (function (){var statearr_22667 = (new Array(15));(statearr_22667[0] = state_machine__12214__auto__);
(statearr_22667[1] = 1);
return statearr_22667;
});
var state_machine__12214__auto____1 = (function (state_22641){while(true){
var ret_value__12215__auto__ = (function (){try{while(true){
var result__12216__auto__ = switch__12213__auto__.call(null,state_22641);if(cljs.core.keyword_identical_QMARK_.call(null,result__12216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12216__auto__;
}
break;
}
}catch (e22668){if((e22668 instanceof Object))
{var ex__12217__auto__ = e22668;var statearr_22669_22686 = state_22641;(statearr_22669_22686[5] = ex__12217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22641);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22668;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22687 = state_22641;
state_22641 = G__22687;
continue;
}
} else
{return ret_value__12215__auto__;
}
break;
}
});
state_machine__12214__auto__ = function(state_22641){
switch(arguments.length){
case 0:
return state_machine__12214__auto____0.call(this);
case 1:
return state_machine__12214__auto____1.call(this,state_22641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12214__auto____0;
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12214__auto____1;
return state_machine__12214__auto__;
})()
;})(switch__12213__auto__))
})();var state__12345__auto__ = (function (){var statearr_22670 = f__12344__auto__.call(null);(statearr_22670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12343__auto___22671);
return statearr_22670;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12345__auto__);
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
