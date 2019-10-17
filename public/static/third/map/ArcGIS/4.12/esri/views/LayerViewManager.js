// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../core/Error ../core/HandleOwner ../core/Logger ../core/promiseUtils ../core/scheduling ../core/watchUtils ../core/accessorSupport/decorators".split(" "),function(r,t,u,p,v,w,l,x,y,h,z,A,m){Object.defineProperty(t,"__esModule",{value:!0});var B=y.getLogger("esri.views.LayerViewManager"),k=new Map;k.set("view.map.basemap.baseLayers","view.basemapView.baseLayerViews");
k.set("view.map.ground.layers","view.groundView.layerViews");k.set("view.map.layers","view.layerViews");k.set("view.map.basemap.referenceLayers","view.basemapView.referenceLayerViews");var C=function(){function g(c,a){var b=this;this.layer=c;this.view=a;this._controller=h.createAbortController();this._deferred=h.createDeferred();this.done=this._started=!1;h.onAbort(this._controller.signal,function(){var a=new l("cancelled:layerview-create","layerview creation cancelled",{layer:c});b._deferred.reject(a)})}
Object.defineProperty(g.prototype,"promise",{get:function(){return this._deferred.promise},enumerable:!0,configurable:!0});g.prototype.destroy=function(){this._controller.abort();var c=this.layerView;if(c){var a=this.layer,b=this.view;a.destroyLayerView(c);a.emit("layerview-destroy",{view:b,layerView:c});b.emit("layerview-destroy",{layer:a,layerView:c});this.done=!0;this.view=this.layerView=this.layer=null;c.layer=null;c.parent=null;c.view=null}};g.prototype.start=function(){return w(this,void 0,
void 0,function(){var c,a,b,f,d,q,n;return v(this,function(e){switch(e.label){case 0:if(this._started)return[2];this._started=!0;c=this;a=c._controller.signal;b=c.layer;f=c.view;this._map=f.map;e.label=1;case 1:return e.trys.push([1,5,,6]),[4,b.load({signal:a})];case 2:return e.sent(),[4,b.createLayerView(f,{signal:a})];case 3:return d=e.sent(),[4,d.when()];case 4:e.sent();q=this._map&&this._map.allLayers.includes(b);if(!q||a.aborted)return d.layer.destroyLayerView(d),d.layer=d.parent=d.view=null,
this.done=!0,q?[2]:[2,this._deferred.reject(new l("view:no-layerview-for-layer","The layer has been removed from the map",{layer:b}))];this.layerView=d;b.emit("layerview-create",{view:f,layerView:d});f.emit("layerview-create",{layer:b,layerView:d});this.done=!0;this._deferred.resolve(d);return[3,6];case 5:return n=e.sent(),b.emit("layerview-create-error",{view:f,error:n}),f.emit("layerview-create-error",{layer:b,error:n}),this.done=!0,this._deferred.reject(new l("layerview:create-error","layerview creation failed",
{layer:b,error:n})),[3,6];case 6:return[2]}})})};return g}();r=function(g){function c(a){var b=g.call(this)||this;b._layerLayerViewInfoMap=new Map;b.view=null;b._importLayerViewModules=function(){var a=b.view,c=b.get("view.map.allLayers");a&&c&&c.forEach(function(b){b&&"importLayerViewModule"in b&&b.importLayerViewModule(a)})};b._doWork=b._doWork.bind(b);b._reschedule=b._reschedule.bind(b);b.handles.add([A.on(b,"view.allLayerViews","change",b._importLayerViewModules,b._importLayerViewModules),b.watch(["view.map.basemap",
"view.map.ground","view.map.layers","view.internallyReady"],b._reschedule)]);return b}u(c,g);c.prototype.destroy=function(){this.clear();this._map=this.view=null};Object.defineProperty(c.prototype,"updating",{get:function(){if(this.handles.has("reschedule"))return!0;var a=!0;this._layerLayerViewInfoMap.forEach(function(b){a=a&&b.done});return!a},enumerable:!0,configurable:!0});c.prototype.clear=function(){this.destroyed||(this._layerLayerViewInfoMap.forEach(function(a,b){a.destroy()}),this._layerLayerViewInfoMap.clear(),
this._refreshCollections())};c.prototype.whenLayerView=function(a){this._reschedule();this._doWork();return this._layerLayerViewInfoMap.has(a)?this._layerLayerViewInfoMap.get(a).promise:h.reject(new l("view:no-layerview-for-layer","No layerview has been found for the layer",{layer:a}))};c.prototype._reschedule=function(){this.handles.remove("reschedule");this.handles.add(z.schedule(this._doWork),"reschedule");this.notifyChange("updating")};c.prototype._doWork=function(){var a=this.get("view.map");
this._map!==a&&(this.clear(),this._map=a);if(this.handles.has("reschedule")){this.handles.remove("reschedule");this.handles.remove("collection-change");var b=a&&a.allLayers;if(b){b.forEach(this._createLayerView,this);this._refreshCollections();var c=[];this._layerLayerViewInfoMap.forEach(function(a,d){b.includes(d)||c.push(a)});for(a=0;a<c.length;a++){var d=c[a];this._layerLayerViewInfoMap.delete(d.layer);d.destroy()}this.handles.add(b.on("change",this._reschedule),"collection-change");this.notifyChange("updating")}}};
c.prototype._refreshCollections=function(){var a=this;k.forEach(function(b,c){a._populateLayerViewsOwners(a.get(c),a.get(b),a.view)})};c.prototype._populateLayerViewsOwners=function(a,b,c){var d=this;if(a&&b){var f=0;a.forEach(function(a){var e=d._layerLayerViewInfoMap.get(a);e&&e.layerView&&(e=e.layerView,e.layer=a,e.parent=c,b.getItemAt(f)!==e&&b.splice(f,0,e),a.layers&&d._populateLayerViewsOwners(a.layers,e.layerViews,e),f+=1)});f<b.length&&b.splice(f,b.length)}else b&&b.removeAll()};c.prototype._createLayerView=
function(a){var b=this,c=this.view;this._layerLayerViewInfoMap.has(a)?this.get("view.internallyReady")&&this._layerLayerViewInfoMap.get(a).start():(a.load(),a&&"importLayerViewModule"in a&&a.importLayerViewModule(c),c=new C(a,this.view),c.promise.then(function(){b._refreshCollections();b.notifyChange("updating")},function(c){c&&(h.isAbortError(c)||"cancelled:layerview-create"===c.name)||B.error("Failed to create view for layer '"+a.title+", id:"+a.id+"' of type '"+a.type+"'.",{error:c});b._refreshCollections();
b.notifyChange("updating")}),this._layerLayerViewInfoMap.set(a,c),this.get("view.internallyReady")&&c.start());this.notifyChange("updating")};p([m.property({readOnly:!0})],c.prototype,"updating",null);p([m.property()],c.prototype,"view",void 0);return c=p([m.subclass("esri.views.LayerViewManager")],c)}(m.declared(x));t.default=r});