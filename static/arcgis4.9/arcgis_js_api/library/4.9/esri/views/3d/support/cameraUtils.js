// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../Camera ../../../config ../../../core/Logger ../../../core/promiseUtils ../../../geometry/Point ../../../geometry/SpatialReference ../../../geometry/support/scaleUtils ../../../geometry/support/webMercatorUtils ../camera/intersectionUtils ../lib/gl-matrix ./cameraUtilsPlanar ./cameraUtilsSpherical ./earthUtils ./mathUtils ./projectionUtils ../webgl-engine/lib/Camera".split(" "),function(da,h,ea,I,J,S,C,q,r,T,D,U,m,K,L,y,w,n,V){function t(a){return"global"===
a.viewingMode?L:K}function M(a,b,c){var d=a.renderSpatialReference,e=m.vec3d.set(b.viewForward,W),e=N(a,b.eye,e,b.up,X);a=a.spatialReference||r.WGS84;n.vectorToVector(b.eye,d,u,a)||(a=r.WGS84,n.vectorToVector(b.eye,d,u,a));return c?(c.position.x=u[0],c.position.y=u[1],c.position.z=u[2],c.position.spatialReference=a,c.heading=e.heading,c.tilt=e.tilt,c.fov=w.rad2deg(b.fov),c):new I(new q(u,a),e.heading,e.tilt,w.rad2deg(b.fov))}function O(a,b,c){var d=a.state.camera,e=d.fovX,d=d.width/2;"global"===a.viewingMode&&
null!=c&&(b*=Math.cos(w.deg2rad(c)));b/=a.renderCoordsHelper.unitInMeters;return d/(39.37*J.screenDPI/b)/Math.tan(e/2)}function P(a,b,c){var d=a.state.camera;b=39.37*J.screenDPI/(d.width/2/(b*Math.tan(d.fovX/2)));"global"===a.viewingMode&&(b/=Math.cos(w.deg2rad(c)));return b*=a.renderCoordsHelper.unitInMeters}function Q(a,b,c,d,e,f){if(v(f)){var g=C.createResolver();z(a,d.heading,d.tilt,b,c,e,g);g.promise.then(function(b){return f.resolve(A(a,b,d.fov))})}else return g={center:[],eye:[],up:[],tilt:0,
heading:0},z(a,d.heading,d.tilt,b,c,e,g),A(a,g,d.fov,f)}function N(a,b,c,d,e){return t(a).directionToHeadingTilt(b,c,d,e)}function Y(a,b,c){return a.basemapTerrain&&a.renderCoordsHelper.fromRenderCoords(b,x,a.spatialReference)&&a.basemapTerrain.getElevation(x)>x.z-1}function Z(a,b,c){return a.renderCoordsHelper.fromRenderCoords(b,x,a.spatialReference)?a.elevationProvider.queryElevation(x).then(function(a){return a>x.z-10}):C.resolve(!1)}function aa(a,b){var c=m.vec3d.create();if(b&&b instanceof q){if(n.pointToVector(b,
c,a.renderSpatialReference),null==b.z&&null!=a.basemapTerrain)return a.elevationProvider.queryElevation(b).then(function(b){null!=b&&a.renderCoordsHelper.setAltitude(b,c);return c})}else b?m.vec3d.set(b,c):m.vec3d.set(a.state.camera.center,c);return C.resolve(c)}function ba(a,b){var c=m.vec3d.create();b&&b instanceof q?(n.pointToVector(b,c,a.renderSpatialReference),null==b.z&&null!=a.basemapTerrain&&(b=a.elevationProvider.getElevation(b),null!=b&&a.renderCoordsHelper.setAltitude(b,c))):b?m.vec3d.set(b,
c):m.vec3d.set(a.state.camera.center,c);return c}function z(a,b,c,d,e,f,g){var p=d&&d instanceof q?d:null;if(v(g))aa(a,d).then(function(d){G(a,b,c,p,d,e,f,g)});else return d=ba(a,d),G(a,b,c,p,d,e,f,g)}function G(a,b,c,d,e,f,g,p){d||(d=n.vectorToPoint(e,a.renderSpatialReference,a.spatialReference||r.WGS84));f=Math.max(f,a.state.constraints.minimumPoiDistance);var k=ca(a,b,c,e,f,g),h=t(a).eyeForCenterWithHeadingTilt,l=h(e,f,k.heading,k.tilt);if(g===B.ADJUST&&"global"===a.viewingMode&&0<c){var m=function(){var k=
f,l=f,h=a.state.constraints.tilt(l),l=t(a).eyeTiltToLookAtTilt(e,l,c),l=Math.min(l,.5*Math.PI),h=h.min*(1-E)+l*E,k=t(a).lookAtTiltToEyeTilt(e,k,h);g=1>c-k?B.LOCKED:B.ADJUST;return G(a,b,k,d,e,f,g,p)};if(Y(a,l.eye,l.tilt))return m();if(v(p)){Z(a,l.eye,l.tilt).then(function(a){if(a)return m();p.resolve({eye:l.eye,up:l.up,center:e,heading:l.heading,tilt:l.tilt})});return}}k={center:[],eye:[],up:[],tilt:0,heading:0};p&&!v(p)&&(k=p);k.eye=l.eye;k.up=l.up;k.center=e;k.heading=l.heading;k.tilt=l.tilt;v(p)&&
p.resolve(k);return k}function ca(a,b,c,d,e,f){var g=0;if(f=f===B.ADJUST)if(g=a.pointsOfInterest.centerOnSurfaceFrequent.distance,8<Math.log(e/g)/Math.LN2)f=!0;else{var h=a.renderSpatialReference,k=a.spatialReference||r.WGS84;f=n.vectorToPoint(d,h,k);h=n.vectorToPoint(a.state.camera.center,h,k);g*=Math.tan(.5*a.state.camera.fov);f=5<h.distance(f)/g}f?(b=0,f=a.state.constraints.tilt(e),f.max=Math.min(f.max,.5*Math.PI),f=f.min*(1-E)+f.max*E,c=t(a).eyeTiltToLookAtTilt(d,e,c),g=Math.min(c,f)):g=t(a).eyeTiltToLookAtTilt(d,
e,c);c=g=a.state.constraints.clampTilt(e,g);c=t(a).lookAtTiltToEyeTilt(d,e,c);return{heading:b,tilt:c}}function A(a,b,c,d){a=n.vectorToPoint(b.eye,a.renderSpatialReference,a.spatialReference||r.WGS84);return a?d?(d.position=a,d.heading=b.heading,d.tilt=b.tilt,d.fov=c,d):new I(a,b.heading,b.tilt,c):null}function v(a){return a&&a.resolve&&a.reject}Object.defineProperty(h,"__esModule",{value:!0});var R=S.getLogger("esri.views.3d.support.cameraUtils"),u=m.vec3d.create(),F=m.vec3d.create(),W=m.vec3d.create(),
X={heading:0,tilt:0},x=new q,H=new w.Cyclical(-2.0037508342788905E7,2.0037508342788905E7),B;(function(a){a[a.LOCKED=0]="LOCKED";a[a.ADJUST=1]="ADJUST"})(B=h.OrientationMode||(h.OrientationMode={}));h.headingTiltToDirectionUp=function(a,b,c,d,e){return t(a).headingTiltToDirectionUp(b,c,d,e)};h.externalToInternal=function(a,b){var c=a.renderSpatialReference,d=t(a).headingTiltToDirectionUp,e=m.vec3d.create();if(!n.pointToVector(b.position,e,c))return null;c=d(e,b.heading,b.tilt);m.vec3d.add(c.direction,
e);a=U.cameraOnContentAlongViewDirection(a,e,c.direction,c.up);a.fov=w.deg2rad(b.fov);return a};h.internalToExternal=M;h.scaleToDistance=O;h.distanceToScale=P;h.fromCenterScale=function(a,b,c,d,e,f){c=O(a,c,b.latitude);return Q(a,b,c,d,e,f)};h.fromCenterDistance=Q;h.directionToHeadingTilt=N;h.getObserverForPointAtDistance=z;h.fromExtent=function(a,b,c,d,e,f){var g,h=0;null!=b.zmax&&null!=b.zmin&&(g=(b.zmax+b.zmin)/2,h=b.zmax-b.zmin);var k,m;if("global"===a.viewingMode){k=r.WebMercator;m=b.spatialReference||
k;var l=new q(b.xmin,b.ymin,m),n=new q(b.xmax,b.ymax,m),l=D.project(l,k),n=D.project(n,k);if(null===l||null===n){v(f)&&f.reject();return}b=new q(H.center(l.x,n.x),(n.y+l.y)/2,k);null!=g&&(b.z=g);g=y.getGreatCircleSpanAt(b,l,n);k=g.lon;m=g.lat;H.diff(l.x,n.x)>H.range/2&&(k+=y.halfEarthCircumference);k=Math.min(k,y.halfEarthCircumference);m=Math.min(m,y.halfEarthCircumference)}else l=a.spatialReference||r.WGS84,D.canProject(b,l)&&(b=D.project(b,l)),k=b.xmax-b.xmin,m=b.ymax-b.ymin,b=new q({x:b.xmin+
.5*k,y:b.ymin+.5*m,z:g,spatialReference:l});g=a.state.camera;h=Math.max(1/Math.tan(g.fovX/2)*k*.5,1/Math.tan(g.fovY/2)*m*.5,1/Math.tan(g.fov/2)*h*.5)/1;if(v(f))g=C.createResolver(),z(a,c,d,b,h,e,g),g.promise.then(function(b){return f.resolve(A(a,b,a.camera.fov))});else return g={center:[],eye:[],up:[],tilt:0,heading:0},z(a,c,d,b,h,e,g),A(a,g,a.camera.fov,f)};h.toExtent=function(a,b,c,d,e){b||(c||(c=a.state.camera),b=M(a,c,e));e=a.renderSpatialReference;var f;if(c)e=n.vectorToPoint(c.center,e,a.spatialReference||
r.WGS84),f=c.distance;else{e=a.toMap(a.screenCenter);if(!e)return null;f=y.computeCarthesianDistance(b.position,e)}c||(c=a.state.camera);b=2*f*Math.tan(c.fovX/2)*1;c=2*f*Math.tan(c.fovY/2)*1;return"global"===a.viewingMode?L.toExtent(a,e,b,c,d):K.toExtent(a,e,b,c,d)};var E=.7;h.observerToCamera=A;h.scaleToZoom=function(a,b){if(a=a.basemapTerrain&&a.basemapTerrain.tilingScheme)return a.levelAtScale(b);R.error("#scaleToZoom()","Cannot compute zoom from scale without a tiling scheme")};h.zoomToScale=
function(a,b){if(a=a.basemapTerrain&&a.basemapTerrain.tilingScheme)return a.scaleAtLevel(b);R.error("#zoomToScale()","Cannot compute scale from zoom without a tiling scheme")};h.scaleToResolution=function(a,b){return a.spatialReference?T.getResolutionForScale(b,a.spatialReference):void 0};h.computeScale=function(a,b,c){var d=a.renderSpatialReference;b||(b=a.state.camera);var e;e=r.WGS84;b instanceof V?(n.vectorToVector(b.center,d,F,e),e=F[1],b=b.distance):(e=b.position.latitude,n.pointToVector(b.position,
u,d),n.pointToVector(c,F,d),b=m.vec3d.dist(u,F));return P(a,b,e)}});