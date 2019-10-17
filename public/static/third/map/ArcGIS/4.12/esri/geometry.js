// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ./core/jsonMap ./core/accessorSupport/ensureType ./geometry/Extent ./geometry/Geometry ./geometry/Multipoint ./geometry/Point ./geometry/Polygon ./geometry/Polyline ./geometry/SpatialReference ./geometry/support/jsonUtils".split(" "),function(p,a,b,c,d,e,f,g,h,k,l,m){Object.defineProperty(a,"__esModule",{value:!0});a.Extent=d;a.BaseGeometry=e;a.Multipoint=f;a.Point=g;a.Polygon=h;a.Polyline=k;a.SpatialReference=l;a.isGeometry=function(n){return n instanceof a.BaseGeometry};
a.fromJSON=m.fromJSON;a.typeKebabDictionary=b.strict()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"});a.isFeatureGeometryType=function(a){return"point"===a||"multipoint"===a||"polyline"===a||"polygon"===a};a.featureGeometryTypeKebabDictionary=b.strict()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"});
a.geometryTypes={base:a.BaseGeometry,key:"type",typeMap:{extent:a.Extent,multipoint:a.Multipoint,point:a.Point,polyline:a.Polyline,polygon:a.Polygon}};a.ensureType=c.ensureOneOfType(a.geometryTypes)});