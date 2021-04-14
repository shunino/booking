// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/assignHelper ../../Color ../../core/JSONSupport ../../core/lang ../../core/screenUtils ../../core/accessorSupport/decorators ../support/materialUtils".split(" "),function(p,q,h,d,f,k,l,m,n,c,e){return function(g){function b(a){a=g.call(this)||this;a.color=new k([0,0,0,1]);a.extensionLength=0;a.size=n.px2pt(1);return a}h(b,g);b.prototype.normalizeCtorArgs=function(a){a&&a.type&&
(a=f({},a),delete a.type);return a};b.prototype.clone=function(){};b.prototype.cloneProperties=function(){return{color:m.clone(this.color),size:this.size,extensionLength:this.extensionLength}};d([c.property({type:["solid","sketch"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],b.prototype,"type",void 0);d([c.property(e.colorAndTransparencyProperty)],b.prototype,"color",void 0);d([c.property(f({},e.screenSizeProperty,{json:{write:{overridePolicy:function(a){return{enabled:!!a}}}}}))],b.prototype,
"extensionLength",void 0);d([c.property(e.screenSizeProperty)],b.prototype,"size",void 0);return b=d([c.subclass("esri.symbols.edges.Edges3D")],b)}(c.declared(l))});