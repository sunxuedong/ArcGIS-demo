// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../support/FeatureSet ../support/IdSet ../support/shared ../../../core/promiseUtils".split(" "),function(n,p,l,m,e,f,c){return function(g){function a(d){var b=g.call(this,d)||this;b.declaredClass="esri.layers.featureset.sources.Empty";b._maxProcessing=1E3;b._wset=new e([],[],!1,null);b._parent=d.parentfeatureset;b._databaseType=f.FeatureServiceDatabaseType.Standardised;return b}l(a,g);a.prototype._getSet=function(d){return c.resolve(this._wset)};
a.prototype.optimisePagingFeatureQueries=function(d){};a.prototype._isInFeatureSet=function(d){return f.IdState.NotInFeatureSet};a.prototype._getFeature=function(d,b){return c.reject(Error("No Feature Found in EmptySet"))};a.prototype.queryAttachments=function(d,b,a,h){return c.resolve([])};a.prototype._getFeatures=function(a,b,k,h){return c.resolve("success")};a.prototype._featureFromCache=function(a){return null};a.prototype._fetchAndRefineFeatures=function(a,b,k){return c.reject(Error("Fetch and Refine should not be called in this featureset"))};
a.prototype._getFilteredSet=function(a,b,k,h,f){return c.resolve(new e([],[],!1,null))};a.prototype._stat=function(a,b,c,h,f,e,g){return this._manualStat(a,b,e,g)};a.prototype._canDoAggregates=function(a,b,e,f,g){return c.resolve(!1)};return a}(m)});