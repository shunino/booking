// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../renderers/support/utils","../graphics/graphicUtils","../../lib/gl-matrix"],function(E,l,w,z,m){function k(a){return null!==a&&void 0!==a}function n(a){return"number"===typeof a}function g(a,b){a&&a.push(b)}function h(a,b,c,d,e){var f=a.minSize,x=a.maxSize;if(a.expression)return g(e,"Could not convert size info: expression not supported"),!1;if(a.useSymbolValue)return a=d.symbolSize[c],b.minSize[c]=a,b.maxSize[c]=a,b.offset[c]=b.minSize[c],b.factor[c]=0,b.type[c]=
1,!0;if(k(a.field)){if(k(a.stops)){if(2===a.stops.length&&n(a.stops[0].size)&&n(a.stops[1].size))return y(a.stops[0].size,a.stops[1].size,a.stops[0].value,a.stops[1].value,b,c),b.type[c]=1,!0;g(e,"Could not convert size info: stops only supported with 2 elements");return!1}if(n(f)&&n(x)&&k(a.minDataValue)&&k(a.maxDataValue))return y(f,x,a.minDataValue,a.maxDataValue,b,c),b.type[c]=1,!0;if(null!=w.meterIn[a.valueUnit])return b.minSize[c]=-Infinity,b.maxSize[c]=Infinity,b.offset[c]=0,b.factor[c]=1/
w.meterIn[a.valueUnit],b.type[c]=1,!0;"unknown"===a.valueUnit?g(e,"Could not convert size info: proportional size not supported"):g(e,"Could not convert size info: scale-dependent size not supported");return!1}if(!k(a.field)){if(a.stops&&a.stops[0]&&n(a.stops[0].size))return b.minSize[c]=a.stops[0].size,b.maxSize[c]=a.stops[0].size,b.offset[c]=b.minSize[c],b.factor[c]=0,b.type[c]=1,!0;if(n(f))return b.minSize[c]=f,b.maxSize[c]=f,b.offset[c]=f,b.factor[c]=0,b.type[c]=1,!0}g(e,"Could not convert size info: unsupported variant of sizeInfo");
return!1}function y(a,b,c,d,e,f){d=0<Math.abs(d-c)?(b-a)/(d-c):0;e.minSize[f]=0<d?a:b;e.maxSize[f]=0<d?b:a;e.offset[f]=a-c*d;e.factor[f]=d}function A(a,b,c,d){if(a.normalizationField||a.valueRepresentation)return g(d,"Could not convert size info: unsupported property"),null;var e=a.field;if(null!=e&&"string"!==typeof e)return g(d,"Could not convert size info: field is not a string"),null;if(!b.size)b.size={field:a.field,minSize:[0,0,0],maxSize:[0,0,0],offset:[0,0,0],factor:[0,0,0],type:[0,0,0]};else if(a.field)if(!b.size.field)b.size.field=
a.field;else if(a.field!==b.size.field)return g(d,"Could not convert size info: multiple fields in use"),null;switch(a.axis){case "width":return(e=h(a,b.size,0,c,d))?b:null;case "height":return(e=h(a,b.size,2,c,d))?b:null;case "depth":return(e=h(a,b.size,1,c,d))?b:null;case "width-and-depth":return(e=h(a,b.size,0,c,d))&&h(a,b.size,1,c,d),e?b:null;case null:case void 0:case "all":return(e=(e=(e=h(a,b.size,0,c,d))&&h(a,b.size,1,c,d))&&h(a,b.size,2,c,d))?b:null;default:return g(d,'Could not convert size info: unknown axis "'+
a.axis+'""'),null}}function B(a,b,c){for(var d=0;3>d;++d){var e=b.unitInMeters;1===a.type[d]&&(e*=b.modelSize[d],a.type[d]=2);a.minSize[d]/=e;a.maxSize[d]/=e;a.offset[d]/=e;a.factor[d]/=e}if(0!==a.type[0])b=0;else if(0!==a.type[1])b=1;else if(0!==a.type[2])b=2;else return g(c,"No size axis contains a valid size or scale"),!1;for(d=0;3>d;++d)0===a.type[d]&&(a.minSize[d]=a.minSize[b],a.maxSize[d]=a.maxSize[b],a.offset[d]=a.offset[b],a.factor[d]=a.factor[b],a.type[d]=a.type[b]);return!0}function p(a,
b,c){a[4*b+0]=c.r/255;a[4*b+1]=c.g/255;a[4*b+2]=c.b/255;a[4*b+3]=c.a}function C(a,b,c){if(a.normalizationField)return g(c,"Could not convert color info: unsupported property"),null;if("string"===typeof a.field)if(a.stops){if(8<a.stops.length)return g(c,"Could not convert color info: too many color stops"),null;b.color={field:a.field,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};a=a.stops;for(c=0;8>c;++c){var d=a[Math.min(c,a.length-1)];b.color.values[c]=
d.value;p(b.color.colors,c,d.color)}}else if(a.colors){if(!k(a.minDataValue)||!k(a.maxDataValue))return g(c,"Could not convert color info: missing data values"),null;if(2!==a.colors.length)return g(c,"Could not convert color info: invalid colors array"),null;b.color={field:a.field,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};b.color.values[0]=a.minDataValue;p(b.color.colors,0,a.colors[0]);b.color.values[1]=a.maxDataValue;p(b.color.colors,1,a.colors[1]);
for(c=2;8>c;++c)b.color.values[c]=a.maxDataValue,p(b.color.colors,c,a.colors[1])}else return g(c,"Could not convert color info: missing stops or colors"),null;else if(a.stops&&0<=a.stops.length||a.colors&&0<=a.colors.length)for(a=a.stops&&0<=a.stops.length?a.stops[0].color:a.colors[0],b.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},c=0;8>c;c++)b.color.values[c]=Infinity,p(b.color.colors,c,a);else return g(c,"Could not convert color info: no field and no colors/stops"),
null;return b}function q(a,b,c,d){a=2===c&&"arithmetic"===a.rotationType;b.offset[c]=a?90:0;b.factor[c]=a?-1:1;b.type[c]=1}function D(a,b,c){if("string"!==typeof a.field)return g(c,"Could not convert rotation info: field is not a string"),null;if(!b.rotation)b.rotation={field:a.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};else if(a.field)if(!b.rotation.field)b.rotation.field=a.field;else if(a.field!==b.rotation.field)return g(c,"Could not convert rotation info: multiple fields in use"),null;
switch(a.axis){case "tilt":return q(a,b.rotation,0,c),b;case "roll":return q(a,b.rotation,1,c),b;case null:case void 0:case "heading":return q(a,b.rotation,2,c),b;default:return g(c,'Could not convert rotation info: unknown axis "'+a.axis+'""'),null}}function r(a,b,c){if(!a)return null;var d=!b.supportedTypes||!!b.supportedTypes.size,e=!b.supportedTypes||!!b.supportedTypes.color,f=!b.supportedTypes||!!b.supportedTypes.rotation;return(a=a.reduce(function(a,h){if(!a)return a;if(h.valueExpression)return g(c,
"Could not convert visual variables: arcade expressions not supported"),null;switch(h.type){case "size":return d?A(h,a,b,c):a;case "color":return e?C(h,a,c):a;case "rotation":return f?D(h,a,c):a;default:return g(c,"Could not convert visual variables: unsupported type "+h.type),null}},{size:null,color:null,rotation:null}))&&a.size&&!B(a.size,b,c)?null:a}function t(a,b,c){if(!!a!==!!b||a&&a.field!==b.field)return!1;if(a&&"rotation"===c)for(c=0;3>c;c++)if(a.type[c]!==b.type[c]||a.offset[c]!==b.offset[c]||
a.factor[c]!==b.factor[c])return!1;return!0}function u(a,b){var c={vvSizeEnabled:!1,vvSizeMinSize:null,vvSizeMaxSize:null,vvSizeOffset:null,vvSizeFactor:null,vvSizeValue:null,vvColorEnabled:!1,vvColorValues:null,vvColorColors:null,vvSymbolAnchor:null,vvSymbolRotation:null},d=a&&null!=a.size;a&&a.size?(c.vvSizeEnabled=!0,c.vvSizeMinSize=a.size.minSize,c.vvSizeMaxSize=a.size.maxSize,c.vvSizeOffset=a.size.offset,c.vvSizeFactor=a.size.factor):a&&d&&(c.vvSizeValue=b.transformation.scale);a&&d&&(c.vvSymbolAnchor=
b.transformation.anchor,c.vvSymbolRotation=b.transformation.rotation);a&&a.color&&(c.vvColorEnabled=!0,c.vvColorValues=a.color.values,c.vvColorColors=a.color.colors);return c}Object.defineProperty(l,"__esModule",{value:!0});l.convertVisualVariables=r;l.initFastSymbolUpdatesState=function(a,b){return!a||a.disableFastUpdates?{enabled:!1}:(a=r(a.visualVariables,b))?{enabled:!0,visualVariables:a,materialParameters:u(a,b),customTransformation:a&&null!=a.size}:{enabled:!1}};l.updateFastSymbolUpdatesState=
function(a,b,c){if(!b||!a.enabled)return!1;var d=a.visualVariables;b=r(b.visualVariables,c);if(!(b&&t(d.size,b.size,"size")&&t(d.color,b.color,"color")&&t(d.rotation,b.rotation,"rotation")))return!1;a.visualVariables=b;a.materialParameters=u(b,c);a.customTransformation=b&&null!=b.size;return!0};l.getMaterialParams=u;var v;(function(a){var b=m.mat4d.create(),c=m.vec3d.create();a.evaluateModelTransform=function(a,e,f){if(!a.vvSizeEnabled)return f;m.mat4d.set(f,b);z.computeObjectRotation(a.vvSymbolRotation[2],
a.vvSymbolRotation[0],a.vvSymbolRotation[1],b);if(a.vvSizeEnabled){for(f=0;3>f;++f){var d=a.vvSizeOffset[f]+e[0]*a.vvSizeFactor[f],g=f;var h=a.vvSizeMinSize[f],k=a.vvSizeMaxSize[f],d=d<h?h:d>k?k:d;c[g]=d}m.mat4d.scale(b,c,b)}else m.mat4d.scale(b,a.vvSizeValue,b);m.mat4d.translate(b,a.vvSymbolAnchor,b);return b}})(v||(v={}));l.evaluateModelTransform=v.evaluateModelTransform});