// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
define("esri/styles/basic",["dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../Color"],function(m,n,r,s,f){function p(a,b){var c;if(a)switch(c={},c.color=new f(a.color),c.opacity=a.opacity||1,b){case "point":c.outline={color:new f(a.outline.color),width:a.outline.width};c.size=a.size;break;case "line":c.width=a.width;break;case "polygon":c.outline={color:new f(a.outline.color),width:a.outline.width}}return c}function t(a){"esriGeometryPoint"===a||"esriGeometryMultipoint"===a?a="point":
"esriGeometryPolyline"===a?a="line":"esriGeometryPolygon"===a&&(a="polygon");return a}var g={"default":{name:"default",label:"Default",description:"Default theme for basic visualization of features.",basemapGroups:{light:"streets gray topo terrain national-geographic oceans osm".split(" "),dark:["satellite","hybrid","dark-gray"]},pointSchemes:{light:{primary:{color:[77,77,77,1],outline:{color:[255,255,255,1],width:1},size:8},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,1],width:1},
size:8},{color:[255,255,255,1],outline:{color:[51,51,51,1],width:1},size:8}]},dark:{primary:{color:[255,255,255,1],outline:{color:[26,26,26,1],width:1},size:8},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,1],width:1},size:8},{color:[26,26,26,1],outline:{color:[178,178,178,1],width:1},size:8}]}},lineSchemes:{light:{primary:{color:[77,77,77,1],width:2},secondary:[{color:[226,119,40,1],width:2},{color:[255,255,255,1],width:2}]},dark:{primary:{color:[255,255,255,1],width:2},secondary:[{color:[226,
119,40,1],width:2},{color:[26,26,26,1],width:2}]}},polygonSchemes:{light:{primary:{color:[227,139,79,1],outline:{color:[255,255,255,1],width:1},opacity:0.8},secondary:[{color:[128,128,128,1],outline:{color:[255,255,255,1],width:1},opacity:0.8},{color:[255,255,255,1],outline:{color:[128,128,128,1],width:1},opacity:0.8}]},dark:{primary:{color:[227,139,79,1],outline:{color:[51,51,51,1],width:1},opacity:0.8},secondary:[{color:[178,178,178,1],outline:{color:[51,51,51,1],width:1},opacity:0.8},{color:[26,
26,26,1],outline:{color:[128,128,128,1],width:1},opacity:0.8}]}}}},l={};(function(){var a,b,c,d,e,f,h,k;for(a in g)for(d in b=g[a],c=b.basemapGroups,e=l[a]={basemaps:[].concat(c.light).concat(c.dark),point:{},line:{},polygon:{}},c){f=c[d];for(h=0;h<f.length;h++)k=f[h],b.pointSchemes&&(e.point[k]=b.pointSchemes[d]),b.lineSchemes&&(e.line[k]=b.lineSchemes[d]),b.polygonSchemes&&(e.polygon[k]=b.polygonSchemes[d])}})();var q={getAvailableThemes:function(a){var b=[],c,d,e;for(c in g)d=g[c],e=l[c],a&&-1===
m.indexOf(e.basemaps,a)||b.push({name:d.name,label:d.label,description:d.description,basemaps:e.basemaps.slice(0)});return b},getSchemes:function(a){var b=a.theme,c=a.basemap,d=t(a.geometryType);a=l[b];var e;(a=(a=a&&a[d])&&a[c])&&(e={primaryScheme:p(a.primary,d),secondarySchemes:m.map(a.secondary,function(a){return p(a,d)})});return e},cloneScheme:function(a){var b;a&&(b=n.mixin({},a),b.color&&(b.color=new f(b.color)),b.outline&&(b.outline={color:b.outline.color&&new f(b.outline.color),width:b.outline.width}));
return b}};r("extend-esri")&&n.setObject("styles.basic",q,s);return q});