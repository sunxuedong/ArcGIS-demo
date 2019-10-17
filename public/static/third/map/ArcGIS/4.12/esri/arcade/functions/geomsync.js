// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../kernel ../kernel ../languageUtils ./centroid ../../geometry/Extent ../../geometry/Geometry ../../geometry/Multipoint ../../geometry/Point ../../geometry/Polygon ../../geometry/Polyline ../../geometry/support/jsonUtils".split(" "),function(z,r,y,l,b,u,p,k,v,t,n,q,w){function x(b){return 0===y.version.indexOf("4.")?n.fromExtent(b):new n({spatialReference:b.spatialReference,rings:[[[b.xmin,b.ymin],[b.xmin,b.ymax],[b.xmax,b.ymax],[b.xmax,b.ymin],[b.xmin,b.ymin]]]})}Object.defineProperty(r,
"__esModule",{value:!0});var g=null;r.setGeometryEngine=function(b){g=b};r.registerFunctions=function(f,h){function m(d){b.pcCheck(d,2,2);if(!(d[0]instanceof k&&d[1]instanceof k||d[0]instanceof k&&null===d[1]||d[1]instanceof k&&null===d[0]||null===d[0]&&null===d[1]))throw Error("Illegal Argument");}f.disjoint=function(d,e){return h(d,e,function(c,d,a){a=b.autoCastFeatureToGeometry(a);m(a);return null===a[0]||null===a[1]?!0:g.disjoint(a[0],a[1])})};f.intersects=function(d,e){return h(d,e,function(c,
d,a){a=b.autoCastFeatureToGeometry(a);m(a);return null===a[0]||null===a[1]?!1:g.intersects(a[0],a[1])})};f.touches=function(d,e){return h(d,e,function(c,d,a){a=b.autoCastFeatureToGeometry(a);m(a);return null===a[0]||null===a[1]?!1:g.touches(a[0],a[1])})};f.crosses=function(d,e){return h(d,e,function(c,d,a){a=b.autoCastFeatureToGeometry(a);m(a);return null===a[0]||null===a[1]?!1:g.crosses(a[0],a[1])})};f.within=function(d,e){return h(d,e,function(c,d,a){a=b.autoCastFeatureToGeometry(a);m(a);return null===
a[0]||null===a[1]?!1:g.within(a[0],a[1])})};f.contains=function(d,e){return h(d,e,function(c,d,a){a=b.autoCastFeatureToGeometry(a);m(a);return null===a[0]||null===a[1]?!1:g.contains(a[0],a[1])})};f.overlaps=function(d,e){return h(d,e,function(c,d,a){a=b.autoCastFeatureToGeometry(a);m(a);return null===a[0]||null===a[1]?!1:g.overlaps(a[0],a[1])})};f.equals=function(d,e){return h(d,e,function(c,d,a){b.pcCheck(a,2,2);return a[0]===a[1]?!0:a[0]instanceof k&&a[1]instanceof k?g.equals(a[0],a[1]):b.isDate(a[0])&&
b.isDate(a[1])?a[0].getTime()===a[1].getTime():!1})};f.relate=function(d,e){return h(d,e,function(c,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,3,3);if(a[0]instanceof k&&a[1]instanceof k)return g.relate(a[0],a[1],b.toString(a[2]));if(a[0]instanceof k&&null===a[1]||a[1]instanceof k&&null===a[0]||null===a[0]&&null===a[1])return!1;throw Error("Illegal Argument");})};f.intersection=function(d,e){return h(d,e,function(c,d,a){a=b.autoCastFeatureToGeometry(a);m(a);return null===a[0]||null===a[1]?null:
g.intersect(a[0],a[1])})};f.union=function(d,e){return h(d,e,function(c,e,a){a=b.autoCastFeatureToGeometry(a);c=[];if(0===a.length)throw Error("Function called with wrong number of Parameters");if(1===a.length)if(b.isArray(a[0]))for(a=b.autoCastFeatureToGeometry(a[0]),e=0;e<a.length;e++){if(null!==a[e]){if(!(a[e]instanceof k))throw Error("Illegal Argument");c.push(a[e])}}else if(b.isImmutableArray(a[0]))for(a=b.autoCastFeatureToGeometry(a[0].toArray()),e=0;e<a.length;e++){if(null!==a[e]){if(!(a[e]instanceof
k))throw Error("Illegal Argument");c.push(a[e])}}else{if(a[0]instanceof k)return b.fixSpatialReference(l.cloneGeometry(a[0]),d.spatialReference);if(null===a[0])return null;throw Error("Illegal Argument");}else for(e=0;e<a.length;e++)if(null!==a[e]){if(!(a[e]instanceof k))throw Error("Illegal Argument");c.push(a[e])}return 0===c.length?null:g.union(c)})};f.difference=function(d,e){return h(d,e,function(c,d,a){a=b.autoCastFeatureToGeometry(a);m(a);return null!==a[0]&&null===a[1]?l.cloneGeometry(a[0]):
null===a[0]?null:g.difference(a[0],a[1])})};f.symmetricdifference=function(d,e){return h(d,e,function(c,d,a){a=b.autoCastFeatureToGeometry(a);m(a);return null===a[0]&&null===a[1]?null:null===a[0]?l.cloneGeometry(a[1]):null===a[1]?l.cloneGeometry(a[0]):g.symmetricDifference(a[0],a[1])})};f.clip=function(d,e){return h(d,e,function(c,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,2,2);if(!(a[1]instanceof p)&&null!==a[1])throw Error("Illegal Argument");if(null===a[0])return null;if(!(a[0]instanceof
k))throw Error("Illegal Argument");return null===a[1]?null:g.clip(a[0],a[1])})};f.cut=function(d,e){return h(d,e,function(c,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,2,2);if(!(a[1]instanceof q)&&null!==a[1])throw Error("Illegal Argument");if(null===a[0])return[];if(!(a[0]instanceof k))throw Error("Illegal Argument");return null===a[1]?[l.cloneGeometry(a[0])]:g.cut(a[0],a[1])})};f.area=function(d,e){return h(d,e,function(c,e,a){b.pcCheck(a,1,2);a=b.autoCastFeatureToGeometry(a);if(null===a[0])return 0;
if(b.isArray(a[0])||b.isImmutableArray(a[0]))return c=b.autoCastArrayOfPointsToPolygon(a[0],d.spatialReference),null===c?0:g.planarArea(c,l.convertSquareUnitsToCode(b.defaultUndefined(a[1],-1)));if(!(a[0]instanceof k))throw Error("Illegal Argument");return g.planarArea(a[0],l.convertSquareUnitsToCode(b.defaultUndefined(a[1],-1)))})};f.areageodetic=function(d,e){return h(d,e,function(c,e,a){b.pcCheck(a,1,2);a=b.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(b.isArray(a[0])||b.isImmutableArray(a[0]))return c=
b.autoCastArrayOfPointsToPolygon(a[0],d.spatialReference),null===c?0:g.geodesicArea(c,l.convertSquareUnitsToCode(b.defaultUndefined(a[1],-1)));if(!(a[0]instanceof k))throw Error("Illegal Argument");return g.geodesicArea(a[0],l.convertSquareUnitsToCode(b.defaultUndefined(a[1],-1)))})};f.length=function(d,e){return h(d,e,function(c,e,a){b.pcCheck(a,1,2);a=b.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(b.isArray(a[0])||b.isImmutableArray(a[0]))return c=b.autoCastArrayOfPointsToPolyline(a[0],
d.spatialReference),null===c?0:g.planarLength(c,l.convertLinearUnitsToCode(b.defaultUndefined(a[1],-1)));if(!(a[0]instanceof k))throw Error("Illegal Argument");return g.planarLength(a[0],l.convertLinearUnitsToCode(b.defaultUndefined(a[1],-1)))})};f.lengthgeodetic=function(d,e){return h(d,e,function(c,e,a){b.pcCheck(a,1,2);a=b.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(b.isArray(a[0])||b.isImmutableArray(a[0]))return c=b.autoCastArrayOfPointsToPolyline(a[0],d.spatialReference),null===
c?0:g.geodesicLength(c,l.convertLinearUnitsToCode(b.defaultUndefined(a[1],-1)));if(!(a[0]instanceof k))throw Error("Illegal Argument");return g.geodesicLength(a[0],l.convertLinearUnitsToCode(b.defaultUndefined(a[1],-1)))})};f.distance=function(d,e){return h(d,e,function(c,e,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,2,3);c=a[0];if(b.isArray(a[0])||b.isImmutableArray(a[0]))c=b.autoCastArrayOfPointsToMultiPoint(a[0],d.spatialReference);e=a[1];if(b.isArray(a[1])||b.isImmutableArray(a[1]))e=b.autoCastArrayOfPointsToMultiPoint(a[1],
d.spatialReference);if(!(c instanceof k))throw Error("Illegal Argument");if(!(e instanceof k))throw Error("Illegal Argument");return g.distance(c,e,l.convertLinearUnitsToCode(b.defaultUndefined(a[2],-1)))})};f.densify=function(d,e){return h(d,e,function(c,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,2,3);if(null===a[0])return null;if(!(a[0]instanceof k))throw Error("Illegal Argument");c=b.toNumber(a[1]);if(isNaN(c))throw Error("Illegal Argument");if(0>=c)throw Error("Illegal Argument");return a[0]instanceof
n||a[0]instanceof q?g.densify(a[0],c,l.convertLinearUnitsToCode(b.defaultUndefined(a[2],-1))):a[0]instanceof p?g.densify(x(a[0]),c,l.convertLinearUnitsToCode(b.defaultUndefined(a[2],-1))):a[0]})};f.densifygeodetic=function(d,e){return h(d,e,function(c,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,2,3);if(null===a[0])return null;if(!(a[0]instanceof k))throw Error("Illegal Argument");c=b.toNumber(a[1]);if(isNaN(c))throw Error("Illegal Argument");if(0>=c)throw Error("Illegal Argument");return a[0]instanceof
n||a[0]instanceof q?g.geodesicDensify(a[0],c,l.convertLinearUnitsToCode(b.defaultUndefined(a[2],-1))):a[0]instanceof p?g.geodesicDensify(x(a[0]),c,l.convertLinearUnitsToCode(b.defaultUndefined(a[2],-1))):a[0]})};f.generalize=function(d,e){return h(d,e,function(c,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,2,4);if(null===a[0])return null;if(!(a[0]instanceof k))throw Error("Illegal Argument");c=b.toNumber(a[1]);if(isNaN(c))throw Error("Illegal Argument");return g.generalize(a[0],c,b.toBoolean(b.defaultUndefined(a[2],
!0)),l.convertLinearUnitsToCode(b.defaultUndefined(a[3],-1)))})};f.buffer=function(d,e){return h(d,e,function(c,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,2,3);if(null===a[0])return null;if(!(a[0]instanceof k))throw Error("Illegal Argument");c=b.toNumber(a[1]);if(isNaN(c))throw Error("Illegal Argument");return 0===c?l.cloneGeometry(a[0]):g.buffer(a[0],c,l.convertLinearUnitsToCode(b.defaultUndefined(a[2],-1)))})};f.buffergeodetic=function(d,e){return h(d,e,function(c,d,a){a=b.autoCastFeatureToGeometry(a);
b.pcCheck(a,2,3);if(null===a[0])return null;if(!(a[0]instanceof k))throw Error("Illegal Argument");c=b.toNumber(a[1]);if(isNaN(c))throw Error("Illegal Argument");return 0===c?l.cloneGeometry(a[0]):g.geodesicBuffer(a[0],c,l.convertLinearUnitsToCode(b.defaultUndefined(a[2],-1)))})};f.offset=function(d,e){return h(d,e,function(c,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,2,6);if(null===a[0])return null;if(!(a[0]instanceof n||a[0]instanceof q))throw Error("Illegal Argument");c=b.toNumber(a[1]);
if(isNaN(c))throw Error("Illegal Argument");d=b.toNumber(b.defaultUndefined(a[4],10));if(isNaN(d))throw Error("Illegal Argument");var e=b.toNumber(b.defaultUndefined(a[5],0));if(isNaN(e))throw Error("Illegal Argument");return g.offset(a[0],c,l.convertLinearUnitsToCode(b.defaultUndefined(a[2],-1)),b.toString(b.defaultUndefined(a[3],"round")).toLowerCase(),d,e)})};f.rotate=function(d,e){return h(d,e,function(c,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,2,3);c=a[0];if(null===c)return null;if(!(c instanceof
k))throw Error("Illegal Argument");c instanceof p&&(c=n.fromExtent(c));d=b.toNumber(a[1]);if(isNaN(d))throw Error("Illegal Argument");a=b.defaultUndefined(a[2],null);if(null===a)return g.rotate(c,d);if(a instanceof t)return g.rotate(c,d,a);throw Error("Illegal Argument");})};f.centroid=function(d,e){return h(d,e,function(c,e,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,1,1);if(null===a[0])return null;c=a[0];if(b.isArray(a[0])||b.isImmutableArray(a[0]))c=b.autoCastArrayOfPointsToMultiPoint(a[0],
d.spatialReference);if(null===c)return null;if(!(c instanceof k))throw Error("Illegal Argument");return c instanceof t?b.fixSpatialReference(l.cloneGeometry(a[0]),d.spatialReference):c instanceof n?c.centroid:c instanceof q?u.centroidPolyline(c):c instanceof v?u.centroidMultiPoint(c):c instanceof p?c.center:null})};f.multiparttosinglepart=function(d,e){return h(d,e,function(c,e,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,1,1);e=[];if(null===a[0])return null;if(!(a[0]instanceof k))throw Error("Illegal Argument");
if(a[0]instanceof t||a[0]instanceof p)return[b.fixSpatialReference(l.cloneGeometry(a[0]),d.spatialReference)];c=g.simplify(a[0]);if(c instanceof n){e=[];var f=[];for(a=0;a<c.rings.length;a++)if(c.isClockwise(c.rings[a])){var h=w.fromJSON({rings:[c.rings[a]],hasZ:!0===c.hasZ,hasM:!0===c.hasM,spatialReference:c.spatialReference.toJSON()});e.push(h)}else f.push({ring:c.rings[a],pt:c.getPoint(a,0)});for(c=0;c<f.length;c++)for(a=0;a<e.length;a++)if(e[a].contains(f[c].pt)){e[a].addRing(f[c].ring);break}return e}if(c instanceof
q){e=[];for(a=0;a<c.paths.length;a++)f=w.fromJSON({paths:[c.paths[a]],hasZ:!0===c.hasZ,hasM:!0===c.hasM,spatialReference:c.spatialReference.toJSON()}),e.push(f);return e}if(a[0]instanceof v){c=b.fixSpatialReference(l.cloneGeometry(a[0]),d.spatialReference);for(a=0;a<c.points.length;a++)e.push(c.getPoint(a));return e}return null})};f.issimple=function(d,e){return h(d,e,function(c,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,1,1);if(null===a[0])return!0;if(!(a[0]instanceof k))throw Error("Illegal Argument");
return g.isSimple(a[0])})};f.simplify=function(d,e){return h(d,e,function(c,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,1,1);if(null===a[0])return null;if(!(a[0]instanceof k))throw Error("Illegal Argument");return g.simplify(a[0])})}}});