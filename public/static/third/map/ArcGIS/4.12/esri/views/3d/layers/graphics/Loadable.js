// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/promiseUtils"],function(c,d,f,g,e){Object.defineProperty(d,"__esModule",{value:!0});c=function(){function a(){this._abortController=null;this._loadStatus=0;this.logger=this._loader=null}Object.defineProperty(a.prototype,"loadStatus",{get:function(){return this._loadStatus},enumerable:!0,configurable:!0});a.prototype.load=function(){return g(this,void 0,void 0,function(){var b=
this;return f(this,function(a){this._loader||(this._abortController=e.createAbortController(),this._loader=this.doLoad(this._abortController.signal).then(function(){b._abortController=null;b._loadStatus=1},function(a){b._abortController=null;b._loadStatus=2;!e.isAbortError(a)&&b.logger&&a.message&&b.logger.warn(a.message);throw a;}));return[2,this._loader]})})};a.prototype.abortLoad=function(){this._abortController?(this._abortController.abort(),this._abortController=null):0===this._loadStatus&&(this._loadStatus=
2);this._loader=null};return a}();d.Loadable=c});