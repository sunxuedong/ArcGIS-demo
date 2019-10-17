// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators ./labelUtils".split(" "),function(k,l,g,c,h,b,f){return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.value=null;a.expression=null;return a}g(a,d);e=a;a.prototype.readExpression=function(a,b){return b.value?f.convertTemplatedStringToArcade(b.value):a};a.prototype.writeExpression=function(a,b,c){null!=this.value&&
(a=f.convertTemplatedStringToArcade(this.value));b[c]=a};a.prototype.clone=function(){return new e({value:this.value,expression:this.expression})};var e;c([b.property({json:{read:!1,write:!1}})],a.prototype,"value",void 0);c([b.property({type:String,json:{write:{allowNull:!0}}})],a.prototype,"expression",void 0);c([b.reader("expression",["expression","value"])],a.prototype,"readExpression",null);c([b.writer("expression")],a.prototype,"writeExpression",null);return a=e=c([b.subclass("esri.layers.support.LabelExpressionInfo")],
a)}(b.declared(h))});