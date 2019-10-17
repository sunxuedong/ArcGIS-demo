// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/Handles ../../../core/watchUtils ../../../core/libs/gl-matrix-2/vec2 ../../../core/libs/gl-matrix-2/vec2f64 ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../../../core/libs/gl-matrix-2/vec4 ../../../core/libs/gl-matrix-2/vec4f64 ./atmosphereUtils ../support/earthUtils ../support/buffer/glUtil ../support/buffer/InterleavedLayout ../webgl-engine/shaders/RealisticAtmospherePrograms ../../webgl/BufferObject ../../webgl/programUtils ../../webgl/renderState ../../webgl/Util ../../webgl/VertexArrayObject".split(" "),
function(x,y,G,H,I,z,u,n,f,e,p,g,A,q,J,K,v,L,B,h,M,N){x=function(){function b(a){this.needsRender=!1;this.didRender=!0;this.slot=13;this._hazeSlot=14;this._renderData={texDepth:n.vec2f64.create(),v3CameraPos:e.vec3f64.create(),v3CameraUp:e.vec3f64.create(),v3CameraRight:e.vec3f64.create(),v3CameraDir:e.vec3f64.create(),halfSizeNearPlane:n.vec2f64.create(),v2CameraCenterOffset:n.vec2f64.create(),v4SphereComp:g.vec4f64.create(),v4AtmosParams1:g.vec4f64.create(),v4AtmosParams2:g.vec4f64.create(),v4AtmosParams3:g.vec4f64.create(),
v3InvWavelength:C,v3InvWavelengthScaled:k,v4Radii:g.vec4f64.create(),fScale:0,fScaleDepth:r,fLowerAlphaBlendBound:0,fScaleOverScaleDepth:0,fOneOverScaleDepth:0,fScaleDepthBlue:t,fOneOverScaleDepthBlue:D,fScaleOverScaleDepthBlue:0,g:d,g2:d*d,fMiePhaseCoefficients:E,showTest:0,nearFar:n.vec2f64.create(),fCameraHeight:0,fCameraHeight2:0,fC:0,fCSur:0,fInnerFadeDistance:0,fAltitudeFade:0};this._lowerElevationBoundRadius=0;this._earthRadius=q.earthRadius;this.view=a;this._updateRadius(q.earthRadius)}b.prototype.destroy=
function(){this._handles&&(this._handles.destroy(),this._handles=null);this._hazeProgram&&(this._hazeProgram.dispose(),this._hazeProgram=null);this._skyProgram&&(this._skyProgram.dispose(),this._skyProgram=null);this._vao&&(this._vao.dispose(),this._vao=null)};b.prototype.when=function(a){return H(this,void 0,void 0,function(){return G(this,function(c){a();return[2]})})};b.prototype.initializeRenderContext=function(a){var c=this;a=a.rctx;this._handles=new I;this._updateElevation({spatialReference:this.view.basemapTerrain.spatialReference,
tile:this.view.basemapTerrain.rootTiles[0],extent:this.view.basemapTerrain.rootTiles[0].extent});this._handles.add(z.on(this.view,"basemapTerrain","elevation-change",function(a){return c._updateElevation(a)},function(){return c._updateElevation()}));this._handles.add(z.on(this.view,"basemapTerrain","elevation-bounds-change",function(){return c._updateVisibleElevationBounds()},function(){return c._updateVisibleElevationBounds()}));this._hazeProgram=B.createProgram(a,v.program,{haze:!0});this._skyProgram=
B.createProgram(a,v.program);this._hazePipelineState=h.makePipelineState({blending:h.separateBlendingParams(1,0,769,1),colorWrite:h.defaultColorWriteParams});this._skyPipelineState=h.makePipelineState({blending:h.separateBlendingParams(770,1,771,771),depthTest:{func:515},colorWrite:h.defaultColorWriteParams});this._vao=this._createVertexArrayObject(a)};b.prototype.uninitializeRenderContext=function(a){this.destroy()};b.prototype.render=function(a){if(a.slot!==this._hazeSlot&&a.slot!==this.slot||0!==
a.pass)return!1;this._update(a.camera);a.slot===this.slot&&this._renderSky(a);a.slot===this._hazeSlot&&this._renderHaze(a);this.needsRender=!1;return!0};b.prototype._renderSky=function(a){var c=a.rctx,m=this._skyProgram;c.bindProgram(m);c.setPipelineState(this._skyPipelineState);m.setUniform4fv("v4AtmosParams3",this._renderData.v4AtmosParams3);this._renderCommon(m,a)};b.prototype._renderHaze=function(a){var c=this,m=a.rctx,b=a.offscreenRenderingHelper,d=this._hazeProgram;m.bindProgram(d);m.setPipelineState(this._hazePipelineState);
b.renderDepthDetached(function(){m.bindTexture(b.depthTexture,0);d.setUniform1i("tDepth",0);c._renderCommon(d,a)})};b.prototype._renderCommon=function(a,c){var b=c.rctx;a.setUniform3fv("v3InvWavelength",this._renderData.v3InvWavelength);a.setUniform3fv("v3InvWavelengthScaled",this._renderData.v3InvWavelengthScaled);a.setUniform3fv("v3LightDir",c.lightingData.direction);a.setUniform4fv("v4SphereComp",this._renderData.v4SphereComp);a.setUniform3fv("v3CameraPos",this._renderData.v3CameraPos);a.setUniform3fv("v3CameraUp",
this._renderData.v3CameraUp);a.setUniform3fv("v3CameraRight",this._renderData.v3CameraRight);a.setUniform3fv("v3CameraDir",this._renderData.v3CameraDir);a.setUniform2fv("nearFar",this._renderData.nearFar);a.setUniform2fv("halfSizeNearPlane",this._renderData.halfSizeNearPlane);a.setUniform2fv("v2CameraCenterOffset",this._renderData.v2CameraCenterOffset);a.setUniform4fv("v4Radii",this._renderData.v4Radii);a.setUniform4fv("v4AtmosParams1",this._renderData.v4AtmosParams1);a.setUniform4fv("v4AtmosParams2",
this._renderData.v4AtmosParams2);a.setUniform1f("showTest",this._renderData.showTest);a.setUniform1f("fInnerFadeDistance",this._renderData.fInnerFadeDistance);a.setUniform1f("fAltitudeFade",this._renderData.fAltitudeFade);b.bindVAO(this._vao);M.assertCompatibleVertexAttributeLocations(this._vao,a);b.drawArrays(5,0,4)};b.prototype._createVertexArrayObject=function(a){var c=F.createBuffer(4);c.position.setVec(0,[-1,-1,1]);c.position.setVec(1,[1,-1,1]);c.position.setVec(2,[-1,1,1]);c.position.setVec(3,
[1,1,1]);c.uv0.setVec(0,[0,0]);c.uv0.setVec(1,[1,0]);c.uv0.setVec(2,[0,1]);c.uv0.setVec(3,[1,1]);return new N(a,v.program.attributes,{geometry:J.glLayout(F)},{geometry:L.createVertex(a,35044,c.buffer)})};b.prototype._adjustRadiusForTesselation=function(a){return a*Math.cos(Math.PI/Math.pow(2,4)/16)};b.prototype._updateElevation=function(a){a=a?a.tile:this.view.basemapTerrain.rootTiles[0];0===a.lij[0]&&(a=this._adjustRadiusForTesselation(q.earthRadius+a.elevationBounds[0]),a!==this._lowerElevationBoundRadius&&
(this._lowerElevationBoundRadius=a,this._earthRadius=-1,this._updateVisibleElevationBounds()))};b.prototype._updateVisibleElevationBounds=function(){var a=this._adjustRadiusForTesselation(q.earthRadius+this.view.basemapTerrain.getElevationBounds()[0]);(0>this._earthRadius||a<this._earthRadius)&&this._updateRadius(a)};b.prototype._updateRadius=function(a){this._earthRadius=a;var c=a*a,b=a/10*10.25,f=b*b,e=1/(b-a),g=e/r,h=e/t,k=.3*(b-a)+a,n=1/(b-k),l=this._renderData;p.vec4.set(l.v4AtmosParams1,e,r,
g,O);p.vec4.set(l.v4AtmosParams2,d,t,h,D);p.vec4.set(l.v4AtmosParams3,d*d,E,k,n);p.vec4.set(l.v4Radii,a,c,b,f);l.fScale=e;l.fLowerAlphaBlendBound=k;l.fScaleOverScaleDepth=g;l.fScaleOverScaleDepthBlue=h;c=A.INNER_ATMOSPHERE_DEPTH;l.fInnerFadeDistance=2*Math.sqrt((2*a-c)*c)};b.prototype._update=function(a){a&&(f.vec3.negate(this._renderData.v3CameraDir,a.viewForward),f.vec3.copy(this._renderData.v3CameraUp,a.viewUp),f.vec3.copy(this._renderData.v3CameraRight,a.viewRight),this._renderData.fCameraHeight=
f.vec3.length(a.eye),this._renderData.fCameraHeight2=this._renderData.fCameraHeight*this._renderData.fCameraHeight,this._renderData.fC=this._renderData.fCameraHeight2-this._renderData.v4Radii[3],this._renderData.fCSur=this._renderData.fCameraHeight2-this._renderData.v4Radii[1],this._renderData.v4SphereComp=g.vec4f64.fromValues(this._renderData.fCameraHeight,this._renderData.fCameraHeight2,this._renderData.fC,this._renderData.fCSur),f.vec3.copy(this._renderData.v3CameraPos,a.eye),u.vec2.set(this._renderData.halfSizeNearPlane,
Math.tan(a.fovX/2)/(a.width/a.fullWidth),Math.tan(a.fovY/2)/(a.height/a.fullHeight)),u.vec2.set(this._renderData.v2CameraCenterOffset,(a.padding[3]+a.width/2)/a.fullWidth-.5,(a.padding[2]+a.height/2)/a.fullHeight-.5),u.vec2.set(this._renderData.nearFar,a.near,a.far),this._renderData.fAltitudeFade=A.computeInnerAltitudeFade(this._renderData.fCameraHeight-this._earthRadius))};b.isSupported=function(a){return a.rctx.capabilities.depthTexture};return b}();y=.02*Math.PI;var w=.004*Math.PI,C=e.vec3f64.fromValues(1/
Math.pow(.65,4),1/Math.pow(.57,4),1/Math.pow(.475,4)),k=e.vec3f64.clone(C);f.vec3.scale(k,k,y);f.vec3.add(k,k,e.vec3f64.fromValues(w,w,w));var r=.25,t=.05,O=1/r,D=1/t,d=-.99999,E=(1-d*d)/(2+d*d)*1.5,F=K.newLayout().vec3f("position").vec2f("uv0");return x});