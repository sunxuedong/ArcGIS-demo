// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/support/aaBoundingBox ./featureExpressionInfoUtils ./Graphics3DGraphicElevationContext ./graphicUtils ../../webgl-engine/Stage".split(" "),function(p,F,G,z,A,x,m,g,B,C,D,f){p=function(){function c(a,b,g,f,h,d,l,n){this.type="object3d";this._addedToStage=
!1;this.alignedTerrainElevation=0;this.needsElevationUpdates=!1;this.graphics3DSymbolLayer=a;this.uniqueMaterials=f;this.uniqueGeometries=g;this.uniqueTextures=h;this.stageObject=b;this.elevationAligner=d;this.elevationContext=new C(l);this.stageLayer=this.stage=null;this._visible=!1;this.visibilityMode=null!=n?n:c.VisibilityModes.HIDE_FACERANGE}c.prototype.initialize=function(a,b){this.stageLayer=a;this.stage=b;if(this.uniqueMaterials)for(a=0;a<this.uniqueMaterials.length;a++)b.add(f.ModelContentType.MATERIAL,
this.uniqueMaterials[a]);if(this.uniqueGeometries)for(a=0;a<this.uniqueGeometries.length;a++)b.add(f.ModelContentType.GEOMETRY,this.uniqueGeometries[a]);if(this.uniqueTextures)for(a=0;a<this.uniqueTextures.length;a++)b.add(f.ModelContentType.TEXTURE,this.uniqueTextures[a]);b.add(f.ModelContentType.OBJECT,this.stageObject)};c.prototype.setVisibility=function(a){if(null!=this.stage)return this._visible!==a?((this._visible=a)?this._addedToStage?this.stageObject.unhideAllComponents():(this.stageLayer.addObject(this.stageObject),
this._addedToStage=!0):this.visibilityMode===c.VisibilityModes.HIDE_FACERANGE?this.stageObject.hideAllComponents():(this.stageLayer.removeObject(this.stageObject),this._addedToStage=!1),a=this.stage.renderView.ensureEdgeView(),a.hasObject(this.stageObject)&&a.updateObjectVisibility(this.stageObject,this._visible),!0):!1};Object.defineProperty(c.prototype,"visible",{get:function(){return this._visible},enumerable:!0,configurable:!0});c.prototype.destroy=function(){var a=this.stage;if(this.stageLayer){if(this.uniqueMaterials)for(var b=
0;b<this.uniqueMaterials.length;b++)a.remove(f.ModelContentType.MATERIAL,this.uniqueMaterials[b].id);if(this.uniqueGeometries)for(b=0;b<this.uniqueGeometries.length;b++)a.remove(f.ModelContentType.GEOMETRY,this.uniqueGeometries[b].id);if(this.uniqueTextures)for(b=0;b<this.uniqueTextures.length;b++)a.remove(f.ModelContentType.TEXTURE,this.uniqueTextures[b].id)}a.remove(f.ModelContentType.OBJECT,this.stageObject.id);this._addedToStage&&(this.stageLayer.removeObject(this.stageObject),this._addedToStage=
!1);a=this.stage.renderView.ensureEdgeView();a.hasObject(this.stageObject)&&a.removeObject(this.stageObject);this._visible=!1;this.stage=this.stageLayer=null};c.prototype.alignWithElevation=function(a,b,c){this.elevationAligner&&(B.setContextFeature(this.elevationContext.featureExpressionInfoContext,c),a=this.elevationAligner(this,this.elevationContext,a,b),null!=a&&(this.alignedTerrainElevation=a))};c.prototype.getBSRadius=function(){return this.stageObject.getBSRadius()};c.prototype.getCenterObjectSpace=
function(a){void 0===a&&(a=m.vec3f64.create());return x.vec3.copy(a,this.stageObject.getCenter(!0))};c.prototype.getBoundingBoxObjectSpace=function(a){void 0===a&&(a=g.create());var b=this.stageObject;a||(a=g.create());g.setMin(a,b.getBBMin(!0));g.setMax(a,b.getBBMax(!0));return a};c.prototype.getProjectedBoundingBox=function(a,b,c,f,p){return A(this,void 0,void 0,function(){var d,m,n,e,u,v,k,w,q,y;return z(this,function(r){switch(r.label){case 0:d=this.getBoundingBoxObjectSpace(p);m=E;n=g.isPoint(d)?
1:m.length;for(e=0;e<n;e++)u=m[e],h[0]=d[u[0]],h[1]=d[u[1]],h[2]=d[u[2]],x.vec3.transformMat4(h,h,this.stageObject.objectTransformation),l[3*e+0]=h[0],l[3*e+1]=h[1],l[3*e+2]=h[2];if(!a(l,0,n))return[2,null];g.empty(d);v=null;this.calculateRelativeScreenBounds&&(v=this.calculateRelativeScreenBounds());for(e=0;e<3*n;e+=3){for(k=0;3>k;k++)d[k]=Math.min(d[k],l[e+k]),d[k+3]=Math.max(d[k+3],l[e+k]);v&&c.push({location:l.slice(e,e+3),screenSpaceBoundingRect:v})}if(!b||!b.service||"absolute-height"===this.elevationContext.mode)return[3,
5];g.center(d,t);w="relative-to-scene"===this.elevationContext.mode?"scene":"ground";q=void 0;if(!b.useViewElevation)return[3,1];q=b.service.getElevation(t[0],t[1],w);return[3,4];case 1:return r.trys.push([1,3,,4]),y=D.demResolutionForBoundingBox(d,b),[4,b.service.queryElevation(t[0],t[1],f,y,w)];case 2:return q=r.sent(),[3,4];case 3:return r.sent(),q=null,[3,4];case 4:g.offset(d,0,0,-this.alignedTerrainElevation+q),r.label=5;case 5:return[2,d]}})})};c.prototype.addHighlight=function(a,b){b=this.stageObject.highlightAllComponents(b);
a.addObject(this.stageObject,b)};c.prototype.removeHighlight=function(a){a.removeObject(this.stageObject)};return c}();(function(c){c=c.VisibilityModes||(c.VisibilityModes={});c[c.REMOVE_OBJECT=0]="REMOVE_OBJECT";c[c.HIDE_FACERANGE=1]="HIDE_FACERANGE"})(p||(p={}));var l=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],h=m.vec3f64.create(),t=m.vec3f64.create(),E=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]];return p});