// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["../Component"],function(h){return function(f){function a(b){if(d[b])return d[b].exports;var c=d[b]={i:b,l:!1,exports:{}};return f[b].call(c.exports,c,c.exports,a),c.l=!0,c.exports}var d={};return a.m=f,a.c=d,a.d=function(b,c,e){a.o(b,c)||Object.defineProperty(b,c,{enumerable:!0,get:e})},a.r=function(b){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(b,Symbol.toStringTag,{value:"Module"});Object.defineProperty(b,"__esModule",{value:!0})},a.t=function(b,c){if((1&c&&(b=
a(b)),8&c)||4&c&&"object"==typeof b&&b&&b.__esModule)return b;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:b}),2&c&&"string"!=typeof b)for(var g in b)a.d(e,g,function(c){return b[c]}.bind(null,g));return e},a.n=function(b){var c=b&&b.__esModule?function(){return b.default}:function(){return b};return a.d(c,"a",c),c},a.o=function(b,c){return Object.prototype.hasOwnProperty.call(b,c)},a.p="",a(a.s=372)}({0:function(f,a,d){function b(b,a){function e(){this.constructor=
b}c(b,a);b.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}d.d(a,"b",function(){return b});d.d(a,"a",function(){return e});var c=function(b,a){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c])})(b,a)},e=function(){return(e=Object.assign||function(b){for(var a,c=1,e=arguments.length;c<e;c++)for(var d in a=arguments[c])Object.prototype.hasOwnProperty.call(a,d)&&(b[d]=a[d]);return b}).apply(this,
arguments)}},1:function(f,a){f.exports=h},372:function(f,a,d){d.r(a);var b=d(0);f=function(a){function c(){return null!==a&&a.apply(this,arguments)||this}return b.b(c,a),c.prototype.render=function(b){var a=this.props,c=a.active,d=a.label,e=a.labelDirection,f=a.key;return b("button",{id:f,key:f+"-container",classes:{"btn-icon__button":!0,"btn-icon__button--tooltip":!!d,"btn-icon__button--tooltip-left":"left"===e,"btn-icon__button--tooltip-right":"right"===e,"btn-icon__button--tooltip-top":"top"===
e,"btn-icon__button--active":c},"aria-label":d,onmousedown:this.preventFocus,onclick:this.props.handleClick,tabindex:this.props.tabindex?""+this.props.tabindex:"0","aria-checked":c,title:a.title},this.props.children)},c.prototype.preventFocus=function(a){a.preventDefault()},c}(d(1).Component);a.default=f}})});