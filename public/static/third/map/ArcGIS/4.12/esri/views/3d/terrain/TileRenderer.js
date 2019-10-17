// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/mathUtils ../../../core/libs/gl-matrix-2/vec2 ../../../core/libs/gl-matrix-2/vec2f64 ../../../core/libs/gl-matrix-2/vec4 ../../2d/engine/vectorTiles/tileRendererHelper3D ../../2d/engine/vectorTiles/VectorTileDisplayObject3D ./TerrainConst ./terrainUtils ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/DefaultVertexBufferLayouts ../webgl-engine/lib/glUtil3D ../webgl-engine/shaders/MiscPrograms ../../webgl/BufferObject ../../webgl/FramebufferObject ../../webgl/renderState ../../webgl/Texture ../../webgl/Util ../../webgl/VertexArrayObject".split(" "),
function(L,M,B,x,y,t,C,D,p,E,F,G,u,H,I,J,q,v,z,K){var A=Array(20),w={tile:null,sourceLayerInfo:null,sourceLod:null,offset:[0,0],scale:1,layerIdx:0};return function(){function e(b,a,c,d){this._blackTex=this._backgroundTex=null;this.tileSize=256;this._context=b;this.tileSize=a;this._setNeedsRender=d;b.capabilities.textureFilterAnisotropic&&(this._maxAnisotropy=Math.min(8,b.parameters.maxMaxAnisotropy));a=new Float32Array(20);a[0]=-1;a[1]=-1;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=-1;a[7]=0;a[8]=1;a[9]=0;a[10]=
-1;a[11]=1;a[12]=0;a[13]=0;a[14]=1;a[15]=1;a[16]=1;a[17]=0;a[18]=1;a[19]=1;this._vaoQuad=new K(b,F.Default3D,{geometry:G.Pos3Tex},{geometry:I.createVertex(b,35044,a)});this._blendLayersProgram=c.getProgram(H.blendLayers);this._blendLayersPipelineState=q.makePipelineState({blending:q.simpleBlendingParams(1,771),colorWrite:q.defaultColorWriteParams});this._applyOpacityPipelineState=q.makePipelineState({blending:q.simpleBlendingParams(0,770),colorWrite:q.defaultColorWriteParams});this._blackTex=u.createColorTexture(this._context,
[0,0,0,1])}e.prototype.dispose=function(){this._fbo&&(this._fbo.dispose(),this._fbo=null);this._vtFBO&&(this._vtFBO.dispose(),this._vtFBO=null);this._vaoQuad&&(this._vaoQuad.dispose(),this._vaoQuad=null);this._backgroundTex&&(this._backgroundTex.dispose(),this._backgroundTex=null);this._blackTex&&(this._blackTex.dispose(),this._blackTex=null);this._blendLayersProgram&&(this._blendLayersProgram.dispose(),this._blendLayersProgram=null);this._context=null};e.prototype.updateTileTexture=function(b){for(var a=
b.layerInfo[p.LayerClass.MAP],c=0;c<a.length;c++)a[c].pendingUpdates&=~p.TileUpdate.TEXTURE;if(b.renderData){var c=b.renderData,d=b.surface,r=d.baseOpacity,g=0,f=this.tileSize,e=!1,h,k=a.length;for(h=0;h<a.length&&!e;h++){var m=d.layerViewByIndex(h,p.LayerClass.MAP),n=m.fullOpacity;A[h]=n;this._isBaseLayer(m.layer)&&k>=a.length&&(k=h);if(0!==n){var l=this._getTileRenderInfo(b,h,w);l&&(E.isVectorTileLayerView(m)&&(f=Math.max(f,this.tileSize*m.view.pixelRatio)),g++,m.isOpaque&&1===r&&1===n&&(e=!0))}}d=
f;f=B.nextHighestPowerOfTwo(d);a=f*f;l=d*d;a===l?f=d:(d=f/2,f=a-l<l-d*d?f:d);a=f/this.tileSize;--h;0===g&&this._backgroundTex?(c.opacity=r,c.textureReference=this._backgroundTex,t.vec4.set(c.texOffsetAndScale,0,0,1,1)):1===g&&e?(c.opacity=r,l=this._getTileRenderInfo(b,h,w),this._dataToTexture(this._context,l,f,a)&&(c.textureReference=l.sourceLayerInfo.data,t.vec4.set(c.texOffsetAndScale,l.offset[0],l.offset[1],l.scale,l.scale))):(this._composeMapLayers(b,h,k,e,A,f,a),t.vec4.set(c.texOffsetAndScale,
0,0,1,1));this._setNeedsRender()}};e.prototype.setBackground=function(b){this._backgroundTex=b instanceof HTMLImageElement?this._buildTexture(b):u.createColorTexture(this._context,b)};e.prototype._buildTexture=function(b){var a={target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9987,maxAnisotropy:this._maxAnisotropy,flipped:!0,hasMipmap:!0},c=this._context,d;if("number"===typeof b)a.width=a.height=b,d=new v(c,a);else try{d=new v(c,a,b)}catch(r){d=u.createEmptyTexture(c),console.warn("TileRenderer: failed to execute 'texImage2D', cross-origin image may not be loaded.")}c.bindTexture(d);
d.generateMipmap();return d};e.prototype._bindFBO=function(b,a,c,d){b&&b.width===a&&b.height===c||(b&&b.dispose(),b=J.create(this._context,{colorTarget:0,depthStencilTarget:d?1:0,width:a,height:c}));this._context.bindFramebuffer(b);return b};e.prototype._drawRasterData=function(b,a,c,d){void 0===d&&(d=1);var e=this._context,g=this._blendLayersProgram,f=this._vaoQuad;e.bindProgram(g);e.bindVAO(f);z.assertCompatibleVertexAttributeLocations(f,g);e.bindTexture(b,0);g.setUniform1i("tex",0);g.setUniform1f("scale",
a);g.setUniform2f("offset",c[0],c[1]);g.setUniform1f("opacity",d);e.drawArrays(5,0,z.vertexCount(f,"geometry"))};e.prototype._composeMapLayers=function(b,a,c,d,e,g,f){var r=this,h=b.renderData.ensureTexture(function(a){return r._buildTexture(a)},g),k=this._context;this._fbo=this._bindFBO(this._fbo,h.descriptor.width,h.descriptor.height,!1);k.setViewport(0,0,g,g);k.setClearColor(0,0,0,0);k.setClearDepth(1);k.clearSafe(16384);!d&&this._backgroundTex&&(k.setPipelineState(this._blendLayersPipelineState),
this._drawRasterData(this._backgroundTex,1,y.vec2f64.ZEROS));d=b.surface.baseOpacity;for(var m=!1;0<=a;a--){var n=this._getTileRenderInfo(b,a,w);n&&(a<c&&1>d&&!m&&(k.setPipelineState(this._applyOpacityPipelineState),this._drawRasterData(this._blackTex,1,y.vec2f64.ZEROS,d),m=!0),0!==e[a]&&this._dataToTexture(k,n,g,f)&&(k.setPipelineState(this._blendLayersPipelineState),this._drawRasterData(n.sourceLayerInfo.data,n.scale,n.offset,e[a])))}k.bindTexture(h);k.gl.copyTexImage2D(k.gl.TEXTURE_2D,0,h.descriptor.pixelFormat,
0,0,h.descriptor.width,h.descriptor.height,0);h.generateMipmap();k.bindFramebuffer(null);b.renderData.opacity=m?1:d;b.renderData.textureReference=h};e.prototype._dataToTexture=function(b,a,c,d){a&&a.sourceLayerInfo&&a.sourceLayerInfo.data instanceof D&&(this._vectorDataToTexture(b,a,c,d),a.tile.updateMemoryUsed());b=a&&a.sourceLayerInfo&&a.sourceLayerInfo.data;if(b instanceof HTMLImageElement||b instanceof HTMLCanvasElement)this._rasterDataToTexture(a),a.tile.updateMemoryUsed();return a&&a.sourceLayerInfo&&
a.sourceLayerInfo.data instanceof v};e.prototype._rasterDataToTexture=function(b){b=b.sourceLayerInfo;b.data=this._buildTexture(b.data)};e.prototype._vectorDataToTexture=function(b,a,c,d){var e=a.tile.surface.layerViewByIndex(a.layerIdx,p.LayerClass.MAP);this._vtFBO=this._bindFBO(this._vtFBO,c,c,!0);b.setClearColor(1,1,1,0);b.clearSafe(16640);var g=a.sourceLayerInfo,f=g.data;C.renderVectorTile(this._context,a.sourceLod,f,e.renderer,e.schemaHelper,this.tileSize,this.tileSize,d);f.dispose();g.data=
this._buildTexture(c);b.bindTexture(g.data);b.gl.copyTexImage2D(b.gl.TEXTURE_2D,0,g.data.descriptor.pixelFormat,0,0,c,c,0);g.data.generateMipmap();b.bindFramebuffer(this._fbo)};e.prototype._getTileRenderInfo=function(b,a,c){var d=b.layerInfo[p.LayerClass.MAP][a];c.layerIdx=a;if(d.data)return x.vec2.set(c.offset,0,0),c.tile=b,c.scale=1,c.sourceLod=b.lij,c.sourceLayerInfo=d,c;if(!d.upsampleFromTile)return null;b=d.upsampleFromTile;a=b.tile.layerInfo[p.LayerClass.MAP][a];c.tile=b.tile;x.vec2.copy(c.offset,
b.offset);c.scale=b.scale;c.sourceLod=b.tile.lij;c.sourceLayerInfo=a;return c};e.prototype._isBaseLayer=function(b){return b.parent&&"esri.Basemap"===b.parent.declaredClass&&-1<b.parent.baseLayers.indexOf(b)};Object.defineProperty(e.prototype,"test",{get:function(){return{fbo:this._fbo}},enumerable:!0,configurable:!0});return e}()});