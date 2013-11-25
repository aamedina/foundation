// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = 1024;
cljs.core.async.impl.protocols.ReadPort = (function (){var obj34538 = {};return obj34538;
})();
cljs.core.async.impl.protocols.take_BANG_ = (function take_BANG_(port,fn1_handler){if((function (){var and__5145__auto__ = port;if(and__5145__auto__)
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else
{var x__5760__auto__ = (((port == null))?null:port);return (function (){var or__5157__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});
cljs.core.async.impl.protocols.WritePort = (function (){var obj34540 = {};return obj34540;
})();
cljs.core.async.impl.protocols.put_BANG_ = (function put_BANG_(port,val,fn0_handler){if((function (){var and__5145__auto__ = port;if(and__5145__auto__)
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else
{return and__5145__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn0_handler);
} else
{var x__5760__auto__ = (((port == null))?null:port);return (function (){var or__5157__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
})().call(null,port,val,fn0_handler);
}
});
cljs.core.async.impl.protocols.Channel = (function (){var obj34542 = {};return obj34542;
})();
cljs.core.async.impl.protocols.close_BANG_ = (function close_BANG_(chan){if((function (){var and__5145__auto__ = chan;if(and__5145__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else
{return and__5145__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else
{var x__5760__auto__ = (((chan == null))?null:chan);return (function (){var or__5157__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.Handler = (function (){var obj34544 = {};return obj34544;
})();
cljs.core.async.impl.protocols.active_QMARK_ = (function active_QMARK_(h){if((function (){var and__5145__auto__ = h;if(and__5145__auto__)
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else
{return and__5145__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else
{var x__5760__auto__ = (((h == null))?null:h);return (function (){var or__5157__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.commit = (function commit(h){if((function (){var and__5145__auto__ = h;if(and__5145__auto__)
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else
{return and__5145__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else
{var x__5760__auto__ = (((h == null))?null:h);return (function (){var or__5157__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.Buffer = (function (){var obj34546 = {};return obj34546;
})();
cljs.core.async.impl.protocols.full_QMARK_ = (function full_QMARK_(b){if((function (){var and__5145__auto__ = b;if(and__5145__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else
{return and__5145__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else
{var x__5760__auto__ = (((b == null))?null:b);return (function (){var or__5157__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.remove_BANG_ = (function remove_BANG_(b){if((function (){var and__5145__auto__ = b;if(and__5145__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else
{return and__5145__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else
{var x__5760__auto__ = (((b == null))?null:b);return (function (){var or__5157__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.add_BANG_ = (function add_BANG_(b,itm){if((function (){var and__5145__auto__ = b;if(and__5145__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2(b,itm);
} else
{var x__5760__auto__ = (((b == null))?null:b);return (function (){var or__5157__auto__ = (cljs.core.async.impl.protocols.add_BANG_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.impl.protocols.add_BANG_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.add!",b);
}
}
})().call(null,b,itm);
}
});
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj34548 = {};return obj34548;
})();