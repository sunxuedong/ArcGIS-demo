// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../Color ../../../../core/maybe ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/factories/vec4f64".split(" "),function(b,d,h,f,k,l){Object.defineProperty(d,"__esModule",{value:!0});b=function(){function e(a){this.definition=a;this.key=JSON.stringify(a);this.haloSize=Math.round(a.halo.size);this.fillStyle=this.colorToRGBA(a.color);this.haloStyle=this.colorToRGB(a.halo.color)}e.prototype.colorToRGB=function(a){return"rgb("+a.slice(0,3).map(function(a){return Math.floor(255*
a)}).toString()+")"};e.prototype.colorToRGBA=function(a){return"rgba("+a.slice(0,3).map(function(a){return Math.floor(255*a)}).toString()+","+a[3]+")"};e.fromSymbol=function(a,b){void 0===b&&(b=1);var g=f.get(a,"material","color"),g=f.isSome(g)?h.toUnitRGBA(g):l.ZEROS,c=a.halo,d=null!=a.size?k.pt2px(a.size):12;a={family:a.font&&a.font.family?a.font.family:"sans-serif",weight:a.font&&a.font.weight?a.font.weight:"normal",style:a.font&&a.font.style?a.font.style:"normal"};c=f.isSome(c)&&f.isSome(c.color)&&
0<c.size?{size:k.pt2px(c.size),color:h.toUnitRGBA(c.color)}:{size:0,color:l.ZEROS};return new e({size:d,color:g,font:a,halo:c,pixelRatio:b})};return e}();d.TextRenderParameters=b;d.default=b});