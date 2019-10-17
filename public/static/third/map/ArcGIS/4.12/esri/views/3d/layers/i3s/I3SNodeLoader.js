// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/has ../../../../core/lang ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/urlUtils ../../../../libs/draco/DracoDecoder ./I3SBinaryReader ./I3SUtil ../../webgl-engine/lib/Util".split(" "),function(p,P,H,I,J,K,q,r,v,L,y,t,M){function u(b,a){var d=[],f=function(a){var e=q.isSome(b)&&b[a]&&b[a].formats;e&&d.push({id:""+a,encodings:e.map(function(a){return{name:a.name,
encoding:N[a.format]}})})};a&&a.pbrMetallicRoughness&&a.pbrMetallicRoughness.baseColorTexture&&f(a.pbrMetallicRoughness.baseColorTexture.textureSetDefinitionId);return d}function O(b,a){var d,f=u(b,a),e=f[0]&&f[0].id;b=q.isSome(b)&&b[e]&&b[e].atlas;var c="opaque"!==a.alphaMode,f=e?(d={},d[e]={encoding:f[0].encodings.map(function(a){return a.encoding}),wrap:["none","none"],atlas:b,channels:c?"rgba":"rgb",images:[{id:e,size:0,href:f[0].encodings.map(function(a){return"../textures/"+a.name}),byteOffset:0,
length:0}]},d):{};d=(d=a.pbrMetallicRoughness)&&d.baseColorFactor;a={mat:{type:"standard",params:{diffuse:d?d.slice(0,3):[1,1,1],specular:[1,1,1,1],vertexRegions:b,doubleSided:a.doubleSided,cullFace:a.cullFace,transparency:d?1-d[3]:0,useVertexColorAlpha:c}}};return{textureDefinitions:f,materialDefinitions:a}}p=function(){function b(a,d,f,e,b,k){this.streamDataController=d;this.logger=f;this.defaultGeometrySchema=e;this.requiredAttributes=b;this.options=k;this.layerUrl=a.parsedUrl.path;this.geometryDefinitions=
a.geometryDefinitions;if(a.materialDefinitions){var c=a.textureSetDefinitions;this.materialTextures=a.materialDefinitions.map(function(a){return u(c,a)});this.materialShared=a.materialDefinitions.map(function(a){return O(c,a)})}}b.prototype.load=function(a,d,f){return this.streamDataController.request(a,d,{signal:f})};b.prototype.loadAttribute=function(a,d,f){return this.load(this.layerUrl+"/nodes/"+a.resources.attributes+"/attributes/"+d.key+"/0","binary",f).then(function(a){return y.readBinaryAttribute(d,
a)})};b.prototype.loadAttributes=function(a,d,f){var e=this;return r.eachAlways(d.map(function(d){return e.loadAttribute(a,d.attributeStorageInfo,f)})).then(function(f){for(var b={},c=0;c<d.length;++c)f[c].value?b[d[c].name]=f[c].value:r.isAbortError(f[c].error)||e.logger.error("Failed to load attributeData for '"+d[c].name+"' on node '"+a.id+"'");return b})};b.prototype.loadNodeData=function(a,d){return I(this,void 0,void 0,function(){var f,e,b,k,l,m,n,F,z,A,B,p,w,C,q,v,t,D,E;return H(this,function(c){switch(c.label){case 0:f=
null!=this.requiredAttributes&&a.resources.attributes?this.loadAttributes(a,this.requiredAttributes,d):r.resolve({});var g=this.geometryDefinitions;c={bufferDefinition:null,bufferIndex:0};if(!(null==g||0>a.resources.geometryDefinition)&&(g=0<=a.resources.geometryDefinition?g[a.resources.geometryDefinition].geometryBuffers:null,null!=g))for(var h=0;h<g.length;h++)if(null!=g[h].compressedAttributes){if("draco"===g[h].compressedAttributes.encoding&&L.isSupported()&&!J("disable-feature:i3s-draco")){c.bufferIndex=
h;c.bufferDefinition=g[h];break}}else c.bufferIndex=h,c.bufferDefinition=g[h];e=c;b=e.bufferDefinition;k=e.bufferIndex;l=a.resources.geometry?this.loadGeometry(a,k,d):null;return a.resources.hasSharedResource?[4,this.loadShared(a,d)]:[3,2];case 1:return n=c.sent(),[3,3];case 2:n=this.materialShared&&0<=a.resources.materialDefinition?this.materialShared[a.resources.materialDefinition]:null,c.label=3;case 3:return m=n,this.options.loadFeatureData?[4,this.loadFeatureData(a,d)]:[3,5];case 4:return z=
c.sent(),[3,6];case 5:z=null,c.label=6;case 6:return F=z,A=this.options.loadFeatureData?this.collectGeometries(F):this.meshPyramidGeometryData(a,m),B=this.materialTextures&&0<=a.resources.materialDefinition?this.materialTextures[a.resources.materialDefinition]:this.getRequiredTexturesFromShared(A,m),p=this.options.loadTextureData?this.loadTextures(a,B,d):null,C=w=null,l?[4,l]:[3,8];case 7:w=c.sent();g=this.defaultGeometrySchema;h=m;if(g&&h&&h.materialDefinitions){var x=Object.keys(h.materialDefinitions)[0];
!h.materialDefinitions[x].params.vertexRegions&&g.vertexAttributes.region&&(g=K.clone(g),delete g.vertexAttributes.region)}q=g;if(v=!(!b||!b.compressedAttributes||"draco"!==b.compressedAttributes.encoding)){g={};h=0;for(x=b.compressedAttributes.attributes;h<x.length;h++){var u=x[h];G[u]&&(g[G[u]]={valueType:null})}g={header:null,byteOffset:0,byteCount:0,vertexAttributes:g}}else g=b?y.createGeometryIndexFromDefinition(b,a.vertexCount,a.numFeatures):y.createGeometryIndexFromSchema(w,q);C=g;c.label=
8;case 8:return[4,p];case 9:return t=c.sent(),[4,f];case 10:return D=c.sent(),E=null,D&&(E={attributeData:D,loadedAttributes:this.requiredAttributes}),[2,{allGeometryData:A,attributeDataInfo:E,geometryBuffer:w,geometryIndex:C,sharedResource:m,requiredTextures:B,textureData:t}]}})})};b.addAbsoluteHrefTexture=function(a,d){a=a.textureDefinitions;if(null!=a)for(var b=0,e=Object.keys(a);b<e.length;b++)for(var c=0,k=a[e[b]].images;c<k.length;c++){var l=k[c];Array.isArray(l.href)?l.hrefConcat=l.href.map(function(a){return v.makeAbsolute(a,
d)}):l.hrefConcat=v.makeAbsolute(l.href,d)}};b.fixTextureEncodings=function(a){a=a.textureDefinitions;if(null!=a)for(var d in a){var b=a[d];if(Array.isArray(b.encoding))for(var e=0;e<b.encoding.length;e++){var c=b.encoding[e];"data:"===c.substring(0,5)&&(b.encoding[e]=c.substring(5))}else c=b.encoding,"data:"===c.substring(0,5)&&(b.encoding=c.substring(5))}};b.prototype.loadShared=function(a,d){var f=this.layerUrl+"/nodes/"+a.resources.geometry+"/shared";return this.load(f,"json",d).then(function(a){b.fixTextureEncodings(a);
b.addAbsoluteHrefTexture(a,f);return a})};b.prototype.loadTexture=function(a,d,b,e,c){return e===t.DDS_ENCODING_STRING?this.load(a,"binary",c).then(function(a){return{i3sTexId:d,data:a,encoding:e}}):this.load(a,"image",c).then(function(a){var c=a;if(b&&4096<=a.width*a.height){var c=Math.ceil(a.width/2),f=Math.ceil(a.height/2),n=document.createElement("canvas");n.width=c;n.height=f;n.getContext("2d").drawImage(a,0,0,c,f);c=n}return{i3sTexId:d,data:c,encoding:e}})};b.prototype.loadTextures=function(a,
d,f){var e=this,c=this.options.textureFormat===b.TextureFormat.Compressed,k=this.options.textureFormat===b.TextureFormat.Downsampled;return r.all(d.map(function(b){var d=t.selectEncoding(b.encodings,c);return null==d?(e.logger.error("No known encoding for texture found on node "+a.id),r.reject()):e.loadTexture(e.layerUrl+"/nodes/"+(a.resources.texture||a.id)+"/textures/"+d.name,b.id,k,d.encoding,f)}))};b.prototype.getRequiredTexturesFromShared=function(a,b){for(var d=[],e=0;e<a.length;e++){var c=
a[e].geometries;if(null!=c)for(var k=function(a){a=a.params.textureID||"none";if("none"!==a){null!=b.textureDefinitions&&null!=b.textureDefinitions[a]||l.logger.warn("textureDefinitions missing in shared resource. i3sTexId: "+a);var c=b.textureDefinitions[a];M.assert(void 0!==c,"geometry wants unknown texture "+a);if(0===c.images.length)return"continue";var e=c.images[c.images.length-1],f=function(a){return a&&a.split("/").pop()},c=Array.isArray(c.encoding)?c.encoding.map(function(a,b){return{name:f(e.href[b]),
encoding:a}}):[{name:f(e.href),encoding:c.encoding}];d.push({id:a,encodings:c})}},l=this,m=0;m<c.length;m++)k(c[m])}return d};b.prototype.meshPyramidGeometryData=function(a,b){a=b&&b.materialDefinitions?Object.keys(b.materialDefinitions)[0]:null;b=b&&b.textureDefinitions?Object.keys(b.textureDefinitions)[0]:null;return[{featureIds:[],geometries:[{type:"ArrayBufferView",params:{materialID:a,textureID:b}}],featureDataPosition:[0,0,0]}]};b.prototype.collectGeometries=function(a){var b=[],f=0;for(a=a.featureData;f<
a.length;f++){var e=a[f],c=e.geometries;if(null!=c)for(var k=0;k<c.length;k++)b.push({featureIds:[e.id],featureDataPosition:e.position,geometries:[c[k]]});else null!=e.position&&b.push({featureIds:[e.id],featureDataPosition:e.position,geometries:null})}return b};b.prototype.loadFeatureData=function(a,b){return this.load(this.layerUrl+"/nodes/"+a.id+"/features/0","json",b)};b.prototype.loadGeometry=function(a,b,f){return this.load(this.layerUrl+"/nodes/"+a.resources.geometry+"/geometries/"+b,"binary",
f)};return b}();var N={jpg:"image/jpeg",png:"image/png",dds:"image/vnd-ms.dds","ktx-etc2":"image/ktx"},G={position:"position",normal:"normal",uv0:"uv0",uv1:"uv1",color:"color","uv-region":"region"};(function(b){b=b.TextureFormat||(b.TextureFormat={});b[b.Compressed=0]="Compressed";b[b.Normal=1]="Normal";b[b.Downsampled=2]="Downsampled"})(p||(p={}));return p});