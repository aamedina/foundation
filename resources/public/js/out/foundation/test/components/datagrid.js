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
foundation.test.components.datagrid.datagrid_filter = (function datagrid_filter(){var dom394708 = document.createElement("div");dom394708.className = "autocomplete";
dom394708.appendChild((function (){var dom394709 = document.createElement("input");dom394709.className = "form-control";
if("text")
{dom394709.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom394709.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom394709;
})());
return dom394708;
});
foundation.test.components.datagrid.datagrid_header = (function datagrid_header(columns){var dom394716 = document.createElement("thead");dom394716.setAttribute("id","datagrid-header");
dom394716.appendChild((function (){var dom394717 = document.createElement("tr");dom394717.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__394718(s__394719){return (new cljs.core.LazySeq(null,(function (){var s__394719__$1 = s__394719;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__394719__$1);if(temp__4092__auto__)
{var s__394719__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__394719__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__394719__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__394721 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__394720 = 0;while(true){
if((i__394720 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__394720);cljs.core.chunk_append.call(null,b__394721,foundation.test.cells.th.call(null,col));
{
var G__394722 = (i__394720 + 1);
i__394720 = G__394722;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__394721),iter__394718.call(null,cljs.core.chunk_rest.call(null,s__394719__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__394721),null);
}
} else
{var col = cljs.core.first.call(null,s__394719__$2);return cljs.core.cons.call(null,foundation.test.cells.th.call(null,col),iter__394718.call(null,cljs.core.rest.call(null,s__394719__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom394717;
})());
return dom394716;
});
foundation.test.components.datagrid.datagrid_row = (function datagrid_row(model,columns){var dom394728 = document.createElement("tr");dom394728.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__394729(s__394730){return (new cljs.core.LazySeq(null,(function (){var s__394730__$1 = s__394730;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__394730__$1);if(temp__4092__auto__)
{var s__394730__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__394730__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__394730__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__394732 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__394731 = 0;while(true){
if((i__394731 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__394731);cljs.core.chunk_append.call(null,b__394732,foundation.test.cells.td.call(null,col,model));
{
var G__394733 = (i__394731 + 1);
i__394731 = G__394733;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__394732),iter__394729.call(null,cljs.core.chunk_rest.call(null,s__394730__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__394732),null);
}
} else
{var col = cljs.core.first.call(null,s__394730__$2);return cljs.core.cons.call(null,foundation.test.cells.td.call(null,col,model),iter__394729.call(null,cljs.core.rest.call(null,s__394730__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom394728;
});
foundation.test.components.datagrid.datagrid_body = (function datagrid_body(coll,columns){if(typeof foundation.test.components.datagrid.t394741 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t394741 = (function (columns,coll,datagrid_body,meta394742){
this.columns = columns;
this.coll = coll;
this.datagrid_body = datagrid_body;
this.meta394742 = meta394742;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t394741.cljs$lang$type = true;
foundation.test.components.datagrid.t394741.cljs$lang$ctorStr = "foundation.test.components.datagrid/t394741";
foundation.test.components.datagrid.t394741.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t394741");
});
foundation.test.components.datagrid.t394741.prototype.dommy$template$PElement$ = true;
foundation.test.components.datagrid.t394741.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template.node.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.datagrid.t394741.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t394741.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody#datagrid-body.datagrid-tbody","tbody#datagrid-body.datagrid-tbody",3858987303),(function (){var iter__8921__auto__ = (function iter__394744(s__394745){return (new cljs.core.LazySeq(null,(function (){var s__394745__$1 = s__394745;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__394745__$1);if(temp__4092__auto__)
{var s__394745__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__394745__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__394745__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__394747 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__394746 = 0;while(true){
if((i__394746 < size__8920__auto__))
{var model = cljs.core._nth.call(null,c__8919__auto__,i__394746);cljs.core.chunk_append.call(null,b__394747,foundation.test.components.datagrid.datagrid_row.call(null,model,self__.columns));
{
var G__394748 = (i__394746 + 1);
i__394746 = G__394748;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__394747),iter__394744.call(null,cljs.core.chunk_rest.call(null,s__394745__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__394747),null);
}
} else
{var model = cljs.core.first.call(null,s__394745__$2);return cljs.core.cons.call(null,foundation.test.components.datagrid.datagrid_row.call(null,model,self__.columns),iter__394744.call(null,cljs.core.rest.call(null,s__394745__$2)));
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
foundation.test.components.datagrid.t394741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_394743){var self__ = this;
var _394743__$1 = this;return self__.meta394742;
});
foundation.test.components.datagrid.t394741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_394743,meta394742__$1){var self__ = this;
var _394743__$1 = this;return (new foundation.test.components.datagrid.t394741(self__.columns,self__.coll,self__.datagrid_body,meta394742__$1));
});
foundation.test.components.datagrid.__GT_t394741 = (function __GT_t394741(columns__$1,coll__$1,datagrid_body__$1,meta394742){return (new foundation.test.components.datagrid.t394741(columns__$1,coll__$1,datagrid_body__$1,meta394742));
});
}
return (new foundation.test.components.datagrid.t394741(columns,coll,datagrid_body,null));
});
foundation.test.components.datagrid.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom394760 = document.createElement("ol");dom394760.className = "breadcrumb";
dom394760.appendChild((function (){var dom394761 = document.createElement("li");dom394761.className = "active";
dom394761.setAttribute("id","account");
dom394761.appendChild((function (){var dom394762 = document.createElement("div");dom394762.className = "arrow-down";
return dom394762;
})());
dom394761.appendChild((function (){var dom394763 = document.createElement("a");dom394763.appendChild(document.createTextNode("Accounts"));
return dom394763;
})());
dom394761.appendChild((function (){var dom394764 = document.createElement("div");dom394764.className = "arrow-up";
return dom394764;
})());
return dom394761;
})());
dom394760.appendChild((function (){var dom394765 = document.createElement("li");dom394765.className = "hidden";
dom394765.setAttribute("id","campaign");
dom394765.appendChild((function (){var dom394766 = document.createElement("a");dom394766.appendChild(document.createTextNode("Campaigns"));
return dom394766;
})());
return dom394765;
})());
dom394760.appendChild((function (){var dom394767 = document.createElement("li");dom394767.className = "hidden";
dom394767.setAttribute("id","line_item");
dom394767.appendChild((function (){var dom394768 = document.createElement("a");dom394768.appendChild(document.createTextNode("Line Items"));
return dom394768;
})());
return dom394767;
})());
dom394760.appendChild((function (){var dom394769 = document.createElement("li");dom394769.className = "hidden";
dom394769.setAttribute("id","promoted_tweet");
dom394769.appendChild((function (){var dom394770 = document.createElement("a");dom394770.appendChild(document.createTextNode("Promoted Products"));
return dom394770;
})());
return dom394769;
})());
return dom394760;
});
foundation.test.components.datagrid.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.test.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.test.components.datagrid.datagrid_header.call(null,cols),foundation.test.components.datagrid.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.test.components.datagrid.new_button = (function new_button(input){if(typeof foundation.test.components.datagrid.t394774 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t394774 = (function (input,new_button,meta394775){
this.input = input;
this.new_button = new_button;
this.meta394775 = meta394775;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t394774.cljs$lang$type = true;
foundation.test.components.datagrid.t394774.cljs$lang$ctorStr = "foundation.test.components.datagrid/t394774";
foundation.test.components.datagrid.t394774.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t394774");
});
foundation.test.components.datagrid.t394774.prototype.dommy$template$PElement$ = true;
foundation.test.components.datagrid.t394774.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template._elem.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.datagrid.t394774.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.datagrid.t394774.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (_,e){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,self__.input,new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"create","create",3956577390),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),new cljs.core.Keyword(null,"model","model",1117974171),cljs.core.PersistentArrayMap.EMPTY], true, false));
});
foundation.test.components.datagrid.t394774.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t394774.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#new.btn.btn-success.btn-sm","button#new.btn.btn-success.btn-sm",634778506),"New"], null);
});
foundation.test.components.datagrid.t394774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_394776){var self__ = this;
var _394776__$1 = this;return self__.meta394775;
});
foundation.test.components.datagrid.t394774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_394776,meta394775__$1){var self__ = this;
var _394776__$1 = this;return (new foundation.test.components.datagrid.t394774(self__.input,self__.new_button,meta394775__$1));
});
foundation.test.components.datagrid.__GT_t394774 = (function __GT_t394774(input__$1,new_button__$1,meta394775){return (new foundation.test.components.datagrid.t394774(input__$1,new_button__$1,meta394775));
});
}
return (new foundation.test.components.datagrid.t394774(input,new_button,null));
});
foundation.test.components.datagrid.datagrid_template = (function datagrid_template(input,id,model,coll){var dom394791 = document.createElement("div");dom394791.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom394791.setAttribute("id",id);
} else
{}
dom394791.appendChild((function (){var dom394792 = document.createElement("div");dom394792.className = "panel-heading";
dom394792.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_breadcrumb.call(null)));
dom394792.appendChild((function (){var dom394793 = document.createElement("form");dom394793.className = "form-inline pull-right";
dom394793.appendChild((function (){var dom394794 = document.createElement("div");dom394794.className = "form-group";
dom394794.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_filter.call(null)));
return dom394794;
})());
return dom394793;
})());
return dom394792;
})());
dom394791.appendChild((function (){var dom394795 = document.createElement("div");dom394795.className = "panel-body";
dom394795.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_table.call(null,model,coll)));
return dom394795;
})());
dom394791.appendChild((function (){var dom394796 = document.createElement("div");dom394796.className = "panel-footer";
dom394796.appendChild((function (){var dom394797 = document.createElement("div");dom394797.className = "form-inline";
dom394797.appendChild((function (){var dom394798 = document.createElement("div");dom394798.className = "form-group";
dom394798.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.new_button.call(null,input)));
return dom394798;
})());
dom394797.appendChild((function (){var dom394799 = document.createElement("div");dom394799.className = "form-group";
dom394799.appendChild((function (){var dom394800 = document.createElement("button");dom394800.className = "btn btn-info btn-sm disabled";
dom394800.setAttribute("id","save");
dom394800.appendChild(document.createTextNode("Save"));
return dom394800;
})());
return dom394799;
})());
dom394797.appendChild((function (){var dom394801 = document.createElement("div");dom394801.className = "form-group";
dom394801.appendChild((function (){var dom394802 = document.createElement("button");dom394802.className = "btn btn-danger btn-sm disabled";
dom394802.setAttribute("id","delete");
dom394802.appendChild(document.createTextNode("Delete"));
return dom394802;
})());
return dom394801;
})());
dom394797.appendChild((function (){var dom394803 = document.createElement("div");dom394803.className = "form-group";
dom394803.appendChild((function (){var dom394804 = document.createElement("button");dom394804.className = "btn btn-primary btn-sm disabled";
dom394804.setAttribute("id","dupe");
dom394804.appendChild(document.createTextNode("Duplicate"));
return dom394804;
})());
return dom394803;
})());
return dom394797;
})());
return dom394796;
})());
return dom394791;
});
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (x){var x__$1 = this;return cljs.core.cons.call(null,cljs.core.first.call(null,x__$1),cljs.core.rest.call(null,x__$1));
});
HTMLCollection.prototype.cljs$core$ISeq$ = true;
HTMLCollection.prototype.cljs$core$ISeq$_first$arity$1 = (function (x){var x__$1 = this;return (x__$1[0]);
});
HTMLCollection.prototype.cljs$core$ISeq$_rest$arity$1 = (function (x){var x__$1 = this;var iter__8921__auto__ = (function iter__394805(s__394806){return (new cljs.core.LazySeq(null,(function (){var s__394806__$1 = s__394806;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__394806__$1);if(temp__4092__auto__)
{var s__394806__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__394806__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__394806__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__394808 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__394807 = 0;while(true){
if((i__394807 < size__8920__auto__))
{var i = cljs.core._nth.call(null,c__8919__auto__,i__394807);cljs.core.chunk_append.call(null,b__394808,(x__$1[i]));
{
var G__394809 = (i__394807 + 1);
i__394807 = G__394809;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__394808),iter__394805.call(null,cljs.core.chunk_rest.call(null,s__394806__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__394808),null);
}
} else
{var i = cljs.core.first.call(null,s__394806__$2);return cljs.core.cons.call(null,(x__$1[i]),iter__394805.call(null,cljs.core.rest.call(null,s__394806__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,cljs.core.range.call(null,x__$1.length));
});
foundation.test.components.datagrid.th_widths = (function th_widths(ths,widths){return cljs.core.reduce.call(null,(function (ws,p__394812){var vec__394813 = p__394812;var width = cljs.core.nth.call(null,vec__394813,0,null);var th = cljs.core.nth.call(null,vec__394813,1,null);var th_width = goog.style.getBounds(th).width;if((width > th_width))
{return cljs.core.conj.call(null,ws,width);
} else
{return cljs.core.conj.call(null,ws,th_width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,widths,ths));
});
foundation.test.components.datagrid.td_widths = (function td_widths(rows){return cljs.core.reduce.call(null,(function (ws,td){return cljs.core.conj.call(null,ws,goog.style.getBounds(td).width);
}),cljs.core.PersistentVector.EMPTY,cljs.core.first.call(null,rows).cells);
});
foundation.test.components.datagrid.full_td_widths = (function full_td_widths(th_widths,ths,row_width,table_width){return cljs.core.reduce.call(null,(function (ws,p__394816){var vec__394817 = p__394816;var width = cljs.core.nth.call(null,vec__394817,0,null);var th = cljs.core.nth.call(null,vec__394817,1,null);var th_width = width;var new_width = (table_width * (width / row_width));if((new_width > width))
{goog.style.setWidth(th,new_width);
return cljs.core.conj.call(null,ws,new_width);
} else
{goog.style.setWidth(th,width);
return cljs.core.conj.call(null,ws,width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,th_widths,ths));
});
foundation.test.components.datagrid.fix_column_widths_BANG_ = (function fix_column_widths_BANG_(){var vec__394836 = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__394818_SHARP_){return document.querySelector(dommy.core.selector.call(null,p1__394818_SHARP_));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".panel-body",".panel-body",1210123755),new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.Keyword(null,"thead","thead",1124231110)], null)));var panel_body = cljs.core.nth.call(null,vec__394836,0,null);var tbody = cljs.core.nth.call(null,vec__394836,1,null);var thead = cljs.core.nth.call(null,vec__394836,2,null);var table_width = goog.style.getBounds(tbody).width;var rows = tbody.rows;var ths = cljs.core.first.call(null,thead.rows).cells;var td_widths = foundation.test.components.datagrid.td_widths.call(null,rows);var th_widths = foundation.test.components.datagrid.th_widths.call(null,ths,td_widths);var row_width = cljs.core.reduce.call(null,cljs.core._PLUS_,th_widths);var th_widths__$1 = foundation.test.components.datagrid.full_td_widths.call(null,th_widths,ths,row_width,table_width);var seq__394837 = cljs.core.seq.call(null,rows);var chunk__394838 = null;var count__394839 = 0;var i__394840 = 0;while(true){
if((i__394840 < count__394839))
{var tr = cljs.core._nth.call(null,chunk__394838,i__394840);var seq__394841_394853 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__394842_394854 = null;var count__394843_394855 = 0;var i__394844_394856 = 0;while(true){
if((i__394844_394856 < count__394843_394855))
{var vec__394845_394857 = cljs.core._nth.call(null,chunk__394842_394854,i__394844_394856);var width_394858 = cljs.core.nth.call(null,vec__394845_394857,0,null);var td_394859 = cljs.core.nth.call(null,vec__394845_394857,1,null);goog.style.setWidth(td_394859,width_394858);
{
var G__394860 = seq__394841_394853;
var G__394861 = chunk__394842_394854;
var G__394862 = count__394843_394855;
var G__394863 = (i__394844_394856 + 1);
seq__394841_394853 = G__394860;
chunk__394842_394854 = G__394861;
count__394843_394855 = G__394862;
i__394844_394856 = G__394863;
continue;
}
} else
{var temp__4092__auto___394864 = cljs.core.seq.call(null,seq__394841_394853);if(temp__4092__auto___394864)
{var seq__394841_394865__$1 = temp__4092__auto___394864;if(cljs.core.chunked_seq_QMARK_.call(null,seq__394841_394865__$1))
{var c__8952__auto___394866 = cljs.core.chunk_first.call(null,seq__394841_394865__$1);{
var G__394867 = cljs.core.chunk_rest.call(null,seq__394841_394865__$1);
var G__394868 = c__8952__auto___394866;
var G__394869 = cljs.core.count.call(null,c__8952__auto___394866);
var G__394870 = 0;
seq__394841_394853 = G__394867;
chunk__394842_394854 = G__394868;
count__394843_394855 = G__394869;
i__394844_394856 = G__394870;
continue;
}
} else
{var vec__394846_394871 = cljs.core.first.call(null,seq__394841_394865__$1);var width_394872 = cljs.core.nth.call(null,vec__394846_394871,0,null);var td_394873 = cljs.core.nth.call(null,vec__394846_394871,1,null);goog.style.setWidth(td_394873,width_394872);
{
var G__394874 = cljs.core.next.call(null,seq__394841_394865__$1);
var G__394875 = null;
var G__394876 = 0;
var G__394877 = 0;
seq__394841_394853 = G__394874;
chunk__394842_394854 = G__394875;
count__394843_394855 = G__394876;
i__394844_394856 = G__394877;
continue;
}
}
} else
{}
}
break;
}
{
var G__394878 = seq__394837;
var G__394879 = chunk__394838;
var G__394880 = count__394839;
var G__394881 = (i__394840 + 1);
seq__394837 = G__394878;
chunk__394838 = G__394879;
count__394839 = G__394880;
i__394840 = G__394881;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__394837);if(temp__4092__auto__)
{var seq__394837__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__394837__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__394837__$1);{
var G__394882 = cljs.core.chunk_rest.call(null,seq__394837__$1);
var G__394883 = c__8952__auto__;
var G__394884 = cljs.core.count.call(null,c__8952__auto__);
var G__394885 = 0;
seq__394837 = G__394882;
chunk__394838 = G__394883;
count__394839 = G__394884;
i__394840 = G__394885;
continue;
}
} else
{var tr = cljs.core.first.call(null,seq__394837__$1);var seq__394847_394886 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__394848_394887 = null;var count__394849_394888 = 0;var i__394850_394889 = 0;while(true){
if((i__394850_394889 < count__394849_394888))
{var vec__394851_394890 = cljs.core._nth.call(null,chunk__394848_394887,i__394850_394889);var width_394891 = cljs.core.nth.call(null,vec__394851_394890,0,null);var td_394892 = cljs.core.nth.call(null,vec__394851_394890,1,null);goog.style.setWidth(td_394892,width_394891);
{
var G__394893 = seq__394847_394886;
var G__394894 = chunk__394848_394887;
var G__394895 = count__394849_394888;
var G__394896 = (i__394850_394889 + 1);
seq__394847_394886 = G__394893;
chunk__394848_394887 = G__394894;
count__394849_394888 = G__394895;
i__394850_394889 = G__394896;
continue;
}
} else
{var temp__4092__auto___394897__$1 = cljs.core.seq.call(null,seq__394847_394886);if(temp__4092__auto___394897__$1)
{var seq__394847_394898__$1 = temp__4092__auto___394897__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__394847_394898__$1))
{var c__8952__auto___394899 = cljs.core.chunk_first.call(null,seq__394847_394898__$1);{
var G__394900 = cljs.core.chunk_rest.call(null,seq__394847_394898__$1);
var G__394901 = c__8952__auto___394899;
var G__394902 = cljs.core.count.call(null,c__8952__auto___394899);
var G__394903 = 0;
seq__394847_394886 = G__394900;
chunk__394848_394887 = G__394901;
count__394849_394888 = G__394902;
i__394850_394889 = G__394903;
continue;
}
} else
{var vec__394852_394904 = cljs.core.first.call(null,seq__394847_394898__$1);var width_394905 = cljs.core.nth.call(null,vec__394852_394904,0,null);var td_394906 = cljs.core.nth.call(null,vec__394852_394904,1,null);goog.style.setWidth(td_394906,width_394905);
{
var G__394907 = cljs.core.next.call(null,seq__394847_394898__$1);
var G__394908 = null;
var G__394909 = 0;
var G__394910 = 0;
seq__394847_394886 = G__394907;
chunk__394848_394887 = G__394908;
count__394849_394888 = G__394909;
i__394850_394889 = G__394910;
continue;
}
}
} else
{}
}
break;
}
{
var G__394911 = cljs.core.next.call(null,seq__394837__$1);
var G__394912 = null;
var G__394913 = 0;
var G__394914 = 0;
seq__394837 = G__394911;
chunk__394838 = G__394912;
count__394839 = G__394913;
i__394840 = G__394914;
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
foundation.test.components.datagrid.datagrid = (function datagrid(input,id,state){if(typeof foundation.test.components.datagrid.t394918 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t394918 = (function (state,id,input,datagrid,meta394919){
this.state = state;
this.id = id;
this.input = input;
this.datagrid = datagrid;
this.meta394919 = meta394919;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t394918.cljs$lang$type = true;
foundation.test.components.datagrid.t394918.cljs$lang$ctorStr = "foundation.test.components.datagrid/t394918";
foundation.test.components.datagrid.t394918.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t394918");
});
foundation.test.components.datagrid.t394918.prototype.foundation$app$ui$IResizeable$ = true;
foundation.test.components.datagrid.t394918.prototype.foundation$app$ui$IResizeable$_resize$arity$2 = (function (_,e){var self__ = this;
var ___$1 = this;foundation.test.components.datagrid.set_datagrid_height_BANG_.call(null);
if((goog.style.getBounds((dommy.utils.__GT_Array.call(null,document.getElementsByTagName("tbody"))[0])).width > e.target.getSize().width))
{return foundation.test.components.datagrid.fix_column_widths_BANG_.call(null);
} else
{return null;
}
});
foundation.test.components.datagrid.t394918.prototype.foundation$app$ui$IWithChildren$ = true;
foundation.test.components.datagrid.t394918.prototype.foundation$app$ui$IWithChildren$_with_children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#new","#new",1015055887)], null);
});
foundation.test.components.datagrid.t394918.prototype.foundation$app$ui$IPostProcess$ = true;
foundation.test.components.datagrid.t394918.prototype.foundation$app$ui$IPostProcess$_post_process$arity$1 = (function (_){var self__ = this;
var ___$1 = this;foundation.test.components.datagrid.set_datagrid_height_BANG_.call(null);
return foundation.test.components.datagrid.fix_column_widths_BANG_.call(null);
});
foundation.test.components.datagrid.t394918.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t394918.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.datagrid.datagrid_template.call(null,self__.input,self__.id,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.Keyword(null,"collection","collection",3567559184).cljs$core$IFn$_invoke$arity$1(self__.state));
});
foundation.test.components.datagrid.t394918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_394920){var self__ = this;
var _394920__$1 = this;return self__.meta394919;
});
foundation.test.components.datagrid.t394918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_394920,meta394919__$1){var self__ = this;
var _394920__$1 = this;return (new foundation.test.components.datagrid.t394918(self__.state,self__.id,self__.input,self__.datagrid,meta394919__$1));
});
foundation.test.components.datagrid.__GT_t394918 = (function __GT_t394918(state__$1,id__$1,input__$1,datagrid__$1,meta394919){return (new foundation.test.components.datagrid.t394918(state__$1,id__$1,input__$1,datagrid__$1,meta394919));
});
}
return (new foundation.test.components.datagrid.t394918(state,id,input,datagrid,null));
});

//# sourceMappingURL=datagrid.js.map