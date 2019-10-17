// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/libs/gl-matrix-2/mat3 ../../../../core/libs/gl-matrix-2/mat3f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../support/mathUtils".split(" "),function(u,v,z,w,d,f,q){Object.defineProperty(v,"__esModule",{value:!0});var r=q.angle,t=q.lerp,A=q.slerp,h=f.vec3f64.create(),g=f.vec3f64.create(),k=f.vec3f64.create(),c=f.vec3f64.create(),l=f.vec3f64.create(),n=f.vec3f64.create(),m=f.vec3f64.fromValues(0,0,1),x=f.vec3f64.fromValues(0,
1,0),p=f.vec3f64.fromValues(1,0,0),y=w.mat3f64.create();u=function(){function e(a){void 0===a&&(a="global");this.viewingMode=a;this.center=f.vec3f64.create();this.distance=this.yaw=this.pitch=0;this.lookAtDirection=f.vec3f64.clone(x)}e.prototype.pixelsPerPanAtZoom=function(a){return this.size/2/(this._zoomToPanScale*a)};e.prototype.zoomAtPixelsPerPan=function(a){return this.size/2/(this._zoomToPanScale*a)};e.prototype.pixelsPerRotateAtZoom=function(a){return this.size/2/Math.max(Math.cos(Math.abs(this.pitch)),
.5)};e.prototype.compareTo=function(a,b){b||(b={pan:0,rotate:0,sourceZoom:0,targetZoom:0});if("global"===this.viewingMode){var c=d.vec3.length(this.center),e=d.vec3.length(a.center),c=(c+e)/2;b.pan=r(this.center,a.center)*c}else b.pan=d.vec3.distance(this.center,a.center);c=Math.abs(a.yaw-this.yaw);c>=Math.PI&&(c=2*Math.PI-c);b.rotate=Math.max(c,Math.abs(a.pitch-this.pitch));b.sourceZoom=this.distance;b.targetZoom=a.distance;return b};e.prototype.interpolate=function(a,b,c){"global"===this.viewingMode?
A(a.center,b.center,c.pan,this.center):d.vec3.lerp(this.center,a.center,b.center,c.pan);this.distance=t(a.distance,b.distance,c.zoom);this.pitch=t(a.pitch,b.pitch,c.rotate);a=a.yaw;b=b.yaw;Math.abs(b-a)>=Math.PI&&(a+=2*(a<b?1:-1)*Math.PI);this.yaw=t(a,b,c.rotate)};e.prototype.copyFrom=function(a){d.vec3.copy(this.center,a.center);this.pitch=a.pitch;this.yaw=a.yaw;this.distance=a.distance;d.vec3.copy(this.lookAtDirection,a.lookAtDirection);this.size=a.size;this.copyFromCommon(a);this.viewingMode=a.viewingMode};
e.prototype.copyFromRenderCamera=function(a){var b=this._lookAtOrientation(a.center,y);d.vec3.copy(this.center,a.center);d.vec3.subtract(c,a.center,a.eye);d.vec3.transformMat3(c,c,b);d.vec3.transformMat3(l,a.up,b);this.distance=d.vec3.length(c);c[0]/=this.distance;c[1]/=this.distance;c[2]/=this.distance;this.pitch=this._eyeUpToPitch(c,l);this.yaw=this._eyeUpToYaw(c,l);this.size=Math.sqrt(a.width*a.width+a.height*a.height);this.copyFromCommon(a)};e.prototype.copyFromCommon=function(a){this.fov=a.fov;
this._zoomToPanScale=Math.atan(.5*this.fov)};e.prototype.copyToRenderCamera=function(a){var b=this._lookAtOrientation(this.center,y);z.mat3.transpose(b,b);this._axisAngleVec3(p,this.pitch-Math.PI/2,x,c);this._axisAngleVec3(m,this.yaw,c);this._axisAngleVec3(p,this.pitch-Math.PI/2,m,l);this._axisAngleVec3(m,this.yaw,l);d.vec3.scale(c,c,this.distance);d.vec3.transformMat3(c,c,b);d.vec3.transformMat3(l,l,b);a.center=this.center;a.eye=d.vec3.subtract(c,this.center,c);a.up=l};e.prototype._axisAngleVec3=
function(a,b,c,e){void 0===e&&(e=c);var f=Math.cos(b);b=Math.sin(b);d.vec3.scale(h,c,f);d.vec3.cross(g,a,c);d.vec3.scale(g,g,b);d.vec3.scale(k,a,(1-f)*d.vec3.dot(a,c));return d.vec3.add(e,d.vec3.add(e,h,g),k)};e.prototype._lookAtOrientation=function(a,b){this._upAtLookAt(a,k);d.vec3.cross(h,this.lookAtDirection,k);d.vec3.normalize(h,h);0===h[0]&&0===h[1]&&0===h[2]&&d.vec3.copy(h,p);d.vec3.cross(g,k,h);d.vec3.normalize(g,g);b||(b=w.mat3f64.create());b[0]=h[0];b[1]=g[0];b[2]=k[0];b[3]=h[1];b[4]=g[1];
b[5]=k[1];b[6]=h[2];b[7]=g[2];b[8]=k[2];return b};e.prototype._upAtLookAt=function(a,b){return"local"===this.viewingMode?d.vec3.copy(b,m):d.vec3.normalize(b,a)};e.prototype._eyeUpToPitch=function(a,b){return Math.PI-r(m,a)};e.prototype._eyeUpToYaw=function(a,b){.5>Math.abs(b[2])?(d.vec3.copy(n,b),0<a[2]&&d.vec3.scale(n,n,-1)):d.vec3.copy(n,a);d.vec3.cross(g,n,m);d.vec3.normalize(g,g);return r(p,g,m)};return e}();v.default=u});