// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper dojo/i18n!./HeatmapSlider/nls/HeatmapSlider ../../core/accessorSupport/decorators ./SmartMappingSliderBase ./HeatmapSlider/HeatmapSliderViewModel ./../support/widget".split(" "),function(n,p,q,h,e,k,d,l,m,c){return function(g){function b(a){a=g.call(this)||this;a._rampFillId=null;a.label=k.widgetLabel;a.stops=null;a.viewModel=new m;a.slider.set({labelsVisible:!1,
labelInputsEnabled:!1,rangeLabelInputsEnabled:!1});a._rampFillId=a.id+"-ramp-fill";return a}h(b,g);f=b;b.fromHeatmapRendererResult=function(a){return new f({stops:a.renderer.colorStops})};b.prototype.render=function(){var a=this.viewModel.state,b=this.label,d=this.classes("esri-heatmap-slider","esri-widget","disabled"===a?"esri-disabled":null);return c.tsx("div",{"aria-label":b,class:d},"disabled"===a?null:this.renderContent())};b.prototype.renderContent=function(){this.slider.extraNodes=[this.renderRamp()];
return c.tsx("div",{class:"esri-heatmap-slider__slider-container"},this.slider.render())};b.prototype.renderRamp=function(){var a="url(#"+this._rampFillId+")";return c.tsx("div",{class:"esri-heatmap-slider__ramp"},c.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},c.tsx("defs",null,this.renderRampFillDefinition()),c.tsx("rect",{x:"0",y:"0",fill:a,height:"100%",width:"100%"})))};b.prototype.renderRampFillDefinition=function(){return c.tsx("linearGradient",{id:this._rampFillId,x1:"0",x2:"0",y1:"0",y2:"1"},
this.renderRampFillStops())};b.prototype.renderRampFillStops=function(){var a=this;return this.viewModel.getStopInfo().reverse().map(function(b,c){return a.renderStop(b,c)})};b.prototype.renderStop=function(a,b){a=this.getPropsForStop(a);return c.tsx("stop",{key:b+"-stop",offset:a.offset,"stop-color":a.color})};var f;e([d.property()],b.prototype,"label",void 0);e([d.aliasOf("viewModel.stops")],b.prototype,"stops",void 0);e([d.property(),c.renderable(["viewModel.max","viewModel.max","viewModel.values"])],
b.prototype,"viewModel",void 0);return b=f=e([d.subclass("esri.widgets.smartMapping.HeatmapSlider")],b)}(d.declared(l.SmartMappingSliderBase))});