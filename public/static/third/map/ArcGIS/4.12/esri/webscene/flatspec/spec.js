// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/tsSupport/extendsHelper ../../core/tsSupport/assignHelper ../../core/Error ../../core/promiseUtils ../schema ./utils".split(" "),function(D,u,h,m,E,x,y,q,t,z){function F(b,a){if(a.properties){if("layerType"in a.properties)return a.properties.layerType.enum[0];if("type"in a.properties)return a.properties.type.enum[0]}switch(b){case "multipoint_geometry_schema.json":return"multipoint";case "point_geometry_schema.json":return"point";
case "polyline_geometry_schema.json":return"polyline";case "polygon_geometry_schema.json":return"polygon";case "extent_schema.json":return"extent"}}function G(b){var a={count:b.length,refsCount:0,typesCount:0,distinctTypes:[],type:null},c=new Set,d;for(d in b){var e=b[d];e.$ref?a.refsCount++:e.type&&(a.typesCount++,c.add(e.type))}c.forEach(function(b){return a.distinctTypes.push(b)});a.distinctTypes.sort();a.refsCount===a.count?a.type="refs":2===a.count&&0<a.refsCount&&1===a.distinctTypes.length&&
"null"===a.distinctTypes[0]?a.type="refsAndNull":a.typesCount===a.count?(a.type="types",a.distinctTypes=a.distinctTypes):a.type="mix";return a}function v(b,a,c,d,e){return m(this,void 0,void 0,function(){var f,g,l,k,p;return h(this,function(n){switch(n.label){case 0:f=F(b,c);d=d?d.replace("\x3c?TYPE?\x3e",f?"\x3c"+f+"\x3e":""):null;if("array"!==c.type&&"properties"in c)return[3,2];(g=e.currentClass?null:{type:b,name:b,id:b+"--"+a,typeValue:a,properties:[]})&&e.push(null,g);return[4,r(c,d,e)];case 1:return n.sent(),
[2,g];case 2:l=b+"--"+a;if((k="drawingInfo_schema.json"!==b&&!e.hasFilteredProperties&&e.seen.get(l))&&d)return e.addProperty({name:d,type:k}),[2,k];p={type:b,name:b,id:l,typeValue:a,properties:[]};d&&e.addProperty({name:d,type:p});e.push(d,p);return[4,r(c,"",e)];case 3:return n.sent(),[2,e.pop()]}})})}function A(b,a,c){return m(this,void 0,void 0,function(){var d,e,f,g,l,k,p;return h(this,function(n){switch(n.label){case 0:return[4,c.requestSchema(b.$ref)];case 1:d=n.sent();var h=d.schema;e="layerDefinition"===
h.title?null:(h=h.properties&&h.properties.type)&&h.enum?h.enum:null;if(!e)return[3,6];f=0;g=e;n.label=2;case 2:if(!(f<g.length))return[3,5];l=g[f];k=x({},d.schema);k.properties=x({},k.properties,{type:{type:"string",enum:[l]}});p=-1===a.indexOf("\x3c?TYPE?\x3e")?a+"\x3c?TYPE?\x3e":a;return[4,v(d.schemaId,l,k,p,c)];case 3:n.sent(),n.label=4;case 4:return f++,[3,2];case 5:return[2];case 6:return[4,v(d.schemaId,null,d.schema,a,c)];case 7:return n.sent(),[2]}})})}function H(b,a){if(!w(b))return!1;b=
b.stack.map(function(a){return a.klass.type}).join("/");return/.*pointCloudLayer_schema\.json\/layerDefinition_schema\.json\/drawingInfo_schema\.json$/.test(b)&&"renderer"===a}function I(b,a){if(!w(b))return!1;b=b.stack.map(function(a){return a.klass.type}).join("/");return/.*rasterDataLayer_schema\/.json\/layerDefinition_schema\.json\/drawingInfo_schema\.json$/.test(b)&&"renderer"===a}function w(b){return b.currentClass&&"drawingInfo_schema.json"===b.currentClass.name}function J(b,a,c){var d=w(c),
e=H(c,a),f=I(c,a);return d?b.filter(function(a){if(/uniqueValueFromStyleRenderer_schema\.json$/.test(a.$ref))return!1;var b=/pointCloud.*Renderer/.test(a.$ref);a=/raster.*Renderer/.test(a.$ref);return e===b&&a===f}):b}function K(b,a,c){return m(this,void 0,void 0,function(){return h(this,function(d){switch(d.label){case 0:return[4,r(b.items,a+"[]",c)];case 1:return d.sent(),[2]}})})}function L(b,a,c){return m(this,void 0,void 0,function(){var d=this;return h(this,function(e){switch(e.label){case 0:return[4,
c.withFilteredProperties(null,function(e){return m(d,void 0,void 0,function(){var d,f,k,p,n;return h(this,function(g){switch(g.label){case 0:d=[];for(f in b.properties)d.push(f);k=0;g.label=1;case 1:if(!(k<d.length))return[3,4];p=d[k];if(e&&!e.has(p))return[3,3];n=a?a+"."+p:p;return[4,r(b.properties[p],n,c)];case 2:g.sent(),g.label=3;case 3:return k++,[3,1];case 4:return[2]}})})})];case 1:return e.sent(),[2]}})})}function B(b,a,c){void 0===a&&(a="");void 0===c&&(c=new Set);for(var d=0;d<b.length;d++){var e=
b[d];if("properties"in e)for(var f in e.properties){var g=e.properties[f],l=a?a+"."+f:f,k=Object.keys(g);if(0===k.length||1===k.length&&"$ref"===k[0])c.add(l);else if(1===k.length&&"allOf"===k[0])c.add(l),B(g.allOf,l,c);else throw Error("unexpected allOf filter construct: "+JSON.stringify(g));}}return c}function M(b,a,c){return m(this,void 0,void 0,function(){var d,e,f,g,l;return h(this,function(k){switch(k.label){case 0:d=null;e=0;for(f=b.allOf;e<f.length;e++)if(g=f[e],"$ref"in g){if(d)throw Error("Cannot process more than 1 ref in an allOf construct");
d=g}else if(!("properties"in g))throw Error("allOf construct only allows simple top-level property filters");l=B(b.allOf);return[4,c.withFilteredProperties(l,function(){return A(d,a,c)})];case 1:return k.sent(),[2]}})})}function N(b,a,c){return m(this,void 0,void 0,function(){var d,e,f,g,l,k,p,n,m,q;return h(this,function(h){switch(h.label){case 0:d=G(b.oneOf);if("refs"!==d.type&&"refsAndNull"!==d.type)return[3,6];e=J(b.oneOf,a,c);f=0;g=e;h.label=1;case 1:if(!(f<g.length))return[3,5];l=g[f];return"null"!==
l.type?[3,2]:[3,4];case 2:return[4,r(l,(a||"")+"\x3c?TYPE?\x3e",c)];case 3:h.sent(),h.label=4;case 4:return f++,[3,1];case 5:return[2];case 6:if("types"===d.type)return c.addProperty({name:a,type:d.distinctTypes.join("|")}),[2];k=[];for(p in b.oneOf)k.push(p);n=0;h.label=7;case 7:if(!(n<k.length))return[3,10];m=k[n];q=".oneOf["+m+"]";return[4,r(b.oneOf[m],""+a+q,c)];case 8:h.sent(),h.label=9;case 9:return n++,[3,7];case 10:return[2]}})})}function O(b,a,c){return m(this,void 0,void 0,function(){return h(this,
function(d){switch(d.label){case 0:return[4,A(b,a,c)];case 1:return d.sent(),[2]}})})}function P(b,a,c){return m(this,void 0,void 0,function(){var d,e;return h(this,function(f){d="unknown";b.type&&(d=Array.isArray(b.type)?b.type.join("|"):b.type.replace(/ /g,"").split(",").join("|"));e={name:a,type:d,default:b.default};b.enum&&(e.enum=z.sorted(b.enum).map(function(a){return"string"===typeof a?'"'+a+'"':""+a}).join("|"));c.addProperty(e);return[2]})})}function r(b,a,c){return m(this,void 0,void 0,
function(){return h(this,function(d){return"array"===b.type?[2,K(b,a,c)]:"properties"in b?[2,L(b,a,c)]:"allOf"in b?[2,M(b,a,c)]:"oneOf"in b?[2,N(b,a,c)]:"$ref"in b?[2,O(b,a,c)]:[2,P(b,a,c)]})})}function C(b){return 0===b.indexOf("#/definitions/")?b.slice(14):b}Object.defineProperty(u,"__esModule",{value:!0});u.scan=function(b,a){return m(this,void 0,void 0,function(){var c;return h(this,function(d){switch(d.label){case 0:return[4,Q.create(b,a)];case 1:return c=d.sent(),[2,v((b||"webScene")+"_schema.json",
null,c.schemaRoot,null,c)]}})})};var Q=function(b){function a(a,d,e){var c=b.call(this)||this;c.definitions=a;c.schemaRoot=d;c.requestSchema=e;c.filteredProperties=null;c.requestSchema.bind(c);return c}E(a,b);Object.defineProperty(a.prototype,"hasFilteredProperties",{get:function(){return this.filteredProperties&&0<this.filteredProperties.size},enumerable:!0,configurable:!0});a.prototype.withFilteredProperties=function(a,b){return m(this,void 0,void 0,function(){var c,d,g,l=this;return h(this,function(e){switch(e.label){case 0:return c=
this.filteredProperties,this.filteredProperties=null,d=function(a){l.filteredProperties||(l.filteredProperties=new Set);l.filteredProperties.add(a)},c&&c.forEach(function(a){a=a.split(".");1<a.length&&(d(a[0]),d(a.slice(1).join(".")))}),a&&a.forEach(d),[4,b(c)];case 1:return g=e.sent(),this.filteredProperties=c,[2,g]}})})};a.create=function(b,d){return m(this,void 0,void 0,function(){return h(this,function(c){return d&&d.useRemoteSchema?[2,a.createRemote(b,d.baseUrl)]:[2,a.createLocal(b)]})})};a.createLocal=
function(b){return new a(t.json.definitions,b?t.json.definitions[b+"_schema.json"]:t.json,a.getLocalSchemaRequest())};a.createRemote=function(b,d){return m(this,void 0,void 0,function(){var c,f,g;return h(this,function(e){switch(e.label){case 0:return[4,a.getRemoteSchemaRequest(d)];case 1:return c=e.sent(),f=new a({},null,c),[4,f.requestSchema((b||"webscene")+"_schema.json")];case 2:return g=e.sent().schema,[2,new a(f.definitions,g,c)]}})})};a.getLocalSchemaRequest=function(){return function(a){a=
C(a);var b=this.definitions[a];return b?q.resolve({schemaId:a,schema:b}):q.reject(new y("flatspec-spec:invalid-local-schema","Schema reference is not a local reference"))}};a.getRemoteSchemaRequest=function(b){return m(this,void 0,void 0,function(){var d,c;return h(this,function(e){switch(e.label){case 0:if(!b)return[2,q.reject(new y("flatspec-spec:missing-base-url","The base url of the remote schema directory must be specified when using a remote schema"))];d=a.getLocalSchemaRequest();return[4,q.create(function(a){return D(["../../request"],
a)})];case 1:return c=e.sent(),[2,function(a){var e=this;return d.call(this,a).catch(function(){return c(b+"/"+a,{responseType:"json"}).then(function(b){e.definitions[C(a)]=b.data;return{schemaId:a,schema:b.data}})})}]}})})};return a}(z.ScanContext);u.schemaDefinitions=Object.keys(t.json.definitions).map(function(b){return b.replace(/_schema\.json$/,"")})});