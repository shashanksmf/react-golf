(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1214:function(n,e,t){"use strict";var r=t(128),o=t(27),i=t(26),a=t(2),l=t(12);function c(){var n=Object(o.a)(["\n  &.ant-select {\n    box-sizing: border-box;\n    display: inline-block;\n    position: relative;\n    color: ",";\n    font-size: 13px;\n\n    .ant-select-selection {\n      background-color: #fff;\n      border-radius: 4px;\n      border: 1px solid ",";\n      ",";\n\n      &.ant-select-selection--single {\n        height: 35px;\n        position: relative;\n        cursor: pointer;\n      }\n\n      .ant-select-selection__rendered {\n        margin-left: 10px;\n        margin-right: 10px;\n        line-height: 33px;\n\n        .ant-select-selection-selected-value {\n          float: ",";\n          padding: ",";\n        }\n      }\n\n      .ant-select-arrow {\n        right: ",";\n        left: ",";\n      }\n\n      &:hover {\n        border-color: ",";\n      }\n    }\n\n    &.ant-select-focused {\n      .ant-select-selection {\n        &:focus,\n        &:active {\n          border-color: ",";\n          outline: 0;\n          box-shadow: 0 0 0 2px ",";\n        }\n      }\n    }\n\n    &.ant-select-open {\n      .ant-select-selection {\n        border-color: ",";\n        outline: 0;\n        box-shadow: 0 0 0 2px ",";\n      }\n    }\n\n    .ant-select-selection--multiple > ul > li,\n    .ant-select-selection--multiple .ant-select-selection__rendered > ul > li {\n      margin-top: 4px;\n      height: 26px;\n      line-height: 26px;\n    }\n\n    .ant-select-selection--multiple .ant-select-selection__choice {\n      background-color: ",";\n      color: ",";\n    }\n\n    .ant-select-tree li a {\n      font-size: 13px;\n      color: ",";\n    }\n  }\n"]);return c=function(){return n},n}var s=t(31);t.d(e,"a",function(){return m});var d,u=(d=r.a,Object(i.b)(d)(c(),Object(a.palette)("text",1),Object(a.palette)("border",0),Object(l.c)(),function(n){return"rtl"===n["data-rtl"]?"right":"left"},function(n){return"rtl"===n["data-rtl"]?"0 0 0 14px":"0 14px 0 0"},function(n){return"rtl"===n["data-rtl"]?"inherit":"7px"},function(n){return"rtl"===n["data-rtl"]?"7px":"inherit"},Object(a.palette)("primary",0),Object(a.palette)("primary",0),Object(a.palette)("primary",3),Object(a.palette)("primary",0),Object(a.palette)("primary",3),Object(a.palette)("grayscale",4),Object(a.palette)("text",1),Object(a.palette)("text",1))),p=Object(s.a)(u),m=r.a.Option;e.b=p},2609:function(n,e,t){"use strict";t.r(e);var r=t(112),o=t(6),i=t(15),a=t(16),l=t(22),c=t(21),s=t(23),d=t(17),u=t(0),p=t.n(u),m=t(968),b=t(972),h=t(440),f=t(1214),g=t(312),x=t(419),v=t(138),C=t(418),y=t(117),w=t(228),k=[{id:"lineNumbers",title:"Line Numbers",trueValue:!0,falseValue:!1,value:!0},{id:"readOnly",title:"Read Only",trueValue:!1,falseValue:!0,value:!0}],M=[{id:"tabSize",title:"Tab Size",options:["2","4","6","8"],value:2},{id:"mode",title:"Language",options:["javascript","xml","markdown","php","python","ruby"],value:"javascript"},{id:"theme",title:"Select themes",options:["default","zenburn","solarized","rubyblue","paraiso-dark","midnight","material","hopscotch","twilight"],value:"zenburn"}],E={basic:"const component = {\n    name: 'Isomorphic',\n    author: 'RedQ Team',\n    website: 'https://isomorphic.redq.io/'\n};",javascript:"const component = {\n    name: 'Isomorphic',\n    author: 'RedQ Team',\n    website: 'https://isomorphic.redq.io/'\n};",markdown:"# Isomorphic\n###This is a RedQ Team production\n[have a look](https://isomorphic.redq.io/)\n  ",xml:"<isomprphic>\n    <to>Tove</to>\n    <name>Isomorphic</name>\n    <author>RedQ Team</author>\n    <website>isomorphic.redq.io</website>\n</isomprphic>",php:'<html>\n <head>\n  <title> v</title>\n </head>\n <body>\n <h1>https://isomorphic.redq.io/</h1>\n <p>This is a RedQ Team production</p>\n <a href="https://isomorphic.redq.io/">visit ou site</a>\n </body>\n</html>\n',python:'\nprint("Isomorphic")\nprint("This is a RedQ Team production")\nprint("visit us https://isomorphic.redq.io ")\n',ruby:'rint "Isomorphic"\nprint "This is a RedQ Team production"\nprint "visit us https://isomorphic.redq.io "\n'},O=t(27),z=t(2391),j=t.n(z),T=(t(1828),t(1639),t(2392),t(2394),t(2398),t(2399),t(2401),t(2403),t(2405),t(2407),t(2409),t(2411),t(2413),t(2415),t(2417),j.a),N=t(26);function q(){var n=Object(O.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n\n  .ant-form-item {\n    display: flex;\n    align-items: center;\n    margin-right: 30px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"]);return q=function(){return n},n}function R(){var n=Object(O.a)(["\n  .CodeMirror {\n    font-family: monospace;\n    height: 300px;\n    position: relative;\n    overflow: hidden;\n    pre {\n      padding: 0 4px;\n      -moz-border-radius: 0;\n      -webkit-border-radius: 0;\n      border-radius: 0;\n      border-width: 0;\n      background: transparent;\n      font-family: inherit;\n      font-size: inherit;\n      margin: 0;\n      white-space: pre;\n      word-wrap: normal;\n      line-height: inherit;\n      color: inherit;\n      z-index: 2;\n      position: relative;\n      overflow: visible;\n      -webkit-tap-highlight-color: transparent;\n      -webkit-font-variant-ligatures: contextual;\n      font-variant-ligatures: contextual;\n    }\n    div.CodeMirror-secondarycursor {\n      border-left: 1px solid silver;\n    }\n  }\n  .CodeMirror-lines {\n    padding: 4px 0;\n    cursor: text;\n    min-height: 1px;\n  }\n  .CodeMirror-scrollbar-filler {\n    background-color: white;\n    position: absolute;\n    z-index: 6;\n    display: none;\n    right: 0;\n    bottom: 0;\n  }\n  .CodeMirror-gutter-filler {\n    background-color: white;\n    position: absolute;\n    z-index: 6;\n    display: none;\n    left: 0;\n    bottom: 0;\n  }\n  .CodeMirror-gutters {\n    border-right: 1px solid #dddddd;\n    background-color: #f7f7f7;\n    white-space: nowrap;\n    position: absolute;\n    left: 0;\n    top: 0;\n    min-height: 100%;\n    z-index: 3;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n  }\n  .CodeMirror-linenumbers {\n  }\n  .CodeMirror-linenumber {\n    padding: 0 3px 0 5px;\n    min-width: 20px;\n    text-align: right;\n    color: #999999;\n    white-space: nowrap;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n  }\n  .CodeMirror-guttermarker {\n    color: black;\n  }\n  .CodeMirror-guttermarker-subtle {\n    color: #999999;\n  }\n  .CodeMirror-cursor {\n    border-left: 1px solid black;\n    border-right: none;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n  }\n  .cm-fat-cursor .CodeMirror-cursor {\n    width: auto;\n    border: 0 !important;\n    background: #77ee77;\n  }\n  .cm-fat-cursor div.CodeMirror-cursors {\n    z-index: 1;\n  }\n  .cm-animate-fat-cursor {\n    width: auto;\n    border: 0;\n    -webkit-animation: blink 1.06s steps(1) infinite;\n    -moz-animation: blink 1.06s steps(1) infinite;\n    animation: blink 1.06s steps(1) infinite;\n    background-color: #77ee77;\n  }\n  .CodeMirror-overwrite .CodeMirror-cursor {\n  }\n  .cm-tab {\n    display: inline-block;\n    text-decoration: inherit;\n  }\n  .CodeMirror-rulers {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: -50px;\n    bottom: -20px;\n    overflow: hidden;\n  }\n  .CodeMirror-ruler {\n    border-left: 1px solid #cccccc;\n    top: 0;\n    bottom: 0;\n    position: absolute;\n  }\n  .cm-s-default {\n    .cm-variable,\n    .cm-punctuation,\n    .cm-property,\n    .cm-operator {\n    }\n    .cm-variable-3,\n    .cm-type {\n      color: #008855;\n    }\n    .cm-header {\n      color: blue;\n    }\n    .cm-quote {\n      color: #009900;\n    }\n    .cm-keyword {\n      color: #770088;\n    }\n    .cm-atom {\n      color: #221199;\n    }\n    .cm-number {\n      color: #116644;\n    }\n    .cm-def {\n      color: #0000ff;\n    }\n    .cm-variable-2 {\n      color: #0055aa;\n    }\n    .cm-comment {\n      color: #aa5500;\n    }\n    .cm-string {\n      color: #aa1111;\n    }\n    .cm-string-2 {\n      color: #ff5500;\n    }\n    .cm-meta {\n      color: #555555;\n    }\n    .cm-qualifier {\n      color: #555555;\n    }\n    .cm-builtin {\n      color: #3300aa;\n    }\n    .cm-bracket {\n      color: #999977;\n    }\n    .cm-tag {\n      color: #117700;\n    }\n    .cm-attribute {\n      color: #0000cc;\n    }\n    .cm-hr {\n      color: #999999;\n    }\n    .cm-link {\n      color: #0000cc;\n    }\n    .cm-error {\n      color: #ff0000;\n    }\n  }\n  .cm-negative {\n    color: #dd4444;\n  }\n  .cm-positive {\n    color: #229922;\n  }\n  .cm-header,\n  .cm-strong {\n    font-weight: bold;\n  }\n  .cm-em {\n    font-style: italic;\n  }\n  .cm-link {\n    text-decoration: underline;\n  }\n  .cm-strikethrough {\n    text-decoration: line-through;\n  }\n  .cm-invalidchar {\n    color: #ff0000;\n  }\n  .CodeMirror-composing {\n    border-bottom: 2px solid;\n  }\n  div.CodeMirror span.CodeMirror-matchingbracket {\n    color: #00ff00;\n  }\n  div.CodeMirror span.CodeMirror-nonmatchingbracket {\n    color: #ff2222;\n  }\n  .CodeMirror-matchingtag {\n    background: rgba(255, 150, 0, 0.3);\n  }\n  .CodeMirror-activeline-background {\n    background: #e8f2ff;\n  }\n  .CodeMirror-scroll {\n    overflow: scroll !important;\n    margin-bottom: -30px;\n    margin-right: -30px;\n    padding-bottom: 30px;\n    height: 100%;\n    outline: none;\n    position: relative;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n  }\n  .CodeMirror-sizer {\n    position: relative;\n    border-right: 30px solid transparent;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n  }\n  .CodeMirror-vscrollbar {\n    position: absolute;\n    z-index: 6;\n    display: none;\n    right: 0;\n    top: 0;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n  .CodeMirror-hscrollbar {\n    position: absolute;\n    z-index: 6;\n    display: none;\n    bottom: 0;\n    left: 0;\n    overflow-y: hidden;\n    overflow-x: scroll;\n  }\n  .CodeMirror-gutter {\n    white-space: normal;\n    height: 100%;\n    display: inline-block;\n    vertical-align: top;\n    margin-bottom: -30px;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n  }\n  .CodeMirror-gutter-wrapper {\n    position: absolute;\n    z-index: 4;\n    background: none !important;\n    border: none !important;\n    ::selection {\n      background-color: transparent;\n    }\n    ::-moz-selection {\n      background-color: transparent;\n    }\n  }\n  .CodeMirror-gutter-background {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    z-index: 4;\n  }\n  .CodeMirror-gutter-elt {\n    position: absolute;\n    cursor: default;\n    z-index: 4;\n  }\n  .CodeMirror-wrap pre {\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    word-break: normal;\n  }\n  .CodeMirror-linebackground {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 0;\n  }\n  .CodeMirror-linewidget {\n    position: relative;\n    z-index: 2;\n    overflow: auto;\n  }\n  .CodeMirror-widget {\n  }\n  .CodeMirror-rtl pre {\n    direction: rtl;\n  }\n  .CodeMirror-code {\n    outline: none;\n  }\n  .CodeMirror-measure {\n    position: absolute;\n    width: 100%;\n    height: 0;\n    overflow: hidden;\n    visibility: hidden;\n    pre {\n      position: static;\n    }\n  }\n  div.CodeMirror-cursors {\n    visibility: hidden;\n    position: relative;\n    z-index: 3;\n  }\n  div.CodeMirror-dragcursors {\n    visibility: visible;\n  }\n  .CodeMirror-focused div.CodeMirror-cursors {\n    visibility: visible;\n  }\n  .CodeMirror-focused .CodeMirror-selected {\n    background: #d7d4f0;\n  }\n  .CodeMirror-selected {\n    background: #d9d9d9;\n  }\n  .CodeMirror-crosshair {\n    cursor: crosshair;\n  }\n  .CodeMirror-line::selection,\n  .CodeMirror-line > span::selection,\n  .CodeMirror-line > span > span::selection {\n    background: #d7d4f0;\n  }\n  .CodeMirror-line::-moz-selection,\n  .CodeMirror-line > span::-moz-selection,\n  .CodeMirror-line > span > span::-moz-selection {\n    background: #d7d4f0;\n  }\n  .cm-searching {\n    background: #ffffaa;\n    background: rgba(255, 255, 0, 0.4);\n  }\n  .cm-force-border {\n    padding-right: 0.1px;\n  }\n  .cm-tab-wrap-hack:after {\n    content: '';\n  }\n  span.CodeMirror-selectedtext {\n    background: none;\n  }\n"]);return R=function(){return n},n}var S=Object(N.b)(function(n){return p.a.createElement(T,n)})(R()),I=N.b.div(q()),Q=S;t.d(e,"default",function(){return J});var _=g.a.Item,V=f.a,J=function(n){function e(n){var t;return Object(i.a)(this,e),(t=Object(l.a)(this,Object(c.a)(e).call(this,n))).updateCode=t.updateCode.bind(Object(d.a)(Object(d.a)(t))),t.toggleOptions=t.toggleOptions.bind(Object(d.a)(Object(d.a)(t))),t.selctOptions=t.selctOptions.bind(Object(d.a)(Object(d.a)(t))),t.state=Object(o.a)({},E,{basicOptions:{lineNumbers:!0,readOnly:!1,tabSize:4,mode:"javascript",theme:"zenburn"}}),t}return Object(s.a)(e,n),Object(a.a)(e,[{key:"updateCode",value:function(n,e){this.setState(Object(r.a)({},n,e))}},{key:"toggleOptions",value:function(){var n=this,e=this.state.basicOptions;return k.map(function(t,r){var o=t.id;return p.a.createElement(_,{label:t.title,key:t.id},p.a.createElement(h.a,{checked:t.value===e[o],onChange:function(){e[o]=!e[o],n.setState(e)}}))})}},{key:"selctOptions",value:function(){var n=this,e=this.state.basicOptions;return M.map(function(t,r){var o=t.id;return p.a.createElement(_,{label:t.title,key:t.id},p.a.createElement(f.b,{defaultValue:"".concat(e[o]),onChange:function(t){e[o]=isNaN(t)?t:parseInt(t,10),n.setState(e)}},t.options.map(function(n){return p.a.createElement(V,{value:n,key:n},n)})))})}},{key:"render",value:function(){var n=this,e=w.a.rowStyle,t=w.a.colStyle,r=w.a.gutter;return p.a.createElement(C.default,null,p.a.createElement(x.default,null,"Code Mirror"),p.a.createElement(m.a,{style:e,gutter:r,justify:"start"},p.a.createElement(b.a,{md:24,sm:24,xs:24,style:t},p.a.createElement(v.default,{title:"Basic Example"},p.a.createElement(y.default,null,p.a.createElement(I,{className:"isoOptionWrapper"},this.toggleOptions(),this.selctOptions()),p.a.createElement(Q,{value:this.state.basic,onChange:function(e){return n.updateCode("basic",e)},options:this.state.basicOptions}))))),p.a.createElement(m.a,{style:e,gutter:r,justify:"start"},p.a.createElement(b.a,{md:12,sm:12,xs:24,style:t},p.a.createElement(v.default,{title:"Ruby Example"},p.a.createElement(y.default,null,p.a.createElement(Q,{value:this.state.ruby,onChange:function(e){return n.updateCode("ruby",e)},options:{lineNumbers:!0,theme:"hopscotch"}})))),p.a.createElement(b.a,{md:12,sm:12,xs:24,style:t},p.a.createElement(v.default,{title:"Javascript Example"},p.a.createElement(y.default,null,p.a.createElement(Q,{value:this.state.javascript,onChange:function(e){return n.updateCode("javascript",e)},options:{lineNumbers:!0,theme:"twilight"}}))))),p.a.createElement(m.a,{style:e,gutter:r,justify:"start"},p.a.createElement(b.a,{md:12,sm:12,xs:24,style:t},p.a.createElement(v.default,{title:"Markdown Example"},p.a.createElement(y.default,null,p.a.createElement(Q,{value:this.state.markdown,onChange:function(e){return n.updateCode("markdown",e)},options:{lineNumbers:!0,theme:"rubyblue"}})))),p.a.createElement(b.a,{md:12,sm:12,xs:24,style:t},p.a.createElement(v.default,{title:"XML Example"},p.a.createElement(y.default,null,p.a.createElement(Q,{value:this.state.xml,onChange:function(e){return n.updateCode("xml",e)},options:{lineNumbers:!0,theme:"paraiso-dark"}}))))),p.a.createElement(m.a,{style:e,gutter:r,justify:"start"},p.a.createElement(b.a,{md:12,sm:12,xs:24,style:t},p.a.createElement(v.default,{title:"PHP Example"},p.a.createElement(y.default,null,p.a.createElement(Q,{value:this.state.php,onChange:function(e){return n.updateCode("php",e)},options:{lineNumbers:!0,theme:"midnight"}})))),p.a.createElement(b.a,{md:12,sm:12,xs:24,style:t},p.a.createElement(v.default,{title:"Python Example"},p.a.createElement(y.default,null,p.a.createElement(Q,{value:this.state.python,onChange:function(e){return n.updateCode("python",e)},options:{lineNumbers:!0,theme:"material"}}))))))}}]),e}(u.Component)}}]);
//# sourceMappingURL=86.7b0a6532.chunk.js.map