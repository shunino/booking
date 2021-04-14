// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","./arrayUtils","./HeapSort"],function(h,k,e,g){return function(){function c(a){var d=this;this.data=[];this._length=0;this._allocator=null;this._deallocator=function(a,b){return d.data[b]=void 0};this._shrink=function(){};this._hint=new e.RemoveHint;if(a){a.initialSize&&(this.data=Array(a.initialSize));if(a.allocator&&(this._allocator=a.allocator,this._deallocator=a.deallocator,a.initialSize))for(var b=0;b<a.initialSize;++b)this.data[b]=this._allocator(b);a.shrink&&(this._shrink=
function(){d.data.length>2*d.length&&(d.data.length=d.length)})}}c.prototype.toArray=function(){return this.data.slice(0,this.length)};Object.defineProperty(c.prototype,"length",{get:function(){return this._length},set:function(a){if(this._allocator)for(;this.data.length<a;)this.data.push(this._allocator(this.data.length));if(this._deallocator)for(var d=a;d<this._length;++d)this._deallocator(this.data[d],d);this._length=a;this._shrink()},enumerable:!0,configurable:!0});c.prototype.clear=function(){this.length=
0};c.prototype.equal=function(a){return e.equals(this.data,a.data)};c.prototype.push=function(a){this.data.length===this.length&&this._grow(2*(this.length+1));return this.data[this.length++]=a};c.prototype.pushArray=function(a){var d=this.length+a.length;d>=this.data.length&&this._grow(Math.max(2*this.length,d));for(d=0;d<a.length;d++)this.data[this._length++]=a[d];return this.back()};c.prototype.pushNew=function(){this.data.length===this.length&&this._grow(2*(this.length+1));++this._length;return this.back()};
c.prototype.pop=function(){if(0!==this.length){var a=this.data[this.length-1];--this.length;this._shrink();return a}};c.prototype.removeMany=function(a){var d=this,b=[];this.data=this.data.filter(function(c,e){if(e>=d.length)return!1;if(0>a.indexOf(c))return!0;b.push(c);return!1});this._length=this.data.length;return b};c.prototype.removeUnordered=function(a){a=e.removeUnordered(this.data,a,this.length,this._hint);void 0!==a&&--this.length;return a};c.prototype.removeUnorderedMany=function(a){a=e.removeUnorderedMany(this.data,
a,this.length,this._hint);this.length-=a.length;return a};c.prototype.front=function(){if(0!==this.length)return this.data[0]};c.prototype.back=function(){if(0!==this.length)return this.data[this.length-1]};c.prototype.swapElements=function(a,d){var b;a>=this.length||d>=this.length||(b=[this.data[d],this.data[a]],this.data[a]=b[0],this.data[d]=b[1])};c.prototype.sort=function(a){g.sort(this.data,0,this.length,a)};c.prototype.some=function(a,d){for(var b=0;b<this.length;++b)if(a.call(d,this.data[b],
b,this.data))return!0;return!1};c.prototype.find=function(a,d){for(var b=0;b<this.length;++b){var c=this.data[b];if(a.call(d,c,b,this.data))return c}};c.prototype.filter=function(a,d,b){b=b||new c;for(var f=0;f<this.length;++f)a.call(d,this.data[f],f,this.data)&&b.push(this.data[f]);return b};c.prototype.forEach=function(a,d){for(var b=0;b<this.length;++b)a.call(d,this.data[b],b,this.data)};c.prototype.map=function(a,d){for(var b=Array(this.length),c=0;c<this.length;++c)b[c]=a.call(d,this.data[c],
c,this.data);return b};c.prototype._grow=function(a){if(this._allocator)for(;this.data.length<a;)this.data.push(this._allocator(this.data.length))};return c}()});