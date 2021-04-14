// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["../request","../core/lang","./Task","./support/FindResult"],function(d,b,e,f){return e.createSubclass({declaredClass:"esri.tasks.FindTask",properties:{parsedUrl:{get:function(){var a=this._parseUrl(this.url);a.path+="/find";return a}},gdbVersion:{value:null,type:String},url:{}},execute:function(a,c){a=this._encode(b.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON()));this.gdbVersion&&(a.gdbVersion=this.gdbVersion);a={query:a};if(this.requestOptions||c)a=b.mixin({},this.requestOptions,c,
a);return d(this.parsedUrl.path,a).then(this._handleExecuteResponse)},_handleExecuteResponse:function(a){a=a.data;a.results=(a.results||[]).map(function(a){return f.fromJSON(a)});return a}})});