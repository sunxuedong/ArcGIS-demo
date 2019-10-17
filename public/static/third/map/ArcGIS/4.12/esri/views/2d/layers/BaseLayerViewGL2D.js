// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper @dojo/framework/shim/Map ../../../core/accessorSupport/decorators ../../../geometry/support/aaBoundingRect ../tiling ./LayerView2D ./support/DisplayGL ../../layers/RefreshableLayerView".split(" "),function(E,F,r,f,t,u,v,d,w,x,y,z,A){var p=new Set,k=[],l=[],D=function(){return function(d,a,b,B,C,f,h,e,g){void 0===e&&
(e=[0,0]);void 0===g&&(g=w.create());this.id=d;this.level=a;this.row=b;this.col=B;this.world=C;this.resolution=f;this.scale=h;this.coords=e;this.bounds=g}}();return function(m){function a(b){b=m.call(this,b)||this;b._tileMap=new v.default;b.container=new z.default(b);b.layer=null;b.tiles=[];return b}r(a,m);Object.defineProperty(a.prototype,"_tileInfoView",{get:function(){var b=this.layer&&this.layer.tileInfo;return b?new x.TileInfoView(b):null},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"context",{get:function(){return this.container&&this.container.stage&&this.container.stage.context.gl},enumerable:!0,configurable:!0});a.prototype.attach=function(){};a.prototype.detach=function(){};a.prototype.hitTest=function(b,a){return null};a.prototype.render=function(b){};a.prototype.requestRender=function(){this.container.requestRender()};a.prototype.tilesChanged=function(b,a){};a.prototype.doRefresh=function(b){return u(this,void 0,void 0,function(){return t(this,function(b){return[2]})})};
a.prototype.isUpdating=function(){return!1};a.prototype.update=function(b){var a=this._tileInfoView,d=this.tiles;if(a){a=a.getTileCoverage(b.state,0);b=a.spans;var a=a.lodInfo,f=a.level;if(b.length)for(var h=0;h<b.length;h++)for(var e=b[h],g=e.row,m=e.colTo,e=e.colFrom;e<=m;e++){var c=a.normalizeCol(e),q=a.getWorldForColumn(e),n=f+"/"+g+"/"+c+"/"+q;this._tileMap.has(n)||(c=new D(n,f,g,c,q,a.resolution,a.scale),a.getTileCoords(c.coords,c,!1),a.getTileBounds(c.bounds,c,!0),this._tileMap.set(n,c),d.push(c),
k.push(c));p.add(n)}}for(b=d.length-1;0<=b;b--)c=d[b],p.has(c.id)||(d.splice(b,1),l.push(c),this._tileMap.delete(c.id));if(k.length||l.length)this.tilesChanged(k,l),k.length=l.length=0;p.clear();this.requestRender()};a.prototype.moveStart=function(){};a.prototype.viewChange=function(){this.requestUpdate()};a.prototype.moveEnd=function(){};f([d.property({dependsOn:["layer.loaded"]})],a.prototype,"_tileInfoView",null);f([d.property()],a.prototype,"container",void 0);f([d.property()],a.prototype,"layer",
void 0);f([d.property({dependsOn:["container.stage"]})],a.prototype,"context",null);return a=f([d.subclass("esri.views.2d.layers.BaseLayerViewGL2D")],a)}(d.declared(y,A))});