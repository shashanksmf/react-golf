(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{2212:function(e,t,n){},2631:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(15),i=n(16),l=n(23),d=n(22),c=n(24),o=n(17),u=n(0),p=n.n(u),s=n(45),m=n(1862),b=n(1863),f=n(42),x=n.n(f),C=n(103),h=n(412),j=n(120),y=n(411),g=n(2209),O=n.n(g),v=n(305),w=n(1330),k=n(413),E=(n(2212),n(29)),T=n(25),N=n(2),V=n(31);function I(){var e=Object(E.a)(["\n  .isoCardInfoForm {\n    display: flex;\n    width: 100%;\n    flex-wrap: wrap;\n\n    .isoCardInput {\n      margin-bottom: 10px;\n\n      &.name {\n        order: 2;\n        margin-bottom: 0;\n      }\n\n      &.expiry,\n      &.cvc {\n        width: calc(100% / 2 - 5px);\n      }\n\n      &.expiry {\n        color: #000000;\n        margin: ",";\n      }\n\n      &::-webkit-input-placeholder {\n        text-align: ",";\n        color: ",";\n      }\n\n      &:-moz-placeholder {\n        text-align: ",";\n        color: ",";\n      }\n\n      &::-moz-placeholder {\n        text-align: ",";\n        color: ",";\n      }\n      &:-ms-input-placeholder {\n        text-align: ",";\n        color: ",";\n      }\n    }\n  }\n"]);return I=function(){return e},e}function z(){var e=Object(E.a)(["\n  margin-bottom: 20px;\n\n  .jp-card-container {\n    margin: 40px auto 60px;\n  }\n"]);return z=function(){return e},e}function S(){var e=Object(E.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  margin: 10px 0 30px;\n"]);return S=function(){return e},e}var A=T.b.div(S()),F=T.b.div(z()),D=T.b.div(I(),function(e){return"rtl"===e["data-rtl"]?"0 0 10px 10px":"0 10px 10px 0"},function(e){return"rtl"===e["data-rtl"]?"right":"left"},Object(N.palette)("grayscale",0),function(e){return"rtl"===e["data-rtl"]?"right":"left"},Object(N.palette)("grayscale",0),function(e){return"rtl"===e["data-rtl"]?"right":"left"},Object(N.palette)("grayscale",0),function(e){return"rtl"===e["data-rtl"]?"right":"left"},Object(N.palette)("grayscale",0)),J=Object(V.a)(D),W=n(221),B=n(13);function q(){var e=Object(E.a)(["\n  p {\n    font-size: 13px;\n    color: ",";\n    line-height: 1.5;\n  }\n"]);return q=function(){return e},e}function G(){var e=Object(E.a)(["\n  .ant-modal-header {\n    padding: 13px 16px;\n    background: ",";\n    color: ",";\n    border-bottom: 1px solid ",";\n    ",";\n  }\n\n  .ant-modal-title {\n    margin: 0;\n    font-size: 15px;\n    line-height: 21px;\n    font-weight: 500;\n    color: ",";\n  }\n\n  .ant-modal-close {\n    right: ",";\n    left: ",";\n  }\n\n  .ant-modal-body {\n    padding: 16px;\n    font-size: 13px;\n    color: ",";\n    line-height: 1.5;\n  }\n\n  .ant-modal-footer {\n    border-top: 1px solid ",";\n    padding: 10px 16px 10px 10px;\n    text-align: right;\n    ",";\n\n    .ant-btn-lg {\n      padding: 0 35px;\n      font-size: 14px;\n      height: 42px;\n    }\n\n    button + button {\n      margin: ",";\n    }\n  }\n\n  .ant-confirm {\n    .ant-modal-body {\n      padding: 30px 35px;\n    }\n  }\n\n  .ant-confirm-body {\n    .ant-confirm-title {\n      color: ",";\n      font-weight: 700;\n      font-size: 15px;\n    }\n\n    .ant-confirm-content {\n      margin-left: 42px;\n      font-size: 13px;\n      color: ",";\n      margin-top: 8px;\n    }\n  }\n"]);return G=function(){return e},e}T.b.div(q(),Object(N.palette)("text",3));var H,K=(H=k.a,Object(T.b)(H)(G(),Object(N.palette)("grayscale",5),Object(N.palette)("text",0),Object(N.palette)("border",0),Object(B.a)("4px 4px 0 0"),Object(N.palette)("text",0),function(e){return"rtl"===e["data-rtl"]?"inherit":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"inherit"},Object(N.palette)("text",3),Object(N.palette)("border",0),Object(B.a)("0 0 4px 4px"),function(e){return"rtl"===e["data-rtl"]?"0 8px 0 0":"0 0 0 8px"},Object(N.palette)("text",0),Object(N.palette)("text",3))),L=Object(V.a)(K),M=Object(W.c)(w.a),P=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.modalType,n=e.editView,a=e.handleCancel,r=e.selectedCard,i=e.submitCard,l=e.updateCard;this.columns=[{title:"Number",dataIndex:"number",key:"number"},{title:"Full Name",dataIndex:"name",key:"name"},{title:"Expiry",dataIndex:"expiry",key:"expiry"},{title:"CVC",dataIndex:"cvc",key:"cvc"}];var d={container:"card-wrapper",formInputsNames:{number:"number",expiry:"expiry",cvc:"cvc",name:"name"},initialValues:r,classes:{valid:"valid-input",invalid:"valid-input"},formatting:!0,placeholders:{number:"\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022",expiry:"\u2022\u2022/\u2022\u2022",cvc:"\u2022\u2022\u2022",name:"Full Name"}};return p.a.createElement(L,{title:"edit"===t?"Edit Card":"Add Card",visible:n,onCancel:a,cancelText:"Cancel",onOk:function(){i()},okText:"edit"===t?"Edit Card":"Add Card"},p.a.createElement(F,{id:"card-wrapper",className:"isoCardWrapper"}),p.a.createElement(O.a,d,p.a.createElement(J,null,p.a.createElement(v.a,{className:"isoCardInfoForm"},this.columns.map(function(e,t){var n=e.key,a=e.title;return p.a.createElement(M,{placeholder:a,type:"text",className:"isoCardInput ".concat(n),onChange:function(e){r[n]=e.target.value,l(r)},name:n,key:t})})))))}}]),t}(u.Component),Q=n(222),R=n(284),U=n(278),X=n(440),Y=R.a.addCard,Z=R.a.editCard,$=R.a.deleteCard,_=R.a.restoreCards,ee=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).addColumn=n.addColumn.bind(Object(o.a)(Object(o.a)(n))),n.editColumn=n.editColumn.bind(Object(o.a)(Object(o.a)(n))),n.handleCancel=n.handleCancel.bind(Object(o.a)(Object(o.a)(n))),n.submitCard=n.submitCard.bind(Object(o.a)(Object(o.a)(n))),n.updateCard=n.updateCard.bind(Object(o.a)(Object(o.a)(n))),n.columns=Object(U.a)(n.editColumn,n.props.deleteCard),n.state={editView:!1,selectedCard:null,modalType:""},n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"editColumn",value:function(e){this.setState({editView:!0,selectedCard:x()(e),modalType:"edit"})}},{key:"addColumn",value:function(){this.setState({editView:!0,selectedCard:{id:(new Date).getTime(),key:(new Date).getTime(),number:"",name:"",expiry:"",cvc:""},modalType:"add"})}},{key:"handleCancel",value:function(){this.setState({editView:!1,selectedCard:null})}},{key:"submitCard",value:function(e){"edit"===this.state.modalType?this.props.editCard(this.state.selectedCard):this.props.addCard(this.state.selectedCard),this.setState({editView:!1,selectedCard:null})}},{key:"updateCard",value:function(e){this.setState({selectedCard:e})}},{key:"render",value:function(){var e=Q.a.rowStyle,t=Q.a.colStyle,n=Q.a.gutter,a=this.state,r=a.editView,i=a.selectedCard,l=a.modalType,d=x()(this.props.cards);return d.forEach(function(e,t){d[t].number=function(e){for(var t=e.length,n="",a=0;a<t-4;a++)n="*".concat(n);for(var r=t-4;r<t;r++)n="".concat(n).concat(e.charAt(r));return n}(e.number)}),p.a.createElement(y.default,null,p.a.createElement(h.default,null,"Cards"),p.a.createElement(m.a,{style:e,gutter:n,justify:"start"},p.a.createElement(b.a,{md:24,sm:24,xs:24,style:t},p.a.createElement(j.default,null,p.a.createElement(A,{className:"isoButtonWrapper"},p.a.createElement(C.b,{type:"primary",className:"",onClick:this.addColumn},"Add New Card")),p.a.createElement(X.a,{columns:this.columns,dataSource:d}),i?p.a.createElement(P,{editView:r,modalType:l,selectedCard:i,handleCancel:this.handleCancel,submitCard:this.submitCard,updateCard:this.updateCard}):""))))}}]),t}(u.Component);t.default=Object(s.b)(function(e){return Object(a.a)({},e.Cards)},{addCard:Y,editCard:Z,deleteCard:$,restoreCards:_})(ee)}}]);
//# sourceMappingURL=80.45bc35ff.chunk.js.map