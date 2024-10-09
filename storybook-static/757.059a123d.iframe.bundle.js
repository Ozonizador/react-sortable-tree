"use strict";(self.webpackChunk_ozonizador_react_sortable_tree=self.webpackChunk_ozonizador_react_sortable_tree||[]).push([[757],{"./node_modules/react-dnd-touch-backend/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qi:()=>TouchBackend});var ListenerType,invariant_esm=__webpack_require__("./node_modules/@react-dnd/invariant/dist/invariant.esm.js");!function(ListenerType){ListenerType.mouse="mouse",ListenerType.touch="touch",ListenerType.keyboard="keyboard"}(ListenerType||(ListenerType={}));var MouseButtons_Left=1,MouseButton_Left=0;function eventShouldStartDrag(e){return void 0===e.button||e.button===MouseButton_Left}function isTouchEvent(e){return!!e.targetTouches}function getEventClientOffset(e,lastTargetTouchFallback){return isTouchEvent(e)?function getEventClientTouchOffset(e,lastTargetTouchFallback){return 1===e.targetTouches.length?getEventClientOffset(e.targetTouches[0]):lastTargetTouchFallback&&1===e.touches.length&&e.touches[0].target===lastTargetTouchFallback.target?getEventClientOffset(e.touches[0]):void 0}(e,lastTargetTouchFallback):{x:e.clientX,y:e.clientY}}var supportsPassive=function(){var supported=!1;try{addEventListener("test",(function(){}),Object.defineProperty({},"passive",{get:function get(){return supported=!0,!0}}))}catch(e){}return supported}();function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var _eventNames,OptionsReader=function(){function OptionsReader(args,context){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,OptionsReader),_defineProperty(this,"args",void 0),_defineProperty(this,"context",void 0),this.args=args,this.context=context}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(OptionsReader,[{key:"delay",get:function get(){var _this$args$delay;return null!==(_this$args$delay=this.args.delay)&&void 0!==_this$args$delay?_this$args$delay:0}},{key:"scrollAngleRanges",get:function get(){return this.args.scrollAngleRanges}},{key:"getDropTargetElementsAtPoint",get:function get(){return this.args.getDropTargetElementsAtPoint}},{key:"ignoreContextMenu",get:function get(){var _this$args$ignoreCont;return null!==(_this$args$ignoreCont=this.args.ignoreContextMenu)&&void 0!==_this$args$ignoreCont&&_this$args$ignoreCont}},{key:"enableHoverOutsideTarget",get:function get(){var _this$args$enableHove;return null!==(_this$args$enableHove=this.args.enableHoverOutsideTarget)&&void 0!==_this$args$enableHove&&_this$args$enableHove}},{key:"enableKeyboardEvents",get:function get(){var _this$args$enableKeyb;return null!==(_this$args$enableKeyb=this.args.enableKeyboardEvents)&&void 0!==_this$args$enableKeyb&&_this$args$enableKeyb}},{key:"enableMouseEvents",get:function get(){var _this$args$enableMous;return null!==(_this$args$enableMous=this.args.enableMouseEvents)&&void 0!==_this$args$enableMous&&_this$args$enableMous}},{key:"enableTouchEvents",get:function get(){var _this$args$enableTouc;return null===(_this$args$enableTouc=this.args.enableTouchEvents)||void 0===_this$args$enableTouc||_this$args$enableTouc}},{key:"touchSlop",get:function get(){return this.args.touchSlop||0}},{key:"delayTouchStart",get:function get(){var _ref,_this$args$delayTouch,_this$args,_this$args2;return null!==(_ref=null!==(_this$args$delayTouch=null===(_this$args=this.args)||void 0===_this$args?void 0:_this$args.delayTouchStart)&&void 0!==_this$args$delayTouch?_this$args$delayTouch:null===(_this$args2=this.args)||void 0===_this$args2?void 0:_this$args2.delay)&&void 0!==_ref?_ref:0}},{key:"delayMouseStart",get:function get(){var _ref2,_this$args$delayMouse,_this$args3,_this$args4;return null!==(_ref2=null!==(_this$args$delayMouse=null===(_this$args3=this.args)||void 0===_this$args3?void 0:_this$args3.delayMouseStart)&&void 0!==_this$args$delayMouse?_this$args$delayMouse:null===(_this$args4=this.args)||void 0===_this$args4?void 0:_this$args4.delay)&&void 0!==_ref2?_ref2:0}},{key:"window",get:function get(){return this.context&&this.context.window?this.context.window:"undefined"!=typeof window?window:void 0}},{key:"document",get:function get(){var _this$context;return null!==(_this$context=this.context)&&void 0!==_this$context&&_this$context.document?this.context.document:this.window?this.window.document:void 0}},{key:"rootElement",get:function get(){var _this$args5;return(null===(_this$args5=this.args)||void 0===_this$args5?void 0:_this$args5.rootElement)||this.document}}]),OptionsReader}();function TouchBackendImpl_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function TouchBackendImpl_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var eventNames=(TouchBackendImpl_defineProperty(_eventNames={},ListenerType.mouse,{start:"mousedown",move:"mousemove",end:"mouseup",contextmenu:"contextmenu"}),TouchBackendImpl_defineProperty(_eventNames,ListenerType.touch,{start:"touchstart",move:"touchmove",end:"touchend"}),TouchBackendImpl_defineProperty(_eventNames,ListenerType.keyboard,{keydown:"keydown"}),_eventNames),TouchBackendImpl=function(){function TouchBackendImpl(manager,context,options){var _this=this;!function TouchBackendImpl_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TouchBackendImpl),TouchBackendImpl_defineProperty(this,"options",void 0),TouchBackendImpl_defineProperty(this,"actions",void 0),TouchBackendImpl_defineProperty(this,"monitor",void 0),TouchBackendImpl_defineProperty(this,"sourceNodes",void 0),TouchBackendImpl_defineProperty(this,"sourcePreviewNodes",void 0),TouchBackendImpl_defineProperty(this,"sourcePreviewNodeOptions",void 0),TouchBackendImpl_defineProperty(this,"targetNodes",void 0),TouchBackendImpl_defineProperty(this,"_mouseClientOffset",void 0),TouchBackendImpl_defineProperty(this,"_isScrolling",void 0),TouchBackendImpl_defineProperty(this,"listenerTypes",void 0),TouchBackendImpl_defineProperty(this,"moveStartSourceIds",void 0),TouchBackendImpl_defineProperty(this,"waitingForDelay",void 0),TouchBackendImpl_defineProperty(this,"timeout",void 0),TouchBackendImpl_defineProperty(this,"dragOverTargetIds",void 0),TouchBackendImpl_defineProperty(this,"draggedSourceNode",void 0),TouchBackendImpl_defineProperty(this,"draggedSourceNodeRemovalObserver",void 0),TouchBackendImpl_defineProperty(this,"lastTargetTouchFallback",void 0),TouchBackendImpl_defineProperty(this,"getSourceClientOffset",(function(sourceId){var element=_this.sourceNodes.get(sourceId);return element&&function getNodeClientOffset(node){var el=1===node.nodeType?node:node.parentElement;if(el){var _el$getBoundingClient=el.getBoundingClientRect(),top=_el$getBoundingClient.top;return{x:_el$getBoundingClient.left,y:top}}}(element)})),TouchBackendImpl_defineProperty(this,"handleTopMoveStartCapture",(function(e){eventShouldStartDrag(e)&&(_this.moveStartSourceIds=[])})),TouchBackendImpl_defineProperty(this,"handleMoveStart",(function(sourceId){Array.isArray(_this.moveStartSourceIds)&&_this.moveStartSourceIds.unshift(sourceId)})),TouchBackendImpl_defineProperty(this,"handleTopMoveStart",(function(e){if(eventShouldStartDrag(e)){var clientOffset=getEventClientOffset(e);clientOffset&&(isTouchEvent(e)&&(_this.lastTargetTouchFallback=e.targetTouches[0]),_this._mouseClientOffset=clientOffset),_this.waitingForDelay=!1}})),TouchBackendImpl_defineProperty(this,"handleTopMoveStartDelay",(function(e){if(eventShouldStartDrag(e)){var delay=e.type===eventNames.touch.start?_this.options.delayTouchStart:_this.options.delayMouseStart;_this.timeout=setTimeout(_this.handleTopMoveStart.bind(_this,e),delay),_this.waitingForDelay=!0}})),TouchBackendImpl_defineProperty(this,"handleTopMoveCapture",(function(){_this.dragOverTargetIds=[]})),TouchBackendImpl_defineProperty(this,"handleMove",(function(_evt,targetId){_this.dragOverTargetIds&&_this.dragOverTargetIds.unshift(targetId)})),TouchBackendImpl_defineProperty(this,"handleTopMove",(function(e){if(_this.timeout&&clearTimeout(_this.timeout),_this.document&&!_this.waitingForDelay){var moveStartSourceIds=_this.moveStartSourceIds,dragOverTargetIds=_this.dragOverTargetIds,enableHoverOutsideTarget=_this.options.enableHoverOutsideTarget,clientOffset=getEventClientOffset(e,_this.lastTargetTouchFallback);if(clientOffset)if(_this._isScrolling||!_this.monitor.isDragging()&&function inAngleRanges(x1,y1,x2,y2,angleRanges){if(!angleRanges)return!1;for(var angle=180*Math.atan2(y2-y1,x2-x1)/Math.PI+180,i=0;i<angleRanges.length;++i)if((null==angleRanges[i].start||angle>=angleRanges[i].start)&&(null==angleRanges[i].end||angle<=angleRanges[i].end))return!0;return!1}(_this._mouseClientOffset.x||0,_this._mouseClientOffset.y||0,clientOffset.x,clientOffset.y,_this.options.scrollAngleRanges))_this._isScrolling=!0;else if(!_this.monitor.isDragging()&&_this._mouseClientOffset.hasOwnProperty("x")&&moveStartSourceIds&&function distance(x1,y1,x2,y2){return Math.sqrt(Math.pow(Math.abs(x2-x1),2)+Math.pow(Math.abs(y2-y1),2))}(_this._mouseClientOffset.x||0,_this._mouseClientOffset.y||0,clientOffset.x,clientOffset.y)>(_this.options.touchSlop?_this.options.touchSlop:0)&&(_this.moveStartSourceIds=void 0,_this.actions.beginDrag(moveStartSourceIds,{clientOffset:_this._mouseClientOffset,getSourceClientOffset:_this.getSourceClientOffset,publishSource:!1})),_this.monitor.isDragging()){var sourceNode=_this.sourceNodes.get(_this.monitor.getSourceId());_this.installSourceNodeRemovalObserver(sourceNode),_this.actions.publishDragSource(),e.cancelable&&e.preventDefault();var dragOverTargetNodes=(dragOverTargetIds||[]).map((function(key){return _this.targetNodes.get(key)})).filter((function(e){return!!e})),elementsAtPoint=_this.options.getDropTargetElementsAtPoint?_this.options.getDropTargetElementsAtPoint(clientOffset.x,clientOffset.y,dragOverTargetNodes):_this.document.elementsFromPoint(clientOffset.x,clientOffset.y),elementsAtPointExtended=[];for(var nodeId in elementsAtPoint)if(elementsAtPoint.hasOwnProperty(nodeId)){var currentNode=elementsAtPoint[nodeId];for(elementsAtPointExtended.push(currentNode);currentNode;)(currentNode=currentNode.parentElement)&&-1===elementsAtPointExtended.indexOf(currentNode)&&elementsAtPointExtended.push(currentNode)}var orderedDragOverTargetIds=elementsAtPointExtended.filter((function(node){return dragOverTargetNodes.indexOf(node)>-1})).map((function(node){return _this._getDropTargetId(node)})).filter((function(node){return!!node})).filter((function(id,index,ids){return ids.indexOf(id)===index}));if(enableHoverOutsideTarget)for(var targetId in _this.targetNodes){var targetNode=_this.targetNodes.get(targetId);if(sourceNode&&targetNode&&targetNode.contains(sourceNode)&&-1===orderedDragOverTargetIds.indexOf(targetId)){orderedDragOverTargetIds.unshift(targetId);break}}orderedDragOverTargetIds.reverse(),_this.actions.hover(orderedDragOverTargetIds,{clientOffset})}}})),TouchBackendImpl_defineProperty(this,"_getDropTargetId",(function(node){for(var keys=_this.targetNodes.keys(),next=keys.next();!1===next.done;){var targetId=next.value;if(node===_this.targetNodes.get(targetId))return targetId;next=keys.next()}})),TouchBackendImpl_defineProperty(this,"handleTopMoveEndCapture",(function(e){_this._isScrolling=!1,_this.lastTargetTouchFallback=void 0,function eventShouldEndDrag(e){return void 0===e.buttons||!(e.buttons&MouseButtons_Left)}(e)&&(_this.monitor.isDragging()&&!_this.monitor.didDrop()?(e.cancelable&&e.preventDefault(),_this._mouseClientOffset={},_this.uninstallSourceNodeRemovalObserver(),_this.actions.drop(),_this.actions.endDrag()):_this.moveStartSourceIds=void 0)})),TouchBackendImpl_defineProperty(this,"handleCancelOnEscape",(function(e){"Escape"===e.key&&_this.monitor.isDragging()&&(_this._mouseClientOffset={},_this.uninstallSourceNodeRemovalObserver(),_this.actions.endDrag())})),this.options=new OptionsReader(options,context),this.actions=manager.getActions(),this.monitor=manager.getMonitor(),this.sourceNodes=new Map,this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.targetNodes=new Map,this.listenerTypes=[],this._mouseClientOffset={},this._isScrolling=!1,this.options.enableMouseEvents&&this.listenerTypes.push(ListenerType.mouse),this.options.enableTouchEvents&&this.listenerTypes.push(ListenerType.touch),this.options.enableKeyboardEvents&&this.listenerTypes.push(ListenerType.keyboard)}return function TouchBackendImpl_createClass(Constructor,protoProps,staticProps){return protoProps&&TouchBackendImpl_defineProperties(Constructor.prototype,protoProps),staticProps&&TouchBackendImpl_defineProperties(Constructor,staticProps),Constructor}(TouchBackendImpl,[{key:"profile",value:function profile(){var _this$dragOverTargetI;return{sourceNodes:this.sourceNodes.size,sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,targetNodes:this.targetNodes.size,dragOverTargetIds:(null===(_this$dragOverTargetI=this.dragOverTargetIds)||void 0===_this$dragOverTargetI?void 0:_this$dragOverTargetI.length)||0}}},{key:"document",get:function get(){return this.options.document}},{key:"setup",value:function setup(){var root=this.options.rootElement;root&&((0,invariant_esm.V)(!TouchBackendImpl.isSetUp,"Cannot have two Touch backends at the same time."),TouchBackendImpl.isSetUp=!0,this.addEventListener(root,"start",this.getTopMoveStartHandler()),this.addEventListener(root,"start",this.handleTopMoveStartCapture,!0),this.addEventListener(root,"move",this.handleTopMove),this.addEventListener(root,"move",this.handleTopMoveCapture,!0),this.addEventListener(root,"end",this.handleTopMoveEndCapture,!0),this.options.enableMouseEvents&&!this.options.ignoreContextMenu&&this.addEventListener(root,"contextmenu",this.handleTopMoveEndCapture),this.options.enableKeyboardEvents&&this.addEventListener(root,"keydown",this.handleCancelOnEscape,!0))}},{key:"teardown",value:function teardown(){var root=this.options.rootElement;root&&(TouchBackendImpl.isSetUp=!1,this._mouseClientOffset={},this.removeEventListener(root,"start",this.handleTopMoveStartCapture,!0),this.removeEventListener(root,"start",this.handleTopMoveStart),this.removeEventListener(root,"move",this.handleTopMoveCapture,!0),this.removeEventListener(root,"move",this.handleTopMove),this.removeEventListener(root,"end",this.handleTopMoveEndCapture,!0),this.options.enableMouseEvents&&!this.options.ignoreContextMenu&&this.removeEventListener(root,"contextmenu",this.handleTopMoveEndCapture),this.options.enableKeyboardEvents&&this.removeEventListener(root,"keydown",this.handleCancelOnEscape,!0),this.uninstallSourceNodeRemovalObserver())}},{key:"addEventListener",value:function addEventListener(subject,event,handler,capture){var options=supportsPassive?{capture,passive:!1}:capture;this.listenerTypes.forEach((function(listenerType){var evt=eventNames[listenerType][event];evt&&subject.addEventListener(evt,handler,options)}))}},{key:"removeEventListener",value:function removeEventListener(subject,event,handler,capture){var options=supportsPassive?{capture,passive:!1}:capture;this.listenerTypes.forEach((function(listenerType){var evt=eventNames[listenerType][event];evt&&subject.removeEventListener(evt,handler,options)}))}},{key:"connectDragSource",value:function connectDragSource(sourceId,node){var _this2=this,handleMoveStart=this.handleMoveStart.bind(this,sourceId);return this.sourceNodes.set(sourceId,node),this.addEventListener(node,"start",handleMoveStart),function(){_this2.sourceNodes.delete(sourceId),_this2.removeEventListener(node,"start",handleMoveStart)}}},{key:"connectDragPreview",value:function connectDragPreview(sourceId,node,options){var _this3=this;return this.sourcePreviewNodeOptions.set(sourceId,options),this.sourcePreviewNodes.set(sourceId,node),function(){_this3.sourcePreviewNodes.delete(sourceId),_this3.sourcePreviewNodeOptions.delete(sourceId)}}},{key:"connectDropTarget",value:function connectDropTarget(targetId,node){var _this4=this,root=this.options.rootElement;if(!this.document||!root)return function(){};var handleMove=function handleMove(e){if(_this4.document&&root&&_this4.monitor.isDragging()){var coords;switch(e.type){case eventNames.mouse.move:coords={x:e.clientX,y:e.clientY};break;case eventNames.touch.move:coords={x:e.touches[0].clientX,y:e.touches[0].clientY}}var droppedOn=null!=coords?_this4.document.elementFromPoint(coords.x,coords.y):void 0,childMatch=droppedOn&&node.contains(droppedOn);return droppedOn===node||childMatch?_this4.handleMove(e,targetId):void 0}};return this.addEventListener(this.document.body,"move",handleMove),this.targetNodes.set(targetId,node),function(){_this4.document&&(_this4.targetNodes.delete(targetId),_this4.removeEventListener(_this4.document.body,"move",handleMove))}}},{key:"getTopMoveStartHandler",value:function getTopMoveStartHandler(){return this.options.delayTouchStart||this.options.delayMouseStart?this.handleTopMoveStartDelay:this.handleTopMoveStart}},{key:"installSourceNodeRemovalObserver",value:function installSourceNodeRemovalObserver(node){var _this5=this;this.uninstallSourceNodeRemovalObserver(),this.draggedSourceNode=node,this.draggedSourceNodeRemovalObserver=new MutationObserver((function(){node&&!node.parentElement&&(_this5.resurrectSourceNode(),_this5.uninstallSourceNodeRemovalObserver())})),node&&node.parentElement&&this.draggedSourceNodeRemovalObserver.observe(node.parentElement,{childList:!0})}},{key:"resurrectSourceNode",value:function resurrectSourceNode(){this.document&&this.draggedSourceNode&&(this.draggedSourceNode.style.display="none",this.draggedSourceNode.removeAttribute("data-reactid"),this.document.body.appendChild(this.draggedSourceNode))}},{key:"uninstallSourceNodeRemovalObserver",value:function uninstallSourceNodeRemovalObserver(){this.draggedSourceNodeRemovalObserver&&this.draggedSourceNodeRemovalObserver.disconnect(),this.draggedSourceNodeRemovalObserver=void 0,this.draggedSourceNode=void 0}}]),TouchBackendImpl}();TouchBackendImpl_defineProperty(TouchBackendImpl,"isSetUp",void 0);var TouchBackend=function createBackend(manager){return new TouchBackendImpl(manager,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}}}]);