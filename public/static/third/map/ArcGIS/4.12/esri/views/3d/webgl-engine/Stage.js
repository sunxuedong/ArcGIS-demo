// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/extendsHelper ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ./lib/AutoDisposable ./lib/ModelContentType ./lighting/Lightsources ./parts/Model ./parts/RenderView".split(" "),function(v,w,m,r,n,h,k,p,l,t,u){function q(f){return"function"===typeof f.addParentStage&&"function"===typeof f.removeParentStage}return function(f){function b(a,d,c,b){var e=f.call(this)||this;e.sceneIntersectionHelper=
b;e._viewContent=[];e._mainLightDirection=h.vec3f64.fromValues(0,1,0);e.container=d;e.viewingMode=a;e.model=new t;e.renderView=new u(d,e,e.model.getDirtySet(),c);e.setLighting({lights:[new l.MainLight(h.vec3f64.fromValues(.7,.7,.7)),new l.AmbientLight(h.vec3f64.fromValues(.3,.3,.3))],groundLightingFactor:.5,globalFactor:.5});return e}r(b,f);Object.defineProperty(b.prototype,"mainLightDirection",{get:function(){return this._mainLightDirection},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"lighting",{get:function(){return this._lighting},enumerable:!0,configurable:!0});b.prototype.setLighting=function(a){n.vec3.set(this._mainLightDirection,0,0,0);for(var d=0,b=a.lights;d<b.length;d++){var g=b[d];if(g instanceof l.MainLight){n.vec3.negate(this._mainLightDirection,g.direction);break}}this._lighting=a;this.renderView.setNeedsRender()};b.prototype.add=function(a,d){this.model.add(a,d);q(d)&&d.addParentStage(this)};b.prototype.remove=function(a,d){a=this.model.remove(a,d);q(a)&&a.removeParentStage(this);
return a};b.prototype.notifyDirty=function(a,d,b,g){this.model.notifyDirty(a,d,b,g)};b.prototype.processDirty=function(){var a=this.model.getDirtySet(),d=a.getDirtyMaterials();if(a.hasDirtyGeometryRecords()||d){b.DebugSettings.logDirtySet&&console.log("Dirty set: "+this.model.getDirtySet().formatDebugInfo(!1));var c=a.commitLayers(this._viewContent);(0<c[0].length+c[1].length+c[2].length||d)&&this.renderView.modify(c[0],c[1],c[2],d);b.DebugSettings.logDirtySet&&(console.log("RGs add: "+c[0].map(function(a){return a.uniqueName})),
console.log("RGs remove: "+c[1].map(function(a){return a.uniqueName})));a.commit();a.clearDirtyMaterials();this.renderView.setNeedsRender()}};b.prototype.processDirtyLayer=function(a){var b=this.model.getDirtySet(),c=b.getDirtyMaterials();a=b.commitLayers([a]);(0<a[0].length+a[1].length+a[2].length||c)&&this.renderView.modify(a[0],a[1],a[2],c);b.clearDirtyMaterials();this.renderView.setNeedsRender()};b.prototype.get=function(a,b){return this.model.get(a,b)};b.prototype.getAll=function(a){return this.model.getAll(a)};
b.prototype.getCamera=function(){return this.renderView.getCamera()};b.prototype.setCamera=function(a){this.renderView.setCamera(a)};b.prototype.getLayers=function(){return this.model.getAll(p.LAYER)};b.prototype.getViewContent=function(){return this._viewContent.slice(0)};b.prototype.addToViewContent=function(a){for(var b=[],c=0;c<a.length;c++)-1===this._viewContent.indexOf(a[c])&&b.push(a[c]);0<a.length&&(this.processDirty(),a=this.model.getDirtySet().getResidentRenderGeometriesFilteredByLayers(b),
this.renderView.modify(a,[],[]),this._viewContent.push.apply(this._viewContent,b))};b.prototype.removeFromViewContent=function(a){this.processDirty();for(var b=this.model.getDirtySet(),c=this._viewContent,g=[],e=0;e<a.length;e++){var f=c.indexOf(a[e]);-1<f&&(c[f]=c[c.length-1],c.pop(),g.push(a[e]))}a=b.getResidentRenderGeometriesFilteredByLayers(g);this.renderView.modify([],a,[])};b.prototype.addRenderPlugin=function(a,b){"intersect"in b&&this.sceneIntersectionHelper.addIntersectionHandler(b);return this.renderView.renderPlugins.add(a,
b)};b.prototype.removeRenderPlugin=function(a){"intersect"in a&&this.sceneIntersectionHelper.removeIntersectionHandler(a);return this.renderView.renderPlugins.remove(a)};b.prototype.getContentDebugStrings=function(a){return this.model.formatDebugInfo(a)};b.DebugSettings={endFrameContentValidation:!1,logDirtySet:!1};b.ModelContentType=p;m([k.autoDispose()],b.prototype,"model",void 0);m([k.autoDispose()],b.prototype,"renderView",void 0);return b}(k.AutoDisposable)});