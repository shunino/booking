// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/libs/earcut/earcut ../../../../geometry/Point ../../../../geometry/Polygon ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolCommonCode ./Graphics3DSymbolLayer ./graphicUtils ../support/edgeUtils ../../lib/gl-matrix ../../support/projectionUtils ../../webgl-engine/Stage ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryData ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/Util ../../webgl-engine/materials/DefaultMaterial".split(" "),
function(L,na,Z,aa,ba,ca,da,y,ea,fa,ga,p,ha,P,ia,ja,ka,B,la){function ma(e,d,a,b,c,n,h,g,k,m,x,r,f,y){var u=a.length/3,C=0;x+=2*b.count;var l=b.index,G=b.count,q=k,v=x;p.vec3d.set(f,t);var w=0<r?1:-1,l=3*l,z=q;f=3*z;for(var A=q+G,q=3*A,D=0;D<G;++D)y&&(t[0]=e[l+0],t[1]=e[l+1],t[2]=e[l+2],p.vec3d.normalize(t)),c[f+0]=e[l+0],c[f+1]=e[l+1],c[f+2]=e[l+2],n[f+0]=d[l+0],n[f+1]=d[l+1],n[f+2]=d[l+2],h[f+0]=-w*t[0],h[f+1]=-w*t[1],h[f+2]=-w*t[2],g[z]=0,c[q+0]=e[l+0]+r*t[0],c[q+1]=e[l+1]+r*t[1],c[q+2]=e[l+2]+
r*t[2],n[q+0]=d[l+0],n[q+1]=d[l+1],n[q+2]=d[l+2],h[q+0]=w*t[0],h[q+1]=w*t[1],h[q+2]=w*t[2],g[A]=r,f+=3,q+=3,l+=3,z+=1,A+=1;l=0;f=3*v;q=3*(v+u);f=3*(v+u);q=3*v;e=Q;d=R;0>r&&(e=R,d=Q);for(D=0;D<u;++D)m[f+0]=a[l+e[0]],m[f+1]=a[l+e[1]],m[f+2]=a[l+e[2]],m[q+0]=a[l+d[0]]+G,m[q+1]=a[l+d[1]]+G,m[q+2]=a[l+d[2]]+G,f+=3,q+=3,l+=3;k+=2*b.count;x=x+2*u-(2*b.count+2*u);S(c,n,g,h,C,b.pathLengths[0],b.count,k,m,x,r);k+=4*b.pathLengths[0];x+=2*b.pathLengths[0];C+=b.pathLengths[0];for(a=1;a<b.pathLengths.length;++a)S(c,
n,g,h,C,b.pathLengths[a],b.count,k,m,x,r),k+=4*b.pathLengths[a],x+=2*b.pathLengths[a],C+=b.pathLengths[a]}function H(e,d,a,b,c,n,h){b[n]=b[h];h*=3;n*=3;e[n+0]=e[h+0];e[n+1]=e[h+1];e[n+2]=e[h+2];d[n+0]=d[h+0];d[n+1]=d[h+1];d[n+2]=d[h+2];a[n+0]=c[0];a[n+1]=c[1];a[n+2]=c[2]}function S(e,d,a,b,c,n,h,g,k,m,x){var r=c,f=c+1,t=c+h,u=c+h+1,C=g,l=g+1,y=g+2*n;g=g+2*n+1;0>x&&(r=c+h+1,u=c);m*=3;for(var q=0;q<n;++q){q===n-1&&(0<x?(f=c,u=c+h):(f=c,r=c+h));var v=e,w=r,z=f,A=t,D=F,w=3*w,z=3*z,A=3*A;p.vec3d.set3(v[w++],
v[w++],v[w++],I);p.vec3d.set3(v[z++],v[z++],v[z++],T);p.vec3d.set3(v[A++],v[A++],v[A++],U);p.vec3d.subtract(T,I,V);p.vec3d.subtract(U,I,W);p.vec3d.cross(W,V,D);p.vec3d.normalize(D,D);H(e,d,b,a,F,C,r);H(e,d,b,a,F,l,f);H(e,d,b,a,F,y,t);H(e,d,b,a,F,g,u);k[m++]=C;k[m++]=y;k[m++]=g;k[m++]=C;k[m++]=g;k[m++]=l;r++;f++;t++;u++;C+=2;l+=2;y+=2;g+=2}}var J=p.vec3d.create(),t=p.vec3d.create(),Q=[0,2,1],R=[0,1,2],M=new ba,X={verticalDistanceToGround:0,terrainElevation:0};L=function(e){function d(){var a=null!==
e&&e.apply(this,arguments)||this;a._edgeStageObjects=new Set;return a}Z(d,e);d.prototype._prepareResources=function(){if(!this._isPropertyDriven("size")){var a=fa.validateSymbolLayerSize(this._getSymbolSize());if(a){this._logWarning(a);this.reject();return}}var a=this._getStageIdHint(),b=this._getMaterialOpacityAndColor(),c=p.vec3d.create(b),b=b[3],c={diffuse:c,ambient:c,opacity:b,transparent:1>b||this._isPropertyDriven("opacity"),vertexColors:!0,slicePlaneEnabled:this._context.slicePlaneEnabled};
this._material=new la(c,a+"_3dlinemat");this._context.stage.add(P.ModelContentType.MATERIAL,this._material);this.resolve()};d.prototype.destroy=function(){e.prototype.destroy.call(this);this.isFulfilled()||this.reject();this._material&&this._context.stage.remove(P.ModelContentType.MATERIAL,this._material.id)};d.prototype.createGraphics3DGraphic=function(a){var b=a.renderingInfo;a=a.graphic;var c=a.geometry;if("polygon"!==c.type&&"extent"!==c.type)return this._logWarning("unsupported geometry type for extrude symbol: "+
c.type),null;if(!this._validateGeometry(c))return null;var c="polygon"===c.type||"extent"===c.type?"rings":"paths",n="graphic"+a.uid,d=this._getVertexOpacityAndColor(b,Float32Array,255),e=this.getGraphicElevationContext(a);return this._createAs3DShape(a,c,b,d,e,n,a.uid)};d.prototype.layerPropertyChanged=function(a,b,c){if("opacity"===a){b=this._getMaterialOpacity();c=1>b||this._isPropertyDriven("opacity");this._material.setParameterValues({opacity:b,transparent:c});if(0<this._edgeStageObjects.size){var n=
this._context.stage.view.getEdgeView(),d=this._getLayerOpacity();this._edgeStageObjects.forEach(function(a){n.updateAllComponentOpacities(a,[d])})}return!0}if("elevationInfo"===a){this._updateElevationContext();for(var e in b){var k=b[e];if(a=c(k))k=this.getGraphicElevationContext(k.graphic),a.needsElevationUpdates=y.needsElevationUpdates3D(k.mode),a.elevationContext.set(k)}return!0}return!1};Object.defineProperty(d.prototype,"numberOfVertices",{get:function(){return 0},enumerable:!0,configurable:!0});
d.prototype._getExtrusionSize=function(a){a=a.size&&this._isPropertyDriven("size")?y.getSingleSizeDriver(a.size,2):this._getSymbolSize();return a/=this._context.renderCoordsHelper.unitInMeters};d.prototype._getSymbolSize=function(){return this.symbol.size||1};d.prototype._createAs3DShape=function(a,b,c,n,d,e,k){var h=this,g=a.geometry;"extent"===g.type&&(g=ca.fromExtent(g));a=g[b];var r=[],f=[],t=[],u=p.vec3d.create(),C=Array(6),l=this._context.renderSpatialReference===ha.SphericalECEFSpatialReference,
G=this._getExtrusionSize(c),q=p.vec3d.create();l||this._context.renderCoordsHelper.worldUpAtPosition(null,q);c=y.getGeometryVertexData3D(a,g.hasZ,g.spatialReference,this._context.renderSpatialReference,this._context.elevationProvider,this._context.renderCoordsHelper,d);this._logGeometryCreationWarnings(c,a,b,"ExtrudeSymbol3DLayer");if(0<a.length){var v=c.geometryData.polygons,w=c.eleVertexData,z=c.vertexData;b=z.length/3;var A=new Float64Array(18*b),D=new Float64Array(18*b),F=new Float64Array(18*
b),H=new Float64Array(6*b),N=0;b=function(a){var b=v[a],c=b.count,d=b.index;if(O._context.clippingExtent&&(y.computeBoundingBox(w,d,c,C),y.boundingBoxClipped(C,O._context.clippingExtent)))return"continue";var h=new Float64Array(w.buffer,3*d*A.BYTES_PER_ELEMENT,3*c),g=b.holeIndices.map(function(a){return a-d}),h=aa(h,g,3);if(0<h.length){y.chooseOrigin(z,d,c,u);var g=new Uint32Array(6*c+2*h.length),k=6*c,m=new Float64Array(A.buffer,3*N*A.BYTES_PER_ELEMENT,3*k),x=new Float64Array(D.buffer,3*N*D.BYTES_PER_ELEMENT,
3*k),B=new Float64Array(F.buffer,3*N*F.BYTES_PER_ELEMENT,3*k),Y=new Float64Array(H.buffer,1*N*H.BYTES_PER_ELEMENT,1*k);ma(z,w,h,b,m,B,x,Y,0,g,0,G,q,l);y.subtractCoordinates(m,0,k,u);N+=6*c;b=O._createExtrudeGeometry(g,{positions:m,elevation:B,normals:x,heights:Y},n);a=new ia(b,e+"path"+a);a.singleUse=!0;r.push(a);f.push([O._material]);a=p.mat4d.identity();p.mat4d.translate(a,u,a);t.push(a)}};var O=this;for(a=0;a<v.length;++a)b(a);if(0<r.length){var I=new ka({geometries:r,materials:f,transformations:t,
castShadow:!0,metadata:{layerUid:this._context.layer.uid,graphicUid:k},idHint:e}),L=function(a){var b=h._context.stage.view.getEdgeView();if(b){b.removeObject(a);h._edgeStageObjects.delete(a);var c={opacity:h._getLayerOpacity(),slicePlaneEnabled:h._context.slicePlaneEnabled};if(c=ga.createMaterial(b,h.symbol,c))h._edgeStageObjects.add(a),b.addObject(a,[c])}};L(I);k=new da(this,I,r,null,null,function(a,b,c,d){a=a.stageObject;var n=d.setAltitude;M.spatialReference=c.spatialReference;for(var e=a.getGeometryRecords(),
h=e.length,g="absolute-height"!==b.mode,l=0,k=0;k<h;k++){var f=e[k].geometry,q=e[k].transformation;E[0]=q[12];E[1]=q[13];E[2]=q[14];f.invalidateBoundingInfo();for(var p=f.data.getVertexAttr(),f=p[B.VertexAttrConstants.POSITION].data,q=p[B.VertexAttrConstants.SIZE].data,p=p.mapPos.data,t=f.length/3,m=0,r=0,v=!1,w=0,x=0;x<t;x++){M.x=p[r];M.y=p[r+1];M.z=p[r+2];K[0]=f[m];K[1]=f[m+1];K[2]=f[m+2];var u=y.computeElevation(c,M,b,d,g?X:null);g&&(w+=X.terrainElevation);J[0]=f[m]+E[0];J[1]=f[m+1]+E[1];J[2]=
f[m+2]+E[2];n(u+q[m/3],J);f[m]=J[0]-E[0];f[m+1]=J[1]-E[1];f[m+2]=J[2]-E[2];u=.01/d.unitInMeters;if(Math.abs(K[0]-f[m])>u||Math.abs(K[1]-f[m+1])>u||Math.abs(K[2]-f[m+2])>u)v=!0;r+=3;m+=3}v&&a.geometryVertexAttrsUpdated(k);l+=w/t}b=l/h;L(I);return b},d);k.alignedTerrainElevation=c.terrainElevation;k.needsElevationUpdates=y.needsElevationUpdates3D(d.mode);return k}}return null};d.prototype._createExtrudeGeometry=function(a,b,c){for(var d=a.length,e=new Uint32Array(d),g=0;g<d;g++)e[g]=0;d={};g={};d[B.VertexAttrConstants.POSITION]=
a;d[B.VertexAttrConstants.NORMAL]=a;d[B.VertexAttrConstants.COLOR]=e;g[B.VertexAttrConstants.POSITION]={size:3,data:b.positions};g[B.VertexAttrConstants.NORMAL]={size:3,data:b.normals};g[B.VertexAttrConstants.COLOR]={size:4,data:c};g[B.VertexAttrConstants.SIZE]={size:1,data:b.heights};b.elevation&&(g.mapPos={size:3,data:b.elevation},d.mapPos=a);return new ja(g,d)};return d}(ea);var F=p.vec3d.create(),I=p.vec3d.create(),T=p.vec3d.create(),U=p.vec3d.create(),V=p.vec3d.create(),W=p.vec3d.create(),K=
p.vec3d.create(),E=p.vec3d.create();return L});