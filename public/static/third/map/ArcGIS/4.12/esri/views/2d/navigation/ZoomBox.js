// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/screenUtils ../../../core/accessorSupport/decorators".split(" "),function(r,t,n,k,p,q,h){return function(l){function b(a){a=l.call(this,a)||this;a._container=null;a._overlay=null;a._backgroundShape=null;a._boxShape=null;a._box={x:0,y:0,width:0,height:0};a._redraw=a._redraw.bind(a);return a}n(b,l);b.prototype.destroy=function(){this.view=null};Object.defineProperty(b.prototype,
"view",{set:function(a){var e=this;this._handles&&this._handles.forEach(function(a){a.remove()});this._handles=null;this._destroyOverlay();this._set("view",a);a&&(a.on("drag",["Shift"],function(a){return e._handleDrag(a,1)}),a.on("drag",["Shift","Ctrl"],function(a){return e._handleDrag(a,-1)}))},enumerable:!0,configurable:!0});b.prototype._start=function(a,e,c,d){this._createContainer();this._createOverlay();this.navigation.begin()};b.prototype._update=function(a,e,c,d){this._box.x=a;this._box.y=
e;this._box.width=c;this._box.height=d;this._rafId||(this._rafId=requestAnimationFrame(this._redraw))};b.prototype._end=function(a,e,c,d,f){var b=this.view;a=b.toMap(q.createScreenPoint(a+.5*c,e+.5*d));c=Math.max(c/b.width,d/b.height);-1===f&&(c=1/c);this._destroyOverlay();this.navigation.end();b.goTo({center:a,scale:b.scale*c})};b.prototype._updateBox=function(a,e,c,d){var b=this._boxShape;b.setAttributeNS(null,"x",""+a);b.setAttributeNS(null,"y",""+e);b.setAttributeNS(null,"width",""+c);b.setAttributeNS(null,
"height",""+d);b.setAttributeNS(null,"class","esri-zoom-box__outline")};b.prototype._updateBackground=function(a,b,c,d){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(a,b,c,d,this.view.width,this.view.height))};b.prototype._createContainer=function(){var a=document.createElement("div");a.className="esri-zoom-box__container";this.view.root.appendChild(a);this._container=a};b.prototype._createOverlay=function(){var a=this.view.width,b=this.view.height,c=document.createElementNS("http://www.w3.org/2000/svg",
"path");c.setAttributeNS(null,"d","M 0 0 L "+a+" 0 L "+a+" "+b+" L 0 "+b+" Z");c.setAttributeNS(null,"class","esri-zoom-box__overlay-background");a=document.createElementNS("http://www.w3.org/2000/svg","rect");b=document.createElementNS("http://www.w3.org/2000/svg","svg");b.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink");b.setAttributeNS(null,"class","esri-zoom-box__overlay");b.appendChild(c);b.appendChild(a);this._container.appendChild(b);this._backgroundShape=
c;this._boxShape=a;this._overlay=b};b.prototype._destroyOverlay=function(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container);this._container=this._backgroundShape=this._boxShape=this._overlay=null};b.prototype._toSVGPath=function(a,b,c,d,f,m){c=a+c;d=b+d;return"M 0 0 L "+f+" 0 L "+f+" "+m+" L 0 "+m+" ZM "+a+" "+b+" L "+a+" "+d+" L "+c+" "+d+" L "+c+" "+b+" Z"};b.prototype._handleDrag=function(a,b){var c=a.x,d=a.y,f=a.origin.x,e=a.origin.y,g;c>f?(g=
f,f=c-f):(g=c,f-=c);d>e?(c=e,d-=e):(c=d,d=e-d);switch(a.action){case "start":this._start(g,c,f,d);break;case "update":this._update(g,c,f,d);break;case "end":this._end(g,c,f,d,b)}a.stopPropagation()};b.prototype._redraw=function(){if(this._rafId&&(this._rafId=null,this._overlay)){var a=this._box,b=a.x,c=a.y,d=a.width,a=a.height;this._updateBox(b,c,d,a);this._updateBackground(b,c,d,a);this._rafId=requestAnimationFrame(this._redraw)}};k([h.property()],b.prototype,"navigation",void 0);k([h.property()],
b.prototype,"view",null);return b=k([h.subclass("esri.views.2d.navigation.ZoomBox")],b)}(h.declared(p))});