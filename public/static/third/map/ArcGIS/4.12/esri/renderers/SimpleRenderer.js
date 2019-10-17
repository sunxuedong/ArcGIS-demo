// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../symbols ../core/lang ../core/accessorSupport/decorators ./Renderer ./mixins/VisualVariablesRenderer ../symbols/support/jsonUtils".split(" "),function(r,t,m,c,g,h,k,n,b,p,q,e){return function(l){function a(a){a=l.call(this)||this;a.description=null;a.label=null;a.symbol=null;a.type="simple";return a}m(a,l);f=a;a.prototype.writeSymbolWebScene=
function(a,d,b,c){e.writeTarget(a,d,b,c)};a.prototype.writeSymbol=function(a,d,b,c){e.writeTarget(a,d,b,c)};a.prototype.readSymbol=function(a,d,b){return e.read(a,d,b)};a.prototype.collectRequiredFields=function(a,b){return h(this,void 0,void 0,function(){return g(this,function(c){this.getSymbols().forEach(function(c){return c.collectRequiredFields(a,b)});return[2,this.collectVVRequiredFields(a,b)]})})};a.prototype.getSymbol=function(a,b){return this.symbol};a.prototype.getSymbolAsync=function(a,
b){return h(this,void 0,void 0,function(){return g(this,function(a){return[2,this.symbol]})})};a.prototype.getSymbols=function(){return this.symbol?[this.symbol]:[]};a.prototype.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce(function(a,b){return a+b.getAttributeHash()},"")};a.prototype.getMeshHash=function(){return this.getSymbols().reduce(function(a,b){return a+=JSON.stringify(b)},"")};a.prototype.clone=function(){return new f({description:this.description,label:this.label,
symbol:this.symbol&&this.symbol.clone(),visualVariables:n.clone(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})};var f;c([b.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);c([b.property({types:k.symbolTypesRenderer})],a.prototype,"symbol",void 0);c([b.writer("web-scene","symbol",{symbol:{types:k.symbolTypesRenderer3D}})],a.prototype,"writeSymbolWebScene",null);
c([b.writer("symbol")],a.prototype,"writeSymbol",null);c([b.reader("symbol")],a.prototype,"readSymbol",null);c([b.enumeration.serializable()({simple:"simple"})],a.prototype,"type",void 0);return a=f=c([b.subclass("esri.renderers.SimpleRenderer")],a)}(b.declared(p,q))});