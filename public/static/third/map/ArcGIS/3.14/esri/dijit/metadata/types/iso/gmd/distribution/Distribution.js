// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmd/distribution/templates/Distribution.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n    data-dojo-props\x3d"target:\'gmd:distributionInfo\',minOccurs:0,\r\n      label:\'${i18nIso.MD_Metadata.distributionInfo}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\r\n      data-dojo-props\x3d"target:\'gmd:MD_Distribution\',minOccurs:0"\x3e\r\n      \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/distribution/DistributionFormat"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/distribution/TransferOptions"\x3e\x3c/div\x3e\r\n      \r\n    \x3c/div\x3e\r\n  \x3c/div\x3e  \r\n  \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmd/distribution/Distribution","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/iso/AbstractObject ../../../../form/iso/ObjectReference ./DistributionFormat ./TransferOptions dojo/text!./templates/Distribution.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmd.distribution.Distribution",a,f);return a});