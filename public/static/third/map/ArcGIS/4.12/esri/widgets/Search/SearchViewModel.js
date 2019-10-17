// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper dojo/i18n!./nls/Search ../../Graphic ../../PopupTemplate ../../core/Accessor ../../core/asyncUtils ../../core/Collection ../../core/compilerUtils ../../core/Error ../../core/Evented ../../core/geolocationUtils ../../core/Handles ../../core/has ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators ../../geometry/Point ../../geometry/SpatialReference ../../portal/Portal ../../styles/basic ../../symbols/PictureMarkerSymbol ../../symbols/SimpleFillSymbol ../../symbols/SimpleLineSymbol ../../symbols/SimpleMarkerSymbol ../../symbols/TextSymbol ../../views/support/layerViewUtils ./LayerSearchSource ./LocatorSearchSource ./SearchSource ./support/geometryUtils ./support/locatorUtils ../support/GoTo".split(" "),
function(K,ea,L,f,x,t,q,C,y,M,D,N,O,k,P,r,Q,R,S,u,g,v,d,z,T,E,F,U,V,W,X,Y,Z,w,G,aa,B,ba,ca){function h(d,b){return d.hasOwnProperty(b)&&null!=d[b]&&""!==d[b]}var m=S.getLogger("esri.widgets.Search.SearchViewModel"),p=N.ofType({key:function(d){return d.layer?"layer":"locator"},base:aa,typeMap:{layer:w,locator:G}}),I=T.WGS84,da=/<(?:.|\s)*?>/g;return function(H){function b(a){a=H.call(this)||this;a._handles=new Q;a._gotoController=null;a._searching=null;a._loadingDefaultSources=null;a.allPlaceholder=
q.allPlaceholder;a.autoNavigate=!0;a.autoSelect=!0;a.defaultSources=new p;a.defaultSymbol=new U({url:K.toUrl(R("trident")?"../../images/search/search-symbol-32.png":"../../images/search/search-symbol-32.svg"),size:24,width:24,height:24});a.includeDefaultSources=!0;a.maxInputLength=128;a.maxResults=6;a.maxSuggestions=6;a.minSuggestCharacters=1;a.popupEnabled=!0;a.popupTemplate=new y({title:q.searchResult,content:"{Match_addr}"});a.portal=E.getDefault();a.resultGraphicEnabled=!0;a.resultGraphic=null;
a.results=null;a.selectedSuggestion=null;a.searchAllEnabled=!0;a.selectedResult=null;a.sources=new p;a.suggestionDelay=150;a.suggestions=null;a.suggestionsEnabled=!0;a.view=null;return a}L(b,H);b.prototype.initialize=function(){var a=this;this._handles.add([v.init(this,"portal",function(a){a&&!a.loaded&&a.load()}),v.init(this,["view","portal","includeDefaultSources"],function(){return a._loadDefaultSources()}),v.on(this,["defaultSources","sources"],"change",function(){return a.notifyChange("allSources")})])};
b.prototype.destroy=function(){this._abortGoTo();this.clearGraphics();this._loadingDefaultSources=null;this._clearLoadingDefaultSources();this._handles.destroy();this._handles=null};Object.defineProperty(b.prototype,"activeSource",{get:function(){return this.allSources.getItemAt(this.activeSourceIndex)||null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"activeSourceIndex",{get:function(){return 1!==this.allSources.length&&this.searchAllEnabled?-1:0},set:function(a){void 0===
a?this._clearOverride("activeSourceIndex"):this._override("activeSourceIndex",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"allSources",{get:function(){var a=this.sources,c=this.defaultSources,e=this.includeDefaultSources,a="function"===typeof e?e.call(null,{sources:a,defaultSources:c}):e?c.concat(a):a,c=this._get("allSources")||new p;c.removeAll();c.addMany(a.filter(Boolean));return c},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"locationEnabled",{get:function(){return this._get("locationEnabled")||
r.supported()},set:function(a){if(void 0===a)this._clearOverride("locationEnabled");else{var c=r.supported();if(a&&!c){var e=new k("locationEnabled:geolocation-unsupported","Geolocation API is unsupported.",{geolocation:navigator.geolocation});m.error(e)}this._override("locationEnabled",a&&c)}},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"placeholder",{get:function(){var a=this.activeSourceIndex,c=this.allPlaceholder,c=void 0===c?q.allPlaceholder:c;return-1===a?c:(a=this.allSources.getItemAt(a))?
a.placeholder:""},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"searchTerm",{get:function(){return this._get("searchTerm")||""},set:function(a){this._set("searchTerm",a||"");this.clearGraphics();this.selectedSuggestion&&this.selectedSuggestion.text!==a&&this._set("selectedSuggestion",null);""===a&&this._clear()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){return this._searching?"searching":this._loadingDefaultSources?"loading":0===
this.allSources.length?"disabled":"ready"},enumerable:!0,configurable:!0});b.prototype.clear=function(){this.searchTerm=""};b.prototype.clearGraphics=function(){this._removeHighlight();this._closePopup();this.view&&this.view.graphics.remove(this.resultGraphic);this._set("resultGraphic",null)};b.prototype.search=function(a){var c=this;this.emit("search-start");this.clearGraphics();var e=this._createSuggestionForSearch(a);this._searching=a=this._whenViewAndPortalLoaded().then(function(){return c._getResultsFromSources(e).then(function(a){var b=
{activeSourceIndex:c.activeSourceIndex,searchTerm:e.text,numResults:0,numErrors:0,errors:[],results:[]};c._formatResponse(b,a,e);a=c._getFirstResult(b.results);var l=(e.location&&a?a.name:e.text).replace(da,"");c._set("searchTerm",l);(e.key&&"number"===typeof e.sourceIndex||e.location)&&c._set("selectedSuggestion",e);c._set("results",b.results);c.emit("search-complete",b);return c._selectFirstResult(a).then(function(){return b})})});this.notifyChange("state");a.catch(function(){}).then(function(){return c._clearSearching()});
return a};b.prototype.searchNearby=function(){var a=this;if(!this.locationEnabled){var c=new k("searchNearby:geolocation-unsupported","Geolocation API is unsupported.",{geolocation:navigator.geolocation});m.error(c);return g.reject(c)}this._searching=c=r.getCurrentPosition().then(function(c){return r.positionToPoint({position:c,view:a.view})}).then(function(c){return a.search(c)});this.notifyChange("state");c.catch(function(){}).then(function(){return a._clearSearching()});return c};b.prototype.select=
function(a){var c=this;this.clearGraphics();if(!a){var e=new k("select:missing-parameter","Cannot select without a searchResult.",{searchResult:a});m.error(e);return g.reject(e)}var b=this.view,J=h(a,"sourceIndex")?a.sourceIndex:this._getSourceIndexOfResult(a),d=this.allSources.getItemAt(J);if(!d)return e=new k("select:missing-source","Cannot select without a source.",{source:d}),m.error(e),g.reject(e);var e=d instanceof w?this._getLayerSourcePopupTemplate(d):d.popupTemplate,f=d.resultSymbol||this._getDefaultSymbol(a),
q=h(d,"resultGraphicEnabled")?d.resultGraphicEnabled:this.resultGraphicEnabled,r=h(d,"autoNavigate")?d.autoNavigate:this.autoNavigate,p=h(d,"popupEnabled")?d.popupEnabled:this.popupEnabled,v=p?e||this.popupTemplate:null,n=a.feature;if(!n)return e=new k("select:missing-feature","Cannot select without a feature.",{feature:n}),m.error(e),g.reject(e);var x=n.attributes,t=n.geometry,y=n.layer,z=n.sourceLayer,A=B.getPointFromGeometry(t),e={layerViewQuery:this._getLayerView(n),elevationQuery:b&&u.isSome(A)?
B.getPointWithElevation(A,b).catch(function(){return A}):g.resolve(A)};return g.eachAlways(e).then(function(e){var l=e.layerViewQuery.value,h=e.elevationQuery.value;f instanceof Y&&(f.text=a.name);e=b&&r?c._getGoToTarget(a,d):null;return(u.isSome(e)?D.safeCast(c._goToSearchResult(e)):g.resolve()).then(function(){var e=l?n:new C({geometry:t,symbol:f,attributes:x,layer:y,sourceLayer:z,popupTemplate:v}),g=p&&c.get("view.popup");(g=g&&e.getEffectivePopupTemplate(g.defaultPopupTemplateEnabled))&&b.popup.open({features:[e],
location:h});l&&Z.hasHighlight(l)&&!g&&c._highlightFeature({graphic:e,layerView:l});!l&&q&&b&&b.graphics.push(e);c._set("selectedResult",a);c._set("resultGraphic",e);c.emit("select-result",{result:a,source:d,sourceIndex:J});return a})})};b.prototype.suggest=function(a,c){var e=this,b=a||this.searchTerm;this.emit("suggest-start",{searchTerm:b});return this._suggestTimer(c).then(function(){return e._suggestImmediate(b).then(function(a){e._set("suggestions",a.results);e.emit("suggest-complete",a);return a})})};
b.prototype._clearLoadingDefaultSources=function(){this._loadingDefaultSources=null;this.notifyChange("state")};b.prototype._clearSearching=function(){this._searching=null;this.notifyChange("state")};b.prototype._convertHelperServices=function(){var a=this.get("portal.helperServices.geocode");return a?a.map(function(a){if(!1!==a.placefinding&&(a=G.fromJSON(a),ba.isArcGISWorldGeocoder(a.get("locator.url"))&&a.set({singleLineFieldName:"SingleLine",outFields:["Addr_type","Match_addr","StAddr","City"],
placeholder:q.placeholder}),a.singleLineFieldName))return a}).filter(Boolean):[]};b.prototype._convertApplicationProperties=function(){var a=this,c=this.get("view.map.applicationProperties.viewing.search"),e=this.get("view.map");if(!e||!c)return[];var b=c.hintText;return c.enabled?c.layers.map(function(c){var d=e.findLayerById(c.id);if(d){c=a._getLayerJSON(c);var l=w.fromJSON(c);l.placeholder=b;a._getLayer(d,c).then(function(a){l.layer=a});return l}}).filter(Boolean):[]};b.prototype._getSubLayer=
function(a,c){return a&&a.allSublayers?(a=a.allSublayers.find(function(a){return a.id===c.subLayer}))?D.safeCast(a.createFeatureLayer()):g.reject():g.reject()};b.prototype._getLayer=function(a,c){var e=this;if("feature"===a.type||"scene"===a.type)return g.resolve(a);if("map-image"===a.type)return a.load().then(function(){return e._getSubLayer(a,c).catch(function(){var c=new k("search:create-featurelayer","Could not create a FeatureLayer from the MapImageLayer",{layer:a});m.error(c);return null})})};
b.prototype._getLayerJSON=function(a){return"function"===typeof a.toJSON?a.toJSON():a};b.prototype._updateDefaultSources=function(){var a=this.defaultSources,c=this.includeDefaultSources;a.removeAll();c&&a.addMany(this._convertApplicationProperties().concat(this._convertHelperServices()));this.notifyChange("allSources")};b.prototype._abortGoTo=function(){this._gotoController&&this._gotoController.abort();this._gotoController=null};b.prototype._clear=function(){this._abortGoTo();this._set("results",
null);this._set("suggestions",null);this._set("selectedResult",null);this._set("selectedSuggestion",null);this.emit("search-clear")};b.prototype._closePopup=function(){var a=this.get("view.popup"),c=this.resultGraphic;if(a&&c){var e=a.selectedFeature;e&&e===c&&a.close()}};b.prototype._suggestTimer=function(a){return g.after(null!=a?a:this.suggestionDelay)};b.prototype._createLocationForSearch=function(a){return a instanceof C?B.getPointFromGeometry(a.geometry):a instanceof z?a:Array.isArray(a)&&2===
a.length?new z({longitude:a[0],latitude:a[1]}):null};b.prototype._createSuggestionForSearch=function(a){if(a&&h(a,"key")&&h(a,"text")&&h(a,"sourceIndex"))return a;var c=this._createLocationForSearch(a),e="string"===typeof a?a:this.searchTerm,b=this.selectedSuggestion,d=this.selectedResult,f=(a=!a&&b&&d)&&b.location;return a&&b.key===d.key&&b.sourceIndex===d.sourceIndex||f?b:{location:u.unwrap(c),text:c?"":e,sourceIndex:null,key:null}};b.prototype._getFirstResult=function(a){var c=null;a&&a.some(function(a){a=
a.results[0];var b=!!a;b&&(c=a);return b});return c};b.prototype._selectFirstResult=function(a){return this.autoSelect&&a?this.select(a):g.resolve()};b.prototype._suggestImmediate=function(a){var c=this;return this._whenViewAndPortalLoaded().then(function(){return c._getSuggestionsFromSources(a)}).then(function(b){var e={activeSourceIndex:c.activeSourceIndex,searchTerm:a,numResults:0,numErrors:0,errors:[],results:[]};c._formatResponse(e,b);return e})};b.prototype._formatSourceResponse=function(a,
c,b){var e=c&&c.value||[];c=c&&c.error;var d=this.allSources.getItemAt(b);c?(a.errors.push({sourceIndex:b,source:d,error:c}),a.numErrors++):(a.results.push({sourceIndex:b,source:d,results:e}),a.numResults+=e.length)};b.prototype._formatResponse=function(a,c,b){var e=this;if(c)if(-1===a.activeSourceIndex){var d=b&&h(b,"sourceIndex")&&-1!==b.sourceIndex?b.sourceIndex:void 0;c.forEach(function(c,b){e._formatSourceResponse(a,c,void 0!==d?d:b)})}else this._formatSourceResponse(a,c[0],a.activeSourceIndex)};
b.prototype._getResultsFromSources=function(a){var c=this,b=this.allSources,d=!a.location&&h(a,"sourceIndex")?a.sourceIndex:this.activeSourceIndex,f=[];if(!b.length)return b=new k("search:no-sources-defined","At least one source is required.",{allSources:b}),m.error(b),g.reject(b);-1===d?b.forEach(function(b,e){f.push(c._getResultsFromSource(a,e))}):f.push(this._getResultsFromSource(a,d));return g.eachAlways(f)};b.prototype._getSuggestionsFromSources=function(a){var c=this,b=this.allSources,d=this.activeSourceIndex,
f=[];if(!b.length)return b=new k("suggest:no-sources-defined","At least one source is required.",{allSources:b}),m.error(b),g.reject(b);-1===d?b.forEach(function(b,e){f.push(c._getSuggestionsFromSource(a,e))}):f.push(this._getSuggestionsFromSource(a,d));return g.eachAlways(f)};b.prototype._getResultsFromSource=function(a,b){var c=this.allSources.getItemAt(b),d=a.location,d=void 0===d?null:d,f=this.get("view.spatialReference")||I,g=h(c,"maxResults")?c.maxResults:this.maxResults,k=c instanceof w&&h(c,
"exactMatch")?c.exactMatch:!1;return c.getResults({view:this.view,sourceIndex:b,location:d,suggestResult:a,spatialReference:f,exactMatch:k,maxResults:g})};b.prototype._getSuggestionsFromSource=function(a,b){var c=this.allSources.getItemAt(b),d=h(c,"suggestionsEnabled")?c.suggestionsEnabled:this.suggestionsEnabled,f=a.trim().length,k=h(c,"minSuggestCharacters")?c.minSuggestCharacters:this.minSuggestCharacters;return d&&f>=k?(d=this.get("view.spatialReference")||I,f=h(c,"maxSuggestions")?c.maxSuggestions:
this.maxSuggestions,c.getSuggestions({view:this.view,sourceIndex:b,suggestTerm:a,spatialReference:d,maxSuggestions:f})):g.resolve()};b.prototype.createDefaultSymbol=function(a,c){if("point"===c)return new X({color:a.color,size:a.size,outline:{color:a.outline.color,width:a.outline.width}});if("polyline"===c)return new W({color:a.color,width:a.width});if("polygon"===c)return new V({color:a.color,outline:{color:a.outline.color,width:a.outline.width}})};b.prototype._getLayerSourcePopupTemplate=function(a){var c=
a.layer;if(c)return h(a,"popupTemplate")?a.popupTemplate:c.popupTemplate};b.prototype._getSourceIndexOfResult=function(a){var c=null;this.results.some(function(b){return b.results.some(function(d){if(d===a)return c=b.sourceIndex,!0})});return c};b.prototype._getGoToTarget=function(a,b){var c=a.extent;a=a.feature;return b instanceof w?a||c:c||a};b.prototype._goToSearchResult=function(a){return t(this,void 0,void 0,function(){var b,d,f;return x(this,function(c){switch(c.label){case 0:b=!!a,this._abortGoTo(),
this._gotoController=d=g.createAbortController(),f={target:{target:a},options:{animate:b,signal:d.signal}},c.label=1;case 1:return c.trys.push([1,3,,4]),[4,this.callGoTo(f)];case 2:return c.sent(),[3,4];case 3:return c.sent(),[3,4];case 4:return this._gotoController=null,[2]}})})};b.prototype._whenViewAndPortalLoaded=function(){var a=this.portal,b=this.view,b=b?b.when():g.resolve(),a=a?a.when():g.resolve();return g.eachAlways([b,a]).then(function(){})};b.prototype._loadDefaultSources=function(){return t(this,
void 0,void 0,function(){var a,b,d=this;return x(this,function(c){switch(c.label){case 0:return this._loadingDefaultSources=b=(a=this.includeDefaultSources)?this._whenViewAndPortalLoaded():g.resolve(),this.notifyChange("state"),[4,b.catch(function(){}).then(function(){d._loadingDefaultSources===b&&(d._clearLoadingDefaultSources(),d._updateDefaultSources())})];case 1:return c.sent(),[2]}})})};b.prototype._getDefaultSymbol=function(a){var b=this.get("view.map.basemap.id");a=u.get(a,"feature","geometry",
"type");return u.isSome(a)&&(b=(b=F.getSchemes({theme:"default",basemap:b,geometryType:a})||F.getSchemes({theme:"default",basemap:"topo",geometryType:a}))&&b.primaryScheme)?(b.color&&h(b,"opacity")&&(b.color.a=b.opacity),this.createDefaultSymbol(b,a)):this.defaultSymbol};b.prototype._removeHighlight=function(){this._handles.remove("highlight")};b.prototype._getLayerView=function(a){var b=this.view;if(!a||!b)return g.resolve(null);var d=a.layer;return b.when().then(function(){return O.typeCast(b)().whenLayerView(d)})};
b.prototype._highlightFeature=function(a){var b=a.graphic,d=b.attributes,f=b.layer.objectIdField;a=a.layerView.highlight(d&&d[f]||b);this._handles.add(a,"highlight")};b.ALL_INDEX=-1;f([d.property({readOnly:!0,dependsOn:["activeSourceIndex","allSources.length"],value:null})],b.prototype,"activeSource",null);f([d.property({dependsOn:["allSources.length","searchAllEnabled"]})],b.prototype,"activeSourceIndex",null);f([d.property()],b.prototype,"allPlaceholder",void 0);f([d.property({dependsOn:["defaultSources.length",
"sources.length","includeDefaultSources"],readOnly:!0})],b.prototype,"allSources",null);f([d.property()],b.prototype,"autoNavigate",void 0);f([d.property()],b.prototype,"autoSelect",void 0);f([d.property({readOnly:!0})],b.prototype,"defaultSources",void 0);f([d.property()],b.prototype,"defaultSymbol",void 0);f([d.property()],b.prototype,"includeDefaultSources",void 0);f([d.property()],b.prototype,"locationEnabled",null);f([d.property()],b.prototype,"maxInputLength",void 0);f([d.property()],b.prototype,
"maxResults",void 0);f([d.property()],b.prototype,"maxSuggestions",void 0);f([d.property()],b.prototype,"minSuggestCharacters",void 0);f([d.property({readOnly:!0,dependsOn:["activeSourceIndex","activeSource.placeholder","allPlaceholder","allSources"]})],b.prototype,"placeholder",null);f([d.property()],b.prototype,"popupEnabled",void 0);f([d.property({type:y})],b.prototype,"popupTemplate",void 0);f([d.property({type:E})],b.prototype,"portal",void 0);f([d.property()],b.prototype,"resultGraphicEnabled",
void 0);f([d.property({readOnly:!0})],b.prototype,"resultGraphic",void 0);f([d.property({readOnly:!0})],b.prototype,"results",void 0);f([d.property({readOnly:!0})],b.prototype,"selectedSuggestion",void 0);f([d.property()],b.prototype,"searchAllEnabled",void 0);f([d.property({readOnly:!0})],b.prototype,"selectedResult",void 0);f([d.property()],b.prototype,"searchTerm",null);f([d.property({type:p})],b.prototype,"sources",void 0);f([d.property({readOnly:!0,dependsOn:["allSources.length"]})],b.prototype,
"state",null);f([d.property()],b.prototype,"suggestionDelay",void 0);f([d.property({readOnly:!0})],b.prototype,"suggestions",void 0);f([d.property()],b.prototype,"suggestionsEnabled",void 0);f([d.property()],b.prototype,"view",void 0);f([d.property()],b.prototype,"clear",null);return b=f([d.subclass("esri.widgets.Search.SearchViewModel")],b)}(d.declared(M,P,ca))});