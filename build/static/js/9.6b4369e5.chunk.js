(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1189:function(e,a,t){"use strict";var r=t(163),n=t(31),l=t(26),o=t(2),c=t(13);function i(){var e=Object(n.a)(["\n  &.ant-select {\n    box-sizing: border-box;\n    display: inline-block;\n    position: relative;\n    color: ",";\n    font-size: 13px;\n\n    .ant-select-selection {\n      background-color: #fff;\n      border-radius: 4px;\n      border: 1px solid ",";\n      ",";\n\n      &.ant-select-selection--single {\n        height: 35px;\n        position: relative;\n        cursor: pointer;\n      }\n\n      .ant-select-selection__rendered {\n        margin-left: 10px;\n        margin-right: 10px;\n        line-height: 33px;\n\n        .ant-select-selection-selected-value {\n          float: ",";\n          padding: ",";\n        }\n      }\n\n      .ant-select-arrow {\n        right: ",";\n        left: ",";\n      }\n\n      &:hover {\n        border-color: ",";\n      }\n    }\n\n    &.ant-select-focused {\n      .ant-select-selection {\n        &:focus,\n        &:active {\n          border-color: ",";\n          outline: 0;\n          box-shadow: 0 0 0 2px ",";\n        }\n      }\n    }\n\n    &.ant-select-open {\n      .ant-select-selection {\n        border-color: ",";\n        outline: 0;\n        box-shadow: 0 0 0 2px ",";\n      }\n    }\n\n    .ant-select-selection--multiple > ul > li,\n    .ant-select-selection--multiple .ant-select-selection__rendered > ul > li {\n      margin-top: 4px;\n      height: 26px;\n      line-height: 26px;\n    }\n\n    .ant-select-selection--multiple .ant-select-selection__choice {\n      background-color: ",";\n      color: ",";\n    }\n\n    .ant-select-tree li a {\n      font-size: 13px;\n      color: ",";\n    }\n  }\n"]);return i=function(){return e},e}var d=t(28);t.d(a,"a",function(){return h});var s,u=(s=r.a,Object(l.b)(s)(i(),Object(o.palette)("text",1),Object(o.palette)("border",0),Object(c.c)(),function(e){return"rtl"===e["data-rtl"]?"right":"left"},function(e){return"rtl"===e["data-rtl"]?"0 0 0 14px":"0 14px 0 0"},function(e){return"rtl"===e["data-rtl"]?"inherit":"7px"},function(e){return"rtl"===e["data-rtl"]?"7px":"inherit"},Object(o.palette)("primary",0),Object(o.palette)("primary",0),Object(o.palette)("primary",3),Object(o.palette)("primary",0),Object(o.palette)("primary",3),Object(o.palette)("grayscale",4),Object(o.palette)("text",1),Object(o.palette)("text",1))),p=Object(d.a)(u),h=r.a.Option;a.b=p},2620:function(e,a,t){"use strict";t.r(a);var r=t(15),n=t(16),l=t(24),o=t(22),c=t(23),i=t(0),d=t.n(i),s=t(1862),u=t(1863),p=t(120),h=t(222),b=(t(60),t(119)),g=t(1204),m=[{labels:["January","February","March","April","May","June","July1"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[65,59,80,81,56,55,40]}]},{labels:["January","February","March","April","May","June","July1"],datasets:[{label:"Waggled Stroke Gained Total",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[65,59,80,81,56,55,40]}]},{labels:["January","February","March","April","May","June","July1"],datasets:[{label:"My First dataset 2",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[65,59,80,81,56,55,40]}]},{labels:["January","February","March","April","May","June","July1"],datasets:[{label:"My First dataset 3",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[65,59,80,81,56,55,40]}]},{labels:["January","February","March","April","May","June","July1"],datasets:[{label:"My First dataset 4",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[65,59,80,81,56,55,40]}]}],f={height:350},v=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(l.a)(this,Object(o.a)(a).call(this,e))).state={newData:{labels:[],datasets:[]}},t}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=m[isNaN(parseInt(this.props.val))?0:parseInt(this.props.val)];return d.a.createElement("div",null,d.a.createElement(g.a,{data:e,width:f.width,height:f.height,options:{maintainAspectRatio:!1}}))}}]),a}(i.Component),y=t(1306),E=(t(412),t(411)),k=t(6),x={labels:["OCT 17","NOV 17","DEC 17","JAN 18","FEB 18","MAR 18","APR 18","MAY 18"],datasets:[{title:"Waggle Gained Total",color:"light-blue",values:[25,40,30,35,8,52,17,-4]},{title:"Average Performance",color:"violet",values:[25,50,-10,15,18,32,27,14]},{title:"Your Performance",color:"blue",values:[15,20,-3,-15,58,12,-17,37]}]},C={},O=new Date,j=(new Date((new Date).setMonth(1,1)),O.getTime()/1e3);j=Math.floor(j-j%86400).toFixed(1);for(var G=0;G<375;G++)C[j]=Math.floor(6*Math.random())+1,j=Math.floor(j-86400).toFixed(1);var S=Object(k.a)({header:"Bar Chart",title:"",parent:"#frappeBarChart",parentId:"frappeBarChart",type:"bar",data:x},{height:250,format_tooltip_x:function(e){return(e+"").toUpperCase()},format_tooltip_y:function(e){return e+" pts"}}),w={header:"Updateable Chart",title:"",parent:"#frappeupdatedChart",parentId:"frappeupdatedChart",data:x,type:"line",show_dots:0,heatline:1},M=(t(1417),function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={currentIndex:2},t.addData=function(){var e=t.state.currentIndex;e+=1;var a=x.datasets[e%3];t.updatedChart.add_data_point(a.values,a.title),t.setState({currentIndex:e})},t.removeData=function(){var e=t.state.currentIndex;e>0&&(t.updatedChart.remove_data_point(e),t.setState({currentIndex:e-1}))},t}return Object(c.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){new y.a(S),this.updatedChart=new y.a(w)}},{key:"render",value:function(){h.a.rowStyle,h.a.colStyle,h.a.gutter;return d.a.createElement(E.default,{className:"isoMapPage"},d.a.createElement(b.default,{title:"Main Graph"},d.a.createElement(p.default,null,d.a.createElement("div",{id:w.parentId}))))}}]),a}(i.Component)),F=t(33),J=(t(28),t(1189)),W=t(46),V=t(472),_=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={firstGraphVal:"firstgraph",secondGraphVal:"secondgraph"},t.handleFirstChange=function(e){t.setState({firstGraphVal:e})},t.handleSecondChange=function(e){t.setState({secondGraphVal:e})},t}return Object(c.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){this.props.getDataTrends()}},{key:"render",value:function(){var e=this.props.Overview,a=(e=void 0===e?[]:e).recollectionData,t=(a=void 0===a?[]:a).data_recollection;console.log("redux trends data",t);var r=this.state.firstGraphVal,n=this.state.secondGraphVal,l=h.a.rowStyle,o=h.a.colStyle;console.log(h.a);d.a.createElement(F.b,{onClick:this.handleMenuClickToLink},d.a.createElement(F.c,{key:"1"},"Waggled Stroke Gained Total"),d.a.createElement(F.c,{key:"2"},"Waggled Stroke Gained driving"),d.a.createElement(F.c,{key:"3"},"Waggled Stroke Gained Approch Play"),d.a.createElement(F.c,{key:"4"},"Waggled Stroke Gained Short Game"),d.a.createElement(F.c,{key:"5"},"Waggled Stroke Gained Putting"),d.a.createElement(F.c,{key:"6"},"Official Stroke Vs. Field"),d.a.createElement(F.c,{key:"7"},"Official GIR Vs. Field"),d.a.createElement(F.c,{key:"8"},"Official Fairways Vs. Field"));var c=d.a.createElement(J.b,{defaultValue:r,onChange:this.handleFirstChange,style:{width:"100%"}},d.a.createElement(J.a,{value:"firstgraph",disabled:!0},"First Graph"),d.a.createElement(J.a,{value:"1"},"Waggled Stroke Gained Total"),d.a.createElement(J.a,{value:"2"},"Waggled Stroke Gained driving"),d.a.createElement(J.a,{value:"3"},"Waggled Stroke Gained Approch Play"),d.a.createElement(J.a,{value:"4"},"Waggled Stroke Gained Short Game"),d.a.createElement(J.a,{value:"5"},"Waggled Stroke Gained Putting"),d.a.createElement(J.a,{value:"6"},"Official Stroke Vs. Field"),d.a.createElement(J.a,{value:"7"},"Official GIR Vs. Field"),d.a.createElement(J.a,{value:"8"},"Official Fairways Vs. Field")),i=d.a.createElement(J.b,{defaultValue:n,onChange:this.handleSecondChange,style:{width:"100%"}},d.a.createElement(J.a,{value:"secondgraph",disabled:!0},"Second Graph"),d.a.createElement(J.a,{value:"1"},"Strokes gained Total"),d.a.createElement(J.a,{value:"2"},"SG tee to green"),d.a.createElement(J.a,{value:"3"},"SG off the tee"),d.a.createElement(J.a,{value:"4"},"SG lay ups"),d.a.createElement(J.a,{value:"5"},"SG Greenside"),d.a.createElement(J.a,{value:"6"},"SG Putting"));return console.log("secondGraphVal",n),d.a.createElement(s.a,{style:l,gutter:10,justify:"start"},d.a.createElement(u.a,{md:24,sm:24,xs:24,style:o},d.a.createElement(b.default,{title:""},d.a.createElement(p.default,{style:{margin:"0",display:"flow-root"}},d.a.createElement(u.a,{md:12,sm:24,xs:24,xl:12,style:o},c),d.a.createElement(u.a,{md:12,sm:24,xs:24,xl:12,style:o},i),d.a.createElement(u.a,{md:24,sm:24,xs:24,xl:24,style:o},d.a.createElement(M,null)),d.a.createElement(u.a,{md:12,sm:24,xs:24,xl:12,style:o},d.a.createElement(v,{val:r})),d.a.createElement(u.a,{md:12,sm:24,xs:24,xl:12,style:o},d.a.createElement(v,{val:n}))))))}}]),a}(i.Component);a.default=Object(W.b)(function(e){return e},V.a)(_)}}]);
//# sourceMappingURL=9.6b4369e5.chunk.js.map