// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/generatorHelper ../../../../../core/tsSupport/awaiterHelper ../../../../../arcade/languageUtils ../../../../../core/libs/gl-matrix-2/vec2f64 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../support/imageUtils ../../lib/Util ./waterMaterialData ../../../../webgl/Texture".split(" "),function(g,f,n,p,h,q,k,r,t,l,u){Object.defineProperty(f,"__esModule",{value:!0});f.waterParameterDefaultsLocal={f0Sky:.02,f0maxSky:1,expSky:5,waveTexture:l.waterNormals,
perturbationTexture:l.waterDuDv,waveStrength:.06,waveTextureRepeat:32,waveDirection:q.vec2f64.fromValues(1,0),waveVelocity:.05,flowStrength:.015,flowOffset:-.5,animationSpeed:.35,color:[0,.35686,.4,1],sky:{horizon:k.vec3f64.fromValues(.72,.92,1),zenit:k.vec3f64.fromValues(0,.6,.9)},transparent:!1,writeDepth:!0,polygonOffset:null,slicePlaneEnabled:!1,dtrExponent:2.2,roughness:.06,f0maxSpec:.1,isDraped:!1};f.wavePresets={"calm-small":{waveStrength:.005,perturbationStrength:.02,textureRepeat:12,waveVelocity:.01},
"rippled-small":{waveStrength:.02,perturbationStrength:.09,textureRepeat:32,waveVelocity:.07},"slight-small":{waveStrength:.05,perturbationStrength:.07,textureRepeat:28,waveVelocity:.1},"moderate-small":{waveStrength:.075,perturbationStrength:.07,textureRepeat:24,waveVelocity:.1},"calm-medium":{waveStrength:.003125,perturbationStrength:.01,textureRepeat:8,waveVelocity:.02},"rippled-medium":{waveStrength:.035,perturbationStrength:.015,textureRepeat:12,waveVelocity:.07},"slight-medium":{waveStrength:.06,
perturbationStrength:.015,textureRepeat:8,waveVelocity:.12},"moderate-medium":{waveStrength:.09,perturbationStrength:.03,textureRepeat:4,waveVelocity:.12},"calm-large":{waveStrength:.01,perturbationStrength:0,textureRepeat:4,waveVelocity:.05},"rippled-large":{waveStrength:.025,perturbationStrength:.01,textureRepeat:8,waveVelocity:.11},"slight-large":{waveStrength:.06,perturbationStrength:.02,textureRepeat:3,waveVelocity:.13},"moderate-large":{waveStrength:.14,perturbationStrength:.03,textureRepeat:2,
waveVelocity:.15}};g=function(){function a(){this.loadingCount=0;this.data=[];this.loadingState=0}a.prototype.loadTexture=function(a,b,c){return p(this,void 0,void 0,function(){var d,m;return n(this,function(e){switch(e.label){case 0:this.loadingCount++,e.label=1;case 1:return e.trys.push([1,3,,4]),[4,r.requestImage(c)];case 2:return d=e.sent(),t.assert(1<=d.width&&1<=d.height),this.data[b]=new u(a,this.getTextureProps(d.width,d.height,!0),d),[3,4];case 3:return m=e.sent(),console.warn("Failed to load texture for water material.",
m),[3,4];case 4:return this.loadingCount--,[2]}})})};a.prototype.getTextureProps=function(a,b,c){void 0===c&&(c=!1);return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:10497,samplingMode:9987,hasMipmap:c,maxAnisotropy:8,width:a,height:b}};a.prototype.ready=function(){return 2===this.loadingState?!0:1===this.loadingState&&0===this.loadingCount?(this.loadingState=2,!0):!1};a.prototype.loading=function(){return 1===this.loadingState?!0:!1};a.prototype.initialize=function(a,b){for(var c in b)this.loadTexture(a,
h.toNumber(c),b[c]);this.loadingState=1};a.prototype.bindRepo=function(a){for(var b in this.data)a.bindTexture(this.data[b],h.toNumber(b))};return a}();f.waterTextureRepo=new g});