// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../core/Error ../../core/object ../../core/Warning ../ClassBreaksRenderer ../HeatmapRenderer ../SimpleRenderer ../UniqueValueRenderer".split(" "),function(r,d,h,k,e,l,m,n,p){function f(a,c,b){if(!a)return null;if(a&&(a.styleName||a.styleUrl)&&"uniqueValue"!==a.type)return b&&b.messages&&b.messages.push(new e("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+a.type+"'",{definition:a,context:b})),null;c=a?q[a.type]||null:null;
if(c)return c=new c,c.read(a,b),c;b&&b.messages&&a&&b.messages.push(new e("renderer:unsupported","Renderers of type '"+(a.type||"unknown")+"' are not supported",{definition:a,context:b}));return null}function g(a,c,b){return a?b&&"web-scene"===b.origin&&"heatmap"===a.type?(b.messages&&b.messages.push(new h("renderer:unsupported","Renderer of type '"+a.declaredClass+"' are not supported in scenes.",{renderer:a,context:b})),null):a.write(c,b):null}Object.defineProperty(d,"__esModule",{value:!0});var q=
{simple:n,uniqueValue:p,classBreaks:l,heatmap:m};d.read=f;d.writeTarget=function(a,c,b,d){(a=g(a,{},d))&&k.setDeepValue(b,a,c)};d.write=g;d.fromJSON=function(a,c){return f(a,null,c)}});