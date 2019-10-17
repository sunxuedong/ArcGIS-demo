// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/maybe ../../core/accessorSupport/decorators ../../intl/date ../../renderers/support/utils ../Slider/SliderViewModel".split(" "),function(n,p,g,e,h,b,k,l,m){return function(f){function a(a){var c=f.call(this)||this;c.average=null;c.bins=null;c.hasTimeData=!1;c.labelFormatFunction=function(a,q,b){return c.hasTimeData?k.formatDate(new Date(a),l.timelineDateFormatOptions):c.defaultLabelFormatFunction(a)};
c.rangeType="equal";c.standardDeviation=null;return c}g(a,f);a.prototype.generateWhereClause=function(a){var c=this.rangeType,b=this.values;if("ready"!==this.state||!b.length||!h.isSome(a))return null;var d=b[0],b=1<b.length?b[b.length-1]:null;switch(c){case "equal":return a+" \x3d "+d;case "not-equal":return a+" \x3c\x3e "+d;case "less-than":return a+" \x3c "+d;case "greater-than":return a+" \x3e "+d;case "at-least":return a+" \x3e\x3d "+d;case "at-most":return a+" \x3c\x3d "+d;case "between":return a+
" BETWEEN "+d+" AND "+b;case "not-between":return a+" NOT BETWEEN "+d+" AND "+b;default:return null}};e([b.property()],a.prototype,"average",void 0);e([b.property()],a.prototype,"bins",void 0);e([b.property()],a.prototype,"hasTimeData",void 0);e([b.property()],a.prototype,"labelFormatFunction",void 0);e([b.property()],a.prototype,"rangeType",void 0);e([b.property()],a.prototype,"standardDeviation",void 0);return a=e([b.subclass("esri.widgets.HistogramRangeSlider.HistogramRangeSliderViewModel")],a)}(b.declared(m))});