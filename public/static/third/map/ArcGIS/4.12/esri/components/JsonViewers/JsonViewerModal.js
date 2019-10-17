// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["../Component","../Navigation/TabNav","dojo/i18n!../JsonViewers/nls/resources","../JsonViewers/index","../Modals/Dialog"],function(g,h,k,m,n){return function(d){function c(a){if(b[a])return b[a].exports;var e=b[a]={i:a,l:!1,exports:{}};return d[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}var b={};return c.m=d,c.c=b,c.d=function(a,e,b){c.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:b})},c.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,
{value:"Module"});Object.defineProperty(a,"__esModule",{value:!0})},c.t=function(a,e){if((1&e&&(a=c(a)),8&e)||4&e&&"object"==typeof a&&a&&a.__esModule)return a;var b=Object.create(null);if(c.r(b),Object.defineProperty(b,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var d in a)c.d(b,d,function(b){return a[b]}.bind(null,d));return b},c.n=function(a){var b=a&&a.__esModule?function(){return a.default}:function(){return a};return c.d(b,"a",b),b},c.o=function(b,c){return Object.prototype.hasOwnProperty.call(b,
c)},c.p="",c(c.s=405)}({0:function(d,c,b){function a(b,a){function c(){this.constructor=b}e(b,a);b.prototype=null===a?Object.create(a):(c.prototype=a.prototype,new c)}b.d(c,"b",function(){return a});b.d(c,"a",function(){return f});var e=function(b,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c])})(b,a)},f=function(){return(f=Object.assign||function(b){for(var a,c=1,d=arguments.length;c<d;c++)for(var e in a=
arguments[c])Object.prototype.hasOwnProperty.call(a,e)&&(b[e]=a[e]);return b}).apply(this,arguments)}},1:function(d,c){d.exports=g},110:function(d,c){d.exports=h},140:function(d,c){d.exports=k},297:function(d,c){d.exports=m},298:function(d,c){d.exports=n},299:function(d,c,b){var a=b(0);d=function(b){function c(a){return b.call(this,a)||this}return a.b(c,b),c.prototype.render=function(b){return b("div",null,b("div",{innerHTML:this.props.htmlString}))},c}(b(1).Component);c.a=d},405:function(d,c,b){b.r(c);
var a=b(0),e=b(140);d=b(297);var f=b.n(d);d=b(1);var l=b(298),g=b.n(l),l=b(110),h=b.n(l),k=b(299);b=function(b){function c(a){var c;a=b.call(this,a)||this;return a.onTabSelect=a.onTabSelect.bind(a),a.props.availableTabs&&(c=a.props.availableTabs[0].value),a.state.selectedTab=a.props.selectedTab||c||"",a}return a.b(c,b),c.prototype.render=function(a){var b=this,c=this.props.availableTabs||[],c=(this.props.baseTabs||[]).map(function(c){return"ProcessInfo"===c?{value:"ProcessInfo",text:e.processInfo,
content:a(k.a,{key:"html",htmlString:b.props.processInfoHtml})}:{value:"Json",text:e.jsonResult,content:a(f.a,{key:"json-viewer",containerClass:"json-viewer__modal__view",data:b.props.data,name:b.props.name,expanded:b.props.expanded,expandedAll:b.props.expandedAll,nameFormatter:b.props.nameFormatter,valueFormatter:b.props.valueFormatter,objectValueFormatter:b.props.objectValueFormatter,arrayValueFormatter:b.props.arrayValueFormatter,separatorFormatter:b.props.separatorFormatter})}}).concat(c),d=c.filter(function(a){return a.value==
b.state.selectedTab})[0];return a("div",{class:"json-viewer__modal"},a(g.a,{key:"Modal-dialog-json-view",scrollable:!1,modal:!0},1<c.length?a(h.a,{selectedOptionValue:this.state.selectedTab,key:"json-view-tab",options:c,onSelect:this.onTabSelect}):void 0,a("div",{class:"json-viewer__modal__view-content"},d.content),a("div",{class:"json-viewer__modal__footer"},a("button",{class:"jsonviewer__cancel-button",onclick:this.props.handleCancel},e.cancel))))},c.prototype.onTabSelect=function(a){this.setState({selectedTab:a})},
c}(d.Component);c.default=b}})});