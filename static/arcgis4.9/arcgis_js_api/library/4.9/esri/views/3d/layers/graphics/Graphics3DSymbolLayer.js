// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../Color ../../../../core/Logger ../../../../core/scheduling ./constants ./ElevationContext ./featureExpressionInfoUtils ./Graphics3DSymbolCommonCode ./graphicUtils ../../support/mathUtils ../../support/PromiseLightweight".split(" "),function(B,C,q,r,t,u,v,k,h,w,l,m,x){function n(c,b){c=null!=c?b.attributes[c]:0;return null!=c&&isFinite(c)?c:0}var c=new k,y=t.getLogger("esri.views.3d.layers.graphics.Graphics3DSymbolLayer"),
z={mode:"on-the-ground",offset:0,unit:"meters"},A={mode:"absolute-height",offset:0,unit:"meters"};return function(p){function b(a,d,b,f){var e=p.call(this)||this;e._elevationOptions={supportsOffsetAdjustment:!1,supportsOnTheGround:!0};e.symbolContainer=a;e.symbol=d;e._context=b;e._symbolLayerOrder=b.layerOrder;e._symbolLayerOrderDelta=b.layerOrderDelta;e._elevationContext=new k;e._material=null;e._geometryCreationWarningHandle=null;e._updateDrivenProperties(f);e._updateElevationContext();e._prepareResources();
return e}q(b,p);b.prototype._logWarning=function(a){y.warn(a)};b.prototype._logGeometryCreationWarnings=function(a,d,b,f){var e=this;if(null==this._geometryCreationWarningHandle){var c=a.geometryData&&a.geometryData.polygons;f+=" geometry failed to be created";var g=null;a.projectionSuccess?!d.length||1===d.length&&!d[0].length?g=f+" (no "+b+" were defined)":Array.isArray(d)&&Array.isArray(d[0])?d.some(function(a){return 1===a.length})?g=f+" ("+b+" should contain at least 2 vertices)":c&&0===c.length&&
"rings"===b&&(g=f+" (filled "+b+" should use clockwise winding - try reversing the order of vertices)"):g=f+" ("+b+" should be defined as a 2D array)":g=f+" (failed to project geometry to view spatial reference)";g&&(this._geometryCreationWarningHandle=u.schedule(function(){return e._onNextTick()}),this._logWarning(g))}};b.prototype._onNextTick=function(){this._geometryCreationWarningHandle=null};b.prototype._validateGeometry=function(a){return"point"!==a.type||m.isFinite(a.x)&&m.isFinite(a.y)?!0:
(this._logWarning("point coordinate is not a valid number, graphic skipped"),!1)};b.prototype._prepareResources=function(a){throw Error("This is an abstract base class");};b.prototype._defaultElevationInfoNoZ=function(){return z};b.prototype._defaultElevationInfoZ=function(){return A};b.prototype._updateElevationContext=function(){this._elevationContext.setDefaults();var a=this._context.layer.elevationInfo;a&&this._elevationContext.mixinApi(a);(a=this.symbol&&this.symbol.elevationInfo)&&this._elevationContext.mixinApi(a);
this._elevationContext.featureExpressionInfoContext=this._context.featureExpressionInfoContext};b.prototype.getGraphicElevationContext=function(a){var d=a.geometry.hasZ?this._defaultElevationInfoZ():this._defaultElevationInfoNoZ();c.setUnit(null!=this._elevationContext.unit?this._elevationContext.unit:d.unit);c.mode=this._elevationContext.mode||d.mode;c.setOffsetMeters(null!=this._elevationContext.meterUnitOffset?this._elevationContext.meterUnitOffset:d.offset);c.featureExpressionInfoContext=this._elevationContext.featureExpressionInfoContext;
c.hasOffsetAdjustment=!1;this._elevationOptions.supportsOnTheGround||"on-the-ground"!==c.mode||(c.mode="relative-to-ground",c.setOffsetMeters(0),c.featureExpressionInfoContext=h.zeroContext);d=h.createFeature(a,this._context.layer);h.setContextFeature(c.featureExpressionInfoContext,d);w.needsOffsetAdjustment(c,this._elevationOptions,a.geometry,this.symbolContainer)&&(c.setOffsetRenderUnits(v.defaultIconElevationOffset),c.hasOffsetAdjustment=!0);return c};b.prototype._getDrapedZ=function(){return-2};
b.prototype._updateDrivenProperties=function(a){var d={color:!1,opacity:!1,size:!1};!a&&(a=this._context.renderer)&&(d.color=!!a.colorInfo,d.size=!!a.sizeInfo,a.visualVariables&&a.visualVariables.forEach(function(a){switch(a.type){case "color":d.color=!0;if(a.colors)for(var b=0;b<a.colors.length;b++){var e=a.colors[b];e&&(Array.isArray(e)&&3<e.length&&255!==e[3]||void 0!==e.a&&255!==e.a)&&(d.opacity=!0)}if(a.stops)for(b=0;b<a.stops.length;b++)(e=a.stops[b].color)&&(Array.isArray(e)&&3<e.length&&255!==
e[3]||void 0!==e.a&&255!==e.a)&&(d.opacity=!0);break;case "opacity":d.opacity=!0;break;case "size":d.size=!0}}));this._drivenProperties=d};b.prototype._isPropertyDriven=function(a){return this._drivenProperties[a]};b.prototype._getLayerOpacity=function(){if(this._context.layerView&&"fullOpacity"in this._context.layerView)return this._context.layerView.fullOpacity;var a=this._context.layer.opacity;return null==a?1:a};b.prototype._getMaterialOpacity=function(){var a;a=1*this._getLayerOpacity();var b=
this.symbol&&this.symbol.material;b&&!this._isPropertyDriven("opacity")&&b.color&&(a*=b.color.a);return a};b.prototype._getMaterialOpacityAndColor=function(){var a=this.symbol&&this.symbol.material,b=this._getMaterialOpacity(),a=!this._isPropertyDriven("color")&&a&&a.color?r.toUnitRGB(a.color):null;return l.mixinColorAndOpacity(a,b)};b.prototype._getVertexOpacityAndColor=function(a,b,c){var d=this._isPropertyDriven("color")?a.color:null;a=this._isPropertyDriven("opacity")?a.opacity:null;d=l.mixinColorAndOpacity(d,
a);c&&(d[0]*=c,d[1]*=c,d[2]*=c,d[3]*=c);return b?new b(d):d};b.prototype._getStageIdHint=function(){return this._context.layer.id+"_symbol"};b.prototype.isFastUpdatesEnabled=function(){return this._fastUpdates&&this._fastUpdates.enabled};b.prototype.updateSymbolLayerOrder=function(a,b){this._symbolLayerOrder=a;this._symbolLayerOrderDelta=b};b.prototype.setDrawOrder=function(a,b,c){this.updateSymbolLayerOrder(a,b);this._material&&(this._material.renderPriority=a,c.add(this._material.id))};b.prototype.createGraphics3DGraphic=
function(a){for(var b=1;b<arguments.length;b++);throw Error("This is an abstract base class");};b.prototype.destroy=function(){this._geometryCreationWarningHandle&&(this._geometryCreationWarningHandle.remove(),this._geometryCreationWarningHandle=null)};b.prototype.layerPropertyChanged=function(a,b,c){return!1};b.prototype.applyRendererDiff=function(a,b,c,f){return!1};b.prototype.getFastUpdateAttrValues=function(a){if(!this._fastUpdates.enabled)return null;var b=this._fastUpdates.visualVariables,c=
b.size?n(b.size.field,a):0;a=b.color?n(b.color.field,a):0;return[c,a,0,0]};return b}(x.Promise)});