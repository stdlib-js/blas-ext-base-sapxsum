// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(t){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,i=n.__lookupSetter__,f=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var f,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(l.call(t,e)||i.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),y="get"in r,p="set"in r,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(t,e,r.get),p&&u&&u.call(t,e,r.set),t};function c(t,e,r){f(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y="function"==typeof Math.fround?Math.fround:null,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),b=Object.prototype.toString,d=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",s=p&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n,o,a;if(null==t)return b.call(t);r=t[_],a=_,e=null!=(o=t)&&d.call(o,a);try{t[_]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[_]=r:delete t[_],n}:function(t){return b.call(t)},m="function"==typeof Float32Array,v=Number.POSITIVE_INFINITY,g="function"==typeof Float32Array?Float32Array:null,h="function"==typeof Float32Array?Float32Array:void 0,j=new(function(){var t,e,r;if("function"!=typeof g)return!1;try{e=new g([1,3.14,-3.14,5e40]),r=e,t=(m&&r instanceof Float32Array||"[object Float32Array]"===s(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===v}catch(e){t=!1}return t}()?h:function(){throw new Error("not implemented")})(1),w="function"==typeof y?y:function(t){return j[0]=t,j[0]};function S(t){return Math.abs(t)}function A(t,e,r,n){var o,a,u,l,i,f;if(t<=0)return 0;if(1===t||0===n)return w(e+r[0]);for(a=n<0?(1-t)*n:0,o=0,i=0,f=0;f<t;f++)u=w(e+r[a]),l=w(o+u),i=S(o)>=S(u)?w(i+w(w(o-l)+u)):w(i+w(w(u-l)+o)),o=l,a+=n;return w(o+i)}function F(t,e,r,n,o){var a,u,l,i,f,c;if(t<=0)return 0;if(1===t||0===n)return w(e+r[o]);for(u=o,a=0,f=0,c=0;c<t;c++)l=w(e+r[u]),i=w(a+l),f=S(a)>=S(l)?w(f+w(w(a-i)+l)):w(f+w(w(l-i)+a)),a=i,u+=n;return w(a+f)}function O(t,e,r,n){return A(t,e,r,n)}function T(t,e,r,n,o){return F(t,e,r,n,o)}c(A,"ndarray",F),c(O,"ndarray",T),t.default=O,t.ndarray=T,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).sapxsum={});
//# sourceMappingURL=browser.js.map