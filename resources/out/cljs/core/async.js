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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t31858 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31858 = (function (f,fn_handler,meta31859){
this.f = f;
this.fn_handler = fn_handler;
this.meta31859 = meta31859;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31858.cljs$lang$type = true;
cljs.core.async.t31858.cljs$lang$ctorStr = "cljs.core.async/t31858";
cljs.core.async.t31858.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t31858");
});
cljs.core.async.t31858.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31858.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t31858.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t31858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31860){var self__ = this;
var _31860__$1 = this;return self__.meta31859;
});
cljs.core.async.t31858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31860,meta31859__$1){var self__ = this;
var _31860__$1 = this;return (new cljs.core.async.t31858(self__.f,self__.fn_handler,meta31859__$1));
});
cljs.core.async.__GT_t31858 = (function __GT_t31858(f__$1,fn_handler__$1,meta31859){return (new cljs.core.async.t31858(f__$1,fn_handler__$1,meta31859));
});
}
return (new cljs.core.async.t31858(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__31862 = buff;if(G__31862)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__31862.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__31862.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31862);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31862);
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
{var val_31863 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_31863);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_31863);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__14646__auto___31864 = n;var x_31865 = 0;while(true){
if((x_31865 < n__14646__auto___31864))
{(a[x_31865] = 0);
{
var G__31866 = (x_31865 + 1);
x_31865 = G__31866;
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
var G__31867 = (i + 1);
i = G__31867;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t31871 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31871 = (function (flag,alt_flag,meta31872){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31872 = meta31872;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31871.cljs$lang$type = true;
cljs.core.async.t31871.cljs$lang$ctorStr = "cljs.core.async/t31871";
cljs.core.async.t31871.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t31871");
});
cljs.core.async.t31871.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31871.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t31871.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t31871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31873){var self__ = this;
var _31873__$1 = this;return self__.meta31872;
});
cljs.core.async.t31871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31873,meta31872__$1){var self__ = this;
var _31873__$1 = this;return (new cljs.core.async.t31871(self__.flag,self__.alt_flag,meta31872__$1));
});
cljs.core.async.__GT_t31871 = (function __GT_t31871(flag__$1,alt_flag__$1,meta31872){return (new cljs.core.async.t31871(flag__$1,alt_flag__$1,meta31872));
});
}
return (new cljs.core.async.t31871(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t31877 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31877 = (function (cb,flag,alt_handler,meta31878){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31878 = meta31878;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31877.cljs$lang$type = true;
cljs.core.async.t31877.cljs$lang$ctorStr = "cljs.core.async/t31877";
cljs.core.async.t31877.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t31877");
});
cljs.core.async.t31877.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31877.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t31877.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t31877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31879){var self__ = this;
var _31879__$1 = this;return self__.meta31878;
});
cljs.core.async.t31877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31879,meta31878__$1){var self__ = this;
var _31879__$1 = this;return (new cljs.core.async.t31877(self__.cb,self__.flag,self__.alt_handler,meta31878__$1));
});
cljs.core.async.__GT_t31877 = (function __GT_t31877(cb__$1,flag__$1,alt_handler__$1,meta31878){return (new cljs.core.async.t31877(cb__$1,flag__$1,alt_handler__$1,meta31878));
});
}
return (new cljs.core.async.t31877(cb,flag,alt_handler,null));
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
return (function (p1__31880_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31880_SHARP_,port], null));
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
var G__31881 = (i + 1);
i = G__31881;
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
var alts_BANG___delegate = function (ports,p__31882){var map__31884 = p__31882;var map__31884__$1 = ((cljs.core.seq_QMARK_.call(null,map__31884))?cljs.core.apply.call(null,cljs.core.hash_map,map__31884):map__31884);var opts = map__31884__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__31882 = null;if (arguments.length > 1) {
  p__31882 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__31882);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31885){
var ports = cljs.core.first(arglist__31885);
var p__31882 = cljs.core.rest(arglist__31885);
return alts_BANG___delegate(ports,p__31882);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t31893 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31893 = (function (ch,f,map_LT_,meta31894){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31894 = meta31894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31893.cljs$lang$type = true;
cljs.core.async.t31893.cljs$lang$ctorStr = "cljs.core.async/t31893";
cljs.core.async.t31893.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t31893");
});
cljs.core.async.t31893.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31893.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t31893.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31893.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t31896 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31896 = (function (fn1,_,meta31894,ch,f,map_LT_,meta31897){
this.fn1 = fn1;
this._ = _;
this.meta31894 = meta31894;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31897 = meta31897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31896.cljs$lang$type = true;
cljs.core.async.t31896.cljs$lang$ctorStr = "cljs.core.async/t31896";
cljs.core.async.t31896.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t31896");
});
cljs.core.async.t31896.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31896.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t31896.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t31896.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__31886_SHARP_){return f1.call(null,(((p1__31886_SHARP_ == null))?null:self__.f.call(null,p1__31886_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t31896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31898){var self__ = this;
var _31898__$1 = this;return self__.meta31897;
});
cljs.core.async.t31896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31898,meta31897__$1){var self__ = this;
var _31898__$1 = this;return (new cljs.core.async.t31896(self__.fn1,self__._,self__.meta31894,self__.ch,self__.f,self__.map_LT_,meta31897__$1));
});
cljs.core.async.__GT_t31896 = (function __GT_t31896(fn1__$1,___$2,meta31894__$1,ch__$2,f__$2,map_LT___$2,meta31897){return (new cljs.core.async.t31896(fn1__$1,___$2,meta31894__$1,ch__$2,f__$2,map_LT___$2,meta31897));
});
}
return (new cljs.core.async.t31896(fn1,___$1,self__.meta31894,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t31893.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31893.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31895){var self__ = this;
var _31895__$1 = this;return self__.meta31894;
});
cljs.core.async.t31893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31895,meta31894__$1){var self__ = this;
var _31895__$1 = this;return (new cljs.core.async.t31893(self__.ch,self__.f,self__.map_LT_,meta31894__$1));
});
cljs.core.async.__GT_t31893 = (function __GT_t31893(ch__$1,f__$1,map_LT___$1,meta31894){return (new cljs.core.async.t31893(ch__$1,f__$1,map_LT___$1,meta31894));
});
}
return (new cljs.core.async.t31893(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t31902 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31902 = (function (ch,f,map_GT_,meta31903){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31903 = meta31903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31902.cljs$lang$type = true;
cljs.core.async.t31902.cljs$lang$ctorStr = "cljs.core.async/t31902";
cljs.core.async.t31902.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t31902");
});
cljs.core.async.t31902.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31902.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t31902.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31902.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t31902.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31902.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31904){var self__ = this;
var _31904__$1 = this;return self__.meta31903;
});
cljs.core.async.t31902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31904,meta31903__$1){var self__ = this;
var _31904__$1 = this;return (new cljs.core.async.t31902(self__.ch,self__.f,self__.map_GT_,meta31903__$1));
});
cljs.core.async.__GT_t31902 = (function __GT_t31902(ch__$1,f__$1,map_GT___$1,meta31903){return (new cljs.core.async.t31902(ch__$1,f__$1,map_GT___$1,meta31903));
});
}
return (new cljs.core.async.t31902(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t31908 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31908 = (function (ch,p,filter_GT_,meta31909){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31909 = meta31909;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31908.cljs$lang$type = true;
cljs.core.async.t31908.cljs$lang$ctorStr = "cljs.core.async/t31908";
cljs.core.async.t31908.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t31908");
});
cljs.core.async.t31908.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31908.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t31908.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31908.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t31908.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31908.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31910){var self__ = this;
var _31910__$1 = this;return self__.meta31909;
});
cljs.core.async.t31908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31910,meta31909__$1){var self__ = this;
var _31910__$1 = this;return (new cljs.core.async.t31908(self__.ch,self__.p,self__.filter_GT_,meta31909__$1));
});
cljs.core.async.__GT_t31908 = (function __GT_t31908(ch__$1,p__$1,filter_GT___$1,meta31909){return (new cljs.core.async.t31908(ch__$1,p__$1,filter_GT___$1,meta31909));
});
}
return (new cljs.core.async.t31908(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___31993 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_31972){var state_val_31973 = (state_31972[1]);if((state_val_31973 === 1))
{var state_31972__$1 = state_31972;var statearr_31974_31994 = state_31972__$1;(statearr_31974_31994[2] = null);
(statearr_31974_31994[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31973 === 2))
{var state_31972__$1 = state_31972;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31972__$1,4,ch);
} else
{if((state_val_31973 === 3))
{var inst_31970 = (state_31972[2]);var state_31972__$1 = state_31972;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31972__$1,inst_31970);
} else
{if((state_val_31973 === 4))
{var inst_31954 = (state_31972[7]);var inst_31954__$1 = (state_31972[2]);var inst_31955 = (inst_31954__$1 == null);var state_31972__$1 = (function (){var statearr_31975 = state_31972;(statearr_31975[7] = inst_31954__$1);
return statearr_31975;
})();if(cljs.core.truth_(inst_31955))
{var statearr_31976_31995 = state_31972__$1;(statearr_31976_31995[1] = 5);
} else
{var statearr_31977_31996 = state_31972__$1;(statearr_31977_31996[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31973 === 5))
{var inst_31957 = cljs.core.async.close_BANG_.call(null,out);var state_31972__$1 = state_31972;var statearr_31978_31997 = state_31972__$1;(statearr_31978_31997[2] = inst_31957);
(statearr_31978_31997[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31973 === 6))
{var inst_31954 = (state_31972[7]);var inst_31959 = p.call(null,inst_31954);var state_31972__$1 = state_31972;if(cljs.core.truth_(inst_31959))
{var statearr_31979_31998 = state_31972__$1;(statearr_31979_31998[1] = 8);
} else
{var statearr_31980_31999 = state_31972__$1;(statearr_31980_31999[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31973 === 7))
{var inst_31968 = (state_31972[2]);var state_31972__$1 = state_31972;var statearr_31981_32000 = state_31972__$1;(statearr_31981_32000[2] = inst_31968);
(statearr_31981_32000[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31973 === 8))
{var inst_31954 = (state_31972[7]);var state_31972__$1 = state_31972;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31972__$1,11,out,inst_31954);
} else
{if((state_val_31973 === 9))
{var state_31972__$1 = state_31972;var statearr_31982_32001 = state_31972__$1;(statearr_31982_32001[2] = null);
(statearr_31982_32001[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31973 === 10))
{var inst_31965 = (state_31972[2]);var state_31972__$1 = (function (){var statearr_31983 = state_31972;(statearr_31983[8] = inst_31965);
return statearr_31983;
})();var statearr_31984_32002 = state_31972__$1;(statearr_31984_32002[2] = null);
(statearr_31984_32002[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31973 === 11))
{var inst_31962 = (state_31972[2]);var state_31972__$1 = state_31972;var statearr_31985_32003 = state_31972__$1;(statearr_31985_32003[2] = inst_31962);
(statearr_31985_32003[1] = 10);
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
var state_machine__17982__auto____0 = (function (){var statearr_31989 = (new Array(9));(statearr_31989[0] = state_machine__17982__auto__);
(statearr_31989[1] = 1);
return statearr_31989;
});
var state_machine__17982__auto____1 = (function (state_31972){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_31972);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e31990){if((e31990 instanceof Object))
{var ex__17985__auto__ = e31990;var statearr_31991_32004 = state_31972;(statearr_31991_32004[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31972);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31990;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32005 = state_31972;
state_31972 = G__32005;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_31972){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_31972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_31992 = f__18052__auto__.call(null);(statearr_31992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___31993);
return statearr_31992;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_32157){var state_val_32158 = (state_32157[1]);if((state_val_32158 === 1))
{var state_32157__$1 = state_32157;var statearr_32159_32196 = state_32157__$1;(statearr_32159_32196[2] = null);
(statearr_32159_32196[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 2))
{var state_32157__$1 = state_32157;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32157__$1,4,in$);
} else
{if((state_val_32158 === 3))
{var inst_32155 = (state_32157[2]);var state_32157__$1 = state_32157;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32157__$1,inst_32155);
} else
{if((state_val_32158 === 4))
{var inst_32103 = (state_32157[7]);var inst_32103__$1 = (state_32157[2]);var inst_32104 = (inst_32103__$1 == null);var state_32157__$1 = (function (){var statearr_32160 = state_32157;(statearr_32160[7] = inst_32103__$1);
return statearr_32160;
})();if(cljs.core.truth_(inst_32104))
{var statearr_32161_32197 = state_32157__$1;(statearr_32161_32197[1] = 5);
} else
{var statearr_32162_32198 = state_32157__$1;(statearr_32162_32198[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 5))
{var inst_32106 = cljs.core.async.close_BANG_.call(null,out);var state_32157__$1 = state_32157;var statearr_32163_32199 = state_32157__$1;(statearr_32163_32199[2] = inst_32106);
(statearr_32163_32199[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 6))
{var inst_32103 = (state_32157[7]);var inst_32108 = f.call(null,inst_32103);var inst_32113 = cljs.core.seq.call(null,inst_32108);var inst_32114 = inst_32113;var inst_32115 = null;var inst_32116 = 0;var inst_32117 = 0;var state_32157__$1 = (function (){var statearr_32164 = state_32157;(statearr_32164[8] = inst_32114);
(statearr_32164[9] = inst_32115);
(statearr_32164[10] = inst_32116);
(statearr_32164[11] = inst_32117);
return statearr_32164;
})();var statearr_32165_32200 = state_32157__$1;(statearr_32165_32200[2] = null);
(statearr_32165_32200[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 7))
{var inst_32153 = (state_32157[2]);var state_32157__$1 = state_32157;var statearr_32166_32201 = state_32157__$1;(statearr_32166_32201[2] = inst_32153);
(statearr_32166_32201[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 8))
{var inst_32116 = (state_32157[10]);var inst_32117 = (state_32157[11]);var inst_32119 = (inst_32117 < inst_32116);var inst_32120 = inst_32119;var state_32157__$1 = state_32157;if(cljs.core.truth_(inst_32120))
{var statearr_32167_32202 = state_32157__$1;(statearr_32167_32202[1] = 10);
} else
{var statearr_32168_32203 = state_32157__$1;(statearr_32168_32203[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 9))
{var inst_32150 = (state_32157[2]);var state_32157__$1 = (function (){var statearr_32169 = state_32157;(statearr_32169[12] = inst_32150);
return statearr_32169;
})();var statearr_32170_32204 = state_32157__$1;(statearr_32170_32204[2] = null);
(statearr_32170_32204[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 10))
{var inst_32115 = (state_32157[9]);var inst_32117 = (state_32157[11]);var inst_32122 = cljs.core._nth.call(null,inst_32115,inst_32117);var state_32157__$1 = state_32157;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32157__$1,13,out,inst_32122);
} else
{if((state_val_32158 === 11))
{var inst_32128 = (state_32157[13]);var inst_32114 = (state_32157[8]);var inst_32128__$1 = cljs.core.seq.call(null,inst_32114);var state_32157__$1 = (function (){var statearr_32174 = state_32157;(statearr_32174[13] = inst_32128__$1);
return statearr_32174;
})();if(inst_32128__$1)
{var statearr_32175_32205 = state_32157__$1;(statearr_32175_32205[1] = 14);
} else
{var statearr_32176_32206 = state_32157__$1;(statearr_32176_32206[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 12))
{var inst_32148 = (state_32157[2]);var state_32157__$1 = state_32157;var statearr_32177_32207 = state_32157__$1;(statearr_32177_32207[2] = inst_32148);
(statearr_32177_32207[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 13))
{var inst_32114 = (state_32157[8]);var inst_32115 = (state_32157[9]);var inst_32116 = (state_32157[10]);var inst_32117 = (state_32157[11]);var inst_32124 = (state_32157[2]);var inst_32125 = (inst_32117 + 1);var tmp32171 = inst_32114;var tmp32172 = inst_32115;var tmp32173 = inst_32116;var inst_32114__$1 = tmp32171;var inst_32115__$1 = tmp32172;var inst_32116__$1 = tmp32173;var inst_32117__$1 = inst_32125;var state_32157__$1 = (function (){var statearr_32178 = state_32157;(statearr_32178[14] = inst_32124);
(statearr_32178[8] = inst_32114__$1);
(statearr_32178[9] = inst_32115__$1);
(statearr_32178[10] = inst_32116__$1);
(statearr_32178[11] = inst_32117__$1);
return statearr_32178;
})();var statearr_32179_32208 = state_32157__$1;(statearr_32179_32208[2] = null);
(statearr_32179_32208[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 14))
{var inst_32128 = (state_32157[13]);var inst_32130 = cljs.core.chunked_seq_QMARK_.call(null,inst_32128);var state_32157__$1 = state_32157;if(inst_32130)
{var statearr_32180_32209 = state_32157__$1;(statearr_32180_32209[1] = 17);
} else
{var statearr_32181_32210 = state_32157__$1;(statearr_32181_32210[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 15))
{var state_32157__$1 = state_32157;var statearr_32182_32211 = state_32157__$1;(statearr_32182_32211[2] = null);
(statearr_32182_32211[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 16))
{var inst_32146 = (state_32157[2]);var state_32157__$1 = state_32157;var statearr_32183_32212 = state_32157__$1;(statearr_32183_32212[2] = inst_32146);
(statearr_32183_32212[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 17))
{var inst_32128 = (state_32157[13]);var inst_32132 = cljs.core.chunk_first.call(null,inst_32128);var inst_32133 = cljs.core.chunk_rest.call(null,inst_32128);var inst_32134 = cljs.core.count.call(null,inst_32132);var inst_32114 = inst_32133;var inst_32115 = inst_32132;var inst_32116 = inst_32134;var inst_32117 = 0;var state_32157__$1 = (function (){var statearr_32184 = state_32157;(statearr_32184[8] = inst_32114);
(statearr_32184[9] = inst_32115);
(statearr_32184[10] = inst_32116);
(statearr_32184[11] = inst_32117);
return statearr_32184;
})();var statearr_32185_32213 = state_32157__$1;(statearr_32185_32213[2] = null);
(statearr_32185_32213[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 18))
{var inst_32128 = (state_32157[13]);var inst_32137 = cljs.core.first.call(null,inst_32128);var state_32157__$1 = state_32157;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32157__$1,20,out,inst_32137);
} else
{if((state_val_32158 === 19))
{var inst_32143 = (state_32157[2]);var state_32157__$1 = state_32157;var statearr_32186_32214 = state_32157__$1;(statearr_32186_32214[2] = inst_32143);
(statearr_32186_32214[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 20))
{var inst_32128 = (state_32157[13]);var inst_32139 = (state_32157[2]);var inst_32140 = cljs.core.next.call(null,inst_32128);var inst_32114 = inst_32140;var inst_32115 = null;var inst_32116 = 0;var inst_32117 = 0;var state_32157__$1 = (function (){var statearr_32187 = state_32157;(statearr_32187[15] = inst_32139);
(statearr_32187[8] = inst_32114);
(statearr_32187[9] = inst_32115);
(statearr_32187[10] = inst_32116);
(statearr_32187[11] = inst_32117);
return statearr_32187;
})();var statearr_32188_32215 = state_32157__$1;(statearr_32188_32215[2] = null);
(statearr_32188_32215[1] = 8);
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
var state_machine__17982__auto____0 = (function (){var statearr_32192 = (new Array(16));(statearr_32192[0] = state_machine__17982__auto__);
(statearr_32192[1] = 1);
return statearr_32192;
});
var state_machine__17982__auto____1 = (function (state_32157){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_32157);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e32193){if((e32193 instanceof Object))
{var ex__17985__auto__ = e32193;var statearr_32194_32216 = state_32157;(statearr_32194_32216[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32157);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32217 = state_32157;
state_32157 = G__32217;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_32157){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_32157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_32195 = f__18052__auto__.call(null);(statearr_32195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_32195;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__18051__auto___32298 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_32277){var state_val_32278 = (state_32277[1]);if((state_val_32278 === 1))
{var state_32277__$1 = state_32277;var statearr_32279_32299 = state_32277__$1;(statearr_32279_32299[2] = null);
(statearr_32279_32299[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32278 === 2))
{var state_32277__$1 = state_32277;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32277__$1,4,from);
} else
{if((state_val_32278 === 3))
{var inst_32275 = (state_32277[2]);var state_32277__$1 = state_32277;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32277__$1,inst_32275);
} else
{if((state_val_32278 === 4))
{var inst_32260 = (state_32277[7]);var inst_32260__$1 = (state_32277[2]);var inst_32261 = (inst_32260__$1 == null);var state_32277__$1 = (function (){var statearr_32280 = state_32277;(statearr_32280[7] = inst_32260__$1);
return statearr_32280;
})();if(cljs.core.truth_(inst_32261))
{var statearr_32281_32300 = state_32277__$1;(statearr_32281_32300[1] = 5);
} else
{var statearr_32282_32301 = state_32277__$1;(statearr_32282_32301[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32278 === 5))
{var state_32277__$1 = state_32277;if(cljs.core.truth_(close_QMARK_))
{var statearr_32283_32302 = state_32277__$1;(statearr_32283_32302[1] = 8);
} else
{var statearr_32284_32303 = state_32277__$1;(statearr_32284_32303[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32278 === 6))
{var inst_32260 = (state_32277[7]);var state_32277__$1 = state_32277;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32277__$1,11,to,inst_32260);
} else
{if((state_val_32278 === 7))
{var inst_32273 = (state_32277[2]);var state_32277__$1 = state_32277;var statearr_32285_32304 = state_32277__$1;(statearr_32285_32304[2] = inst_32273);
(statearr_32285_32304[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32278 === 8))
{var inst_32264 = cljs.core.async.close_BANG_.call(null,to);var state_32277__$1 = state_32277;var statearr_32286_32305 = state_32277__$1;(statearr_32286_32305[2] = inst_32264);
(statearr_32286_32305[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32278 === 9))
{var state_32277__$1 = state_32277;var statearr_32287_32306 = state_32277__$1;(statearr_32287_32306[2] = null);
(statearr_32287_32306[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32278 === 10))
{var inst_32267 = (state_32277[2]);var state_32277__$1 = state_32277;var statearr_32288_32307 = state_32277__$1;(statearr_32288_32307[2] = inst_32267);
(statearr_32288_32307[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32278 === 11))
{var inst_32270 = (state_32277[2]);var state_32277__$1 = (function (){var statearr_32289 = state_32277;(statearr_32289[8] = inst_32270);
return statearr_32289;
})();var statearr_32290_32308 = state_32277__$1;(statearr_32290_32308[2] = null);
(statearr_32290_32308[1] = 2);
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
var state_machine__17982__auto____0 = (function (){var statearr_32294 = (new Array(9));(statearr_32294[0] = state_machine__17982__auto__);
(statearr_32294[1] = 1);
return statearr_32294;
});
var state_machine__17982__auto____1 = (function (state_32277){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_32277);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e32295){if((e32295 instanceof Object))
{var ex__17985__auto__ = e32295;var statearr_32296_32309 = state_32277;(statearr_32296_32309[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32277);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32295;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32310 = state_32277;
state_32277 = G__32310;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_32277){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_32277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_32297 = f__18052__auto__.call(null);(statearr_32297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___32298);
return statearr_32297;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__18051__auto___32397 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_32375){var state_val_32376 = (state_32375[1]);if((state_val_32376 === 1))
{var state_32375__$1 = state_32375;var statearr_32377_32398 = state_32375__$1;(statearr_32377_32398[2] = null);
(statearr_32377_32398[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32376 === 2))
{var state_32375__$1 = state_32375;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32375__$1,4,ch);
} else
{if((state_val_32376 === 3))
{var inst_32373 = (state_32375[2]);var state_32375__$1 = state_32375;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32375__$1,inst_32373);
} else
{if((state_val_32376 === 4))
{var inst_32356 = (state_32375[7]);var inst_32356__$1 = (state_32375[2]);var inst_32357 = (inst_32356__$1 == null);var state_32375__$1 = (function (){var statearr_32378 = state_32375;(statearr_32378[7] = inst_32356__$1);
return statearr_32378;
})();if(cljs.core.truth_(inst_32357))
{var statearr_32379_32399 = state_32375__$1;(statearr_32379_32399[1] = 5);
} else
{var statearr_32380_32400 = state_32375__$1;(statearr_32380_32400[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32376 === 5))
{var inst_32359 = cljs.core.async.close_BANG_.call(null,tc);var inst_32360 = cljs.core.async.close_BANG_.call(null,fc);var state_32375__$1 = (function (){var statearr_32381 = state_32375;(statearr_32381[8] = inst_32359);
return statearr_32381;
})();var statearr_32382_32401 = state_32375__$1;(statearr_32382_32401[2] = inst_32360);
(statearr_32382_32401[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32376 === 6))
{var inst_32356 = (state_32375[7]);var inst_32362 = p.call(null,inst_32356);var state_32375__$1 = state_32375;if(cljs.core.truth_(inst_32362))
{var statearr_32383_32402 = state_32375__$1;(statearr_32383_32402[1] = 9);
} else
{var statearr_32384_32403 = state_32375__$1;(statearr_32384_32403[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32376 === 7))
{var inst_32371 = (state_32375[2]);var state_32375__$1 = state_32375;var statearr_32385_32404 = state_32375__$1;(statearr_32385_32404[2] = inst_32371);
(statearr_32385_32404[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32376 === 8))
{var inst_32368 = (state_32375[2]);var state_32375__$1 = (function (){var statearr_32386 = state_32375;(statearr_32386[9] = inst_32368);
return statearr_32386;
})();var statearr_32387_32405 = state_32375__$1;(statearr_32387_32405[2] = null);
(statearr_32387_32405[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32376 === 9))
{var state_32375__$1 = state_32375;var statearr_32388_32406 = state_32375__$1;(statearr_32388_32406[2] = tc);
(statearr_32388_32406[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32376 === 10))
{var state_32375__$1 = state_32375;var statearr_32389_32407 = state_32375__$1;(statearr_32389_32407[2] = fc);
(statearr_32389_32407[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32376 === 11))
{var inst_32356 = (state_32375[7]);var inst_32366 = (state_32375[2]);var state_32375__$1 = state_32375;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32375__$1,8,inst_32366,inst_32356);
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
var state_machine__17982__auto____0 = (function (){var statearr_32393 = (new Array(10));(statearr_32393[0] = state_machine__17982__auto__);
(statearr_32393[1] = 1);
return statearr_32393;
});
var state_machine__17982__auto____1 = (function (state_32375){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_32375);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e32394){if((e32394 instanceof Object))
{var ex__17985__auto__ = e32394;var statearr_32395_32408 = state_32375;(statearr_32395_32408[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32375);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32394;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32409 = state_32375;
state_32375 = G__32409;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_32375){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_32375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_32396 = f__18052__auto__.call(null);(statearr_32396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___32397);
return statearr_32396;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_32456){var state_val_32457 = (state_32456[1]);if((state_val_32457 === 7))
{var inst_32452 = (state_32456[2]);var state_32456__$1 = state_32456;var statearr_32458_32474 = state_32456__$1;(statearr_32458_32474[2] = inst_32452);
(statearr_32458_32474[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32457 === 6))
{var inst_32445 = (state_32456[7]);var inst_32442 = (state_32456[8]);var inst_32449 = f.call(null,inst_32442,inst_32445);var inst_32442__$1 = inst_32449;var state_32456__$1 = (function (){var statearr_32459 = state_32456;(statearr_32459[8] = inst_32442__$1);
return statearr_32459;
})();var statearr_32460_32475 = state_32456__$1;(statearr_32460_32475[2] = null);
(statearr_32460_32475[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32457 === 5))
{var inst_32442 = (state_32456[8]);var state_32456__$1 = state_32456;var statearr_32461_32476 = state_32456__$1;(statearr_32461_32476[2] = inst_32442);
(statearr_32461_32476[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32457 === 4))
{var inst_32445 = (state_32456[7]);var inst_32445__$1 = (state_32456[2]);var inst_32446 = (inst_32445__$1 == null);var state_32456__$1 = (function (){var statearr_32462 = state_32456;(statearr_32462[7] = inst_32445__$1);
return statearr_32462;
})();if(cljs.core.truth_(inst_32446))
{var statearr_32463_32477 = state_32456__$1;(statearr_32463_32477[1] = 5);
} else
{var statearr_32464_32478 = state_32456__$1;(statearr_32464_32478[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32457 === 3))
{var inst_32454 = (state_32456[2]);var state_32456__$1 = state_32456;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32456__$1,inst_32454);
} else
{if((state_val_32457 === 2))
{var state_32456__$1 = state_32456;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32456__$1,4,ch);
} else
{if((state_val_32457 === 1))
{var inst_32442 = init;var state_32456__$1 = (function (){var statearr_32465 = state_32456;(statearr_32465[8] = inst_32442);
return statearr_32465;
})();var statearr_32466_32479 = state_32456__$1;(statearr_32466_32479[2] = null);
(statearr_32466_32479[1] = 2);
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
var state_machine__17982__auto____0 = (function (){var statearr_32470 = (new Array(9));(statearr_32470[0] = state_machine__17982__auto__);
(statearr_32470[1] = 1);
return statearr_32470;
});
var state_machine__17982__auto____1 = (function (state_32456){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_32456);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e32471){if((e32471 instanceof Object))
{var ex__17985__auto__ = e32471;var statearr_32472_32480 = state_32456;(statearr_32472_32480[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32456);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32471;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32481 = state_32456;
state_32456 = G__32481;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_32456){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_32456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_32473 = f__18052__auto__.call(null);(statearr_32473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_32473;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_32543){var state_val_32544 = (state_32543[1]);if((state_val_32544 === 1))
{var inst_32523 = cljs.core.seq.call(null,coll);var inst_32524 = inst_32523;var state_32543__$1 = (function (){var statearr_32545 = state_32543;(statearr_32545[7] = inst_32524);
return statearr_32545;
})();var statearr_32546_32564 = state_32543__$1;(statearr_32546_32564[2] = null);
(statearr_32546_32564[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32544 === 2))
{var inst_32524 = (state_32543[7]);var state_32543__$1 = state_32543;if(cljs.core.truth_(inst_32524))
{var statearr_32547_32565 = state_32543__$1;(statearr_32547_32565[1] = 4);
} else
{var statearr_32548_32566 = state_32543__$1;(statearr_32548_32566[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32544 === 3))
{var inst_32541 = (state_32543[2]);var state_32543__$1 = state_32543;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32543__$1,inst_32541);
} else
{if((state_val_32544 === 4))
{var inst_32524 = (state_32543[7]);var inst_32527 = cljs.core.first.call(null,inst_32524);var state_32543__$1 = state_32543;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32543__$1,7,ch,inst_32527);
} else
{if((state_val_32544 === 5))
{var state_32543__$1 = state_32543;if(cljs.core.truth_(close_QMARK_))
{var statearr_32549_32567 = state_32543__$1;(statearr_32549_32567[1] = 8);
} else
{var statearr_32550_32568 = state_32543__$1;(statearr_32550_32568[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32544 === 6))
{var inst_32539 = (state_32543[2]);var state_32543__$1 = state_32543;var statearr_32551_32569 = state_32543__$1;(statearr_32551_32569[2] = inst_32539);
(statearr_32551_32569[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32544 === 7))
{var inst_32524 = (state_32543[7]);var inst_32529 = (state_32543[2]);var inst_32530 = cljs.core.next.call(null,inst_32524);var inst_32524__$1 = inst_32530;var state_32543__$1 = (function (){var statearr_32552 = state_32543;(statearr_32552[8] = inst_32529);
(statearr_32552[7] = inst_32524__$1);
return statearr_32552;
})();var statearr_32553_32570 = state_32543__$1;(statearr_32553_32570[2] = null);
(statearr_32553_32570[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32544 === 8))
{var inst_32534 = cljs.core.async.close_BANG_.call(null,ch);var state_32543__$1 = state_32543;var statearr_32554_32571 = state_32543__$1;(statearr_32554_32571[2] = inst_32534);
(statearr_32554_32571[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32544 === 9))
{var state_32543__$1 = state_32543;var statearr_32555_32572 = state_32543__$1;(statearr_32555_32572[2] = null);
(statearr_32555_32572[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32544 === 10))
{var inst_32537 = (state_32543[2]);var state_32543__$1 = state_32543;var statearr_32556_32573 = state_32543__$1;(statearr_32556_32573[2] = inst_32537);
(statearr_32556_32573[1] = 6);
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
var state_machine__17982__auto____0 = (function (){var statearr_32560 = (new Array(9));(statearr_32560[0] = state_machine__17982__auto__);
(statearr_32560[1] = 1);
return statearr_32560;
});
var state_machine__17982__auto____1 = (function (state_32543){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_32543);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e32561){if((e32561 instanceof Object))
{var ex__17985__auto__ = e32561;var statearr_32562_32574 = state_32543;(statearr_32562_32574[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32543);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32561;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32575 = state_32543;
state_32543 = G__32575;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_32543){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_32543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_32563 = f__18052__auto__.call(null);(statearr_32563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_32563;
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
cljs.core.async.Mux = (function (){var obj32577 = {};return obj32577;
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
cljs.core.async.Mult = (function (){var obj32579 = {};return obj32579;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t32803 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32803 = (function (cs,ch,mult,meta32804){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32804 = meta32804;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32803.cljs$lang$type = true;
cljs.core.async.t32803.cljs$lang$ctorStr = "cljs.core.async/t32803";
cljs.core.async.t32803.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t32803");
});})(cs))
;
cljs.core.async.t32803.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t32803.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t32803.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t32803.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t32803.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32803.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t32803.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32805){var self__ = this;
var _32805__$1 = this;return self__.meta32804;
});})(cs))
;
cljs.core.async.t32803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32805,meta32804__$1){var self__ = this;
var _32805__$1 = this;return (new cljs.core.async.t32803(self__.cs,self__.ch,self__.mult,meta32804__$1));
});})(cs))
;
cljs.core.async.__GT_t32803 = ((function (cs){
return (function __GT_t32803(cs__$1,ch__$1,mult__$1,meta32804){return (new cljs.core.async.t32803(cs__$1,ch__$1,mult__$1,meta32804));
});})(cs))
;
}
return (new cljs.core.async.t32803(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__18051__auto___33026 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_32940){var state_val_32941 = (state_32940[1]);if((state_val_32941 === 32))
{var inst_32808 = (state_32940[7]);var inst_32884 = (state_32940[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32940,31,Object,null,30);var inst_32891 = cljs.core.async.put_BANG_.call(null,inst_32884,inst_32808,done);var state_32940__$1 = state_32940;var statearr_32942_33027 = state_32940__$1;(statearr_32942_33027[2] = inst_32891);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32940__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 1))
{var state_32940__$1 = state_32940;var statearr_32943_33028 = state_32940__$1;(statearr_32943_33028[2] = null);
(statearr_32943_33028[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 33))
{var inst_32897 = (state_32940[9]);var inst_32899 = cljs.core.chunked_seq_QMARK_.call(null,inst_32897);var state_32940__$1 = state_32940;if(inst_32899)
{var statearr_32944_33029 = state_32940__$1;(statearr_32944_33029[1] = 36);
} else
{var statearr_32945_33030 = state_32940__$1;(statearr_32945_33030[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 2))
{var state_32940__$1 = state_32940;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32940__$1,4,ch);
} else
{if((state_val_32941 === 34))
{var state_32940__$1 = state_32940;var statearr_32946_33031 = state_32940__$1;(statearr_32946_33031[2] = null);
(statearr_32946_33031[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 3))
{var inst_32938 = (state_32940[2]);var state_32940__$1 = state_32940;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32940__$1,inst_32938);
} else
{if((state_val_32941 === 35))
{var inst_32922 = (state_32940[2]);var state_32940__$1 = state_32940;var statearr_32947_33032 = state_32940__$1;(statearr_32947_33032[2] = inst_32922);
(statearr_32947_33032[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 4))
{var inst_32808 = (state_32940[7]);var inst_32808__$1 = (state_32940[2]);var inst_32809 = (inst_32808__$1 == null);var state_32940__$1 = (function (){var statearr_32948 = state_32940;(statearr_32948[7] = inst_32808__$1);
return statearr_32948;
})();if(cljs.core.truth_(inst_32809))
{var statearr_32949_33033 = state_32940__$1;(statearr_32949_33033[1] = 5);
} else
{var statearr_32950_33034 = state_32940__$1;(statearr_32950_33034[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 36))
{var inst_32897 = (state_32940[9]);var inst_32901 = cljs.core.chunk_first.call(null,inst_32897);var inst_32902 = cljs.core.chunk_rest.call(null,inst_32897);var inst_32903 = cljs.core.count.call(null,inst_32901);var inst_32876 = inst_32902;var inst_32877 = inst_32901;var inst_32878 = inst_32903;var inst_32879 = 0;var state_32940__$1 = (function (){var statearr_32951 = state_32940;(statearr_32951[10] = inst_32878);
(statearr_32951[11] = inst_32877);
(statearr_32951[12] = inst_32879);
(statearr_32951[13] = inst_32876);
return statearr_32951;
})();var statearr_32952_33035 = state_32940__$1;(statearr_32952_33035[2] = null);
(statearr_32952_33035[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 5))
{var inst_32815 = cljs.core.deref.call(null,cs);var inst_32816 = cljs.core.seq.call(null,inst_32815);var inst_32817 = inst_32816;var inst_32818 = null;var inst_32819 = 0;var inst_32820 = 0;var state_32940__$1 = (function (){var statearr_32953 = state_32940;(statearr_32953[14] = inst_32820);
(statearr_32953[15] = inst_32817);
(statearr_32953[16] = inst_32818);
(statearr_32953[17] = inst_32819);
return statearr_32953;
})();var statearr_32954_33036 = state_32940__$1;(statearr_32954_33036[2] = null);
(statearr_32954_33036[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 37))
{var inst_32897 = (state_32940[9]);var inst_32906 = cljs.core.first.call(null,inst_32897);var state_32940__$1 = (function (){var statearr_32955 = state_32940;(statearr_32955[18] = inst_32906);
return statearr_32955;
})();var statearr_32956_33037 = state_32940__$1;(statearr_32956_33037[2] = null);
(statearr_32956_33037[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 6))
{var inst_32868 = (state_32940[19]);var inst_32867 = cljs.core.deref.call(null,cs);var inst_32868__$1 = cljs.core.keys.call(null,inst_32867);var inst_32869 = cljs.core.count.call(null,inst_32868__$1);var inst_32870 = cljs.core.reset_BANG_.call(null,dctr,inst_32869);var inst_32875 = cljs.core.seq.call(null,inst_32868__$1);var inst_32876 = inst_32875;var inst_32877 = null;var inst_32878 = 0;var inst_32879 = 0;var state_32940__$1 = (function (){var statearr_32957 = state_32940;(statearr_32957[10] = inst_32878);
(statearr_32957[11] = inst_32877);
(statearr_32957[12] = inst_32879);
(statearr_32957[20] = inst_32870);
(statearr_32957[19] = inst_32868__$1);
(statearr_32957[13] = inst_32876);
return statearr_32957;
})();var statearr_32958_33038 = state_32940__$1;(statearr_32958_33038[2] = null);
(statearr_32958_33038[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 38))
{var inst_32919 = (state_32940[2]);var state_32940__$1 = state_32940;var statearr_32959_33039 = state_32940__$1;(statearr_32959_33039[2] = inst_32919);
(statearr_32959_33039[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 7))
{var inst_32936 = (state_32940[2]);var state_32940__$1 = state_32940;var statearr_32960_33040 = state_32940__$1;(statearr_32960_33040[2] = inst_32936);
(statearr_32960_33040[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 39))
{var inst_32897 = (state_32940[9]);var inst_32915 = (state_32940[2]);var inst_32916 = cljs.core.next.call(null,inst_32897);var inst_32876 = inst_32916;var inst_32877 = null;var inst_32878 = 0;var inst_32879 = 0;var state_32940__$1 = (function (){var statearr_32961 = state_32940;(statearr_32961[10] = inst_32878);
(statearr_32961[11] = inst_32877);
(statearr_32961[12] = inst_32879);
(statearr_32961[21] = inst_32915);
(statearr_32961[13] = inst_32876);
return statearr_32961;
})();var statearr_32962_33041 = state_32940__$1;(statearr_32962_33041[2] = null);
(statearr_32962_33041[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 8))
{var inst_32820 = (state_32940[14]);var inst_32819 = (state_32940[17]);var inst_32822 = (inst_32820 < inst_32819);var inst_32823 = inst_32822;var state_32940__$1 = state_32940;if(cljs.core.truth_(inst_32823))
{var statearr_32963_33042 = state_32940__$1;(statearr_32963_33042[1] = 10);
} else
{var statearr_32964_33043 = state_32940__$1;(statearr_32964_33043[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 40))
{var inst_32906 = (state_32940[18]);var inst_32907 = (state_32940[2]);var inst_32908 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_32909 = cljs.core.async.untap_STAR_.call(null,m,inst_32906);var state_32940__$1 = (function (){var statearr_32965 = state_32940;(statearr_32965[22] = inst_32908);
(statearr_32965[23] = inst_32907);
return statearr_32965;
})();var statearr_32966_33044 = state_32940__$1;(statearr_32966_33044[2] = inst_32909);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32940__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 9))
{var inst_32865 = (state_32940[2]);var state_32940__$1 = state_32940;var statearr_32967_33045 = state_32940__$1;(statearr_32967_33045[2] = inst_32865);
(statearr_32967_33045[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 41))
{var inst_32808 = (state_32940[7]);var inst_32906 = (state_32940[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32940,40,Object,null,39);var inst_32913 = cljs.core.async.put_BANG_.call(null,inst_32906,inst_32808,done);var state_32940__$1 = state_32940;var statearr_32968_33046 = state_32940__$1;(statearr_32968_33046[2] = inst_32913);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32940__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 10))
{var inst_32820 = (state_32940[14]);var inst_32818 = (state_32940[16]);var inst_32826 = cljs.core._nth.call(null,inst_32818,inst_32820);var inst_32827 = cljs.core.nth.call(null,inst_32826,0,null);var inst_32828 = cljs.core.nth.call(null,inst_32826,1,null);var state_32940__$1 = (function (){var statearr_32969 = state_32940;(statearr_32969[24] = inst_32827);
return statearr_32969;
})();if(cljs.core.truth_(inst_32828))
{var statearr_32970_33047 = state_32940__$1;(statearr_32970_33047[1] = 13);
} else
{var statearr_32971_33048 = state_32940__$1;(statearr_32971_33048[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 42))
{var state_32940__$1 = state_32940;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32940__$1,45,dchan);
} else
{if((state_val_32941 === 11))
{var inst_32837 = (state_32940[25]);var inst_32817 = (state_32940[15]);var inst_32837__$1 = cljs.core.seq.call(null,inst_32817);var state_32940__$1 = (function (){var statearr_32972 = state_32940;(statearr_32972[25] = inst_32837__$1);
return statearr_32972;
})();if(inst_32837__$1)
{var statearr_32973_33049 = state_32940__$1;(statearr_32973_33049[1] = 16);
} else
{var statearr_32974_33050 = state_32940__$1;(statearr_32974_33050[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 43))
{var state_32940__$1 = state_32940;var statearr_32975_33051 = state_32940__$1;(statearr_32975_33051[2] = null);
(statearr_32975_33051[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 12))
{var inst_32863 = (state_32940[2]);var state_32940__$1 = state_32940;var statearr_32976_33052 = state_32940__$1;(statearr_32976_33052[2] = inst_32863);
(statearr_32976_33052[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 44))
{var inst_32933 = (state_32940[2]);var state_32940__$1 = (function (){var statearr_32977 = state_32940;(statearr_32977[26] = inst_32933);
return statearr_32977;
})();var statearr_32978_33053 = state_32940__$1;(statearr_32978_33053[2] = null);
(statearr_32978_33053[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 13))
{var inst_32827 = (state_32940[24]);var inst_32830 = cljs.core.async.close_BANG_.call(null,inst_32827);var state_32940__$1 = state_32940;var statearr_32979_33054 = state_32940__$1;(statearr_32979_33054[2] = inst_32830);
(statearr_32979_33054[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 45))
{var inst_32930 = (state_32940[2]);var state_32940__$1 = state_32940;var statearr_32983_33055 = state_32940__$1;(statearr_32983_33055[2] = inst_32930);
(statearr_32983_33055[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 14))
{var state_32940__$1 = state_32940;var statearr_32984_33056 = state_32940__$1;(statearr_32984_33056[2] = null);
(statearr_32984_33056[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 15))
{var inst_32820 = (state_32940[14]);var inst_32817 = (state_32940[15]);var inst_32818 = (state_32940[16]);var inst_32819 = (state_32940[17]);var inst_32833 = (state_32940[2]);var inst_32834 = (inst_32820 + 1);var tmp32980 = inst_32817;var tmp32981 = inst_32818;var tmp32982 = inst_32819;var inst_32817__$1 = tmp32980;var inst_32818__$1 = tmp32981;var inst_32819__$1 = tmp32982;var inst_32820__$1 = inst_32834;var state_32940__$1 = (function (){var statearr_32985 = state_32940;(statearr_32985[27] = inst_32833);
(statearr_32985[14] = inst_32820__$1);
(statearr_32985[15] = inst_32817__$1);
(statearr_32985[16] = inst_32818__$1);
(statearr_32985[17] = inst_32819__$1);
return statearr_32985;
})();var statearr_32986_33057 = state_32940__$1;(statearr_32986_33057[2] = null);
(statearr_32986_33057[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 16))
{var inst_32837 = (state_32940[25]);var inst_32839 = cljs.core.chunked_seq_QMARK_.call(null,inst_32837);var state_32940__$1 = state_32940;if(inst_32839)
{var statearr_32987_33058 = state_32940__$1;(statearr_32987_33058[1] = 19);
} else
{var statearr_32988_33059 = state_32940__$1;(statearr_32988_33059[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 17))
{var state_32940__$1 = state_32940;var statearr_32989_33060 = state_32940__$1;(statearr_32989_33060[2] = null);
(statearr_32989_33060[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 18))
{var inst_32861 = (state_32940[2]);var state_32940__$1 = state_32940;var statearr_32990_33061 = state_32940__$1;(statearr_32990_33061[2] = inst_32861);
(statearr_32990_33061[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 19))
{var inst_32837 = (state_32940[25]);var inst_32841 = cljs.core.chunk_first.call(null,inst_32837);var inst_32842 = cljs.core.chunk_rest.call(null,inst_32837);var inst_32843 = cljs.core.count.call(null,inst_32841);var inst_32817 = inst_32842;var inst_32818 = inst_32841;var inst_32819 = inst_32843;var inst_32820 = 0;var state_32940__$1 = (function (){var statearr_32991 = state_32940;(statearr_32991[14] = inst_32820);
(statearr_32991[15] = inst_32817);
(statearr_32991[16] = inst_32818);
(statearr_32991[17] = inst_32819);
return statearr_32991;
})();var statearr_32992_33062 = state_32940__$1;(statearr_32992_33062[2] = null);
(statearr_32992_33062[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 20))
{var inst_32837 = (state_32940[25]);var inst_32847 = cljs.core.first.call(null,inst_32837);var inst_32848 = cljs.core.nth.call(null,inst_32847,0,null);var inst_32849 = cljs.core.nth.call(null,inst_32847,1,null);var state_32940__$1 = (function (){var statearr_32993 = state_32940;(statearr_32993[28] = inst_32848);
return statearr_32993;
})();if(cljs.core.truth_(inst_32849))
{var statearr_32994_33063 = state_32940__$1;(statearr_32994_33063[1] = 22);
} else
{var statearr_32995_33064 = state_32940__$1;(statearr_32995_33064[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 21))
{var inst_32858 = (state_32940[2]);var state_32940__$1 = state_32940;var statearr_32996_33065 = state_32940__$1;(statearr_32996_33065[2] = inst_32858);
(statearr_32996_33065[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 22))
{var inst_32848 = (state_32940[28]);var inst_32851 = cljs.core.async.close_BANG_.call(null,inst_32848);var state_32940__$1 = state_32940;var statearr_32997_33066 = state_32940__$1;(statearr_32997_33066[2] = inst_32851);
(statearr_32997_33066[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 23))
{var state_32940__$1 = state_32940;var statearr_32998_33067 = state_32940__$1;(statearr_32998_33067[2] = null);
(statearr_32998_33067[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 24))
{var inst_32837 = (state_32940[25]);var inst_32854 = (state_32940[2]);var inst_32855 = cljs.core.next.call(null,inst_32837);var inst_32817 = inst_32855;var inst_32818 = null;var inst_32819 = 0;var inst_32820 = 0;var state_32940__$1 = (function (){var statearr_32999 = state_32940;(statearr_32999[14] = inst_32820);
(statearr_32999[29] = inst_32854);
(statearr_32999[15] = inst_32817);
(statearr_32999[16] = inst_32818);
(statearr_32999[17] = inst_32819);
return statearr_32999;
})();var statearr_33000_33068 = state_32940__$1;(statearr_33000_33068[2] = null);
(statearr_33000_33068[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 25))
{var inst_32878 = (state_32940[10]);var inst_32879 = (state_32940[12]);var inst_32881 = (inst_32879 < inst_32878);var inst_32882 = inst_32881;var state_32940__$1 = state_32940;if(cljs.core.truth_(inst_32882))
{var statearr_33001_33069 = state_32940__$1;(statearr_33001_33069[1] = 27);
} else
{var statearr_33002_33070 = state_32940__$1;(statearr_33002_33070[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 26))
{var inst_32868 = (state_32940[19]);var inst_32926 = (state_32940[2]);var inst_32927 = cljs.core.seq.call(null,inst_32868);var state_32940__$1 = (function (){var statearr_33003 = state_32940;(statearr_33003[30] = inst_32926);
return statearr_33003;
})();if(inst_32927)
{var statearr_33004_33071 = state_32940__$1;(statearr_33004_33071[1] = 42);
} else
{var statearr_33005_33072 = state_32940__$1;(statearr_33005_33072[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 27))
{var inst_32877 = (state_32940[11]);var inst_32879 = (state_32940[12]);var inst_32884 = cljs.core._nth.call(null,inst_32877,inst_32879);var state_32940__$1 = (function (){var statearr_33006 = state_32940;(statearr_33006[8] = inst_32884);
return statearr_33006;
})();var statearr_33007_33073 = state_32940__$1;(statearr_33007_33073[2] = null);
(statearr_33007_33073[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 28))
{var inst_32897 = (state_32940[9]);var inst_32876 = (state_32940[13]);var inst_32897__$1 = cljs.core.seq.call(null,inst_32876);var state_32940__$1 = (function (){var statearr_33011 = state_32940;(statearr_33011[9] = inst_32897__$1);
return statearr_33011;
})();if(inst_32897__$1)
{var statearr_33012_33074 = state_32940__$1;(statearr_33012_33074[1] = 33);
} else
{var statearr_33013_33075 = state_32940__$1;(statearr_33013_33075[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 29))
{var inst_32924 = (state_32940[2]);var state_32940__$1 = state_32940;var statearr_33014_33076 = state_32940__$1;(statearr_33014_33076[2] = inst_32924);
(statearr_33014_33076[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 30))
{var inst_32878 = (state_32940[10]);var inst_32877 = (state_32940[11]);var inst_32879 = (state_32940[12]);var inst_32876 = (state_32940[13]);var inst_32893 = (state_32940[2]);var inst_32894 = (inst_32879 + 1);var tmp33008 = inst_32878;var tmp33009 = inst_32877;var tmp33010 = inst_32876;var inst_32876__$1 = tmp33010;var inst_32877__$1 = tmp33009;var inst_32878__$1 = tmp33008;var inst_32879__$1 = inst_32894;var state_32940__$1 = (function (){var statearr_33015 = state_32940;(statearr_33015[10] = inst_32878__$1);
(statearr_33015[11] = inst_32877__$1);
(statearr_33015[12] = inst_32879__$1);
(statearr_33015[31] = inst_32893);
(statearr_33015[13] = inst_32876__$1);
return statearr_33015;
})();var statearr_33016_33077 = state_32940__$1;(statearr_33016_33077[2] = null);
(statearr_33016_33077[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32941 === 31))
{var inst_32884 = (state_32940[8]);var inst_32885 = (state_32940[2]);var inst_32886 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_32887 = cljs.core.async.untap_STAR_.call(null,m,inst_32884);var state_32940__$1 = (function (){var statearr_33017 = state_32940;(statearr_33017[32] = inst_32885);
(statearr_33017[33] = inst_32886);
return statearr_33017;
})();var statearr_33018_33078 = state_32940__$1;(statearr_33018_33078[2] = inst_32887);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32940__$1);
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
var state_machine__17982__auto____0 = (function (){var statearr_33022 = (new Array(34));(statearr_33022[0] = state_machine__17982__auto__);
(statearr_33022[1] = 1);
return statearr_33022;
});
var state_machine__17982__auto____1 = (function (state_32940){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_32940);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e33023){if((e33023 instanceof Object))
{var ex__17985__auto__ = e33023;var statearr_33024_33079 = state_32940;(statearr_33024_33079[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32940);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33023;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33080 = state_32940;
state_32940 = G__33080;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_32940){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_32940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_33025 = f__18052__auto__.call(null);(statearr_33025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___33026);
return statearr_33025;
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
cljs.core.async.Mix = (function (){var obj33082 = {};return obj33082;
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
;var m = (function (){if(typeof cljs.core.async.t33192 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33192 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta33193){
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
this.meta33193 = meta33193;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33192.cljs$lang$type = true;
cljs.core.async.t33192.cljs$lang$ctorStr = "cljs.core.async/t33192";
cljs.core.async.t33192.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t33192");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33192.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t33192.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33192.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33192.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33192.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33192.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33192.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33192.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33192.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33194){var self__ = this;
var _33194__$1 = this;return self__.meta33193;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33194,meta33193__$1){var self__ = this;
var _33194__$1 = this;return (new cljs.core.async.t33192(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta33193__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t33192 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t33192(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta33193){return (new cljs.core.async.t33192(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta33193));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t33192(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__18051__auto___33301 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_33259){var state_val_33260 = (state_33259[1]);if((state_val_33260 === 1))
{var inst_33198 = (state_33259[7]);var inst_33198__$1 = calc_state.call(null);var inst_33199 = cljs.core.seq_QMARK_.call(null,inst_33198__$1);var state_33259__$1 = (function (){var statearr_33261 = state_33259;(statearr_33261[7] = inst_33198__$1);
return statearr_33261;
})();if(inst_33199)
{var statearr_33262_33302 = state_33259__$1;(statearr_33262_33302[1] = 2);
} else
{var statearr_33263_33303 = state_33259__$1;(statearr_33263_33303[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33260 === 2))
{var inst_33198 = (state_33259[7]);var inst_33201 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33198);var state_33259__$1 = state_33259;var statearr_33264_33304 = state_33259__$1;(statearr_33264_33304[2] = inst_33201);
(statearr_33264_33304[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33260 === 3))
{var inst_33198 = (state_33259[7]);var state_33259__$1 = state_33259;var statearr_33265_33305 = state_33259__$1;(statearr_33265_33305[2] = inst_33198);
(statearr_33265_33305[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33260 === 4))
{var inst_33198 = (state_33259[7]);var inst_33204 = (state_33259[2]);var inst_33205 = cljs.core.get.call(null,inst_33204,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_33206 = cljs.core.get.call(null,inst_33204,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_33207 = cljs.core.get.call(null,inst_33204,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_33208 = inst_33198;var state_33259__$1 = (function (){var statearr_33266 = state_33259;(statearr_33266[8] = inst_33208);
(statearr_33266[9] = inst_33207);
(statearr_33266[10] = inst_33205);
(statearr_33266[11] = inst_33206);
return statearr_33266;
})();var statearr_33267_33306 = state_33259__$1;(statearr_33267_33306[2] = null);
(statearr_33267_33306[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33260 === 5))
{var inst_33208 = (state_33259[8]);var inst_33211 = cljs.core.seq_QMARK_.call(null,inst_33208);var state_33259__$1 = state_33259;if(inst_33211)
{var statearr_33268_33307 = state_33259__$1;(statearr_33268_33307[1] = 7);
} else
{var statearr_33269_33308 = state_33259__$1;(statearr_33269_33308[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33260 === 6))
{var inst_33257 = (state_33259[2]);var state_33259__$1 = state_33259;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33259__$1,inst_33257);
} else
{if((state_val_33260 === 7))
{var inst_33208 = (state_33259[8]);var inst_33213 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33208);var state_33259__$1 = state_33259;var statearr_33270_33309 = state_33259__$1;(statearr_33270_33309[2] = inst_33213);
(statearr_33270_33309[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33260 === 8))
{var inst_33208 = (state_33259[8]);var state_33259__$1 = state_33259;var statearr_33271_33310 = state_33259__$1;(statearr_33271_33310[2] = inst_33208);
(statearr_33271_33310[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33260 === 9))
{var inst_33216 = (state_33259[12]);var inst_33216__$1 = (state_33259[2]);var inst_33217 = cljs.core.get.call(null,inst_33216__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_33218 = cljs.core.get.call(null,inst_33216__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_33219 = cljs.core.get.call(null,inst_33216__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_33259__$1 = (function (){var statearr_33272 = state_33259;(statearr_33272[13] = inst_33219);
(statearr_33272[14] = inst_33218);
(statearr_33272[12] = inst_33216__$1);
return statearr_33272;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33259__$1,10,inst_33217);
} else
{if((state_val_33260 === 10))
{var inst_33224 = (state_33259[15]);var inst_33223 = (state_33259[16]);var inst_33222 = (state_33259[2]);var inst_33223__$1 = cljs.core.nth.call(null,inst_33222,0,null);var inst_33224__$1 = cljs.core.nth.call(null,inst_33222,1,null);var inst_33225 = (inst_33223__$1 == null);var inst_33226 = cljs.core._EQ_.call(null,inst_33224__$1,change);var inst_33227 = (inst_33225) || (inst_33226);var state_33259__$1 = (function (){var statearr_33273 = state_33259;(statearr_33273[15] = inst_33224__$1);
(statearr_33273[16] = inst_33223__$1);
return statearr_33273;
})();if(cljs.core.truth_(inst_33227))
{var statearr_33274_33311 = state_33259__$1;(statearr_33274_33311[1] = 11);
} else
{var statearr_33275_33312 = state_33259__$1;(statearr_33275_33312[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33260 === 11))
{var inst_33223 = (state_33259[16]);var inst_33229 = (inst_33223 == null);var state_33259__$1 = state_33259;if(cljs.core.truth_(inst_33229))
{var statearr_33276_33313 = state_33259__$1;(statearr_33276_33313[1] = 14);
} else
{var statearr_33277_33314 = state_33259__$1;(statearr_33277_33314[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33260 === 12))
{var inst_33238 = (state_33259[17]);var inst_33219 = (state_33259[13]);var inst_33224 = (state_33259[15]);var inst_33238__$1 = inst_33219.call(null,inst_33224);var state_33259__$1 = (function (){var statearr_33278 = state_33259;(statearr_33278[17] = inst_33238__$1);
return statearr_33278;
})();if(cljs.core.truth_(inst_33238__$1))
{var statearr_33279_33315 = state_33259__$1;(statearr_33279_33315[1] = 17);
} else
{var statearr_33280_33316 = state_33259__$1;(statearr_33280_33316[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33260 === 13))
{var inst_33255 = (state_33259[2]);var state_33259__$1 = state_33259;var statearr_33281_33317 = state_33259__$1;(statearr_33281_33317[2] = inst_33255);
(statearr_33281_33317[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33260 === 14))
{var inst_33224 = (state_33259[15]);var inst_33231 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33224);var state_33259__$1 = state_33259;var statearr_33282_33318 = state_33259__$1;(statearr_33282_33318[2] = inst_33231);
(statearr_33282_33318[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33260 === 15))
{var state_33259__$1 = state_33259;var statearr_33283_33319 = state_33259__$1;(statearr_33283_33319[2] = null);
(statearr_33283_33319[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33260 === 16))
{var inst_33234 = (state_33259[2]);var inst_33235 = calc_state.call(null);var inst_33208 = inst_33235;var state_33259__$1 = (function (){var statearr_33284 = state_33259;(statearr_33284[8] = inst_33208);
(statearr_33284[18] = inst_33234);
return statearr_33284;
})();var statearr_33285_33320 = state_33259__$1;(statearr_33285_33320[2] = null);
(statearr_33285_33320[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33260 === 17))
{var inst_33238 = (state_33259[17]);var state_33259__$1 = state_33259;var statearr_33286_33321 = state_33259__$1;(statearr_33286_33321[2] = inst_33238);
(statearr_33286_33321[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33260 === 18))
{var inst_33219 = (state_33259[13]);var inst_33218 = (state_33259[14]);var inst_33224 = (state_33259[15]);var inst_33241 = cljs.core.empty_QMARK_.call(null,inst_33219);var inst_33242 = inst_33218.call(null,inst_33224);var inst_33243 = cljs.core.not.call(null,inst_33242);var inst_33244 = (inst_33241) && (inst_33243);var state_33259__$1 = state_33259;var statearr_33287_33322 = state_33259__$1;(statearr_33287_33322[2] = inst_33244);
(statearr_33287_33322[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33260 === 19))
{var inst_33246 = (state_33259[2]);var state_33259__$1 = state_33259;if(cljs.core.truth_(inst_33246))
{var statearr_33288_33323 = state_33259__$1;(statearr_33288_33323[1] = 20);
} else
{var statearr_33289_33324 = state_33259__$1;(statearr_33289_33324[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33260 === 20))
{var inst_33223 = (state_33259[16]);var state_33259__$1 = state_33259;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33259__$1,23,out,inst_33223);
} else
{if((state_val_33260 === 21))
{var state_33259__$1 = state_33259;var statearr_33290_33325 = state_33259__$1;(statearr_33290_33325[2] = null);
(statearr_33290_33325[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33260 === 22))
{var inst_33216 = (state_33259[12]);var inst_33252 = (state_33259[2]);var inst_33208 = inst_33216;var state_33259__$1 = (function (){var statearr_33291 = state_33259;(statearr_33291[8] = inst_33208);
(statearr_33291[19] = inst_33252);
return statearr_33291;
})();var statearr_33292_33326 = state_33259__$1;(statearr_33292_33326[2] = null);
(statearr_33292_33326[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33260 === 23))
{var inst_33249 = (state_33259[2]);var state_33259__$1 = state_33259;var statearr_33293_33327 = state_33259__$1;(statearr_33293_33327[2] = inst_33249);
(statearr_33293_33327[1] = 22);
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
var state_machine__17982__auto____0 = (function (){var statearr_33297 = (new Array(20));(statearr_33297[0] = state_machine__17982__auto__);
(statearr_33297[1] = 1);
return statearr_33297;
});
var state_machine__17982__auto____1 = (function (state_33259){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_33259);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e33298){if((e33298 instanceof Object))
{var ex__17985__auto__ = e33298;var statearr_33299_33328 = state_33259;(statearr_33299_33328[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33259);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33298;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33329 = state_33259;
state_33259 = G__33329;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_33259){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_33259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_33300 = f__18052__auto__.call(null);(statearr_33300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___33301);
return statearr_33300;
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
cljs.core.async.Pub = (function (){var obj33331 = {};return obj33331;
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
return (function (p1__33332_SHARP_){if(cljs.core.truth_(p1__33332_SHARP_.call(null,topic)))
{return p1__33332_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__33332_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13823__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t33457 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33457 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33458){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33458 = meta33458;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33457.cljs$lang$type = true;
cljs.core.async.t33457.cljs$lang$ctorStr = "cljs.core.async/t33457";
cljs.core.async.t33457.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t33457");
});})(mults,ensure_mult))
;
cljs.core.async.t33457.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t33457.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t33457.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t33457.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t33457.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t33457.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33457.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t33457.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33459){var self__ = this;
var _33459__$1 = this;return self__.meta33458;
});})(mults,ensure_mult))
;
cljs.core.async.t33457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33459,meta33458__$1){var self__ = this;
var _33459__$1 = this;return (new cljs.core.async.t33457(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33458__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t33457 = ((function (mults,ensure_mult){
return (function __GT_t33457(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33458){return (new cljs.core.async.t33457(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33458));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t33457(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__18051__auto___33581 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_33533){var state_val_33534 = (state_33533[1]);if((state_val_33534 === 1))
{var state_33533__$1 = state_33533;var statearr_33535_33582 = state_33533__$1;(statearr_33535_33582[2] = null);
(statearr_33535_33582[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33534 === 2))
{var state_33533__$1 = state_33533;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33533__$1,4,ch);
} else
{if((state_val_33534 === 3))
{var inst_33531 = (state_33533[2]);var state_33533__$1 = state_33533;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33533__$1,inst_33531);
} else
{if((state_val_33534 === 4))
{var inst_33462 = (state_33533[7]);var inst_33462__$1 = (state_33533[2]);var inst_33463 = (inst_33462__$1 == null);var state_33533__$1 = (function (){var statearr_33536 = state_33533;(statearr_33536[7] = inst_33462__$1);
return statearr_33536;
})();if(cljs.core.truth_(inst_33463))
{var statearr_33537_33583 = state_33533__$1;(statearr_33537_33583[1] = 5);
} else
{var statearr_33538_33584 = state_33533__$1;(statearr_33538_33584[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33534 === 5))
{var inst_33469 = cljs.core.deref.call(null,mults);var inst_33470 = cljs.core.vals.call(null,inst_33469);var inst_33471 = cljs.core.seq.call(null,inst_33470);var inst_33472 = inst_33471;var inst_33473 = null;var inst_33474 = 0;var inst_33475 = 0;var state_33533__$1 = (function (){var statearr_33539 = state_33533;(statearr_33539[8] = inst_33472);
(statearr_33539[9] = inst_33473);
(statearr_33539[10] = inst_33475);
(statearr_33539[11] = inst_33474);
return statearr_33539;
})();var statearr_33540_33585 = state_33533__$1;(statearr_33540_33585[2] = null);
(statearr_33540_33585[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33534 === 6))
{var inst_33512 = (state_33533[12]);var inst_33510 = (state_33533[13]);var inst_33462 = (state_33533[7]);var inst_33510__$1 = topic_fn.call(null,inst_33462);var inst_33511 = cljs.core.deref.call(null,mults);var inst_33512__$1 = cljs.core.get.call(null,inst_33511,inst_33510__$1);var state_33533__$1 = (function (){var statearr_33541 = state_33533;(statearr_33541[12] = inst_33512__$1);
(statearr_33541[13] = inst_33510__$1);
return statearr_33541;
})();if(cljs.core.truth_(inst_33512__$1))
{var statearr_33542_33586 = state_33533__$1;(statearr_33542_33586[1] = 19);
} else
{var statearr_33543_33587 = state_33533__$1;(statearr_33543_33587[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33534 === 7))
{var inst_33529 = (state_33533[2]);var state_33533__$1 = state_33533;var statearr_33544_33588 = state_33533__$1;(statearr_33544_33588[2] = inst_33529);
(statearr_33544_33588[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33534 === 8))
{var inst_33475 = (state_33533[10]);var inst_33474 = (state_33533[11]);var inst_33477 = (inst_33475 < inst_33474);var inst_33478 = inst_33477;var state_33533__$1 = state_33533;if(cljs.core.truth_(inst_33478))
{var statearr_33548_33589 = state_33533__$1;(statearr_33548_33589[1] = 10);
} else
{var statearr_33549_33590 = state_33533__$1;(statearr_33549_33590[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33534 === 9))
{var inst_33508 = (state_33533[2]);var state_33533__$1 = state_33533;var statearr_33550_33591 = state_33533__$1;(statearr_33550_33591[2] = inst_33508);
(statearr_33550_33591[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33534 === 10))
{var inst_33472 = (state_33533[8]);var inst_33473 = (state_33533[9]);var inst_33475 = (state_33533[10]);var inst_33474 = (state_33533[11]);var inst_33480 = cljs.core._nth.call(null,inst_33473,inst_33475);var inst_33481 = cljs.core.async.muxch_STAR_.call(null,inst_33480);var inst_33482 = cljs.core.async.close_BANG_.call(null,inst_33481);var inst_33483 = (inst_33475 + 1);var tmp33545 = inst_33472;var tmp33546 = inst_33473;var tmp33547 = inst_33474;var inst_33472__$1 = tmp33545;var inst_33473__$1 = tmp33546;var inst_33474__$1 = tmp33547;var inst_33475__$1 = inst_33483;var state_33533__$1 = (function (){var statearr_33551 = state_33533;(statearr_33551[8] = inst_33472__$1);
(statearr_33551[9] = inst_33473__$1);
(statearr_33551[14] = inst_33482);
(statearr_33551[10] = inst_33475__$1);
(statearr_33551[11] = inst_33474__$1);
return statearr_33551;
})();var statearr_33552_33592 = state_33533__$1;(statearr_33552_33592[2] = null);
(statearr_33552_33592[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33534 === 11))
{var inst_33472 = (state_33533[8]);var inst_33486 = (state_33533[15]);var inst_33486__$1 = cljs.core.seq.call(null,inst_33472);var state_33533__$1 = (function (){var statearr_33553 = state_33533;(statearr_33553[15] = inst_33486__$1);
return statearr_33553;
})();if(inst_33486__$1)
{var statearr_33554_33593 = state_33533__$1;(statearr_33554_33593[1] = 13);
} else
{var statearr_33555_33594 = state_33533__$1;(statearr_33555_33594[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33534 === 12))
{var inst_33506 = (state_33533[2]);var state_33533__$1 = state_33533;var statearr_33556_33595 = state_33533__$1;(statearr_33556_33595[2] = inst_33506);
(statearr_33556_33595[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33534 === 13))
{var inst_33486 = (state_33533[15]);var inst_33488 = cljs.core.chunked_seq_QMARK_.call(null,inst_33486);var state_33533__$1 = state_33533;if(inst_33488)
{var statearr_33557_33596 = state_33533__$1;(statearr_33557_33596[1] = 16);
} else
{var statearr_33558_33597 = state_33533__$1;(statearr_33558_33597[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33534 === 14))
{var state_33533__$1 = state_33533;var statearr_33559_33598 = state_33533__$1;(statearr_33559_33598[2] = null);
(statearr_33559_33598[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33534 === 15))
{var inst_33504 = (state_33533[2]);var state_33533__$1 = state_33533;var statearr_33560_33599 = state_33533__$1;(statearr_33560_33599[2] = inst_33504);
(statearr_33560_33599[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33534 === 16))
{var inst_33486 = (state_33533[15]);var inst_33490 = cljs.core.chunk_first.call(null,inst_33486);var inst_33491 = cljs.core.chunk_rest.call(null,inst_33486);var inst_33492 = cljs.core.count.call(null,inst_33490);var inst_33472 = inst_33491;var inst_33473 = inst_33490;var inst_33474 = inst_33492;var inst_33475 = 0;var state_33533__$1 = (function (){var statearr_33561 = state_33533;(statearr_33561[8] = inst_33472);
(statearr_33561[9] = inst_33473);
(statearr_33561[10] = inst_33475);
(statearr_33561[11] = inst_33474);
return statearr_33561;
})();var statearr_33562_33600 = state_33533__$1;(statearr_33562_33600[2] = null);
(statearr_33562_33600[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33534 === 17))
{var inst_33486 = (state_33533[15]);var inst_33495 = cljs.core.first.call(null,inst_33486);var inst_33496 = cljs.core.async.muxch_STAR_.call(null,inst_33495);var inst_33497 = cljs.core.async.close_BANG_.call(null,inst_33496);var inst_33498 = cljs.core.next.call(null,inst_33486);var inst_33472 = inst_33498;var inst_33473 = null;var inst_33474 = 0;var inst_33475 = 0;var state_33533__$1 = (function (){var statearr_33563 = state_33533;(statearr_33563[8] = inst_33472);
(statearr_33563[9] = inst_33473);
(statearr_33563[10] = inst_33475);
(statearr_33563[11] = inst_33474);
(statearr_33563[16] = inst_33497);
return statearr_33563;
})();var statearr_33564_33601 = state_33533__$1;(statearr_33564_33601[2] = null);
(statearr_33564_33601[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33534 === 18))
{var inst_33501 = (state_33533[2]);var state_33533__$1 = state_33533;var statearr_33565_33602 = state_33533__$1;(statearr_33565_33602[2] = inst_33501);
(statearr_33565_33602[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33534 === 19))
{var state_33533__$1 = state_33533;var statearr_33566_33603 = state_33533__$1;(statearr_33566_33603[2] = null);
(statearr_33566_33603[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33534 === 20))
{var state_33533__$1 = state_33533;var statearr_33567_33604 = state_33533__$1;(statearr_33567_33604[2] = null);
(statearr_33567_33604[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33534 === 21))
{var inst_33526 = (state_33533[2]);var state_33533__$1 = (function (){var statearr_33568 = state_33533;(statearr_33568[17] = inst_33526);
return statearr_33568;
})();var statearr_33569_33605 = state_33533__$1;(statearr_33569_33605[2] = null);
(statearr_33569_33605[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33534 === 22))
{var inst_33523 = (state_33533[2]);var state_33533__$1 = state_33533;var statearr_33570_33606 = state_33533__$1;(statearr_33570_33606[2] = inst_33523);
(statearr_33570_33606[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33534 === 23))
{var inst_33510 = (state_33533[13]);var inst_33514 = (state_33533[2]);var inst_33515 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33510);var state_33533__$1 = (function (){var statearr_33571 = state_33533;(statearr_33571[18] = inst_33514);
return statearr_33571;
})();var statearr_33572_33607 = state_33533__$1;(statearr_33572_33607[2] = inst_33515);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33533__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33534 === 24))
{var inst_33512 = (state_33533[12]);var inst_33462 = (state_33533[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33533,23,Object,null,22);var inst_33519 = cljs.core.async.muxch_STAR_.call(null,inst_33512);var state_33533__$1 = state_33533;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33533__$1,25,inst_33519,inst_33462);
} else
{if((state_val_33534 === 25))
{var inst_33521 = (state_33533[2]);var state_33533__$1 = state_33533;var statearr_33573_33608 = state_33533__$1;(statearr_33573_33608[2] = inst_33521);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33533__$1);
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
var state_machine__17982__auto____0 = (function (){var statearr_33577 = (new Array(19));(statearr_33577[0] = state_machine__17982__auto__);
(statearr_33577[1] = 1);
return statearr_33577;
});
var state_machine__17982__auto____1 = (function (state_33533){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_33533);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e33578){if((e33578 instanceof Object))
{var ex__17985__auto__ = e33578;var statearr_33579_33609 = state_33533;(statearr_33579_33609[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33533);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33578;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33610 = state_33533;
state_33533 = G__33610;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_33533){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_33533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_33580 = f__18052__auto__.call(null);(statearr_33580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___33581);
return statearr_33580;
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
,cljs.core.range.call(null,cnt));var c__18051__auto___33747 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_33717){var state_val_33718 = (state_33717[1]);if((state_val_33718 === 1))
{var state_33717__$1 = state_33717;var statearr_33719_33748 = state_33717__$1;(statearr_33719_33748[2] = null);
(statearr_33719_33748[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33718 === 2))
{var inst_33680 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_33681 = 0;var state_33717__$1 = (function (){var statearr_33720 = state_33717;(statearr_33720[7] = inst_33681);
(statearr_33720[8] = inst_33680);
return statearr_33720;
})();var statearr_33721_33749 = state_33717__$1;(statearr_33721_33749[2] = null);
(statearr_33721_33749[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33718 === 3))
{var inst_33715 = (state_33717[2]);var state_33717__$1 = state_33717;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33717__$1,inst_33715);
} else
{if((state_val_33718 === 4))
{var inst_33681 = (state_33717[7]);var inst_33683 = (inst_33681 < cnt);var state_33717__$1 = state_33717;if(cljs.core.truth_(inst_33683))
{var statearr_33722_33750 = state_33717__$1;(statearr_33722_33750[1] = 6);
} else
{var statearr_33723_33751 = state_33717__$1;(statearr_33723_33751[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33718 === 5))
{var inst_33701 = (state_33717[2]);var state_33717__$1 = (function (){var statearr_33724 = state_33717;(statearr_33724[9] = inst_33701);
return statearr_33724;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33717__$1,12,dchan);
} else
{if((state_val_33718 === 6))
{var state_33717__$1 = state_33717;var statearr_33725_33752 = state_33717__$1;(statearr_33725_33752[2] = null);
(statearr_33725_33752[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33718 === 7))
{var state_33717__$1 = state_33717;var statearr_33726_33753 = state_33717__$1;(statearr_33726_33753[2] = null);
(statearr_33726_33753[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33718 === 8))
{var inst_33699 = (state_33717[2]);var state_33717__$1 = state_33717;var statearr_33727_33754 = state_33717__$1;(statearr_33727_33754[2] = inst_33699);
(statearr_33727_33754[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33718 === 9))
{var inst_33681 = (state_33717[7]);var inst_33694 = (state_33717[2]);var inst_33695 = (inst_33681 + 1);var inst_33681__$1 = inst_33695;var state_33717__$1 = (function (){var statearr_33728 = state_33717;(statearr_33728[7] = inst_33681__$1);
(statearr_33728[10] = inst_33694);
return statearr_33728;
})();var statearr_33729_33755 = state_33717__$1;(statearr_33729_33755[2] = null);
(statearr_33729_33755[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33718 === 10))
{var inst_33685 = (state_33717[2]);var inst_33686 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_33717__$1 = (function (){var statearr_33730 = state_33717;(statearr_33730[11] = inst_33685);
return statearr_33730;
})();var statearr_33731_33756 = state_33717__$1;(statearr_33731_33756[2] = inst_33686);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33717__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33718 === 11))
{var inst_33681 = (state_33717[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33717,10,Object,null,9);var inst_33690 = chs__$1.call(null,inst_33681);var inst_33691 = done.call(null,inst_33681);var inst_33692 = cljs.core.async.take_BANG_.call(null,inst_33690,inst_33691);var state_33717__$1 = state_33717;var statearr_33732_33757 = state_33717__$1;(statearr_33732_33757[2] = inst_33692);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33717__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33718 === 12))
{var inst_33703 = (state_33717[12]);var inst_33703__$1 = (state_33717[2]);var inst_33704 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33703__$1);var state_33717__$1 = (function (){var statearr_33733 = state_33717;(statearr_33733[12] = inst_33703__$1);
return statearr_33733;
})();if(cljs.core.truth_(inst_33704))
{var statearr_33734_33758 = state_33717__$1;(statearr_33734_33758[1] = 13);
} else
{var statearr_33735_33759 = state_33717__$1;(statearr_33735_33759[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33718 === 13))
{var inst_33706 = cljs.core.async.close_BANG_.call(null,out);var state_33717__$1 = state_33717;var statearr_33736_33760 = state_33717__$1;(statearr_33736_33760[2] = inst_33706);
(statearr_33736_33760[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33718 === 14))
{var inst_33703 = (state_33717[12]);var inst_33708 = cljs.core.apply.call(null,f,inst_33703);var state_33717__$1 = state_33717;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33717__$1,16,out,inst_33708);
} else
{if((state_val_33718 === 15))
{var inst_33713 = (state_33717[2]);var state_33717__$1 = state_33717;var statearr_33737_33761 = state_33717__$1;(statearr_33737_33761[2] = inst_33713);
(statearr_33737_33761[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33718 === 16))
{var inst_33710 = (state_33717[2]);var state_33717__$1 = (function (){var statearr_33738 = state_33717;(statearr_33738[13] = inst_33710);
return statearr_33738;
})();var statearr_33739_33762 = state_33717__$1;(statearr_33739_33762[2] = null);
(statearr_33739_33762[1] = 2);
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
var state_machine__17982__auto____0 = (function (){var statearr_33743 = (new Array(14));(statearr_33743[0] = state_machine__17982__auto__);
(statearr_33743[1] = 1);
return statearr_33743;
});
var state_machine__17982__auto____1 = (function (state_33717){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_33717);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e33744){if((e33744 instanceof Object))
{var ex__17985__auto__ = e33744;var statearr_33745_33763 = state_33717;(statearr_33745_33763[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33717);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33744;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33764 = state_33717;
state_33717 = G__33764;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_33717){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_33717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_33746 = f__18052__auto__.call(null);(statearr_33746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___33747);
return statearr_33746;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___33872 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_33848){var state_val_33849 = (state_33848[1]);if((state_val_33849 === 1))
{var inst_33819 = cljs.core.vec.call(null,chs);var inst_33820 = inst_33819;var state_33848__$1 = (function (){var statearr_33850 = state_33848;(statearr_33850[7] = inst_33820);
return statearr_33850;
})();var statearr_33851_33873 = state_33848__$1;(statearr_33851_33873[2] = null);
(statearr_33851_33873[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33849 === 2))
{var inst_33820 = (state_33848[7]);var inst_33822 = cljs.core.count.call(null,inst_33820);var inst_33823 = (inst_33822 > 0);var state_33848__$1 = state_33848;if(cljs.core.truth_(inst_33823))
{var statearr_33852_33874 = state_33848__$1;(statearr_33852_33874[1] = 4);
} else
{var statearr_33853_33875 = state_33848__$1;(statearr_33853_33875[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33849 === 3))
{var inst_33846 = (state_33848[2]);var state_33848__$1 = state_33848;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33848__$1,inst_33846);
} else
{if((state_val_33849 === 4))
{var inst_33820 = (state_33848[7]);var state_33848__$1 = state_33848;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33848__$1,7,inst_33820);
} else
{if((state_val_33849 === 5))
{var inst_33842 = cljs.core.async.close_BANG_.call(null,out);var state_33848__$1 = state_33848;var statearr_33854_33876 = state_33848__$1;(statearr_33854_33876[2] = inst_33842);
(statearr_33854_33876[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33849 === 6))
{var inst_33844 = (state_33848[2]);var state_33848__$1 = state_33848;var statearr_33855_33877 = state_33848__$1;(statearr_33855_33877[2] = inst_33844);
(statearr_33855_33877[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33849 === 7))
{var inst_33827 = (state_33848[8]);var inst_33828 = (state_33848[9]);var inst_33827__$1 = (state_33848[2]);var inst_33828__$1 = cljs.core.nth.call(null,inst_33827__$1,0,null);var inst_33829 = cljs.core.nth.call(null,inst_33827__$1,1,null);var inst_33830 = (inst_33828__$1 == null);var state_33848__$1 = (function (){var statearr_33856 = state_33848;(statearr_33856[10] = inst_33829);
(statearr_33856[8] = inst_33827__$1);
(statearr_33856[9] = inst_33828__$1);
return statearr_33856;
})();if(cljs.core.truth_(inst_33830))
{var statearr_33857_33878 = state_33848__$1;(statearr_33857_33878[1] = 8);
} else
{var statearr_33858_33879 = state_33848__$1;(statearr_33858_33879[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33849 === 8))
{var inst_33820 = (state_33848[7]);var inst_33829 = (state_33848[10]);var inst_33827 = (state_33848[8]);var inst_33828 = (state_33848[9]);var inst_33832 = (function (){var c = inst_33829;var v = inst_33828;var vec__33825 = inst_33827;var cs = inst_33820;return ((function (c,v,vec__33825,cs,inst_33820,inst_33829,inst_33827,inst_33828,state_val_33849){
return (function (p1__33765_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__33765_SHARP_);
});
;})(c,v,vec__33825,cs,inst_33820,inst_33829,inst_33827,inst_33828,state_val_33849))
})();var inst_33833 = cljs.core.filterv.call(null,inst_33832,inst_33820);var inst_33820__$1 = inst_33833;var state_33848__$1 = (function (){var statearr_33859 = state_33848;(statearr_33859[7] = inst_33820__$1);
return statearr_33859;
})();var statearr_33860_33880 = state_33848__$1;(statearr_33860_33880[2] = null);
(statearr_33860_33880[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33849 === 9))
{var inst_33828 = (state_33848[9]);var state_33848__$1 = state_33848;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33848__$1,11,out,inst_33828);
} else
{if((state_val_33849 === 10))
{var inst_33840 = (state_33848[2]);var state_33848__$1 = state_33848;var statearr_33862_33881 = state_33848__$1;(statearr_33862_33881[2] = inst_33840);
(statearr_33862_33881[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33849 === 11))
{var inst_33820 = (state_33848[7]);var inst_33837 = (state_33848[2]);var tmp33861 = inst_33820;var inst_33820__$1 = tmp33861;var state_33848__$1 = (function (){var statearr_33863 = state_33848;(statearr_33863[7] = inst_33820__$1);
(statearr_33863[11] = inst_33837);
return statearr_33863;
})();var statearr_33864_33882 = state_33848__$1;(statearr_33864_33882[2] = null);
(statearr_33864_33882[1] = 2);
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
var state_machine__17982__auto____0 = (function (){var statearr_33868 = (new Array(12));(statearr_33868[0] = state_machine__17982__auto__);
(statearr_33868[1] = 1);
return statearr_33868;
});
var state_machine__17982__auto____1 = (function (state_33848){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_33848);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e33869){if((e33869 instanceof Object))
{var ex__17985__auto__ = e33869;var statearr_33870_33883 = state_33848;(statearr_33870_33883[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33848);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33869;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33884 = state_33848;
state_33848 = G__33884;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_33848){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_33848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_33871 = f__18052__auto__.call(null);(statearr_33871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___33872);
return statearr_33871;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___33977 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_33954){var state_val_33955 = (state_33954[1]);if((state_val_33955 === 1))
{var inst_33931 = 0;var state_33954__$1 = (function (){var statearr_33956 = state_33954;(statearr_33956[7] = inst_33931);
return statearr_33956;
})();var statearr_33957_33978 = state_33954__$1;(statearr_33957_33978[2] = null);
(statearr_33957_33978[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33955 === 2))
{var inst_33931 = (state_33954[7]);var inst_33933 = (inst_33931 < n);var state_33954__$1 = state_33954;if(cljs.core.truth_(inst_33933))
{var statearr_33958_33979 = state_33954__$1;(statearr_33958_33979[1] = 4);
} else
{var statearr_33959_33980 = state_33954__$1;(statearr_33959_33980[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33955 === 3))
{var inst_33951 = (state_33954[2]);var inst_33952 = cljs.core.async.close_BANG_.call(null,out);var state_33954__$1 = (function (){var statearr_33960 = state_33954;(statearr_33960[8] = inst_33951);
return statearr_33960;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33954__$1,inst_33952);
} else
{if((state_val_33955 === 4))
{var state_33954__$1 = state_33954;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33954__$1,7,ch);
} else
{if((state_val_33955 === 5))
{var state_33954__$1 = state_33954;var statearr_33961_33981 = state_33954__$1;(statearr_33961_33981[2] = null);
(statearr_33961_33981[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33955 === 6))
{var inst_33949 = (state_33954[2]);var state_33954__$1 = state_33954;var statearr_33962_33982 = state_33954__$1;(statearr_33962_33982[2] = inst_33949);
(statearr_33962_33982[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33955 === 7))
{var inst_33936 = (state_33954[9]);var inst_33936__$1 = (state_33954[2]);var inst_33937 = (inst_33936__$1 == null);var inst_33938 = cljs.core.not.call(null,inst_33937);var state_33954__$1 = (function (){var statearr_33963 = state_33954;(statearr_33963[9] = inst_33936__$1);
return statearr_33963;
})();if(inst_33938)
{var statearr_33964_33983 = state_33954__$1;(statearr_33964_33983[1] = 8);
} else
{var statearr_33965_33984 = state_33954__$1;(statearr_33965_33984[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33955 === 8))
{var inst_33936 = (state_33954[9]);var state_33954__$1 = state_33954;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33954__$1,11,out,inst_33936);
} else
{if((state_val_33955 === 9))
{var state_33954__$1 = state_33954;var statearr_33966_33985 = state_33954__$1;(statearr_33966_33985[2] = null);
(statearr_33966_33985[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33955 === 10))
{var inst_33946 = (state_33954[2]);var state_33954__$1 = state_33954;var statearr_33967_33986 = state_33954__$1;(statearr_33967_33986[2] = inst_33946);
(statearr_33967_33986[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33955 === 11))
{var inst_33931 = (state_33954[7]);var inst_33941 = (state_33954[2]);var inst_33942 = (inst_33931 + 1);var inst_33931__$1 = inst_33942;var state_33954__$1 = (function (){var statearr_33968 = state_33954;(statearr_33968[10] = inst_33941);
(statearr_33968[7] = inst_33931__$1);
return statearr_33968;
})();var statearr_33969_33987 = state_33954__$1;(statearr_33969_33987[2] = null);
(statearr_33969_33987[1] = 2);
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
var state_machine__17982__auto____0 = (function (){var statearr_33973 = (new Array(11));(statearr_33973[0] = state_machine__17982__auto__);
(statearr_33973[1] = 1);
return statearr_33973;
});
var state_machine__17982__auto____1 = (function (state_33954){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_33954);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e33974){if((e33974 instanceof Object))
{var ex__17985__auto__ = e33974;var statearr_33975_33988 = state_33954;(statearr_33975_33988[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33954);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33974;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33989 = state_33954;
state_33954 = G__33989;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_33954){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_33954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_33976 = f__18052__auto__.call(null);(statearr_33976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___33977);
return statearr_33976;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___34086 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_34061){var state_val_34062 = (state_34061[1]);if((state_val_34062 === 1))
{var inst_34038 = null;var state_34061__$1 = (function (){var statearr_34063 = state_34061;(statearr_34063[7] = inst_34038);
return statearr_34063;
})();var statearr_34064_34087 = state_34061__$1;(statearr_34064_34087[2] = null);
(statearr_34064_34087[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34062 === 2))
{var state_34061__$1 = state_34061;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34061__$1,4,ch);
} else
{if((state_val_34062 === 3))
{var inst_34058 = (state_34061[2]);var inst_34059 = cljs.core.async.close_BANG_.call(null,out);var state_34061__$1 = (function (){var statearr_34065 = state_34061;(statearr_34065[8] = inst_34058);
return statearr_34065;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34061__$1,inst_34059);
} else
{if((state_val_34062 === 4))
{var inst_34041 = (state_34061[9]);var inst_34041__$1 = (state_34061[2]);var inst_34042 = (inst_34041__$1 == null);var inst_34043 = cljs.core.not.call(null,inst_34042);var state_34061__$1 = (function (){var statearr_34066 = state_34061;(statearr_34066[9] = inst_34041__$1);
return statearr_34066;
})();if(inst_34043)
{var statearr_34067_34088 = state_34061__$1;(statearr_34067_34088[1] = 5);
} else
{var statearr_34068_34089 = state_34061__$1;(statearr_34068_34089[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34062 === 5))
{var inst_34041 = (state_34061[9]);var inst_34038 = (state_34061[7]);var inst_34045 = cljs.core._EQ_.call(null,inst_34041,inst_34038);var state_34061__$1 = state_34061;if(inst_34045)
{var statearr_34069_34090 = state_34061__$1;(statearr_34069_34090[1] = 8);
} else
{var statearr_34070_34091 = state_34061__$1;(statearr_34070_34091[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34062 === 6))
{var state_34061__$1 = state_34061;var statearr_34072_34092 = state_34061__$1;(statearr_34072_34092[2] = null);
(statearr_34072_34092[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34062 === 7))
{var inst_34056 = (state_34061[2]);var state_34061__$1 = state_34061;var statearr_34073_34093 = state_34061__$1;(statearr_34073_34093[2] = inst_34056);
(statearr_34073_34093[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34062 === 8))
{var inst_34038 = (state_34061[7]);var tmp34071 = inst_34038;var inst_34038__$1 = tmp34071;var state_34061__$1 = (function (){var statearr_34074 = state_34061;(statearr_34074[7] = inst_34038__$1);
return statearr_34074;
})();var statearr_34075_34094 = state_34061__$1;(statearr_34075_34094[2] = null);
(statearr_34075_34094[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34062 === 9))
{var inst_34041 = (state_34061[9]);var state_34061__$1 = state_34061;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34061__$1,11,out,inst_34041);
} else
{if((state_val_34062 === 10))
{var inst_34053 = (state_34061[2]);var state_34061__$1 = state_34061;var statearr_34076_34095 = state_34061__$1;(statearr_34076_34095[2] = inst_34053);
(statearr_34076_34095[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34062 === 11))
{var inst_34041 = (state_34061[9]);var inst_34050 = (state_34061[2]);var inst_34038 = inst_34041;var state_34061__$1 = (function (){var statearr_34077 = state_34061;(statearr_34077[10] = inst_34050);
(statearr_34077[7] = inst_34038);
return statearr_34077;
})();var statearr_34078_34096 = state_34061__$1;(statearr_34078_34096[2] = null);
(statearr_34078_34096[1] = 2);
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
var state_machine__17982__auto____0 = (function (){var statearr_34082 = (new Array(11));(statearr_34082[0] = state_machine__17982__auto__);
(statearr_34082[1] = 1);
return statearr_34082;
});
var state_machine__17982__auto____1 = (function (state_34061){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_34061);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e34083){if((e34083 instanceof Object))
{var ex__17985__auto__ = e34083;var statearr_34084_34097 = state_34061;(statearr_34084_34097[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34061);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34083;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34098 = state_34061;
state_34061 = G__34098;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_34061){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_34061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_34085 = f__18052__auto__.call(null);(statearr_34085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___34086);
return statearr_34085;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___34233 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_34203){var state_val_34204 = (state_34203[1]);if((state_val_34204 === 1))
{var inst_34166 = (new Array(n));var inst_34167 = inst_34166;var inst_34168 = 0;var state_34203__$1 = (function (){var statearr_34205 = state_34203;(statearr_34205[7] = inst_34168);
(statearr_34205[8] = inst_34167);
return statearr_34205;
})();var statearr_34206_34234 = state_34203__$1;(statearr_34206_34234[2] = null);
(statearr_34206_34234[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34204 === 2))
{var state_34203__$1 = state_34203;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34203__$1,4,ch);
} else
{if((state_val_34204 === 3))
{var inst_34201 = (state_34203[2]);var state_34203__$1 = state_34203;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34203__$1,inst_34201);
} else
{if((state_val_34204 === 4))
{var inst_34171 = (state_34203[9]);var inst_34171__$1 = (state_34203[2]);var inst_34172 = (inst_34171__$1 == null);var inst_34173 = cljs.core.not.call(null,inst_34172);var state_34203__$1 = (function (){var statearr_34207 = state_34203;(statearr_34207[9] = inst_34171__$1);
return statearr_34207;
})();if(inst_34173)
{var statearr_34208_34235 = state_34203__$1;(statearr_34208_34235[1] = 5);
} else
{var statearr_34209_34236 = state_34203__$1;(statearr_34209_34236[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34204 === 5))
{var inst_34176 = (state_34203[10]);var inst_34171 = (state_34203[9]);var inst_34168 = (state_34203[7]);var inst_34167 = (state_34203[8]);var inst_34175 = (inst_34167[inst_34168] = inst_34171);var inst_34176__$1 = (inst_34168 + 1);var inst_34177 = (inst_34176__$1 < n);var state_34203__$1 = (function (){var statearr_34210 = state_34203;(statearr_34210[10] = inst_34176__$1);
(statearr_34210[11] = inst_34175);
return statearr_34210;
})();if(cljs.core.truth_(inst_34177))
{var statearr_34211_34237 = state_34203__$1;(statearr_34211_34237[1] = 8);
} else
{var statearr_34212_34238 = state_34203__$1;(statearr_34212_34238[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34204 === 6))
{var inst_34168 = (state_34203[7]);var inst_34189 = (inst_34168 > 0);var state_34203__$1 = state_34203;if(cljs.core.truth_(inst_34189))
{var statearr_34214_34239 = state_34203__$1;(statearr_34214_34239[1] = 12);
} else
{var statearr_34215_34240 = state_34203__$1;(statearr_34215_34240[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34204 === 7))
{var inst_34199 = (state_34203[2]);var state_34203__$1 = state_34203;var statearr_34216_34241 = state_34203__$1;(statearr_34216_34241[2] = inst_34199);
(statearr_34216_34241[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34204 === 8))
{var inst_34176 = (state_34203[10]);var inst_34167 = (state_34203[8]);var tmp34213 = inst_34167;var inst_34167__$1 = tmp34213;var inst_34168 = inst_34176;var state_34203__$1 = (function (){var statearr_34217 = state_34203;(statearr_34217[7] = inst_34168);
(statearr_34217[8] = inst_34167__$1);
return statearr_34217;
})();var statearr_34218_34242 = state_34203__$1;(statearr_34218_34242[2] = null);
(statearr_34218_34242[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34204 === 9))
{var inst_34167 = (state_34203[8]);var inst_34181 = cljs.core.vec.call(null,inst_34167);var state_34203__$1 = state_34203;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34203__$1,11,out,inst_34181);
} else
{if((state_val_34204 === 10))
{var inst_34187 = (state_34203[2]);var state_34203__$1 = state_34203;var statearr_34219_34243 = state_34203__$1;(statearr_34219_34243[2] = inst_34187);
(statearr_34219_34243[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34204 === 11))
{var inst_34183 = (state_34203[2]);var inst_34184 = (new Array(n));var inst_34167 = inst_34184;var inst_34168 = 0;var state_34203__$1 = (function (){var statearr_34220 = state_34203;(statearr_34220[7] = inst_34168);
(statearr_34220[8] = inst_34167);
(statearr_34220[12] = inst_34183);
return statearr_34220;
})();var statearr_34221_34244 = state_34203__$1;(statearr_34221_34244[2] = null);
(statearr_34221_34244[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34204 === 12))
{var inst_34167 = (state_34203[8]);var inst_34191 = cljs.core.vec.call(null,inst_34167);var state_34203__$1 = state_34203;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34203__$1,15,out,inst_34191);
} else
{if((state_val_34204 === 13))
{var state_34203__$1 = state_34203;var statearr_34222_34245 = state_34203__$1;(statearr_34222_34245[2] = null);
(statearr_34222_34245[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34204 === 14))
{var inst_34196 = (state_34203[2]);var inst_34197 = cljs.core.async.close_BANG_.call(null,out);var state_34203__$1 = (function (){var statearr_34223 = state_34203;(statearr_34223[13] = inst_34196);
return statearr_34223;
})();var statearr_34224_34246 = state_34203__$1;(statearr_34224_34246[2] = inst_34197);
(statearr_34224_34246[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34204 === 15))
{var inst_34193 = (state_34203[2]);var state_34203__$1 = state_34203;var statearr_34225_34247 = state_34203__$1;(statearr_34225_34247[2] = inst_34193);
(statearr_34225_34247[1] = 14);
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
var state_machine__17982__auto____0 = (function (){var statearr_34229 = (new Array(14));(statearr_34229[0] = state_machine__17982__auto__);
(statearr_34229[1] = 1);
return statearr_34229;
});
var state_machine__17982__auto____1 = (function (state_34203){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_34203);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e34230){if((e34230 instanceof Object))
{var ex__17985__auto__ = e34230;var statearr_34231_34248 = state_34203;(statearr_34231_34248[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34203);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34230;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34249 = state_34203;
state_34203 = G__34249;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_34203){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_34203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_34232 = f__18052__auto__.call(null);(statearr_34232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___34233);
return statearr_34232;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___34392 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_34362){var state_val_34363 = (state_34362[1]);if((state_val_34363 === 1))
{var inst_34321 = (new Array(0));var inst_34322 = inst_34321;var inst_34323 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_34362__$1 = (function (){var statearr_34364 = state_34362;(statearr_34364[7] = inst_34323);
(statearr_34364[8] = inst_34322);
return statearr_34364;
})();var statearr_34365_34393 = state_34362__$1;(statearr_34365_34393[2] = null);
(statearr_34365_34393[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34363 === 2))
{var state_34362__$1 = state_34362;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34362__$1,4,ch);
} else
{if((state_val_34363 === 3))
{var inst_34360 = (state_34362[2]);var state_34362__$1 = state_34362;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34362__$1,inst_34360);
} else
{if((state_val_34363 === 4))
{var inst_34326 = (state_34362[9]);var inst_34326__$1 = (state_34362[2]);var inst_34327 = (inst_34326__$1 == null);var inst_34328 = cljs.core.not.call(null,inst_34327);var state_34362__$1 = (function (){var statearr_34366 = state_34362;(statearr_34366[9] = inst_34326__$1);
return statearr_34366;
})();if(inst_34328)
{var statearr_34367_34394 = state_34362__$1;(statearr_34367_34394[1] = 5);
} else
{var statearr_34368_34395 = state_34362__$1;(statearr_34368_34395[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34363 === 5))
{var inst_34326 = (state_34362[9]);var inst_34330 = (state_34362[10]);var inst_34323 = (state_34362[7]);var inst_34330__$1 = f.call(null,inst_34326);var inst_34331 = cljs.core._EQ_.call(null,inst_34330__$1,inst_34323);var inst_34332 = cljs.core.keyword_identical_QMARK_.call(null,inst_34323,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_34333 = (inst_34331) || (inst_34332);var state_34362__$1 = (function (){var statearr_34369 = state_34362;(statearr_34369[10] = inst_34330__$1);
return statearr_34369;
})();if(cljs.core.truth_(inst_34333))
{var statearr_34370_34396 = state_34362__$1;(statearr_34370_34396[1] = 8);
} else
{var statearr_34371_34397 = state_34362__$1;(statearr_34371_34397[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34363 === 6))
{var inst_34322 = (state_34362[8]);var inst_34347 = inst_34322.length;var inst_34348 = (inst_34347 > 0);var state_34362__$1 = state_34362;if(cljs.core.truth_(inst_34348))
{var statearr_34373_34398 = state_34362__$1;(statearr_34373_34398[1] = 12);
} else
{var statearr_34374_34399 = state_34362__$1;(statearr_34374_34399[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34363 === 7))
{var inst_34358 = (state_34362[2]);var state_34362__$1 = state_34362;var statearr_34375_34400 = state_34362__$1;(statearr_34375_34400[2] = inst_34358);
(statearr_34375_34400[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34363 === 8))
{var inst_34326 = (state_34362[9]);var inst_34330 = (state_34362[10]);var inst_34322 = (state_34362[8]);var inst_34335 = inst_34322.push(inst_34326);var tmp34372 = inst_34322;var inst_34322__$1 = tmp34372;var inst_34323 = inst_34330;var state_34362__$1 = (function (){var statearr_34376 = state_34362;(statearr_34376[11] = inst_34335);
(statearr_34376[7] = inst_34323);
(statearr_34376[8] = inst_34322__$1);
return statearr_34376;
})();var statearr_34377_34401 = state_34362__$1;(statearr_34377_34401[2] = null);
(statearr_34377_34401[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34363 === 9))
{var inst_34322 = (state_34362[8]);var inst_34338 = cljs.core.vec.call(null,inst_34322);var state_34362__$1 = state_34362;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34362__$1,11,out,inst_34338);
} else
{if((state_val_34363 === 10))
{var inst_34345 = (state_34362[2]);var state_34362__$1 = state_34362;var statearr_34378_34402 = state_34362__$1;(statearr_34378_34402[2] = inst_34345);
(statearr_34378_34402[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34363 === 11))
{var inst_34326 = (state_34362[9]);var inst_34330 = (state_34362[10]);var inst_34340 = (state_34362[2]);var inst_34341 = (new Array(0));var inst_34342 = inst_34341.push(inst_34326);var inst_34322 = inst_34341;var inst_34323 = inst_34330;var state_34362__$1 = (function (){var statearr_34379 = state_34362;(statearr_34379[7] = inst_34323);
(statearr_34379[8] = inst_34322);
(statearr_34379[12] = inst_34342);
(statearr_34379[13] = inst_34340);
return statearr_34379;
})();var statearr_34380_34403 = state_34362__$1;(statearr_34380_34403[2] = null);
(statearr_34380_34403[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34363 === 12))
{var inst_34322 = (state_34362[8]);var inst_34350 = cljs.core.vec.call(null,inst_34322);var state_34362__$1 = state_34362;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34362__$1,15,out,inst_34350);
} else
{if((state_val_34363 === 13))
{var state_34362__$1 = state_34362;var statearr_34381_34404 = state_34362__$1;(statearr_34381_34404[2] = null);
(statearr_34381_34404[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34363 === 14))
{var inst_34355 = (state_34362[2]);var inst_34356 = cljs.core.async.close_BANG_.call(null,out);var state_34362__$1 = (function (){var statearr_34382 = state_34362;(statearr_34382[14] = inst_34355);
return statearr_34382;
})();var statearr_34383_34405 = state_34362__$1;(statearr_34383_34405[2] = inst_34356);
(statearr_34383_34405[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34363 === 15))
{var inst_34352 = (state_34362[2]);var state_34362__$1 = state_34362;var statearr_34384_34406 = state_34362__$1;(statearr_34384_34406[2] = inst_34352);
(statearr_34384_34406[1] = 14);
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
var state_machine__17982__auto____0 = (function (){var statearr_34388 = (new Array(15));(statearr_34388[0] = state_machine__17982__auto__);
(statearr_34388[1] = 1);
return statearr_34388;
});
var state_machine__17982__auto____1 = (function (state_34362){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_34362);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e34389){if((e34389 instanceof Object))
{var ex__17985__auto__ = e34389;var statearr_34390_34407 = state_34362;(statearr_34390_34407[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34362);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34389;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34408 = state_34362;
state_34362 = G__34408;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_34362){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_34362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_34391 = f__18052__auto__.call(null);(statearr_34391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___34392);
return statearr_34391;
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