// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../Graphic ../../../core/Collection ../../../core/Handles ../../../core/promiseUtils ../../../core/accessorSupport/decorators ../engine ./LayerView2D ./graphics/GraphicsView2D".split(" "),function(v,w,h,e,k,l,m,n,p,g,d,q,r,t){var u={remove:function(){},pause:function(){},resume:function(){}};return function(f){function b(){var a=
null!==f&&f.apply(this,arguments)||this;a._handles=new p;a.container=new q.Container;return a}h(b,f);b.prototype.attach=function(){this.graphicsView=new t.default({view:this.view,graphics:this.layer.graphics});this.graphicsView.install(this.container);this._handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))};b.prototype.detach=function(){this.graphicsView.destroy();this._handles.removeAll()};b.prototype.hitTest=function(a,b){return this.suspended||!this.graphicsView?
g.resolve(null):this.graphicsView.hitTest(a,b)};b.prototype.fetchPopupFeatures=function(a){return l(this,void 0,void 0,function(){return k(this,function(b){return this.graphicsView?[2,this.graphicsView.searchFeatures(a).then(function(a){return a.filter(function(a){return!!a.popupTemplate})})]:[2]})})};b.prototype.update=function(a){this.graphicsView.update(a)};b.prototype.moveStart=function(){this.requestUpdate()};b.prototype.viewChange=function(){this.requestUpdate()};b.prototype.moveEnd=function(){this.requestUpdate()};
b.prototype.isUpdating=function(){return!this.graphicsView||this.graphicsView.updating};b.prototype.highlight=function(a,b){void 0===b&&(b={});var c;"number"===typeof a?c=[a]:a instanceof m?c=[a.uid]:Array.isArray(a)&&0<a.length?c="number"===typeof a[0]?a:a.map(function(a){return a&&a.uid}):n.isCollection(a)&&(c=a.map(function(a){return a&&a.uid}).toArray());c=c.filter(function(a){return null!=a});if(!c.length)return u;var d=this.graphicsView.highlight(c);return{remove:function(){return d.remove()},
pause:function(){},resume:function(){}}};b.prototype.queryGraphics=function(){return g.resolve(this.graphicsView.graphics)};e([d.property()],b.prototype,"graphicsView",void 0);e([d.property({dependsOn:["graphicsView.updating"]})],b.prototype,"updating",void 0);return b=e([d.subclass("esri.views.2d.layers.GraphicsLayerView2D")],b)}(d.declared(r))});