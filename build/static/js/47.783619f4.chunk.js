(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{2179:function(e,t,a){},2620:function(e,t,a){"use strict";a.r(t);var n=a(6),i=a(15),s=a(16),o=a(22),r=a(21),l=a(23),c=a(17),u=a(0),h=a.n(u),p=a(45),x=a(2166),m=a(2173),d=a(42),g=a(401),b={className:"isoCardBoxLayout",autoSize:!0,verticalCompact:!0,cols:{lg:96,md:96,sm:96,xs:96,xxs:96},breakpoints:{lg:1200,md:996,sm:768,xs:480,xxs:200},draggableHandle:".isoDragBox",isResizable:!0,rowHeight:1,margin:[0,0]},z=10,y=10,v=function(e,t){var a=-1;return e.forEach(function(e,n){e.uid.toString()===t.toString()&&(a=n)}),a},B=(a(2175),a(2177),a(2179),g.a.deleteBox),f=g.a.saveBox,C=Object(x.WidthProvider)(x.Responsive),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).onLayoutChange=a.onLayoutChange.bind(Object(c.a)(Object(c.a)(a))),a.breakPointChange=a.breakPointChange.bind(Object(c.a)(Object(c.a)(a))),a.autoHeight=a.autoHeight.bind(Object(c.a)(Object(c.a)(a))),a.state={breakpoint:"lg"},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.setState({allBox:this.props.allBox})}},{key:"componentWillReceiveProps",value:function(e){e.reload&&this.setState({allBox:e.allBox})}},{key:"onLayoutChange",value:function(e){var t=this,a=this.state.allBox;e.forEach(function(e){var n=v(a,e.i);if(-1!==n){var i=e.x,s=e.y,o=e.h,r=e.w,l=e.i;a[n].size[t.state.breakpoint]={x:i,y:s,h:o,w:r,i:l}}}),this.setState({allBox:a}),this.props.saveBox(a)}},{key:"breakPointChange",value:function(e){this.setState({breakpoint:e})}},{key:"autoHeight",value:function(e,t){var a=t.height,n=this.state,i=n.allBox,s=n.breakpoint,o=this;0!==a&&(i.map(function(t){var n=v(i,e);return i[n].size[s].h!==Math.ceil(a/b.rowHeight)&&(i[n].size[s].h=Math.ceil(a/b.rowHeight)),null}),setTimeout(function(){o.setState({allBox:i})},1))}},{key:"render",value:function(){var e=this,t=this.state.allBox,a=this.props.deleteBox,i=function(e){var t=[],a=[],i=[],s=[],o=[];return e.forEach(function(e){t.push(Object(n.a)({},e,{x:parseInt(e.size.md.x,10),y:parseInt(e.size.md.y,10),h:parseInt(e.size.md.h,10),w:parseInt(e.size.md.w,10),i:e.size.md.i.toString()})),a.push(Object(n.a)({},e,{x:parseInt(e.size.lg.x,10),y:parseInt(e.size.lg.y,10),h:parseInt(e.size.lg.h,10),w:parseInt(e.size.lg.w,10),i:e.size.lg.i.toString()})),i.push(Object(n.a)({},e,{x:parseInt(e.size.sm.x,10),y:parseInt(e.size.sm.y,10),h:parseInt(e.size.sm.h,10),w:parseInt(e.size.sm.w,10),i:e.size.sm.i.toString()})),s.push(Object(n.a)({},e,{x:parseInt(e.size.xs.x,10),y:parseInt(e.size.xs.y,10),h:parseInt(e.size.xs.h,10),w:parseInt(e.size.xs.w,10),i:e.size.xs.i.toString()})),o.push(Object(n.a)({},e,{x:parseInt(e.size.xxs.x,10),y:parseInt(e.size.xxs.y,10),h:parseInt(e.size.xxs.h,10),w:parseInt(e.size.xxs.w,10),i:e.size.xxs.i.toString()}))}),{md:t,lg:a,sm:i,xs:s,xxs:o}}(t),s=Object(n.a)({},b,{layouts:i,onDragStop:this.onLayoutChange,onResizeStop:this.onLayoutChange,onBreakpointChange:this.breakPointChange});return h.a.createElement("div",{className:"isoCardBoxContentWrapper"},h.a.createElement(C,s,i.md.map(function(t){return h.a.createElement("div",{className:"isomorphicSingleCardHolder",key:t.i},h.a.createElement(m.ReactElementResize,{debounceTimeout:200,onResize:function(a){e.autoHeight(t.i,a)}},function(e){return h.a.createElement("div",{className:"isomorphicSingleCard",style:{paddingRight:"".concat(Math.ceil(z),"px"),paddingBottom:"".concat(Math.ceil(y),"px")}},h.a.createElement("div",{className:"isoCardBox"},h.a.createElement("div",{className:"isoCardBoxHeader"},h.a.createElement("h3",null,t.title),h.a.createElement("div",{className:"isoCardControl"},h.a.createElement("button",{className:"isoDeleteBtn",onClick:function(){return a(t.i)}},h.a.createElement(d.a,{type:"delete"})),h.a.createElement("button",{className:"isoDragBox",type:"button"},h.a.createElement(d.a,{type:"swap"})))),h.a.createElement("div",{className:"isoCardBoxBody"},h.a.createElement("p",null,t.content),t.reactComponent?h.a.createElement(t.reactComponent,null):null)))}))})))}}]),t}(u.Component);t.default=Object(p.b)(function(e){return{allBox:e.Box.allBox,reload:e.Box.reload}},{saveBox:f,deleteBox:B})(w)}}]);
//# sourceMappingURL=47.783619f4.chunk.js.map