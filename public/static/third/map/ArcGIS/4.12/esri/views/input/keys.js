// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/events","../../core/has"],function(a,b,d,e){Object.defineProperty(b,"__esModule",{value:!0});b.primaryKey=e("mac")?"Meta":"Ctrl";var c={8:"Backspace",9:"Tab",13:"Enter",27:"Escape",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete"};for(a=48;58>a;a++)c[a]=String.fromCharCode(a);for(a=1;25>a;a++)c[111+a]="F"+a;for(a=65;91>a;a++)c[a]=[String.fromCharCode(a+32),String.fromCharCode(a)];
b.eventKey=function(a){if(void 0!==a.key)return d.eventKey(a);var b=c[a.keyCode];return Array.isArray(b)?a.shiftKey?b[1]:b[0]:b};b.isSystemModifier=function(a){switch(a){case "Ctrl":case "Alt":case "Shift":case "Meta":case "Primary":return!0}}});