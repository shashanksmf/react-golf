(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1307:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.text,n=void 0===t?"":t;return r.a.createElement("div",{className:"isoHelperText",style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",padding:"20px"}},r.a.createElement("h3",null,n))}},2641:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(15),i=n(16),o=n(22),c=n(21),l=n(23),s=n(0),d=n.n(s),u=n(44),p=n(2558),m=n(229),v=n(1307),b=n(418),f=n(419),h=n(28),w=n(167),y=n(101),I=n(99),E=n(27),x=n(26),g=n(2),j=n(138),O=n(31);function S(){var e=Object(E.a)(["\n  width: auto;\n  overflow: inherit;\n  position: relative;\n  .isoInvoiceTable {\n    table {\n      tbody {\n        tr {\n          td {\n            .isoInvoiceBtnView {\n              display: flex;\n              flex-direction: row;\n              > a {\n                margin: ",";\n              }\n            }\n          }\n          &:hover {\n            .isoInvoiceBtnView {\n              ",";\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .invoiceListTable {\n    .ant-dropdown-menu-item,\n    .ant-dropdown-menu-submenu-title {\n      &:hover {\n        background-color: ",";\n      }\n    }\n\n    .invoiceViewBtn {\n      color: ",";\n\n      &:hover {\n        color: ",";\n      }\n    }\n\n    .invoiceDltBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n  }\n"]);return S=function(){return e},e}function k(){var e=Object(E.a)(["\n  padding: 0 5px;\n  height: 20px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n  background-color: ",";\n  font-size: 12px;\n  color: #ffffff;\n  text-transform: capitalize;\n\n  &.pending {\n    background-color: ",";\n  }\n\n  &.shipped {\n    background-color: ",";\n  }\n\n  &.delivered {\n    background-color: ",";\n  }\n"]);return k=function(){return e},e}function N(){var e=Object(E.a)(["\n  .isoInvoiceTableBtn {\n    display: flex;\n    margin-bottom: 20px;\n    a {\n      margin-left: auto;\n    }\n  }\n"]);return N=function(){return e},e}var B=Object(x.b)(j.default)(N()),D=x.b.span(k(),Object(g.palette)("primary",0),Object(g.palette)("error",0),Object(g.palette)("warning",0),Object(g.palette)("success",0)),T=x.b.div(S(),function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},"",Object(g.palette)("secondary",1),Object(g.palette)("text",3),Object(g.palette)("primary",0),Object(g.palette)("error",0),Object(g.palette)("error",2)),C=Object(O.a)(B),K=Object(O.a)(T),V=n(74),A=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={selected:[]},n.columns=[{title:"Number",dataIndex:"number",rowKey:"number",width:"15%",render:function(e){return d.a.createElement("span",null,e)}},{title:"Bill From",dataIndex:"billFrom",rowKey:"billFrom",width:"25%",render:function(e){return d.a.createElement("span",null,e)}},{title:"Bill TO",dataIndex:"billTo",rowKey:"billTo",width:"22%",render:function(e){return d.a.createElement("span",null,e)}},{title:"Total Cost",dataIndex:"totalCost",rowKey:"totalCost",width:"15%",render:function(e){return d.a.createElement("span",null,e)}},{title:"Status",dataIndex:"orderStatus",rowKey:"orderStatus",width:"13%",render:function(e,t){var n;return"shipped"===e||"Shipped"===e||"SHIPPED"===e?n="shipped":"delivered"===e||"Delivered"===e||"DELIVERED"===e?n="delivered":"pending"!==e&&"Pending"!==e&&"PENDING"!==e||(n="pending"),d.a.createElement(D,{className:n},e)}},{title:"",dataIndex:"view",rowKey:"view",width:"10%",render:function(e,t){return d.a.createElement("div",{className:"isoInvoiceBtnView"},d.a.createElement(p.a,{to:"".concat(n.props.match.path,"/").concat(t.id)},d.a.createElement(y.b,{color:"primary",className:"invoiceViewBtn"},"View"))," ",d.a.createElement(y.b,{className:"invoiceDltBtn",onClick:function(){Object(m.a)("error","1 invoice deleted"),n.props.deleteInvoice([t.key]),n.setState({selected:[]})}},d.a.createElement("i",{className:"ion-android-delete"})))}}],n.getnewInvoiceId=function(){return(new Date).getTime()},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialInvoices,n=e.initData;t||n()}},{key:"render",value:function(){var e=this,t=this.props,n=t.match,a=t.invoices,r=t.deleteInvoice,i=this.state.selected,o={hideDefaultSelections:!0,selectedRowKeys:i,onChange:function(t){return e.setState({selected:t})},selections:[{key:"all-data",text:"Select All Invoices",onSelect:function(){return e.setState({selected:e.props.invoices.map(function(e){return e.key})})}},{key:"no-data",text:"Unselect all",onSelect:function(){return e.setState({selected:[]})}},{key:"delete-selected",text:"Delete selected",onSelect:function(t){i.length>0&&(r(i),e.setState({selected:[]}),Object(m.a)("error","".concat(i.length," invoices deleted")))}}],onSelection:function(t){return e.setState({selected:t})}};return d.a.createElement(b.default,null,d.a.createElement(f.default,null,d.a.createElement(h.a,{id:"sidebar.invoice"})),d.a.createElement(C,null,d.a.createElement("div",{className:"isoInvoiceTableBtn"},d.a.createElement(p.a,{to:"".concat(n.path,"/").concat(this.getnewInvoiceId())},d.a.createElement(y.b,{type:"primary",className:"mateAddInvoiceBtn"},"Add Invoice"))),d.a.createElement(K,{title:"Invoices"},0===a.length?d.a.createElement(v.a,{text:"No Invoices"}):d.a.createElement("div",{className:"isoInvoiceTable"},d.a.createElement(w.a,{style:{width:"100%"}},d.a.createElement(V.b,{rowSelection:o,dataSource:a,columns:this.columns,pagination:!1,className:"invoiceListTable"}))))))}}]),t}(s.Component);t.default=Object(u.b)(function(e){return Object(a.a)({},e.Invoices)},I.a)(A)}}]);
//# sourceMappingURL=92.6dcf6a14.chunk.js.map