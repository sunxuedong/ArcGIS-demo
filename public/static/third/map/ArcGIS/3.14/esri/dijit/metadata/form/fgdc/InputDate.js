// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/form/fgdc/InputDate","dojo/_base/declare dojo/_base/lang dojo/has ../InputDate dojo/i18n!../../nls/i18nBase ../../../../kernel".split(" "),function(e,f,g,h,k,l){e=e([h],{_isFgdcInputDate:!0,hint:k.hints.fgdcDate,postCreate:function(){this.inherited(arguments)},getXmlValue:function(){var c=this.inherited(arguments);"string"===typeof c&&null!==c&&(c=c.replace(/-/g,""));return c},importValue:function(c,d){var a;a=null;var b=[];"string"!==typeof d||null===d?this.inherited(arguments):
-1!==d.indexOf("T")?this.inherited(arguments):-1!==d.indexOf("Z")?this.inherited(arguments):-1!==d.indexOf("-")?this.inherited(arguments):(a=f.trim(d),8===a.length?(b[0]=a.substring(0,4),b[1]=a.substring(4,6),b[2]=a.substring(6,8),a=b[0]+"-"+b[1]+"-"+b[2],this.setInputValue(a)):6===a.length?(b[0]=a.substring(0,4),b[1]=a.substring(4,6),a=b[0]+"-"+b[1],this.setInputValue(a)):this.inherited(arguments))}});g("extend-esri")&&f.setObject("dijit.metadata.form.fgdc.InputDate",e,l);return e});