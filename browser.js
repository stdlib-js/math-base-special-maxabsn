// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";function e(e){return Math.abs(e)}var n=Number.POSITIVE_INFINITY;function r(e){return 0===e&&1/e===n}function t(e){return e!=e}var u=Number.NEGATIVE_INFINITY;function f(e,f){var i,o,a,l;if(2===(i=arguments.length))return t(e)||t(f)?NaN:e===n||f===n?n:e===f&&0===e?r(e)?e:f:e>f?e:f;for(o=u,l=0;l<i;l++){if(t(a=arguments[l])||a===n)return a;(a>o||a===o&&0===a&&r(a))&&(o=a)}return o}return function(r,t){var u,i,o;if(0===(u=arguments.length))return n;if(2===u)return f(e(r),e(t));for(i=[],o=0;o<u;o++)i.push(e(arguments[o]));return f.apply(null,i)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).maxabsn=n();
//# sourceMappingURL=browser.js.map