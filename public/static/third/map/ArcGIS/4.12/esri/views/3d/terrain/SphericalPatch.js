// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../support/earthUtils ../support/geometryUtils ../support/mathUtils ../support/projectionUtils ./PatchGeometryFactory ./Tile".split(" "),function(t,u,m,g,n,f,h,p,k,q,r){return function(l){function e(a,b,c){var d=l.call(this,e.NumSubdivisionsAtLevel)||this;d.obb=Array(8);d.isWebMercator=!1;for(var f=0;8>f;f++)d.obb[f]=n.vec3f64.create();void 0!==a&&d.init(a,b,c);
return d}m(e,l);e.prototype.init=function(a,b,c){l.prototype.init.call(this,a,b,c);this.isWebMercator=c.tilingScheme.spatialReference.isWebMercator;b=this.extentInRadians[0];c=this.extentInRadians[1];var d=this.extentInRadians[2],e=this.extentInRadians[3];a=a[0];var h=p.lerp(c,e,.5),m=p.lerp(b,d,.5);this.edgeLen=(d-b)*Math.cos(0===a?0:Math.min(Math.abs(c),Math.abs(e)))*f.earthRadius;this.edgeLen2=this.edgeLen*this.edgeLen;this.curvatureHeight=f.earthRadius-Math.sqrt(f.earthRadius*f.earthRadius-this.edgeLen2/
4);k.wgs84ComparableLonLatToECEF(this.centerAtSeaLevel,m,h,0);b=n.vec3f64.fromArray(this.centerAtSeaLevel);g.vec3.normalize(b,this.centerAtSeaLevel);this.up=b;this._updateOBB();this.updateRadiusAndCenter()};e.prototype.updateRadiusAndCenter=function(){if(0===this.lij[0])g.vec3.set(this.center,0,0,0),this.radius=f.earthRadius+this.elevationBounds[1];else{l.prototype.updateRadiusAndCenter.call(this);var a=Math.max(g.vec3.squaredDistance(this.center,this.obb[0]),g.vec3.squaredDistance(this.center,this.obb[1]));
this.radius=Math.sqrt(a)}};e.prototype._isVisible=function(){if(!this.intersectsClippingArea)return!1;var a=this.surface.frustum.planes;if(10>this.lij[0])return h.frustum.intersectsSphere(a,h.sphere.wrap(this.radius,this.center));for(var b=this.obb,c=0;6>c;c++){for(var d=void 0,d=0;8>d&&!h.plane.isPointOutside(a[c],b[d]);d++);if(8===d)return!1}return!0};e.prototype.computeElevationBounds=function(){l.prototype.computeElevationBounds.call(this);this._updateOBB()};e.prototype.createGeometry=function(a,
b,c){var d=this._isPole(this.lij[1],this.lij[0]);q.createSphericalGlobePatch(a,this.extent,b,this.renderData,c,this.extentInRadians,this.isWebMercator,d);this.updateMemoryUsed()};e.prototype._updateOBB=function(){for(var a=this.extentInRadians,b=this.obb,c=0;2>c;c++){var d=this.elevationBounds[c],e=4*c;k.wgs84ComparableLonLatToECEF(b[e++],a[0],a[1],d);k.wgs84ComparableLonLatToECEF(b[e++],a[0],a[3],d);k.wgs84ComparableLonLatToECEF(b[e++],a[2],a[3],d);k.wgs84ComparableLonLatToECEF(b[e++],a[2],a[1],
d)}this.isWebMercator&&(a=this._isPole(this.lij[1],this.lij[0]),2===a?(g.vec3.set(b[1],0,0,f.earthRadius),g.vec3.set(b[2],0,0,f.earthRadius),g.vec3.set(b[5],0,0,f.earthRadius),g.vec3.set(b[6],0,0,f.earthRadius)):1===a&&(g.vec3.set(b[0],0,0,-f.earthRadius),g.vec3.set(b[3],0,0,-f.earthRadius),g.vec3.set(b[4],0,0,-f.earthRadius),g.vec3.set(b[7],0,0,-f.earthRadius)))};e.prototype._isPole=function(a,b){var c=0;a===(1<<b)-1&&(c+=1);0===a&&(c+=2);return c};e.NumSubdivisionsAtLevel=[128,64,32,16,16,8,8,4];
return e}(r)});