// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../Extent"],function(p,d,n){function k(a){void 0===a&&(a=d.ZERO);return[a[0],a[1],a[2],a[3]]}function f(a){return a[0]>=a[2]?0:a[2]-a[0]}function g(a){return a[1]>=a[3]?0:a[3]-a[1]}function m(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];return a}function h(a){return 4===a.length}function l(a,b,c){return a<b?b:a>c?c:a}Object.defineProperty(d,"__esModule",{value:!0});d.create=k;d.clone=function(a){return[a[0],a[1],a[2],a[3]]};d.fromValues=function(a,b,c,d,e){void 0===e&&
(e=k());e[0]=a;e[1]=b;e[2]=c;e[3]=d;return e};d.fromExtent=function(a,b){void 0===b&&(b=k());b[0]=a.xmin;b[1]=a.ymin;b[2]=a.xmax;b[3]=a.ymax;return b};d.toExtent=function(a,b){return new n({xmin:a[0],ymin:a[1],xmax:a[2],ymax:a[3],spatialReference:b})};d.expandPointInPlace=function(a,b){b[0]<a[0]&&(a[0]=b[0]);b[0]>a[2]&&(a[2]=b[0]);b[1]<a[1]&&(a[1]=b[1]);b[1]>a[3]&&(a[3]=b[1])};d.expand=function(a,b,c){void 0===c&&(c=a);if("length"in b)if(h(b))c[0]=Math.min(a[0],b[0]),c[1]=Math.min(a[1],b[1]),c[2]=
Math.max(a[2],b[2]),c[3]=Math.max(a[3],b[3]);else{if(2===b.length||3===b.length)c[0]=Math.min(a[0],b[0]),c[1]=Math.min(a[1],b[1]),c[2]=Math.max(a[2],b[0]),c[3]=Math.max(a[3],b[1])}else switch(b.type){case "extent":c[0]=Math.min(a[0],b.xmin);c[1]=Math.min(a[1],b.ymin);c[2]=Math.max(a[2],b.xmax);c[3]=Math.max(a[3],b.ymax);break;case "point":c[0]=Math.min(a[0],b.x),c[1]=Math.min(a[1],b.y),c[2]=Math.max(a[2],b.x),c[3]=Math.max(a[3],b.y)}return c};d.expandWithNestedArray=function(a,b,c){void 0===c&&(c=
a);var d=b.length,e=a[0],f=a[1],g=a[2];a=a[3];for(var k=0;k<d;k++){var h=b[k],e=Math.min(e,h[0]),f=Math.min(f,h[1]),g=Math.max(g,h[0]);a=Math.max(a,h[1])}c[0]=e;c[1]=f;c[2]=g;c[3]=a;return c};d.allFinite=function(a){for(var b=0;4>b;b++)if(!isFinite(a[b]))return!1;return!0};d.width=f;d.height=g;d.diameter=function(a){var b=f(a);a=g(a);return Math.sqrt(b*b+a*a)};d.area=function(a){return f(a)*g(a)};d.center=function(a,b){void 0===b&&(b=[0,0]);b[0]=a[0]+f(a)/2;b[1]=a[1]+g(a)/2;return b};d.containsPoint=
function(a,b){return b[0]>=a[0]&&b[1]>=a[1]&&b[0]<=a[2]&&b[1]<=a[3]};d.containsPointWithMargin=function(a,b,c){return b[0]>=a[0]-c&&b[1]>=a[1]-c&&b[0]<=a[2]+c&&b[1]<=a[3]+c};d.intersects=function(a,b){return Math.max(b[0],a[0])<=Math.min(b[2],a[2])&&Math.max(b[1],a[1])<=Math.min(b[3],a[3])};d.contains=function(a,b){return b[0]>=a[0]&&b[2]<=a[2]&&b[1]>=a[1]&&b[3]<=a[3]};d.intersection=function(a,b,c){void 0===c&&(c=a);var d=b[0],e=b[1],f=b[2];b=b[3];c[0]=l(a[0],d,f);c[1]=l(a[1],e,b);c[2]=l(a[2],d,
f);c[3]=l(a[3],e,b);return c};d.distance=function(a,b){var c=(a[1]+a[3])/2,d=Math.max(Math.abs(b[0]-(a[0]+a[2])/2)-f(a)/2,0);a=Math.max(Math.abs(b[1]-c)-g(a)/2,0);return Math.sqrt(d*d+a*a)};d.offset=function(a,b,c,d){void 0===d&&(d=a);d[0]=a[0]+b;d[1]=a[1]+c;d[2]=a[2]+b;d[3]=a[3]+c;return d};d.pad=function(a,b,c){void 0===c&&(c=a);c[0]=a[0]-b;c[1]=a[1]-b;c[2]=a[2]+b;c[3]=a[3]+b;return c};d.setMin=function(a,b,c){void 0===c&&(c=a);c[0]=b[0];c[1]=b[1];c!==a&&(c[2]=a[2],c[3]=a[3]);return c};d.setMax=
function(a,b,c){void 0===c&&(c=a);c[2]=b[0];c[3]=b[1];c!==a&&(c[0]=a[0],c[1]=a[1]);return a};d.set=m;d.empty=function(a){return a?m(a,d.NEGATIVE_INFINITY):k(d.NEGATIVE_INFINITY)};d.is=h;d.isPoint=function(a){return(0===f(a)||!isFinite(a[0]))&&(0===g(a)||!isFinite(a[1]))};d.equals=function(a,b,c){if(null==a||null==b)return a===b;if(!h(a)||!h(b))return!1;if(c)for(var d=0;d<a.length;d++){if(!c(a[d],b[d]))return!1}else for(d=0;d<a.length;d++)if(a[d]!==b[d])return!1;return!0};d.POSITIVE_INFINITY=[-Infinity,
-Infinity,Infinity,Infinity];d.NEGATIVE_INFINITY=[Infinity,Infinity,-Infinity,-Infinity];d.ZERO=[0,0,0,0]});