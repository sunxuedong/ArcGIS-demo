// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/assignHelper @dojo/framework/shim/array @dojo/framework/shim/Set ../../../geometry ../../../TimeExtent ../../../core/jsonMap ../../../core/JSONSupport ../../../core/lang ../../../core/accessorSupport/decorators ../../../geometry/support/jsonUtils ../../../tasks/support/Query".split(" "),function(x,y,d,m,p,q,g,r,t,e,u,f,c,v,w){var k=new e.default({esriSpatialRelIntersects:"intersects",
esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),l=new e.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",
esriSRUnit_USNauticalMile:"us-nautical-miles"});return function(e){function b(a){a=e.call(this,a)||this;a.where=null;a.geometry=null;a.spatialRelationship="intersects";a.hiddenIds=new g.default;a.distance=void 0;a.objectIds=null;a.units=null;a.timeExtent=null;a.enabled=!1;return a}m(b,e);h=b;b.prototype.writeWhere=function(a,b,c){b.where=a||"1\x3d1"};b.prototype.enable=function(){this._set("enabled",!0)};b.prototype.createQuery=function(a){void 0===a&&(a={});var b=this.where,c=this.spatialRelationship,
d=this.timeExtent,e=this.objectIds,g=this.units,h=this.distance;return new w(p({geometry:f.clone(this.geometry),objectIds:f.clone(e),spatialRelationship:c,timeExtent:f.clone(d),where:b,units:g,distance:h},a))};b.prototype.clone=function(){var a=this.where,b=this.geometry,c=this.spatialRelationship,d=this.hiddenIds,e=this.timeExtent,k=this.objectIds,l=this.units,m=this.distance,n=new g.default;d.forEach(function(a){return n.add(a)});return new h({geometry:f.clone(b),hiddenIds:n,objectIds:f.clone(k),
spatialRelationship:c,timeExtent:f.clone(e),where:a,units:l,distance:m})};var h;d([c.property({type:String})],b.prototype,"where",void 0);d([c.writer("where")],b.prototype,"writeWhere",null);d([c.property({types:r.geometryTypes,json:{read:v.fromJSON,write:!0}})],b.prototype,"geometry",void 0);d([c.property({type:String,json:{read:{source:"spatialRel",reader:k.read},write:{target:"spatialRel",writer:k.write}}})],b.prototype,"spatialRelationship",void 0);d([c.property({json:{write:function(a,b,c){return b[c]=
q.from(a)},read:function(a,b){return new g.default(a)}}})],b.prototype,"hiddenIds",void 0);d([c.property({type:Number,json:{write:{overridePolicy:function(a){return{enabled:0<a}}}}})],b.prototype,"distance",void 0);d([c.property({type:[Number],json:{write:!0}})],b.prototype,"objectIds",void 0);d([c.property({type:String,json:{read:l.read,write:{writer:l.write,overridePolicy:function(a){return{enabled:a&&0<this.distance}}}}})],b.prototype,"units",void 0);d([c.property({type:t,json:{write:!0}})],b.prototype,
"timeExtent",void 0);d([c.property({readOnly:!0})],b.prototype,"enabled",void 0);return b=h=d([c.subclass("esri.views.layers.support.FeatureFilter")],b)}(c.declared(u))});