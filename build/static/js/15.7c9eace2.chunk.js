(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1183:function(e,a,t){"use strict";var r=t(1270),n=t(29),l=t(25),o=t(2),i=t(13);function c(){var e=Object(n.a)(["\n  &.ant-select {\n    box-sizing: border-box;\n    display: inline-block;\n    position: relative;\n    color: ",";\n    font-size: 13px;\n\n    .ant-select-selection {\n      background-color: #fff;\n      border-radius: 4px;\n      border: 1px solid ",";\n      ",";\n\n      &.ant-select-selection--single {\n        height: 35px;\n        position: relative;\n        cursor: pointer;\n      }\n\n      .ant-select-selection__rendered {\n        margin-left: 10px;\n        margin-right: 10px;\n        line-height: 33px;\n\n        .ant-select-selection-selected-value {\n          float: ",";\n          padding: ",";\n        }\n      }\n\n      .ant-select-arrow {\n        right: ",";\n        left: ",";\n      }\n\n      &:hover {\n        border-color: ",";\n      }\n    }\n\n    &.ant-select-focused {\n      .ant-select-selection {\n        &:focus,\n        &:active {\n          border-color: ",";\n          outline: 0;\n          box-shadow: 0 0 0 2px ",";\n        }\n      }\n    }\n\n    &.ant-select-open {\n      .ant-select-selection {\n        border-color: ",";\n        outline: 0;\n        box-shadow: 0 0 0 2px ",";\n      }\n    }\n\n    .ant-select-selection--multiple > ul > li,\n    .ant-select-selection--multiple .ant-select-selection__rendered > ul > li {\n      margin-top: 4px;\n      height: 26px;\n      line-height: 26px;\n    }\n\n    .ant-select-selection--multiple .ant-select-selection__choice {\n      background-color: ",";\n      color: ",";\n    }\n\n    .ant-select-tree li a {\n      font-size: 13px;\n      color: ",";\n    }\n  }\n"]);return c=function(){return e},e}var s=t(31);t.d(a,"a",function(){return h});var d,u=(d=r.a,Object(l.b)(d)(c(),Object(o.palette)("text",1),Object(o.palette)("border",0),Object(i.c)(),function(e){return"rtl"===e["data-rtl"]?"right":"left"},function(e){return"rtl"===e["data-rtl"]?"0 0 0 14px":"0 14px 0 0"},function(e){return"rtl"===e["data-rtl"]?"inherit":"7px"},function(e){return"rtl"===e["data-rtl"]?"7px":"inherit"},Object(o.palette)("primary",0),Object(o.palette)("primary",0),Object(o.palette)("primary",3),Object(o.palette)("primary",0),Object(o.palette)("primary",3),Object(o.palette)("grayscale",4),Object(o.palette)("text",1),Object(o.palette)("text",1))),p=Object(s.a)(u),h=r.a.Option;a.b=p},2621:function(e,a,t){"use strict";t.r(a);var r=t(15),n=t(16),l=t(23),o=t(22),i=t(24),c=t(0),s=t.n(c),d=t(1862),u=t(1863),p=t(121),h=t(222),b=(t(103),t(120)),g=t(1203),m=[{labels:["January","February","March","April","May","June","July1"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[65,59,80,81,56,55,40]}]},{labels:["January","February","March","April","May","June","July1"],datasets:[{label:"Waggled Stroke Gained Total",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[65,59,80,81,56,55,40]}]},{labels:["January","February","March","April","May","June","July1"],datasets:[{label:"My First dataset 2",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[65,59,80,81,56,55,40]}]},{labels:["January","February","March","April","May","June","July1"],datasets:[{label:"My First dataset 3",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[65,59,80,81,56,55,40]}]},{labels:["January","February","March","April","May","June","July1"],datasets:[{label:"My First dataset 4",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[65,59,80,81,56,55,40]}]}],v={height:350},y=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(l.a)(this,Object(o.a)(a).call(this,e))).state={newData:{labels:[],datasets:[]}},t}return Object(i.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=m[isNaN(parseInt(this.props.val))?0:parseInt(this.props.val)];return s.a.createElement("div",null,s.a.createElement(g.a,{data:e,width:v.width,height:v.height,options:{maintainAspectRatio:!1}}))}}]),a}(c.Component),f=t(1306),E=(t(412),t(411)),x=t(6),C={labels:["OCT 17","NOV 17","DEC 17","JAN 18","FEB 18","MAR 18","APR 18","MAY 18"],datasets:[{title:"Waggle Gained Total",color:"light-blue",values:[25,40,30,35,8,52,17,-4]},{title:"Average Performance",color:"violet",values:[25,50,-10,15,18,32,27,14]},{title:"Your Performance",color:"blue",values:[15,20,-3,-15,58,12,-17,37]}]},k={},O=new Date,G=(new Date((new Date).setMonth(1,1)),O.getTime()/1e3);G=Math.floor(G-G%86400).toFixed(1);for(var j=0;j<375;j++)k[G]=Math.floor(6*Math.random())+1,G=Math.floor(G-86400).toFixed(1);var w=Object(x.a)({header:"Bar Chart",title:"",parent:"#frappeBarChart",parentId:"frappeBarChart",type:"bar",data:C},{height:250,format_tooltip_x:function(e){return(e+"").toUpperCase()},format_tooltip_y:function(e){return e+" pts"}}),S={header:"Updateable Chart",title:"",parent:"#frappeupdatedChart",parentId:"frappeupdatedChart",data:C,type:"line",show_dots:0,heatline:1},M=(t(1417),c.Component,t(32)),F=(t(31),t(1183)),J=t(45),B=t(472),_=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(i)))).state={firstGraphVal:"firstgraph",secondGraphVal:"secondgraph"},t.handleFirstChange=function(e){t.setState({firstGraphVal:e})},t.handleSecondChange=function(e){t.setState({secondGraphVal:e})},t}return Object(i.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){this.props.getDataTrends()}},{key:"render",value:function(){var e=this.props.Overview,a=(e=void 0===e?[]:e).recollectionData,t=(a=void 0===a?[]:a).data_recollection;console.log("redux trends data",t);var r=this.state.firstGraphVal,n=this.state.secondGraphVal,l=h.a.rowStyle,o=h.a.colStyle;console.log(h.a);s.a.createElement(M.b,{onClick:this.handleMenuClickToLink},s.a.createElement(M.c,{key:"1"},"Waggled Stroke Gained Total"),s.a.createElement(M.c,{key:"2"},"Waggled Stroke Gained driving"),s.a.createElement(M.c,{key:"3"},"Waggled Stroke Gained Approch Play"),s.a.createElement(M.c,{key:"4"},"Waggled Stroke Gained Short Game"),s.a.createElement(M.c,{key:"5"},"Waggled Stroke Gained Putting"),s.a.createElement(M.c,{key:"6"},"Official Stroke Vs. Field"),s.a.createElement(M.c,{key:"7"},"Official GIR Vs. Field"),s.a.createElement(M.c,{key:"8"},"Official Fairways Vs. Field"));var i=s.a.createElement(F.b,{defaultValue:r,onChange:this.handleFirstChange,style:{width:"100%"}},s.a.createElement(F.a,{value:"firstgraph",disabled:!0},"First Graph"),s.a.createElement(F.a,{value:"1"},"Spider Hcp"),s.a.createElement(F.a,{value:"2"},"Stroke"),s.a.createElement(F.a,{value:"3"},"Fairways"),s.a.createElement(F.a,{value:"4"},"GIR"),s.a.createElement(F.a,{value:"5"},"Putts"),s.a.createElement(F.a,{value:"6"},"Pair 3 averages"),s.a.createElement(F.a,{value:"7"},"Pair 4 averages"),s.a.createElement(F.a,{value:"8"},"Pair 5 averages"),s.a.createElement(F.a,{value:"8"},"% Birdie converstion"),s.a.createElement(F.a,{value:"8"},"% Pair converstion"),s.a.createElement(F.a,{value:"8"},"Greenside Dispersion"),s.a.createElement(F.a,{value:"8"},"Wasted Shots"),s.a.createElement(F.a,{value:"8"},"Quality %"),s.a.createElement(F.a,{value:"8"},"Green Reading"),s.a.createElement(F.a,{value:"8"},"Stroke Gained")),c=s.a.createElement(F.b,{defaultValue:n,onChange:this.handleSecondChange,style:{width:"100%"}},s.a.createElement(F.a,{value:"secondgraph",disabled:!0},"Second Graph"),s.a.createElement(F.a,{value:"1"},"Strokes gained Total"),s.a.createElement(F.a,{value:"2"},"SG tee to green"),s.a.createElement(F.a,{value:"3"},"SG off the tee"),s.a.createElement(F.a,{value:"4"},"SG lay ups"),s.a.createElement(F.a,{value:"5"},"SG To Green"),s.a.createElement(F.a,{value:"6"},"SG Greenside"));return console.log("secondGraphVal",n),s.a.createElement(d.a,{style:l,gutter:10,justify:"start"},s.a.createElement(u.a,{md:24,sm:24,xs:24,style:o},s.a.createElement(b.default,{title:""},s.a.createElement(p.default,{style:{margin:"0",display:"flow-root"}},s.a.createElement(u.a,{md:12,sm:8,xs:8,xl:8,style:o},i),s.a.createElement(u.a,{md:12,sm:8,xs:8,xl:8,style:o},c),s.a.createElement(u.a,{md:6,sm:4,xs:4,xl:4,style:o},s.a.createElement("input",{type:"date",name:"from_date",style:{width:"100%",height:"33px"}})),s.a.createElement(u.a,{md:6,sm:4,xs:4,xl:4,style:o},s.a.createElement("input",{type:"date",name:"to_date",style:{width:"100%",height:"33px"}})),s.a.createElement(u.a,{md:12,sm:24,xs:24,xl:24,style:o},s.a.createElement(y,{val:r})),s.a.createElement(u.a,{md:12,sm:24,xs:24,xl:24,style:o},s.a.createElement(y,{val:n}))))))}}]),a}(c.Component);a.default=Object(J.b)(function(e){return e},B.a)(_)}}]);
//# sourceMappingURL=15.7c9eace2.chunk.js.map