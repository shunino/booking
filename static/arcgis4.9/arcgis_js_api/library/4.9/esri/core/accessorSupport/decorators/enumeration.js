// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../../kebabDictionary","./property"],function(e,a,b,c){function d(a){return c.property({type:a})}Object.defineProperty(a,"__esModule",{value:!0});a.enumeration=d;(function(a){a.serializable=function(){return function(a){a=a instanceof b.KebabDictionary?a:new b.KebabDictionary(a,{ignoreUnknown:!0});return c.property({type:a.apiValues,json:{type:a.jsonValues,read:{reader:a.read},write:{writer:a.write}}})}}})(d=a.enumeration||(a.enumeration={}))});