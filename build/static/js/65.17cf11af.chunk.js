(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1614:function(e,t,n){"use strict";function o(e,t){if("undefined"===typeof window)return 0;var n=t?"scrollTop":"scrollLeft",o=e===window,r=o?e[t?"pageYOffset":"pageXOffset"]:e[n];return o&&"number"!==typeof r&&(r=document.documentElement[n]),r}n.d(t,"a",function(){return o})},2200:function(e,t,n){},2626:function(e,t,n){"use strict";n.r(t);var o=n(15),r=n(16),l=n(22),c=n(21),a=n(23),i=n(0),u=n.n(i),s=n(65),p=n(77),f=n(8),b=n.n(f),m=n(54),d=n(92),v=n.n(d),y=n(19),h=n(1614);function w(e){return(w="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e,t){return!t||"object"!==w(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e,t,n,o){var r=n-t;return(e/=o/2)<1?r/2*e*e*e+t:r/2*((e-=2)*e*e+2)+t};function k(){return window}var C=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=O(this,T(t).call(this,e))).getCurrentScrollTop=function(){var e=(n.props.target||k)();return e===window?window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop:e.scrollTop},n.scrollToTop=function(e){var t=n.getCurrentScrollTop(),o=Date.now();v()(function e(){var r=Date.now()-o;n.setScrollTop(S(r,t,0,450)),r<450?v()(e):n.setScrollTop(0)}),(n.props.onClick||function(){})(e)},n.handleScroll=function(){var e=n.props,t=e.visibilityHeight,o=e.target,r=void 0===o?k:o,l=Object(h.a)(r(),!0);n.setState({visible:l>t})},n.renderBackTop=function(e){var t=e.getPrefixCls,o=n.props,r=o.prefixCls,l=o.className,c=void 0===l?"":l,a=o.children,u=t("back-top",r),p=b()(u,c),f=i.createElement("div",{className:"".concat(u,"-content")},i.createElement("div",{className:"".concat(u,"-icon")})),d=Object(m.a)(n.props,["prefixCls","className","children","visibilityHeight","target","visible"]),v=("visible"in n.props?n.props.visible:n.state.visible)?i.createElement("div",E({},d,{className:p,onClick:n.scrollToTop}),a||f):null;return i.createElement(s.a,{component:"",transitionName:"fade"},v)},n.state={visible:!1},n}var n,o,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,i["Component"]),n=t,(o=[{key:"setScrollTop",value:function(e){var t=(this.props.target||k)();t===window?(document.body.scrollTop=e,document.documentElement.scrollTop=e):t.scrollTop=e}},{key:"componentDidMount",value:function(){var e=this.props.target||k;this.scrollEvent=Object(p.a)(e(),"scroll",this.handleScroll),this.handleScroll()}},{key:"componentWillUnmount",value:function(){this.scrollEvent&&this.scrollEvent.remove()}},{key:"render",value:function(){return i.createElement(y.a,null,this.renderBackTop)}}])&&g(n.prototype,o),r&&g(n,r),t}();C.defaultProps={visibilityHeight:400};n(2200);n.d(t,"default",function(){return N});var N=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(a.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{className:"isoContent"},u.a.createElement("h2",null,"Back to top with Gray"),u.a.createElement(C,null),"Scroll down to see the bottom-right",u.a.createElement("strong",{style:{color:"rgba(64, 64, 64, 0.6)"}}," gray "),"button."),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("div",{className:"isoContent"},u.a.createElement("h2",null,"Back to top with Blue"),u.a.createElement(C,null,u.a.createElement("div",{className:"ant-back-top-inner"},"UP")),"Scroll down to see the bottom-right",u.a.createElement("strong",{style:{color:"#1088e9"}}," blue "),"button."))}}]),t}(i.Component)}}]);
//# sourceMappingURL=65.17cf11af.chunk.js.map