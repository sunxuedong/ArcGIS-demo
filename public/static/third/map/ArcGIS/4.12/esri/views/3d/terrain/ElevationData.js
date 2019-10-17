// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/mathUtils","../support/mathUtils","./TerrainConst"],function(x,y,v,u,w){return function(){function t(a,e,c,f){this.samplerData=null;this.level=a;this.i=e;this.j=c;this.extent=f}t.prototype.computeMinMaxValue=function(a,e,c,f){var b=Infinity,h=-Infinity;a-=this.level;var d=Math.pow(2,a);if(Math.floor(e/d)===this.i&&Math.floor(c/d)===this.j&&0<a){var g=this.samplerData.width,k=this.samplerData.pixelData,n=.5*w.ELEVATION_NODATA_VALUE;a=(g-1)/d;c=(c-this.j*d)*
a;var l=(e-this.i*d)*a;if(1>a){var r=Math.floor(c),q=Math.floor(l),m=r+q*g;e=k[m];var d=k[m+1],p=k[m+g],m=k[m+g+1];if(e+d+p+m<n)return b=c-r,n=l-q,h=u.bilerp(e,d,p,m,b,n),g=u.bilerp(e,d,p,m,b+a,n),k=u.bilerp(e,d,p,m,b,n+a),a=u.bilerp(e,d,p,m,b+a,n+a),f[0]=Math.min(h,g,k,a),f[1]=Math.max(h,g,k,a),f;c=r;l=q;a=1}else c=Math.floor(c),l=Math.floor(l),a=Math.ceil(a);for(e=c;e<=c+a;e++)for(d=l;d<=l+a;d++)m=e+d*g,p=k[m],p<n?(b=Math.min(b,p),h=Math.max(h,p)):(b=0<b?0:b,h=0>h?0:h)}f[0]=b;f[1]=h;return f};t.create=
function(a,e,c){a=new t(a[0],a[1],a[2],e);e=c.noDataValue;var f=c.minValue,b=c.maxValue;if(null==f||null==b){for(var h=c.values,f=Infinity,b=-Infinity,d=!0,g=0;g<h.length;g++){var k=h[g];k!==e&&(f=k<f?k:f,b=k>b?k:b,d=!1)}d&&(b=f=0)}b=-3E38<b?b:0;a.samplerData={pixelData:c.values,width:c.width,height:c.height,minValue:f,maxValue:b,noDataValue:e,safeWidth:.99999999*(c.width-1),dx:(c.width-1)/(a.extent[2]-a.extent[0]),dy:(c.width-1)/(a.extent[3]-a.extent[1]),x0:a.extent[0],y1:a.extent[3]};a.bounds=[f,
b];return a};t.sample=function(a,e,c){for(var f=0;f<c.length;f++){var b=c[f];if(b){var h=b.safeWidth,d=b.width,g=b.pixelData,k=v.clamp(b.dy*(b.y1-e),0,h),b=v.clamp(b.dx*(a-b.x0),0,h),h=Math.floor(k),n=Math.floor(b),l=h*d+n,r=l+d,q=g[l],d=g[r],l=g[l+1],g=g[r+1];if(q+d+l+g<.5*w.ELEVATION_NODATA_VALUE)return k-=h,b-=n,a=q+(l-q)*b,a+(d+(g-d)*b-a)*k}}return null};return t}()});