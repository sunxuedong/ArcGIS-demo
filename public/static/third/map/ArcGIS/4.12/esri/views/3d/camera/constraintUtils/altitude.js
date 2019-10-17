// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/mathUtils ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ./common ../../support/geometryUtils ../../support/intersectionUtils ../../support/mathUtils".split(" "),function(A,e,p,n,l,h,q,r,t){function m(b,d,c){void 0===c&&(c=h.defaultApplyOptions);var a;a=b.state.constraints.altitude;a=b.state.isGlobal&&a?2===c.interactionType&&h.hasConstraintType(c.selection,1)?!1:!0:!1;if(!a)return 0;var g=b.state.constraints.altitude;a=u;
a.min=g.min;a.max=g.max;var f=c.interactionType;if(0!==f){var g=a.min,v=a.max,k=c.interactionStartCamera;c=c.interactionFactor;var f=2===f||1===f,e=m(b,k),k=0===e?0:b.renderCoordsHelper.getAltitude(k.eye);a.min=g;a.max=v;h.adjustRangeForInteraction(e,k,f,c,.05*k,a)}b=b.renderCoordsHelper.getAltitude(d.eye);b=p.clamp(b,a.min,a.max)-b;return 1E-6>=Math.abs(b)?0:b}function w(b,d,c,a){b.renderCoordsHelper.worldUpAtPosition(d.eye,a);n.vec3.scale(a,a,c);return a}Object.defineProperty(e,"__esModule",{value:!0});
e.apply=function(b,d,c,a){void 0===c&&(c=h.defaultApplyOptions);void 0===a&&(a=d);a!==d&&a.copyFrom(d);var g=m(b,d,c);if(0===g)return!1;var f=b.renderCoordsHelper,e=f.getAltitude(d.eye)+g;b=h.interactionDirectionTowardsConstraintMinimization(b,d,c.interactionDirection,w(b,d,t.sign(g),x),y);c=n.vec3.copy(z,d.viewForward);f.intersectInfiniteManifold(q.ray.wrap(d.eye,b),e,a.eye)||f.setAltitude(e,a.eye);r.closestPointOnRay(d.eye,c,d.center,d.center);a.markViewDirty();return!0};e.error=m;var u={min:0,
max:0},y=l.vec3f64.create(),x=l.vec3f64.create(),z=l.vec3f64.create()});