// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","./tileUtils","./UpsampleInfo"],function(y,z,w,g){function p(a,b,h,d,e,k,l){if(!a.parent||6<l)return null;d*=.5;e*=.5;k*=.5;a.lij[2]&1&&(e+=.5);0===(a.lij[1]&1)&&(k+=.5);return a.parent.hasLayerData(b,h)?(b=g.Pool.acquire(),b.init(a.parent,e,k,d),b):p(a.parent,b,h,d,e,k,l+1)}var m=Error("Abstract method called on TileAgent");return function(){function a(){}a.prototype.init=function(b,a,d,e){this.tile=b;this.layerIdx=a;this.layerClass=d;this.suspended=e;this._tileLayerInfo=
b.getLayerInfo(a,d);this._dataRequested=null;(b=this._findAncestorWithData())?(this._setUpsamplingTile(b.tile),g.Pool.release(b)):this._unsetUpsamplingTile();return this._requestNext(!0)};a.prototype.dispose=function(){this._dataRequested&&(this._dataRequested.unrequestLayerData(this.layerIdx,this.layerClass,this),this._dataRequested=null);this._tileLayerInfo=this.tile=null};a.prototype.setSuspension=function(b){b!==this.suspended&&((this.suspended=b)?this._dataRequested&&(this._dataRequested.unrequestLayerData(this.layerIdx,
this.layerClass,this),this._dataRequested=null):this._tileLayerInfo.data||this.update())};a.prototype.update=function(){var b=this._findAncestorWithData(),a=this._tileLayerInfo.upsampleFromTile;b&&(a&&b.tile!==a.tile&&this._setUpsamplingTile(b.tile),g.Pool.release(b));return this._requestNext()};a.prototype.dataArrived=function(a){throw m;};a.prototype.dataMissing=function(a){this._dataRequested=null;this._tileLayerInfo.disposeData();this._requestNext()};a.prototype._agentDone=function(){this.tile.agentDone(this.layerIdx,
this.layerClass);this.dispose()};a.prototype._requestNext=function(a){void 0===a&&(a=!1);if(this.suspended)return!0;var b=this._findNextDownload();if(this._dataRequested){if(b===this._dataRequested)return!0;this._dataRequested.unrequestLayerData(this.layerIdx,this.layerClass,this);this._dataRequested=null}b?b.requestLayerData(this.layerIdx,this.layerClass,this)&&(this._dataRequested=b):a||this._agentDone();return!!this._dataRequested};a.prototype._findNextDownload=function(){for(var b=this.layerIdx,
h=this.layerClass,d=this.tile.parentSurface.layerViewByIndex(b,h),e=d.minDataLevel,k=d.maxDataLevel,l=this._desiredMinLevelDelta(),g=a.START_LOADING_LEVEL_DELTA+l,m=this._scaleRangeEnabled,f,c=this.tile,t=0,p=c.lij[0],q=this._tileLayerInfo.upsampleFromTile,q=q?q.tile.lij[0]:-1,u=this.tile.parentSurface,x=u.tilemapStats,n=u.getTilemapTile(c),v=!1;c&&(!m||w.fallsWithinLayer(c,d.layer,!1))&&c.lij[0]>=e;){var r=c.layerInfo[h][b];if(r.data&&t>=l){c.lij[0]>q&&this._setUpsamplingTile(c);r.dataInvalidated&&
(f=c);break}if(n&&!n.hasDataAvailable(c,b,h))v=!0;else if(c.lij[0]<=k&&!r.data&&!r.dataMissing&&(f=c,t>=g))break;(c=c.parent)&&n&&(n=n.parent||u.getTilemapTile(c));t++}f&&p-f.lij[0]<l&&this._tileLayerInfo.upsampleFromTile&&(f=null);!f&&v&&x.tilesNotPresent++;return f};a.prototype._findAncestorWithData=function(){return p(this.tile,this.layerIdx,this.layerClass,1,0,0,0)};a.prototype._desiredMinLevelDelta=function(){throw m;};a.prototype._setUpsamplingTile=function(a){throw m;};a.prototype._unsetUpsamplingTile=
function(){this._tileLayerInfo.upsampleFromTile&&g.Pool.release(this._tileLayerInfo.upsampleFromTile);this._tileLayerInfo.upsampleFromTile=null};a.START_LOADING_LEVEL_DELTA=4;a.AGENT_DONE=new a;return a}()});