(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{2589:function(e,t,n){"use strict";n.r(t);var r=n(15),l=n(16),a=n(22),i=n(21),o=n(23),c=n(0),u=n.n(c),m=n(968),s=n(972),f=n(118),p=n(419),d=n(138),E=n(418),b=n(117),y=n(228),v=n(28),h=n(8),g=n.n(h),O=n(19);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&(n[r[l]]=e[r[l]])}return n},S=function(e){return c.createElement(O.a,null,function(t){var n,r,l=t.getPrefixCls,a=e.prefixCls,i=e.className,o=e.color,u=void 0===o?"":o,m=e.children,s=e.pending,f=e.dot,p=x(e,["prefixCls","className","color","children","pending","dot"]),d=l("timeline",a),E=g()((j(n={},"".concat(d,"-item"),!0),j(n,"".concat(d,"-item-pending"),s),n),i),b=g()((j(r={},"".concat(d,"-item-head"),!0),j(r,"".concat(d,"-item-head-custom"),f),j(r,"".concat(d,"-item-head-").concat(u),!0),r));return c.createElement("li",w({},p,{className:E}),c.createElement("div",{className:"".concat(d,"-item-tail")}),c.createElement("div",{className:b,style:{borderColor:/blue|red|green/.test(u)?void 0:u}},f),c.createElement("div",{className:"".concat(d,"-item-content")},m))})};S.defaultProps={color:"blue",pending:!1};var C=S;function P(e){return(P="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return!t||"object"!==P(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&(n[r[l]]=e[r[l]])}return n},J=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=A(this,I(t).apply(this,arguments))).renderTimeline=function(t){var n,r=t.getPrefixCls,l=e.props,a=l.prefixCls,i=l.pending,o=void 0===i?null:i,u=l.pendingDot,m=l.children,s=l.className,p=l.reverse,d=l.mode,E=D(l,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),b=r("timeline",a),y="boolean"===typeof o?null:o,v=g()(b,(T(n={},"".concat(b,"-pending"),!!o),T(n,"".concat(b,"-reverse"),!!p),T(n,"".concat(b,"-").concat(d),!!d),n),s),h=o?c.createElement(C,{pending:!!o,dot:u||c.createElement(f.a,{type:"loading"})},y):null,O=(p?[h].concat(k(c.Children.toArray(m).reverse())):[].concat(k(c.Children.toArray(m)),[h])).filter(function(e){return!!e}),w=c.Children.count(O),j="".concat(b,"-item-last"),x=c.Children.map(O,function(e,t){return c.cloneElement(e,{className:g()([e.props.className,!p&&o?t===w-2?j:"":t===w-1?j:"","alternate"===d?"".concat(b,t%2===0?"-item-left":"-item-right"):"right"===d?"".concat(b,"-item-right"):""])})});return c.createElement("ul",N({},E,{className:v}),x)},e}var n,r,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,c["Component"]),n=t,(r=[{key:"render",value:function(){return c.createElement(O.a,null,this.renderTimeline)}}])&&_(n.prototype,r),l&&_(n,l),t}();J.Item=C,J.defaultProps={reverse:!1,mode:""};var M=J,R=n(27),q=n(26),B=n(2);function F(){var e=Object(R.a)(["\n  &.ant-timeline {\n    .ant-timeline-item-content {\n      font-size: 13px;\n      color: ",";\n      padding: ",";\n    }\n    .ant-timeline-item-tail {\n      left: ",";\n      right: ",";\n    }\n    .ant-timeline-item-head-custom {\n      left: ",";\n      right: ",";\n    }\n  }\n"]);return F=function(){return e},e}var G=function(e){return Object(q.b)(e)(F(),Object(B.palette)("text",3),function(e){return"rtl"===e["data-rtl"]?"0 24px 10px 0":"0 0 10px 24px"},function(e){return"rtl"===e["data-rtl"]?"inherit":"4px"},function(e){return"rtl"===e["data-rtl"]?"4px":"inherit"},function(e){return"rtl"===e["data-rtl"]?"inherit":"5px"},function(e){return"rtl"===e["data-rtl"]?"5px":"inherit"})},H=n(31),K=G(M),L=G(M.Item),Q=Object(H.a)(L),U=Object(H.a)(K);n.d(t,"default",function(){return V});var V=function(e){function t(){return Object(r.a)(this,t),Object(a.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=y.a.rowStyle,t=y.a.colStyle,n=y.a.gutter;return u.a.createElement(E.default,null,u.a.createElement(p.default,null,u.a.createElement(v.a,{id:"uiElements.timeline.timeline"})),u.a.createElement(m.a,{style:e,gutter:n,justify:"start"},u.a.createElement(s.a,{md:12,sm:12,xs:24,style:t},u.a.createElement(d.default,{title:u.a.createElement(v.a,{id:"uiElements.timeline.basicExample"}),subtitle:u.a.createElement(v.a,{id:"uiElements.timeline.basicTimeline"})},u.a.createElement(b.default,null,u.a.createElement(U,null,u.a.createElement(Q,null,u.a.createElement(v.a,{id:"uiElements.timeline.createServiceSite"})),u.a.createElement(Q,null,u.a.createElement(v.a,{id:"uiElements.timeline.solveInitialNetwork"})),u.a.createElement(Q,null,u.a.createElement(v.a,{id:"uiElements.timeline.technicalTesting"})),u.a.createElement(Q,null,u.a.createElement(v.a,{id:"uiElements.timeline.networkProblemSolved"})))))),u.a.createElement(s.a,{md:12,sm:12,xs:24,style:t},u.a.createElement(d.default,{title:u.a.createElement(v.a,{id:"uiElements.timeline.colorExample"}),subtitle:u.a.createElement(v.a,{id:"uiElements.timeline.colorExampleContent"})},u.a.createElement(b.default,null,u.a.createElement(U,null,u.a.createElement(Q,{color:"green"},"Create a services site 2015-09-01"),u.a.createElement(Q,{color:"green"},"Create a services site 2015-09-01"),u.a.createElement(Q,{color:"red"},u.a.createElement("p",null,"Solve initial network problems 1"),u.a.createElement("p",null,"Solve initial network problems 2"),u.a.createElement("p",null,"Solve initial network problems 3 2015-09-01")),u.a.createElement(Q,null,u.a.createElement("p",null,"Technical testing 1"),u.a.createElement("p",null,"Technical testing 2"),u.a.createElement("p",null,"Technical testing 3 2015-09-01"))))))),u.a.createElement(m.a,{style:e,gutter:n,justify:"start"},u.a.createElement(s.a,{md:12,sm:12,xs:24,style:t},u.a.createElement(d.default,{title:u.a.createElement(v.a,{id:"uiElements.timeline.custom"}),subtitle:u.a.createElement(v.a,{id:"uiElements.timeline.customContent"})},u.a.createElement(b.default,null,u.a.createElement(U,null,u.a.createElement(Q,null,"Create a services site 2015-09-01"),u.a.createElement(Q,null,"Solve initial network problems 2015-09-01"),u.a.createElement(Q,{dot:u.a.createElement(f.a,{type:"clock-circle-o",style:{fontSize:"16px"}}),color:"red"},"Technical testing 2015-09-01"),u.a.createElement(Q,null,"Network problems being solved 2015-09-01"))))),u.a.createElement(s.a,{md:12,sm:12,xs:24,style:t},u.a.createElement(d.default,{title:u.a.createElement(v.a,{id:"uiElements.timeline.lastNode"}),subtitle:u.a.createElement(v.a,{id:"uiElements.timeline.lastNodeContent"})},u.a.createElement(b.default,null,u.a.createElement(U,{pending:u.a.createElement("a",{href:"# "},u.a.createElement(v.a,{id:"uiElements.timeline.seeMore"}))},u.a.createElement(Q,null,"Create a services site 2015-09-01"),u.a.createElement(Q,null,"Solve initial network problems 2015-09-01"),u.a.createElement(Q,null,"Technical testing 2015-09-01")))))))}}]),t}(c.Component)}}]);
//# sourceMappingURL=74.201b59c3.chunk.js.map