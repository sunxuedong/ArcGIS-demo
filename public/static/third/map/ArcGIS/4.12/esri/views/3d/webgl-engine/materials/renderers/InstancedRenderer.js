// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/libs/gl-matrix-2/mat4f64 ../../../support/buffer/glUtil ../../lib/DefaultVertexAttributeLocations ./Instance ./utils ../../../../webgl/BufferObject ../../../../webgl/Util ../../../../webgl/VertexArrayObject".split(" "),function(y,z,q,r,t,u,k,v,n,w){function x(d,a){var c=new Map,f=function(b,a){var e=b.origin.id,f=b.data.id,g=c.get(e);g||(g={origin:b.origin.vec3,deltaByGeometry:new Map},c.set(e,g));e=g.deltaByGeometry.get(f);e||(e={renderData:b.data,toAdd:[],
toRemove:[]},g.deltaByGeometry.set(f,e));(a?e.toAdd:e.toRemove).push(b)};d.forEach(function(b){f(b,!0)});a.forEach(function(b){f(b,!1)});return c}function p(d,a,c){var f=a.elementCount(d),f=a.allocate(f);a.write({},d,f,0);c.setData(f.buffer)}return function(){function d(a,c,f,b){void 0===b&&(b=t.Default3D);this._dataByOrigin=new Map;this._highlightCount=0;this._rctx=a;this._vertexAttributeLocations=b;this._material=f;this._materialRep=c;this._glMaterials=k.acquireMaterials(this._material,this._materialRep);
this._bufferWriter=f.createBufferWriter()}d.prototype.dispose=function(){k.releaseMaterials(this._material,this._materialRep)};Object.defineProperty(d.prototype,"isEmpty",{get:function(){return 0===this._dataByOrigin.size},enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"hasHighlights",{get:function(){return 0<this._highlightCount},enumerable:!0,configurable:!0});d.prototype.hasWater=function(){return!1};d.prototype.renderPriority=function(){return this._material.renderPriority};
d.prototype.modify=function(a){this.updateGeometries(a.toUpdate);this.addAndRemoveGeometries(a.toAdd,a.toRemove);this.updateHighlightCount()};d.prototype.addAndRemoveGeometries=function(a,c){var f=this,b=this._rctx,d=this._bufferWriter,e=this._dataByOrigin;a=x(a,c);var h=d.vertexBufferLayout;a.forEach(function(a,c){var l=e.get(c);l||(l={origin:a.origin,highlightCount:0,dataByGeometry:new Map},e.set(c,l));a.deltaByGeometry.forEach(function(a,c){var e=l.dataByGeometry.get(c);!e&&0<a.toAdd.length&&(e=
{vao:new w(b,f._vertexAttributeLocations,{geometry:r.glLayout(h)},{geometry:v.createVertex(b,35044)}),vertexCount:0,instances:new Map,highlightCount:0},p(a.renderData,d,e.vao.vertexBuffers.geometry),e.vertexCount=n.vertexCount(e.vao,"geometry"),l.dataByGeometry.set(c,e));var g=e.instances;a.toAdd.forEach(function(b){var a=q.mat4f64.create();k.calculateTransformRelToOrigin(b,a);var c=k.generateRenderGeometryVisibleIndexRanges(b),f=k.generateRenderGeometryHighlightRanges(b),a=new u(b.name,0,e.vertexCount,
c,f,a,b.instanceParameters,b.idx,b.data.id);g.set(b.uniqueName,a);l.highlightCount=null;e.highlightCount=null});a.toRemove.forEach(function(b){g.delete(b.uniqueName)});0===g.size&&(e.vao.dispose(),l.dataByGeometry.delete(c))});0===l.dataByGeometry.size&&e.delete(c)})};d.prototype.updateGeometries=function(a){var c=this._dataByOrigin,f=this._bufferWriter;a.forEach(function(b){var a=b.updateType;b=b.renderGeometry;var e=c.get(b.origin.id),d=e&&e.dataByGeometry.get(b.data.id),g=d&&d.instances.get(b.uniqueName);
g&&(a&1&&(g.displayedIndexRange=k.generateRenderGeometryVisibleIndexRanges(b)),a&17&&(g.highlightedIndexRanges=k.generateRenderGeometryHighlightRanges(b),e.highlightCount=null,d.highlightCount=null),a&2&&p(b.data,f,d.vao.vertexBuffers.geometry),a&4&&k.calculateTransformRelToOrigin(b,g.transformation,g.transformationNormal))})};d.prototype.updateHighlightCount=function(){var a=this;this._highlightCount=0;this._dataByOrigin.forEach(function(c){if(null==c.highlightCount){var f=0;c.dataByGeometry.forEach(function(b){if(null==
b.highlightCount){var a=0;b.instances.forEach(function(b){b.highlightedIndexRanges&&++a});b.highlightCount=a}f+=b.highlightCount});c.highlightCount=f}a._highlightCount+=c.highlightCount})};d.prototype.render=function(a,c,f,b){var d=this,e=this._rctx,h=this._glMaterials.get(c.pass),g=4===c.pass;if(!h||null!=a&&!h.beginSlot(a)||g&&0===this._highlightCount)return!1;h.bind(e,f);var k=!1;this._dataByOrigin.forEach(function(a){g&&0===a.highlightCount||(f.origin=a.origin,h.bindView(e,f),a.dataByGeometry.forEach(function(a){k=
g?d.renderHighlightPass(h,a,b)||k:d.renderDefaultPass(h,a,b)||k}))});e.bindVAO(null);h.release(e,f);return k};d.prototype.renderDefaultPass=function(a,c,f){var b=this._rctx,d=a.getProgram(),e=a.getDrawMode(),h=c.vao,g=c.vertexCount;n.assertCompatibleVertexAttributeLocations(h,d);b.bindVAO(h);var m=!1;c.instances.forEach(function(c){var d=c.displayedIndexRange;d&&0===d.length||(a.bindInstance(b,c),d?k.drawArraysFaceRange(b,d,0,e,f):k.drawArrays(b,e,0,g,f),m=!0)});return m};d.prototype.renderHighlightPass=
function(a,c,d){var b=this._rctx,f=a.getProgram(),e=a.getDrawMode(),h=c.vao,g=c.vertexCount;if(0!==c.highlightCount){n.assertCompatibleVertexAttributeLocations(h,f);b.bindVAO(h);var m=!1;c.instances.forEach(function(c){var f=c.highlightedIndexRanges;if(f&&0!==f.length)for(a.bindInstance(b,c),c=0;c<f.length;c++){var h=f[c];k.drawArrays(b,e,h.range?h.range[0]:0,h.range?h.range[1]-h.range[0]+1:g,d);m=!0}});return m}};return d}()});