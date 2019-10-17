// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Logger ../core/maybe ../core/accessorSupport/decorators ./Symbol3DLayer ./support/colors ./support/IconSymbol3DLayerResource ./support/materialUtils ./support/Symbol3DAnchorPosition2D ./support/Symbol3DMaterial ./support/Symbol3DOutline".split(" "),function(y,z,n,e,p,h,d,q,k,r,t,f,u,v){function l(b){var c="width"in b?b.width:b.size,d="height"in b?b.height:b.size,a=m(b.xoffset);b=m(b.yoffset);return(a||
b)&&c&&d?{x:-a/c,y:b/d}:null}function m(b){return isFinite(b)?b:0}var w=p.getLogger("esri.symbols.IconSymbol3DLayer"),x={circle:"circle",cross:"cross",diamond:"kite",square:"square",x:"x",triangle:"triangle",path:null};return function(b){function c(a){a=b.call(this)||this;a.material=null;a.resource=null;a.type="icon";a.size=12;a.anchor="center";a.anchorPosition=void 0;a.outline=void 0;return a}n(c,b);g=c;c.prototype.clone=function(){return new g({anchor:this.anchor,anchorPosition:this.anchorPosition&&
this.anchorPosition.clone(),enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),material:h.isSome(this.material)?this.material.clone():null,outline:h.isSome(this.outline)?this.outline.clone():null,resource:this.resource&&this.resource.clone(),size:this.size})};c.fromSimpleMarkerSymbol=function(a){var b=a.color||k.white,c=l(a),d=a.outline&&0<a.outline.width?{size:a.outline.width,color:(a.outline.color||k.white).clone()}:null,e=g,h=a.size;a=a.style;var f=x[a];f?a=f:(w.warn(a+
' cannot be mapped to Icon symbol. Fallback to "circle"'),a="circle");return new e({size:h,resource:{primitive:a},material:{color:b},outline:d,anchor:c?"relative":void 0,anchorPosition:c})};c.fromPictureMarkerSymbol=function(a){var c=!a.color||k.isBlack(a.color)?k.white:a.color,b=l(a);return new g({size:a.width<=a.height?a.height:a.width,resource:{href:a.url},material:{color:c.clone()},anchor:b?"relative":void 0,anchorPosition:b})};var g;e([d.property({type:u.default,json:{write:!0}})],c.prototype,
"material",void 0);e([d.property({type:r.default,json:{write:!0}})],c.prototype,"resource",void 0);e([d.enumeration.serializable()({Icon:"icon"})],c.prototype,"type",void 0);e([d.property(t.screenSizeProperty)],c.prototype,"size",void 0);e([d.enumeration.serializable()({center:"center",left:"left",right:"right",top:"top",bottom:"bottom",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",relative:"relative"}),d.property({json:{default:"center"}})],c.prototype,
"anchor",void 0);e([d.property({type:f.Symbol3DAnchorPosition2D,json:{type:[Number],read:{reader:function(a){return new f.Symbol3DAnchorPosition2D({x:a[0],y:a[1]})}},write:{writer:function(a,b){b.anchorPosition=[a.x,a.y]},overridePolicy:function(){return{enabled:"relative"===this.anchor}}}}})],c.prototype,"anchorPosition",void 0);e([d.property({type:v.default,json:{write:!0}})],c.prototype,"outline",void 0);return c=g=e([d.subclass("esri.symbols.IconSymbol3DLayer")],c)}(d.declared(q))});