!function(){"use strict";var t="/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"rc-gantt","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.ab2460a1.async.js",9],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.b944af96.async.js",65],["website__index.en-US.md.f2f1d93a.async.js",85],["website__index.md.64104f47.async.js",286],["website__component.md.3789ed69.async.js",298],["website__component.en-US.md.d66e0dca.async.js",479],["nm__dumi__theme-default__layouts__DocLayout__index.d672c094.async.js",519],["665.e8c51481.chunk.css",665],["665.80fdd499.async.js",665],["dumi__tmp-production__dumi__theme__ContextWrapper.22bdc225.async.js",923]],"r":{"/*":[2,3,8,9,10,11],"/":[5,8,9,10,11],"/component":[6,8,9,10,11],"/en-US/":[4,8,9,10,11],"/~demos/:id":[0,1,11],"/en-US/component":[7,8,9,10,11]}},{publicPath:"/react-gantt/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();