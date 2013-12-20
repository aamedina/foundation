// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.components.datagrid');
goog.require('cljs.core');
goog.require('foundation.test.models');
goog.require('cljs.core.async');
goog.require('foundation.test.templates');
goog.require('foundation.app.message');
goog.require('foundation.app.ui');
goog.require('dommy.core');
goog.require('foundation.test.cells');
goog.require('dommy.template');
goog.require('foundation.test.templates');
goog.require('foundation.test.models');
goog.require('dommy.template');
goog.require('goog.style');
goog.require('foundation.app.message');
goog.require('foundation.test.models');
goog.require('cljs.core.async');
goog.require('goog.style');
goog.require('foundation.test.cells');
goog.require('foundation.app.ui');
goog.require('dommy.core');
cljs.core.enable_console_print_BANG_.call(null);
foundation.test.components.datagrid.datagrid_filter = (function datagrid_filter(){var dom396827 = document.createElement("div");dom396827.className = "autocomplete";
dom396827.appendChild((function (){var dom396828 = document.createElement("input");dom396828.className = "form-control";
if("text")
{dom396828.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom396828.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom396828;
})());
return dom396827;
});
foundation.test.components.datagrid.datagrid_header = (function datagrid_header(columns){var dom396835 = document.createElement("thead");dom396835.setAttribute("id","datagrid-header");
dom396835.appendChild((function (){var dom396836 = document.createElement("tr");dom396836.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__396837(s__396838){return (new cljs.core.LazySeq(null,(function (){var s__396838__$1 = s__396838;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__396838__$1);if(temp__4092__auto__)
{var s__396838__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__396838__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__396838__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__396840 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__396839 = 0;while(true){
if((i__396839 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__396839);cljs.core.chunk_append.call(null,b__396840,foundation.test.cells.th.call(null,col));
{
var G__396841 = (i__396839 + 1);
i__396839 = G__396841;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__396840),iter__396837.call(null,cljs.core.chunk_rest.call(null,s__396838__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__396840),null);
}
} else
{var col = cljs.core.first.call(null,s__396838__$2);return cljs.core.cons.call(null,foundation.test.cells.th.call(null,col),iter__396837.call(null,cljs.core.rest.call(null,s__396838__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom396836;
})());
return dom396835;
});
foundation.test.components.datagrid.datagrid_row = (function datagrid_row(model,columns){var dom396847 = document.createElement("tr");dom396847.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__396848(s__396849){return (new cljs.core.LazySeq(null,(function (){var s__396849__$1 = s__396849;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__396849__$1);if(temp__4092__auto__)
{var s__396849__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__396849__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__396849__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__396851 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__396850 = 0;while(true){
if((i__396850 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__396850);cljs.core.chunk_append.call(null,b__396851,foundation.test.cells.td.call(null,col,model));
{
var G__396852 = (i__396850 + 1);
i__396850 = G__396852;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__396851),iter__396848.call(null,cljs.core.chunk_rest.call(null,s__396849__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__396851),null);
}
} else
{var col = cljs.core.first.call(null,s__396849__$2);return cljs.core.cons.call(null,foundation.test.cells.td.call(null,col,model),iter__396848.call(null,cljs.core.rest.call(null,s__396849__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom396847;
});
foundation.test.components.datagrid.datagrid_body = (function datagrid_body(coll,columns){if(typeof foundation.test.components.datagrid.t396860 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t396860 = (function (columns,coll,datagrid_body,meta396861){
this.columns = columns;
this.coll = coll;
this.datagrid_body = datagrid_body;
this.meta396861 = meta396861;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t396860.cljs$lang$type = true;
foundation.test.components.datagrid.t396860.cljs$lang$ctorStr = "foundation.test.components.datagrid/t396860";
foundation.test.components.datagrid.t396860.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t396860");
});
foundation.test.components.datagrid.t396860.prototype.dommy$template$PElement$ = true;
foundation.test.components.datagrid.t396860.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template.node.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.datagrid.t396860.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t396860.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody#datagrid-body.datagrid-tbody","tbody#datagrid-body.datagrid-tbody",3858987303),(function (){var iter__8921__auto__ = (function iter__396863(s__396864){return (new cljs.core.LazySeq(null,(function (){var s__396864__$1 = s__396864;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__396864__$1);if(temp__4092__auto__)
{var s__396864__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__396864__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__396864__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__396866 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__396865 = 0;while(true){
if((i__396865 < size__8920__auto__))
{var model = cljs.core._nth.call(null,c__8919__auto__,i__396865);cljs.core.chunk_append.call(null,b__396866,foundation.test.components.datagrid.datagrid_row.call(null,model,self__.columns));
{
var G__396867 = (i__396865 + 1);
i__396865 = G__396867;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__396866),iter__396863.call(null,cljs.core.chunk_rest.call(null,s__396864__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__396866),null);
}
} else
{var model = cljs.core.first.call(null,s__396864__$2);return cljs.core.cons.call(null,foundation.test.components.datagrid.datagrid_row.call(null,model,self__.columns),iter__396863.call(null,cljs.core.rest.call(null,s__396864__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,self__.coll);
})()], null);
});
foundation.test.components.datagrid.t396860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_396862){var self__ = this;
var _396862__$1 = this;return self__.meta396861;
});
foundation.test.components.datagrid.t396860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_396862,meta396861__$1){var self__ = this;
var _396862__$1 = this;return (new foundation.test.components.datagrid.t396860(self__.columns,self__.coll,self__.datagrid_body,meta396861__$1));
});
foundation.test.components.datagrid.__GT_t396860 = (function __GT_t396860(columns__$1,coll__$1,datagrid_body__$1,meta396861){return (new foundation.test.components.datagrid.t396860(columns__$1,coll__$1,datagrid_body__$1,meta396861));
});
}
return (new foundation.test.components.datagrid.t396860(columns,coll,datagrid_body,null));
});
foundation.test.components.datagrid.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom396879 = document.createElement("ol");dom396879.className = "breadcrumb";
dom396879.appendChild((function (){var dom396880 = document.createElement("li");dom396880.className = "active";
dom396880.setAttribute("id","account");
dom396880.appendChild((function (){var dom396881 = document.createElement("div");dom396881.className = "arrow-down";
return dom396881;
})());
dom396880.appendChild((function (){var dom396882 = document.createElement("a");dom396882.appendChild(document.createTextNode("Accounts"));
return dom396882;
})());
dom396880.appendChild((function (){var dom396883 = document.createElement("div");dom396883.className = "arrow-up";
return dom396883;
})());
return dom396880;
})());
dom396879.appendChild((function (){var dom396884 = document.createElement("li");dom396884.className = "hidden";
dom396884.setAttribute("id","campaign");
dom396884.appendChild((function (){var dom396885 = document.createElement("a");dom396885.appendChild(document.createTextNode("Campaigns"));
return dom396885;
})());
return dom396884;
})());
dom396879.appendChild((function (){var dom396886 = document.createElement("li");dom396886.className = "hidden";
dom396886.setAttribute("id","line_item");
dom396886.appendChild((function (){var dom396887 = document.createElement("a");dom396887.appendChild(document.createTextNode("Line Items"));
return dom396887;
})());
return dom396886;
})());
dom396879.appendChild((function (){var dom396888 = document.createElement("li");dom396888.className = "hidden";
dom396888.setAttribute("id","promoted_tweet");
dom396888.appendChild((function (){var dom396889 = document.createElement("a");dom396889.appendChild(document.createTextNode("Promoted Products"));
return dom396889;
})());
return dom396888;
})());
return dom396879;
});
foundation.test.components.datagrid.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.test.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.test.components.datagrid.datagrid_header.call(null,cols),foundation.test.components.datagrid.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.test.components.datagrid.new_button = (function new_button(input){if(typeof foundation.test.components.datagrid.t396893 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t396893 = (function (input,new_button,meta396894){
this.input = input;
this.new_button = new_button;
this.meta396894 = meta396894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t396893.cljs$lang$type = true;
foundation.test.components.datagrid.t396893.cljs$lang$ctorStr = "foundation.test.components.datagrid/t396893";
foundation.test.components.datagrid.t396893.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t396893");
});
foundation.test.components.datagrid.t396893.prototype.dommy$template$PElement$ = true;
foundation.test.components.datagrid.t396893.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template._elem.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.datagrid.t396893.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.datagrid.t396893.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (_,e){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,self__.input,new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"create","create",3956577390),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),new cljs.core.Keyword(null,"model","model",1117974171),cljs.core.PersistentArrayMap.EMPTY], true, false));
});
foundation.test.components.datagrid.t396893.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t396893.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#new.btn.btn-success.btn-sm","button#new.btn.btn-success.btn-sm",634778506),"New"], null);
});
foundation.test.components.datagrid.t396893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_396895){var self__ = this;
var _396895__$1 = this;return self__.meta396894;
});
foundation.test.components.datagrid.t396893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_396895,meta396894__$1){var self__ = this;
var _396895__$1 = this;return (new foundation.test.components.datagrid.t396893(self__.input,self__.new_button,meta396894__$1));
});
foundation.test.components.datagrid.__GT_t396893 = (function __GT_t396893(input__$1,new_button__$1,meta396894){return (new foundation.test.components.datagrid.t396893(input__$1,new_button__$1,meta396894));
});
}
return (new foundation.test.components.datagrid.t396893(input,new_button,null));
});
foundation.test.components.datagrid.save_button = (function save_button(input){if(typeof foundation.test.components.datagrid.t396899 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t396899 = (function (input,save_button,meta396900){
this.input = input;
this.save_button = save_button;
this.meta396900 = meta396900;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t396899.cljs$lang$type = true;
foundation.test.components.datagrid.t396899.cljs$lang$ctorStr = "foundation.test.components.datagrid/t396899";
foundation.test.components.datagrid.t396899.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t396899");
});
foundation.test.components.datagrid.t396899.prototype.dommy$template$PElement$ = true;
foundation.test.components.datagrid.t396899.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template._elem.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.datagrid.t396899.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.datagrid.t396899.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (_,e){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,self__.input,new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"update","update",4470025275),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),new cljs.core.Keyword(null,"model","model",1117974171),cljs.core.PersistentArrayMap.EMPTY], true, false));
});
foundation.test.components.datagrid.t396899.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t396899.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#save.btn.btn-info.btn-sm.disabled","button#save.btn.btn-info.btn-sm.disabled",4613045172),"Save"], null);
});
foundation.test.components.datagrid.t396899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_396901){var self__ = this;
var _396901__$1 = this;return self__.meta396900;
});
foundation.test.components.datagrid.t396899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_396901,meta396900__$1){var self__ = this;
var _396901__$1 = this;return (new foundation.test.components.datagrid.t396899(self__.input,self__.save_button,meta396900__$1));
});
foundation.test.components.datagrid.__GT_t396899 = (function __GT_t396899(input__$1,save_button__$1,meta396900){return (new foundation.test.components.datagrid.t396899(input__$1,save_button__$1,meta396900));
});
}
return (new foundation.test.components.datagrid.t396899(input,save_button,null));
});
foundation.test.components.datagrid.delete_button = (function delete_button(input){if(typeof foundation.test.components.datagrid.t396905 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t396905 = (function (input,delete_button,meta396906){
this.input = input;
this.delete_button = delete_button;
this.meta396906 = meta396906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t396905.cljs$lang$type = true;
foundation.test.components.datagrid.t396905.cljs$lang$ctorStr = "foundation.test.components.datagrid/t396905";
foundation.test.components.datagrid.t396905.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t396905");
});
foundation.test.components.datagrid.t396905.prototype.dommy$template$PElement$ = true;
foundation.test.components.datagrid.t396905.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template._elem.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.datagrid.t396905.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.datagrid.t396905.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (_,e){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,self__.input,new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),new cljs.core.Keyword(null,"model","model",1117974171),cljs.core.PersistentArrayMap.EMPTY], true, false));
});
foundation.test.components.datagrid.t396905.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t396905.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#delete.btn.btn-danger.btn-sm.disabled","button#delete.btn.btn-danger.btn-sm.disabled",778132667),"Delete"], null);
});
foundation.test.components.datagrid.t396905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_396907){var self__ = this;
var _396907__$1 = this;return self__.meta396906;
});
foundation.test.components.datagrid.t396905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_396907,meta396906__$1){var self__ = this;
var _396907__$1 = this;return (new foundation.test.components.datagrid.t396905(self__.input,self__.delete_button,meta396906__$1));
});
foundation.test.components.datagrid.__GT_t396905 = (function __GT_t396905(input__$1,delete_button__$1,meta396906){return (new foundation.test.components.datagrid.t396905(input__$1,delete_button__$1,meta396906));
});
}
return (new foundation.test.components.datagrid.t396905(input,delete_button,null));
});
foundation.test.components.datagrid.dupe_button = (function dupe_button(input){if(typeof foundation.test.components.datagrid.t396911 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t396911 = (function (input,dupe_button,meta396912){
this.input = input;
this.dupe_button = dupe_button;
this.meta396912 = meta396912;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t396911.cljs$lang$type = true;
foundation.test.components.datagrid.t396911.cljs$lang$ctorStr = "foundation.test.components.datagrid/t396911";
foundation.test.components.datagrid.t396911.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t396911");
});
foundation.test.components.datagrid.t396911.prototype.dommy$template$PElement$ = true;
foundation.test.components.datagrid.t396911.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template._elem.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.datagrid.t396911.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.datagrid.t396911.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (_,e){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,self__.input,new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"dupe","dupe",1016999352),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),new cljs.core.Keyword(null,"model","model",1117974171),cljs.core.PersistentArrayMap.EMPTY], true, false));
});
foundation.test.components.datagrid.t396911.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t396911.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#dupe.btn.btn-primary.btn-sm.disabled","button#dupe.btn.btn-primary.btn-sm.disabled",777532203),"Duplicate"], null);
});
foundation.test.components.datagrid.t396911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_396913){var self__ = this;
var _396913__$1 = this;return self__.meta396912;
});
foundation.test.components.datagrid.t396911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_396913,meta396912__$1){var self__ = this;
var _396913__$1 = this;return (new foundation.test.components.datagrid.t396911(self__.input,self__.dupe_button,meta396912__$1));
});
foundation.test.components.datagrid.__GT_t396911 = (function __GT_t396911(input__$1,dupe_button__$1,meta396912){return (new foundation.test.components.datagrid.t396911(input__$1,dupe_button__$1,meta396912));
});
}
return (new foundation.test.components.datagrid.t396911(input,dupe_button,null));
});
foundation.test.components.datagrid.datagrid_template = (function datagrid_template(input,id,model,coll){var dom396925 = document.createElement("div");dom396925.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom396925.setAttribute("id",id);
} else
{}
dom396925.appendChild((function (){var dom396926 = document.createElement("div");dom396926.className = "panel-heading";
dom396926.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_breadcrumb.call(null)));
dom396926.appendChild((function (){var dom396927 = document.createElement("form");dom396927.className = "form-inline pull-right";
dom396927.appendChild((function (){var dom396928 = document.createElement("div");dom396928.className = "form-group";
dom396928.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_filter.call(null)));
return dom396928;
})());
return dom396927;
})());
return dom396926;
})());
dom396925.appendChild((function (){var dom396929 = document.createElement("div");dom396929.className = "panel-body";
dom396929.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_table.call(null,model,coll)));
return dom396929;
})());
dom396925.appendChild((function (){var dom396930 = document.createElement("div");dom396930.className = "panel-footer";
dom396930.appendChild((function (){var dom396931 = document.createElement("div");dom396931.className = "form-inline";
dom396931.appendChild((function (){var dom396932 = document.createElement("div");dom396932.className = "form-group";
dom396932.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.new_button.call(null,input)));
return dom396932;
})());
dom396931.appendChild((function (){var dom396933 = document.createElement("div");dom396933.className = "form-group";
dom396933.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.save_button.call(null,input)));
return dom396933;
})());
dom396931.appendChild((function (){var dom396934 = document.createElement("div");dom396934.className = "form-group";
dom396934.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.delete_button.call(null,input)));
return dom396934;
})());
dom396931.appendChild((function (){var dom396935 = document.createElement("div");dom396935.className = "form-group";
dom396935.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.dupe_button.call(null,input)));
return dom396935;
})());
return dom396931;
})());
return dom396930;
})());
return dom396925;
});
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (x){var x__$1 = this;return cljs.core.cons.call(null,cljs.core.first.call(null,x__$1),cljs.core.rest.call(null,x__$1));
});
HTMLCollection.prototype.cljs$core$ISeq$ = true;
HTMLCollection.prototype.cljs$core$ISeq$_first$arity$1 = (function (x){var x__$1 = this;return (x__$1[0]);
});
HTMLCollection.prototype.cljs$core$ISeq$_rest$arity$1 = (function (x){var x__$1 = this;var iter__8921__auto__ = (function iter__396936(s__396937){return (new cljs.core.LazySeq(null,(function (){var s__396937__$1 = s__396937;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__396937__$1);if(temp__4092__auto__)
{var s__396937__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__396937__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__396937__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__396939 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__396938 = 0;while(true){
if((i__396938 < size__8920__auto__))
{var i = cljs.core._nth.call(null,c__8919__auto__,i__396938);cljs.core.chunk_append.call(null,b__396939,(x__$1[i]));
{
var G__396940 = (i__396938 + 1);
i__396938 = G__396940;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__396939),iter__396936.call(null,cljs.core.chunk_rest.call(null,s__396937__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__396939),null);
}
} else
{var i = cljs.core.first.call(null,s__396937__$2);return cljs.core.cons.call(null,(x__$1[i]),iter__396936.call(null,cljs.core.rest.call(null,s__396937__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,cljs.core.range.call(null,x__$1.length));
});
foundation.test.components.datagrid.th_widths = (function th_widths(ths,widths){return cljs.core.reduce.call(null,(function (ws,p__396943){var vec__396944 = p__396943;var width = cljs.core.nth.call(null,vec__396944,0,null);var th = cljs.core.nth.call(null,vec__396944,1,null);var th_width = goog.style.getBounds(th).width;if((width > th_width))
{return cljs.core.conj.call(null,ws,width);
} else
{return cljs.core.conj.call(null,ws,th_width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,widths,ths));
});
foundation.test.components.datagrid.td_widths = (function td_widths(rows){return cljs.core.reduce.call(null,(function (ws,td){return cljs.core.conj.call(null,ws,goog.style.getBounds(td).width);
}),cljs.core.PersistentVector.EMPTY,cljs.core.first.call(null,rows).cells);
});
foundation.test.components.datagrid.full_td_widths = (function full_td_widths(th_widths,ths,row_width,table_width){return cljs.core.reduce.call(null,(function (ws,p__396947){var vec__396948 = p__396947;var width = cljs.core.nth.call(null,vec__396948,0,null);var th = cljs.core.nth.call(null,vec__396948,1,null);var th_width = width;var new_width = (table_width * (width / row_width));if((new_width > width))
{goog.style.setWidth(th,new_width);
return cljs.core.conj.call(null,ws,new_width);
} else
{goog.style.setWidth(th,width);
return cljs.core.conj.call(null,ws,width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,th_widths,ths));
});
foundation.test.components.datagrid.fix_column_widths_BANG_ = (function fix_column_widths_BANG_(){var vec__396967 = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__396949_SHARP_){return document.querySelector(dommy.core.selector.call(null,p1__396949_SHARP_));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".panel-body",".panel-body",1210123755),new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.Keyword(null,"thead","thead",1124231110)], null)));var panel_body = cljs.core.nth.call(null,vec__396967,0,null);var tbody = cljs.core.nth.call(null,vec__396967,1,null);var thead = cljs.core.nth.call(null,vec__396967,2,null);var table_width = goog.style.getBounds(tbody).width;var rows = tbody.rows;var ths = cljs.core.first.call(null,thead.rows).cells;var td_widths = foundation.test.components.datagrid.td_widths.call(null,rows);var th_widths = foundation.test.components.datagrid.th_widths.call(null,ths,td_widths);var row_width = cljs.core.reduce.call(null,cljs.core._PLUS_,th_widths);var th_widths__$1 = foundation.test.components.datagrid.full_td_widths.call(null,th_widths,ths,row_width,table_width);var seq__396968 = cljs.core.seq.call(null,rows);var chunk__396969 = null;var count__396970 = 0;var i__396971 = 0;while(true){
if((i__396971 < count__396970))
{var tr = cljs.core._nth.call(null,chunk__396969,i__396971);var seq__396972_396984 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__396973_396985 = null;var count__396974_396986 = 0;var i__396975_396987 = 0;while(true){
if((i__396975_396987 < count__396974_396986))
{var vec__396976_396988 = cljs.core._nth.call(null,chunk__396973_396985,i__396975_396987);var width_396989 = cljs.core.nth.call(null,vec__396976_396988,0,null);var td_396990 = cljs.core.nth.call(null,vec__396976_396988,1,null);goog.style.setWidth(td_396990,width_396989);
{
var G__396991 = seq__396972_396984;
var G__396992 = chunk__396973_396985;
var G__396993 = count__396974_396986;
var G__396994 = (i__396975_396987 + 1);
seq__396972_396984 = G__396991;
chunk__396973_396985 = G__396992;
count__396974_396986 = G__396993;
i__396975_396987 = G__396994;
continue;
}
} else
{var temp__4092__auto___396995 = cljs.core.seq.call(null,seq__396972_396984);if(temp__4092__auto___396995)
{var seq__396972_396996__$1 = temp__4092__auto___396995;if(cljs.core.chunked_seq_QMARK_.call(null,seq__396972_396996__$1))
{var c__8952__auto___396997 = cljs.core.chunk_first.call(null,seq__396972_396996__$1);{
var G__396998 = cljs.core.chunk_rest.call(null,seq__396972_396996__$1);
var G__396999 = c__8952__auto___396997;
var G__397000 = cljs.core.count.call(null,c__8952__auto___396997);
var G__397001 = 0;
seq__396972_396984 = G__396998;
chunk__396973_396985 = G__396999;
count__396974_396986 = G__397000;
i__396975_396987 = G__397001;
continue;
}
} else
{var vec__396977_397002 = cljs.core.first.call(null,seq__396972_396996__$1);var width_397003 = cljs.core.nth.call(null,vec__396977_397002,0,null);var td_397004 = cljs.core.nth.call(null,vec__396977_397002,1,null);goog.style.setWidth(td_397004,width_397003);
{
var G__397005 = cljs.core.next.call(null,seq__396972_396996__$1);
var G__397006 = null;
var G__397007 = 0;
var G__397008 = 0;
seq__396972_396984 = G__397005;
chunk__396973_396985 = G__397006;
count__396974_396986 = G__397007;
i__396975_396987 = G__397008;
continue;
}
}
} else
{}
}
break;
}
{
var G__397009 = seq__396968;
var G__397010 = chunk__396969;
var G__397011 = count__396970;
var G__397012 = (i__396971 + 1);
seq__396968 = G__397009;
chunk__396969 = G__397010;
count__396970 = G__397011;
i__396971 = G__397012;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__396968);if(temp__4092__auto__)
{var seq__396968__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__396968__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__396968__$1);{
var G__397013 = cljs.core.chunk_rest.call(null,seq__396968__$1);
var G__397014 = c__8952__auto__;
var G__397015 = cljs.core.count.call(null,c__8952__auto__);
var G__397016 = 0;
seq__396968 = G__397013;
chunk__396969 = G__397014;
count__396970 = G__397015;
i__396971 = G__397016;
continue;
}
} else
{var tr = cljs.core.first.call(null,seq__396968__$1);var seq__396978_397017 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__396979_397018 = null;var count__396980_397019 = 0;var i__396981_397020 = 0;while(true){
if((i__396981_397020 < count__396980_397019))
{var vec__396982_397021 = cljs.core._nth.call(null,chunk__396979_397018,i__396981_397020);var width_397022 = cljs.core.nth.call(null,vec__396982_397021,0,null);var td_397023 = cljs.core.nth.call(null,vec__396982_397021,1,null);goog.style.setWidth(td_397023,width_397022);
{
var G__397024 = seq__396978_397017;
var G__397025 = chunk__396979_397018;
var G__397026 = count__396980_397019;
var G__397027 = (i__396981_397020 + 1);
seq__396978_397017 = G__397024;
chunk__396979_397018 = G__397025;
count__396980_397019 = G__397026;
i__396981_397020 = G__397027;
continue;
}
} else
{var temp__4092__auto___397028__$1 = cljs.core.seq.call(null,seq__396978_397017);if(temp__4092__auto___397028__$1)
{var seq__396978_397029__$1 = temp__4092__auto___397028__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__396978_397029__$1))
{var c__8952__auto___397030 = cljs.core.chunk_first.call(null,seq__396978_397029__$1);{
var G__397031 = cljs.core.chunk_rest.call(null,seq__396978_397029__$1);
var G__397032 = c__8952__auto___397030;
var G__397033 = cljs.core.count.call(null,c__8952__auto___397030);
var G__397034 = 0;
seq__396978_397017 = G__397031;
chunk__396979_397018 = G__397032;
count__396980_397019 = G__397033;
i__396981_397020 = G__397034;
continue;
}
} else
{var vec__396983_397035 = cljs.core.first.call(null,seq__396978_397029__$1);var width_397036 = cljs.core.nth.call(null,vec__396983_397035,0,null);var td_397037 = cljs.core.nth.call(null,vec__396983_397035,1,null);goog.style.setWidth(td_397037,width_397036);
{
var G__397038 = cljs.core.next.call(null,seq__396978_397029__$1);
var G__397039 = null;
var G__397040 = 0;
var G__397041 = 0;
seq__396978_397017 = G__397038;
chunk__396979_397018 = G__397039;
count__396980_397019 = G__397040;
i__396981_397020 = G__397041;
continue;
}
}
} else
{}
}
break;
}
{
var G__397042 = cljs.core.next.call(null,seq__396968__$1);
var G__397043 = null;
var G__397044 = 0;
var G__397045 = 0;
seq__396968 = G__397042;
chunk__396969 = G__397043;
count__396970 = G__397044;
i__396971 = G__397045;
continue;
}
}
} else
{return null;
}
}
break;
}
});
foundation.test.components.datagrid.set_datagrid_height_BANG_ = (function set_datagrid_height_BANG_(){var content = document.querySelector("div.twitter-stats.panel.panel-default");var header_height = 126;var footer_height = 81;var max_height = (((document.body.clientHeight - (goog.style.getBounds(content).height + content.offsetTop)) - header_height) - footer_height);return goog.style.setHeight((dommy.utils.__GT_Array.call(null,document.getElementsByTagName("tbody"))[0]),(cljs.core.quot.call(null,max_height,60) * 60));
});
foundation.test.components.datagrid.datagrid = (function datagrid(input,id,state){if(typeof foundation.test.components.datagrid.t397049 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t397049 = (function (state,id,input,datagrid,meta397050){
this.state = state;
this.id = id;
this.input = input;
this.datagrid = datagrid;
this.meta397050 = meta397050;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t397049.cljs$lang$type = true;
foundation.test.components.datagrid.t397049.cljs$lang$ctorStr = "foundation.test.components.datagrid/t397049";
foundation.test.components.datagrid.t397049.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t397049");
});
foundation.test.components.datagrid.t397049.prototype.foundation$app$ui$IResizeable$ = true;
foundation.test.components.datagrid.t397049.prototype.foundation$app$ui$IResizeable$_resize$arity$2 = (function (_,e){var self__ = this;
var ___$1 = this;foundation.test.components.datagrid.set_datagrid_height_BANG_.call(null);
if((goog.style.getBounds((dommy.utils.__GT_Array.call(null,document.getElementsByTagName("tbody"))[0])).width > e.target.getSize().width))
{return foundation.test.components.datagrid.fix_column_widths_BANG_.call(null);
} else
{return null;
}
});
foundation.test.components.datagrid.t397049.prototype.foundation$app$ui$IWithChildren$ = true;
foundation.test.components.datagrid.t397049.prototype.foundation$app$ui$IWithChildren$_with_children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#new","#new",1015055887)], null);
});
foundation.test.components.datagrid.t397049.prototype.foundation$app$ui$IPostProcess$ = true;
foundation.test.components.datagrid.t397049.prototype.foundation$app$ui$IPostProcess$_post_process$arity$1 = (function (_){var self__ = this;
var ___$1 = this;foundation.test.components.datagrid.set_datagrid_height_BANG_.call(null);
return foundation.test.components.datagrid.fix_column_widths_BANG_.call(null);
});
foundation.test.components.datagrid.t397049.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t397049.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.datagrid.datagrid_template.call(null,self__.input,self__.id,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.Keyword(null,"collection","collection",3567559184).cljs$core$IFn$_invoke$arity$1(self__.state));
});
foundation.test.components.datagrid.t397049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_397051){var self__ = this;
var _397051__$1 = this;return self__.meta397050;
});
foundation.test.components.datagrid.t397049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_397051,meta397050__$1){var self__ = this;
var _397051__$1 = this;return (new foundation.test.components.datagrid.t397049(self__.state,self__.id,self__.input,self__.datagrid,meta397050__$1));
});
foundation.test.components.datagrid.__GT_t397049 = (function __GT_t397049(state__$1,id__$1,input__$1,datagrid__$1,meta397050){return (new foundation.test.components.datagrid.t397049(state__$1,id__$1,input__$1,datagrid__$1,meta397050));
});
}
return (new foundation.test.components.datagrid.t397049(state,id,input,datagrid,null));
});

//# sourceMappingURL=datagrid.js.map