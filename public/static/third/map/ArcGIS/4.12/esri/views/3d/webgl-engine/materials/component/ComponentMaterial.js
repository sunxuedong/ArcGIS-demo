// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../../../core/tsSupport/assignHelper ../../../../../core/maybe ../../lib/Material ./ComponentGLMaterial ./Parameters ./VertexBufferLayout ../internal/MaterialUtil ../renderers/PreinterleavedRenderer".split(" "),function(g,h,k,r,l,m,d,e,n,p,q){Object.defineProperty(h,"__esModule",{value:!0});g=function(f){function a(b,a,c){c=f.call(this,c)||this;c.supportsEdges=!0;c._parameters=e.fillDefaults(b);c._geometryParameters=a;return c}
k(a,f);Object.defineProperty(a.prototype,"parameters",{get:function(){return this._parameters},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"geometryParameters",{get:function(){return this._geometryParameters},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"hasTransparency",{get:function(){var b=this._parameters.forceTransparency;if(l.isSome(b))return b;if(1>this._parameters.baseColorOpacity||1>this._parameters.layerOpacity)return!0;b=this._parameters.componentData;
return e.isUniformComponentData(b)&&"replace"===b.externalColorMixMode?1>b.externalColor[3]:!0},enumerable:!0,configurable:!0});a.prototype.isVisibleInPass=function(b){if(3!==b)return!0;b=this._parameters.componentData;return e.isUniformComponentData(b)?b.castShadows:!0};a.prototype.isVisible=function(){var b=this.parameters;if(!f.prototype.isVisible.call(this)||0===b.layerOpacity)return!1;var a=b.componentData;return e.isUniformComponentData(a)?"replace"===a.externalColorMixMode?0<a.externalColor[3]:
0<b.baseColorOpacity:!0};a.prototype.updateParameters=function(b){var a=!1,c;for(c in b){var d=b[c];this._parameters[c]!==d&&(a=!0,this._parameters[c]=d)}a&&this.notifyDirty("matChanged");return a};a.prototype.intersect=function(b,a,c,d,e,f,g){p.intersectTriangleGeometry(b,a,c,d,e,f,g)};a.prototype.getGLMaterials=function(){return{color:d.GLMaterialColor,depthShadowMap:d.GLMaterialDepthShadowMap,normal:d.GLMaterialNormal,depth:d.GLMaterialDepth,highlight:d.GLMaterialHighlight}};a.prototype.createRenderer=
function(a,d){return new q(a,d,this)};a.prototype.createBufferWriter=function(){throw Error("Not supported");};a.prototype.createBufferLayout=function(){return n.createVertexBufferLayout(this.geometryParameters)};return a}(m);h.ComponentMaterial=g});