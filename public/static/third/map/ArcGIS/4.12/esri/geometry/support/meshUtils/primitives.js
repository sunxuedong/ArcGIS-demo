// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/libs/gl-matrix-2/mat3f64 ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ./georeference".split(" "),function(D,t,A,y,B,C){Object.defineProperty(t,"__esModule",{value:!0});t.createUnitSizeBox=function(){for(var a=z.faceDescriptions,e=z.faceVertexOffsets,m=z.uvScales,b=4*a.length,f=new Float64Array(3*b),c=new Float32Array(3*b),b=new Float32Array(2*b),g=new Uint32Array(6*a.length),q=0,l=0,h=0,d=0,u=0;u<a.length;u++){for(var v=a[u],k=q/
3,n=0,p=e;n<p.length;n++){var r=p[n];g[d++]=k+r}k=v.corners;for(n=0;4>n;n++){p=k[n];r=0;b[h++]=.25*m[n][0]+v.uvOrigin[0];b[h++]=v.uvOrigin[1]-.25*m[n][1];for(var w=0;3>w;w++)0!==v.axis[w]?(f[q++]=.5*v.axis[w],c[l++]=v.axis[w]):(f[q++]=.5*p[r++],c[l++]=0)}}return{position:f,normal:c,uv:b,faces:g}};t.createUnitSizeSphere=function(a){void 0===a&&(a=0);a=Math.round(8*Math.pow(2,a));for(var e=2*a,m=(a-1)*(e+1)+2*e,b=new Float64Array(3*m),f=new Float32Array(3*m),m=new Float32Array(2*m),c=new Uint32Array((a-
1)*e*6),k=0,q=0,l=0,h=0,d=0;d<=a;d++){var u=d/a*Math.PI+.5*Math.PI,v=Math.cos(u);g[2]=Math.sin(u);for(var t=(u=0===d||d===a)?e-1:e,n=0;n<=t;n++){var p=n/t*2*Math.PI;g[0]=-Math.sin(p)*v;g[1]=Math.cos(p)*v;for(p=0;3>p;p++)b[k]=.5*g[p],f[k]=g[p],++k;m[q++]=(n+(u?.5:0))/e;m[q++]=d/a;0!==d&&n!==e&&(d!==a&&(c[l++]=h,c[l++]=h+1,c[l++]=h-e),1!==d&&(c[l++]=h,c[l++]=h-e,c[l++]=h-e-1));h++}}return{position:b,normal:f,uv:m,faces:c}};t.createUnitSizeCylinder=function(a){void 0===a&&(a=0);a=Math.round(16*Math.pow(2,
a));for(var e=4*(a+1)+2*a,m=new Float64Array(3*e),b=new Float32Array(3*e),e=new Float32Array(2*e),f=new Uint32Array(12*a),c=0,k=0,q=0,l=0,h=0,d=0;5>=d;d++)for(var u=0===d||5===d,v=1>=d||4<=d,t=2===d||4===d,n=u?a-1:a,p=0;p<=n;p++){var r=p/n*2*Math.PI,w=u?0:.5;g[0]=w*Math.sin(r);g[1]=w*-Math.cos(r);g[2]=2>=d?.5:-.5;for(r=0;3>r;r++)m[c++]=g[r],v?b[k++]=2===r?1>=d?1:-1:0:b[k++]=2===r?0:g[r]/w;e[q++]=(p+(u?.5:0))/a;1>=d?e[q++]=1*d/3:3>=d?e[q++]=1*(d-2)/3+1/3:e[q++]=1*(d-4)/3+2/3;t||0===d||p===a||(5!==
d&&(f[l++]=h,f[l++]=h+1,f[l++]=h-a),1!==d&&(f[l++]=h,f[l++]=h-a,f[l++]=h-a-1));h++}return{position:m,normal:b,uv:e,faces:f}};t.createUnitSizePlane=function(a){a=x.facingAxisOrderSwap[a];for(var e=x.position,g=x.normal,b=new Float64Array(e.length),f=new Float32Array(g.length),c=0,k=0;4>k;k++)for(var q=c,l=0;3>l;l++){var h=a[l],d=Math.abs(h)-1,h=0<=h?1:-1;b[c]=e[q+d]*h;f[c]=g[q+d]*h;c++}return{position:b,normal:f,uv:new Float32Array(x.uv),faces:new Uint32Array(x.faces)}};var x={position:[-.5,-.5,0,
.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[3,1,2],west:[-3,-1,2],north:[-1,3,2],south:[1,-3,2],up:[1,2,3],down:[1,-2,-3]}};t.convertUnitGeometry=function(a,e,m){for(var b=0;b<a.position.length;b+=3)a.position[b+2]+=.5;b=m&&m.size;if(null!=b){b="number"===typeof b?[b,b,b]:[null!=b.width?b.width:1,null!=b.depth?b.depth:1,null!=b.height?b.height:1];k[0]=b[0];k[4]=b[1];k[8]=b[2];for(var f=0;f<a.position.length;f+=3){for(var c=
0;3>c;c++)g[c]=a.position[f+c];y.vec3.transformMat3(g,g,k);for(c=0;3>c;c++)a.position[f+c]=g[c]}if(b[0]!==b[1]||b[1]!==b[2])for(k[0]=1/b[0],k[4]=1/b[1],k[8]=1/b[2],f=0;f<a.normal.length;f+=3){for(c=0;3>c;c++)g[c]=a.normal[f+c];y.vec3.transformMat3(g,g,k);y.vec3.normalize(g,g);for(c=0;3>c;c++)a.normal[f+c]=g[c]}}b=C.georeference(a,e,m);return{vertexAttributes:{position:b.position,normal:b.normal,uv:a.uv},components:[{faces:a.faces,material:m&&m.material||null}],spatialReference:e.spatialReference}};
var z={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,
1,2,0,2,3]};t.boxFaceOrder={south:0,east:1,north:2,west:3,up:4,down:5};var g=B.vec3f64.create(),k=A.mat3f64.create()});