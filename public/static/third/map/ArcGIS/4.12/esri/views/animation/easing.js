// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(f,a){function e(a){return a}function d(a){var b=2*(a-Math.sqrt((a-1)*a)),d=b/2/a;return function(c){return c<d?a*c*c:b*c-b+1}}function c(a,c){return function(b){return b<c?c*a(b/c):1-a((1-b)/(1-c))*(1-c)}}Object.defineProperty(a,"__esModule",{value:!0});a.linear=e;a.inQuad=function(a){return a*a};a.outQuad=function(b){return 1-a.inQuad(1-b)};a.inOutQuad=function(b){return.5>b?a.inQuad(2*b)/2:(a.outQuad(2*(b-.5))+1)/2};a.inCubic=function(a){return a*a*a};a.outCubic=
function(b){return 1-a.inCubic(1-b)};a.inOutCubic=function(b){return.5>b?a.inCubic(2*b)/2:(a.outCubic(2*(b-.5))+1)/2};a.inQuart=function(a){return a*a*a*a};a.outQuart=function(b){return 1-a.inQuart(1-b)};a.inOutQuart=function(b){return.5>b?a.inQuart(2*b)/2:(a.outQuart(2*(b-.5))+1)/2};a.inQuint=function(a){return a*a*a*a*a};a.outQuint=function(b){return 1-a.inQuint(1-b)};a.inOutQuint=function(b){return.5>b?a.inQuint(2*b)/2:(a.outQuint(2*(b-.5))+1)/2};a.inSine=function(a){return-Math.cos(a*Math.PI/
2)+1};a.outSine=function(b){return 1-a.inSine(1-b)};a.inOutSine=function(b){return.5>b?a.inSine(2*b)/2:(a.outSine(2*(b-.5))+1)/2};a.inExpo=function(a){return Math.pow(2,10*(a-1))};a.outExpo=function(b){return 1-a.inExpo(1-b)};a.inOutExpo=function(b){return.5>b?a.inExpo(2*b)/2:(a.outExpo(2*(b-.5))+1)/2};a.inCirc=function(a){return-(Math.sqrt(1-a*a)-1)};a.outCirc=function(b){return 1-a.inCirc(1-b)};a.inOutCirc=function(b){return.5>b?a.inCirc(2*b)/2:(a.outCirc(2*(b-.5))+1)/2};a.inCoastQuad=c(d(1),1);
a.outCoastQuad=c(d(1),0);a.inOutCoastQuad=c(d(1),.5);a.inCoastCubic=c(d(2),1);a.outCoastCubic=c(d(2),0);a.inOutCoastCubic=c(d(2),.5);a.inCoastQuart=c(d(3),1);a.outCoastQuart=c(d(3),0);a.inOutCoastQuart=c(d(3),.5);a.inCoastQuint=c(d(4),1);a.outCoastQuint=c(d(4),0);a.inOutCoastQuint=c(d(4),.5);a.named={linear:e,"in-quad":a.inQuad,"out-quad":a.outQuad,"in-out-quad":a.inOutQuad,"in-coast-quad":a.inCoastQuad,"out-coast-quad":a.outCoastQuad,"in-out-coast-quad":a.inOutCoastQuad,"in-cubic":a.inCubic,"out-cubic":a.outCubic,
"in-out-cubic":a.inOutCubic,"in-coast-cubic":a.inCoastCubic,"out-coast-cubic":a.outCoastCubic,"in-out-coast-cubic":a.inOutCoastCubic,"in-quart":a.inQuart,"out-quart":a.outQuart,"in-out-quart":a.inOutQuart,"in-coast-quart":a.inCoastQuart,"out-coast-quart":a.outCoastQuart,"in-out-coast-quart":a.inOutCoastQuart,"in-quint":a.inQuint,"out-quint":a.outQuint,"in-out-quint":a.inOutQuint,"in-coast-quint":a.inCoastQuint,"out-coast-quint":a.outCoastQuint,"in-out-coast-quint":a.inOutCoastQuint,"in-sine":a.inSine,
"out-sine":a.outSine,"in-out-sine":a.inOutSine,"in-expo":a.inExpo,"out-expo":a.outExpo,"in-out-expo":a.inOutExpo,"in-circ":a.inCirc,"out-circ":a.outCirc,"in-out-circ":a.inOutCirc}});