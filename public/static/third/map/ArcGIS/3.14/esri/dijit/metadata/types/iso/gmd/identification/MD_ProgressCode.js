// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmd/identification/templates/MD_ProgressCode.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListElement"\r\n    data-dojo-props\x3d"target:\'gmd:MD_ProgressCode\'"\x3e\r\n\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeSpaceAttribute"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListAttribute"\r\n      data-dojo-props\x3d"value:\'${codeListPrefix}MD_ProgressCode\'"\x3e\x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListValueAttribute"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'\',value:\'\'"\x3e\x3c/div\x3e\r\n            \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nIso.MD_ProgressCode.completed}\',value:\'completed\'"\x3e\x3c/div\x3e    \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nIso.MD_ProgressCode.historicalArchive}\',value:\'historicalArchive\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nIso.MD_ProgressCode.obsolete}\',value:\'obsolete\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nIso.MD_ProgressCode.onGoing}\',value:\'onGoing\'"\x3e\x3c/div\x3e    \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nIso.MD_ProgressCode.planned}\',value:\'planned\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nIso.MD_ProgressCode.required}\',value:\'required\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nIso.MD_ProgressCode.underDevelopment}\',value:\'underDevelopment\'"\x3e\x3c/div\x3e\r\n                                                                                                          \r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmd/identification/MD_ProgressCode","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/InputSelectOne ../../../../form/Options ../../../../form/Option ../../../../form/iso/CodeListAttribute ../../../../form/iso/CodeListValueAttribute ../../../../form/iso/CodeListElement ../../../../form/iso/CodeSpaceAttribute dojo/text!./templates/MD_ProgressCode.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,p,e,
f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmd.identification.MD_ProgressCode",a,f);return a});