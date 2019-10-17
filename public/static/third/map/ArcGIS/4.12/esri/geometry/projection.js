// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/promiseUtils ./pe ./SpatialReference ./support/GeographicTransformation".split(" "),function(q,b,r,e,n,h){function k(c,f,a,d,b){void 0===d&&(d=null);void 0===b&&(b=!1);if(null===d){var e=h.cacheKey(f,a);void 0!==l[e]?d=l[e]:(d=p(f,a,null),null===d&&(d=new h),l[e]=d)}return g._project(c,f,a instanceof n||!1===b?a:new n(a),d,b)}function p(c,f,a){void 0===a&&(a=null);c=g._getTransformation(c,f,a);return null!==c?h.fromGE(c):null}Object.defineProperty(b,"__esModule",{value:!0});
var g=null;b.isLoaded=function(){return!!g&&e.isLoaded()};b.isSupported=function(){return e.isSupported()};var m=null;b.load=function(){return m?m:m=r.create(function(c,f){var a=e.load();q(["./geometryEngine"],function(b){g=b;a.then(function(){g._enableProjection(e);c()},function(a){f(a)})})})};b.project=function(c,b,a){void 0===a&&(a=null);return c instanceof Array?0===c.length?[]:k(c,c[0].spatialReference,b,a):k([c],c.spatialReference,b,a)[0]};var l={};b.projectMany=k;b.getTransformation=p;b.getTransformations=
function(c,b,a){void 0===a&&(a=null);c=g._getTransformationBySuitability(c,b,a);if(null!==c){b=[];for(a=0;a<c.length;a++)b.push(h.fromGE(c[a]));return b}return[]}});