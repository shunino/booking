// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/tsSupport/assignHelper ../../../../core/Accessor ../../../../core/Promise ../../../../core/promiseUtils ../../../../core/requireUtils ../../../../core/workers ../../../../core/accessorSupport/decorators ./util module".split(" "),function(p,e,q,f,k,r,t,l,u,v,d,m,w){Object.defineProperty(e,"__esModule",{value:!0});k=function(e){function b(a){a=e.call(this,a)||this;a.tileRenderer=
null;return a}q(b,e);b.prototype.initialize=function(){var a=this;this.addResolvingPromise(v.open(u.getAbsMid("../features/Pipeline",p,w),{client:this.client,strategy:"dedicated"}).then(function(b){a._connection=b;return a._getStartupOptions(a.layer,a.tileInfo)}).then(function(b){return Array.isArray(b.service.source)?a._connection.invoke("startup",b,b.service.source):a._connection.invoke("startup",b)}))};b.prototype.destroy=function(){var a=this;this._connection&&this._connection.invoke("destroy").then(function(){return a._connection.close()})};
b.prototype.configure=function(a){return this._connection.invoke("configure",a)};b.prototype.refresh=function(){return this._connection.invoke("controller.refresh")};b.prototype.redraw=function(){return this._connection.invoke("controller.redraw")};b.prototype.setViewState=function(a){return this._connection.invoke("setViewState",a.toJSON())};b.prototype.queryFeatures=function(a){return this._connection.invoke("controller.queryFeatures",a.toJSON())};b.prototype.queryObjectIds=function(a){return this._connection.invoke("controller.queryObjectIds",
a.toJSON())};b.prototype.queryFeatureCount=function(a){return this._connection.invoke("controller.queryFeatureCount",a.toJSON())};b.prototype.queryExtent=function(a){return this._connection.invoke("controller.queryExtent",a.toJSON())};b.prototype.queryLatestObservations=function(a){return this._connection.invoke("controller.queryLatestObservations",a.toJSON())};b.prototype.onEdits=function(a){return this._connection.invoke("controller.onEdits",{addedFeatures:a.addedFeatures,deletedFeatures:a.deletedFeatures,
updatedFeatures:a.updatedFeatures})};b.prototype.enableEvent=function(a,b){return this._connection.invoke("controller.enableEvent",{name:a,value:b})};b.prototype._getStartupOptions=function(a,b){var d=a.capabilities,e=a.objectIdField,c=a.source,f=a.fields.map(function(a){return a.toJSON()}),k=a.fullExtent&&a.fullExtent.toJSON(),n=m.toJSONGeometryType(a.geometryType);if(c&&"openPorts"in c)return c.openPorts().then(function(a){return{service:{capabilities:d,fields:f,fullExtent:k,geometryType:n,objectIdField:e,
source:a},tileInfo:b.toJSON()}});if("stream"===a.type){var c=a.source,g=c.relatedLayerDefinition,h=c.archivedLayerDefinition,g=g&&{capabilities:g.capabilities,fields:g.fields,fullExtent:g.extent,geometryType:g.geometryType,objectIdField:g.objectIdField,source:c.layerDefinition.relatedFeatures.featuresUrl,joinField:c.layerDefinition.relatedFeatures.joinField}||null,h=h&&{capabilities:h.capabilities,fields:h.fields,fullExtent:h.extent,geometryType:h.geometryType,objectIdField:h.objectIdField,source:c.layerDefinition.keepLatestArchive.featuresUrl,
maximumFeatureAge:c.layerDefinition.keepLatestArchive.maximumFeatureAge,updateInterval:c.layerDefinition.keepLatestArchive.updateInterval}||null;return l.resolve({service:{capabilities:a.capabilities,fields:a.fields.map(function(a){return a.toJSON()}),fullExtent:a.fullExtent&&a.fullExtent.toJSON()||null,geometryType:m.toJSONGeometryType(a.geometryType),objectIdField:a.objectIdField||"__OBJECTID",source:a.parsedUrl.path,buddyLayers:{relatedFeatures:g,keepLatestArchive:h},streamUrls:c.layerDefinition.streamUrls,
timeInfo:c.layerDefinition.timeInfo,content:a.parsedUrl.query},tileInfo:b.toJSON()})}return l.resolve({service:{capabilities:d,fields:f,fullExtent:k,geometryType:n,objectIdField:e,source:a.dynamicDataSource?a.parsedUrl:a.url+"/"+a.layerId},tileInfo:b.toJSON()})};f([d.property({constructOnly:!0})],b.prototype,"client",void 0);f([d.property({constructOnly:!0})],b.prototype,"layer",void 0);f([d.property({constructOnly:!0})],b.prototype,"tileInfo",void 0);f([d.property()],b.prototype,"tileRenderer",void 0);
return b=f([d.subclass()],b)}(d.declared(r,t));e.default=k});