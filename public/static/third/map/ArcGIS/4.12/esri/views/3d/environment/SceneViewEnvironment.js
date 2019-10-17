// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/assignHelper ../../../core/lang ../../../core/accessorSupport/decorators ../../../core/accessorSupport/ensureType ./SceneViewAtmosphere ./SceneViewLighting ../../../webscene/Environment ../../../webscene/Lighting".split(" "),function(r,t,k,e,l,m,c,n,g,d,p,q){return function(h){function b(a){a=h.call(this,a)||this;a.atmosphere=new g.default;return a}k(b,h);f=b;b.fromWebsceneEnvironment=
function(a){a=a.cloneConstructProperties();return new f(l({},a,{lighting:d.SceneViewLighting.fromWebsceneLighting(a.lighting)}))};b.prototype.castLighting=function(a){return a?a instanceof d.SceneViewLighting?a:a instanceof q?this.lighting?this.lighting.cloneWithWebsceneLighting(a):d.SceneViewLighting.fromWebsceneLighting(a):n.ensureType(d.SceneViewLighting,a):new d.SceneViewLighting};b.prototype.clone=function(){return new f({lighting:this.lighting.clone(),atmosphere:this.atmosphere.clone(),atmosphereEnabled:this.atmosphereEnabled,
starsEnabled:this.starsEnabled,background:m.clone(this.background)})};var f;e([c.property({type:g.default,json:{read:!1}})],b.prototype,"atmosphere",void 0);e([c.property()],b.prototype,"lighting",void 0);e([c.cast("lighting")],b.prototype,"castLighting",null);return b=f=e([c.subclass("esri.views.3d.environment.SceneViewEnvironment")],b)}(c.declared(p))});