// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","./utils"],function(m,e,f){function h(a,d,c){if(null!=c.getItemAt||Array.isArray(c)){var b=parseInt(a,10);if(!isNaN(b))return Array.isArray(c)?c[b]:c.getItemAt(b)}b=f.getProperties(c);return d?f.isPropertyDeclared(b,a)?b.get(a):c[a]:f.isPropertyDeclared(b,a)?b.internalGet(a):c[a]}function k(a,d,c,b){if(null==a)return a;if((a=h(d[b],c,a))||!(b<d.length-1))return b===d.length-1?a:k(a,d,c,b+1)}function g(a,d,c,b){void 0===c&&(c=!1);void 0===b&&(b=0);return"string"===typeof d&&
-1===d.indexOf(".")?h(d,c,a):k(a,f.pathToArray(d),c,b)}function l(a,d){return g(a,d,!0)}Object.defineProperty(e,"__esModule",{value:!0});e.valueOf=g;e.get=l;e.exists=function(a,d){return void 0!==g(d,a,!0)};e.default=l});