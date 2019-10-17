// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/tsSupport/assignHelper @dojo/framework/shim/Set ../../../../core/Accessor ../../../../core/Handles ../../../../core/accessorSupport/decorators ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/Point ../PropertiesPool ./CameraOnSurface ./CenterOnSurface ./ContentGeometryUpdates ./disposeMembers ./Focus ./StableSurfaceCenter ./SurfaceGeometryUpdates ../../webgl-engine/lib/Intersector ../../webgl-engine/lib/intersectorUtils".split(" "),
function(e,k,q,c,g,r,t,u,b,m,n,v,w,x,l,y,z,A,B,C,p,D){Object.defineProperty(k,"__esModule",{value:!0});var E=Array;e=function(e){function a(d){d=e.call(this,d)||this;d.handles=new u;d.surfaceAltitudeAtCenter=0;d.surfaceAltitudeAtCenterDirty=!0;d.surfaceAltitudeAtCenterWithContent=0;d.surfaceAltitudeAtCenterWithContentDirty=!0;d.propertiesPool=new w.default({pointOfView:v,renderPointOfView:E},d);d.renderPointOfView=n.vec3f64.create();return d}q(a,e);a.prototype.initialize=function(){var d=this,a=this.view,
b=a.state,c=a.basemapTerrain,e=a.renderCoordsHelper,a=a.map;this.surfaceIntersector=new p(b.mode);this.surfaceIntersector.enable.backfacesTerrain=b.isGlobal?!1:!0;this.surfaceIntersector.enable.invisibleTerrain=!1;this.contentIntersector=new p(b.mode);this.contentIntersectorOptions={exclude:new r.Set([D.TERRAIN_ID])};var f=this.estimateSurfaceAltitudeAtCenter.bind(this),h={state:b,scheduler:this.view.resourceController.scheduler,surface:c,renderCoordsHelper:e};this._set("centerOnSurfaceInfrequent",
new l.default(g({},h,{priority:30,estimateSurfaceAltitudeAtCenter:f})));this._set("centerOnSurfaceFrequent",new l.default(g({},h,{priority:6,estimateSurfaceAltitudeAtCenter:f})));this._set("centerOnContent",new l.default(g({},h,{priority:6,estimateSurfaceAltitudeAtCenter:this.estimateSurfaceAltitudeAtCenterWithContent.bind(this)})));this._set("cameraOnSurface",new x.default(g({},h,{priority:30,map:a})));this._set("surfaceGeometryUpdates",new C.default(g({},h,{centerOnSurfaces:[this.centerOnSurfaceFrequent,
this.centerOnContent,this.centerOnSurfaceInfrequent]})));this._set("contentGeometryUpdates",new y.default({contentLayerViews:this.view.allLayerViews,renderCoordsHelper:e}));this._set("surfaceOrigin",new B.default({view:this.view}));this._set("focus",new A.default({state:b,surface:c,renderCoordsHelper:e,centerOnSurface:this.centerOnSurfaceFrequent}));this.handles.add([b.watch("camera",function(a){return d.cameraChanged(a)},!0),c.watch("extent",function(){return d.updateCenterPointsOfInterest()}),this.surfaceGeometryUpdates.events.on("request-update",
function(){return d.updateCenterPointsOfInterest()}),this.contentGeometryUpdates.events.on("request-update",function(){return d.updateCenterOnContent()})]);this.cameraChanged(this.view.state.camera);this.centerOnContent.update();this.centerOnSurfaceFrequent.update();this.centerOnSurfaceInfrequent.update();this.cameraOnSurface.update()};a.prototype.destroy=function(){z.default(this,"handles","centerOnSurfaceInfrequent","centerOnSurfaceFrequent","cameraOnSurface","centerOnContent","surfaceOrigin","focus",
"propertiesPool")};Object.defineProperty(a.prototype,"pointOfView",{get:function(){var a=this.propertiesPool.get("pointOfView");this.view.renderCoordsHelper.fromRenderCoords(this.renderPointOfView,a,this.view.state.spatialReference);return a},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"updating",{get:function(){return this.surfaceGeometryUpdates.updating||this.centerOnContent.updating||this.centerOnSurfaceInfrequent.updating||this.centerOnSurfaceFrequent.updating||this.cameraOnSurface.updating||
this.focus.updating},enumerable:!0,configurable:!0});a.prototype.estimateSurfaceAltitudeAtCenterWithContent=function(){if(!this.surfaceAltitudeAtCenterWithContentDirty)return this.surfaceAltitudeAtCenterWithContent;this.surfaceAltitudeAtCenterWithContentDirty=!1;this.view.sceneIntersectionHelper.intersectRay(this.view.state.camera.ray,f,this.contentIntersectorOptions,this.contentIntersector)?this.surfaceAltitudeAtCenterWithContent=this.view.renderCoordsHelper.getAltitude(f):this.surfaceAltitudeAtCenterWithContent=
this.estimateSurfaceAltitudeAtCenter();return this.surfaceAltitudeAtCenterWithContent};a.prototype.estimateSurfaceAltitudeAtCenter=function(){if(!this.view.basemapTerrain)return 0;if(!this.surfaceAltitudeAtCenterDirty)return this.surfaceAltitudeAtCenter;this.surfaceAltitudeAtCenterDirty=!1;var a=this.view.state.camera;this.surfaceIntersector.intersect(null,a.eye,a.center,null,a,null,!1);this.view.basemapTerrain.intersect(this.surfaceIntersector,null,a.eye,a.center);this.surfaceIntersector.results.min.getIntersectionPoint(f)&&
(this.surfaceAltitudeAtCenter=this.view.renderCoordsHelper.getAltitude(f));return this.surfaceAltitudeAtCenter};a.prototype.cameraChanged=function(a){this.updateCenterPointsOfInterest();a=a.eye;m.vec3.equals(this.renderPointOfView,a)||this._set("renderPointOfView",m.vec3.copy(this.propertiesPool.get("renderPointOfView"),a))};a.prototype.updateCenterPointsOfInterest=function(){this.surfaceAltitudeAtCenterWithContentDirty=this.surfaceAltitudeAtCenterDirty=!0;this.centerOnSurfaceFrequent.updateRenderLocation();
this.centerOnSurfaceInfrequent.updateRenderLocation();this.cameraOnSurface.updateRenderLocation();this.focus.updateRenderLocation();this.centerOnContent.updateRenderLocation()};a.prototype.updateCenterOnContent=function(){this.surfaceAltitudeAtCenterWithContentDirty=!0;this.centerOnContent.updateRenderLocation()};Object.defineProperty(a.prototype,"test",{get:function(){var a=this;return{update:function(){a.surfaceGeometryUpdates.update();a.centerOnSurfaceFrequent.update();a.centerOnSurfaceInfrequent.update()},
surfaceGeometryUpdates:this.surfaceGeometryUpdates}},enumerable:!0,configurable:!0});c([b.property({readOnly:!0})],a.prototype,"centerOnContent",void 0);c([b.property({readOnly:!0})],a.prototype,"centerOnSurfaceFrequent",void 0);c([b.property({readOnly:!0})],a.prototype,"centerOnSurfaceInfrequent",void 0);c([b.property({readOnly:!0})],a.prototype,"cameraOnSurface",void 0);c([b.property({readOnly:!0})],a.prototype,"focus",void 0);c([b.property({readOnly:!0})],a.prototype,"surfaceOrigin",void 0);c([b.property({readOnly:!0})],
a.prototype,"contentGeometryUpdates",void 0);c([b.property({readOnly:!0,dependsOn:["renderPointOfView"]})],a.prototype,"pointOfView",null);c([b.property({readOnly:!0})],a.prototype,"renderPointOfView",void 0);c([b.property({readOnly:!0})],a.prototype,"surfaceGeometryUpdates",void 0);c([b.property({constructOnly:!0})],a.prototype,"view",void 0);c([b.property({readOnly:!0,dependsOn:"surfaceGeometryUpdates.updating centerOnContent.updating centerOnSurfaceInfrequent.updating centerOnSurfaceFrequent.updating cameraOnSurface.updating focus.updating".split(" ")})],
a.prototype,"updating",null);return a=c([b.subclass("esri.views.3d.support.PointsOfInterest")],a)}(b.declared(t));k.PointsOfInterest=e;var f=n.vec3f64.create();k.default=e});