// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/has","../3d/support/buffer/typedArrayUtil"],function(m,n,p,f){return function(){function b(a,c,e,d,l){this._glName=this._context=null;this._bufferType=void 0;this._usage=35044;this._size=-1;this._indexType=void 0;this._context=a;this._bufferType=c;this._usage=e;this._id=b._nextId++;this._glName=this._context.gl.createBuffer();d&&this.setData(d,l)}b.createIndex=function(a,c,e,d){return new b(a,34963,c,e,d)};b.createVertex=function(a,c,e){return new b(a,34962,
c,e)};Object.defineProperty(b.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"usage",{get:function(){return this._usage},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"bufferType",{get:function(){return this._bufferType},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"indexType",{get:function(){return this._indexType},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"byteSize",{get:function(){return 34962===this._bufferType?this._size:5125===this._indexType?4*this._size:2*this._size},enumerable:!0,configurable:!0});b.prototype.dispose=function(){this._context&&(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context=null)};b.prototype.setData=
function(a,c){if(a){if("number"===typeof a){if(0>a&&console.error("Buffer size cannot be negative!"),34963===this._bufferType&&c)switch(this._indexType=c,this._size=a,c){case 5123:a*=2;break;case 5125:a*=4}}else c=a.byteLength,f.isUint16Array(a)&&(c/=2,this._indexType=5123),f.isUint32Array(a)&&(c/=4,this._indexType=5125),this._size=c;c=this._context.getBoundVAO();this._context.bindVAO(null);this._context.bindBuffer(this);this._context.gl.bufferData(this._bufferType,a,this._usage);this._context.bindVAO(c)}};
b.prototype.setSubData=function(a,c,b,d){void 0===c&&(c=0);void 0===b&&(b=0);if(a){(0>c||c>=this._size)&&console.error("offset is out of range!");var e=c,g=b,h=d,k=a.byteLength;f.isUint16Array(a)&&(k/=2,e*=2,g*=2,h*=2);f.isUint32Array(a)&&(k/=4,e*=4,g*=4,h*=4);void 0===d&&(d=k-1);b>=d&&console.error("end must be bigger than start!");c+b-d>this._size&&console.error("An attempt to write beyond the end of the buffer!");c=this._context.getBoundVAO();this._context.bindVAO(null);this._context.bindBuffer(this);
b=this._context.gl;a=ArrayBuffer.isView(a)?a.buffer:a;b.bufferSubData(this._bufferType,e,a.slice(g,h));this._context.bindVAO(c)}};b._nextId=0;return b}()});