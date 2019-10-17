// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Collection ../../core/collectionUtils ../../core/Handles ../../core/accessorSupport/decorators ./LayerView".split(" "),function(n,p,h,c,k,f,l,d,m){return function(g){function a(){var b=g.call(this)||this;b.layerViews=new k;return b}h(a,g);a.prototype.initialize=function(){var b=this;this._watchHandles=new l;this._watchHandles.add(this.layerViews.on("change",function(a){return b._layerViewsChangeHandler(a)}));
this._watchHandles.add(this.layerViews.on("after-changes",this._layerViewsAfterChangesHandler.bind(this)));this._watchHandles.add(this.layer.watch("visibilityMode",this._visibilityModeHandler.bind(this),!0));this._watchHandles.add(this.watch("visible",this._visibleHandler.bind(this),!0));this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]});this._layerViewsAfterChangesHandler()};a.prototype.destroy=function(){this._watchHandles&&(this._watchHandles.destroy(),
this._watchHandles=null)};Object.defineProperty(a.prototype,"layerViews",{set:function(b){this._set("layerViews",f.referenceSetter(b,this._get("layerViews")))},enumerable:!0,configurable:!0});a.prototype.isUpdating=function(){return this.layerViews.some(function(b){return b.updating})};a.prototype._hasLayerViewVisibleOverrides=function(){return this.layerViews.some(function(b){return b._isOverridden("visible")})};a.prototype._findLayerViewForLayer=function(b){return b&&this.layerViews.find(function(a){return a.layer===
b})};a.prototype._firstVisibleOnLayerOrder=function(){var b=this,a=this.layer.layers.find(function(a){return(a=b._findLayerViewForLayer(a))&&a.visible});return a&&this._findLayerViewForLayer(a)};a.prototype._enforceExclusiveVisibility=function(b){this._hasLayerViewVisibleOverrides()&&(b||(b=this._firstVisibleOnLayerOrder(),!b&&0<this.layerViews.length&&(b=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach(function(a){a.visible=a===b}))};a.prototype._layerViewsChangeHandler=
function(b){var a=this;this._watchHandles.remove("visible");this._watchHandles.add(this.layerViews.map(function(b){return b.watch("visible",a._layerViewVisibleHandler.bind(a),!0)}).toArray(),"visible");b=b.added[b.added.length-1];var e=null;b&&b.visible&&(e=b);this._enforceVisibility(e)};a.prototype._layerViewsAfterChangesHandler=function(){var b=this;this._watchHandles.remove("updating");this._watchHandles.add(this.layerViews.map(function(a){return a.watch("updating",function(){return b._updateUpdating()},
!0)}).toArray(),"updating");this._updateUpdating()};a.prototype._enforceVisibility=function(a){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case "inherited":var b=this.visible;this.layerViews.forEach(function(a){a.visible=b});break;case "exclusive":this._enforceExclusiveVisibility(a)}};a.prototype._visibilityModeHandler=function(a){this._enforceVisibility()};a.prototype._layerViewVisibleHandler=function(a,d,e,c){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case "inherited":a!==
this.visible&&(c.visible=this.visible);break;case "exclusive":this._enforceExclusiveVisibility(a&&c)}};a.prototype._visibleHandler=function(){this._hasLayerViewVisibleOverrides()&&"inherited"===this.layer.visibilityMode&&this._enforceVisibility()};a.prototype._updateUpdating=function(){this.notifyChange("updating")};c([d.property({cast:f.castForReferenceSetter})],a.prototype,"layerViews",null);return a=c([d.subclass("esri.views.layers.GroupLayerView")],a)}(d.declared(m))});