// Compiled by ClojureScript 0.0-2120
goog.provide('enfocus.enlive.syntax');
goog.require('cljs.core');
enfocus.enlive.syntax.sel_to_str = (function sel_to_str(input){var item = cljs.core.first.call(null,input);var rest = cljs.core.rest.call(null,input);var end = ((cljs.core.empty_QMARK_.call(null,rest))?cljs.core.list(cljs.core.List.EMPTY):sel_to_str.call(null,rest));if((item instanceof cljs.core.Keyword))
{return cljs.core.map.call(null,(function (p1__30681_SHARP_){return cljs.core.conj.call(null,p1__30681_SHARP_,cljs.core.name.call(null,item));
}),end);
} else
{if(typeof item === 'string')
{return cljs.core.map.call(null,(function (p1__30682_SHARP_){return cljs.core.conj.call(null,p1__30682_SHARP_,item);
}),end);
} else
{if(cljs.core.set_QMARK_.call(null,item))
{return cljs.core.reduce.call(null,(function (r1,it){return cljs.core.concat.call(null,r1,cljs.core.map.call(null,(function (p1__30683_SHARP_){return cljs.core.conj.call(null,p1__30683_SHARP_,it);
}),end));
}),cljs.core.PersistentVector.EMPTY,cljs.core.flatten.call(null,sel_to_str.call(null,item)));
} else
{if(cljs.core.coll_QMARK_.call(null,item))
{var x1 = sel_to_str.call(null,item);var sub = cljs.core.map.call(null,((function (x1){
return (function (p1__30684_SHARP_){return cljs.core.apply.call(null,cljs.core.str,p1__30684_SHARP_);
});})(x1))
,sel_to_str.call(null,item));var iter__8921__auto__ = (function iter__30691(s__30692){return (new cljs.core.LazySeq(null,(function (){var s__30692__$1 = s__30692;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30692__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var s = cljs.core.first.call(null,xs__4579__auto__);var iterys__8917__auto__ = ((function (s__30692__$1,s,xs__4579__auto__,temp__4092__auto__){
return (function iter__30693(s__30694){return (new cljs.core.LazySeq(null,((function (s__30692__$1,s,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__30694__$1 = s__30694;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__30694__$1);if(temp__4092__auto____$1)
{var s__30694__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__30694__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__30694__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__30696 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__30695 = 0;while(true){
if((i__30695 < size__8920__auto__))
{var e = cljs.core._nth.call(null,c__8919__auto__,i__30695);cljs.core.chunk_append.call(null,b__30696,(function (){cljs.core.println.call(null,s,e);
return cljs.core.conj.call(null,e,s);
})());
{
var G__30697 = (i__30695 + 1);
i__30695 = G__30697;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30696),iter__30693.call(null,cljs.core.chunk_rest.call(null,s__30694__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30696),null);
}
} else
{var e = cljs.core.first.call(null,s__30694__$2);return cljs.core.cons.call(null,(function (){cljs.core.println.call(null,s,e);
return cljs.core.conj.call(null,e,s);
})(),iter__30693.call(null,cljs.core.rest.call(null,s__30694__$2)));
}
} else
{return null;
}
break;
}
});})(s__30692__$1,s,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__30692__$1,s,xs__4579__auto__,temp__4092__auto__))
;var fs__8918__auto__ = cljs.core.seq.call(null,iterys__8917__auto__.call(null,end));if(fs__8918__auto__)
{return cljs.core.concat.call(null,fs__8918__auto__,iter__30691.call(null,cljs.core.rest.call(null,s__30692__$1)));
} else
{{
var G__30698 = cljs.core.rest.call(null,s__30692__$1);
s__30692__$1 = G__30698;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,sub);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return input;
} else
{return null;
}
}
}
}
}
});
enfocus.enlive.syntax.convert = (function convert(sel){if(typeof sel === 'string')
{return sel;
} else
{var temp__4090__auto__ = enfocus.enlive.syntax.sel_to_str.call(null,sel);if(cljs.core.truth_(temp__4090__auto__))
{var ors = temp__4090__auto__;return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.apply.call(null,cljs.core.concat,cljs.core.interpose.call(null,",",ors))));
} else
{return null;
}
}
});
enfocus.enlive.syntax.attr_pairs = (function attr_pairs(op,elms){var ts = (function (p__30701){var vec__30702 = p__30701;var x = cljs.core.nth.call(null,vec__30702,0,null);var y = cljs.core.nth.call(null,vec__30702,1,null);return [cljs.core.str("["),cljs.core.str(cljs.core.name.call(null,x)),cljs.core.str(op),cljs.core.str("='"),cljs.core.str(y),cljs.core.str("']")].join('');
});return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,ts,cljs.core.partition.call(null,2,elms)));
});
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_QMARK_ = (function() { 
var attr_QMARK___delegate = function (elms){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__30703_SHARP_){return [cljs.core.str("["),cljs.core.str(cljs.core.name.call(null,p1__30703_SHARP_)),cljs.core.str("]")].join('');
}),elms));
};
var attr_QMARK_ = function (var_args){
var elms = null;if (arguments.length > 0) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return attr_QMARK___delegate.call(this,elms);};
attr_QMARK_.cljs$lang$maxFixedArity = 0;
attr_QMARK_.cljs$lang$applyTo = (function (arglist__30704){
var elms = cljs.core.seq(arglist__30704);
return attr_QMARK___delegate(elms);
});
attr_QMARK_.cljs$core$IFn$_invoke$arity$variadic = attr_QMARK___delegate;
return attr_QMARK_;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_EQ_ = (function() { 
var attr_EQ___delegate = function (elms){return enfocus.enlive.syntax.attr_pairs.call(null,"",elms);
};
var attr_EQ_ = function (var_args){
var elms = null;if (arguments.length > 0) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return attr_EQ___delegate.call(this,elms);};
attr_EQ_.cljs$lang$maxFixedArity = 0;
attr_EQ_.cljs$lang$applyTo = (function (arglist__30705){
var elms = cljs.core.seq(arglist__30705);
return attr_EQ___delegate(elms);
});
attr_EQ_.cljs$core$IFn$_invoke$arity$variadic = attr_EQ___delegate;
return attr_EQ_;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_has = (function() { 
var attr_has__delegate = function (x,vals){var ts = (function (y){return [cljs.core.str("["),cljs.core.str(cljs.core.name.call(null,x)),cljs.core.str("~='"),cljs.core.str(y),cljs.core.str("']")].join('');
});return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,ts,vals));
};
var attr_has = function (x,var_args){
var vals = null;if (arguments.length > 1) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return attr_has__delegate.call(this,x,vals);};
attr_has.cljs$lang$maxFixedArity = 1;
attr_has.cljs$lang$applyTo = (function (arglist__30706){
var x = cljs.core.first(arglist__30706);
var vals = cljs.core.rest(arglist__30706);
return attr_has__delegate(x,vals);
});
attr_has.cljs$core$IFn$_invoke$arity$variadic = attr_has__delegate;
return attr_has;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_starts = (function() { 
var attr_starts__delegate = function (elms){return enfocus.enlive.syntax.attr_pairs.call(null,"^",elms);
};
var attr_starts = function (var_args){
var elms = null;if (arguments.length > 0) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return attr_starts__delegate.call(this,elms);};
attr_starts.cljs$lang$maxFixedArity = 0;
attr_starts.cljs$lang$applyTo = (function (arglist__30707){
var elms = cljs.core.seq(arglist__30707);
return attr_starts__delegate(elms);
});
attr_starts.cljs$core$IFn$_invoke$arity$variadic = attr_starts__delegate;
return attr_starts;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_ends = (function() { 
var attr_ends__delegate = function (elms){return enfocus.enlive.syntax.attr_pairs.call(null,"$",elms);
};
var attr_ends = function (var_args){
var elms = null;if (arguments.length > 0) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return attr_ends__delegate.call(this,elms);};
attr_ends.cljs$lang$maxFixedArity = 0;
attr_ends.cljs$lang$applyTo = (function (arglist__30708){
var elms = cljs.core.seq(arglist__30708);
return attr_ends__delegate(elms);
});
attr_ends.cljs$core$IFn$_invoke$arity$variadic = attr_ends__delegate;
return attr_ends;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_contains = (function() { 
var attr_contains__delegate = function (elms){return enfocus.enlive.syntax.attr_pairs.call(null,"*",elms);
};
var attr_contains = function (var_args){
var elms = null;if (arguments.length > 0) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return attr_contains__delegate.call(this,elms);};
attr_contains.cljs$lang$maxFixedArity = 0;
attr_contains.cljs$lang$applyTo = (function (arglist__30709){
var elms = cljs.core.seq(arglist__30709);
return attr_contains__delegate(elms);
});
attr_contains.cljs$core$IFn$_invoke$arity$variadic = attr_contains__delegate;
return attr_contains;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_BAR__EQ_ = (function() { 
var attr_BAR__EQ___delegate = function (elms){return enfocus.enlive.syntax.attr_pairs.call(null,"|",elms);
};
var attr_BAR__EQ_ = function (var_args){
var elms = null;if (arguments.length > 0) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return attr_BAR__EQ___delegate.call(this,elms);};
attr_BAR__EQ_.cljs$lang$maxFixedArity = 0;
attr_BAR__EQ_.cljs$lang$applyTo = (function (arglist__30710){
var elms = cljs.core.seq(arglist__30710);
return attr_BAR__EQ___delegate(elms);
});
attr_BAR__EQ_.cljs$core$IFn$_invoke$arity$variadic = attr_BAR__EQ___delegate;
return attr_BAR__EQ_;
})()
;
enfocus.enlive.syntax.nth_op = (function() {
var nth_op = null;
var nth_op__2 = (function (op,x){return [cljs.core.str(":nth-"),cljs.core.str(op),cljs.core.str("("),cljs.core.str(x),cljs.core.str(")")].join('');
});
var nth_op__3 = (function (op,x,y){return [cljs.core.str(":nth-"),cljs.core.str(op),cljs.core.str("("),cljs.core.str(x),cljs.core.str("n"),cljs.core.str((((y > 0))?"+":null)),cljs.core.str(y)].join('');
});
nth_op = function(op,x,y){
switch(arguments.length){
case 2:
return nth_op__2.call(this,op,x);
case 3:
return nth_op__3.call(this,op,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_op.cljs$core$IFn$_invoke$arity$2 = nth_op__2;
nth_op.cljs$core$IFn$_invoke$arity$3 = nth_op__3;
return nth_op;
})()
;
enfocus.enlive.syntax.nth_child = (function() {
var nth_child = null;
var nth_child__1 = (function (x){return enfocus.enlive.syntax.nth_op.call(null,"child",x);
});
var nth_child__2 = (function (x,y){return enfocus.enlive.syntax.nth_op.call(null,"child",x,y);
});
nth_child = function(x,y){
switch(arguments.length){
case 1:
return nth_child__1.call(this,x);
case 2:
return nth_child__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_child.cljs$core$IFn$_invoke$arity$1 = nth_child__1;
nth_child.cljs$core$IFn$_invoke$arity$2 = nth_child__2;
return nth_child;
})()
;
enfocus.enlive.syntax.nth_last_child = (function() {
var nth_last_child = null;
var nth_last_child__1 = (function (x){return enfocus.enlive.syntax.nth_op.call(null,"last-child",x);
});
var nth_last_child__2 = (function (x,y){return enfocus.enlive.syntax.nth_op.call(null,"last-child",x,y);
});
nth_last_child = function(x,y){
switch(arguments.length){
case 1:
return nth_last_child__1.call(this,x);
case 2:
return nth_last_child__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_last_child.cljs$core$IFn$_invoke$arity$1 = nth_last_child__1;
nth_last_child.cljs$core$IFn$_invoke$arity$2 = nth_last_child__2;
return nth_last_child;
})()
;
enfocus.enlive.syntax.nth_of_type = (function() {
var nth_of_type = null;
var nth_of_type__1 = (function (x){return enfocus.enlive.syntax.nth_op.call(null,"of-type",x);
});
var nth_of_type__2 = (function (x,y){return enfocus.enlive.syntax.nth_op.call(null,"of-type",x,y);
});
nth_of_type = function(x,y){
switch(arguments.length){
case 1:
return nth_of_type__1.call(this,x);
case 2:
return nth_of_type__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_of_type.cljs$core$IFn$_invoke$arity$1 = nth_of_type__1;
nth_of_type.cljs$core$IFn$_invoke$arity$2 = nth_of_type__2;
return nth_of_type;
})()
;
enfocus.enlive.syntax.nth_last_of_type = (function() {
var nth_last_of_type = null;
var nth_last_of_type__1 = (function (x){return enfocus.enlive.syntax.nth_op.call(null,"last-of-type",x);
});
var nth_last_of_type__2 = (function (x,y){return enfocus.enlive.syntax.nth_op.call(null,"last-of-type",x,y);
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case 1:
return nth_last_of_type__1.call(this,x);
case 2:
return nth_last_of_type__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_last_of_type.cljs$core$IFn$_invoke$arity$1 = nth_last_of_type__1;
nth_last_of_type.cljs$core$IFn$_invoke$arity$2 = nth_last_of_type__2;
return nth_last_of_type;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.but = (function() { 
var but__delegate = function (sel){return [cljs.core.str("not("),cljs.core.str(enfocus.enlive.syntax.convert.call(null,sel)),cljs.core.str(")")].join('');
};
var but = function (var_args){
var sel = null;if (arguments.length > 0) {
  sel = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return but__delegate.call(this,sel);};
but.cljs$lang$maxFixedArity = 0;
but.cljs$lang$applyTo = (function (arglist__30711){
var sel = cljs.core.seq(arglist__30711);
return but__delegate(sel);
});
but.cljs$core$IFn$_invoke$arity$variadic = but__delegate;
return but;
})()
;

//# sourceMappingURL=syntax.js.map