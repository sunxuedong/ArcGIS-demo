// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Collection ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ./BuildingFilterAuthoringInfoType".split(" "),function(n,p,f,e,g,h,k,b,l){var m=g.ofType(l);return function(c){function a(){return null!==c&&c.apply(this,arguments)||this}f(a,c);d=a;a.prototype.clone=function(){return new d({filterTypes:k.clone(this.filterTypes)})};var d;e([b.property({type:m,json:{write:!0}})],
a.prototype,"filterTypes",void 0);return a=d=e([b.subclass("esri.layers.support.BuildingFilterAuthoringInfoBlock")],a)}(b.declared(h))});