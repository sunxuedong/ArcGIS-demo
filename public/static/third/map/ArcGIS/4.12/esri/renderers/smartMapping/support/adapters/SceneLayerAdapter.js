// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../Graphic ../../../../core/Error ../../../../core/promiseUtils ../../../../core/watchUtils ../../../../core/accessorSupport/decorators ../../../../layers/support/fieldUtils ../../statistics/support/utils ../utils ./FeatureLayerAdapter ./LayerAdapter ./support/utils ../../../../tasks/support/FeatureSet".split(" "),
function(H,I,r,A,u,B,C,v,g,e,D,p,q,E,w,F,G,k,x){return function(y){function d(a){return y.call(this,a)||this}A(d,y);d.prototype._hasCachedStatistics=function(a){return this.layer.hasCachedStatistics(a)};d.prototype._fetchFeaturesFromMemory=function(a,b){return a?a.whenLayerView(this.layer).then(function(a){var c=D.whenFalseOnce(a,"updating").then(function(){return a.queryFeatures(b)}).then(function(a){return"esri.tasks.support.FeatureSet"===a.declaredClass?a.features:a});return e.timeout(c,1E4,null)}):
e.reject(new g("scene-layer-adapter:insufficient-data","view is required to fetch the features from layerView"))};d.prototype._generateFeatureSetForCachedHistogram=function(a,b,c,f){void 0===b&&(b=a.minimum);void 0===c&&(c=a.maximum);for(var l=[],h=0;h<f;h++)l[h]=0;for(var n=a.counts.length,d=a.minimum,e=a.maximum,h=0;h<n;h++){var m=(h+.5)/n,m=((1-m)*d+m*e-b)/(c-b)*f;0<=m&&m<=f&&(l[m===f?f-1:Math.floor(m)]+=a.counts[h])}var g=[];l.forEach(function(a,b){var c=new v({attributes:{}});c.attributes.EXPR_1=
b+1;c.attributes.countOFExpr=a;g.push(c)});a=new x;a.features=g;return a};d.prototype._getCachedStatistics=function(a,b){var c=this.layer;return a.valueExpression||a.sqlExpression||a.sqlWhere||a.minValue||a.maxValue?e.reject(new g("scene-layer-adapter:not-supported","This Layer does not support calculating statistics when 'valueExpression', 'sqlExpression', 'sqlWhere', 'minValue' or 'maxValue' is specified")):c.queryCachedStatistics(b&&b.name).then(function(a){var b=a.stats;a=b.min;var c=b.max,f=
b.avg,d=b.stddev,e=b.sum,g=b.variance,b=b.count;if(0!==a||0!==c)f=0===f?null:f,e=0===e?null:e,d=0===d?null:d,g=0===g?null:g,b=0===b?null:b;null==b&&null!=e&&null!=f&&(b=Math.round(e/f));return{avg:f,count:b,max:c,min:a,stddev:d,sum:e,variance:g}})};d.prototype._getSummaryStatisticsFromMemory=function(a,b){return(a.features?e.resolve(a.features):this._fetchFeaturesFromMemory(a.view)).then(function(c){if(!c||!c.length)return e.reject(new g("scene-layer-adapter:insufficient-data","No features are available to calculate statistics"));
var f=q.isDateField(b),l=r({},a);if("percent-of-total"===l.normalizationType){var d=k.calculateStatsFromMemory({field:l.field},c).sum;if(null==d)return e.reject(new g("scene-layer-adapter:invalid","invalid normalizationTotal"));l.normalizationTotal=d}c=k.calculateStatsFromMemory(l,c,f);return k.processSummaryStatisticsResult(c)})};d.prototype._getCachedStatisticsForUniqueValues=function(a,b){var c=this,f=this.layer,l=b&&b.name,d=b&&this.getFieldDomain(a.field);return a.valueExpression||a.sqlExpression||
a.sqlWhere?e.reject(new g("scene-layer-adapter:not-supported","This Layer does not support calculating statistics when 'valueExpression', 'sqlExpression' or 'sqlWhere' is specified")):f.queryCachedStatistics(l).then(function(d){var e=d.stats;d=d.labels&&d.labels.labels;var g={},h=[];if(e.mostFrequentValues){var n="countOF"+l;e.mostFrequentValues.forEach(function(a){var c=new v({attributes:{}});c.attributes[l]=b&&b.name!==f.objectIdField&&(q.isNumericField(b)||q.isDateField(b))?Number(a.value):a.value;
c.attributes[n]=a.count;h.push(c)});d&&d.forEach(function(a){g[a.value]=a.label})}e=new x;e.features=h;return k.getUniqueValuesFromFeatureSet(e,c,a.field,g)}).then(function(b){return k.createUVResult(b,"service-cached-query",d,a.returnAllCodedValues)})};d.prototype._getUniqueValuesFromMemory=function(a,b){var c=b&&this.getFieldDomain(a.field);return(a.features?e.resolve(a.features):this._fetchFeaturesFromMemory(a.view)).then(function(b){return k.calculateUniqueValuesFromMemory(a,b,c)})};d.prototype._getCachedStatisticsForHistogram=
function(a,b){var c=this,f=this.layer;return a.valueExpression||a.sqlExpression||a.sqlWhere||a.normalizationType?e.reject(new g("scene-layer-adapter:not-supported","This Layer does not support calculating statistics when 'valueExpression' or 'sqlExpression' or 'sqlWhere' or 'normalizationType' is specified")):f.queryCachedStatistics(b&&b.name).then(function(b){b=b.stats;var f=a.minValue,d=a.maxValue,f=null!=f?f:b.min,d=null!=d?d:b.max,e=a.numBins||10;b=c._generateFeatureSetForCachedHistogram(b.histogram,
f,d,e);return k.getHistogramFromFeatureSet(b,f,d,e)})};d.prototype._getClassBreaksFromMemory=function(a){return(a.features?e.resolve(a.features):this._fetchFeaturesFromMemory(a.view)).then(function(b){if(!b||!b.length)return e.reject(new g("scene-layer-adapter:insufficient-data","No features are available to calculate statistics"));var c=r({},a);if("percent-of-total"===c.normalizationType){var f=k.calculateStatsFromMemory({field:c.field},b).sum;if(null==f)return e.reject(new g("scene-layer-adapter:invalid",
"invalid normalizationTotal"));c.normalizationTotal=f}return k.calculateClassBreaksFromMemory(c,b)})};d.prototype._getHistogramFromMemory=function(a){var b=this;return(a.features?e.resolve(a.features):this._fetchFeaturesFromMemory(a.view)).then(function(c){if(!c||!c.length)return e.reject(new g("scene-layer-adapter:insufficient-data","No features are available to calculate histogram"));var f=a.field,d=a.normalizationType,h=a.valueExpression,n=a.classificationMethod,z=a.minValue,p=a.maxValue,m=a.view,
q=null!=z&&null!=p,t=null;n&&"equal-interval"!==n||d?(f=r({},a),f.features=c,t=b._getBinParamsFromMemory(f)):t=q?e.resolve({min:z,max:p}):b.summaryStatistics({field:f,valueExpression:h,features:c,view:m}).then(function(a){return a.count?{min:a.min,max:a.max}:e.reject(new g("feature-layer-adapter:insufficient-data","No features are available to calculate histogram"))});return t.then(function(b){return k.calculateHistogramFromMemory(a,b,c)})})};d.prototype._getBinParamsFromMemory=function(a){var b=
a.field,c=a.normalizationType,d=a.normalizationField;return this._getClassBreaksFromMemory({field:b,valueExpression:a.valueExpression,normalizationType:c,normalizationField:d,classificationMethod:a.classificationMethod,standardDeviationInterval:a.standardDeviationInterval,minValue:a.minValue,maxValue:a.maxValue,numClasses:a.numBins,features:a.features,view:a.view}).then(function(a){var f=a.normalizationTotal;a=a.classBreakInfos;var e=E.getSQLFilterForNormalization({field:b,normalizationType:c,normalizationField:d});
return k.generateBinParams({field:b,normalizationType:c,normalizationField:d,normalizationTotal:f,classBreaks:a,where:e})})};d.prototype.getField=function(a){void 0===a&&(a="");return this.layer.getField(a)};d.prototype.getFieldUsageInfo=function(a){a=this.getField(a);if(!a)return null;a=this.layer.getFieldUsageInfo(a.name);return{supportsLabelingInfo:a.supportsLabelingInfo,supportsPopupTemplate:a.supportsPopupTemplate,supportsRenderer:a.supportsRenderer,supportsLayerQuery:a.supportsLayerQuery,supportsStatistics:!0}};
d.prototype.getFieldDomain=function(a,b){return this._featureLayerAdapter?this._featureLayerAdapter.getFieldDomain(a,b):null};d.prototype.summaryStatistics=function(a){var b=this,c=this.getField(a.field);return this._featureLayerAdapter?this._featureLayerAdapter.summaryStatistics(a):this._hasCachedStatistics(c&&c.name)?this._getCachedStatistics(a,c).catch(function(d){return b._getSummaryStatisticsFromMemory(a,c)}):this._getSummaryStatisticsFromMemory(a,c)};d.prototype.uniqueValues=function(a){var b=
this,c=this.getField(a.field);return this._featureLayerAdapter?this._featureLayerAdapter.uniqueValues(a):this._hasCachedStatistics(c&&c.name)?this._getCachedStatisticsForUniqueValues(a,c).catch(function(d){return b._getUniqueValuesFromMemory(a,c)}):this._getUniqueValuesFromMemory(a,c)};d.prototype.histogram=function(a){var b=this,c=this.getField(a.field);return this._featureLayerAdapter?this._featureLayerAdapter.histogram(a):this._hasCachedStatistics(c&&c.name)?this._getCachedStatisticsForHistogram(a,
c).catch(function(c){return b._getHistogramFromMemory(a)}):this._getHistogramFromMemory(a)};d.prototype.classBreaks=function(a){var b=this.getField(a.field);return this._featureLayerAdapter?this._featureLayerAdapter.classBreaks(a):this._hasCachedStatistics(b&&b.name)?e.reject(new g("scene-layer-adapter:not-supported","Cached stats not supported")):this._getClassBreaksFromMemory(a)};d.prototype.queryFeatureCount=function(a){return this._featureLayerAdapter?this._featureLayerAdapter.queryFeatureCount(a):
e.reject(new g("scene-layer-adapter:not-supported","SceneLayer without associated FeatureLayer does not support count query"))};d.prototype.generateRenderer=function(a){return this._featureLayerAdapter?this._featureLayerAdapter.generateRenderer(a):e.reject(new g("scene-layer-adapter:not-supported","SceneLayer without associated FeatureLayer does not support generateRenderer operation"))};d.prototype.heatmapStatistics=function(a){return this._featureLayerAdapter?this._featureLayerAdapter.heatmapStatistics(a):
e.reject(new g("scene-layer-adapter:not-supported","SceneLayer without associated FeatureLayer does not support heatmapStatistics operation"))};d.prototype.getPredominantCategories=function(a,b){return this._featureLayerAdapter?this._featureLayerAdapter.getPredominantCategories(a,b):e.reject(new g("scene-layer-adapter:not-supported","SceneLayer without associated FeatureLayer does not support getPredominantCategories"))};d.prototype.getSampleFeatures=function(a){return C(this,void 0,void 0,function(){var b,
c,d,e,h,k;return B(this,function(f){switch(f.label){case 0:if("mesh"===this.layer.geometryType)throw new g("scene-layer-adapter:not-supported","getSampleFeatures does not support scene layer with mesh geometry type");b=a.view;c=a.sampleSize;d=this.layer.createQuery();d.outFields=null;d.returnGeometry=!0;d.where=null;d.num=c;e=[];f.label=1;case 1:return f.trys.push([1,3,,4]),[4,this._fetchFeaturesFromMemory(b,d)];case 2:return e=f.sent(),e.length&&0<c&&c<=e.length?[2,w.pickRandomItems(e,c)]:[3,4];
case 3:return f.sent(),[3,4];case 4:h=null;if(!this._featureLayerAdapter)return[3,6];k=r({},a);delete k.view;return[4,this._featureLayerAdapter.getSampleFeatures(k)];case 5:h=f.sent(),f.label=6;case 6:return h&&h.length?[2,h]:[2,w.pickRandomItems(e,e.length)]}})})};d.prototype.load=function(a){var b=this,c=this.layer.load(a).then(function(c){var d=c.associatedLayer;b.geometryType=c.geometryType;if(d)return b._featureLayerAdapter=new F({layer:d}),b._featureLayerAdapter.load(a).then(function(){b.objectIdField=
b._featureLayerAdapter.objectIdField;b.supportsSQLExpression=b._featureLayerAdapter.supportsSQLExpression;b.minScale=b._featureLayerAdapter.minScale;b.maxScale=b._featureLayerAdapter.maxScale;b.fullExtent=b._featureLayerAdapter.fullExtent});b.objectIdField=c.objectIdField;b.supportsSQLExpression=!1;b.hasQueryEngine=!1;b.fullExtent=c.fullExtent});this.addResolvingPromise(c);return this.when()};u([p.property({constructOnly:!0})],d.prototype,"layer",void 0);return d=u([p.subclass("esri.renderers.smartMapping.support.adapters.SceneLayerAdapter")],
d)}(p.declared(G))});