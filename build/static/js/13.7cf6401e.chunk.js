(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1202:function(e,t){e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}},1294:function(e,t){e.exports=function(){}},1335:function(e,t,n){var r=n(223),i=n(1336),u=n(413),o=n(1337),a=u(function(e){var t=r(e,o);return t.length&&t[0]===e[0]?i(t):[]});e.exports=a},1336:function(e,t,n){var r=n(621),i=n(625),u=n(626),o=n(223),a=n(231),s=n(622),f=Math.min;e.exports=function(e,t,n){for(var c=n?u:i,l=e[0].length,d=e.length,p=d,g=Array(d),h=1/0,v=[];p--;){var y=e[p];p&&t&&(y=o(y,a(t))),h=f(y.length,h),g[p]=!n&&(t||l>=120&&y.length>=120)?new r(p&&y):void 0}y=e[0];var b=-1,O=g[0];e:for(;++b<l&&v.length<h;){var D=y[b],S=t?t(D):D;if(D=n||0!==D?D:0,!(O?s(O,S):c(v,S,n))){for(p=d;--p;){var E=g[p];if(!(E?s(E,S):c(e[p],S,n)))continue e}O&&O.push(S),v.push(D)}}return v}},1337:function(e,t,n){var r=n(419);e.exports=function(e){return r(e)?e:[]}},1403:function(e,t,n){var r=n(621),i=n(625),u=n(626),o=n(622),a=n(1458),s=n(1202),f=200;e.exports=function(e,t,n){var c=-1,l=i,d=e.length,p=!0,g=[],h=g;if(n)p=!1,l=u;else if(d>=f){var v=t?null:a(e);if(v)return s(v);p=!1,l=o,h=new r}else h=t?[]:g;e:for(;++c<d;){var y=e[c],b=t?t(y):y;if(y=n||0!==y?y:0,p&&b===b){for(var O=h.length;O--;)if(h[O]===b)continue e;t&&h.push(b),g.push(y)}else l(h,b,n)||(h!==g&&h.push(b),g.push(y))}return g}},1405:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.END_DRAG=t.DROP=t.HOVER=t.PUBLISH_DRAG_SOURCE=t.BEGIN_DRAG=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.beginDrag=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{publishSource:!0,clientOffset:null},n=t.publishSource,r=t.clientOffset,a=t.getSourceClientOffset;(0,i.default)((0,u.default)(e),"Expected sourceIds to be an array.");var s=this.getMonitor(),c=this.getRegistry();(0,i.default)(!s.isDragging(),"Cannot call beginDrag while dragging.");for(var l=0;l<e.length;l++)(0,i.default)(c.getSource(e[l]),"Expected sourceIds to be registered.");for(var d=null,p=e.length-1;p>=0;p--)if(s.canDragSource(e[p])){d=e[p];break}if(null===d)return;var g=null;r&&((0,i.default)("function"===typeof a,"When clientOffset is provided, getSourceClientOffset must be a function."),g=a(d));var h=c.getSource(d).beginDrag(s,d);(0,i.default)((0,o.default)(h),"Item must be an object."),c.pinSource(d);var v=c.getSourceType(d);return{type:f,itemType:v,item:h,sourceId:d,clientOffset:r,sourceClientOffset:g,isSourcePublic:n}},t.publishDragSource=function(){if(!this.getMonitor().isDragging())return;return{type:c}},t.hover=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).clientOffset,n=void 0===t?null:t;(0,i.default)((0,u.default)(e),"Expected targetIds to be an array.");var r=e.slice(0),o=this.getMonitor(),s=this.getRegistry();(0,i.default)(o.isDragging(),"Cannot call hover while not dragging."),(0,i.default)(!o.didDrop(),"Cannot call hover after drop.");for(var f=0;f<r.length;f++){var c=r[f];(0,i.default)(r.lastIndexOf(c)===f,"Expected targetIds to be unique in the passed array.");var d=s.getTarget(c);(0,i.default)(d,"Expected targetIds to be registered.")}for(var p=o.getItemType(),g=r.length-1;g>=0;g--){var h=r[g],v=s.getTargetType(h);(0,a.default)(v,p)||r.splice(g,1)}for(var y=0;y<r.length;y++){var b=r[y],O=s.getTarget(b);O.hover(o,b)}return{type:l,targetIds:r,clientOffset:n}},t.drop=function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.getMonitor(),u=this.getRegistry();(0,i.default)(n.isDragging(),"Cannot call drop while not dragging."),(0,i.default)(!n.didDrop(),"Cannot call drop twice during one drag operation.");var a=n.getTargetIds().filter(n.canDropOnTarget,n);a.reverse(),a.forEach(function(a,s){var f=u.getTarget(a),c=f.drop(n,a);(0,i.default)("undefined"===typeof c||(0,o.default)(c),"Drop result must either be an object or undefined."),"undefined"===typeof c&&(c=0===s?{}:n.getDropResult()),e.store.dispatch({type:d,dropResult:r({},t,c)})})},t.endDrag=function(){var e=this.getMonitor(),t=this.getRegistry();(0,i.default)(e.isDragging(),"Cannot call endDrag while not dragging.");var n=e.getSourceId();return t.getSource(n,!0).endDrag(e,n),t.unpinSource(),{type:p}};var i=s(n(48)),u=s(n(102)),o=s(n(86)),a=s(n(1660));function s(e){return e&&e.__esModule?e:{default:e}}var f=t.BEGIN_DRAG="dnd-core/BEGIN_DRAG",c=t.PUBLISH_DRAG_SOURCE="dnd-core/PUBLISH_DRAG_SOURCE",l=t.HOVER="dnd-core/HOVER",d=t.DROP="dnd-core/DROP",p=t.END_DRAG="dnd-core/END_DRAG"},1406:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addSource=function(e){return{type:r,sourceId:e}},t.addTarget=function(e){return{type:i,targetId:e}},t.removeSource=function(e){return{type:u,sourceId:e}},t.removeTarget=function(e){return{type:o,targetId:e}};var r=t.ADD_SOURCE="dnd-core/ADD_SOURCE",i=t.ADD_TARGET="dnd-core/ADD_TARGET",u=t.REMOVE_SOURCE="dnd-core/REMOVE_SOURCE",o=t.REMOVE_TARGET="dnd-core/REMOVE_TARGET"},1458:function(e,t,n){var r=n(646),i=n(1294),u=n(1202),o=r&&1/u(new r([,-0]))[1]==1/0?function(e){return new r(e)}:i;e.exports=o},1463:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return Boolean(e&&"function"===typeof e.dispose)},e.exports=t.default},1658:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1929);Object.defineProperty(t,"DragDropManager",{enumerable:!0,get:function(){return a(r).default}});var i=n(1942);Object.defineProperty(t,"DragSource",{enumerable:!0,get:function(){return a(i).default}});var u=n(1943);Object.defineProperty(t,"DropTarget",{enumerable:!0,get:function(){return a(u).default}});var o=n(1944);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"createTestBackend",{enumerable:!0,get:function(){return a(o).default}})},1659:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1];switch(t.type){case i.BEGIN_DRAG:return{initialSourceClientOffset:t.sourceClientOffset,initialClientOffset:t.clientOffset,clientOffset:t.clientOffset};case i.HOVER:return function(e,t){if(e===t)return!0;return e&&t&&e.x===t.x&&e.y===t.y}(e.clientOffset,t.clientOffset)?e:r({},e,{clientOffset:t.clientOffset});case i.END_DRAG:case i.DROP:return u;default:return e}},t.getSourceClientOffset=function(e){var t=e.clientOffset,n=e.initialClientOffset,r=e.initialSourceClientOffset;if(!t||!n||!r)return null;return{x:t.x+r.x-n.x,y:t.y+r.y-n.y}},t.getDifferenceFromInitialOffset=function(e){var t=e.clientOffset,n=e.initialClientOffset;if(!t||!n)return null;return{x:t.x-n.x,y:t.y-n.y}};var i=n(1405),u={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null}},1660:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return(0,u.default)(e)?e.some(function(e){return e===t}):e===t};var r,i=n(102),u=(r=i)&&r.__esModule?r:{default:r}},1661:function(e,t,n){var r=n(644),i=n(413),u=n(419),o=i(function(e,t){return u(e)?r(e,t):[]});e.exports=o},1662:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments[1],t=arguments[2];switch(e.type){case u.HOVER:break;case o.ADD_SOURCE:case o.ADD_TARGET:case o.REMOVE_TARGET:case o.REMOVE_SOURCE:return s;case u.BEGIN_DRAG:case u.PUBLISH_DRAG_SOURCE:case u.END_DRAG:case u.DROP:default:return f}var n=e.targetIds,i=t.targetIds,a=(0,r.default)(n,i),c=!1;if(0===a.length){for(var l=0;l<n.length;l++)if(n[l]!==i[l]){c=!0;break}}else c=!0;if(!c)return s;var d=i[i.length-1],p=n[n.length-1];d!==p&&(d&&a.push(d),p&&a.push(p));return a},t.areDirty=function(e,t){if(e===s)return!1;if(e===f||"undefined"===typeof t)return!0;return(0,i.default)(t,e).length>0};var r=a(n(1934)),i=a(n(1335)),u=n(1405),o=n(1406);function a(e){return e&&e.__esModule?e:{default:e}}var s=[],f=[]},1667:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=r(n(1463));t.isDisposable=i.default;var u=r(n(1951));t.Disposable=u.default;var o=r(n(1952));t.CompositeDisposable=o.default;var a=r(n(1953));t.SerialDisposable=a.default},1929:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=s(n(1930)),u=s(n(1931)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1405)),a=s(n(1937));function s(e){return e&&e.__esModule?e:{default:e}}var f=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r=(0,i.default)(u.default);this.context=n,this.store=r,this.monitor=new a.default(r),this.registry=this.monitor.registry,this.backend=t(this),r.subscribe(this.handleRefCountChange.bind(this))}return r(e,[{key:"handleRefCountChange",value:function(){var e=this.store.getState().refCount>0;e&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!e&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1)}},{key:"getContext",value:function(){return this.context}},{key:"getMonitor",value:function(){return this.monitor}},{key:"getBackend",value:function(){return this.backend}},{key:"getRegistry",value:function(){return this.registry}},{key:"getActions",value:function(){var e=this,t=this.store.dispatch;return Object.keys(o).filter(function(e){return"function"===typeof o[e]}).reduce(function(n,r){var i,u=o[r];return n[r]=(i=u,function(){for(var n=arguments.length,r=Array(n),u=0;u<n;u++)r[u]=arguments[u];var o=i.apply(e,r);"undefined"!==typeof o&&t(o)}),n},{})}}]),e}();t.default=f},1930:function(e,t,n){"use strict";t.__esModule=!0,t.ActionTypes=void 0,t.default=function e(t,n,u){var a;"function"===typeof n&&"undefined"===typeof u&&(u=n,n=void 0);if("undefined"!==typeof u){if("function"!==typeof u)throw new Error("Expected the enhancer to be a function.");return u(e)(t,n)}if("function"!==typeof t)throw new Error("Expected the reducer to be a function.");var s=t;var f=n;var c=[];var l=c;var d=!1;function p(){l===c&&(l=c.slice())}function g(){return f}function h(e){if("function"!==typeof e)throw new Error("Expected listener to be a function.");var t=!0;return p(),l.push(e),function(){if(t){t=!1,p();var n=l.indexOf(e);l.splice(n,1)}}}function v(e){if(!(0,r.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,f=s(f,e)}finally{d=!1}for(var t=c=l,n=0;n<t.length;n++){var i=t[n];i()}return e}v({type:o.INIT});return a={dispatch:v,subscribe:h,getState:g,replaceReducer:function(e){if("function"!==typeof e)throw new Error("Expected the nextReducer to be a function.");s=e,v({type:o.INIT})}},a[i.default]=function(){var e,t=h;return(e={subscribe:function(e){if("object"!==typeof e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(g())}n();var r=t(n);return{unsubscribe:r}}})[i.default]=function(){return this},e},a};var r=u(n(414)),i=u(n(399));function u(e){return e&&e.__esModule?e:{default:e}}var o=t.ActionTypes={INIT:"@@redux/INIT"}},1931:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];return{dirtyHandlerIds:(0,o.default)(e.dirtyHandlerIds,t,e.dragOperation),dragOffset:(0,r.default)(e.dragOffset,t),refCount:(0,u.default)(e.refCount,t),dragOperation:(0,i.default)(e.dragOperation,t),stateId:(0,a.default)(e.stateId)}};var r=s(n(1659)),i=s(n(1932)),u=s(n(1933)),o=s(n(1662)),a=s(n(1936));function s(e){return e&&e.__esModule?e:{default:e}}},1932:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments[1];switch(t.type){case a.BEGIN_DRAG:return r({},e,{itemType:t.itemType,item:t.item,sourceId:t.sourceId,isSourcePublic:t.isSourcePublic,dropResult:null,didDrop:!1});case a.PUBLISH_DRAG_SOURCE:return r({},e,{isSourcePublic:!0});case a.HOVER:return r({},e,{targetIds:t.targetIds});case s.REMOVE_TARGET:return-1===e.targetIds.indexOf(t.targetId)?e:r({},e,{targetIds:(0,o.default)(e.targetIds,t.targetId)});case a.DROP:return r({},e,{dropResult:t.dropResult,didDrop:!0,targetIds:[]});case a.END_DRAG:return r({},e,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return e}};var i,u=n(1661),o=(i=u)&&i.__esModule?i:{default:i},a=n(1405),s=n(1406);var f={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null}},1933:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;switch(arguments[1].type){case r.ADD_SOURCE:case r.ADD_TARGET:return e+1;case r.REMOVE_SOURCE:case r.REMOVE_TARGET:return e-1;default:return e}};var r=n(1406)},1934:function(e,t,n){var r=n(635),i=n(413),u=n(1935),o=n(419),a=i(function(e){return u(r(e,o))});e.exports=a},1935:function(e,t,n){var r=n(644),i=n(427),u=n(1403);e.exports=function(e,t,n){var o=e.length;if(o<2)return o?u(e[0]):[];for(var a=-1,s=Array(o);++a<o;)for(var f=e[a],c=-1;++c<o;)c!=a&&(s[a]=r(s[a]||f,e[c],t,n));return u(i(s,1),t,n)}},1936:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)+1}},1937:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=c(n(48)),u=c(n(102)),o=c(n(1660)),a=c(n(1938)),s=n(1659),f=n(1662);function c(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.store=t,this.registry=new a.default(t)}return r(e,[{key:"subscribeToStateChange",value:function(e){var t=this,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).handlerIds;(0,i.default)("function"===typeof e,"listener must be a function."),(0,i.default)("undefined"===typeof n||(0,u.default)(n),"handlerIds, when specified, must be an array of strings.");var r=this.store.getState().stateId;return this.store.subscribe(function(){var i=t.store.getState(),u=i.stateId;try{u===r||u===r+1&&!(0,f.areDirty)(i.dirtyHandlerIds,n)||e()}finally{r=u}})}},{key:"subscribeToOffsetChange",value:function(e){var t=this;(0,i.default)("function"===typeof e,"listener must be a function.");var n=this.store.getState().dragOffset;return this.store.subscribe(function(){var r=t.store.getState().dragOffset;r!==n&&(n=r,e())})}},{key:"canDragSource",value:function(e){var t=this.registry.getSource(e);return(0,i.default)(t,"Expected to find a valid source."),!this.isDragging()&&t.canDrag(this,e)}},{key:"canDropOnTarget",value:function(e){var t=this.registry.getTarget(e);if((0,i.default)(t,"Expected to find a valid target."),!this.isDragging()||this.didDrop())return!1;var n=this.registry.getTargetType(e),r=this.getItemType();return(0,o.default)(n,r)&&t.canDrop(this,e)}},{key:"isDragging",value:function(){return Boolean(this.getItemType())}},{key:"isDraggingSource",value:function(e){var t=this.registry.getSource(e,!0);return(0,i.default)(t,"Expected to find a valid source."),!(!this.isDragging()||!this.isSourcePublic())&&(this.registry.getSourceType(e)===this.getItemType()&&t.isDragging(this,e))}},{key:"isOverTarget",value:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shallow:!1}).shallow;if(!this.isDragging())return!1;var n=this.registry.getTargetType(e),r=this.getItemType();if(!(0,o.default)(n,r))return!1;var i=this.getTargetIds();if(!i.length)return!1;var u=i.indexOf(e);return t?u===i.length-1:u>-1}},{key:"getItemType",value:function(){return this.store.getState().dragOperation.itemType}},{key:"getItem",value:function(){return this.store.getState().dragOperation.item}},{key:"getSourceId",value:function(){return this.store.getState().dragOperation.sourceId}},{key:"getTargetIds",value:function(){return this.store.getState().dragOperation.targetIds}},{key:"getDropResult",value:function(){return this.store.getState().dragOperation.dropResult}},{key:"didDrop",value:function(){return this.store.getState().dragOperation.didDrop}},{key:"isSourcePublic",value:function(){return this.store.getState().dragOperation.isSourcePublic}},{key:"getInitialClientOffset",value:function(){return this.store.getState().dragOffset.initialClientOffset}},{key:"getInitialSourceClientOffset",value:function(){return this.store.getState().dragOffset.initialSourceClientOffset}},{key:"getClientOffset",value:function(){return this.store.getState().dragOffset.clientOffset}},{key:"getSourceClientOffset",value:function(){return(0,s.getSourceClientOffset)(this.store.getState().dragOffset)}},{key:"getDifferenceFromInitialOffset",value:function(){return(0,s.getDifferenceFromInitialOffset)(this.store.getState().dragOffset)}}]),e}();t.default=l},1938:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=c(n(48)),o=c(n(102)),a=c(n(1939)),s=n(1406),f=c(n(1941));function c(e){return e&&e.__esModule?e:{default:e}}var l={SOURCE:"SOURCE",TARGET:"TARGET"};function d(e,t){t&&(0,o.default)(e)?e.forEach(function(e){return d(e,!1)}):(0,u.default)("string"===typeof e||"symbol"===("undefined"===typeof e?"undefined":i(e)),t?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}function p(e){switch(e[0]){case"S":return l.SOURCE;case"T":return l.TARGET;default:(0,u.default)(!1,"Cannot parse handler ID: "+e)}}var g=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.store=t,this.types={},this.handlers={},this.pinnedSourceId=null,this.pinnedSource=null}return r(e,[{key:"addSource",value:function(e,t){d(e),function(e){(0,u.default)("function"===typeof e.canDrag,"Expected canDrag to be a function."),(0,u.default)("function"===typeof e.beginDrag,"Expected beginDrag to be a function."),(0,u.default)("function"===typeof e.endDrag,"Expected endDrag to be a function.")}(t);var n=this.addHandler(l.SOURCE,e,t);return this.store.dispatch((0,s.addSource)(n)),n}},{key:"addTarget",value:function(e,t){d(e,!0),function(e){(0,u.default)("function"===typeof e.canDrop,"Expected canDrop to be a function."),(0,u.default)("function"===typeof e.hover,"Expected hover to be a function."),(0,u.default)("function"===typeof e.drop,"Expected beginDrag to be a function.")}(t);var n=this.addHandler(l.TARGET,e,t);return this.store.dispatch((0,s.addTarget)(n)),n}},{key:"addHandler",value:function(e,t,n){var r=function(e){var t=(0,f.default)().toString();switch(e){case l.SOURCE:return"S"+t;case l.TARGET:return"T"+t;default:(0,u.default)(!1,"Unknown role: "+e)}}(e);return this.types[r]=t,this.handlers[r]=n,r}},{key:"containsHandler",value:function(e){var t=this;return Object.keys(this.handlers).some(function(n){return t.handlers[n]===e})}},{key:"getSource",value:function(e,t){return(0,u.default)(this.isSourceId(e),"Expected a valid source ID."),t&&e===this.pinnedSourceId?this.pinnedSource:this.handlers[e]}},{key:"getTarget",value:function(e){return(0,u.default)(this.isTargetId(e),"Expected a valid target ID."),this.handlers[e]}},{key:"getSourceType",value:function(e){return(0,u.default)(this.isSourceId(e),"Expected a valid source ID."),this.types[e]}},{key:"getTargetType",value:function(e){return(0,u.default)(this.isTargetId(e),"Expected a valid target ID."),this.types[e]}},{key:"isSourceId",value:function(e){return p(e)===l.SOURCE}},{key:"isTargetId",value:function(e){return p(e)===l.TARGET}},{key:"removeSource",value:function(e){var t=this;(0,u.default)(this.getSource(e),"Expected an existing source."),this.store.dispatch((0,s.removeSource)(e)),(0,a.default)(function(){delete t.handlers[e],delete t.types[e]})}},{key:"removeTarget",value:function(e){var t=this;(0,u.default)(this.getTarget(e),"Expected an existing target."),this.store.dispatch((0,s.removeTarget)(e)),(0,a.default)(function(){delete t.handlers[e],delete t.types[e]})}},{key:"pinSource",value:function(e){var t=this.getSource(e);(0,u.default)(t,"Expected an existing source."),this.pinnedSourceId=e,this.pinnedSource=t}},{key:"unpinSource",value:function(){(0,u.default)(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}}]),e}();t.default=g},1939:function(e,t,n){"use strict";var r=n(1940),i=[],u=[],o=r.makeRequestCallFromTimer(function(){if(u.length)throw u.shift()});function a(e){var t;(t=i.length?i.pop():new s).task=e,r(t)}function s(){this.task=null}e.exports=a,s.prototype.call=function(){try{this.task.call()}catch(e){a.onerror?a.onerror(e):(u.push(e),o())}finally{this.task=null,i[i.length]=this}}},1940:function(e,t,n){"use strict";(function(t){function n(e){i.length||(r(),!0),i[i.length]=e}e.exports=n;var r,i=[],u=0,o=1024;function a(){for(;u<i.length;){var e=u;if(u+=1,i[e].call(),u>o){for(var t=0,n=i.length-u;t<n;t++)i[t]=i[t+u];i.length-=u,u=0}}i.length=0,u=0,!1}var s,f,c,l="undefined"!==typeof t?t:self,d=l.MutationObserver||l.WebKitMutationObserver;function p(e){return function(){var t=setTimeout(r,0),n=setInterval(r,50);function r(){clearTimeout(t),clearInterval(n),e()}}}"function"===typeof d?(s=1,f=new d(a),c=document.createTextNode(""),f.observe(c,{characterData:!0}),r=function(){s=-s,c.data=s}):r=p(a),n.requestFlush=r,n.makeRequestCallFromTimer=p}).call(this,n(42))},1941:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return r++};var r=0},1942:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"canDrag",value:function(){return!0}},{key:"isDragging",value:function(e,t){return t===e.getSourceId()}},{key:"endDrag",value:function(){}}]),e}();t.default=i},1943:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"canDrop",value:function(){return!0}},{key:"hover",value:function(){}},{key:"drop",value:function(){}}]),e}();t.default=i},1944:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){return new a(e)};var i,u=n(1294),o=(i=u)&&i.__esModule?i:{default:i};var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.actions=t.getActions()}return r(e,[{key:"setup",value:function(){this.didCallSetup=!0}},{key:"teardown",value:function(){this.didCallTeardown=!0}},{key:"connectDragSource",value:function(){return o.default}},{key:"connectDragPreview",value:function(){return o.default}},{key:"connectDropTarget",value:function(){return o.default}},{key:"simulateBeginDrag",value:function(e,t){this.actions.beginDrag(e,t)}},{key:"simulatePublishDragSource",value:function(){this.actions.publishDragSource()}},{key:"simulateHover",value:function(e,t){this.actions.hover(e,t)}},{key:"simulateDrop",value:function(){this.actions.drop()}},{key:"simulateEndDrag",value:function(){this.actions.endDrag()}}]),e}()},1951:function(e,t,n){"use strict";t.__esModule=!0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){},u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isDisposed=!1,this.action=t||i}return r(e,null,[{key:"empty",value:{dispose:i},enumerable:!0}]),e.prototype.dispose=function(){this.isDisposed||(this.action.call(null),this.isDisposed=!0)},e}();t.default=u,e.exports=t.default},1952:function(e,t,n){"use strict";t.__esModule=!0;var r,i=n(1463),u=(r=i)&&r.__esModule?r:{default:r},o=function(){function e(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Array.isArray(n[0])&&1===n.length&&(n=n[0]);for(var i=0;i<n.length;i++)if(!u.default(n[i]))throw new Error("Expected a disposable");this.disposables=n,this.isDisposed=!1}return e.prototype.add=function(e){this.isDisposed?e.dispose():this.disposables.push(e)},e.prototype.remove=function(e){if(this.isDisposed)return!1;var t=this.disposables.indexOf(e);return-1!==t&&(this.disposables.splice(t,1),e.dispose(),!0)},e.prototype.dispose=function(){if(!this.isDisposed){for(var e=this.disposables.length,t=new Array(e),n=0;n<e;n++)t[n]=this.disposables[n];this.isDisposed=!0,this.disposables=[],this.length=0;for(n=0;n<e;n++)t[n].dispose()}},e}();t.default=o,e.exports=t.default},1953:function(e,t,n){"use strict";t.__esModule=!0;var r,i=n(1463),u=(r=i)&&r.__esModule?r:{default:r},o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isDisposed=!1,this.current=null}return e.prototype.getDisposable=function(){return this.current},e.prototype.setDisposable=function(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];if(null!=e&&!u.default(e))throw new Error("Expected either an empty value or a valid disposable");var t=this.isDisposed,n=void 0;t||(n=this.current,this.current=e),n&&n.dispose(),t&&e&&e.dispose()},e.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=!0;var e=this.current;this.current=null,e&&e.dispose()}},e}();t.default=o,e.exports=t.default}}]);
//# sourceMappingURL=13.7cf6401e.chunk.js.map