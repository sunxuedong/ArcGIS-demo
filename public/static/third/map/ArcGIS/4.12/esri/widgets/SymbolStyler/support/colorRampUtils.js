// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/assignHelper","dojox/gfx"],function(m,d,k,l){function e(b){var a=b.colors;b=b.hasStops;var c=a.length,g=b?1/c:1/(c-1),d=[];if(Array.isArray(a)&&a[0]&&"offset"in a[0]&&"color"in a[0])return a;for(var e=0,f=0;f<c;f++){var h=a[c-1-f];d.push({offset:f*g,color:h});b&&(e=(f+1)*g,d.push({offset:e,color:h}))}return d}Object.defineProperty(d,"__esModule",{value:!0});d.createColorRamp=function(b){var a=b.node,c=b.width,d=b.height;b=e(b);a=l.createSurface(a,
c,d);c=k({},a.getDimensions(),{x:0,y:0});return a.createRect(c).setFill({type:"linear",x1:0,y1:0,x2:0,y2:d,colors:b})};d.updateColorRamp=function(b){var a=b.ramp,c=a.getFill();c.colors=e(b);a.setFill(c);return a}});