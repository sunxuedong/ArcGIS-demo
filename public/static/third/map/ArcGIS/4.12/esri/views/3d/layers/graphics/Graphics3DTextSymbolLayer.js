// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/Error ../../../../core/maybe ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/vec2f64 ../../../../symbols/callouts/calloutUtils ./ElevationAligners ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolCommonCode ./Graphics3DSymbolLayer ./graphicUtils ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/TextRenderParameters ../../webgl-engine/lib/TextTexture ../../webgl-engine/materials/HUDMaterial".split(" "),
function(p,r,v,y,z,A,c,B,C,D,E,F,t,G,w,H,I,J,K,x){function u(c,d,a){c&&c.forEach(function(b){var c=d(b);c&&a(c,b.graphic)})}Object.defineProperty(r,"__esModule",{value:!0});var L=[0,0,1];p=function(n){function d(a,b,c,e){a=n.call(this,a,b,c,e)||this;a._elevationOptions={supportsOffsetAdjustment:!0,supportsOnTheGround:!1};return a}v(d,n);d.prototype.doLoad=function(){return z(this,void 0,void 0,function(){var a;return y(this,function(b){if(!this._isPropertyDriven("size")&&(a=w.validateSymbolLayerSize(this.symbolLayer.size)))throw new A("graphics3dtextsymbollayer:invalid-size",
a);this._createTextRenderParameters();return[2]})})};d.prototype._createTextRenderParameters=function(){this._textRenderParameters=J.default.fromSymbol(this.symbolLayer,this._context.layerView.view.pixelRatio)};d.prototype.destroy=function(){n.prototype.destroy.call(this)};d.prototype.createGraphics3DGraphic=function(a){a=a.graphic;var b=t.placePointOnGeometry(a.geometry);if(c.isNone(b))return this.logger.warn("unsupported geometry type for text symbol: "+a.geometry.type),null;var d=this.symbolLayer.text;
if(!d)return null;var e=D.isCalloutSupport(this.symbol)&&this.symbol.hasVisibleVerticalOffset()?this.symbol:null;return this._createAs3DShape(a,b,d,e)};d.prototype.createLabel=function(a,b,d,e){a=a.graphic;var f=t.placePointOnGeometry(a.geometry);if(c.isNone(f))return this.logger.warn("unsupported geometry type for label: "+a.geometry.type),null;var g=b.text;return g?this._createAs3DShape(a,f,g,b,b,d,e):null};d.prototype.getGraphicElevationContext=function(a,b){void 0===b&&(b=0);a=n.prototype.getGraphicElevationContext.call(this,
a);a.addOffsetRenderUnits(b);return a};d.prototype.layerOpacityChanged=function(){this.logger.warn("layer opacity change not yet implemented in Graphics3DTextSymbolLayer");return!1};d.prototype.layerElevationInfoChanged=function(a,b){var c=this;u(a,b,function(a,b){c.updateGraphicElevationContext(b,a)});return!0};d.prototype.slicePlaneEnabledChanged=function(a,b){var c=this;u(a,b,function(a){var b=0;for(a=a.stageObject.geometryRecords;b<a.length;b++)a[b].material.setParameterValues({slicePlaneEnabled:c._context.slicePlaneEnabled})});
return!0};d.prototype.pixelRatioChanged=function(a,b){return!1};d.prototype.updateGraphicElevationContext=function(a,b){a=this.getGraphicElevationContext(a,b.metadata.elevationOffset);b.elevationContext.set(a);b.needsElevationUpdates=t.needsElevationUpdates2D(a.mode)||"absolute-height"===a.mode};d.prototype._defaultElevationInfoNoZ=function(){return M};d.prototype._createAs3DShape=function(a,b,d,e,f,g,l){void 0===f&&(f=N);var q=this.getGraphicElevationContext(a,f.elevationOffset),m=this._context.layer.id+
"_label_"+a.uid,k="polyline"===c.get(a.geometry,"type"),n=a.uid;a=this._context.stage.renderView.renderingContext;var h=w.namedAnchorToHUDMaterialAnchorPos[f.anchor in w.namedAnchorToHUDMaterialAnchorPos?f.anchor:"center"];a=c.isNone(l)?new K(a,d,this._textRenderParameters,m):null;h={occlusionTest:!0,screenOffset:f.screenOffset,anchorPos:h,polygonOffset:!0,color:[1,1,1,1],centerOffsetUnits:f.centerOffsetUnits,debugDrawBorder:f.debugDrawBorder,drawInSecondSlot:!0};c.isSome(a)&&(h.textureId=a.id,h.texCoordScale=
a.texcoordScale);c.isSome(l)&&(h.textureId=l.textureId);if(c.isSome(e)&&c.isSome(e.verticalOffset)){e=e.verticalOffset;var p=e.minWorldLength,r=e.maxWorldLength;h.verticalOffset={screenLength:B.pt2px(e.screenLength),minWorldLength:p||0,maxWorldLength:null!=r?r:Infinity}}this._context.screenSizePerspectiveEnabled&&(e=this._context.sharedResources,p=e.screenSizePerspectiveSettings,h.screenSizePerspective=e.screenSizePerspectiveSettingsLabels.overridePadding(this._textRenderParameters.haloSize),h.screenSizePerspectiveAlignment=
p);k&&(h.shaderPolygonOffset=1E-4);h.slicePlaneEnabled=this._context.slicePlaneEnabled;k=null;e=JSON.stringify(h);c.isSome(g)?(k=g.getMaterial(e),null==k&&(k=new x(h,m),g.addMaterial(e,k))):k=new x(h,m);k=[k];l=I.createPointGeometry(L,f.translation,void 0,c.isSome(a)?[a.displayWidth,a.displayHeight]:[0,0],f.centerOffset,c.isSome(l)?[0,0]:null);l=[new H(l,m)];m=t.createStageObjectForPoint(this._context,b,l,k,null,null,q,m,this._context.layer.uid,n,!0);if(null===m)return null;n=E.perObjectElevationAligner;
g=new F(this,m.object,l,c.isNone(g)?k:null,c.isSome(a)?[a]:null,n,q);g.alignedTerrainElevation=m.terrainElevation;g.needsElevationUpdates=t.needsElevationUpdates2D(q.mode)||"absolute-height"===q.mode;var q=c.isSome(a)?a:f,u=q.displayWidth,v=q.displayHeight;g.getScreenSize=function(a){void 0===a&&(a=C.vec2f64.create());a[0]=u;a[1]=v;return a};g.metadata={labelText:d,elevationOffset:f.elevationOffset};t.extendPointGraphicElevationContext(g,b,this._context.elevationProvider);return g};return d}(G.default);
r.Graphics3DTextSymbolLayer=p;var M={mode:"relative-to-ground",offset:0},N={text:null,translation:[0,0,0],elevationOffset:0,centerOffset:[0,0,0,1],screenOffset:[0,0],anchor:"center",verticalOffset:null,centerOffsetUnits:null,debugDrawBorder:!1,displayWidth:0,displayHeight:0};r.default=p});