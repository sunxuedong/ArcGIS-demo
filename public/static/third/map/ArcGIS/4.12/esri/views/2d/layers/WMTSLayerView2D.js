// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/Handles ../../../core/accessorSupport/decorators ../../../geometry/support/webMercatorUtils ../engine ./LayerView2D ../tiling/TileInfoView ../tiling/TileQueue ../tiling/TileStrategy ../../layers/RefreshableLayerView".split(" "),function(x,y,m,f,h,k,n,e,p,l,q,r,t,u,v){var w=[102113,102100,3857,3785,900913];
return function(g){function b(){var a=null!==g&&g.apply(this,arguments)||this;a._handles=new n;a._tileStrategy=null;a._tileInfoView=null;a._fetchQueue=null;a._tileRequests=new Map;a.container=new l.BitmapContainer;a.layer=null;return a}m(b,g);Object.defineProperty(b.prototype,"tileMatrixSet",{get:function(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;var a=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);if(!a)return null;this.layer.activeLayer.tileMatrixSetId=
a.id;return a},enumerable:!0,configurable:!0});b.prototype.hitTest=function(a,c){return null};b.prototype.update=function(a){this._fetchQueue.pause();this._fetchQueue.state=a.state;this._tileStrategy.update(a);this._fetchQueue.resume();this.notifyChange("updating")};b.prototype.attach=function(){var a=this,c=this.layer.activeLayer,b=this.tileMatrixSet;if(b){var d=b.tileInfo.spatialReference,c=c.fullExtent&&c.fullExtent.clone();d.isWebMercator?c=p.geographicToWebMercator(c):d.isWGS84||(c=b.fullExtent);
this._tileInfoView=new r(b.tileInfo,c);this._fetchQueue=new t({tileInfoView:this._tileInfoView,process:function(c){return a.fetchTile(c)}});this._tileStrategy=new u({cachePolicy:"keep",acquireTile:function(c){return a.acquireTile(c)},releaseTile:function(c){return a.releaseTile(c)},tileInfoView:this._tileInfoView});this._handles.add(this.watch("layer.activeLayer.styleId, tileMatrixSet",function(){return a._refresh()}))}};b.prototype.detach=function(){this._handles.removeAll();this._tileStrategy.destroy();
this._fetchQueue.clear();this.container.removeAllChildren();this._fetchQueue=this._tileStrategy=this._tileInfoView=null};b.prototype.moveStart=function(){this.requestUpdate()};b.prototype.viewChange=function(){this.requestUpdate()};b.prototype.moveEnd=function(){this.requestUpdate()};b.prototype.doRefresh=function(a){return k(this,void 0,void 0,function(){return h(this,function(a){if(this.updateRequested||this.suspended)return[2];this._refresh();return[2]})})};b.prototype.isUpdating=function(){var a=
!0;this._tileRequests.forEach(function(c){a=a&&c.fulfilled});return!a};b.prototype.acquireTile=function(a){var c=this,b,d=l.BitmapTile.pool.acquire();d.key.set(a);d.resolution=this._tileInfoView.getTileResolution(d.key);b=this._tileInfoView.tileInfo.size;d.width=b[0];d.height=b[1];this._tileInfoView.getTileCoords(d,d.key);var e={id:a.id,fulfilled:!1,promise:this._fetchQueue.push(d.key).then(function(a){d.source=a;d.once("attach",function(){return c.requestUpdate()});c.container.addChild(d)}).catch(function(a){d.source=
null;d.once("attach",function(){return c.requestUpdate()});c.container.addChild(d)})};e.promise.then(function(){return e.fulfilled=!0},function(){return e.fulfilled=!0});this._tileRequests.set(d,e);this.requestUpdate();return d};b.prototype.releaseTile=function(a){var c=this._tileRequests.get(a);c.fulfilled||this._fetchQueue.abort(c.id);this._tileRequests.delete(a);this.container.removeChild(a);this.requestUpdate()};b.prototype.fetchTile=function(a){return k(this,void 0,void 0,function(){return h(this,
function(c){return[2,this.layer.fetchTile(a.level,a.row,a.col)]})})};b.prototype.canResume=function(){var a=this.inherited(arguments);return a?null!==this.tileMatrixSet:a};b.prototype._refresh=function(){var a=this;this._fetchQueue.reset();this._tileStrategy.tiles.forEach(function(c){if(c.source){c.source=null;var b={id:c.key.id,fulfilled:!1,promise:a._fetchQueue.push(c.key).then(function(b){c.source=b;c.requestRender();a.notifyChange("updating")})};b.promise.then(function(){return b.fulfilled=!0},
function(){return b.fulfilled=!0});a._tileRequests.set(c,b)}});this.notifyChange("updating")};b.prototype._getTileMatrixSetBySpatialReference=function(a){var b=this.view.spatialReference,e=a.tileMatrixSets.find(function(a){return a.tileInfo.spatialReference.wkid===b.wkid});!e&&b.isWebMercator&&(e=a.tileMatrixSets.find(function(a){return-1<w.indexOf(a.tileInfo.spatialReference.wkid)}));return e};f([e.property({dependsOn:["tileMatrixSet"]})],b.prototype,"suspended",void 0);f([e.property({readOnly:!0,
dependsOn:["view.spatialReference","layer.activeLayer"]})],b.prototype,"tileMatrixSet",null);f([e.property({dependsOn:["updateRequested","attached"]})],b.prototype,"updating",void 0);return b=f([e.subclass("esri.views.2d.layers.WMTSLayerView2D")],b)}(e.declared(q,v))});