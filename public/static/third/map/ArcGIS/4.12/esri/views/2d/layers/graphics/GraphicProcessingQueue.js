// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/promiseUtils ../../../../core/scheduling ../../../../core/accessorSupport/decorators".split(" "),function(d,f,g,e,h,k,l,c){Object.defineProperty(f,"__esModule",{value:!0});d=function(d){function b(a){a=d.call(this,a)||this;a._queue=new Map;a._queueArray=[];a._onGoingGraphic=null;a._onGoingPromise=null;a._scheduledNextHandle=null;a._next=a._next.bind(a);
a._finalize=a._finalize.bind(a);return a}g(b,d);Object.defineProperty(b.prototype,"length",{get:function(){return this._queueArray.length},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"updating",{get:function(){return 0<this._queueArray.length||null!==this._onGoingPromise},enumerable:!0,configurable:!0});b.prototype.cancel=function(a){this._onGoingGraphic&&this._onGoingGraphic.graphic===a&&(this._ongoingAbortController.abort(),this._onGoingGraphic=this._onGoingPromise=null);if(this._queue.has(a)){var b=
this._queue.get(a);this._queue.delete(a);a=this._queueArray.indexOf(b);this._queueArray.slice(a,1)}this._scheduleNext();this.notifyChange("updating")};b.prototype.clear=function(){this._queue.clear();this._queueArray.length=0;this._onGoingPromise&&(this._ongoingAbortController.abort(),this._onGoingGraphic=this._onGoingPromise=null);this._cancelNext();this.notifyChange("updating")};b.prototype.has=function(a){return this._queue.has(a)};b.prototype.isOngoing=function(a){return this._onGoingGraphic&&
this._onGoingGraphic.graphic===a};b.prototype.push=function(a,b){this._queue.has(a)||(b={graphic:a,addOrUpdate:b},this._queueArray.push(b),this._queue.set(a,b),this._scheduleNext(),this.notifyChange("updating"))};b.prototype.refresh=function(){this.reset()};b.prototype.reset=function(){var a=this._onGoingGraphic;a&&this.push(a.graphic,a.addOrUpdate)};b.prototype._finalize=function(){this._onGoingPromise=this._ongoingAbortController=this._onGoingGraphic=null;this.notifyChange("updating");this._scheduleNext()};
b.prototype._cancelNext=function(){this._scheduledNextHandle&&(this._scheduledNextHandle.remove(),this._scheduledNextHandle=null)};b.prototype._scheduleNext=function(){this._scheduledNextHandle||0===this._queue.size||null!=this._onGoingGraphic||(this._scheduledNextHandle=l.schedule(this._next))};b.prototype._next=function(){if(null==this._scheduledNextHandle||0===this._queue.size||this._onGoingGraphic)this._scheduledNextHandle=null;else{this._scheduledNextHandle=null;var a=this._peek(),b=a.graphic,
d=a.addOrUpdate,c=k.createAbortController();this._queue.delete(b);this._onGoingGraphic=a;this._onGoingPromise=this.process(b,d,{signal:c.signal});this._ongoingAbortController=c;this._onGoingPromise.then(this._finalize,this._finalize);this.notifyChange("updating")}};b.prototype._peek=function(){return 0===this._queueArray.length?null:this._queueArray.pop()};e([c.property({readOnly:!0})],b.prototype,"length",null);e([c.property({readOnly:!0})],b.prototype,"updating",null);e([c.property({constructOnly:!0})],
b.prototype,"process",void 0);return b=e([c.subclass("esri.views.2d.layers.graphics.GraphicProcessingQueue")],b)}(c.declared(h));f.default=d});