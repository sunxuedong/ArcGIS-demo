// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../layers/support/ExportImageParameters ./DynamicLayerView3D ../../layers/MapImageLayerView ../../support/drapedUtils".split(" "),function(l,m,d,e,c,f,g,h,k){return function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a._exportImageParameters=null;a.updateWhenStationary=!0;return a}d(a,b);a.prototype.initialize=function(){var a=
this;this._exportImageParameters=new f.ExportImageParameters({view:this.view,layer:this.layer});this.handles.add(this._exportImageParameters.watch("version",function(b){a.refreshDebounced()}))};a.prototype.destroy=function(){this._exportImageParameters&&(this._exportImageParameters.layer=null,this._exportImageParameters.destroy(),this._exportImageParameters=null)};a.prototype.createFetchPopupFeaturesQueryGeometry=function(a,b){return k.createQueryGeometry(a,b,this.view)};a.prototype.getFetchOptions=
function(){return{timeExtent:this._exportImageParameters.timeExtent,timestamp:this.refreshTimestamp}};return a=e([c.subclass("esri.views.3d.layers.MapImageLayerView3D")],a)}(c.declared(g,h))});