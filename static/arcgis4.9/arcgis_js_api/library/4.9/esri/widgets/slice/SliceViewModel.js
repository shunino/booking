// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Handles ../../core/watchUtils ../../core/accessorSupport/decorators ../../views/3d/interactive/interactiveToolUtils ../../views/3d/interactive/analysisTools/slice/SliceTool".split(" "),function(n,p,g,d,h,k,l,c,f,m){return function(e){function b(){var a=null!==e&&e.apply(this,arguments)||this;a._handles=new k;a.view=null;a.tool=null;a.plane=null;return a}g(b,e);b.prototype.initialize=
function(){var a=this;this._handles.add(l.init(this,"view.ready",function(){var b=a.view&&a.view.ready;b&&!a.tool&&a._set("tool",new m({view:a.view}));f.toggle(a.view,a.tool);b||a._set("tool",null)}))};b.prototype.destroy=function(){f.toggle(this.view,this.tool,!1);this._set("tool",null);this.view=null;this._handles.destroy();this._handles=null};d([c.property()],b.prototype,"view",void 0);d([c.property({readOnly:!0})],b.prototype,"tool",void 0);d([c.aliasOf("tool.plane")],b.prototype,"plane",void 0);
return b=d([c.subclass("esri.widgets.slice.SliceViewModel")],b)}(c.declared(h))});