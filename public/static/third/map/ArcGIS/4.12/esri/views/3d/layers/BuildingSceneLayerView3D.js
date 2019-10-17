// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../Graphic ../../../core/Collection ../../../core/maybe ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ./BuildingComponentSublayerView3D ./BuildingGroupSublayerView3D ./LayerView3D ./i3s/I3SUtil ./support/layerViewUpdatingProperties".split(" "),
function(z,A,B,q,d,r,t,m,h,k,n,p,e,u,v,w,x,y){return function(l){function a(){var b=null!==l&&l.apply(this,arguments)||this;b.componentLayerViews=new h;b.groupLayerViews=new h;b._abortController=n.createAbortController();b._loadingComponents=0;return b}q(a,l);Object.defineProperty(a.prototype,"filterExpression",{get:function(){var b=this.layer.activeFilterId,c=null!=b?this.layer.filters.find(function(c){return c.id===b}):null;return(c=null!=c?c.filterBlocks.find(function(b){return"solid"===b.filterMode.type}):
null)?c.filterExpression:null},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"updatingPercentageValue",{get:function(){var b=this.componentLayerViews,c=this._loadingComponents,a=c+b.length;return b.reduce(function(b,c){return b+c.updatingPercentage},100*c)/a},enumerable:!0,configurable:!0});a.prototype.isUpdating=function(){return 0<this._loadingComponents||this.componentLayerViews.some(function(b){return b.updating})};a.prototype.initialize=function(){x.checkSpatialReference(this.layer.spatialReference,
this.view.spatialReference,this.view.viewingMode);this.initializeSubLayerViews(this.layer.sublayers,this)};a.prototype.destroy=function(){this.groupLayerViews&&(this.groupLayerViews.forEach(function(b){return b.destroy()}),this.groupLayerViews=null);this.componentLayerViews&&(this.componentLayerViews.forEach(function(b){return b.destroy()}),this.componentLayerViews=null);this._abortController.abort();this._abortController=null};a.prototype.initializeSubLayerViews=function(b,c){var a=this,e=this,d=
this.view;b.forEach(function(b){if("building-group"===b.type){var f=new v({layer:b,view:d,parent:c});a.groupLayerViews.push(f);a.initializeSubLayerViews(b.sublayers,f)}else a._loadingComponents++,b.load({signal:a._abortController.signal}).then(function(){a._loadingComponents--;var f=new u({layer:b,layerView:e,view:d,parent:c});a.componentLayerViews.push(f);a.handles.add([p.init(f,"updating",function(){return a.notifyChange("updating")}),p.init(f,"updatingPercentage",function(){return a.notifyChange("updatingPercentageValue")})])})})};
a.prototype.getGraphicFromStageObject=function(b,c){var a=this.componentLayerViews.find(function(a){return a.hasStageObject(b)});return a?a.getGraphicFromStageObject(b,c):null};a.prototype.fetchPopupFeatures=function(b,a){return t(this,void 0,void 0,function(){var c;return r(this,function(f){if(!k.isSome(a)||!a.clientGraphics||0===a.clientGraphics.length)return[2];c=this._findComponent(a.clientGraphics[0].sourceLayer);return k.isNone(c)?[2]:[2,c.fetchPopupFeatures(b,a)]})})};a.prototype.whenGraphicBounds=
function(b){var a=this._findComponent(b.sourceLayer);return k.isNone(a)?n.reject():a.whenGraphicBounds(b)};a.prototype._findComponent=function(b){return this.componentLayerViews.find(function(a){return b===a.layer})};a.prototype.highlight=function(b,a){void 0===a&&(a={});b instanceof m?b=[b]:b instanceof h&&(b=b.toArray());var c=[];if(Array.isArray(b)&&0<b.length&&b[0]instanceof m){var d=new Map;for(a=0;a<b.length;a++){var e=b[a],g=d.get(e.sourceLayer);null==g&&(g=[],d.set(e.sourceLayer,g));g.push(e)}this.componentLayerViews.forEach(function(a){var b=
d.get(a.layer);b&&c.push(a.highlight(b))})}return{remove:function(){return c.forEach(function(a){return a.remove()})},pause:function(){return c.forEach(function(a){return a.pause()})},resume:function(){return c.forEach(function(a){return a.resume()})}}};a.prototype.getUsedMemory=function(){return this.componentLayerViews.reduce(function(a,c){return a+c.getUsedMemory()},0)};a.prototype.getUnloadedMemory=function(){return this.componentLayerViews.reduce(function(a,c){return a+c.getUnloadedMemory()},
0)};a.prototype.ignoresMemoryFactor=function(){return!1};d([e.property()],a.prototype,"layer",void 0);d([e.property()],a.prototype,"componentLayerViews",void 0);d([e.property()],a.prototype,"groupLayerViews",void 0);d([e.property({readOnly:!0,dependsOn:["layer.filters","layer.activeFilterId"]})],a.prototype,"filterExpression",null);d([e.property(y.updatingPercentage)],a.prototype,"updatingPercentage",void 0);d([e.property({readOnly:!0})],a.prototype,"updatingPercentageValue",null);return a=d([e.subclass("esri.views.3d.layers.BuildingSceneLayerView3D")],
a)}(e.declared(w))});