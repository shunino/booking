// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../intersectionUtils","../../lib/gl-matrix"],function(m,h,l,d){Object.defineProperty(h,"__esModule",{value:!0});h.apply=function(e,b,f,a){void 0===f&&(f=0);void 0===a&&(a=b);var c=e.state.constraints;b!==a&&a.copyFrom(b);if(!c.collision.enabled)return!1;var g=l.surfaceElevationBelowEye(e,b);b=e.renderCoordsHelper.getAltitude(b.eye);c=g+c.collision.elevationMargin;if(b>=c)return!1;g=d.vec3d.length(a.eye);d.vec3d.subtract(a.center,a.eye,k);e.renderCoordsHelper.setAltitude(c,
a.eye);1===f?d.vec3d.add(a.eye,k,a.center):2===f&&d.vec3d.scale(a.center,(g-b+c)/g);a.markViewDirty();return!0};var k=d.vec3d.create()});